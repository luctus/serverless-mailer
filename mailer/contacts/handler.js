'use strict';

var doc = require('dynamodb-doc');
var dynamo = new doc.DynamoDB();

module.exports.handler = function(event, context, cb) {

  event.payload.TableName = event.tableName;

  dynamo.putItem(event.payload, function(err, response){
    if(err)
      context.done(err);
    else
      context.succeed(event.payload.Item);
  });

};
