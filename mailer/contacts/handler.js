'use strict';

var doc = require('dynamodb-doc');
var dynamo = new doc.DynamoDB();

module.exports.handler = function(event, context, cb) {
  event.payload.TableName = 'mailer-contacts';

  switch(event.operation){
    case 'create':
      console.log("Creating contact for " + event.payload.Item.email);
      dynamo.putItem(event.payload, function(err, response){
        if(err)
          context.done(err);
        else
          context.succeed(event.payload.Item);
      });
      break;
    
    case 'read':
      console.log("Reading contact " + event.payload.Key.email);
      dynamo.getItem(event.payload, function(err, response){
        if(err)
          context.done(err);
        else
          context.succeed(response.Item);
      });
      break;
  }
};
