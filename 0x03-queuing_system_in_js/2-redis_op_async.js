// In a file 1-redis_op.js, copy the code you previously wrote (0-redis_client.js).

// Add two functions:

//     setNewSchool:
//         It accepts two arguments schoolName, and value.
//         It should set in Redis the value for the key schoolName
//         It should display a confirmation message using redis.print
//     displaySchoolValue:
//         It accepts one argument schoolName.
//         It should log to the console the value for the key passed as argument

// At the end of the file, call:

//     displaySchoolValue('Holberton');
//     setNewSchool('HolbertonSanFrancisco', '100');
//     displaySchoolValue('HolbertonSanFrancisco');

// Requirements:

//     Use callbacks for any of the operation, we will look at async operations later


import { RedisClient } from 'redis';
import { promisify } from 'util';
import redis from 'redis';

const client = new RedisClient({ host: 'localhost', port: 6379 });

client.on('connect', () => {
    console.log('Redis client connected to the server');
    }
);

client.on('error', (err) => {
    console.log('Redis client not connected to the server: ERROR:' + err );
    }
);

function setNewSchool(schoolName, value) {
    client.set(schoolName, value, (err, reply) => {
        redis.print(reply);
    });
}

// Using promisify, modify the function displaySchoolValue to use ES6 async / await
async function displaySchoolValue(schoolName) {
    const getAsync = promisify(client.get).bind(client);
    const reply = await getAsync(schoolName);
    redis.print(reply);
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
