class Person {
    // ts 부분
    private name: string;
    public age: number;
    readonly log: string;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}