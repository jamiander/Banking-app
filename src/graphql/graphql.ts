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

/** columns and relationships of "BankingApp" */
export type BankingApp = {
  __typename?: 'BankingApp';
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

/** aggregated selection of "BankingApp" */
export type BankingApp_Aggregate = {
  __typename?: 'BankingApp_aggregate';
  aggregate?: Maybe<BankingApp_Aggregate_Fields>;
  nodes: Array<BankingApp>;
};

/** aggregate fields of "BankingApp" */
export type BankingApp_Aggregate_Fields = {
  __typename?: 'BankingApp_aggregate_fields';
  avg?: Maybe<BankingApp_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<BankingApp_Max_Fields>;
  min?: Maybe<BankingApp_Min_Fields>;
  stddev?: Maybe<BankingApp_Stddev_Fields>;
  stddev_pop?: Maybe<BankingApp_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<BankingApp_Stddev_Samp_Fields>;
  sum?: Maybe<BankingApp_Sum_Fields>;
  var_pop?: Maybe<BankingApp_Var_Pop_Fields>;
  var_samp?: Maybe<BankingApp_Var_Samp_Fields>;
  variance?: Maybe<BankingApp_Variance_Fields>;
};


/** aggregate fields of "BankingApp" */
export type BankingApp_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<BankingApp_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type BankingApp_Avg_Fields = {
  __typename?: 'BankingApp_avg_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "BankingApp". All fields are combined with a logical 'AND'. */
export type BankingApp_Bool_Exp = {
  _and?: InputMaybe<Array<BankingApp_Bool_Exp>>;
  _not?: InputMaybe<BankingApp_Bool_Exp>;
  _or?: InputMaybe<Array<BankingApp_Bool_Exp>>;
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

/** unique or primary key constraints on table "BankingApp" */
export enum BankingApp_Constraint {
  /** unique or primary key constraint on columns "id" */
  BankingAppPkey = 'BankingApp_pkey'
}

/** input type for incrementing numeric columns in table "BankingApp" */
export type BankingApp_Inc_Input = {
  amount?: InputMaybe<Scalars['money']>;
};

/** input type for inserting data into table "BankingApp" */
export type BankingApp_Insert_Input = {
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
export type BankingApp_Max_Fields = {
  __typename?: 'BankingApp_max_fields';
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

/** aggregate min on columns */
export type BankingApp_Min_Fields = {
  __typename?: 'BankingApp_min_fields';
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

/** response of any mutation on the table "BankingApp" */
export type BankingApp_Mutation_Response = {
  __typename?: 'BankingApp_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<BankingApp>;
};

/** on_conflict condition type for table "BankingApp" */
export type BankingApp_On_Conflict = {
  constraint: BankingApp_Constraint;
  update_columns?: Array<BankingApp_Update_Column>;
  where?: InputMaybe<BankingApp_Bool_Exp>;
};

/** Ordering options when selecting data from "BankingApp". */
export type BankingApp_Order_By = {
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

/** primary key columns input for table: BankingApp */
export type BankingApp_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "BankingApp" */
export enum BankingApp_Select_Column {
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

/** input type for updating data in table "BankingApp" */
export type BankingApp_Set_Input = {
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
export type BankingApp_Stddev_Fields = {
  __typename?: 'BankingApp_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type BankingApp_Stddev_Pop_Fields = {
  __typename?: 'BankingApp_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type BankingApp_Stddev_Samp_Fields = {
  __typename?: 'BankingApp_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "BankingApp" */
export type BankingApp_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: BankingApp_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type BankingApp_Stream_Cursor_Value_Input = {
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
export type BankingApp_Sum_Fields = {
  __typename?: 'BankingApp_sum_fields';
  amount?: Maybe<Scalars['money']>;
};

/** update columns of table "BankingApp" */
export enum BankingApp_Update_Column {
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

export type BankingApp_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<BankingApp_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<BankingApp_Set_Input>;
  /** filter the rows which have to be updated */
  where: BankingApp_Bool_Exp;
};

/** aggregate var_pop on columns */
export type BankingApp_Var_Pop_Fields = {
  __typename?: 'BankingApp_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type BankingApp_Var_Samp_Fields = {
  __typename?: 'BankingApp_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type BankingApp_Variance_Fields = {
  __typename?: 'BankingApp_variance_fields';
  amount?: Maybe<Scalars['Float']>;
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
  /** delete data from the table: "BankingApp" */
  delete_BankingApp?: Maybe<BankingApp_Mutation_Response>;
  /** delete single row from the table: "BankingApp" */
  delete_BankingApp_by_pk?: Maybe<BankingApp>;
  /** insert data into the table: "BankingApp" */
  insert_BankingApp?: Maybe<BankingApp_Mutation_Response>;
  /** insert a single row into the table: "BankingApp" */
  insert_BankingApp_one?: Maybe<BankingApp>;
  /** update data of the table: "BankingApp" */
  update_BankingApp?: Maybe<BankingApp_Mutation_Response>;
  /** update single row of the table: "BankingApp" */
  update_BankingApp_by_pk?: Maybe<BankingApp>;
  /** update multiples rows of table: "BankingApp" */
  update_BankingApp_many?: Maybe<Array<Maybe<BankingApp_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_BankingAppArgs = {
  where: BankingApp_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_BankingApp_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_BankingAppArgs = {
  objects: Array<BankingApp_Insert_Input>;
  on_conflict?: InputMaybe<BankingApp_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BankingApp_OneArgs = {
  object: BankingApp_Insert_Input;
  on_conflict?: InputMaybe<BankingApp_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_BankingAppArgs = {
  _inc?: InputMaybe<BankingApp_Inc_Input>;
  _set?: InputMaybe<BankingApp_Set_Input>;
  where: BankingApp_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_BankingApp_By_PkArgs = {
  _inc?: InputMaybe<BankingApp_Inc_Input>;
  _set?: InputMaybe<BankingApp_Set_Input>;
  pk_columns: BankingApp_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_BankingApp_ManyArgs = {
  updates: Array<BankingApp_Updates>;
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
  /** fetch data from the table: "BankingApp" */
  BankingApp: Array<BankingApp>;
  /** fetch aggregated fields from the table: "BankingApp" */
  BankingApp_aggregate: BankingApp_Aggregate;
  /** fetch data from the table: "BankingApp" using primary key columns */
  BankingApp_by_pk?: Maybe<BankingApp>;
};


export type Query_RootBankingAppArgs = {
  distinct_on?: InputMaybe<Array<BankingApp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BankingApp_Order_By>>;
  where?: InputMaybe<BankingApp_Bool_Exp>;
};


export type Query_RootBankingApp_AggregateArgs = {
  distinct_on?: InputMaybe<Array<BankingApp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BankingApp_Order_By>>;
  where?: InputMaybe<BankingApp_Bool_Exp>;
};


export type Query_RootBankingApp_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "BankingApp" */
  BankingApp: Array<BankingApp>;
  /** fetch aggregated fields from the table: "BankingApp" */
  BankingApp_aggregate: BankingApp_Aggregate;
  /** fetch data from the table: "BankingApp" using primary key columns */
  BankingApp_by_pk?: Maybe<BankingApp>;
  /** fetch data from the table in a streaming manner: "BankingApp" */
  BankingApp_stream: Array<BankingApp>;
};


export type Subscription_RootBankingAppArgs = {
  distinct_on?: InputMaybe<Array<BankingApp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BankingApp_Order_By>>;
  where?: InputMaybe<BankingApp_Bool_Exp>;
};


export type Subscription_RootBankingApp_AggregateArgs = {
  distinct_on?: InputMaybe<Array<BankingApp_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BankingApp_Order_By>>;
  where?: InputMaybe<BankingApp_Bool_Exp>;
};


export type Subscription_RootBankingApp_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBankingApp_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<BankingApp_Stream_Cursor_Input>>;
  where?: InputMaybe<BankingApp_Bool_Exp>;
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
  objects: Array<BankingApp_Insert_Input> | BankingApp_Insert_Input;
}>;


export type InsertTransactionsMutation = { __typename?: 'mutation_root', insert_BankingApp?: { __typename?: 'BankingApp_mutation_response', affected_rows: number } | null };

export type GetTotalsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTotalsQuery = { __typename?: 'query_root', BankingApp_aggregate: { __typename?: 'BankingApp_aggregate', aggregate?: { __typename?: 'BankingApp_aggregate_fields', count: number, sum?: { __typename?: 'BankingApp_sum_fields', amount?: any | null } | null } | null, nodes: Array<{ __typename?: 'BankingApp', amount: any }> } };

export type GetTransactionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTransactionsQuery = { __typename?: 'query_root', BankingApp: Array<{ __typename?: 'BankingApp', id: any, createdAt?: string | null, updatedAt?: string | null, amount: any, description: string, category: string, status: string, transactionDate?: any | null, postDate?: any | null }> };


export const InsertTransactionsDocument = gql`
    mutation insertTransactions($objects: [BankingApp_insert_input!]!) {
  insert_BankingApp(objects: $objects) {
    affected_rows
  }
}
    `;
export const GetTotalsDocument = gql`
    query getTotals {
  BankingApp_aggregate {
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
  BankingApp {
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
    getTotals(variables?: GetTotalsQueryVariables, options?: C): Promise<GetTotalsQuery> {
      return requester<GetTotalsQuery, GetTotalsQueryVariables>(GetTotalsDocument, variables, options) as Promise<GetTotalsQuery>;
    },
    getTransactions(variables?: GetTransactionsQueryVariables, options?: C): Promise<GetTransactionsQuery> {
      return requester<GetTransactionsQuery, GetTransactionsQueryVariables>(GetTransactionsDocument, variables, options) as Promise<GetTransactionsQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;