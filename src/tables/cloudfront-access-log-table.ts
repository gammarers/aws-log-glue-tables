import { Stack } from 'aws-cdk-lib';
import * as glue from 'aws-cdk-lib/aws-glue';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { GlueProjection } from '../glue-projection';

export interface CloudFrontAccessLogTableProps {
  readonly account?: string;
  readonly logBucket: s3.Bucket;
  readonly glueDatabaseName: string;
  readonly glueTableName: string;
  readonly location: string;
  readonly timestamp: GlueProjection.Timestamp;
}

export class CloudFrontAccessLogTable extends Construct {

  public glueTable: glue.CfnTable;

  constructor(scope: Construct, id: string, props: CloudFrontAccessLogTableProps ) {
    super(scope, id);

    const account = Stack.of(this).account;

    // Glueのテーブルを作成
    this.glueTable = new glue.CfnTable(this, 'CloudFrontAccessLogGlueTable', {
      catalogId: props.account || account,
      databaseName: props.glueDatabaseName,
      tableInput: {
        name: props.glueTableName,
        tableType: 'EXTERNAL_TABLE',
        partitionKeys: [
          {
            name: 'timestamp',
            type: 'string',
          },
        ],
        parameters: {
          'classification': 'cloudfront',
          'skip.header.line.count': '2',
          'projection.enabled': 'true',
          'projection.timestamp.format': 'yyyy/MM/dd',
          'projection.timestamp.range': (() => {
            const end = props.timestamp.range.end || 'NOW';
            return `${props.timestamp.range.start},${end}`;
          })(),
          'projection.timestamp.type': 'date',
          'storage.location.template': `s3://${props.logBucket.bucketName}/${props.location}/\${timestamp}/`,
        },
        storageDescriptor: {
          columns: [
            { name: 'date', type: 'date' },
            { name: 'time', type: 'string' },
            { name: 'x_edge_location', type: 'string' },
            { name: 'sc_bytes', type: 'bigint' },
            { name: 'c_ip', type: 'string' },
            { name: 'cs_method', type: 'string' },
            { name: 'cs_host', type: 'string' },
            { name: 'cs_uri_stem', type: 'string' },
            { name: 'sc_status', type: 'int' },
            { name: 'cs_referrer', type: 'string' },
            { name: 'cs_user_agent', type: 'string' },
            { name: 'cs_uri_query', type: 'string' },
            { name: 'cs_cookie', type: 'string' },
            { name: 'x_edge_result_type', type: 'string' },
            { name: 'x_edge_request_id', type: 'string' },
            { name: 'x_host_header', type: 'string' },
            { name: 'cs_protocol', type: 'string' },
            { name: 'cs_bytes', type: 'bigint' },
            { name: 'time_taken', type: 'float' },
            { name: 'x_forwarded_for', type: 'string' },
            { name: 'ssl_protocol', type: 'string' },
            { name: 'ssl_cipher', type: 'string' },
            { name: 'x_edge_response_result_type', type: 'string' },
            { name: 'cs_protocol_version', type: 'string' },
            { name: 'fle_status', type: 'string' },
            { name: 'fle_encrypted_fields', type: 'int' },
            { name: 'c_port', type: 'int' },
            { name: 'time_to_first_byte', type: 'float' },
            { name: 'x_edge_detailed_result_type', type: 'string' },
            { name: 'sc_content_type', type: 'string' },
            { name: 'sc_content_len', type: 'bigint' },
            { name: 'sc_range_start', type: 'bigint' },
            { name: 'sc_range_end', type: 'bigint' },
          ],
          location: `s3://${props.logBucket.bucketName}/${props.location}/`,
          inputFormat: 'org.apache.hadoop.mapred.TextInputFormat',
          outputFormat: 'org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat',
          serdeInfo: {
            serializationLibrary: 'org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe',
            parameters: {
              'field.delim': '\t',
            },
          },
        },
      },
    });
  }
}