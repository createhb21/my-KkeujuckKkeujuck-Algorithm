const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 본 문제에서는 정수 A를 B로 바꾸려고 한다.
// 사용 가능한 연산은 다음과 같은 두 가지다.
// 1. 2을 곱한다.
// 2. 1을 수의 가장 오른쪽에 추가한다.

// [문제 해결 아이디어]
// B에서 A로 이동한다고 생각해 보자.
// - 현재의 B 값이 정해져 있을 때, 취할 수 있는 행동은 항상 정해져 있다.
// 값이 2로 나누어 떨어지는 경우 -> 2로 나누는 연산만 사용 가능하다.
// 그렇지 않고, 일의 자릿수가 1인 경우 -> 10으로 나누는 연산만 가능하다.
// 위 경우가 모두 해당되지 않는 경우 -> 더 이상 이동이 불가능하므로, 종료한다.
// -> 이외의 다른 경우의 수가 아예 존재하지 않는 것을 알 수 있다.
// 매 상황에서 이동 경로는 단 하나만 존재하므로, 그리디 알고리즘에 해당한다.

// -----------------------------------

//2 162

// 뺄셈 연산자를 기준으로 나누어 여러 그룹 만들기
let [a, b] = input[0].split(" ").map(Number); // A와 B 입력
let flag = false;
let result = 1;

while (a <= b) {
  if (a == b) {
    flag = true;
    break;
  }
  if (b % 2 == 0) b = parseInt(b / 2); // 2로 나누어 떨어지는 경우
  else if (b % 10 == 1) b = parseInt(b / 10); // 그렇지 않고, 일의 자릿수가 1인 경우
  result++;
}
if (flag) console.log(result);
else console.log(-1);
