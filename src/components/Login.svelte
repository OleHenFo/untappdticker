<script>
  let url = `https://untappd.com/oauth/authenticate/?client_id=${CLIENT_ID}&response_type=code&redirect_url=${REDIRECT_URL}`
</script>

<div class="log-in-button">
  <a href={url}>Sign in with Untappd</a>
</div>