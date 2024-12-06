// In a file named 5-subscriber.js, create a redis client:

//     On connect, it should log the message Redis client connected to the server
//     On error, it should log the message Redis client not connected to the server: ERROR MESSAGE
//     It should subscribe to the channel holberton school channel
//     When it receives message on the channel holberton school channel, it should log the message to the console
//     When the message is KILL_SERVER, it should unsubscribe and quit

// In a file named 5-publisher.js, create a redis client:

//     On connect, it should log the message Redis client connected to the server
//     On error, it should log the message Redis client not connected to the server: ERROR MESSAGE
//     Write a function named publishMessage:
//         It will take two arguments: message (string), and time (integer - in ms)
//         After time millisecond:
//             The function should log to the console About to send MESSAGE
//             The function should publish to the channel holberton school channel, the message passed in argument after the time passed in arguments
//     At the end of the file, call:







import { RedisClient } from 'redis';
import diagnostics_channel from 'node:diagnostics_channel';

const client = new RedisClient({ host: 'localhost', port: 6379 });
// On connect, it should log the message Redis client connected to the server
client.on('connect', () => {
    console.log('Redis client connected to the server');
    }
);

// On error, it should log the message Redis client not connected to the server: ERROR MESSAGE
client.on('error', (err) => {
    console.log('Redis client not connected to the server: ERROR:' + err.messages );
    }
);

//  subscribe to the channel holberton school channel

client.subscribe('holberton school channel');

// When it receives message on the channel holberton school channel, it should log the message to the console

client.on('message', (channel, message) => {
    console.log(message);
    if (message === 'KILL_SERVER') {
        client.unsubscribe(channel);
        client.quit();
    }
    }
);

export default client;