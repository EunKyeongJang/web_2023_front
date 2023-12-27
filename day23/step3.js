//1. 기존에 있는 자료를 select에 넣을 때
const category=['떡볶이', '순대', '오뎅', '튀김'];

document.addEventListener('DOMContentLoaded',function(){
    //2. 
    const selectBox=document.querySelector('#selectBox');
    let html=`안녕`;
    for(let i=0; i<category.length; i++){
        html+=`<option>${category[i]}</option>`;
    }
    

    selectBox.innerHTML=html;
    //textContent : 문자열 그 자체, innerHTML대신쓰면 안먹음

    //[p.343]
    //1. 각 요소 객체로 호출
    const select=document.querySelector('select');
    const p=document.querySelector('p');

    //2. 요소의 이벤트[ change : value값이 바뀔때마다 ]등록
    select.addEventListener('change',function(event){
        console.log(event); //change이벤트 결과 정보 객체
        console.log(event.currentTarget);   //change이벤트를 발생시킨 요소
        console.log(event.currentTarget.options);   //select 하위요소들/배열 반환
        console.log(event.currentTarget.options.selectIndex);   //select요소의 선택된 인덱스

        //[방법1]
       // const options=event.currentTarget.options;
        //const index=event.currentTarget.options.selectIndex;
       // p.textContent=`선택 : ${options[index].textContent}`;

        //[방법2]
        p.textContent=`선택 : ${select.value}`;
    })//e end

    //[p.345]
    let 현재값;
    let 변환상수=10;

    //1.각 요소의 객체 호출
    const select3=document.querySelector('select:nth-child(6)');    //select중에서 3번째x    //nth-child(6)body로부터 6번째 자식(원래는 div넣어서 하는거라서 지금처럼 상위요소 없이 사용 시 해당처럼 카운트됨)
        console.log(select3);
    const input=document.querySelector('input');
    const span=document.querySelector('span');

    //2. 계산함수(실행조건 : 1. select3 값 변경되었을때, 2..input 값을 입력[keyup] 했을때)
    const calulate=function(){
        span.textContent=(현재값*변환상수).toFixed(2);  //toFixed() : 소수점 자르기 함수[반올림]
    }

    //3. selcet3를 값을 change했을때
    select3.addEventListener('change',function(event){
        const options=event.currentTarget.options;
        console.log(options);

        const index=event.currentTarget.options.selectedIndex;

        console.log(`index`+index);

        변환상수=Number(options[index].value);
            //변환상수=Number(select3.value);
        calulate(); //계산 및 출력함수 실행
    })//end

    //4. input 값을 keyup했을때
    input.addEventListener('keyup',function(event){
        현재값=Number(event.currentTarget.value);
            //현재값=Number(input.value);
        
        calulate();//계산 및 출력함수 실행
    })
})