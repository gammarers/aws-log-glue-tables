# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BucketStaticWebHostingAccessLogTable <a name="BucketStaticWebHostingAccessLogTable" id="@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTable"></a>

#### Initializers <a name="Initializers" id="@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTable.Initializer"></a>

```typescript
import { BucketStaticWebHostingAccessLogTable } from '@gammarers/aws-log-glue-tables'

new BucketStaticWebHostingAccessLogTable(scope: Construct, id: string, props: BucketStaticWebHostingAccessLogTableProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTable.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTable.Initializer.parameter.props">props</a></code> | <code><a href="#@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTableProps">BucketStaticWebHostingAccessLogTableProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTable.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTable.Initializer.parameter.props"></a>

- *Type:* <a href="#@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTableProps">BucketStaticWebHostingAccessLogTableProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTable.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTable.isConstruct"></a>

```typescript
import { BucketStaticWebHostingAccessLogTable } from '@gammarers/aws-log-glue-tables'

BucketStaticWebHostingAccessLogTable.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTable.property.glueTable">glueTable</a></code> | <code>aws-cdk-lib.aws_glue.CfnTable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `glueTable`<sup>Required</sup> <a name="glueTable" id="@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTable.property.glueTable"></a>

```typescript
public readonly glueTable: CfnTable;
```

- *Type:* aws-cdk-lib.aws_glue.CfnTable

---


### CloudFrontAccessLogTable <a name="CloudFrontAccessLogTable" id="@gammarers/aws-log-glue-tables.CloudFrontAccessLogTable"></a>

#### Initializers <a name="Initializers" id="@gammarers/aws-log-glue-tables.CloudFrontAccessLogTable.Initializer"></a>

```typescript
import { CloudFrontAccessLogTable } from '@gammarers/aws-log-glue-tables'

new CloudFrontAccessLogTable(scope: Construct, id: string, props: CloudFrontAccessLogTableProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-log-glue-tables.CloudFrontAccessLogTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@gammarers/aws-log-glue-tables.CloudFrontAccessLogTable.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-log-glue-tables.CloudFrontAccessLogTable.Initializer.parameter.props">props</a></code> | <code><a href="#@gammarers/aws-log-glue-tables.CloudFrontAccessLogTableProps">CloudFrontAccessLogTableProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@gammarers/aws-log-glue-tables.CloudFrontAccessLogTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@gammarers/aws-log-glue-tables.CloudFrontAccessLogTable.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@gammarers/aws-log-glue-tables.CloudFrontAccessLogTable.Initializer.parameter.props"></a>

- *Type:* <a href="#@gammarers/aws-log-glue-tables.CloudFrontAccessLogTableProps">CloudFrontAccessLogTableProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-log-glue-tables.CloudFrontAccessLogTable.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@gammarers/aws-log-glue-tables.CloudFrontAccessLogTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-log-glue-tables.CloudFrontAccessLogTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@gammarers/aws-log-glue-tables.CloudFrontAccessLogTable.isConstruct"></a>

```typescript
import { CloudFrontAccessLogTable } from '@gammarers/aws-log-glue-tables'

CloudFrontAccessLogTable.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@gammarers/aws-log-glue-tables.CloudFrontAccessLogTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-log-glue-tables.CloudFrontAccessLogTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@gammarers/aws-log-glue-tables.CloudFrontAccessLogTable.property.glueTable">glueTable</a></code> | <code>aws-cdk-lib.aws_glue.CfnTable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@gammarers/aws-log-glue-tables.CloudFrontAccessLogTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `glueTable`<sup>Required</sup> <a name="glueTable" id="@gammarers/aws-log-glue-tables.CloudFrontAccessLogTable.property.glueTable"></a>

```typescript
public readonly glueTable: CfnTable;
```

- *Type:* aws-cdk-lib.aws_glue.CfnTable

---


## Structs <a name="Structs" id="Structs"></a>

### BucketStaticWebHostingAccessLogTableProps <a name="BucketStaticWebHostingAccessLogTableProps" id="@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTableProps"></a>

#### Initializer <a name="Initializer" id="@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTableProps.Initializer"></a>

```typescript
import { BucketStaticWebHostingAccessLogTableProps } from '@gammarers/aws-log-glue-tables'

const bucketStaticWebHostingAccessLogTableProps: BucketStaticWebHostingAccessLogTableProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTableProps.property.glueDatabaseName">glueDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTableProps.property.glueTableName">glueTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTableProps.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTableProps.property.logBucket">logBucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | *No description.* |
| <code><a href="#@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTableProps.property.timestampRage">timestampRage</a></code> | <code><a href="#@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTableTimestampRange">BucketStaticWebHostingAccessLogTableTimestampRange</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTableProps.property.account">account</a></code> | <code>string</code> | *No description.* |

---

##### `glueDatabaseName`<sup>Required</sup> <a name="glueDatabaseName" id="@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTableProps.property.glueDatabaseName"></a>

```typescript
public readonly glueDatabaseName: string;
```

- *Type:* string

---

##### `glueTableName`<sup>Required</sup> <a name="glueTableName" id="@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTableProps.property.glueTableName"></a>

```typescript
public readonly glueTableName: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTableProps.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `logBucket`<sup>Required</sup> <a name="logBucket" id="@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTableProps.property.logBucket"></a>

