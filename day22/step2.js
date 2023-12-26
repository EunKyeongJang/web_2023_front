//HTML을 모드 읽었을 떄 해당 함수 실행
document.addEventListener('DOMContentLoaded', function(){
    //2.[ p.312 ]
    const header=document.querySelector('h1');
    //document.querySelector('h1'); : 해당 요소를 객체로 호출
    //document.querySelector('h1').value; : 해당 요소의 입력된값 호출[*단, 입력관련요소(value 속성 가지는 요소)만 가능 : input, select, textarea 등등/ div, h1, span는 불가능]
    //document.querySelector('h1').innerHTML; : 해당 요소 사이의 HTML을 텍스트로 호출[*사이요소가 없으면 사용 불가능 : input 등][ 마크업 코드 읽어옴(HTML 코드 자체) ]
    header.textContent='HEADERS';   //DOM객체명.textContent : 텍스트 호출[ 마크업이 만들어낸 텍스트를 읽어옴(HTML렌더링 결과물) ]
    header.style.color='white';     //DOM객체명.style.css 속성명 = '값';
    header.style.backgroundColor='black';
    header.style.padding='10px';
        //css : background-color  vs  js : backgroundColor : 카멜표기법

    //3.[ p.313 ]
    //querySelectorAll9)을 이요한 h1 dom객체를 여러개 / 배열로 반환
    const headers=document.querySelectorAll('h1');  console.log(headers);
    
    for(let i=0; i<headers.length; i++){
        //i 0부터 배열의 길이만큼 1씩 증가 반복
        //[조건]
        if(i%3==0){ headers[i].style.color='white'; headers[i].textContent='3배수o';}
        else{ headers[i].style.color='red'; headers[i].textContent='3배수x';}
        headers[i].style.backgroundColor='black';
        headers[i].style.padding='10px';
    }//f end


//4. [ p.314 ]
const a=document.querySelector('#a');
const b=document.querySelector('#b');

a.textContent=`<h1>textContent 속성</h1>`;  //문자 그대로 
b.innerHTML=`<h1>inner HTML 속성</h1>`;     //문자열 HTML 형식

})