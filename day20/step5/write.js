

//1. [C]글쓰기 : HTML에 있는 글쓰기 버튼을 클릭했을때
function 글쓰기(){  

    //1. html로부터 입력받은 값 가져오기
    const writer=document.querySelector("#writer").value;   //html에서 받은 값을 writer에 대입
    const password=document.querySelector("#password").value;   //html에서 받은 값을 password 대입
    const title=document.querySelector("#title").value; //html에서 받은 값을 title 대입
    const content=document.querySelector("#content").value; //html에서 받은 값을 content 대입

    //2. 배열에 저장하기
    //직접 / 구분해서 하나로 만들었는데 이제는 객체로 하나로 만들기
    const board={
        작성자 : writer, 
        비밀번호 : password, 
        제목 : title, 
        내용 : content
    }; console.log(board);    //writer password title content 순서로 / 넣어 구분 후 저장

    //객체 내 속성추가
    board.조회수=0; //객체 내 없는 key호출할때 key 생성 // 이제 등록했으니 조회수는 0부터 시작하자
    let boardArray=JSON.parse(localStorage.getItem('boardArray'));

    if(boardArray==null){
        boardArray=[];
        boardArray.push(board); 
    }
    else{         
        boardArray.push(board); 
    }
   

   /*  if(boardArray==null){
        boardArray=[];
    }
    else{ boardArray.push(board); } */    //위에서 저장한 변수값을 배열에 저장
    
    localStorage.setItem('boardArray',JSON.stringify(boardArray)); //브라우저에 배열 저장

    //초기화
    document.querySelector("#writer").value=``; //작성한 값 지우기
    document.querySelector("#password").value=``;   //작성한 값 지우기
    document.querySelector("#title").value=``;  //작성한 값 지우기
    document.querySelector("#content").value=``;    //작성한 값 지우기

    return;     //함수종료
}
