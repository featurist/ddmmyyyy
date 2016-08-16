var ddmmyyyy = require('..');
var expect = require('chai').expect;

describe('ddmmyyyy', function() {

  var parser;

  context('with dates in dd/mm/yyyy format', function() {
    beforeEach(function() {
      parser = ddmmyyyy(/^(\d\d?)\/(\d\d?)\/(\d\d\d\d)$/, 'dmy');
    });

    it('creates a Date from 13/12/2001', function() {
      expect(parser.parse('13/12/2001')).to.eql(new Date(2001, 11, 13));
    });

    it('creates a Date from 31/1/2001', function() {
      expect(parser.parse('31/1/2001')).to.eql(new Date(2001, 0, 31));
    });

    it('creates a Date from 29/02/2016, because 2016 is a leap year', function() {
      expect(parser.parse('29/02/2016')).to.eql(new Date(2016, 1, 29));
    });

    it('rejects 29/02/2017, because 2017 is not a leap year', function() {
      expect(parser.parse('29/02/2017')).to.eql(null);
    });
  });

  context('with dates in mm/dd/yyyy format', function() {
    beforeEach(function() {
      parser = ddmmyyyy(/^(\d\d?)\/(\d\d?)\/(\d\d\d\d)$/, 'mdy');
    });

    it('creates a Date from 12/13/2001', function() {
      expect(parser.parse('12/13/2001')).to.eql(new Date(2001, 11, 13));
    });

    it('creates a Date from 1/31/2001', function() {
      expect(parser.parse('1/31/2001')).to.eql(new Date(2001, 0, 31));
    });

    it('creates a Date from 02/29/2016, because 2016 is a leap year', function() {
      expect(parser.parse('02/29/2016')).to.eql(new Date(2016, 1, 29));
    });

    it('rejects 02/29/2017, because 2017 is not a leap year', function() {
      expect(parser.parse('02/29/2017')).to.eql(null);
    });
  });

});
