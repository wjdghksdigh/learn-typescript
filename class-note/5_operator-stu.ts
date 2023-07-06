// function logMessage(value: any){
//     console.log(value);
    
// }

// logMessage('hello');
// logMessage(100);
// logMessage(true);


// 유니온 타입 : 하나의 타입 이상을 쓸 수 있다.

var jimin: string | number | boolean;
function logMessage(value: string | number){
    if(typeof value === 'number'){
        value.toLocaleString();
    }
    if(typeof value === 'string'){
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer1 {
    name: string;
    skill: string;
}

interface Person1 {
    name: string;
    age: number;
}

// 유니언 타입을 한다고 해서 interface의 속성을 다 제공하지 X
// 공통 속성만 제공한다.
// function askSomeone(someone: Developer1 | Person1 ) {
//     someone.name;
// }

// askSomeone({ name: '디벨로퍼', skill: '웹 개발'});
// askSomeone({ name: 'cpatin', age: 100 });

// Intersection Type = '&'

// var unna: string | number | boolean;
// var zept: string & number & boolean;

// 인터셉션 타입은 모든 속성을 제공한다.
function askSomeone(someone: Developer1 & Person1 ) {
    someone.name;
    someone.age;
    someone.skill;
}

askSomeone({ name: '디벨로퍼', skill: '웹 개발', age: 100 });





