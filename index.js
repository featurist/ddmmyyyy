function Parser(regex, layout) {
  this.regex = regex;
  this.layout = layout;
}

Parser.prototype.parse = function(dateString) {
  var m = dateString.match(this.regex);
  if (m) {
    var dd = zeroPad(m[this.layout.indexOf('d') + 1]);
    var mm = zeroPad(m[this.layout.indexOf('m') + 1]);
    var yy = zeroPad(m[this.layout.indexOf('y') + 1]);
    var date = new Date(yy + '-' + mm + '-' + dd);
    if (date.getUTCFullYear() == yy &&
       (date.getUTCMonth() + 1) == mm &&
       date.getUTCDate() == dd) {
      return date;
    }
  }
  return null;
};

function zeroPad(num) {
  return num.length == 1 ? '0' + num : num;
}

module.exports = function buildParser(regex, layout) {
  return new Parser(regex, layout);
}
