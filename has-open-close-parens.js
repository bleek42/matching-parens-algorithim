function matchingParens(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || ')') {
      stack.push(str[i]);
    }
  }
  return stack;
}

matchingParens('(jebcjfj)');

function checkOpenCloseParens(str) {
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

console.log(checkOpenCloseParens('((hevdhueb)hebxh)'));