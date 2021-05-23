const redis = require("redis");
const host = "34.64.237.202";
const client = redis.createClient(6379, host);

client.on("error", function(error) {
    console.error(error);
});

client.on("connect", () => {
    console.log("redis is connect!!");
});

client.on("ready", () => {
    console.log("redis is ready!!");
});


client.hmset( 'fruits' , {
    lemon: 5000,
    green : 2000
})

client.hgetall('fruits', (err, res)=> {
    console.log(res);
});
