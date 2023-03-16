<script lang="ts">
	export let searchTerm: String;
</script>


<div id="search-input-cont">
	<input type="text" 
				 id="search-field" 
				 placeholder="Enter Search Term" 
				 autocomplete="off"
				 bind:value={searchTerm}
				 on:input />
</div> 