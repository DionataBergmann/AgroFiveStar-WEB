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
  acre: Scalars['String'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
};

export type CreateInventoryInput = {
  amount: Scalars['String'];
  name: Scalars['String'];
  provider: Scalars['String'];
  storage: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type CreateManyFieldsInput = {
  /** Array of records to create */
  fields: Array<CreateFieldInput>;
};

export type CreateManyInventoriesInput = {
  /** Array of records to create */
  inventories: Array<CreateInventoryInput>;
};

export type CreateManyProductionsInput = {
  /** Array of records to create */
  productions: Array<CreateProductionInput>;
};

export type CreateOneFieldInput = {
  /** The record to create */
  field: CreateFieldInput;
};

export type CreateOneInventoryInput = {
  /** The record to create */
  inventory: CreateInventoryInput;
};

export type CreateOneProductionInput = {
  /** The record to create */
  production: CreateProductionInput;
};

export type CreateProductionInput = {
  amount: Scalars['String'];
  name: Scalars['String'];
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

export type DeleteManyInventoriesInput = {
  /** Filter to find records to delete */
  filter: InventoryDeleteFilter;
};

export type DeleteManyProductionsInput = {
  /** Filter to find records to delete */
  filter: ProductionDeleteFilter;
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

export type DeleteOneInventoryInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneProductionInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type Field = {
  __typename?: 'Field';
  acre: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type FieldAggregateGroupBy = {
  __typename?: 'FieldAggregateGroupBy';
  acre?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  acre?: Maybe<StringFieldComparison>;
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
  acre?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FieldFilter = {
  acre?: Maybe<StringFieldComparison>;
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
  acre?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FieldMinAggregate = {
  __typename?: 'FieldMinAggregate';
  acre?: Maybe<Scalars['String']>;
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

export type FieldUpdateFilter = {
  acre?: Maybe<StringFieldComparison>;
  and?: Maybe<Array<FieldUpdateFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  imageUrl?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<FieldUpdateFilter>>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type Inventory = {
  __typename?: 'Inventory';
  amount: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  provider: Scalars['String'];
  storage: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  value?: Maybe<Scalars['String']>;
};

export type InventoryAggregateGroupBy = {
  __typename?: 'InventoryAggregateGroupBy';
  amount?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  storage?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['String']>;
};

export type InventoryConnection = {
  __typename?: 'InventoryConnection';
  /** Array of nodes. */
  nodes: Array<Inventory>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type InventoryCountAggregate = {
  __typename?: 'InventoryCountAggregate';
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  provider?: Maybe<Scalars['Int']>;
  storage?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

export type InventoryDeleteFilter = {
  amount?: Maybe<StringFieldComparison>;
  and?: Maybe<Array<InventoryDeleteFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<InventoryDeleteFilter>>;
  provider?: Maybe<StringFieldComparison>;
  storage?: Maybe<StringFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  value?: Maybe<StringFieldComparison>;
};

export type InventoryDeleteResponse = {
  __typename?: 'InventoryDeleteResponse';
  amount?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  storage?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['String']>;
};

export type InventoryFilter = {
  amount?: Maybe<StringFieldComparison>;
  and?: Maybe<Array<InventoryFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<InventoryFilter>>;
  provider?: Maybe<StringFieldComparison>;
  storage?: Maybe<StringFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  value?: Maybe<StringFieldComparison>;
};

export type InventoryMaxAggregate = {
  __typename?: 'InventoryMaxAggregate';
  amount?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  storage?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['String']>;
};

export type InventoryMinAggregate = {
  __typename?: 'InventoryMinAggregate';
  amount?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  storage?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['String']>;
};

export type InventorySort = {
  direction: SortDirection;
  field: InventorySortFields;
  nulls?: Maybe<SortNulls>;
};

export enum InventorySortFields {
  Amount = 'amount',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  Provider = 'provider',
  Storage = 'storage',
  UpdatedAt = 'updatedAt',
  Value = 'value'
}

export type InventoryUpdateFilter = {
  amount?: Maybe<StringFieldComparison>;
  and?: Maybe<Array<InventoryUpdateFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<InventoryUpdateFilter>>;
  provider?: Maybe<StringFieldComparison>;
  storage?: Maybe<StringFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  value?: Maybe<StringFieldComparison>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyFields: Array<Field>;
  createManyInventories: Array<Inventory>;
  createManyProductions: Array<Production>;
  createOneField: Field;
  createOneInventory: Inventory;
  createOneProduction: Production;
  deleteManyFields: DeleteManyResponse;
  deleteManyInventories: DeleteManyResponse;
  deleteManyProductions: DeleteManyResponse;
  deleteOneField: FieldDeleteResponse;
  deleteOneInventory: InventoryDeleteResponse;
  deleteOneProduction: ProductionDeleteResponse;
  updateManyFields: UpdateManyResponse;
  updateManyInventories: UpdateManyResponse;
  updateManyProductions: UpdateManyResponse;
  updateOneField: Field;
  updateOneInventory: Inventory;
  updateOneProduction: Production;
};


export type MutationCreateManyFieldsArgs = {
  input: CreateManyFieldsInput;
};


export type MutationCreateManyInventoriesArgs = {
  input: CreateManyInventoriesInput;
};


export type MutationCreateManyProductionsArgs = {
  input: CreateManyProductionsInput;
};


export type MutationCreateOneFieldArgs = {
  input: CreateOneFieldInput;
};


export type MutationCreateOneInventoryArgs = {
  input: CreateOneInventoryInput;
};


export type MutationCreateOneProductionArgs = {
  input: CreateOneProductionInput;
};


export type MutationDeleteManyFieldsArgs = {
  input: DeleteManyFieldsInput;
};


export type MutationDeleteManyInventoriesArgs = {
  input: DeleteManyInventoriesInput;
};


export type MutationDeleteManyProductionsArgs = {
  input: DeleteManyProductionsInput;
};


export type MutationDeleteOneFieldArgs = {
  input: DeleteOneFieldInput;
};


export type MutationDeleteOneInventoryArgs = {
  input: DeleteOneInventoryInput;
};


export type MutationDeleteOneProductionArgs = {
  input: DeleteOneProductionInput;
};


export type MutationUpdateManyFieldsArgs = {
  input: UpdateManyFieldsInput;
};


export type MutationUpdateManyInventoriesArgs = {
  input: UpdateManyInventoriesInput;
};


export type MutationUpdateManyProductionsArgs = {
  input: UpdateManyProductionsInput;
};


export type MutationUpdateOneFieldArgs = {
  input: UpdateOneFieldInput;
};


export type MutationUpdateOneInventoryArgs = {
  input: UpdateOneInventoryInput;
};


export type MutationUpdateOneProductionArgs = {
  input: UpdateOneProductionInput;
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

export type Production = {
  __typename?: 'Production';
  amount: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProductionAggregateGroupBy = {
  __typename?: 'ProductionAggregateGroupBy';
  amount?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductionConnection = {
  __typename?: 'ProductionConnection';
  /** Array of nodes. */
  nodes: Array<Production>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ProductionCountAggregate = {
  __typename?: 'ProductionCountAggregate';
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ProductionDeleteFilter = {
  amount?: Maybe<StringFieldComparison>;
  and?: Maybe<Array<ProductionDeleteFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<ProductionDeleteFilter>>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type ProductionDeleteResponse = {
  __typename?: 'ProductionDeleteResponse';
  amount?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductionFilter = {
  amount?: Maybe<StringFieldComparison>;
  and?: Maybe<Array<ProductionFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<ProductionFilter>>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type ProductionMaxAggregate = {
  __typename?: 'ProductionMaxAggregate';
  amount?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductionMinAggregate = {
  __typename?: 'ProductionMinAggregate';
  amount?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductionSort = {
  direction: SortDirection;
  field: ProductionSortFields;
  nulls?: Maybe<SortNulls>;
};

export enum ProductionSortFields {
  Amount = 'amount',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type ProductionUpdateFilter = {
  amount?: Maybe<StringFieldComparison>;
  and?: Maybe<Array<ProductionUpdateFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<ProductionUpdateFilter>>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type Query = {
  __typename?: 'Query';
  field?: Maybe<Field>;
  fields: FieldConnection;
  inventories: InventoryConnection;
  inventory?: Maybe<Inventory>;
  production?: Maybe<Production>;
  productions: ProductionConnection;
};


export type QueryFieldArgs = {
  id: Scalars['ID'];
};


export type QueryFieldsArgs = {
  filter?: Maybe<FieldFilter>;
  paging?: Maybe<OffsetPaging>;
  sorting?: Maybe<Array<FieldSort>>;
};


export type QueryInventoriesArgs = {
  filter?: Maybe<InventoryFilter>;
  paging?: Maybe<OffsetPaging>;
  sorting?: Maybe<Array<InventorySort>>;
};


export type QueryInventoryArgs = {
  id: Scalars['ID'];
};


export type QueryProductionArgs = {
  id: Scalars['ID'];
};


export type QueryProductionsArgs = {
  filter?: Maybe<ProductionFilter>;
  paging?: Maybe<OffsetPaging>;
  sorting?: Maybe<Array<ProductionSort>>;
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
  acre?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  imageUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdateInventoryInput = {
  amount?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  storage?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type UpdateManyFieldsInput = {
  /** Filter used to find fields to update */
  filter: FieldUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateFieldInput;
};

export type UpdateManyInventoriesInput = {
  /** Filter used to find fields to update */
  filter: InventoryUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateInventoryInput;
};

export type UpdateManyProductionsInput = {
  /** Filter used to find fields to update */
  filter: ProductionUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateProductionInput;
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

export type UpdateOneInventoryInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateInventoryInput;
};

export type UpdateOneProductionInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateProductionInput;
};

export type UpdateProductionInput = {
  amount?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};
