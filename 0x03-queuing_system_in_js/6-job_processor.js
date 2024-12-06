var queue = require('kue').createQueue();


function sendNotification(phoneNumber, message){
    console.log('Sending notification to ' + phoneNumber + ' with message: ' + message)
}

queue.process('send_notification_code', function(job, done){
    console.log('Processing job ' + job.id);
    sendNotification(job.data.phoneNumber, job.data.message);
    done();
});