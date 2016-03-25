import test from 'ava';
import execa from 'execa';

test('Displays error message and exits with code 1 if input string is not provided', t => {
  return execa('node', ['./cli.js'], {cwd: __dirname}).catch(error => {
    t.regex(error.message, /String required/);
    t.is(error.code, 1);
  });
});

test('Returns positive message if Singlish is detected', t => {
  return execa('node', ['./cli.js', 'Pass la'], {cwd: __dirname}).then(result => {
    t.regex(result.stdout, /contains/);
  });
});

test('Returns negative message if Singlish is not detected', t => {
  return execa('node', ['./cli.js', 'Please pass'], {cwd: __dirname}).then(result => {
    t.regex(result.stdout, /does not/);
  });
});
