const inNum = [];
const inTime = [];
//========== 입차 함수============
function 입차(){//f start
    
    console.log("입차")
    //1. [입력]
    const inCar = document.querySelector('#inNum').value;
    const carTime = document.querySelector('#inTime').value;
    

        if( inCar.length != 4 ){ alert('차량번호 4자리를 입력해주세요.'); return; }
        /* if( inTime.indexOf(carTime)<0){alert('시간을 입력해주세요');return;}
        */
        if(carTime==""){ alert('시간을 입력 해 주십시오.'); return; }

        const inNum1= document.querySelector("#inNum").value;
        const inTime1= document.querySelector("#inTime").value;

        inNum.push(inNum1);     console.log(inNum);
        inTime.push(inTime1);   console.log(inTime);

        alert('입차 되었습니다.')
            document.querySelector('#inNum').value='';
            document.querySelector('#inTime').value='';

}//f end


//===========출차=====================
function 출차() //f start
{
    console.log("출차");
    const carOutNum=document.querySelector("#carOutNum").value;
    const carOut=document.querySelector("#carOut").value;

    //차량번호 리스트에서 인덱스 추출
    const searchCar=inNum.indexOf(carOutNum);

    //유효성 검사
    if(searchCar==-1){ alert('입차한 차량이없습니다.') ; return;}
    if(carOut==""){ alert('시간을 입력 해 주십시오.'); return; }   
    //유효성 검사 end

    let notice="";
    let pay=0;

    //시간 -> 숫자
    console.log(inTime[searchCar]);
    const inTimeSe=inTime[searchCar].split(':');    
    const inTimeNum=Number(inTimeSe[0])*60+Number(inTimeSe[1]);
    console.log(inTimeNum);

    const outTimeSe=carOut.split(':');
    const outTimeNum=Number(outTimeSe[0])*60+Number(outTimeSe[1]);
    console.log(outTimeNum);
    //시간 -> 숫자 end

    const time= outTimeNum-inTimeNum;   console.log(`출차시간-입차시간 : ${time}`);

    //if start
    if(time>=0){ 
        if(time<=30){//if_1 30분 이하로 주차한 경우
            pay=0;
        }
        else{       //if_1 30분 초과 주차한 경우
            if((time-30)%10==0){//if_2 
                pay=((time-30)/10)*1000;
            }
            else{       //if_2 
                pay=(parseInt((time-30)/10)+1)*1000;
            }
        } 
        alert(`${pay}원을 지불하십시오.`);      
    }

    else{
        alert(`시간을 다시 확인하십시오.`);
    }
    //if end  

    console.log(carOutNum);
    console.log(carOut);

}   //f end