```typescript
public readonly logBucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

---

##### `timestampRage`<sup>Required</sup> <a name="timestampRage" id="@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTableProps.property.timestampRage"></a>

```typescript
public readonly timestampRage: BucketStaticWebHostingAccessLogTableTimestampRange;
```

- *Type:* <a href="#@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTableTimestampRange">BucketStaticWebHostingAccessLogTableTimestampRange</a>

---

##### `account`<sup>Optional</sup> <a name="account" id="@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTableProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

---

### BucketStaticWebHostingAccessLogTableTimestampRange <a name="BucketStaticWebHostingAccessLogTableTimestampRange" id="@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTableTimestampRange"></a>

#### Initializer <a name="Initializer" id="@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTableTimestampRange.Initializer"></a>

```typescript
import { BucketStaticWebHostingAccessLogTableTimestampRange } from '@gammarers/aws-log-glue-tables'

const bucketStaticWebHostingAccessLogTableTimestampRange: BucketStaticWebHostingAccessLogTableTimestampRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTableTimestampRange.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTableTimestampRange.property.end">end</a></code> | <code>string</code> | *No description.* |

---

##### `start`<sup>Required</sup> <a name="start" id="@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTableTimestampRange.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `end`<sup>Optional</sup> <a name="end" id="@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTableTimestampRange.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

### CloudFrontAccessLogTableProps <a name="CloudFrontAccessLogTableProps" id="@gammarers/aws-log-glue-tables.CloudFrontAccessLogTableProps"></a>

#### Initializer <a name="Initializer" id="@gammarers/aws-log-glue-tables.CloudFrontAccessLogTableProps.Initializer"></a>

```typescript
import { CloudFrontAccessLogTableProps } from '@gammarers/aws-log-glue-tables'

const cloudFrontAccessLogTableProps: CloudFrontAccessLogTableProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-log-glue-tables.CloudFrontAccessLogTableProps.property.glueDatabaseName">glueDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-log-glue-tables.CloudFrontAccessLogTableProps.property.glueTableName">glueTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-log-glue-tables.CloudFrontAccessLogTableProps.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-log-glue-tables.CloudFrontAccessLogTableProps.property.logBucket">logBucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | *No description.* |
| <code><a href="#@gammarers/aws-log-glue-tables.CloudFrontAccessLogTableProps.property.timestamp">timestamp</a></code> | <code>@gammarers/aws-log-glue-tables.GlueProjection.Timestamp</code> | *No description.* |
| <code><a href="#@gammarers/aws-log-glue-tables.CloudFrontAccessLogTableProps.property.account">account</a></code> | <code>string</code> | *No description.* |

---

##### `glueDatabaseName`<sup>Required</sup> <a name="glueDatabaseName" id="@gammarers/aws-log-glue-tables.CloudFrontAccessLogTableProps.property.glueDatabaseName"></a>

```typescript
public readonly glueDatabaseName: string;
```

- *Type:* string

---

##### `glueTableName`<sup>Required</sup> <a name="glueTableName" id="@gammarers/aws-log-glue-tables.CloudFrontAccessLogTableProps.property.glueTableName"></a>

```typescript
public readonly glueTableName: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@gammarers/aws-log-glue-tables.CloudFrontAccessLogTableProps.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `logBucket`<sup>Required</sup> <a name="logBucket" id="@gammarers/aws-log-glue-tables.CloudFrontAccessLogTableProps.property.logBucket"></a>

```typescript
public readonly logBucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@gammarers/aws-log-glue-tables.CloudFrontAccessLogTableProps.property.timestamp"></a>

```typescript
public readonly timestamp: Timestamp;
```

- *Type:* @gammarers/aws-log-glue-tables.GlueProjection.Timestamp

---

##### `account`<sup>Optional</sup> <a name="account" id="@gammarers/aws-log-glue-tables.CloudFrontAccessLogTableProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

---

### Timestamp <a name="Timestamp" id="@gammarers/aws-log-glue-tables.GlueProjection.Timestamp"></a>

#### Initializer <a name="Initializer" id="@gammarers/aws-log-glue-tables.GlueProjection.Timestamp.Initializer"></a>

```typescript
import { GlueProjection } from '@gammarers/aws-log-glue-tables'

const timestamp: GlueProjection.Timestamp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-log-glue-tables.GlueProjection.Timestamp.property.range">range</a></code> | <code>@gammarers/aws-log-glue-tables.GlueProjection.TimestampRange</code> | *No description.* |

---

##### `range`<sup>Required</sup> <a name="range" id="@gammarers/aws-log-glue-tables.GlueProjection.Timestamp.property.range"></a>

```typescript
public readonly range: TimestampRange;
```

- *Type:* @gammarers/aws-log-glue-tables.GlueProjection.TimestampRange

---

### TimestampRange <a name="TimestampRange" id="@gammarers/aws-log-glue-tables.GlueProjection.TimestampRange"></a>

#### Initializer <a name="Initializer" id="@gammarers/aws-log-glue-tables.GlueProjection.TimestampRange.Initializer"></a>

```typescript
import { GlueProjection } from '@gammarers/aws-log-glue-tables'

const timestampRange: GlueProjection.TimestampRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-log-glue-tables.GlueProjection.TimestampRange.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-log-glue-tables.GlueProjection.TimestampRange.property.end">end</a></code> | <code>string</code> | *No description.* |

---

##### `start`<sup>Required</sup> <a name="start" id="@gammarers/aws-log-glue-tables.GlueProjection.TimestampRange.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `end`<sup>Optional</sup> <a name="end" id="@gammarers/aws-log-glue-tables.GlueProjection.TimestampRange.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---



