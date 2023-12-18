const boardArray=[];    //배열 선언 //'작성자/비밀번호/제목/내용' 을 하나의 문자열로 저장한다. **샘플코드를 초기에 넣어두는게 좋음

//1. [C]글쓰기 : HTML에 있는 글쓰기 버튼을 클릭했을때
function 글쓰기(){  //매개변수 : X//리턴값 : X
    //0. 전역변수[배열]
        //- 속성[상태]마다 배열 하나씩 만들면 배열이 너무 많아져 관리가 힘들다.
        //객체지향 나오기전 여러 속성들을 하나의 배열에서 관리하고싶을때
            //1. boardArray=[] 
                //- 하나의 서로다른 유형의 4가지 데이터를 저장하면 인덱스 관리가 힘들다.
            //2. boardArray=["작성자/ 비밀번호/ 제목/ 내용","작성자/ 비밀번호/ 제목/ 내용","작성자/ 비밀번호/ 제목/ 내용"] 
                //- 여러 유형의 4가지의 데이터를 하나의 문자열로 묶음 *단 구분선이 있어야함(구분문자는 개발자 마음)
                //- 입력데이터에는 구분문자가 포함되면 안된다.
    

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

    boardArray.push(board); console.log(boardArray);    //위에서 저장한 변수값을 배열에 저장

    //3. 배열에 HTML 출력하기
    모든글출력();   //작성한 value값을 출력

    //초기화
    document.querySelector("#writer").value=``; //작성한 값 지우기
    document.querySelector("#password").value=``;   //작성한 값 지우기
    document.querySelector("#title").value=``;  //작성한 값 지우기
    document.querySelector("#content").value=``;    //작성한 값 지우기

    return;     //함수종료
}
//2-1. [R] 모든 글 출력 : 1. js가 열렸을때 2. 글쓰기/ 글수정/ 글삭제 처리했을때 새로고침
function 모든글출력(){  //매개변수 : X//리턴값 : X
    const tableBody=document.querySelector('table>tbody');  //html tbody 를 선택해서 저장
    let html=``;    //html변수 선언

    for(let i=0; i<boardArray.length; i++){
            html+=`<tr onclick="개별글출력(${i})">  

                    <th>${i}</th>
                    <th>${boardArray[i].제목}</th> 
                    <th>${boardArray[i].작성자}</th>
                    <th>${boardArray[i].조회수}</th>
                </tr>`;
    }
    console.log(tableBody)
    tableBody.innerHTML=html;   //tbody에 html에 저장된 값을 넣기

    return;
}
//2-2. [R] 개별 글 출력 : 해당 글을 선택했을때
function 개별글출력(index){  //매개변수 : (대상)보고자하는 식별번호//리턴값 : X

    //조회수 증가
    boardArray[index].조회수+=1;
    모든글출력();
    
    console.log(`index:${index}`);

    const boardBox=document.querySelector('#boardBox'); //html의 boardBox를 선택해서 저장

    //replaceAll('교체할 문자열', '새로운 문자열')(All을 안붙이면 하나의 요소만 변환)
    //\n을 <br/>로 변경 : <textarea>에서 줄바꿈하면 \n으로 저장되고 HTML출력 시 \n 대신래 <br/> 반환
    //replace를 이용해 textarea에 줄바꿈 시 html에도 동일하게 출력되도록 내용에 존재하는 모든(replaceAll) \n 를 <br/>로 교체

    let html=`<div> 작성자 : ${boardArray[index].작성자} 조회수 : ${boardArray[index].조회수}</div>   
                <div> 제목 : ${boardArray[index].제목}</div>
                <div> 내용 : ${boardArray[index].내용.replaceAll('\n', '<br/>')}</div>
                <input onclick="글삭제(${index})" type="button" value="삭제">
                <input onclick="글수정(${index})" type="button" value="수정 ">`;
    boardBox.innerHTML=html;
    return;
}
//3. [U]글수정 : 글수정 버튼을 클릭했을때
function 글수정(index){  //매개변수 : (대상)수정할 식별번호//리턴값 : X
    console.log(index);

    //1. 검증[유효성검사] : 패스워드를 입력받아 해당 게시물의 패스워드와 동일하면
    const checkPw=prompt('비밀번호')
    if(checkPw==boardArray[index].비밀번호){
        const updateTitle=prompt('수정할 제목');
        const updateContent=prompt('수정할 내용');

        //수정처리
        boardArray[index].제목=updateTitle;
        boardArray[index].내용=updateContent;
        alert('수정성공');

        //새로고침
        모든글출력();
        개별글출력(index);        
    }
    else{
        alert('패스워드가 다릅니다. 수정불가');
    }
    return;
}
//4. [D] 글삭제 : 글삭제 버튼을 클릭했을때
function 글삭제(index){  //매개변수 : (대상)삭제할 식별번호//리턴값 : X
    console.log(index);
    const checkPw=prompt('비밀번호');
    if(checkPw==boardArray[index].비밀번호){
        //삭제처리
        boardArray.splice(index,1);
        alert('삭제성공');

        //새로고침
        모든글출력();
        document.querySelector('#boardBox').innerHTML=``//개별글보기 구역 초기화
    }
    else{
        alert('패스워드가 다릅니다. 삭제불가');
    }
    return;
}

/* 
    함수만들때 보님할점
        1. 언제 실행하는 함수인지
        2. 함수 안으로 넣을 매개변수
        3. 함수 밖으로 반환할 값
        4. 무엇을 실행하는지
*/