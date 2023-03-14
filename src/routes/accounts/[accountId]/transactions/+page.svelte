<script lang="ts">
	import { onMount } from "svelte";
	import type { GetTransactionsQuery } from '../../../../graphql/graphql';
	import { graphqlGetCompletedTotal, graphqlGetPendingTotal, graphqlGetTotals, graphqlGetTransactions } from '../../../../graphql/graphqlApi';
    import Transactions from '../../../../components/Transactions.svelte'
	import { breadCrumbStore } from "../../../../breadCrumbStore";
	import { page } from "$app/stores";
    let params = $page.params
	let route = $page.route.id;

    let transactions: GetTransactionsQuery['Transactions'];
    let total: Number;
    let completed: Number;
    let pending: Number;
    let selectedTransactions: GetTransactionsQuery['Transactions'];

    onMount(async () => {
        const response = await graphqlGetTransactions({});
        transactions = response.data.Transactions
        selectedTransactions = transactions.filter(p => p.accountId === params.accountId)

        const result = await graphqlGetTotals({});
        total = result.data.Transactions_aggregate.aggregate?.sum?.amount

        const completedResult = await graphqlGetCompletedTotal({});
        completed = completedResult.data.Transactions_aggregate.aggregate?.sum?.amount

        const pendingResult = await graphqlGetPendingTotal({});
        pending = pendingResult.data.Transactions_aggregate.aggregate?.sum?.amount
    })

    $breadCrumbStore = [
		{ name: 'Home', url: '/' },
		{ name: 'Accounts', url: '/accounts' },
		{
			name: 'Account',
			url: '/accounts'
		},
		{ name: 'Transactions', url: '/accounts/[params.accountId]/transactions' }
	];
</script>

<Transactions {selectedTransactions} {total} {completed} {pending}/>
