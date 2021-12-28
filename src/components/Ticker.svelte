<script>
  import {auth_token,checkins,venue} from "../store";
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

  venue.set(66084)

  const getCheckins = () => {
    console.log("Fetching checkins...")
    fetch(`https://api.untappd.com/v4/venue/checkins/${$venue}?access_token=${$auth_token}`)
    .then(response => response.json())
    .then(data => {
      let ch = data.response.checkins.items;
      if (ch){
        console.log(ch)
        checkins.set(ch.reverse())
      } else {
        alert("Error fetching checkins")
      }
    }).catch((error) => {
      console.log(error)
      alert(error)
    });
  };

  // getCheckins()
  // setInterval(() => {
  //   getCheckins()
  // }, 60000); TODO: uncomment
</script>
<button on:click={getCheckins}>Get Checkins</button>
<p>Auth token is {$auth_token}</p>

<!-- <script>
      let userName = ch.user.user_name;
      let avatar = ch.user.user_avatar;
      let beerName = ch.beer.beer_name;
      let beerLabel = ch.beer.beer_label;
      let beerStyle = ch.beer.beer_style;
      let breweryName = ch.brewery.brewery_name;
      let comment = ch.checkin_comment;
      let time = ch.created_at;
      let score = ch.rating_score;
      let media = ch.media.items;
    </script> -->

<div class='container'>
{#each $checkins.slice(-4) as ch (ch.checkin_id)}
  <div in:fly={{y:-120,duration:1600,easing:backInOut}} out:fly={{y:120,duration:1400,easing:backInOut}} animate:flip={{duration:1500,easing:backInOut}} class='checkin' style="order: {ch.nr};">
    <img class="avatar" src={ch.user.user_avatar} alt={ch.user.user_name}>
    <div class="text-container">
      <span class="username">{ch.user.user_name}</span>
      <p class="comment">{ch.checkin_comment}</p>  
    </div>
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
    padding: 1rem 1rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .avatar {
    border-radius: 100%;
    margin-right: 1.5rem;;
    width: 100px;
    height: 100px;
  }

  .text-container {
    flex-grow: 4;
  }

  .username {
    color: red;
    font-size: 2rem;
  }

  .comment {
    color: red;
  }
</style>