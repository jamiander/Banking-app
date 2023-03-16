<script lang="ts">
	import type { GetAccountsDocument, GetAccountsQuery } from "../graphql/graphql";
    export let accounts: GetAccountsQuery['Accounts'] = [];

</script>

<div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <div class="flex-auto flex space-x-4">
            {#each accounts as account }
        
            <div class="
                m-1
                p-1
                border border-grey-500 rounded-lg
                shadow-xl
                hover:bg-blue-100
                cursor-pointer
                text-black-500">
                <span class="whitespace-nowrap px-20 py-2 font-semibold">{account.name}</span>
                <a href="/accounts/{account.id}/transactions"
                class="underline text-blue-500">Transactions</a>
            </div>

        {/each}
    </div>
</div>
</div>
</div>
