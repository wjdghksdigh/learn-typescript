interface User {
    age: number;
    name: string;
}

// 변수에 활용한 인터페이스
var seho: User = {
    age: 33,
    name: 'seho'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
    
}
// User에 정의된 변수와 타입을 맞춰야 한다!
const capt = {
    name: 'capt',
    age: 11
}
getUser(capt);

// 함수의 스펙에 인터페이스를 활용

interface SumFuction {
    (a: number, b: number): number;
}

let sum: SumFuction;
sum = function(a: number, b: number): number {
    return a+b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

var arr: StringArray = ['a','b','c'];
arr[0]='10'; // 'a'

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp
}

var obj: StringRegexDictionary = {
   // sth: /abc/,
   cssFile: /\.css$/,
   jsFile: /\.js$/
}

Object.keys(obj).forEach(function(value){

})

// 인터페이스 확장

interface Person {
    age: number;
    name: string;
}

interface Developer {
    age: number;
    name: string;
}

interface Developer extends Person {
    lag: string;
}

var captin: Developer = {
    lag: 'java',
    age: 10,
    name: 'captin'
}
