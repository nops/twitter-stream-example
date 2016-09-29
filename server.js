var kafka = require('kafka-node'),
    Producer = kafka.Producer,
    client = new kafka.Client(),
    producer = new Producer(client);


var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

client.stream('statuses/filter', {track: 'brazil'},  function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
    var payloads = [{topic: 'test', messages: tweet.text}];
    producer.send(payloads, function (err, data) {
        console.log(data);
    });
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
