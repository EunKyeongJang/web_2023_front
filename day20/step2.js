//p.267
//1. toFixed(소수점) : 해당 소수점까지 출력 [ 반올림 ]
//**math함수도 있음
const l = 123.456789;
console.log(l.toFixed(2));  //123.46
console.log(l.toFixed(3));  //123.457

//2.Number(숫자) : 유효성검사 : [ 자료형에 따라 연산이 달라지기 때문 (ex. + )]
const m=Number('숫자로 반환할 수 없는 경우');   //Number('문자열');
console.log(m);                 //m : NaN
console.log(m==NaN);           //false  //NaN 비교x
console.log(Number.isNaN(m));   //true  isNaN() 함수 이용한 비교o

//3. isFinite(연산) : 유효성검사 : 연산의 결과가 무한대이면
const n=10/0;
console.log(n);
const o=-10/0;
console.log(o);

Number.isFinite(n); //왜하는거지? 

//p.269
//1. trim() : 양쪽 끝에 공백 없애기
console.log(`            `.trim().length);
//사용 예시 : 
//크롤링 한 경우에 데이터의 공백을 삭제
//의미없는 공백도 메모리를 사용하기 때문에 사용

//2. split
const timeList = "12:30\n15:21";
    console.log(timeList);
const timeArray=timeList.split('\n');
    console.log(timeArray);
const time=timeArray[0];
    console.log(time);  
const hour=time.split(':');
    console.log(hour);


//3. JSON : 다른 애플리케이션과 통신할때 데이터 교환목적
    //1. JS 객체 --> JS 문자열 : JSON.stringify()
    //2. JSON 문자열 --> JS 객체 : JSON.parse()

//p.356 좀더 알아보기2
    //[js가 꺼지고 사라져도 사라지지 않는 메모리]
    //localStorage      : 브라우저[ 크롬, 엣지 ]에 저장, 브라우저 자체가 꺼지면 사라짐, 다른 탭에서 공유
    //sessionStorage    : 브라우저[ 크롬, 엣지 ]에 저장, 탭 꺼지면 메모리도 사라짐, 같은 탭에서 공유

//예1)
//localStorage.setItem(키, 값);
localStorage.setItem('이름','유재석');  //'이름'이라는 키로 '유재석' 값을 저장
console.log(localStorage.getItem('이름'));

//js 메모리 저장[ js 가 꺼지면 / 사라지면 같이 사라짐. html새로고침 바뀌면 js 메모리 초기화]
const _object={이름 : '유재석'};
console.log(_object.이름);

//만약 페이지가 바뀌면 어떻게 되는지?


//예2) localStorage : 브라우저(소프트웨어)에 저장이 되는데 브라우저는 객체를 모름
const 회원목록=[{이름 : '유재석'}, {이름 : '강호동'}]

localStorage.setItem('회원정보목록',[{이름 : '유재석'}, {이름 : '강호동'}]);
localStorage.setItem('회원정보목록2',JSON.stringify(회원목록));

