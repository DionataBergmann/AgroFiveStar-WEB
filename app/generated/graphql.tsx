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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type AuthType = {
  __typename?: 'AuthType';
  token: Scalars['String'];
  user: User;
};

export type CreateFieldInput = {
  acre: Scalars['Float'];
  imagePath?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CreateFieldSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: FieldSubscriptionFilter;
};

export type CreateFileInput = {
  fileName?: Maybe<Scalars['String']>;
  filePath?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type CreateInventoryInput = {
  amount: Scalars['Float'];
  fields?: Maybe<Array<UpdateFieldInput>>;
  name: Scalars['String'];
  provider: Scalars['String'];
  storage: Scalars['String'];
  value?: Maybe<Scalars['Float']>;
};

export type CreateManyFilesInput = {
  /** Array of records to create */
  files: Array<CreateFileInput>;
};

export type CreateManyInventoriesInput = {
  /** Array of records to create */
  inventories: Array<CreateInventoryInput>;
};

export type CreateManyProductionsInput = {
  /** Array of records to create */
  productions: Array<CreateProductionInput>;
};

export type CreateManyTasksInput = {
  /** Array of records to create */
  tasks: Array<CreateTaskInput>;
};

export type CreateManyUsersInput = {
  /** Array of records to create */
  users: Array<CreateUserInput>;
};

export type CreateOneFileInput = {
  /** The record to create */
  file: CreateFileInput;
};

export type CreateOneInventoryInput = {
  /** The record to create */
  inventory: CreateInventoryInput;
};

export type CreateOneProductionInput = {
  /** The record to create */
  production: CreateProductionInput;
};

export type CreateOneTaskInput = {
  /** The record to create */
  task: CreateTaskInput;
};

export type CreateOneUserInput = {
  /** The record to create */
  user: CreateUserInput;
};

export type CreateProductionInput = {
  amount: Scalars['Float'];
  fields?: Maybe<Array<UpdateFieldInput>>;
  name: Scalars['String'];
};

export type CreateTaskInput = {
  description: Scalars['String'];
  title: Scalars['String'];
};

export type CreateUserInput = {
  CPF?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  telephone?: Maybe<Scalars['String']>;
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


export type DeleteManyFilesInput = {
  /** Filter to find records to delete */
  filter: FileDeleteFilter;
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

export type DeleteManyTasksInput = {
  /** Filter to find records to delete */
  filter: TaskDeleteFilter;
};

export type DeleteManyUsersInput = {
  /** Filter to find records to delete */
  filter: UserDeleteFilter;
};

export type DeleteOneFieldSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: FieldSubscriptionFilter;
};

export type DeleteOneFileInput = {
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

export type DeleteOneTaskInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneUserInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type Field = {
  __typename?: 'Field';
  acre: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  fieldImage?: Maybe<File>;
  id: Scalars['String'];
  imagePath?: Maybe<Scalars['String']>;
  inventories?: Maybe<Inventory>;
  name: Scalars['String'];
  productions?: Maybe<Production>;
  updatedAt: Scalars['DateTime'];
};

export type FieldAggregateFilter = {
  acre?: Maybe<NumberFieldComparison>;
  and?: Maybe<Array<FieldAggregateFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  imagePath?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<FieldAggregateFilter>>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type FieldAggregateGroupBy = {
  __typename?: 'FieldAggregateGroupBy';
  acre?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  imagePath?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FieldAggregateResponse = {
  __typename?: 'FieldAggregateResponse';
  avg?: Maybe<FieldAvgAggregate>;
  count?: Maybe<FieldCountAggregate>;
  groupBy?: Maybe<FieldAggregateGroupBy>;
  max?: Maybe<FieldMaxAggregate>;
  min?: Maybe<FieldMinAggregate>;
  sum?: Maybe<FieldSumAggregate>;
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
};

export type FieldCountAggregate = {
  __typename?: 'FieldCountAggregate';
  acre?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  imagePath?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type FieldDeleteResponse = {
  __typename?: 'FieldDeleteResponse';
  acre?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  imagePath?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FieldFilter = {
  acre?: Maybe<NumberFieldComparison>;
  and?: Maybe<Array<FieldFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  fieldImage?: Maybe<FieldFilterFileFilter>;
  id?: Maybe<StringFieldComparison>;
  imagePath?: Maybe<StringFieldComparison>;
  inventories?: Maybe<FieldFilterInventoryFilter>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<FieldFilter>>;
  productions?: Maybe<FieldFilterProductionFilter>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type FieldFilterFileFilter = {
  and?: Maybe<Array<FieldFilterFileFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<FieldFilterFileFilter>>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type FieldFilterInventoryFilter = {
  amount?: Maybe<NumberFieldComparison>;
  and?: Maybe<Array<FieldFilterInventoryFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<FieldFilterInventoryFilter>>;
  provider?: Maybe<StringFieldComparison>;
  storage?: Maybe<StringFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  value?: Maybe<NumberFieldComparison>;
};

export type FieldFilterProductionFilter = {
  amount?: Maybe<NumberFieldComparison>;
  and?: Maybe<Array<FieldFilterProductionFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<FieldFilterProductionFilter>>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type FieldMaxAggregate = {
  __typename?: 'FieldMaxAggregate';
  acre?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  imagePath?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FieldMinAggregate = {
  __typename?: 'FieldMinAggregate';
  acre?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  imagePath?: Maybe<Scalars['String']>;
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
  ImagePath = 'imagePath',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type FieldSubscriptionFilter = {
  acre?: Maybe<NumberFieldComparison>;
  and?: Maybe<Array<FieldSubscriptionFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  imagePath?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<FieldSubscriptionFilter>>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type FieldSumAggregate = {
  __typename?: 'FieldSumAggregate';
  acre?: Maybe<Scalars['Float']>;
};

export type File = {
  __typename?: 'File';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  fileName?: Maybe<Scalars['String']>;
  filePath?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type FileAggregateGroupBy = {
  __typename?: 'FileAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  /** Array of nodes. */
  nodes: Array<File>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type FileCountAggregate = {
  __typename?: 'FileCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type FileDeleteFilter = {
  and?: Maybe<Array<FileDeleteFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<FileDeleteFilter>>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type FileDeleteResponse = {
  __typename?: 'FileDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  fileName?: Maybe<Scalars['String']>;
  filePath?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FileFilter = {
  and?: Maybe<Array<FileFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<FileFilter>>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type FileMaxAggregate = {
  __typename?: 'FileMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FileMinAggregate = {
  __typename?: 'FileMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FileSort = {
  direction: SortDirection;
  field: FileSortFields;
  nulls?: Maybe<SortNulls>;
};

export enum FileSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type FileUpdateFilter = {
  and?: Maybe<Array<FileUpdateFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<FileUpdateFilter>>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type Inventory = {
  __typename?: 'Inventory';
  amount: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  fields?: Maybe<Field>;
  id: Scalars['String'];
  name: Scalars['String'];
  provider: Scalars['String'];
  storage: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  value?: Maybe<Scalars['Float']>;
};

export type InventoryAggregateGroupBy = {
  __typename?: 'InventoryAggregateGroupBy';
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  storage?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['Float']>;
};

export type InventoryAvgAggregate = {
  __typename?: 'InventoryAvgAggregate';
  amount?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
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
  amount?: Maybe<NumberFieldComparison>;
  and?: Maybe<Array<InventoryDeleteFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<InventoryDeleteFilter>>;
  provider?: Maybe<StringFieldComparison>;
  storage?: Maybe<StringFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  value?: Maybe<NumberFieldComparison>;
};

export type InventoryDeleteResponse = {
  __typename?: 'InventoryDeleteResponse';
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  storage?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['Float']>;
};

export type InventoryFilter = {
  amount?: Maybe<NumberFieldComparison>;
  and?: Maybe<Array<InventoryFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  fields?: Maybe<InventoryFilterFieldFilter>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<InventoryFilter>>;
  provider?: Maybe<StringFieldComparison>;
  storage?: Maybe<StringFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  value?: Maybe<NumberFieldComparison>;
};

export type InventoryFilterFieldFilter = {
  acre?: Maybe<NumberFieldComparison>;
  and?: Maybe<Array<InventoryFilterFieldFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  imagePath?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<InventoryFilterFieldFilter>>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type InventoryMaxAggregate = {
  __typename?: 'InventoryMaxAggregate';
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  storage?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['Float']>;
};

export type InventoryMinAggregate = {
  __typename?: 'InventoryMinAggregate';
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  storage?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['Float']>;
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

export type InventorySumAggregate = {
  __typename?: 'InventorySumAggregate';
  amount?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

export type InventoryUpdateFilter = {
  amount?: Maybe<NumberFieldComparison>;
  and?: Maybe<Array<InventoryUpdateFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<InventoryUpdateFilter>>;
  provider?: Maybe<StringFieldComparison>;
  storage?: Maybe<StringFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  value?: Maybe<NumberFieldComparison>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyFiles: Array<File>;
  createManyInventories: Array<Inventory>;
  createManyProductions: Array<Production>;
  createManyTasks: Array<Task>;
  createManyUsers: Array<User>;
  createOneField: Field;
  createOneFile: File;
  createOneInventory: Inventory;
  createOneProduction: Production;
  createOneTask: Task;
  createOneUser: User;
  deleteManyFiles: DeleteManyResponse;
  deleteManyInventories: DeleteManyResponse;
  deleteManyProductions: DeleteManyResponse;
  deleteManyTasks: DeleteManyResponse;
  deleteManyUsers: DeleteManyResponse;
  deleteOneFieldAndForget: Field;
  deleteOneFile: FileDeleteResponse;
  deleteOneInventory: InventoryDeleteResponse;
  deleteOneProduction: ProductionDeleteResponse;
  deleteOneTask: TaskDeleteResponse;
  deleteOneUser: UserDeleteResponse;
  deletePhysicalFile: Scalars['Boolean'];
  loginUser: AuthType;
  removeFieldImageFromField: Field;
  removeFieldsFromInventory: Inventory;
  removeFieldsFromProduction: Production;
  removeInventoriesFromField: Field;
  removeProductionsFromField: Field;
  setFieldImageOnField: Field;
  setFieldsOnInventory: Inventory;
  setFieldsOnProduction: Production;
  setInventoriesOnField: Field;
  setProductionsOnField: Field;
  updateManyFiles: UpdateManyResponse;
  updateManyInventories: UpdateManyResponse;
  updateManyProductions: UpdateManyResponse;
  updateManyTasks: UpdateManyResponse;
  updateManyUsers: UpdateManyResponse;
  updateOneField: Field;
  updateOneFile: File;
  updateOneInventory: Inventory;
  updateOneProduction: Production;
  updateOneTask: Task;
  updateOneUser: User;
};


export type MutationCreateManyFilesArgs = {
  input: CreateManyFilesInput;
};


export type MutationCreateManyInventoriesArgs = {
  input: CreateManyInventoriesInput;
};


export type MutationCreateManyProductionsArgs = {
  input: CreateManyProductionsInput;
};


export type MutationCreateManyTasksArgs = {
  input: CreateManyTasksInput;
};


export type MutationCreateManyUsersArgs = {
  input: CreateManyUsersInput;
};


export type MutationCreateOneFieldArgs = {
  data: CreateFieldInput;
  fieldImage?: Maybe<Scalars['Upload']>;
};


export type MutationCreateOneFileArgs = {
  input: CreateOneFileInput;
};


export type MutationCreateOneInventoryArgs = {
  input: CreateOneInventoryInput;
};


export type MutationCreateOneProductionArgs = {
  input: CreateOneProductionInput;
};


export type MutationCreateOneTaskArgs = {
  input: CreateOneTaskInput;
};


export type MutationCreateOneUserArgs = {
  input: CreateOneUserInput;
};


export type MutationDeleteManyFilesArgs = {
  input: DeleteManyFilesInput;
};


export type MutationDeleteManyInventoriesArgs = {
  input: DeleteManyInventoriesInput;
};


export type MutationDeleteManyProductionsArgs = {
  input: DeleteManyProductionsInput;
};


export type MutationDeleteManyTasksArgs = {
  input: DeleteManyTasksInput;
};


export type MutationDeleteManyUsersArgs = {
  input: DeleteManyUsersInput;
};


export type MutationDeleteOneFieldAndForgetArgs = {
  id: Scalars['String'];
};


export type MutationDeleteOneFileArgs = {
  input: DeleteOneFileInput;
};


export type MutationDeleteOneInventoryArgs = {
  input: DeleteOneInventoryInput;
};


export type MutationDeleteOneProductionArgs = {
  input: DeleteOneProductionInput;
};


export type MutationDeleteOneTaskArgs = {
  input: DeleteOneTaskInput;
};


export type MutationDeleteOneUserArgs = {
  input: DeleteOneUserInput;
};


export type MutationDeletePhysicalFileArgs = {
  id: Scalars['String'];
};


export type MutationLoginUserArgs = {
  data: AuthInput;
};


export type MutationRemoveFieldImageFromFieldArgs = {
  input: RemoveFieldImageFromFieldInput;
};


export type MutationRemoveFieldsFromInventoryArgs = {
  input: RemoveFieldsFromInventoryInput;
};


export type MutationRemoveFieldsFromProductionArgs = {
  input: RemoveFieldsFromProductionInput;
};


export type MutationRemoveInventoriesFromFieldArgs = {
  input: RemoveInventoriesFromFieldInput;
};


export type MutationRemoveProductionsFromFieldArgs = {
  input: RemoveProductionsFromFieldInput;
};


export type MutationSetFieldImageOnFieldArgs = {
  input: SetFieldImageOnFieldInput;
};


export type MutationSetFieldsOnInventoryArgs = {
  input: SetFieldsOnInventoryInput;
};


export type MutationSetFieldsOnProductionArgs = {
  input: SetFieldsOnProductionInput;
};


export type MutationSetInventoriesOnFieldArgs = {
  input: SetInventoriesOnFieldInput;
};


export type MutationSetProductionsOnFieldArgs = {
  input: SetProductionsOnFieldInput;
};


export type MutationUpdateManyFilesArgs = {
  input: UpdateManyFilesInput;
};


export type MutationUpdateManyInventoriesArgs = {
  input: UpdateManyInventoriesInput;
};


export type MutationUpdateManyProductionsArgs = {
  input: UpdateManyProductionsInput;
};


export type MutationUpdateManyTasksArgs = {
  input: UpdateManyTasksInput;
};


export type MutationUpdateManyUsersArgs = {
  input: UpdateManyUsersInput;
};


export type MutationUpdateOneFieldArgs = {
  data: UpdateFieldInput;
  fieldImage?: Maybe<Scalars['Upload']>;
  id: Scalars['String'];
};


export type MutationUpdateOneFileArgs = {
  input: UpdateOneFileInput;
};


export type MutationUpdateOneInventoryArgs = {
  input: UpdateOneInventoryInput;
};


export type MutationUpdateOneProductionArgs = {
  input: UpdateOneProductionInput;
};


export type MutationUpdateOneTaskArgs = {
  input: UpdateOneTaskInput;
};


export type MutationUpdateOneUserArgs = {
  input: UpdateOneUserInput;
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

export type Production = {
  __typename?: 'Production';
  amount: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  fields?: Maybe<Field>;
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProductionAggregateGroupBy = {
  __typename?: 'ProductionAggregateGroupBy';
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductionAvgAggregate = {
  __typename?: 'ProductionAvgAggregate';
  amount?: Maybe<Scalars['Float']>;
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
  amount?: Maybe<NumberFieldComparison>;
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
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductionFilter = {
  amount?: Maybe<NumberFieldComparison>;
  and?: Maybe<Array<ProductionFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  fields?: Maybe<ProductionFilterFieldFilter>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<ProductionFilter>>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type ProductionFilterFieldFilter = {
  acre?: Maybe<NumberFieldComparison>;
  and?: Maybe<Array<ProductionFilterFieldFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  imagePath?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<ProductionFilterFieldFilter>>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type ProductionMaxAggregate = {
  __typename?: 'ProductionMaxAggregate';
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductionMinAggregate = {
  __typename?: 'ProductionMinAggregate';
  amount?: Maybe<Scalars['Float']>;
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

export type ProductionSumAggregate = {
  __typename?: 'ProductionSumAggregate';
  amount?: Maybe<Scalars['Float']>;
};

export type ProductionUpdateFilter = {
  amount?: Maybe<NumberFieldComparison>;
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
  fieldAggregate: Array<FieldAggregateResponse>;
  fields: FieldConnection;
  file?: Maybe<File>;
  files: FileConnection;
  getOneUser: User;
  getUserByEmail: User;
  inventories: InventoryConnection;
  inventory?: Maybe<Inventory>;
  me: User;
  production?: Maybe<Production>;
  productions: ProductionConnection;
  task?: Maybe<Task>;
  tasks: TaskConnection;
  user?: Maybe<User>;
  users: UserConnection;
};


export type QueryFieldArgs = {
  id: Scalars['ID'];
};


export type QueryFieldAggregateArgs = {
  filter?: Maybe<FieldAggregateFilter>;
};


export type QueryFieldsArgs = {
  filter?: FieldFilter;
  paging?: OffsetPaging;
  sorting?: Array<FieldSort>;
};


export type QueryFileArgs = {
  id: Scalars['ID'];
};


export type QueryFilesArgs = {
  filter?: FileFilter;
  paging?: OffsetPaging;
  sorting?: Array<FileSort>;
};


export type QueryGetOneUserArgs = {
  id: Scalars['String'];
};


export type QueryGetUserByEmailArgs = {
  email?: Maybe<Scalars['String']>;
};


export type QueryInventoriesArgs = {
  filter?: InventoryFilter;
  paging?: OffsetPaging;
  sorting?: Array<InventorySort>;
};


export type QueryInventoryArgs = {
  id: Scalars['ID'];
};


export type QueryProductionArgs = {
  id: Scalars['ID'];
};


export type QueryProductionsArgs = {
  filter?: ProductionFilter;
  paging?: OffsetPaging;
  sorting?: Array<ProductionSort>;
};


export type QueryTaskArgs = {
  id: Scalars['ID'];
};


export type QueryTasksArgs = {
  filter?: TaskFilter;
  paging?: OffsetPaging;
  sorting?: Array<TaskSort>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  filter?: UserFilter;
  paging?: OffsetPaging;
  sorting?: Array<UserSort>;
};

export type RemoveFieldImageFromFieldInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveFieldsFromInventoryInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveFieldsFromProductionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveInventoriesFromFieldInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveProductionsFromFieldInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetFieldImageOnFieldInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetFieldsOnInventoryInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetFieldsOnProductionInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetInventoriesOnFieldInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetProductionsOnFieldInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
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

export type Subscription = {
  __typename?: 'Subscription';
  createdField: Field;
  deletedManyFields: DeleteManyResponse;
  deletedOneField: FieldDeleteResponse;
  updatedManyFields: UpdateManyResponse;
  updatedOneField: Field;
};


export type SubscriptionCreatedFieldArgs = {
  input?: Maybe<CreateFieldSubscriptionFilterInput>;
};


export type SubscriptionDeletedOneFieldArgs = {
  input?: Maybe<DeleteOneFieldSubscriptionFilterInput>;
};


export type SubscriptionUpdatedOneFieldArgs = {
  input?: Maybe<UpdateOneFieldSubscriptionFilterInput>;
};

export type Task = {
  __typename?: 'Task';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TaskAggregateGroupBy = {
  __typename?: 'TaskAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TaskConnection = {
  __typename?: 'TaskConnection';
  /** Array of nodes. */
  nodes: Array<Task>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type TaskCountAggregate = {
  __typename?: 'TaskCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type TaskDeleteFilter = {
  and?: Maybe<Array<TaskDeleteFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<TaskDeleteFilter>>;
  title?: Maybe<StringFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type TaskDeleteResponse = {
  __typename?: 'TaskDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TaskFilter = {
  and?: Maybe<Array<TaskFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<TaskFilter>>;
  title?: Maybe<StringFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type TaskMaxAggregate = {
  __typename?: 'TaskMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TaskMinAggregate = {
  __typename?: 'TaskMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TaskSort = {
  direction: SortDirection;
  field: TaskSortFields;
  nulls?: Maybe<SortNulls>;
};

export enum TaskSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type TaskUpdateFilter = {
  and?: Maybe<Array<TaskUpdateFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<TaskUpdateFilter>>;
  title?: Maybe<StringFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type UpdateFieldInput = {
  acre?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  imagePath?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdateFileInput = {
  fileName?: Maybe<Scalars['String']>;
  filePath?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type UpdateInventoryInput = {
  amount?: Maybe<Scalars['Float']>;
  fields?: Maybe<Array<UpdateFieldInput>>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  storage?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type UpdateManyFilesInput = {
  /** Filter used to find fields to update */
  filter: FileUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateFileInput;
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

export type UpdateManyTasksInput = {
  /** Filter used to find fields to update */
  filter: TaskUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateTaskInput;
};

export type UpdateManyUsersInput = {
  /** Filter used to find fields to update */
  filter: UserUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateUserInput;
};

export type UpdateOneFieldSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: FieldSubscriptionFilter;
};

export type UpdateOneFileInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateFileInput;
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

export type UpdateOneTaskInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateTaskInput;
};

export type UpdateOneUserInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateUserInput;
};

export type UpdateProductionInput = {
  amount?: Maybe<Scalars['Float']>;
  fields?: Maybe<Array<UpdateFieldInput>>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdateTaskInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  CPF?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
};


export type User = {
  __typename?: 'User';
  CPF?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  telephone?: Maybe<Scalars['String']>;
};

export type UserAggregateGroupBy = {
  __typename?: 'UserAggregateGroupBy';
  CPF?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  /** Array of nodes. */
  nodes: Array<User>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  CPF?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  telephone?: Maybe<Scalars['Int']>;
};

export type UserDeleteFilter = {
  CPF?: Maybe<StringFieldComparison>;
  and?: Maybe<Array<UserDeleteFilter>>;
  email?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<UserDeleteFilter>>;
  telephone?: Maybe<StringFieldComparison>;
};

export type UserDeleteResponse = {
  __typename?: 'UserDeleteResponse';
  CPF?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
};

export type UserFilter = {
  CPF?: Maybe<StringFieldComparison>;
  and?: Maybe<Array<UserFilter>>;
  email?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<UserFilter>>;
  telephone?: Maybe<StringFieldComparison>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  CPF?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  CPF?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
};

export type UserSort = {
  direction: SortDirection;
  field: UserSortFields;
  nulls?: Maybe<SortNulls>;
};

export enum UserSortFields {
  Cpf = 'CPF',
  Email = 'email',
  Name = 'name',
  Telephone = 'telephone'
}

export type UserUpdateFilter = {
  CPF?: Maybe<StringFieldComparison>;
  and?: Maybe<Array<UserUpdateFilter>>;
  email?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<UserUpdateFilter>>;
  telephone?: Maybe<StringFieldComparison>;
};
