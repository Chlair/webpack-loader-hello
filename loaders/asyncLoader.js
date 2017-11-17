const someSyncOperation = content => {
  return content.replace("word", "sync");
};

const someAsyncOperation = (content, cb) => {
  try {
    const result = content.replace("word", "ansync");
    cb(null, result);
  } catch (e) {
    cb(e);
  }
};

module.exports = function (content) {
  var callback = this.async();
  if(!callback) return someSyncOperation(content);
  someAsyncOperation(content, function(err, result) {
      if(err) return callback(err);
      callback(null, result);
  });
};
