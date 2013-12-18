var client = require('./client');

function pia_sshexec(dest,command,callback) {
  client.parse(dest);

  client.exec(command,callback)

  client.on('connect', function() {
    //console.log('Connection :: connect');
  });

  client.on('error', function(err) {
    console.log('Connection :: error :: ' + err);
    callback(err)
  });

  client.on('end', function() {
    //console.log('Connection :: end');
  });

  client.on('close', function(had_error) {
    //console.log('Connection :: close');
  });
}

exports = module.exports = client;

exports.pia_ssh = function(dest, command, callback) {
  var parsed = client.parse(dest);
  pia_sshexec(dest,command,callback);
};

