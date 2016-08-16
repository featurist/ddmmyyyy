# ddmmyyyy

Parses local dates in dd/mm/yyyy or mm/dd/yyyy format and rejects invalid strings.

# example

Create a parser with a regular expression and a string describing the layout of
the date:

```JavaScript
var ddmmyyyy = require('ddmmyyyy');

var parser = ddmmyyyy(/^(\d\d)\/(\d\d)\/(\d\d\d\d)$/, 'dmy');
```

...then use that parser to parse dates:

```JavaScript
parser.parse('13/12/2001'); // -> Thu Dec 13 2001 00:00:00 GMT+0000 (GMT)
parser.parse('12/05/1976'); // -> Wed May 12 1976 01:00:00 GMT+0100 (BST)
```
