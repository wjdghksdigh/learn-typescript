// 함수
// 함수의 파라미터에 타입을 정의하는 방식
function sum1(a:number,b:number){
    return a+b;
}  
sum(10,20);

// 함수의 반환 값에 타입을 정의하는 바식
// return 값이 타입이 맞지 않으면 에러가 뜬다
function add() : number {
    return 10;
}

// 함수의 타입을 정의하는 방식
function sum2(a:number,b:number):number{
    return a+b;
}  

// Error
// sum2(10,20,30,40);

// 함수의 옵셔널 파라미터

function log(a:string,b?:string){
}
log('Hello','abc');