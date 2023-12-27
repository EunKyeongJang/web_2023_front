//[p.346]

document.addEventListener('DOMContentLoaded',function(){

    //1. 
    let timer=0;    //타이머(초)
    let timerId=0;  //시간을 체크하는 함수를 가지는 변수

    //2.
    const h1=document.querySelector('h1');
    const checkbox=document.querySelector('input');

    //3. 체크박스의 이벤트 등록
    checkbox.addEventListener ('change', function(event){
        //4. checked속성 확인
        console.log(checkbox.checked);
        console.log(event.currentTarget.checked);
        //5. 만약에 체크가 되어있으면
        if(event.currentTarget.checked){    //체크 된 상태

            //6. 1초마다 익명함수를 실행
            timerId=setInterval(function(){
                 timer++;   //타이머값을 1증가
                 h1.textContent=`${timer}초`;   //타이머 출력
            },1000) 
        }   
        else{   //체크 해제 상태
            clearInterval(timerId);
        }     
    })

    //[p.348]
    //1. 각 요소를 객체로 호출
    const output=document.querySelector('#output');
    const radios=document.querySelectorAll('[name=pet]');   //여러개    

    //2. 모든 라디오버튼을 하나씩 호출
    for(let i=0; i<radios.length; i++){

        //3. 이벤트[change] 등록
        radios[i].addEventListener('change',function(event){
            //[방법1]
            const current=event.currentTarget;  //이벤트를 발생시킨 요소
            if(current.checked){//만약에 해당요소가 체크되어있으면
                output.textContent=`좋아하는 애완동물은 ${current.value} 이군요.`

            }
            
                //[방법2 ]
                const checkValue=document.querySelector('input[name="pet"]:checked').value;
                console.log(checkValue);

            
        });
    }
})//e end

/*
1. 인터벌 실행
setInterval(정의함수(), 밀리초); : 밀리초 마다 해당함수를 실행하는 함수 **변수에 담지 않아도 실행은 되지만 타이머를 멈추는것은 불가능하므로, 꼭 변수안에 넣어서 사용하는것을 권장**

2. 인터벌 끄기
clearInterval(setInterval 변수);
*/