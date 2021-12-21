<script>
	import Header from "./components/Header.svelte";
	import Login from "./components/Login.svelte";
	import Authorize from "./components/Authorize.svelte";
	import Ticker from "./components/Ticker.svelte";
	import {auth_token, code} from "./store.js";

	const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('code')){
		code.set(urlParams.get('code'))
	};
</script>

<Header/>

<main>
	{#if $auth_token}
	<Ticker/>
	{:else if $code}
	<Authorize/>
	{:else}
	<Login/>
	{/if}
</main>