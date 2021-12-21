<script>
  import {auth_token,checkins} from "../store";
  import { flip } from 'svelte/animate';
	import { slide,fade } from 'svelte/transition';

  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
    }
    return result;
  }

  setInterval(() => {
    let nr = $checkins.length;
    let list = [...$checkins,{name:makeid(5),nr:nr}]
    checkins.set(list)
  }, 2000);
</script>

<p>Auth token is {$auth_token}</p>

<div class='container'>
{#each $checkins as ch (ch.nr)}
  <div in:fade animate:flip class='checkin' style="order: -{ch.nr};">
    <p>Name: {ch.name}, nr {ch.nr}</p>
  </div>
{/each}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column-reverse;
    background-color:khaki;
    height: 50vmax;
    overflow-y: hidden;
  }

  .checkin {
    background-color: cyan;
  }
</style>