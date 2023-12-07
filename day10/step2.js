/* 
    p.102 : 상수와 변수
*/
/* 
    1. 상수만들기 [ 4단계 ]
        1. const        선언 키워드 작성     왜? : 상수인지 변수인지 식별용
        2. 상수명       이름[식별자]     왜? : 상수가 여러개 있으므로 그 중에서 구별하기 위해
        3. =            대입연산자[ 값을 변수에 넣는 역할 ] 왜? 오른쪽 값을 왼쪽에 대입
        4. 자료         저장할 값   
*/
const pi = 3.141592;

//2. 상수를 호출하는 방법 [ 상수 이름 작성 ]
console.log(pi);    //상수 출력
/* console.log(김현수); */    // 김현수 is not defined

//3. 상수의 값을 변경하는 것은 불가능[ 상수는 값을 변경할 수 없다. ]
// pi=3.97;   //Assignment to constant variable.

const r=10;

//4. 상수의 연산
console.log(2*pi*r); //곱하기가 먼저인지 상수 호출이 먼저인지 확인
//pi 상수[상자]안에 있는 값을 꺼내기가 우선 = 상수호출

//5. 동일한 상수명 사용[ 상수명은 식별용이므로 중복이 불가능 ]
// const pi=3.97;   //Identifier 'pi' has already been declared

//6. 상수의 값 대입을 안했을때.[ 상수 만들때 (처음에) 값[초기값]을 넣는 과정 = 초기화 , 초기화가 없으면 오류 발생 ]
//const pi2;  //Missing initializer(초기화) in const declaration: 초기값이 없습니다.


//p.105 변수 만들기

//1. 변수만들기[ 4단계 ]
    //1. let
    //2. 변수명
    //3. =
    //4. 값
let pi3=3.141592;

//2. 변수를 호출하는 방법[ 변수 호출시에는 키워드[ let, const ] 쓰지 마세요! ]
console.log(pi3);
console.log("pi3 : "+pi3);  //연결연산자 : "문자열"+변수 => 문자열
console.log(`pi3 : ${pi3}`);    //템플릿 문자열 `문자열 ${변수/상수/자료} 문자열`

//3. 변수의 값 변경[ 값 변경시에도 변수 호출 후 다시 대입 ]
pi3=3.15;   console.log(pi3);

//4. 변수의연산
let r3=10;
console.log(2*pi3*r3);

//var와 let 키워드의 차이
let value1=10;
//let value1=10;  //불가능, 초기화 1번, 허용범위[ 동일한 변수명으로 선언 시 선언 불가. ]

var value2=10;
var value2=10;  //가능, 초기화 여러번, 허용범위 [ 동일한 변수명으로 선언 시 동일한 이름이 있을 경우 덮어쓴다 ]

//p.108 복합 대입연산자
let value=10;
    //컴퓨터는 동시에 다발적으로 연산을 처리X
value+=10;
    //vs -> 같다. [ 코드가 준다고 해서 처리속도가 빨라지지는 않음 ]
value=value+10; //문장    
    //1. 10         // value +10 중에서 변수 변수 호출
    //2. 10+10      //호출 후 연산
    //3. 20         //연산 결과
    //4. =          //연산 후 대입
    //5. value=20   //변수 수정
console.log(value);

//****JS에서 HTML(문자열, 자료형) 을 작성할 때 */
let list=``;    //`list` 변수에 빈 문자열을 넣은 상태로 선언

list+=`     <ul>`;
list+=`     <li>Hello</li>`;
list+=`     <li>JAVAScript</li>`;
list+=`<ul>`;
document.write(list);

// 예제1. 2개 숫자를 입력받아 더한 결과 값을 html에 <h3> 안에 출력
    // 입력받은 예)3,5
    //html 출력 예) 예제 1결과 : 8

    //1. prompt("출력하고 싶은 말");    : 입력 [input] 제공하는 알람 함수
        //input 입력된 결과를 반환 [10+10=>20]
let ex1Value1 = prompt("예1 숫자 입력하세요.");
        //만약에 10 입력 시 let ex1Value1=10;
console.log(typeof ex1Value1);
        //타입변환1 /문제점 : 혹여나 소수점이 있으면 사라짐//
/* ex1Value1 = parseInt(ex1Value1);    console.log(typeof ex1Value1); */
        //타입변환2 [Number("숫자") -> 숫자]
ex1Value1=Number(ex1Value1);        console.log(typeof ex1Value1);

let ex1Value2=Number(prompt("예1 2번째 숫자 입력하세요."));
    //  함수1(함수2()); //함수2 결과를 함수1 넣고 함수1 결과얻는 과정
    //  입력을 받고 [pronpt] 입력받은  데이터를 타입변환[Number] 하고 변수에 대입

document.write(` 예제1결과 <h3>${ex1Value1+ex1Value2} </h3>`);

//예제2. 2개의 숫자를 입력받아 더 큰 수 를 html <h3>안에 출력
    // 입력받은 예)3,5
    //html 출력 예) 예제 2결과 : 5

    //1. 입력받은 데이터를 숫자 자료형으로 변환[ 연산하려고, 문자로 연산 할 수는 없으니까] 후 각 변수에 대입[ 기억했다가 다음 문장에서 사용하려고]
let ex2Value1=Number(prompt("예제2 1번째 숫자를 입력하세요"));
let ex2Value2=Number(prompt("예제2 2번째 숫자를 입력하세요"));
    //Number(prompt("예제2 1번째 숫자를 입력하세요"));  : 입력o, 반환o, 저장x
    //Number(prompt("예제2 2번째 숫자를 입력하세요"));    
console.log(ex2Value1 > ex2Value2); //10과 20을 입력했다면 false
    //2.단항연산자[ 피연산자1기 ], 이항연산자[ 피연산자2개 ], 삼항연산자[ 피연산자3개 ]
    // 삼항연산자 : 조건 ? 참 : 거짓
        //- 조건[ T/F ]에 따른 서로다른 실행 결과 만들기
        //- true, false를 다르게 표현
console.log( ex2Value1 > ex2Value2 ? '진실' : '거짓');  //false 대신에 '거짓 표현'

document.write(`<h3>예제2 결과 : ${ex2Value1 > ex2Value2 ? ex2Value1 : ex2Value2 } </h3>`);



   
