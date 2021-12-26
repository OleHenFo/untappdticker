<script>
  import {auth_token, code} from "../store";

  let getToken = async () => {
    let headers = {
      'Accept': 'application/json,text/plain, */*',
      'Content-Type': 'application/json'
    };
    
    let res = await fetch('/',{
      method: "POST",
      headers:headers,
      body: JSON.stringify({code:$code})
    }).then(res=>res.json()).then((data) => {
      let token = data.authToken;
      let error = data.error;
      if (error){
        alert(error)
      } else {
        console.log("Recieved token: "+token)
        auth_token.set(token);
      }
    });
  }

  console.log('Requesting auth token with code '+$code+'...')
  getToken()
</script>

<p>Wait for auth token...</p>