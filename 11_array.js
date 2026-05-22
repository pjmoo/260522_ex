const arr = [1, 2, 3, 4, 5]; // [e1, e2, e3, ...]
// 순서
// <->* [] *<-> - queue, stack JS -> [stack]. deque?

arr.push(11);
console.log(arr);
console.log(Object.keys(arr)); // 배열의 인덱스는 숫자로 구현된 키다

const p = arr.pop(); // n-1
console.log(p);
console.log(arr);

// 후입선출. (Last In, First Out)

arr.unshift("a");
console.log(arr);
console.log(Object.entries(arr));
const s = arr.shift();
console.log(s);
console.log(arr);
// unshift -> pop
// shift <- push (선입선출)

// push -> pop (후입선출)

// 시작점, 갯수
console.log(arr.splice(1, 2));
console.log(arr);

// 정렬은... 나중에 추가로... (고차함수할 때)