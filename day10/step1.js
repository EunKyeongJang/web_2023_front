console.log('자바 스크립트 실행2');

//p.90
console.log() //크롬 f12 (개발자 도구->console) 출력하는 함수
console.log(5+3*2);
console.log((5+3)*2); //사칙연산[ 연산자 우선순위 ]

console.log(10%2);  // 10에서 2를 나눈 나머지 값 0
console.log(10%3);  // 10에서 3를 나눈 나머지 값 1
console.log(10%4);  // 10에서 4를 나눈 나머지 값 2

console.log(10/2);  // 10에서 2를 나눈 값 5
console.log(10/3);  // 10에서 3을 나눈 값 3.3333

//몫 구하기 [ parseInt() : 정수로 변환해주는 함수 = 소수점 버리기 ]
console.log(parseInt(10/3));    //3.3333... -> 3

//p.90~91 불 자료형
console.log( true );
console.log( false );

console.log(52>273);    //52가 273보다 크다.    true
console.log(52<273);    //52가 273보다 작다.    false
console.log(10===10);   console.log(10==10);    //true , true   **자바에는 강력비교가 없다.
console.log(10==="10"); console.log(10==10);    //false, true
console.log('가방'>'하마')  //false     
    //오름차순 : 0 1 2 3 4 ~,  a b c d e ~,  ㄱ ㄴ ㄷ ㄹ ㅁ ~   **자바는 안됨

console.log(52>=273);   //크거나 같다O  같거나 크다X
console.log(52<=273);   //작거나 같다O  같거나 작다X
console.log(10!=11);    //10과 11은 다르다. true

console.log(!true);     //true -> false
console.log(!false);    //false -> true

//p.95
console.log(true&&true);    //true and true =>  true
console.log(true&&false);   //true and false => false
console.log(false&&true);   //false and true => false
console.log(false&&false);   //false and false => false

console.log(true||true);    //true or true => true
console.log(true||false);   //true orr false => true
console.log(false||true);   //false or true => true
console.log(false||false);  //false or fasle => false

//p.96 ~ 97 자료형 검사 ( 현재 자료가 숫자인가 문자인가 불인가 확인작업 )
    //- 왜? : 유효성 검사 [ 데이터 확인? - 데이터를 가공 할 때 자료형 마다 다른 기능/로직을 짜기 위해 ]
    //단항 연산자(연산되는 단항 이상의 연산을 적용하려면 괄호를 붙여주어야 한다.)
console.log(typeof('안녕하세요'));  //'안녕하세요' 자료형 확인 string[answkduf]
console.log(typeof(273));       //273의 자료형 확인 number[숫자]
console.log(typeof(true));      //true의 자료형 확인 boolean[불]

console.log(typeof'안녕하세요');
console.log(typeof 50-30);  console.log(typeof(50-30));
console.log(typeof true);   console.log(typeof(50<30));

//p.98 탬플릿 문자열* (서로다른 자료형들이 존재할때는 + 연결연산자 )
console.log('표현식 273+53 의 값은'+(273+53) +'입니다');
        //      문자열                 숫자     문자열
        //연결연산자 이용하면 되지만 너무 많으면 복잡하다.
console.log(`표현식 273+42의 값은 ${273+53} 입니다`);
        //1. 백틱 ` 으로 전체를 감싼다.
        //2. 데이터를 출력 할 위치에 ${ 데이터 }

//p.99
console.log(1=='1');    //데이터만 비교 했을때는 같다.
console.log(false==0);  //false는 0과같다. true는 1 [ 2진수 -> 0,1 ->false,true ]
console.log(false===0); // 자료형도 비교하기 때문에 false가 출력된다.
console.log(""==[]);    //공백과 빈 배열과 같은 값 의미 ( 자료형은 다름 )
console.log(0==[]);     //0 과 빈 배열과 같은 값 의미 ( 자료형은 다름 )


/* 
    p.100 마무리 확인문제
*/
