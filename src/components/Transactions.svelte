<script lang="ts">
	import type { GetTransactionsDocument, GetTransactionsQuery } from "../graphql/graphql";
    import Time from "svelte-time";
	import { createEventDispatcher } from "svelte";
    export let transactions: GetTransactionsQuery['Transactions'] = [];
    export let total: Number;
    export let completed: Number;
    export let pending: Number;
    export let transactionDate: Date;
    export let limit: Number;
    export let offset: Number;

    const dispatch = createEventDispatcher();

</script>

<input type="date" bind:value={transactionDate}/>

<h3>Transactions Per Page</h3>
<input type="number" bind:value={limit}>

<h3>Offset</h3>
<input type="number" bind:value={offset}/>

<button on:click={() => dispatch('reload')}>Reload</button>

<div class="flex-auto p-6 text-lg font-semibold text-slate-900"> Total All:  {total}   Total Completed:  {completed}   Total Pending:  {pending}</div>
   
<div>

<table class='table-fixed'>
        <thead class="border-b font-medium dark:border-neutral-500">
            <th scope="col" class="px-15 py-4">Amount</th>
            <th scope="col" class="px-15 py-4">Description</th>
            <th scope="col" class="px-15 py-4">Category</th>
            <th scope="col" class="px-15 py-4">Transaction Date</th>
            <th scope="col" class="px-15 py-4">Status</th>
            <th scope="col" class="px-15 py-4">Post Date</th>
        </thead>
        <tbody>
            {#each transactions as transaction }
                <tr>
                    <td class="whitespace-nowrap px-20 py-2">{transaction.amount}</td>
                    <td class="whitespace-nowrap px-20 py-2">{transaction.description}</td>
                    <td class="whitespace-nowrap px-20 py-2">{transaction.category}</td>
                    <td class="whitespace-nowrap px-20 py-2">{transaction.transactionDate}</td>
                    <td class="whitespace-nowrap px-20 py-2">{transaction.status}</td>
                    <td class="whitespace-nowrap px-20 py-2">{transaction.postDate}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
   
