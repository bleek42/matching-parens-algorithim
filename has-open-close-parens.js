/* eslint-disable strict */
function stackParens(str) {
  if (typeof str !== 'string' && !str.includes('(' || ')')) {
    throw TypeError(
      'invalid input: alphanumeric string with at least one parentheses only!'
    );
  }
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === ')') {
      stack.push(str[i]);
    }
  }
  return stack;
}

function checkOpenCloseParens(str) {
  if (typeof str !== 'string' && !str.includes('(' || ')')) {
    throw TypeError(
      'invalid input: alphanumeric string with at least one parentheses only!'
    );
  }
  let opens = 0;
  let closes = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      opens++;
    } else if (str[i] === ')') {
      closes++;
    }
  }
  if (opens % closes === 0) {
    return true;
  } else {
    return false;
  }
}

// this one works, but can't seem to get it to work with a stack([]) instead of counter.
function parensPairsInString(str) {
  if (typeof str !== 'string' && !str.includes('(' || ')')) {
    throw TypeError(
      'invalid input: alphanumeric string with at least one parentheses only!'
    );
  }
  // init a counter to track open/close parens of a string
  let count = 0;
  // loop over our argument string
  for (let i = 0; i < str.length; i++) {
    // check each char in string for open parens
    if (str[i] === '(') {
      // add by 1 for each open parens found
      count++;
      // now check for close parens
    } else if (str[i] === ')') {
      // remove by 1 for each close parens found
      count--;
    }
  }
  // check if counter value didn't balance back to 0
  if (count < 0 || count <= -1) {
    return false;
  }
  // all condtions passed: input string has open '(' for every ')' within
  return true;
}

console.log(parensPairsInString('((hevdhueb)hebxh)'));
