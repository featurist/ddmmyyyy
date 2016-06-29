function Parser(regex, layout) {
  this.regex = regex;
  this.layout = layout;
}

Parser.prototype.parse = function(dateString) {
  var m = dateString.match(this.regex);
  if (m) {
    var dd = m[this.layout.indexOf('d') + 1];
    var mm = m[this.layout.indexOf('m') + 1];
    var yy = m[this.layout.indexOf('y') + 1];
    var date = new Date([yy, mm, dd].join('-'));
    if (date.getFullYear() == yy && (date.getMonth() + 1) == mm && date.getDate() == dd) {
      return date;
    }
  }
  return null;
};

module.exports = function buildParser(regex, layout) {
  return new Parser(regex, layout);
}
