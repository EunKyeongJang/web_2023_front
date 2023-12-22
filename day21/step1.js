//p.276
const num=Math.random();    //0~1사이 난수
console.log(num);

//0~10 사이의 난수
console.log(num*10);

//0~50 사이의 난수
console.log(num*50);

//1~51 미만의 난수
console.log(num*50+1);

//-5 이상 ~ 5 미만 사이의 난수
console.log(num*10-5);

//-25~25 사이의 난수
console.log(num*50-25);


//Math.floor(실수) : 소수점 버림 <=> parseInt(실수) : 정수로 변환
console.log(Math.floor(3.14));
//toFixed() : 반올림, 반환타입 : String
console.log(3.14.toFixed(0));

//-5 이상 ~ 5 미만 사이의 정수만
console.log(Math.floor(num*50-5));

//-25~25 사이의 난수
console.log(Math.floor(num*50-25));


//p.291 : 객체 속성 여부 확인
const object={  //변수, 상수 이름 정의할 때 주의할점 ㅣ 1. 숫자시작 안됨  2. 일부특수문자만 가능  3. 띄어쓰기 안됨  4. 키워드 안됨(모두 외울 수 없어 의심이 가면 '_'를 앞에 붙이는 경우가 많음)
    name : '혼자 공부하는 파이썬',
    price : 18000,
    publisher : '한빛미디어'
}

if(object.name!==undefined){
    console.log('name속성이 있습니다.');
}
else{
    console.log('name속성이 없습니다.');
}

if (object.author != undefined){
    console.log('author속성이 있습니다.');
}
else{
    console.log('author속성이 없습니다.');
}