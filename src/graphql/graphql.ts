import type { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  date: any;
  money: any;
  uuid: any;
};

/** columns and relationships of "Accounts" */
export type Accounts = {
  __typename?: 'Accounts';
  /** An array relationship */
  BankingApps: Array<Transactions>;
  /** An aggregate relationship */
  BankingApps_aggregate: Transactions_Aggregate;
  id: Scalars['uuid'];
  name: Scalars['String'];
};


/** columns and relationships of "Accounts" */
export type AccountsBankingAppsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};


/** columns and relationships of "Accounts" */
export type AccountsBankingApps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

/** aggregated selection of "Accounts" */
export type Accounts_Aggregate = {
  __typename?: 'Accounts_aggregate';
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

/** aggregate fields of "Accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: 'Accounts_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
};


/** aggregate fields of "Accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  BankingApps?: InputMaybe<Transactions_Bool_Exp>;
  BankingApps_aggregate?: InputMaybe<Transactions_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Accounts_Bool_Exp>>;
  _not?: InputMaybe<Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Accounts_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountsPkey = 'Accounts_pkey'
}

/** input type for inserting data into table "Accounts" */
export type Accounts_Insert_Input = {
  BankingApps?: InputMaybe<Transactions_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: 'Accounts_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: 'Accounts_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Accounts" */
export type Accounts_Mutation_Response = {
  __typename?: 'Accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>;
};

/** on_conflict condition type for table "Accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns?: Array<Accounts_Update_Column>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "Accounts". */
export type Accounts_Order_By = {
  BankingApps_aggregate?: InputMaybe<Transactions_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Accounts */
export type Accounts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Accounts" */
export enum Accounts_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "Accounts" */
export type Accounts_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "Accounts" */
export type Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Accounts_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "Accounts" */
export enum Accounts_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Accounts_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Accounts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Accounts_Bool_Exp;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "Transactions" */
export type Transactions = {
  __typename?: 'Transactions';
  accountId?: Maybe<Scalars['uuid']>;
  amount: Scalars['money'];
  category: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  id: Scalars['uuid'];
  postDate?: Maybe<Scalars['date']>;
  status: Scalars['String'];
  transactionDate?: Maybe<Scalars['date']>;
  updatedAt?: Maybe<Scalars['String']>;
};

/** aggregated selection of "Transactions" */
export type Transactions_Aggregate = {
  __typename?: 'Transactions_aggregate';
  aggregate?: Maybe<Transactions_Aggregate_Fields>;
  nodes: Array<Transactions>;
};

export type Transactions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Transactions_Aggregate_Bool_Exp_Count>;
};

export type Transactions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Transactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Transactions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Transactions" */
export type Transactions_Aggregate_Fields = {
  __typename?: 'Transactions_aggregate_fields';
  avg?: Maybe<Transactions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Transactions_Max_Fields>;
  min?: Maybe<Transactions_Min_Fields>;
  stddev?: Maybe<Transactions_Stddev_Fields>;
  stddev_pop?: Maybe<Transactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transactions_Stddev_Samp_Fields>;
  sum?: Maybe<Transactions_Sum_Fields>;
  var_pop?: Maybe<Transactions_Var_Pop_Fields>;
  var_samp?: Maybe<Transactions_Var_Samp_Fields>;
  variance?: Maybe<Transactions_Variance_Fields>;
};


/** aggregate fields of "Transactions" */
export type Transactions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Transactions" */
export type Transactions_Aggregate_Order_By = {
  avg?: InputMaybe<Transactions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Transactions_Max_Order_By>;
  min?: InputMaybe<Transactions_Min_Order_By>;
  stddev?: InputMaybe<Transactions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Transactions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Transactions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Transactions_Sum_Order_By>;
  var_pop?: InputMaybe<Transactions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Transactions_Var_Samp_Order_By>;
  variance?: InputMaybe<Transactions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Transactions" */
export type Transactions_Arr_Rel_Insert_Input = {
  data: Array<Transactions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Transactions_On_Conflict>;
};

/** aggregate avg on columns */
export type Transactions_Avg_Fields = {
  __typename?: 'Transactions_avg_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Transactions" */
export type Transactions_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Transactions". All fields are combined with a logical 'AND'. */
export type Transactions_Bool_Exp = {
  _and?: InputMaybe<Array<Transactions_Bool_Exp>>;
  _not?: InputMaybe<Transactions_Bool_Exp>;
  _or?: InputMaybe<Array<Transactions_Bool_Exp>>;
  accountId?: InputMaybe<Uuid_Comparison_Exp>;
  amount?: InputMaybe<Money_Comparison_Exp>;
  category?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  postDate?: InputMaybe<Date_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  transactionDate?: InputMaybe<Date_Comparison_Exp>;
  updatedAt?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Transactions" */
export enum Transactions_Constraint {
  /** unique or primary key constraint on columns "id" */
  BankingAppPkey = 'BankingApp_pkey'
}

/** input type for incrementing numeric columns in table "Transactions" */
export type Transactions_Inc_Input = {
  amount?: InputMaybe<Scalars['money']>;
};

/** input type for inserting data into table "Transactions" */
export type Transactions_Insert_Input = {
  accountId?: InputMaybe<Scalars['uuid']>;
  amount?: InputMaybe<Scalars['money']>;
  category?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  postDate?: InputMaybe<Scalars['date']>;
  status?: InputMaybe<Scalars['String']>;
  transactionDate?: InputMaybe<Scalars['date']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Transactions_Max_Fields = {
  __typename?: 'Transactions_max_fields';
  accountId?: Maybe<Scalars['uuid']>;
  amount?: Maybe<Scalars['money']>;
  category?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  postDate?: Maybe<Scalars['date']>;
  status?: Maybe<Scalars['String']>;
  transactionDate?: Maybe<Scalars['date']>;
  updatedAt?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Transactions" */
export type Transactions_Max_Order_By = {
  accountId?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  postDate?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  transactionDate?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transactions_Min_Fields = {
  __typename?: 'Transactions_min_fields';
  accountId?: Maybe<Scalars['uuid']>;
  amount?: Maybe<Scalars['money']>;
  category?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  postDate?: Maybe<Scalars['date']>;
  status?: Maybe<Scalars['String']>;
  transactionDate?: Maybe<Scalars['date']>;
  updatedAt?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Transactions" */
export type Transactions_Min_Order_By = {
  accountId?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  postDate?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  transactionDate?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Transactions" */
export type Transactions_Mutation_Response = {
  __typename?: 'Transactions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transactions>;
};

/** on_conflict condition type for table "Transactions" */
export type Transactions_On_Conflict = {
  constraint: Transactions_Constraint;
  update_columns?: Array<Transactions_Update_Column>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

/** Ordering options when selecting data from "Transactions". */
export type Transactions_Order_By = {
  accountId?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  postDate?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  transactionDate?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Transactions */
export type Transactions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Transactions" */
export enum Transactions_Select_Column {
  /** column name */
  AccountId = 'accountId',
  /** column name */
  Amount = 'amount',
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  PostDate = 'postDate',
  /** column name */
  Status = 'status',
  /** column name */
  TransactionDate = 'transactionDate',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "Transactions" */
export type Transactions_Set_Input = {
  accountId?: InputMaybe<Scalars['uuid']>;
  amount?: InputMaybe<Scalars['money']>;
  category?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  postDate?: InputMaybe<Scalars['date']>;
  status?: InputMaybe<Scalars['String']>;
  transactionDate?: InputMaybe<Scalars['date']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Transactions_Stddev_Fields = {
  __typename?: 'Transactions_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Transactions" */
export type Transactions_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transactions_Stddev_Pop_Fields = {
  __typename?: 'Transactions_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Transactions" */
export type Transactions_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transactions_Stddev_Samp_Fields = {
  __typename?: 'Transactions_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Transactions" */
export type Transactions_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Transactions" */
export type Transactions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transactions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transactions_Stream_Cursor_Value_Input = {
  accountId?: InputMaybe<Scalars['uuid']>;
  amount?: InputMaybe<Scalars['money']>;
  category?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  postDate?: InputMaybe<Scalars['date']>;
  status?: InputMaybe<Scalars['String']>;
  transactionDate?: InputMaybe<Scalars['date']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Transactions_Sum_Fields = {
  __typename?: 'Transactions_sum_fields';
  amount?: Maybe<Scalars['money']>;
};

/** order by sum() on columns of table "Transactions" */
export type Transactions_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** update columns of table "Transactions" */
export enum Transactions_Update_Column {
  /** column name */
  AccountId = 'accountId',
  /** column name */
  Amount = 'amount',
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  PostDate = 'postDate',
  /** column name */
  Status = 'status',
  /** column name */
  TransactionDate = 'transactionDate',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Transactions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Transactions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Transactions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Transactions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Transactions_Var_Pop_Fields = {
  __typename?: 'Transactions_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Transactions" */
export type Transactions_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transactions_Var_Samp_Fields = {
  __typename?: 'Transactions_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Transactions" */
export type Transactions_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Transactions_Variance_Fields = {
  __typename?: 'Transactions_variance_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Transactions" */
export type Transactions_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** Boolean expression to compare columns of type "money". All fields are combined with logical 'AND'. */
export type Money_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['money']>;
  _gt?: InputMaybe<Scalars['money']>;
  _gte?: InputMaybe<Scalars['money']>;
  _in?: InputMaybe<Array<Scalars['money']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['money']>;
  _lte?: InputMaybe<Scalars['money']>;
  _neq?: InputMaybe<Scalars['money']>;
  _nin?: InputMaybe<Array<Scalars['money']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Accounts" */
  delete_Accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "Accounts" */
  delete_Accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "Transactions" */
  delete_Transactions?: Maybe<Transactions_Mutation_Response>;
  /** delete single row from the table: "Transactions" */
  delete_Transactions_by_pk?: Maybe<Transactions>;
  /** insert data into the table: "Accounts" */
  insert_Accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "Accounts" */
  insert_Accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "Transactions" */
  insert_Transactions?: Maybe<Transactions_Mutation_Response>;
  /** insert a single row into the table: "Transactions" */
  insert_Transactions_one?: Maybe<Transactions>;
  /** update data of the table: "Accounts" */
  update_Accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "Accounts" */
  update_Accounts_by_pk?: Maybe<Accounts>;
  /** update multiples rows of table: "Accounts" */
  update_Accounts_many?: Maybe<Array<Maybe<Accounts_Mutation_Response>>>;
  /** update data of the table: "Transactions" */
  update_Transactions?: Maybe<Transactions_Mutation_Response>;
  /** update single row of the table: "Transactions" */
  update_Transactions_by_pk?: Maybe<Transactions>;
  /** update multiples rows of table: "Transactions" */
  update_Transactions_many?: Maybe<Array<Maybe<Transactions_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TransactionsArgs = {
  where: Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transactions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TransactionsArgs = {
  objects: Array<Transactions_Insert_Input>;
  on_conflict?: InputMaybe<Transactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transactions_OneArgs = {
  object: Transactions_Insert_Input;
  on_conflict?: InputMaybe<Transactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _set?: InputMaybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _set?: InputMaybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_ManyArgs = {
  updates: Array<Accounts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TransactionsArgs = {
  _inc?: InputMaybe<Transactions_Inc_Input>;
  _set?: InputMaybe<Transactions_Set_Input>;
  where: Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transactions_By_PkArgs = {
  _inc?: InputMaybe<Transactions_Inc_Input>;
  _set?: InputMaybe<Transactions_Set_Input>;
  pk_columns: Transactions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Transactions_ManyArgs = {
  updates: Array<Transactions_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Accounts" */
  Accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "Accounts" */
  Accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "Accounts" using primary key columns */
  Accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "Transactions" */
  Transactions: Array<Transactions>;
  /** fetch aggregated fields from the table: "Transactions" */
  Transactions_aggregate: Transactions_Aggregate;
  /** fetch data from the table: "Transactions" using primary key columns */
  Transactions_by_pk?: Maybe<Transactions>;
};


export type Query_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};


export type Query_RootTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};


export type Query_RootTransactions_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Accounts" */
  Accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "Accounts" */
  Accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "Accounts" using primary key columns */
  Accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table in a streaming manner: "Accounts" */
  Accounts_stream: Array<Accounts>;
  /** fetch data from the table: "Transactions" */
  Transactions: Array<Transactions>;
  /** fetch aggregated fields from the table: "Transactions" */
  Transactions_aggregate: Transactions_Aggregate;
  /** fetch data from the table: "Transactions" using primary key columns */
  Transactions_by_pk?: Maybe<Transactions>;
  /** fetch data from the table in a streaming manner: "Transactions" */
  Transactions_stream: Array<Transactions>;
};


export type Subscription_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAccounts_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};


export type Subscription_RootTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transactions_Order_By>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};


export type Subscription_RootTransactions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTransactions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Transactions_Stream_Cursor_Input>>;
  where?: InputMaybe<Transactions_Bool_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type InsertTransactionsMutationVariables = Exact<{
  objects: Array<Transactions_Insert_Input> | Transactions_Insert_Input;
}>;


export type InsertTransactionsMutation = { __typename?: 'mutation_root', insert_Transactions?: { __typename?: 'Transactions_mutation_response', affected_rows: number } | null };

export type GetCompletedTotalQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompletedTotalQuery = { __typename?: 'query_root', Transactions_aggregate: { __typename?: 'Transactions_aggregate', aggregate?: { __typename?: 'Transactions_aggregate_fields', sum?: { __typename?: 'Transactions_sum_fields', amount?: any | null } | null } | null, nodes: Array<{ __typename?: 'Transactions', amount: any }> } };

export type GetPendingTotalQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPendingTotalQuery = { __typename?: 'query_root', Transactions_aggregate: { __typename?: 'Transactions_aggregate', aggregate?: { __typename?: 'Transactions_aggregate_fields', sum?: { __typename?: 'Transactions_sum_fields', amount?: any | null } | null } | null, nodes: Array<{ __typename?: 'Transactions', amount: any }> } };

export type GetTotalsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTotalsQuery = { __typename?: 'query_root', Transactions_aggregate: { __typename?: 'Transactions_aggregate', aggregate?: { __typename?: 'Transactions_aggregate_fields', count: number, sum?: { __typename?: 'Transactions_sum_fields', amount?: any | null } | null } | null, nodes: Array<{ __typename?: 'Transactions', amount: any }> } };

export type GetTransactionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTransactionsQuery = { __typename?: 'query_root', Transactions: Array<{ __typename?: 'Transactions', id: any, createdAt?: string | null, updatedAt?: string | null, amount: any, description: string, category: string, status: string, transactionDate?: any | null, postDate?: any | null }> };


export const InsertTransactionsDocument = gql`
    mutation insertTransactions($objects: [Transactions_insert_input!]!) {
  insert_Transactions(objects: $objects) {
    affected_rows
  }
}
    `;
export const GetCompletedTotalDocument = gql`
    query getCompletedTotal {
  Transactions_aggregate(where: {status: {_eq: "completed"}}) {
    aggregate {
      sum {
        amount
      }
    }
    nodes {
      amount
    }
  }
}
    `;
export const GetPendingTotalDocument = gql`
    query getPendingTotal {
  Transactions_aggregate(where: {status: {_eq: "pending"}}) {
    aggregate {
      sum {
        amount
      }
    }
    nodes {
      amount
    }
  }
}
    `;
export const GetTotalsDocument = gql`
    query getTotals {
  Transactions_aggregate {
    aggregate {
      count
      sum {
        amount
      }
    }
    nodes {
      amount
    }
  }
}
    `;
export const GetTransactionsDocument = gql`
    query getTransactions {
  Transactions {
    id
    createdAt
    updatedAt
    amount
    description
    category
    status
    transactionDate
    postDate
  }
}
    `;
export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    insertTransactions(variables: InsertTransactionsMutationVariables, options?: C): Promise<InsertTransactionsMutation> {
      return requester<InsertTransactionsMutation, InsertTransactionsMutationVariables>(InsertTransactionsDocument, variables, options) as Promise<InsertTransactionsMutation>;
    },
    getCompletedTotal(variables?: GetCompletedTotalQueryVariables, options?: C): Promise<GetCompletedTotalQuery> {
      return requester<GetCompletedTotalQuery, GetCompletedTotalQueryVariables>(GetCompletedTotalDocument, variables, options) as Promise<GetCompletedTotalQuery>;
    },
    getPendingTotal(variables?: GetPendingTotalQueryVariables, options?: C): Promise<GetPendingTotalQuery> {
      return requester<GetPendingTotalQuery, GetPendingTotalQueryVariables>(GetPendingTotalDocument, variables, options) as Promise<GetPendingTotalQuery>;
    },
    getTotals(variables?: GetTotalsQueryVariables, options?: C): Promise<GetTotalsQuery> {
      return requester<GetTotalsQuery, GetTotalsQueryVariables>(GetTotalsDocument, variables, options) as Promise<GetTotalsQuery>;
    },
    getTransactions(variables?: GetTransactionsQueryVariables, options?: C): Promise<GetTransactionsQuery> {
      return requester<GetTransactionsQuery, GetTransactionsQueryVariables>(GetTransactionsDocument, variables, options) as Promise<GetTransactionsQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;