import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.80.0',
  typescriptVersion: '5.7.x',
  jsiiVersion: '5.7.x',
  defaultReleaseBranch: 'main',
  name: '@gammarers/aws-log-glue-tables',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/gammarers/aws-log-glue-tables.git',
  releaseToNpm: false, // tmp
  npmAccess: javascript.NpmAccess.PUBLIC,
  minNodeVersion: '18.0.0',
  workflowNodeVersion: '22.x',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['2 16 * * 2']), // every monday
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
});
project.synth();