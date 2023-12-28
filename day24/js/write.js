//[1] 피드/게시물 등록함수(1. 피드게시버튼을 클릭했을때)
function 피드등록(){
    console.log(`피드등록 함수 실행`)
    //1. 각 요소의 입력값 호출
    const fpwd=document.querySelector('input').value;
    const fcontent=document.querySelector('textarea').value;

    //유효성검사
    if(fpwd.length<1){
        alert('패스워드를 입력해주세요.');
    }
    if(fcontent.length<1){
        alert('내용을 입력해주세요');
    }
    if(imgByte==''){
        alert('대표 이미지를 등록해주세요');
    }

    //3. 기존 localStorage 호출
    let feedList = JSON.parse(localStorage.getItem('feedList')); console.log(feedList);
    if(feedList==null){
        feedList=[];    //만약에 localStorage에 아무것도 없으면 배열 선언
    }

    //2. 객체화
    const feed={
        fno : feedList.length>=1? feedList[ feedList.length-1].fno+1 : 1,    
        //[!] 게시물 번호를 자동으로 순차적으로 배정[ 마지막 게시물의 fno+1, 첫 게시물일때는 1]
        fimg : imgByte,    //[!]input file로 등록된 사진(), 2번함수(이미지등록함수)에서imgByte
        fdate : new Date(), //new Date() : 현재날/시간 호출
        fcontent : fcontent.replaceAll('\n','<br/>') ,  //문자열.replaceAll('교체할 문자', '새로운 문자') : 문자 치환/교체
        fgood :0,   //등록 시 좋아요는 0부터 시작
        fbad : 0,   //등록 시 싫어요는 0부터 시작
        fpwd : fpwd
    }

    console.log(feed)

    

    //4. 피드목록에 피드 등록
    feedList.push(feed);

    //5. localStorage저장 [!! localStorage 문자열만 저장이 가능하므로 ]
    localStorage.setItem('feedList',JSON.stringify(feedList));

    //6. 등록 성공 시 
    alert('등록 성공!');
    location.href='index.html'; //페이지 이동
}//f end

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