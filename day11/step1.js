//p.116 자료형 변환
    //1. 문자열 입력
const input = prompt('message','기본값');
    //코드 실행순서 [ 컴퓨터는 멀티X ]
    //1. prompt('message, '_default');  : [ 실행 ] 클라이언트에게 입력받는 알람 함수
    //2. prompt() 결과/반환/리턴된 값    : [ 실행결과 ]
    //3. const input = 리턴된 값         : [ 실행 결과 저장 ]
alert(input);

    //2. 불 입력    [ confirm() : 확인[ true ]/취소[ false ] 를 반환하는 알람 함수]
const input2 = confirm('수락하시겠습니까?');
alert(input2);

    //3. 숫자 자료형으로 변환하기 [ Number() : 문자열 자료형을 숫자료 변환 함수 ]
console.log(Number("273"));
console.log(Number("a"));       //NaN => not a number : 숫자로 표현 할 수 없음
console.log(Number(true));      // true = 1, false = 0

    //4. 숫자 연산을 사용해 자료형 변환하기 [ *단, 숫자+"문자열" : 연결 연산자 조심]
console.log("52"-3);    //49, java 는 안됨 -> 결과의 자료형이 숫자로 변환
console.log(true-1);    //0
console.log(true+1);    //2

    //5. 문자열 자료형으로 변환하기 [ string() : 문자열로 변환 함수 vs 데이터+"" ]
console.log(String(52.273));    // 52.273 -> "52.273"
console.log(true);              //true -> "true"

console.log(52.273+"");         //52.273 -> "52.273" [ 연결 연산자 이용 ]
console.log(true+"");           //true -> "true"

    //6. 불 자료형으로 변환하기 [ Boolean() : 불 자료형으로 변환 함수 ]
console.log(Boolean(0));    //flase
console.log(Boolean(NaN));  //false
console.log(Boolean(""));   //false
console.log(Boolean(null)); //false
let 변수;
console.log(Boolean(변수)); //false

    //7. 논리 부정 연산자를 사용해 자료형 변환하기
console.log(!273);      //0 -> flase, 1 -> true, 273 -> true -> !273 -> false
console.log(!!273);     // true
console.log(!!0);       //0 : false -> true -> false


//p.124

//프로그램 기본 : 입력 -> 처리 -> 결과
//웹 프로그램 기본 : 프론트앤드HTML[<input>] -> 백엔드JAVA -> 프론트앤드HTML[<TABLE>]

//1. 입력
const inch=prompt('inch 단위의 숫자를 입력해주세요.');

//2. 처리
const cm=inch*2.54;

//3. 출력
alert(`${inch}inch는 ${cm}cm 입니다.`);

//앞으로의 웹개발 방향
function 변환기능(){
    const 인치 = document.querySelector('input');
    console.log(인치.value);
        //document : HTML 뜻
        //quer : 질의 / 요청
        //Selector : 선택
            //document.querySelector() : html 요소 선택
            //html요소를 js 변수/객체 로 가져오기
    //-------> 처리 --------> java에게 통신으로 보내기
    //결과 = input에 입력받은 value를 h3에 대입
    document.querySelector("h3").innerHTML = `${인치.value*2.54}cm`;
}
    //변수 = let, 상수 = const, 함수 = function     선언 약속/규칙/문법
    //function 함수명( 매개변수 ){ 구현할 기능 코드 }

    // 확인문제 3번
const cm정수 = prompt("cm 단위의 숫자를 입력해주세요.");
const 인치 = Number(cm정수) / 2.54;
alert(`${cm정수}cm는 ${인치}inch 입니다.`);

    //확인문제 4번
let 반지름 = Number(prompt('원의 반지름을 입력해주세요.'));

console.log(` 원의 넓이 : ${3.14 * 반지름 * 반지름} / 원의 둘레 : ${2 * 3.14 * 반지름} `);

    //확인문제 5번
const 금액 = prompt("달러 단위의 금액을 입력하세요");
const 달러 = Number(금액);
const 원화 = 달러*1207;

console.log(`달러 : ${달러} -> 원화 : ${원화}`)

    //확인문제 6번
// 계산기, 키오스크, 프린터, 엘리베이터, 문자메시지 등등
// 과제 : 각 생활에서 사용되는 기계/ 프로그램들 예시 만들기 [ 예시6번 ] -4명
//키오스크, 엘리베이터, 자율주행 자동차
//예시)라면포트기
    //1. 저장/변수 5개 : 온도, 면종류, 시간, 온수상태, 완료상태
    //2. 기능/함수 5개 : 시작. 물추가, 상태변경(사용금지 등), 조리시간 추가, 면종류 선택
    //3. 경우의수/논리 5개 : 용기가 있다/없다, 조리시간 완료/조리중, 상태 점검중/사용가능중, 온수부족/충분, 온도의 최대값/

    //4. 1~3 시각화그림 