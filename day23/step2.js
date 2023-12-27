//1. html요소에서 onclick="함수()" : 인라인 이벤트 모델 [react]
function 인치변환(){    //선언적 함수
    //1. 각 요소 가져오기
    const input=document.querySelector('input');
    const p=document.querySelector('p');

    //3. 입력받은 값 호출
    const inch=Number(input.value);

    //4. 유효성 검사
    if(isNaN(inch)){
        p.textContent=`숫자를 입력 해 주세요`;
        return; // 함수종료 : 아래 코드는 진행되지 않는다.
    }

    //5. inch를 cm으로 변환
    const cm=inch*2.54;
    p.textContent=`${cm}cm`;
}//f end

//2. .addEventListener('click',함수(){}) : 표준 이벤트 모델
document.addEventListener('DOMContentLoaded',function(){    //익명함수
    //[p.399]

    //1. 각 요소 가져오기
    const input=document.querySelector('input');
    const button =document.querySelector('button');
    const p=document.querySelector('p');

    //2. 요소의 이벤트 등록
    button.addEventListener('click',function(){
        //3. 입력받은 값 호출
        const inch=Number(input.value);

        //4. 유효성 검사
        if(isNaN(inch)){    
            p.textContent=`숫자를 입력 해 주세요`;
            return; // 함수종료 : 아래 코드는 진행되지 않는다.
        }

        //5. inch를 cm으로 변환
        const cm=inch*2.54;
        p.textContent=`${cm}cm`;
    })//e end

    //[p.341]
    //1. 각 요소 가져오기
    const email=document.querySelector('#email');
    const emailConfirm=document.querySelector('#emailConfirm');

    //2. 이메일 유효성검사 함수선언
    const isEmail=function(value){
        //만약에 입력값(매개변수)에 @포함되고 @기준으로 뒷자리에 .(온점)이 있으면true 없으면 false 리턴
        return value.indexOf('@') > 1 && value.split('@')[1].indexOF('.') > 1
        //value.indexOf('@') > 1 : 만약에 매개변수에 @가 포함되어 있으면
        //&& 이면서
        //value.split('@')[1].indexOF('.') > 1 : 만약에 매개변수를 @기준으로 분리 후 뒷자리에 .(온점)이 포함되어 있으면
    }

    //3. 요소의ㅣ 이벤트[ input 에서 keyup 알 때 마다] 등록
    email.addEventListener('keyup', function(event){
        console.log(event);
        console.log(event.currentTarget);   //현재 이벤트를 발생시킨 요소
        console.log(email.value);   //입력요소에서 입력값 호출
        console.log(event.currentTarget.value); //이벤트발생한 요소의 입력값 호출

        const value=event.currentTarget.value;
        if(isEmail(value)){ //2번 주석의 함수 호출 => 력롸가 있으면 true 없으면 false
            emailConfirm.Confirm.style.color='red';
            emailConfirm.textContent=`이메일 형식입니다. : ${value}`

            emailConfirm.Confirm.style.color='red';
            emailConfirm.textContent=`이메일 형식이 아닙니다. : ${value}`

        }
    })


})//p end