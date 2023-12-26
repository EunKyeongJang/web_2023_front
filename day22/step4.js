//1. 익명함수
const 함수명1 = function(){}
//2. 선언적 함수
function 함수명2(){}

//[p.321] 객체이동 [!!! : document(메모리-객체1개- 부모는 언제나 하나여야 합니다.)]
document.addEventListener('DOMContentLoaded', function(){
    //1. 각 부모요소 2개 호출
    const divA=document.querySelector('#first');
    const divB=document.querySelector('#second');

    //2. <h1>요소 생성
    const h1=document.createElement('h1');

    //3. h1요소에 내용 추가
    h1.innerHTML='이동하는 h1태그';

    //4. 함수1 정의 : 부모1에 h1를 대입
     const toFirst=function(){
        divA.appendChild(h1);       //같은 dom객체를 여러번 appendChild()하면 이동
        setTimeout(toSecond,1000);
        //setTimeout(함수, 시간/밀리초(1/1000));   //측정시간이 되면 자동으로 함수를 실행하는 함수
     }

    //5. 함수2 정의
     const toSecond=function(){
        divB.appendChild(h1);
        setTimeout(toFirst,1000);
     }

     toFirst();

     //[p.322]
     //setTimeout(함수, 시간/밀리초(1/1000))
     setTimeout(function(){ //==()=>{내용}
        const h2=document.querySelector('h2');
        console.log(h2.parentNode);     //객체명.parentNode : 해당 객체의 부모 호출 => body
        h2.parentNode.removeChild(h2);        

     }, 3000);  //3초후에 함수가 실행됨

     //[p.323]
     let counter=0;
     const h3=document.querySelector('h3');

     h3.addEventListener('click',function(event){
        //1. click이벤트가 발생할때 실행되는 함수 > addEventListener
        //2. 이벤트가 발생한 **결과내용을 콜백함수의 매개변수(event)로 전달**
        //why? 클릭이벤트에 필요한 정보가 있으면 활용해서 쓸 수 있도록 지원
        console.log(event); //target속성 중요
        console.log(event.target);

        console.log(event); 
        counter++;
        h3.textContent=`클릭횟수 : ${counter}`;
     });
     
});

/* //0. 익명함수를 상수에 대입    [재호출o]
const 삭제함수1=function(){}
setTimeout( function(){} , 3000)

//1. 익명함수를 상수에 대입x   [재호출x]
setTimeout( function(){} , 3000)

//2. 선언적함수를 선언         [재호출o]
function 삭제함수(){
   const h2=document.querySelector('h2');
   h2.parentNode.removeChild(h2);
}
setTimeout(삭제함수(), 3000); */