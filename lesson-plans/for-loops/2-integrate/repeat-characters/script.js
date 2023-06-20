import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values
  const text = readString('user-text');
  const repeatCount = readNumber('number-of-times');

  // repeat the characters in the text
  let repeatedText = '';
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < repeatCount; j++) {
      repeatedText += text[i];
    }
  }

  // display the text with repeated characters
  display('repeated-output', repeatedText);
});

// Set the expected output
const expectedOutput = 'EXPECTED_OUTPUT';
display('secret-solution', expectedOutput);
