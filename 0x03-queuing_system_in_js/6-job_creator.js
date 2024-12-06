var kue = require('kue')
, queue = kue.createQueue();

var myOb = {
    phoneNumber: '1234567890',
    message: 'This is the code to verify your account'
};

// create a job named 'send_notification_code' and pass the object
var job = queue.create('send_notification_code', myOb)
.save(function(err){
    if (!err) console.log('Notification job created: ' + job.id);
});

job.on('complete', function(){
    console.log('Notification job completed');
});
job.on('failed', function(){
    console.log('Notification job failed');
});