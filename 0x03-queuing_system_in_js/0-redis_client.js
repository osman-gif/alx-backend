// Using Babel and ES6, write a script named 0-redis_client.js. It should connect to
// the Redis server running on your machine:
import { RedisClient } from 'redis';

const client = new RedisClient({ host: 'localhost', port: 6379 });

client.on('connect', () => {
    console.log('Redis client connected to the server');
    }
);

client.on('error', (err) => {
    console.log('Redis client not connected to the server: ERROR:' + err.messages );
    }
);
export default client;
