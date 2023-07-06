// 숫자형 enum
enum Shoes {
    Nike,
    Adidas
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 0

// 문자형 enum

enum Shoes2 {
    Nike = 'nike',
    Adidas = 'adidas'
}

var myShoes2 = Shoes2.Nike;
console.log(myShoes); // nike

// enum 함수

enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: Answer) {
    if(answer === Answer.Yes){
        console.log('yes');
        
    }
        if(answer === Answer.No){
            console.log('no');
            
    }
}

// enum에서 제공하는 데이터만 가능
askQuestion(Answer.Yes);
// askQuestion('예스');
// askQuestion('y');
// askQuestion('yes');
