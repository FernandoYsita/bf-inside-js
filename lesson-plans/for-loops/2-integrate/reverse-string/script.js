import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  debugger;

  // read user value
  const text = readString('user-text');

  // reverse the string
  const reversedText = text.split('').reverse().join('');

  // display the reversed string
  display('reversed-output', reversedText);
});

// Set the expected output
const expectedOutput = 'EXPECTED_OUTPUT';
display('secret-solution', expectedOutput);
