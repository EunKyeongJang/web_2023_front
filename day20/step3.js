console.log(localStorage.getItem('이름'));
//console.log(_object.이름);  //js 는 html 새로고침 바뀌면 초기화되므로 호출X
//_object is not difined
//예2)
const 회원정보목록= localStorage.getItem('회원정보목록');
console.log(회원정보목록);          //[object Object],[object Object]
console.log(회원정보목록[0].이름);  //undefined

const 회원정보목록2= JSON.parse(localStorage.getItem('회원정보목록2'));
console.log(회원정보목록2);          //(2) [{…}, {…}]
console.log(회원정보목록2[0].이름);  //유재석
//localStorage.setItem 은 문자열만 저장이 가능하도록 되어있기 때문에 
//객체 저장 : JSON.stringify(localStorage.setItem('키', 값))

//      "{이름 : '강호동' }" vs { 이름 : '강호동' }  =>  전체를 문자열로 인식하기 때문에 JSON을 사용해 문법으로 바꾸는 개념

//객체 불러오기 : JSON.parse(localStorage.getItem('키'));
//**json은 함수는 안됨
//**키는 반드시 '', ""로 감싸 문자열로 만들어주어야 한다.

/* 
    JSON - 웹 브라우저가 추가로 제공하는 API : 누군가가 미리 만든 객체/함수 -도구
*/
