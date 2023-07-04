//JS 문자열 선언
var str1 = 'hello';

//TS 문자열 선언
let str2 : string = 'hello';
//TS 숫자
let num1 : number = 10;
//TS 배열
let arr1 : Array<number> = [1,2,3];
// number타입이 들어오면 vs code 상에서 에러를 확인할 수 있다.
let heroes : Array<string> = ['C','A','D'];
let items1 : number[] = [1,2,3];

//TS 튜플
// 배열의 각 인덱스의 타입이 정해져있다.
let address1 : [string, number] = ['gangnam',100];

//TS 객체
let obj1 : object = {};
// let person1 : object = {
//     name : 'capt',
//     age : 100
// };

let person1 : {name : string ,age : number} = {
    name : 'vapt',
    age : 11
}

//TS 진위값
let show : boolean = true;