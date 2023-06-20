import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;

  // read user values
  const text = readString('user-text');
  const repeatCount = readNumber('number-of-times');

  // repeat the string
  let repeatedString = '';
  for (let i = 0; i < repeatCount; i++) {
    repeatedString += text;
  }

  // display the repeated string
  display('repeated-output', repeatedString);
});

// Set the expected output
const expectedOutput = 'EXPECTED_OUTPUT';
display('secret-solution', expectedOutput);
