<script lang="ts">
	import { onMount } from "svelte";
	import type { GetTransactionsQuery, Transactions_Bool_Exp, Transactions_Order_By } from '../../../../graphql/graphql';
	import { graphqlGetCompletedTotal, graphqlGetPendingTotal, graphqlGetTotals, graphqlGetTransactions, graphqlUpdateTransactions } from '../../../../graphql/graphqlApi';
    import Transactions from '../../../../components/Transactions.svelte'
	import { breadCrumbStore } from "../../../../breadCrumbStore";
	import { page } from "$app/stores";
	import { stringify } from "postcss";
    let params = $page.params
	let route = $page.route.id;

    let transactionDate: Date;
    let transactions: GetTransactionsQuery['Transactions'];
    let limit: number = 5;
    let offset: number = 0;
    let category: string = "All";
    let total: Number;
    let completed: Number;
    let pending: Number;

    let set: {description: string, amount: number};

    onMount(async () => {
        await loadTransactions(transactionDate, limit, offset, category);
    })

    async function loadTransactions(transactionDate: Date, limit: number, offset: number, category: string) {
        let where:Transactions_Bool_Exp = {accountId: {_eq: params.accountId}}
        if (transactionDate)where.transactionDate = {_gte: transactionDate}
        if (category !== "All")where.category = {_eq: category}
        
        const response = await graphqlGetTransactions({where, limit, offset});
        transactions = response.data.Transactions
     
        const result = await graphqlGetTotals({accountId: params.accountId});
        total = result.data.Transactions_aggregate.aggregate?.sum?.amount

        const completedResult = await graphqlGetCompletedTotal({accountId: params.accountId});
        completed = completedResult.data.Transactions_aggregate.aggregate?.sum?.amount

        const pendingResult = await graphqlGetPendingTotal({accountId: params.accountId});
        pending = pendingResult.data.Transactions_aggregate.aggregate?.sum?.amount
    }

    async function updateTransaction(id: number, set: {description: string, amount: number})
    {
        const response = await graphqlUpdateTransactions({id: id, set: set})
    }

    $breadCrumbStore = [
		{ name: 'Home', url: '/' },
		{ name: 'Accounts', url: '/accounts' },
		{
			name: 'Account',
			url: '/accounts'
		},
		{ name: 'Transactions', url: '/accounts/{params.accountId}/transactions' }
	];
	
</script>

<Transactions {transactions} {total} {completed} {pending} bind:transactionDate = {transactionDate} 
bind:limit = {limit} bind:offset = {offset} bind:category = {category} on:reload={
() => loadTransactions(transactionDate, limit, offset, category)}/>
