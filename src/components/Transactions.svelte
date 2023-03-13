<script lang="ts">
	import type { GetTransactionsDocument, GetTransactionsQuery } from "../graphql/graphql";
    export let transactions: GetTransactionsQuery['BankingApp'] = [];
    //export let total: Number;

</script>

<div>

<!--<h2> Total: {total}</h2>-->

    <table class='table-fixed'>
        <thead class="border-b font-medium dark:border-neutral-500">
            <th scope="col" class="px-15 s py-4">Amount</th>
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
   
