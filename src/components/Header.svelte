<script>
  import {checkins} from '../store'
  
  let removeCheckin = () => {
    let newArray = $checkins;
    newArray.pop();
    checkins.set(newArray)
  }
</script>

<h1>Untappd Ticker</h1>
<button on:click={removeCheckin}>Remove 1</button>