import { GetTotalsDocument, GetTransactionsDocument, type GetTotalsQuery, type GetTotalsQueryVariables, type GetTransactionsQuery, type GetTransactionsQueryVariables } from "./graphql";
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