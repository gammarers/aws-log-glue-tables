import { Stack } from 'aws-cdk-lib';
import * as glue from 'aws-cdk-lib/aws-glue';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export interface BucketStaticWebHostingAccessLogTableTimestampRange {
  readonly start: string;
  readonly end?: string;
}

export interface BucketStaticWebHostingAccessLogTableProps {
  readonly account?: string;
  readonly logBucket: s3.Bucket;
  readonly glueDatabaseName: string;
  readonly glueTableName: string;
  readonly location: string;
  readonly timestampRage: BucketStaticWebHostingAccessLogTableTimestampRange;
}

export class BucketStaticWebHostingAccessLogTable extends Construct {

  public glueTable: glue.CfnTable;

  constructor(scope: Construct, id: string, props: BucketStaticWebHostingAccessLogTableProps ) {
    super(scope, id);

    const account = Stack.of(this).account;

    // Glueのテーブルを作成
    this.glueTable = new glue.CfnTable(this, 'AccessLogGlueTable', {
      catalogId: props.account || account,
      databaseName: props.glueDatabaseName,
      tableInput: {
        name: props.glueTableName,
        partitionKeys: [
          {
            name: 'timestamp',
            type: 'string',
          },
        ],
        parameters: {
          'projection.enabled': 'true',
          'projection.timestamp.format': 'yyyy/MM/dd',
          'projection.timestamp.range': (() => {
            const end = props.timestampRage.end || 'NOW';
            return `${props.timestampRage.start},${end}`;
          })(),
          'projection.timestamp.type': 'date',
          'storage.location.template': `s3://${props.logBucket.bucketName}/${props.location}/\${timestamp}/`,
        },
        storageDescriptor: {
          columns: [
            { name: 'bucket_owner', type: 'string' },
            { name: 'bucket_name', type: 'string' },
            { name: 'request_date_time', type: 'string' },
            { name: 'remote_ip', type: 'string' },
            { name: 'requester', type: 'string' },
            { name: 'request_id', type: 'string' },
            { name: 'operation', type: 'string' },
            { name: 'key', type: 'string' },
            { name: 'request_uri', type: 'string' },
            { name: 'http_status', type: 'string' },
            { name: 'errorcode', type: 'string' },
            { name: 'bytessent', type: 'bigint' },
            { name: 'object_size', type: 'bigint' },
            { name: 'total_time', type: 'string' },
            { name: 'turn_around_time', type: 'string' },
            { name: 'referrer', type: 'string' },
            { name: 'user_agent', type: 'string' },
            { name: 'version_id', type: 'string' },
          ],
          location: `s3://${props.logBucket.bucketName}/${props.location}/`,
          inputFormat: 'org.apache.hadoop.mapred.TextInputFormat',
          outputFormat: 'org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat',
          serdeInfo: {
            serializationLibrary: 'org.apache.hadoop.hive.serde2.RegexSerDe',
            parameters: {
              'input.regex': '([^ ]*) ([^ ]*) \\[(.*?)\\] ([^ ]*) ([^ ]*) ([^ ]*) ([^ ]*) ([^ ]*) (\"[^\"]*\"|-) (-|[0-9]*) ([^ ]*) ([^ ]*) ([^ ]*) ([^ ]*) ([^ ]*) ([^ ]*) (\"[^\"]*\"|-) ([^ ]*)(?: ([^ ]*) ([^ ]*) ([^ ]*) ([^ ]*) ([^ ]*) ([^ ]*) ([^ ]*) ([^ ]*))?.*$',
            },
          },
        },
        tableType: 'EXTERNAL_TABLE',
      },
    });
  }
}