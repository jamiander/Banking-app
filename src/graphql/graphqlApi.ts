import { GetAccountsDocument, GetCompletedTotalDocument, GetPendingTotalDocument, GetTotalsDocument, GetTransactionsDocument, type GetAccountsQuery, type GetAccountsQueryVariables, type GetCompletedTotalQuery, type GetCompletedTotalQueryVariables, type GetFilteredTransactionsQuery, type GetFilteredTransactionsQueryVariables, type GetPendingTotalQuery, type GetPendingTotalQueryVariables, type GetTotalsQuery, type GetTotalsQueryVariables, type GetTransactionsQuery, type GetTransactionsQueryVariables, type UpdateTransactionsMutation, type UpdateTransactionsMutationVariables } from "./graphql";
import { print } from "graphql";
import { env } from "$env/dynamic/public";

const headers = {
  'Content-Type': 'application/json',
  'x-hasura-admin-secret': env.PUBLIC_HASURA_ADMIN_SECRET
}

type GraphQLResponse<T> = {
  errors: any;
  data: T
}

export async function graphqlGetTransactions(variables: GetTransactionsQueryVariables) {
    const request = await fetch(env.PUBLIC_HASURA_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          query: print(GetTransactionsDocument),
          variables
        })
    })
    return await request.json() as GraphQLResponse<GetTransactionsQuery>;
}

export async function graphqlGetTotals(variables: GetTotalsQueryVariables) {
    const request = await fetch(env.PUBLIC_HASURA_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            query: print(GetTotalsDocument),
            variables
        })
    })
    return await request.json() as GraphQLResponse<GetTotalsQuery>;
}

export async function graphqlGetCompletedTotal(variables: GetCompletedTotalQueryVariables) {
    const request = await fetch(env.PUBLIC_HASURA_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            query: print(GetCompletedTotalDocument),
            variables
        })
    })
    return await request.json() as GraphQLResponse<GetCompletedTotalQuery>;
}

export async function graphqlGetPendingTotal(variables: GetPendingTotalQueryVariables) {
    const request = await fetch(env.PUBLIC_HASURA_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            query: print(GetPendingTotalDocument),
            variables
        })
    })
    return await request.json() as GraphQLResponse<GetPendingTotalQuery>;
}

export async function graphqlGetAccounts(variables: GetAccountsQueryVariables) {
    const request = await fetch(env.PUBLIC_HASURA_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          query: print(GetAccountsDocument),
          variables
        })
    })
    return await request.json() as GraphQLResponse<GetAccountsQuery>;
}

export async function graphqlUpdateTransactions(variables: UpdateTransactionsMutationVariables) {
    const request = await fetch(env.PUBLIC_HASURA_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          query: print(GetAccountsDocument),
          variables
        })
    })
    return await request.json() as GraphQLResponse<UpdateTransactionsMutation>;
} 