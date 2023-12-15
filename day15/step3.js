//전역자료 [ 함수 밖에서 선언 ]
const 할일목록=[];  //할일의 내용을 저장
const 상태목록=[];  //할일의 상태을 저장


//지역자료 [ 함수 안에서 선언 ]

//1. 등록함수 선언 : 매개변수, 리턴값X
function 등록함수(){
    console.log('등록함수 실행');
    //[1.입력] : HTML input으로부터 입력된 값을 가져온다.
    const content=document.querySelector('#content').value;

    //[2.처리] ; 입력받은 값을 배열에 저장한다.
    할일목록.push(content);
    상태목록.push(false);   //할일의 상태를 입력받지 않고 초기값을 임의로 false
    console.log(할일목록);
    console.log(상태목록);  

    //[3.출력]
    출력함수();
    document.querySelector('#content').value=``;
    alert('등록성공');
}//f end

//2. 변경함수 선언 : 매개변수=변경할 인덱스, 리턴값X( 스위치 함수 )     육하원칙 생각 잘하면 좋음: 누가, 무엇을, 언제, 어디서[X], 어떻게, 왜
function 변경함수(변경인덱스){  //선택한 인덱스 번호
    console.log('변경함수 실행');
    //[1.입력]X

    //[2.처리] false -> true, true -> false
    상태목록[변경인덱스]=!상태목록[변경인덱스];
    console.log(상태목록)

    //[3.출력]  현재 위에서 처리된 배열의 최신상태를 다시 HTML에 저용. 재 렌더링
    출력함수()
}//f end


//3. 삭제함수 선언 : 매개변수=삭제할 인덱스=클릭된 인덱스 번호, 리턴값X
function 삭제함수(삭제인덱스){
    console.log('삭제함수 실행');
    //[1.입력]X
    //[2.처리]
    let check=confirm('삭제하시겠습니까?');
    if(check==true){
    할일목록.splice(삭제인덱스,1);
    상태목록.splice(삭제인덱스,1);
    }
    //[3.출력]
    출력함수();
}//f end


//4. 출력함수 선언 [ 등록 후 , 변경 후 , 삭제 후 = 배열의 최신상태를 HTML에 대입 ]
function 출력함수(){
//1. [어디에]todoBottom
const todoBottom=document.querySelector('#todoBottom');

//2. [무엇을]배열에있는 여러요소들을    JS 입장에서 HTML코드는 문자열
let html='';   //초기값은 빈 문자열

for(let i=0; i<할일목록.length; i++){
html+=`<div class="todo ${상태목록[i] ? 'success' : ``}">    
            <div class="content"> ${할일목록[i]} </div>
            <div class="btnBox"> 
                <input onclick="변경함수(${i})" type="button" value="변경" />
                <input onclick="삭제함수(${i})" type="button" value="삭제" />    
            </div>
        </div>`
} 

//3. [대입]
todoBottom.innerHTML=html;
} 