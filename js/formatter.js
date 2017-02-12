function stringFormat (inString) {
  var args = Array.prototype.slice.call(arguments, 1);
  return inString.replace(/\{(\d+)\}/g, function (match, index) {
    return args[index];
  });
}
