const path = require("path");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const fastify = require("fastify")({
  logger: true
});

fastify.register(require("fastify-static"), {
  root: path.join(__dirname, "public")
});

fastify.get("/", function(request, reply) {
  reply.sendFile("index.html");
});

fastify.post("/", function(request, reply) {
  let code = request.body.code;
  let url = `https://untappd.com/oauth/authorize/?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&response_type=code&redirect_url=${process.env.REDIRECT_URL}&code=${code}`

  if (code){
    axios.get(url)
    .then(res => {
      const token = res.data.response.access_token;
      reply.send({authToken:token});
    })
    .catch(err => {
      console.log('Error: ', err.message);
      reply.send({error:"Error"+err.message});
    });
  } else {
    reply.send({error:"Code missing"});
  }
  
});

// Run the server and report out to the logs
fastify.listen(process.env.PORT, function(err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Your app is listening on ${address}`);
  fastify.log.info(`server listening on ${address}`);
});