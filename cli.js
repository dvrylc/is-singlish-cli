'use strict';

var meow = require('meow');
var logSymbols = require('log-symbols');
var isSinglish = require('is-singlish');

const cli = meow(`
  Usage
    $ is-singlish <string>
  
  Examples
    $ is-singlish 'I think can la'
    ${logSymbols.success} contains Singlish
    $ is-singlish 'I think this is possible'
    ${logSymbols.error} does not contain Singlish
    
  Exits with code 1 on error
  
`);

const str = cli.input[0];

if (!str) {
  console.error('String required');
  process.exit(1);
}

isSinglish(str).then(result => {
  console.log(result ? `${logSymbols.success} contains Singlish` : `${logSymbols.error} does not contain Singlish`);
  process.exit(0);
});
