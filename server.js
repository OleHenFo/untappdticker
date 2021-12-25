const path = require("path");
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
  fastify.log.info(request);
  reply.send({authToken:"abbabababababababab"});
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