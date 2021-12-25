<script>
  import {auth_token, code} from "../store";

  let getToken = async () => {
    let headers = {
      'Accept': 'application/json,text/plain, */*',
      'Content-Type': 'application/json',
      'User-Agent': 'Beer Office (1234)'
    };
    
    let res = await fetch('/',{
      method: "POST",
      headers:headers,
      body: JSON.stringify({text:"Hello",code:$code})
    });
    
    console.log(res)
    //auth_token.set('abcabc123123')
  }

  console.log('Requesting auth token with code '+$code+'...')
  setTimeout(()=> getToken(), 1000);
</script>

<p>Wait for auth token</p>