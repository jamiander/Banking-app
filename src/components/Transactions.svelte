<script lang="ts">
	import type { GetTransactionsDocument, GetTransactionsQuery } from "../graphql/graphql";
	import { createEventDispatcher } from "svelte";
    export let transactions: GetTransactionsQuery['Transactions'] = [];
    export let total: Number;
    export let completed: Number;
    export let pending: Number;
    export let transactionDate: Date;
    export let limit: Number;
    export let offset: Number;
    export let category: String = "All";

    let items = [5, 10, 15]
    let selections = ["All", "food", "entertainment", "utilities"]

    const dispatch = createEventDispatcher();
    
</script>

<div class="flex-auto flex space-x-4">
<div class="
    m-1
    p-1
    border border-grey-500 rounded-lg
    shadow-xl
    text-black-500
    rounded-lg">
    <input type="date" bind:value={transactionDate}/>
</div>
<div class="
    m-1
    p-1
    border border-grey-500 rounded-lg
    shadow-xl
    text-black-500
    rounded-lg">
    <h3>Transactions Per Page</h3>
        <select bind:value={limit} class="bg-gray-50 border border-blue-300 text-black-900 text-sm rounded-lg">
            {#each items as item}
                <option value={item}>{item}</option>
            {/each}
        </select>
</div>
<div class="
    m-1
    p-1
    border border-grey-500 rounded-lg
    shadow-xl
    text-black-500
    rounded-lg">
    <h3>Offset</h3>
    <input type="number" bind:value={offset}/>
</div>
<div class="
    m-1
    p-1
    border border-grey-500 rounded-lg
    shadow-xl
    text-black-500
    rounded-lg">
    <h3>Select Category</h3>
        <select bind:value={category} class="bg-gray-50 border border-blue-300 text-black-900 text-sm rounded-lg">
            {#each selections as selection}
                <option value={selection}>{selection}</option>
            {/each}
        </select>
</div>
<button on:click={() => dispatch('reload')}>Reload</button>
</div>
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
   
