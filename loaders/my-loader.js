const loaderUtils = require("loader-utils");

module.exports = function(source) {
  console.log(source);
  const options = loaderUtils.getOptions(this);
  const result = source.replace("word", options.name);
  return result;
};
