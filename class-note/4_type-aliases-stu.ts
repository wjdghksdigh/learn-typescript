// 타입 별칭은 새로운 타입 값을 하나 생성하는 것이 아니라
// 정의한 타입에 대해 나중에 쉽게 참고할 수 있게 이름을 부여한다
// 타입은 확장이 되지 않습니다! interface와 가장 큰 차이점



// interface Person {
//     name: string;
//     age: number;
// }

type Person = {
    name: string;
    age: number;
}

var seho: Person ={
    name: 'seho',
    age: 30
}

type MyString = string;
var str: MyString = 'hello';

// quiz 시간에 나온  todo 부분
type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo){

}




