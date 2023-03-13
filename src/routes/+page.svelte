<script lang="ts">
	import { onMount } from "svelte";
	import type { GetTotalsQuery, GetTransactionsQuery } from '../graphql/graphql';
	import { graphqlGetTotals, graphqlGetTransactions } from '../graphql/graphqlApi';
    import Transactions from '../components/Transactions.svelte'


    let transactions: GetTransactionsQuery['BankingApp'];
    let total: number;

    onMount(async () => {
        const response = await graphqlGetTransactions({});
        const result = await graphqlGetTotals({});
        transactions = response.data.BankingApp
        total = Number(result.data.BankingApp_aggregate.aggregate?.sum)

        console.log(transactions);
    })

</script>
<Transactions {transactions}/>
