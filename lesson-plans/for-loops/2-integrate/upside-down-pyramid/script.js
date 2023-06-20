import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // Read user input
  const userInput = readString('to-pyramid');

  // Create the pyramid
  let pyramid = '';
  for (let i = userInput.length; i >= 0; i--) {
    pyramid += userInput.substr(0, i) + '\n';
  }

  // Display the pyramid
  display('pyramided', pyramid);
});
