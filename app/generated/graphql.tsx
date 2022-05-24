export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type CreateFieldInput = {
  acre: Scalars['Float'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
};

export type CreateManyFieldsInput = {
  /** Array of records to create */
  fields: Array<CreateFieldInput>;
};

export type CreateOneFieldInput = {
  /** The record to create */
  field: CreateFieldInput;
};

export type DateFieldComparison = {
  between?: Maybe<DateFieldComparisonBetween>;
  eq?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  neq?: Maybe<Scalars['DateTime']>;
  notBetween?: Maybe<DateFieldComparisonBetween>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime'];
  upper: Scalars['DateTime'];
};


export type DeleteManyFieldsInput = {
  /** Filter to find records to delete */
  filter: FieldDeleteFilter;
};

export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse';
  /** The number of records deleted. */
  deletedCount: Scalars['Int'];
};

export type DeleteOneFieldInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type Field = {
  __typename?: 'Field';
  acre: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type FieldAggregateGroupBy = {
  __typename?: 'FieldAggregateGroupBy';
  acre?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FieldAvgAggregate = {
  __typename?: 'FieldAvgAggregate';
  acre?: Maybe<Scalars['Float']>;
};

export type FieldConnection = {
  __typename?: 'FieldConnection';
  /** Array of nodes. */
  nodes: Array<Field>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type FieldCountAggregate = {
  __typename?: 'FieldCountAggregate';
  acre?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  imageUrl?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type FieldDeleteFilter = {
  acre?: Maybe<NumberFieldComparison>;
  and?: Maybe<Array<FieldDeleteFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  imageUrl?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<FieldDeleteFilter>>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type FieldDeleteResponse = {
  __typename?: 'FieldDeleteResponse';
  acre?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FieldFilter = {
  acre?: Maybe<NumberFieldComparison>;
  and?: Maybe<Array<FieldFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  imageUrl?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<FieldFilter>>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type FieldMaxAggregate = {
  __typename?: 'FieldMaxAggregate';
  acre?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FieldMinAggregate = {
  __typename?: 'FieldMinAggregate';
  acre?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FieldSort = {
  direction: SortDirection;
  field: FieldSortFields;
  nulls?: Maybe<SortNulls>;
};

export enum FieldSortFields {
  Acre = 'acre',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  ImageUrl = 'imageUrl',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type FieldSumAggregate = {
  __typename?: 'FieldSumAggregate';
  acre?: Maybe<Scalars['Float']>;
};

export type FieldUpdateFilter = {
  acre?: Maybe<NumberFieldComparison>;
  and?: Maybe<Array<FieldUpdateFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  imageUrl?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<FieldUpdateFilter>>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyFields: Array<Field>;
  createOneField: Field;
  deleteManyFields: DeleteManyResponse;
  deleteOneField: FieldDeleteResponse;
  updateManyFields: UpdateManyResponse;
  updateOneField: Field;
};


export type MutationCreateManyFieldsArgs = {
  input: CreateManyFieldsInput;
};


export type MutationCreateOneFieldArgs = {
  input: CreateOneFieldInput;
};


export type MutationDeleteManyFieldsArgs = {
  input: DeleteManyFieldsInput;
};


export type MutationDeleteOneFieldArgs = {
  input: DeleteOneFieldInput;
};


export type MutationUpdateManyFieldsArgs = {
  input: UpdateManyFieldsInput;
};


export type MutationUpdateOneFieldArgs = {
  input: UpdateOneFieldInput;
};

export type NumberFieldComparison = {
  between?: Maybe<NumberFieldComparisonBetween>;
  eq?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  neq?: Maybe<Scalars['Float']>;
  notBetween?: Maybe<NumberFieldComparisonBetween>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NumberFieldComparisonBetween = {
  lower: Scalars['Float'];
  upper: Scalars['Float'];
};

export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo';
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: Maybe<Scalars['Int']>;
  /** Offset to start returning records from */
  offset?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  field?: Maybe<Field>;
  fields: FieldConnection;
};


export type QueryFieldArgs = {
  id: Scalars['ID'];
};


export type QueryFieldsArgs = {
  filter?: Maybe<FieldFilter>;
  paging?: Maybe<OffsetPaging>;
  sorting?: Maybe<Array<FieldSort>>;
};

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type StringFieldComparison = {
  eq?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  iLike?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  like?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  neq?: Maybe<Scalars['String']>;
  notILike?: Maybe<Scalars['String']>;
  notIn?: Maybe<Array<Scalars['String']>>;
  notLike?: Maybe<Scalars['String']>;
};

export type UpdateFieldInput = {
  acre?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  imageUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdateManyFieldsInput = {
  /** Filter used to find fields to update */
  filter: FieldUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateFieldInput;
};

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse';
  /** The number of records updated. */
  updatedCount: Scalars['Int'];
};

export type UpdateOneFieldInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateFieldInput;
};
