<script>
  import {auth_token, code} from "../store";

  let getToken = () => {
    console.log('Recieved!')
    auth_token.set('abcabc123123')
  }

  console.log('Requesting auth token with code '+$code+'...')
  setTimeout(()=> getToken($code), 1000);
</script>

<p>Wait for auth token</p>