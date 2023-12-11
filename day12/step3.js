console.log('js열림');  //js 실행X
//파일경로 문제, ctrl+클릭 > 경로파일 열림(안열리면 경로명 오류 의심)

const 회원배열=[];    //여러 회원 이름을 저장하는 배열. 함수 밖에 있으니까. js한번만 실행

/*
function 회원등록(){    //f start   //선언

    console.log('회원등록함수 실행');

    //1. [입력]
    const name=document.querySelector('#nameInput').value;
        //document.querySelector('#nameInput').속성;
        console.log(name);
    //2. [처리] //등록처리 == 배열에 추가

     //if_1==============================================================
        //[부가기능2] 만약에 입력받은 이름이 이미 배열에 존재하면 [중복발생]
        //중복이면 alert로 중복이라고 알려주고, 배열에 push 하지않기
        if( 회원배열.indexOf(name)>=0){    //indexOf : 존재하면 인덱스번호 반환/ 없으면 -1
            alert('현재 등록된 이름입니다.[중복]'); 
            return; //함수종료 [ 함수 강제 종료 ]
        }
        else{
        //if_2==============================================================
            //[부가기능3] 회원명은 3글자일 경우에만 가능
            //입력값에 글자수가 3이 아니면 입력불가 해주고 배열에 push 하지 않기
            if(name.length!=3){
            alert('회원명은 3글자로 입력해주세요');
            }
            else{   
                //[부가기능4] 만약에 입력받은 이름에 숫자가 포함되어 있으면
                //입력값에 alert로 숫자는 입력 불가라 알려주고, 배열에 push하지 말기
                    //isNaN() [ NaN : not a number ] : 문자인지 숫자인지 판단함수 
                        //isNaN() : 숫자이면 false, 문자이면 true
                console.log( isNaN(name[0]) );   //첫글자
                console.log( isNaN(name[1]) );   //두글자
                console.log( isNaN(name[2]) );   //세글자
            //if_3==========================================================
                if ( !isNaN(name[0]) || !isNaN(name[1]) || !isNaN(name[2]) ){   //하나라도 숫자이면(문자= true, 숫자=false)
                    alert('숫자를 입력할수 없어요');
                }
                else{
                //입력된 값을 배열에 추가
                회원배열.push(name);    
                console.log( 회원배열 );
                //3. [출력]
                document.querySelector('#nameList').innerHTML=회원배열;
                }
            //if_3==========================================================
            }
        //if_2==============================================================
        }
        
    //if_1==============================================================    
    }   //f end*/


    //return 사용--------------------------------------------------
    function 회원등록(){ 
        //const 회원배열=[] : 함수 호출될때마다 실행되는 구역 -> 함수 호출될때마다 초기화 되어 이전 list 사라짐
        const name=document.querySelector('#nameInput').value;

        //if_1==================
        if( 회원배열.indexOf(name)>=0){ 
            alert('현재 등록된 이름입니다.[중복]'); 
            return; //함수종료 [ 함수 강제 종료 ]
        }
        //if_2==================
        if(name.length!=3){
            alert('회원명은 3글자로 입력해주세요');
            return;
        }
        //if_3==================
        if ( !isNaN(name[0]) || !isNaN(name[1]) || !isNaN(name[2]) ){   
            alert('숫자를 입력할수 없어요');
            return;
        }

         //입력된 값을 배열에 추가
        회원배열.push(name);    
        console.log( 회원배열 );
        //3. [출력]
        document.querySelector('#nameList').innerHTML=회원배열;

        //[부가기능.1]
        //1. 입력 후 input상자 초기화 [input에 value에 빈 문자열 넣어주기]
    document.querySelector('#nameInput').value='';

    }
    //------------------------------------------------------------

        


    

      
//변수 : let, 상수 : const, 함수 : function

function 회원삭제(){    //f start
        console.log('회원삭제 함수');
        //1. [입력]
        const name=document.querySelector("#nameInput").value;
        //2. [처리]
            //입력한 값이 존재하면 삭제, 없으면 없다고 출력
            let deleteIndex= 회원배열.indexOf(name); //삭제할 인덱스 위치
            if(deleteIndex>=0){  //indexOf() : 존재하면 0 이상의 인덱스 위치 반환
                회원배열.splice(deleteIndex,1); 
                alert('삭제했습니다');
            }
            else{   //없으면 -1
                alert('존재하지 않습니다.');
            }
        //3. [출력] [새로고침 (배열 내 요소가 변경되었으니까 화면도 다시 출력)]->재 렌더링
        document.querySelector('#nameList').innerHTML=회원배열;

}       //f end

/* 
- 배열을 위에 선언/생성 한 이유
    1. 선언은 1번만 되어야 한다.[ 누적 저장을 위해(선언이 계속되면 초기화되어 누적 불가능) ]
    2. 여러 {} 에서 호출/사용 해야 하므로 전역 사용.
        {}
        1. function 회원등록(){}  2. function 회원삭제(){}

- 지역변수/전역변수 특징
    {} 안에서 선언된 변수/상수는 {} 밖으로 나올 수 없다.
    {} 안에서 선언된 변수/상수는 하위 {} 안으로 들어갈 수 있다.(상위로는 불가능)
*/