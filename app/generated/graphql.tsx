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

export type AddRolesToUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
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
  acre?: Maybe<Scalars['String']>;
  cordinates?: Maybe<Scalars['String']>;
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
  name?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  storage?: Maybe<Scalars['String']>;
  storages?: Maybe<Array<UpdateStorageInput>>;
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

export type CreateManyStoragesInput = {
  /** Array of records to create */
  storages: Array<CreateStorageInput>;
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

export type CreateOneStorageInput = {
  /** The record to create */
  storage: CreateStorageInput;
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

export type CreateStorageInput = {
  amount: Scalars['Float'];
  name: Scalars['String'];
};

export type CreateTaskInput = {
  date: Scalars['DateTime'];
  dayOfWeek?: Maybe<Scalars['Float']>;
  description: Scalars['String'];
  title: Scalars['String'];
  userName?: Maybe<Scalars['String']>;
};

export type CreateUserInput = {
  CPF?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  roles: Array<RoleInput>;
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

export type DeleteManyStoragesInput = {
  /** Filter to find records to delete */
  filter: StorageDeleteFilter;
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

export type DeleteOneStorageInput = {
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
  acre: Scalars['String'];
  cordinates?: Maybe<Scalars['String']>;
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
  acre?: Maybe<StringFieldComparison>;
  and?: Maybe<Array<FieldAggregateFilter>>;
  cordinates?: Maybe<StringFieldComparison>;
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
  acre?: Maybe<Scalars['String']>;
  cordinates?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  imagePath?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FieldAggregateResponse = {
  __typename?: 'FieldAggregateResponse';
  count?: Maybe<FieldCountAggregate>;
  groupBy?: Maybe<FieldAggregateGroupBy>;
  max?: Maybe<FieldMaxAggregate>;
  min?: Maybe<FieldMinAggregate>;
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
  cordinates?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  imagePath?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type FieldDeleteResponse = {
  __typename?: 'FieldDeleteResponse';
  acre?: Maybe<Scalars['String']>;
  cordinates?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  imagePath?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FieldFilter = {
  acre?: Maybe<StringFieldComparison>;
  and?: Maybe<Array<FieldFilter>>;
  cordinates?: Maybe<StringFieldComparison>;
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
  acre?: Maybe<Scalars['String']>;
  cordinates?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  imagePath?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FieldMinAggregate = {
  __typename?: 'FieldMinAggregate';
  acre?: Maybe<Scalars['String']>;
  cordinates?: Maybe<Scalars['String']>;
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
  Cordinates = 'cordinates',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  ImagePath = 'imagePath',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type FieldSubscriptionFilter = {
  acre?: Maybe<StringFieldComparison>;
  and?: Maybe<Array<FieldSubscriptionFilter>>;
  cordinates?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  imagePath?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<FieldSubscriptionFilter>>;
  updatedAt?: Maybe<DateFieldComparison>;
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
  storage?: Maybe<Scalars['String']>;
  storages?: Maybe<Storage>;
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
  storages?: Maybe<InventoryFilterStorageFilter>;
  updatedAt?: Maybe<DateFieldComparison>;
  value?: Maybe<NumberFieldComparison>;
};

export type InventoryFilterFieldFilter = {
  acre?: Maybe<StringFieldComparison>;
  and?: Maybe<Array<InventoryFilterFieldFilter>>;
  cordinates?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  imagePath?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<InventoryFilterFieldFilter>>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type InventoryFilterStorageFilter = {
  amount?: Maybe<NumberFieldComparison>;
  and?: Maybe<Array<InventoryFilterStorageFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<InventoryFilterStorageFilter>>;
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
  addRolesToUser: User;
  createManyFiles: Array<File>;
  createManyInventories: Array<Inventory>;
  createManyProductions: Array<Production>;
  createManyStorages: Array<Storage>;
  createManyTasks: Array<Task>;
  createManyUsers: Array<User>;
  createOneField: Field;
  createOneFile: File;
  createOneInventory: Inventory;
  createOneProduction: Production;
  createOneStorage: Storage;
  createOneTask: Task;
  createOneUser: User;
  deleteManyFiles: DeleteManyResponse;
  deleteManyInventories: DeleteManyResponse;
  deleteManyProductions: DeleteManyResponse;
  deleteManyStorages: DeleteManyResponse;
  deleteManyTasks: DeleteManyResponse;
  deleteManyUsers: DeleteManyResponse;
  deleteOneFieldAndForget: Field;
  deleteOneFile: FileDeleteResponse;
  deleteOneInventory: InventoryDeleteResponse;
  deleteOneProduction: ProductionDeleteResponse;
  deleteOneStorage: StorageDeleteResponse;
  deleteOneTask: TaskDeleteResponse;
  deleteOneUser: UserDeleteResponse;
  deletePhysicalFile: Scalars['Boolean'];
  loginUser: AuthType;
  removeFieldImageFromField: Field;
  removeFieldsFromInventory: Inventory;
  removeFieldsFromProduction: Production;
  removeInventoriesFromField: Field;
  removeInventoriesFromStorage: Storage;
  removeProductionsFromField: Field;
  removeRolesFromUser: User;
  removeStoragesFromInventory: Inventory;
  setFieldImageOnField: Field;
  setFieldsOnInventory: Inventory;
  setFieldsOnProduction: Production;
  setInventoriesOnField: Field;
  setInventoriesOnStorage: Storage;
  setProductionsOnField: Field;
  setRolesOnUser: User;
  setStoragesOnInventory: Inventory;
  updateManyFiles: UpdateManyResponse;
  updateManyInventories: UpdateManyResponse;
  updateManyProductions: UpdateManyResponse;
  updateManyStorages: UpdateManyResponse;
  updateManyTasks: UpdateManyResponse;
  updateManyUsers: UpdateManyResponse;
  updateOneField: Field;
  updateOneFile: File;
  updateOneInventory: Inventory;
  updateOneProduction: Production;
  updateOneStorage: Storage;
  updateOneTask: Task;
  updateOneUser: User;
};


export type MutationAddRolesToUserArgs = {
  input: AddRolesToUserInput;
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


export type MutationCreateManyStoragesArgs = {
  input: CreateManyStoragesInput;
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


export type MutationCreateOneStorageArgs = {
  input: CreateOneStorageInput;
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


export type MutationDeleteManyStoragesArgs = {
  input: DeleteManyStoragesInput;
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


export type MutationDeleteOneStorageArgs = {
  input: DeleteOneStorageInput;
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


export type MutationRemoveInventoriesFromStorageArgs = {
  input: RemoveInventoriesFromStorageInput;
};


export type MutationRemoveProductionsFromFieldArgs = {
  input: RemoveProductionsFromFieldInput;
};


export type MutationRemoveRolesFromUserArgs = {
  input: RemoveRolesFromUserInput;
};


export type MutationRemoveStoragesFromInventoryArgs = {
  input: RemoveStoragesFromInventoryInput;
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


export type MutationSetInventoriesOnStorageArgs = {
  input: SetInventoriesOnStorageInput;
};


export type MutationSetProductionsOnFieldArgs = {
  input: SetProductionsOnFieldInput;
};


export type MutationSetRolesOnUserArgs = {
  input: SetRolesOnUserInput;
};


export type MutationSetStoragesOnInventoryArgs = {
  input: SetStoragesOnInventoryInput;
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


export type MutationUpdateManyStoragesArgs = {
  input: UpdateManyStoragesInput;
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


export type MutationUpdateOneStorageArgs = {
  input: UpdateOneStorageInput;
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
  acre?: Maybe<StringFieldComparison>;
  and?: Maybe<Array<ProductionFilterFieldFilter>>;
  cordinates?: Maybe<StringFieldComparison>;
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
  role?: Maybe<Role>;
  roles: RoleConnection;
  storage?: Maybe<Storage>;
  storages: StorageConnection;
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


export type QueryRoleArgs = {
  id: Scalars['ID'];
};


export type QueryRolesArgs = {
  filter?: RoleFilter;
  paging?: OffsetPaging;
  sorting?: Array<RoleSort>;
};


export type QueryStorageArgs = {
  id: Scalars['ID'];
};


export type QueryStoragesArgs = {
  filter?: StorageFilter;
  paging?: OffsetPaging;
  sorting?: Array<StorageSort>;
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

export type RemoveInventoriesFromStorageInput = {
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

export type RemoveRolesFromUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveStoragesFromInventoryInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type Role = {
  __typename?: 'Role';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: RolesEnum;
  updatedAt: Scalars['DateTime'];
};

export type RoleAggregateGroupBy = {
  __typename?: 'RoleAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<RolesEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RoleConnection = {
  __typename?: 'RoleConnection';
  /** Array of nodes. */
  nodes: Array<Role>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type RoleCountAggregate = {
  __typename?: 'RoleCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type RoleFilter = {
  and?: Maybe<Array<RoleFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<RolesEnumFilterComparison>;
  or?: Maybe<Array<RoleFilter>>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type RoleInput = {
  id: Scalars['String'];
  name?: Maybe<RolesEnum>;
};

export type RoleInputDto = {
  __typename?: 'RoleInputDTO';
  id: Scalars['String'];
  name?: Maybe<RolesEnum>;
};

export type RoleInputDtoFilter = {
  and?: Maybe<Array<RoleInputDtoFilter>>;
  name?: Maybe<RolesEnumFilterComparison>;
  or?: Maybe<Array<RoleInputDtoFilter>>;
};

export type RoleInputDtoSort = {
  direction: SortDirection;
  field: RoleInputDtoSortFields;
  nulls?: Maybe<SortNulls>;
};

export enum RoleInputDtoSortFields {
  Name = 'name'
}

export type RoleMaxAggregate = {
  __typename?: 'RoleMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<RolesEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RoleMinAggregate = {
  __typename?: 'RoleMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<RolesEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RoleSort = {
  direction: SortDirection;
  field: RoleSortFields;
  nulls?: Maybe<SortNulls>;
};

export enum RoleSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export enum RolesEnum {
  Employee = 'EMPLOYEE',
  SuperAdmin = 'SUPER_ADMIN'
}

export type RolesEnumFilterComparison = {
  eq?: Maybe<RolesEnum>;
  gt?: Maybe<RolesEnum>;
  gte?: Maybe<RolesEnum>;
  iLike?: Maybe<RolesEnum>;
  in?: Maybe<Array<RolesEnum>>;
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  like?: Maybe<RolesEnum>;
  lt?: Maybe<RolesEnum>;
  lte?: Maybe<RolesEnum>;
  neq?: Maybe<RolesEnum>;
  notILike?: Maybe<RolesEnum>;
  notIn?: Maybe<Array<RolesEnum>>;
  notLike?: Maybe<RolesEnum>;
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

export type SetInventoriesOnStorageInput = {
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

export type SetRolesOnUserInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetStoragesOnInventoryInput = {
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

export type Storage = {
  __typename?: 'Storage';
  amount: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  inventories?: Maybe<Inventory>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type StorageAggregateGroupBy = {
  __typename?: 'StorageAggregateGroupBy';
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StorageAvgAggregate = {
  __typename?: 'StorageAvgAggregate';
  amount?: Maybe<Scalars['Float']>;
};

export type StorageConnection = {
  __typename?: 'StorageConnection';
  /** Array of nodes. */
  nodes: Array<Storage>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type StorageCountAggregate = {
  __typename?: 'StorageCountAggregate';
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type StorageDeleteFilter = {
  amount?: Maybe<NumberFieldComparison>;
  and?: Maybe<Array<StorageDeleteFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<StorageDeleteFilter>>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type StorageDeleteResponse = {
  __typename?: 'StorageDeleteResponse';
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StorageFilter = {
  amount?: Maybe<NumberFieldComparison>;
  and?: Maybe<Array<StorageFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  inventories?: Maybe<StorageFilterInventoryFilter>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<StorageFilter>>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type StorageFilterInventoryFilter = {
  amount?: Maybe<NumberFieldComparison>;
  and?: Maybe<Array<StorageFilterInventoryFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<StorageFilterInventoryFilter>>;
  provider?: Maybe<StringFieldComparison>;
  storage?: Maybe<StringFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  value?: Maybe<NumberFieldComparison>;
};

export type StorageMaxAggregate = {
  __typename?: 'StorageMaxAggregate';
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StorageMinAggregate = {
  __typename?: 'StorageMinAggregate';
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StorageSort = {
  direction: SortDirection;
  field: StorageSortFields;
  nulls?: Maybe<SortNulls>;
};

export enum StorageSortFields {
  Amount = 'amount',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type StorageSumAggregate = {
  __typename?: 'StorageSumAggregate';
  amount?: Maybe<Scalars['Float']>;
};

export type StorageUpdateFilter = {
  amount?: Maybe<NumberFieldComparison>;
  and?: Maybe<Array<StorageUpdateFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<StorageUpdateFilter>>;
  updatedAt?: Maybe<DateFieldComparison>;
};

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
  date: Scalars['DateTime'];
  dayOfWeek?: Maybe<Scalars['Float']>;
  deletedAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userName?: Maybe<Scalars['String']>;
};

export type TaskAggregateGroupBy = {
  __typename?: 'TaskAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  dayOfWeek?: Maybe<Scalars['Float']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userName?: Maybe<Scalars['String']>;
};

export type TaskAvgAggregate = {
  __typename?: 'TaskAvgAggregate';
  dayOfWeek?: Maybe<Scalars['Float']>;
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
  date?: Maybe<Scalars['Int']>;
  dayOfWeek?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  userName?: Maybe<Scalars['Int']>;
};

export type TaskDeleteFilter = {
  and?: Maybe<Array<TaskDeleteFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  date?: Maybe<DateFieldComparison>;
  dayOfWeek?: Maybe<NumberFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<TaskDeleteFilter>>;
  title?: Maybe<StringFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  userName?: Maybe<StringFieldComparison>;
};

export type TaskDeleteResponse = {
  __typename?: 'TaskDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  dayOfWeek?: Maybe<Scalars['Float']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userName?: Maybe<Scalars['String']>;
};

export type TaskFilter = {
  and?: Maybe<Array<TaskFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  date?: Maybe<DateFieldComparison>;
  dayOfWeek?: Maybe<NumberFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<TaskFilter>>;
  title?: Maybe<StringFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  userName?: Maybe<StringFieldComparison>;
};

export type TaskMaxAggregate = {
  __typename?: 'TaskMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  dayOfWeek?: Maybe<Scalars['Float']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userName?: Maybe<Scalars['String']>;
};

export type TaskMinAggregate = {
  __typename?: 'TaskMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  dayOfWeek?: Maybe<Scalars['Float']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userName?: Maybe<Scalars['String']>;
};

export type TaskSort = {
  direction: SortDirection;
  field: TaskSortFields;
  nulls?: Maybe<SortNulls>;
};

export enum TaskSortFields {
  CreatedAt = 'createdAt',
  Date = 'date',
  DayOfWeek = 'dayOfWeek',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  UserName = 'userName'
}

export type TaskSumAggregate = {
  __typename?: 'TaskSumAggregate';
  dayOfWeek?: Maybe<Scalars['Float']>;
};

export type TaskUpdateFilter = {
  and?: Maybe<Array<TaskUpdateFilter>>;
  createdAt?: Maybe<DateFieldComparison>;
  date?: Maybe<DateFieldComparison>;
  dayOfWeek?: Maybe<NumberFieldComparison>;
  deletedAt?: Maybe<DateFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  id?: Maybe<StringFieldComparison>;
  or?: Maybe<Array<TaskUpdateFilter>>;
  title?: Maybe<StringFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
  userName?: Maybe<StringFieldComparison>;
};

export type UpdateFieldInput = {
  acre?: Maybe<Scalars['String']>;
  cordinates?: Maybe<Scalars['String']>;
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
  storages?: Maybe<Array<UpdateStorageInput>>;
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

export type UpdateManyStoragesInput = {
  /** Filter used to find fields to update */
  filter: StorageUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateStorageInput;
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

export type UpdateOneStorageInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateStorageInput;
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

export type UpdateStorageInput = {
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdateTaskInput = {
  date?: Maybe<Scalars['DateTime']>;
  dayOfWeek?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  CPF?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<RoleInput>>;
  telephone?: Maybe<Scalars['String']>;
};


export type User = {
  __typename?: 'User';
  CPF?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  roles: Array<RoleInputDto>;
  telephone?: Maybe<Scalars['String']>;
};


export type UserRolesArgs = {
  filter?: RoleInputDtoFilter;
  sorting?: Array<RoleInputDtoSort>;
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
  roles?: Maybe<UserFilterRoleInputDtoFilter>;
  telephone?: Maybe<StringFieldComparison>;
};

export type UserFilterRoleInputDtoFilter = {
  and?: Maybe<Array<UserFilterRoleInputDtoFilter>>;
  name?: Maybe<RolesEnumFilterComparison>;
  or?: Maybe<Array<UserFilterRoleInputDtoFilter>>;
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
