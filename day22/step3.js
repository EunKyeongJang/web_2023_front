//1. js가 head에 있으므로 body가 생성되기 전 호출이므로 오류발생
//console.log(document.querySelector('img'));

//2. js가 head에 있으나 DOMContentLoaded 이벤트를 사용했으므로 오류발생x
document.addEventListener('DOMContentLoaded',function(){
    console.log(document.querySelector('img'));

    //[ p.315 ]
    //1. class가 'rect'인 요소를 여러개 호출
    const rect=document.querySelectorAll('.rect');

    //2. rect/배열 하나씩 순서대로 호출 반복
    for(let index=0; index<rect.length; index++){
        const width=(index+1)*100
        const src=`http://placekitten.com/${width}/250`
        //rect[i].setAttribute('src',src);
        rect[index].src=src;    //표준속성은 제공됨
    }

    //[ p.318 ]
const divs = document.querySelectorAll('body>div');   //자식 선택자.
console.log(divs);
for(let i=0; i<divs.length; i++){
    console.log(i, divs[i]);
    const val=i*10;
    divs[i].style.height='10px';
    divs[i].style.backgroundColor=`rgba(${val},${val},${val})`;
}
console.log(divs);

//[ p.320 ] 요소만들기
const header=document.createElement('h1');  //h1 요소 생성[ 1. 생성 ]
    console.log(header);
    header.textContent='문서객체 동적으로 생성하기'
    header.setAttribute('data-custom', '사용자 정의 속성');
    header.style.color='white'; //==header.setAttribute('style', 'color=white');
    header.style.backgroundColor='black';

document.body.appendChild(header);  //[2. 위치지정해서 대입한다.]
document.body.innerHTML+=`<h1></h1>`;
document.body.innerHTML+=header;

})

