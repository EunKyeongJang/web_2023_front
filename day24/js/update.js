/* 
    수정
        1.[식별자] 무엇을 수정할껀지.updatefno
        2. 기존데이터 호출
        3. 수정처리
*/
//[0]
document.addEventListener("DOMContentLoaded",function(){수정정보호출();});

//[1]수정할 게시물의 정보를 출력한다.(1. JS열렸을때.)
function 수정정보호출(){    console.log('수정정보 호출');

    //1. 누구를
    const fno=JSON.parse(localStorage.getItem('updatefno'));

    //2. fno에 해당하는 객체 찾기
    const feedList=JSON.parse(localStorage.getItem('feedList'));
        for(let i=0; i<feedList.length; i++){
            if(fno==feedList[i].fno){
                //3. 기존 데이터에 대입 [등록 시 \n -> <br/>     수정 시<br/>  -> \n ]
                document.querySelector('textarea').value=feedList[i].fcontent.replaceAll('<br/>','\n');
                document.querySelector('#fileImg').src=feedList[i].fimg;
                return;
            }
        }
}

//[2] 1. 이미지 등록함수(input(file)에서 첨부파일을 등록(onchange)할때마다)
let imgByte=``;
function 이미지등록함수(event){console.log('이미지 등록()')
    //!event : 이벤트를 발생한 결과정보객체
    console.log(event);
    console.log(event.target);
    console.log(event.target.files);//input type file속성일때만 가능한 속성[files]
    console.log(event.target.files[0]);//등록된 첨부파일을 파일 객체

    //[1]첨부파일 input에 등록된 파일을 바이트 가ㅏ져오기
        //1. 파일 읽기 클래서[객체,설계도],newFileReader();
    let 파일읽기객체= new FileReader(); //파일 읽기 생성
        //2. 파일을 JS로 읽어들이기[ 내가 등록한 파일을 ]
        파일읽기객체.readAsDataURL(event.target.files[0]);
        console.log(파일읽기객체);
        //3. 읽어온 바이트를 img 태그에 출력
        파일읽기객체.onload=function(){
            document.querySelector('#fileImg').src=파일읽기객체.result;
            imgByte=파일읽기객체.result;
        }
}

//[3] 피드수정
function 피드수정(){
    //1. 입력받은 값 호출
    const fcontent=document.querySelector('textarea').value;

    //2. 수정할 게시물/피드 찾기
    const fno=JSON.parse(localStorage.getItem('updatefno'));
    const feedList=JSON.parse(localStorage.getItem('feedList'));
        for(let i=0; i<feedList.length;i++){
            if(fno==feedList[i].fno){
                feedList[i].fcontent=fcontent.replaceAll('\n','<br/>'); //찾은 객체에 새로운값 대입
                //만약에 새로운 첨부 이미지가 없으면 기존데이터/ 있으면 새로운 첨부이미지
                feedList[i].fimg=imgByte=='' ? feedList[i].fimg : imgByte;
                //!!!!!!!!!!!!!!!!!!!:localStorage에 적용
                localStorage.setItem('feedList', JSON.stringify(feedList));
                alert('수정성공');
                location.href='index.html';
            }//if end
        }//for end
}//f end