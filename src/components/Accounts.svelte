<script lang="ts">
	import type { GetAccountsDocument, GetAccountsQuery } from "../graphql/graphql";
    export let accounts: GetAccountsQuery['Accounts'] = [];

</script>

<!-- <div>
    <table class='table-auto'>
        <thead class="m-1 p-2 rounded-lg border border-cyan-500">
            <th scope="col" class="px-15 py-4">Name</th>
        </thead>
        <tbody>
            {#each accounts as account }
        
                <tr class="m-1 p-2 rounded-lg border border-cyan-500">
                    <td class="whitespace-nowrap px-20 py-2">{account.name}</td>
                    <a href="/accounts/{account.id}/transactions"
                    class="underline text-blue-500">Transactions</a>
                </tr>
    
            {/each}
        </tbody>
    </table>
</div> -->

<div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <div>
            {#each accounts as account }
        
            <tr>
                <td class="whitespace-nowrap px-20 py-2">{account.name}</td>
                <a href="/accounts/{account.id}/transactions"
                class="underline text-blue-500">Transactions</a>
            </tr>

        {/each}
    </div>
</div>
</div>
</div>
