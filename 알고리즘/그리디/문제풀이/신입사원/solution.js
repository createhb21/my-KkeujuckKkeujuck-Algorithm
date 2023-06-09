const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 문제 요구사항
// 1) 다른 모든 지원자와 비교했을 때, 다음의 조건을 만족하는 지원자의 총 수를 계산한다.
// 2) (1) 서류 성적과 (2) 면접 성적 중 적어도 하나가, 다른 지원자보다 떨어지지 않는 자

// [문제 해결 아이디어]
// 두 개의 시험에 대한 등수를 간단힌 X와 Y라고 해보자.
// X를 기준으로 오름차순 정렬하면 다음과 같다.

// 두 개의 시험에 대한 등수를 간단히 X와 Y라고 해보자.
// 특정 지원자보다 두 시험 성적이 모두 높은 지원자가 있는 지만 확인하면 된다.
// [문제 해결 방법] 오른차순 정렬 이후에, 다음의 방식으로 해를 구할 수 있다.

// (1, 4) - A 지원자는 일단 X가 1등이므로, 무조건 선발 가능하다.
// (2, 3) - B 지원자는 X가 두 번째로 높다. 그래서 A보다 Y가 작으면 선발 가능하다.
// (3, 2) - C 지원자는 X가 세 번째로 높다. 그래서 A, B보다 Y가 작으면 선발 가능하다.
// (4, 1) - D 지원자는 X가 네 번째로 높다. 그래서 A, B, C보다 Y가 작으면 선발 가능하다.
// (5, 5) - E 지원자는 X가 다섯 번째로 높다. 그래서 A, B, C, D보다 Y가 작으면 선발 가능하다.

// 1) 순위 X를 기준으로 오름차순 정렬을 수행한다.
// 2) 차례대로 한 명씩 확인하며, 순위 Y가 현재까지 확인했던 Y 중에서 가장 작은 수라면 카운트한다.

// -----------------------------------

// 2
// 5
// 3 2
// 1 4
// 4 1
// 2 3
// 5 5
// 7
// 3 6
// 7 3
// 4 2
// 1 4
// 5 7
// 2 5
// 6 1

// -----------------------------------

let testCase = Number(input[0]);
let line = 1;
for (let tc = 0; tc < testCase; tc++) {
  let n = Number(input[line]);
  let arr = [];
  for (let i = line + 1; i <= line + n; i++) {
    let data = input[i].split(" ").map(Number);
    arr.push(data);
  }
  arr.sort((x, y) => x[0] - y[0]); // x 순위를 기준으로 오름차순 정렬
  let count = 0;
  let minValue = 10001;
  for (let [x, y] of arr) {
    if (y < minValue) {
      // y 순위 값이 가장 작다면 카운트
      minValue = y;
      count += 1;
    }
  }
  console.log(count);
  line += n + 1;
}
