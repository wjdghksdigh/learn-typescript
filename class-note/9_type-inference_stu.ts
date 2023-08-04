// 함수의 타입을 정의하는 방식
function sum(a:number,b:number):number{
    return a+b;
}  

// Error
// sum2(10,20,30,40);

class Person1 {
    // ts 부분
    private name: string;
    public age: number;
    readonly log: string;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Person2 {
    // ts 부분
    private name: string;
    public age: number;
    readonly log: string;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Person3 {
    // ts 부분
    private name: string;
    public age: number;
    readonly log: string;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}