<script>
  import {auth_token,checkins} from "../store";
  import { flip } from 'svelte/animate';
	import { slide,fade,fly } from 'svelte/transition';
  import { backInOut } from 'svelte/easing';

  let shown = [];

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
{#each $checkins.slice(-4) as ch (ch.nr)}
  <div in:fly={{y:-120,duration:1600,easing:backInOut}} out:fly={{y:120,duration:1400,easing:backInOut}} animate:flip={{duration:1500,easing:backInOut}} class='checkin' style="order: {ch.nr};">
    <p>Name: {ch.name}, nr {ch.nr}</p>
  </div>
{/each}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    height: auto;
  }

  .checkin {
    background-color: cyan;
    height: 120px;
    width: 80vw;
    min-width: 650px;

    border-radius: 2rem;
    margin: 2rem;
    padding: 1rem 2rem;
  }
</style>