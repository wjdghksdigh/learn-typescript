
// 함수를 파라미터로 받아 그대로 파라미터를 반환한다.
// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(10); // 숫자 10
// logText('hi'); // 문자열 
// logText(true); // boolean 값

// 호출하는 시점에 타입을 넘겨줄 수 있는 것이 제네릭!
// function logText<T>(text: T):T {
//   console.log(text);
//   return text;
// }

// logText<string>('hi');

// function logText(text: string) {
//   console.log(text);
//   // text.split('').reverse().join('');
//   return text;
// }

// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }

// const a = logText('a');
// // 타입이 정확히 정해져야만 메소드를 사용할 수 있다@
// // a.split('')
// logText(10);

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

// 제네릭은 위의 문제를 해결 해준다.
const str = logText<string>('a');
str.split('')

const login = logText<boolean>(true);
