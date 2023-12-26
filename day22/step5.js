document.addEventListener('DOMContentLoaded',function(){    //DOM객체 모두 실행 후 js 실행
    let counter=0;
    let isConnect=false;

    const h1=document.querySelector('h1');      //h1 선택(클릭횟수 표시)
    const p=document.querySelector('p');         //p 선택(연결상태 표시)

    const connectButton=document.querySelector('#connect');         //connect(button) 선택
    const disconnectButton=document.querySelector('#disconnect');   //disconnect(button) 선택

    const listener=function(event){
        h1.textContent=`클릭횟수 : ${counter++}`        //클릭횟수 표시
    }

    connectButton.addEventListener('click',function(){      //커넥트 버튼 클릭시 실행되는 함수
        if(isConnect==false){       //isConnect 변수로 connect와 disconnect 구분
            //커넥트 버튼을 클릭했을때, isConnect==false라면, 이벤트연결상태를 ' 연결' 로 바꾸고 listener()함수를 호출(클릭 시 카운터 올라감)
            h1.addEventListener('click', listener);
            p.textContent=`이벤트 연결상태 : 연결`
            isConnect=true;     //isConnect 변수로 connect와 disconnect 구분
        }
    });

    disconnectButton.addEventListener('click', function(){
        if(isConnect==true){
            h1.removeEventListener('click',listener);   //h1에 등록된 click event 를 해제해라.
            p.textContent=`이벤트 연결상태 : 해제`
            isConnect=false;
        }
    });


});