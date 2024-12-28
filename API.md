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
| <code><a href="#@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTableProps.property.timestampRage">timestampRage</a></code> | <code><a href="#@gammarers/aws-log-glue-tables.TimestampRange">TimestampRange</a></code> | *No description.* |
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
public readonly timestampRage: TimestampRange;
```

- *Type:* <a href="#@gammarers/aws-log-glue-tables.TimestampRange">TimestampRange</a>

---

##### `account`<sup>Optional</sup> <a name="account" id="@gammarers/aws-log-glue-tables.BucketStaticWebHostingAccessLogTableProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

---

### TimestampRange <a name="TimestampRange" id="@gammarers/aws-log-glue-tables.TimestampRange"></a>

#### Initializer <a name="Initializer" id="@gammarers/aws-log-glue-tables.TimestampRange.Initializer"></a>

```typescript
import { TimestampRange } from '@gammarers/aws-log-glue-tables'

const timestampRange: TimestampRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-log-glue-tables.TimestampRange.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-log-glue-tables.TimestampRange.property.end">end</a></code> | <code>string</code> | *No description.* |

---

##### `start`<sup>Required</sup> <a name="start" id="@gammarers/aws-log-glue-tables.TimestampRange.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `end`<sup>Optional</sup> <a name="end" id="@gammarers/aws-log-glue-tables.TimestampRange.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---



