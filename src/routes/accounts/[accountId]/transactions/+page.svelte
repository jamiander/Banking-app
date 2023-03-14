<script lang="ts">
	import { onMount } from "svelte";
	import type { GetTotalsQuery, GetTransactionsQuery } from '../../../../graphql/graphql';
	import { graphqlGetCompletedTotal, graphqlGetPendingTotal, graphqlGetTotals, graphqlGetTransactions } from '../../../../graphql/graphqlApi';
    import Transactions from '../../../../components/Transactions.svelte'


    let transactions: GetTransactionsQuery['Transactions'];
    let total: Number;
    let completed: Number;
    let pending: Number;

    onMount(async () => {
        const response = await graphqlGetTransactions({});
        const result = await graphqlGetTotals({});
        const completedResult = await graphqlGetCompletedTotal({});
        const pendingResult = await graphqlGetPendingTotal({});
        transactions = response.data.Transactions
        total = result.data.Transactions_aggregate.aggregate?.sum?.amount
        completed = completedResult.data.Transactions_aggregate.aggregate?.sum?.amount
        pending = pendingResult.data.Transactions_aggregate.aggregate?.sum?.amount
    })

</script>
<Transactions {transactions} {total} {completed} {pending}/>
