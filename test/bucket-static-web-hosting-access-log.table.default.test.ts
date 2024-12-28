import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as glue from 'aws-cdk-lib/aws-glue';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { BucketStaticWebHostingAccessLogTable } from '../src';

describe('BucketStaticWebHostingAccessLogTable default Testing', () => {

  const app = new App();
  const stack = new Stack(app, 'TestingStack');

  const bucket = new s3.Bucket(stack, 'LogBucket');

  const databaseName = 'example-database';

  const tableName = 'example-bucket-access-log-table';

  const table = new BucketStaticWebHostingAccessLogTable(stack, 'BucketStaticWebHostingAccessLogTable', {
    logBucket: bucket,
    glueDatabaseName: databaseName,
    glueTableName: tableName,
    location: 'path/to/location',
    timestampRage: {
      start: '2024/11/01',
    },
  });

  it('Is Glue Table', () => {
    expect(table.glueTable).toBeInstanceOf(glue.CfnTable);
  });

  const template = Template.fromStack(stack);

  it('Should match snapshot', () => {
    expect(template.toJSON()).toMatchSnapshot();
  });
});