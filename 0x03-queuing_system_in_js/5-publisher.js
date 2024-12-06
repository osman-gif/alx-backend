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

// publishMessage("Holberton Student #1 starts course", 100);
// publishMessage("Holberton Student #2 starts course", 200);
// publishMessage("KILL_SERVER", 300);
// publishMessage("Holberton Student #3 starts course", 400);

// Requirements:

//     You only need one Redis server to execute the program
//     You will need to have two node processes to run each script at the same time

// Terminal 1:

// bob@dylan:~$ npm run dev 5-subscriber.js 

// > queuing_system_in_js@1.0.0 dev /root
// > nodemon --exec babel-node --presets @babel/preset-env "5-subscriber.js"

// [nodemon] 2.0.4
// [nodemon] to restart at any time, enter `rs`
// [nodemon] watching path(s): *.*
// [nodemon] watching extensions: js,mjs,json
// [nodemon] starting `babel-node --presets @babel/preset-env 5-subscriber.js`
// Redis client connected to the server

// Terminal 2:

// bob@dylan:~$ npm run dev 5-publisher.js 

// > queuing_system_in_js@1.0.0 dev /root
// > nodemon --exec babel-node --presets @babel/preset-env "5-publisher.js"

// [nodemon] 2.0.4
// [nodemon] to restart at any time, enter `rs`
// [nodemon] watching path(s): *.*
// [nodemon] watching extensions: js,mjs,json
// [nodemon] starting `babel-node --presets @babel/preset-env 5-publisher.js`
// Redis client connected to the server
// About to send Holberton Student #1 starts course
// About to send Holberton Student #2 starts course
// About to send KILL_SERVER
// About to send Holberton Student #3 starts course
// ^C
// bob@dylan:~$ 

// And in the same time in Terminal 1:

// Redis client connected to the server
// Holberton Student #1 starts course
// Holberton Student #2 starts course
// KILL_SERVER
// [nodemon] clean exit - waiting for changes before restart
// ^C
// bob@dylan:~$ 

// Now you have a basic Redis-based queuing system where you have a process to generate job and a second one to process it. These 2 processes can be in 2 different servers, which we also call “background workers”.




import { RedisClient } from 'redis';
const client = new RedisClient({ host: 'localhost', port: 6379 });
// On connect, it should log the message Redis client connected to the server
client.on('connect', () => {
    console.log('Redis client connected to the server');
    }
);

// On error, it should log the message Redis client not connected to the server: ERROR MESSAGE
client.on('error', (err) => {
    console.log('Redis client not connected to the server: ERROR:' + err );
    }
);

// write a function called publishMessage

function publishMessage(message, time){
    setInterval(() => {
        console.log('About to send ' + message)
        client.publish('holberton school channel', message)
    }, time);
}

publishMessage("Holberton Student #1 starts course", 100);
publishMessage("Holberton Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("Holberton Student #3 starts course", 400);
