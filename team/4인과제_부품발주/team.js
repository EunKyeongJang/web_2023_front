//배열 선언
const 부품1=[];
const 업체1=[];
const 가격1=[];

const 부품2=[];
const 업체2=[];
const 개수2=[];
const 총가격2=[];


function 등록1(){   //등록1 f start

    console.log('등록 1 함수 실행');

    //[입력]
    const 부품=document.querySelector("#부품").value;
    const 업체=document.querySelector("#업체").value;
    const 가격=document.querySelector("#가격").value;

        //유효성 검사---------------------------------------------

        if(부품1.indexOf(부품)!=-1){//동일부품 존재 시
            alert('동일한 부품이 존재합니다.');
            console.log('부품 중복');
        
            value초기화();

            return;
        }

        //빈칸검사
        if(부품==""){ alert('부품명을 입력해 주십시오.'); return; }
        if(업체==""){ alert('업체명을 입력해 주십시오.'); return; }
        if(가격==""){ alert('가격을 입력해 주십시오.'); return; }

        //가격 숫자검사
        if(isNaN(가격)){ alert('가격을 숫자로 입력해 주십시오.'); return; }

        //유효성 검사 end--------------------------------------------

    //[처리]
    부품1.push(부품);
    업체1.push(업체);
    가격1.push(가격);

    console.log(부품1);
    console.log(업체1);
    console.log(가격1);
//=======================================================

    const option = document.querySelector('#부품s');
    let html=''
    for(let i=0 ;i<부품1.length;i++){
        html+= `<option>${부품1[i]}</option>`
    }
    option.innerHTML = html;
//=======================================================        

    //[출력]
    출력1();
    value초기화();
    alert('등록성공!');

}   //f end

function 삭제1(삭제1매개변수){    //삭제1 함수 start
    console.log('삭제1 함수 실행');
    //231215_19:09 수정
        let search=0;
        let 부품2count=부품2.length;
        console.log(`부품2=${부품2.length}`);
        
        for(let i=1; i<=부품2count; i++){
            search=부품2.indexOf(부품1[삭제1매개변수]);
            console.log(`search=${search}`);

                if(search!=-1){
                    부품2.splice(search,1);
                    업체2.splice(search,1);
                    개수2.splice(search,1);
                    총가격2.splice(search,1);
                }
        }
    //--------------
 
    부품1.splice(삭제1매개변수,1);
    업체1.splice(삭제1매개변수,1);
    가격1.splice(삭제1매개변수,1);   

    출력1();
    출력2();
}   //f end

function 출력1(){   //등록1 f start
    console.log('출력함수 실행');
    
    const output1=document.querySelector("#출력1");

    let html=``; 

    for(let i=0; i<부품1.length; i++){
        html+=`<div>
                    <div>${부품1[i]}</div>
                    <div>${업체1[i]}</div>
                    <div>${(가격1[i]*1).toLocaleString()}원</div>

                    <div>
                        <button onclick='삭제1(${i})'>X</button>
                    </div>
                 </div>`
        } 
    
    output1.innerHTML=html;

}   //f end

function value초기화(){ //vlaue값 초기화 f start
    document.querySelector("#부품").value=``;
    document.querySelector("#업체").value=``;
    document.querySelector("#가격").value=``;
}// f end


//=====================22=====================================

// 등록2 함수
function 등록2(){console.log('등록2함수실행')
    const 개수=document.querySelector('#개수').value;

    const 부품s=document.querySelector('#부품s').value;
    console.log( 부품s );

    const 업체인덱스 = 부품1.indexOf(부품s);

    let 물품당합계=가격1[업체인덱스]*개수;//231215.18:23 추가


    부품2.push( 부품s );
    개수2.push(개수); console.log(개수2);
    업체2.push( 업체1[업체인덱스] );
    총가격2.push(물품당합계);//231215.18:23 추가
    출력2();
}


function 출력2(){console.log('출력2함수실행')
    const output2=document.querySelector('#출력2')
    let html='';
// 업체2

/* let 부품당총가격=0;  //231215.18:23 수정
    for(let i=0; i<가격1.length; i++){
        부품당총가격=가격1[i]*개수2[i]
        총가격2.push(부품당총가격);
        console.log(총가격2);
    } */
    for(let i=0; i<업체2.length; i++){
        html+=`
        <div class="출력2row">
            <div>${부품2[i]}</div>
            <div>${업체2[i]}</div>
            <div>${개수2[i]}</div>
            <div>${총가격2[i].toLocaleString()}원</div>

            <button onclick="삭제함수(${i})">X</button>
        </div>
        `
    }
        total();
// 총합계
    output2.innerHTML=html;
}

function total(){
    const output3=document.querySelector("#총합계")
    let html='';
    let total=0;
    for(let i=0; i<총가격2.length; i++){
        total += Number(총가격2[i]);
    }
    
    output3.innerHTML=`<div> 총 합계 : <span>${ (total*1).toLocaleString() } 원 </span>  </div>`;
}

//발주 삭제 함수입니다
function 삭제함수(삭제할인덱스){
    console.log('삭제함수()실행' + 삭제할인덱스);
    if (confirm('삭제할까요?')) {
        alert('삭제 성공');
        부품2.splice(삭제할인덱스,1);
        업체2.splice(삭제할인덱스,1);
        개수2.splice(삭제할인덱스,1);
        총가격2.splice(삭제할인덱스,1);
    }
    출력2()
}