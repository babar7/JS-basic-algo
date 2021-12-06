// public static int getMin(string s)
//     {
//         int a = 0, b = 0;
//         for (int i = 0; i < s.Length; ++i) {

//             b += s[i] == '(' ? 1 : -1;
//             if (b == -1) {
//                 a++;
//                 b++;
//             }
//         }

//         return a + b;
//     }

function _checkParanthesis(s) {
  let openBrackets = 0;
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === "(" || s[i] === ")") {
      openBrackets += s[i] == "(" ? 1 : -1;
    }
  }

  return Math.abs(openBrackets);
}

function checkParanthesis(str) {
  let brackets = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      brackets.push(str[i]);
    } else if (str[i] === ")") {
      if (brackets[brackets.length - 1] === "(") brackets.pop();
      else brackets.push("#");
    }
  }
  return brackets.length;
}

console.log(_checkParanthesis("()(("));
