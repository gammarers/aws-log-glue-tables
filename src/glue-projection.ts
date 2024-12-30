
export namespace GlueProjection {

  export interface TimestampRange {
    readonly start: string;
    readonly end?: string;
  }

  export interface Timestamp {
    readonly range: TimestampRange;
  }

}