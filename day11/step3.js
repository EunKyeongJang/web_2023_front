/* 
    변수/상수 : 자료를 저장해서 반복적으로 호출을 여러번 가능 [ 재사용 ]
    함수 : 커드를 저장해서 호출을 여러번 가능 [ 재활용 ]
*/

/* if문 연습문제 */
    /* prompt 대신 input으로 입력받기 */
    /* 풀이 결과를 console.log 대신에 span에 출력 */

    //참고
    //1. html마크업 정보를js변수로 가져오는 함수
    //document.querySelecter('마크업 또는 #id명 또는 .class명')
    //2. .value 속성 값 가져오기
    //document.querySelecter('마크업 또는 #id명 또는 .class명').value **일반적으로 value값은 text로 들어옴
    //3. innerHTML속성

//문제1 : 3개 점수를 각 input으로 입력받아 총점과 평균 sapn에 출력하시오
function 연습버튼을릭했을때실행되는모음상자(){
    //1. [입력]
    //input에 입력받은 값 가져오기 [document.querySelecter()]
    let value1 = document.querySelector('#input1').value;
    let value2 = document.querySelector('#input2').value;
    let value3 = document.querySelector('#input3').value;

    //2. [처리]
    let sum=Number(value1)+Number(value2)+Number(value3);
    let avgValue=sum/3;

    //3. [출력]
    document.querySelector('#result').innerHTML=`총점 : ${sum} 점 / 평균 : ${avgValue} 점`
}   //f end 1번문제 함수 끝


//문제2 : 2개의 정수를 입력받아 더 큰 수를 출력
function 문제2함수(){
    //[입력]
    let value1 = Number(document.querySelector('#input1').value);
    let value2 = Number(document.querySelector('#input2').value);

    //[처리]
    let result="";  //결과 변수[ if 조건에 따른 실행코드 결과를 저장하는 변수]
        //처음엔 빈문자열

        //1. 만약에 첫번째 수가 더 크면 결과변수에 첫번째 수를 저장
    if(value1>value2){result = value1;}
        //2. 만약에 두번째 수가 더 크면 결과변수에 두번째 수를 저장
    else if(value1<value2){result=value2;}
        //3. 그 외는 결과변수에 같다는 의미를 저장
    else{result="두 수는 같다."}
    //[출력]
    document.querySelector('#result').innerHTML=result;
}   //f end 2번문제 함수 끝 


//문제 3 : 3개의 정수[입력값1/2/3] 를 입력받아서 가장 큰수를 출력 
console.log('안녕');    //코드

function 문제3(){   //f 문제3 start
    let value1 = Number(document.querySelector('#input1').value);   console.log(value1);
    let value2 = Number(document.querySelector('#input2').value);   console.log(value2);
    let value3 = Number(document.querySelector('#input3').value);   console.log(value3);

    let result=value1; //첫번째 값을 가장 크다고 가정
    //만약에 max의 값보다 value2의 값이 더 크면 max 에 value2 값을 대입/수정
    if(result<value2){result=value2;}
    if(result<value3){result=value3;}

        
    /*     let result="";

        if(value1>value2)
        {
            if(value1>value3)
            { result=value1; }
            else
            { result= value3;}
        }
        else
        {
            if(value2>value3)
            { result=value2; }
            else
            { result= value3;}
        }  // 왜 안되는지 고민해보기
        console.log(result);

        document.querySelector('#result').innerHTML=`${result}`;*/
    }   //f 문제3 end

//문제 4 : 1개의 점수[입력값1] 를 입력받아 점수 90점이상 합격 출력 아니면 탈락 출력 
function 문제4(){//f 문제4 start
    let value1=Number(document.querySelector('#input1').value);  console.log(`${value1}`);

    let result="";
    if(value1>=90){result='합격';}      // 입력받은 값이 90 이상이면
    else{result='탈락';}        // 입력받은 값이 90 미만이면

    console.log(result);

    document.querySelector('#result').innerHTML=`${result}`;
}//f 문제4 end

          
/*문제 5 : 점수[입력값1]를 입력받아 점수 90점이상 A등급 출력 
                            80점이상 B등급 출력 
                            70점이상 C등급 출력  
                            그외 재시험
*/
function 문제5(){//f 문제5 start
    let value1=Number(document.querySelector('#input1').value);  console.log(`${value1}`);

    let result="";
    //처리로직
    if(value1>=90){result='A';}
    else if(value1>=80){result='B';}
    else if(value1>=70){result='C';}
    else {result='재시험';}

    console.log(result);

    document.querySelector('#result').innerHTML=`${result}`;
}//f 문제5 end



/*문제 6: 아이디[입력값1] 와 비밀번호[입력값2] 입력받기 
                   회원아이디가 admin 이고 비밀번호가 1234 이면 로그인 성공 출력 아니면 로그인실패 출력
*/

function 문제6(){
    let value1=document.querySelector('#input1').value;     console.log(value1);
    let value2=document.querySelector('#input2').value;     console.log(value2);
    let result='';

    if(value1=='admin' && value2==1234){ result="로그인 성공"; }
    else{ result="로그인 실패"; }
    console.log(result);

    document.querySelector("#result").innerHTML=`${result}`;
}

//문제 7 : 3개의 정수[입력값1/2/3] 를 입력받아서 오름차순 / 내림차순 출력 