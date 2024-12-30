import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as glue from 'aws-cdk-lib/aws-glue';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { CloudFrontAccessLogTable } from '../src';

describe('CloudFrontAccessLogTable default Testing', () => {

  const app = new App();
  const stack = new Stack(app, 'TestingStack');

  const bucket = new s3.Bucket(stack, 'LogBucket');

  const databaseName = 'example-database';

  const tableName = 'example-cloudfront-access-log-table';

  const table = new CloudFrontAccessLogTable(stack, 'CloudFrontAccessLogTable', {
    logBucket: bucket,
    glueDatabaseName: databaseName,
    glueTableName: tableName,
    location: 'path/to/location',
    timestamp: {
      range: {
        start: '2024/11/01',
      },
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