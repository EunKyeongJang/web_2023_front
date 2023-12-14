//전역자료 [ 함수 밖에서 선언 ]
const 날짜목록=[]; 
const 항목목록=[]; 
const 금액목록=[]; 

//------등록함수-------
function 등록함수(){
    console.log('등록함수 실행');

    const infoDate=document.querySelector('#infoDate').value;
    const infoList=document.querySelector('#infoList').value;
    const infoAmount=document.querySelector('#infoAmount').value;

    날짜목록.push(infoDate);
    항목목록.push(infoList);
    금액목록.push(infoAmount);

    출력함수();

    document.querySelector('#infoDate').value=``;
    document.querySelector('#infoList').value=``;
    document.querySelector('#infoAmount').value=``;
    alert('등록성공');

    console.log(날짜목록);
    console.log(항목목록);
    console.log(금액목록);
}//f end

//------삭제함수-------
function 삭제함수(삭제인덱스){
    console.log('삭제함수 실행');

    let check=confirm('삭제하시겠습니까?');
    if(check==true){
    날짜목록.splice(삭제인덱스,1);
    항목목록.splice(삭제인덱스,1);
    금액목록.splice(삭제인덱스,1);
    }
    //[3.출력]
    출력함수();
    
}//f end

//------출력함수-------
function 출력함수(){
    console.log('출력함수 실행');

    const listDate=document.querySelector('.listDate');
    const listTxt=document.querySelector('.listTxt');
    const listAmount=document.querySelector('.listAmount');
    const deleteBtn=document.querySelector('.deleteBtn');
    const sumNum=document.querySelector('.sumNum');

    let htmlDate=``;
    let htmlTxt=``;
    let htmlAmount=``;
    let htmlBtn=``;
    let htmlsum=``;
    let totalSum=Number();

    for(let i=0; i<날짜목록.length; i++){
        htmlDate+=`<div>${날짜목록[i]}</div>`;
        htmlTxt+=`<div>${항목목록[i]}</div>`;
        htmlAmount+=`<div>${금액목록[i]}</div>`;
        htmlBtn+=`<div><button onclick="삭제함수(${i})">삭제</button></div>`;
        totalSum+=금액목록[i]*1;
    } 
        

        htmlsum=makeComma(totalSum);
        console.log(makeComma(totalSum));
        
        //3. [대입]
        listDate.innerHTML=htmlDate;
        listTxt.innerHTML=htmlTxt;
        listAmount.innerHTML=htmlAmount;
        deleteBtn.innerHTML=htmlBtn;
        sumNum.innerHTML=htmlsum;

        console.log(htmlTxt);
    
}//f end

function makeComma(합계){
    let changeType=``;
    changeType=String(합계);

let s=``;
let r=``;
let n=0;

for(let i=changeType.length; i>=1;i--){
    n++;
    s+=changeType[i-1];
    console.log(s);

    if(n%3==0){
        s+=`,`;
    }       
}
for(let i=s.length; i>=1; i--){ r+=s[i-1]; }

return r;
}
