<script lang="ts">
	import { onMount } from 'svelte';
    import { breadCrumbStore } from '../../breadCrumbStore';
	import Accounts from '../../components/Accounts.svelte';
	import type { GetAccountsQuery } from '../../graphql/graphql';
	import { graphqlGetAccounts } from '../../graphql/graphqlApi';

    let accounts: GetAccountsQuery['Accounts'];

    onMount(async () => {
        const response = await graphqlGetAccounts({})
        accounts = response.data.Accounts
    })

    $breadCrumbStore = [
        { name: 'Home', url: '/' },
        { name: 'Accounts', url: '/accounts' }
    ];

</script>
<h1>Accounts</h1>

<Accounts {accounts}></Accounts>
