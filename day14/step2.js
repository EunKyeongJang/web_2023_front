let output=``;

// 문제1) 입력받은 수 만큼 * 출력 
/*
const value=Number(prompt("문제1 수 입력"));
for(let i=0; i<value; i++){
    //- i는 1부터 입력받은 수 까지 1씩 증가
    output+=`*`;
}//for end
console.log( output );
*/

// 문제2) 입력받은 수 만큼 * 출력 [  - 3줄(3배수)마다 줄바꿈 ]
/*
output=``;
const value2=Number(prompt('문제 2 수 입력'));
for(let i=0; i<=value2; i++){
    output+=`*`;
    //만약에 i가 3배수 이면 줄바꿈 처리
    if(i%3==0){ output +=`\n`; }    //\n : 제어(이스케이프)문자
}
console.log(output);
*/

// 문제3) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
/* 
*
**         
***      
****   
*****
*/
/*
output=``;
const line3=Number(prompt("문제3 줄수 :"));
for(let i=1; i<=line3; i++){    //상위for문

    //별찍기
    for(let s=1; s<=i; s++){ output+=`*`; }
    //줄바꿈
    output+=`\n`;   
}
console.log(output);
*/

// 문제4) 입력받은 줄 수 만큼 * 출력 [ ex) 5 ]
/* 
*****
****
***
**
*
 */
/*
output=``;
const line4=Number(prompt('문제4 줄수 :'));
for(let i=line4; i>0; i--){ //조건 예시2) for(let i=1; i<=line4; i++)

    for(let s=i; s>0; s--){ output+=`*`; }  //조건 예시2) for(let s=1; s<=line4-i+1; s++)

    output+=`\n`;
}
console.log(output);
*/

// 문제5) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
/*
    *
   **
  ***
 ****
*****
*/
/*
output=``;
const line5=Number(prompt("문제5 줄수 :"));
for(let i=1; i<=line5; i++){

    for(let b=1; b<=line5-i; b++){ output+=" "; }

    for(let s=1; s<=i; s++){ output+=`*`; }

    output+=`\n`;
}

console.log(output); 
*/

// 문제6) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
/*
*****
 ****
  ***
   **
    *
*/
/*
output=``;
const line6=Number(prompt("문제6 줄수 :"))
for(let i=1; i<=line6; i++){

    for(let b=1; b<=i-1; b++){ output+=` `; }
    for(let s=1; s<=line6-i+1; s++){ output+=`*`; }
    
    output+=`\n`;
}//for end
console.log(output);
*/

// 문제7) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
/*
    *
   ***
  *****
 *******
*********
*/
/*
output=``;
const line7=Number(prompt("문제7 줄수 :"))
for(let i=1; i<=line7; i++){
    for(let b=1; b<=line7-i; b++){ output+=` `;}
    for(let s=1; s<=(i*2)-1; s++){ output+=`*`;}
    output+=`\n`;
}
console.log(output);
*/

// 문제8) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
/*
*********
 *******
  *****
   ***
    *
*/
/*
output=``;
const line8=Number(prompt("문제8 줄수 :"))
for(let i=1; i<=line8; i++){
    for(let b=1; b<=i-1; b++){output+=` `;}
    for(let s=1; s<=(line8-i)*2+1; s++){output+=`*`;}
    output+=`\n`;
}
console.log(output);
*/

// 문제9) 입력받은 줄 수 만큼 * 출력  [ ex) 10 ]
/*
    *
   ***
  *****
 *******
*********
*********
 *******
  *****
   ***
    *
*/
/*
output=``;
const line9=Number(prompt('문제9 줄수 :'))/2
for(let i=1; i<=line9; i++){
    for(let b=1; b<=line9-i; b++){ output+=` `; }
    for(let s=1; s<=i*2-1; s++){ output+=`*`; }
    output+=`\n`;
}
for(let i=1; i<=line9; i++){
    for(let b=1; b<=i-1; b++){ output+=` `;}
    for(let s=1; s<=(line9-i)*2+1; s++){ output+=`*`; }
    output+=`\n`;
}
console.log(output);
*/

// 문제9_2) 입력받은 줄 수 만큼 * 출력(홀수)  [ ex) 9 ]
/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/
function 문제9(){
    
    const lineNum2=parseInt(Number(document.querySelector('#line9').value)/2); console.log(line9);
    const lineNum1=lineNum2+1;
    let html=``;
    

    for(let i=1; i<=lineNum1; i++){

        html+=`<tr>`;    //행 시작

        for(let b=1; b<=lineNum1-i; b++){ html+=`<td>  </td>`; }
        for(let s=1; s<=i*2-1; s++){ html+=`<td>★</td>`; }

        html+=`</tr>`;   //행 끝

    }
    for(let i=1; i<=lineNum2; i++){

        html+=`<tr>`;   //행 시작

        for(let b=1; b<=i; b++){ html+=`<td>  </td>`;}
        for(let s=1; s<=(lineNum2-i)*2+1; s++){ html+=`<td>★</td>`; }

        html+=`</tr>`;   //행 끝
        
    }

    const tableObj=document.querySelector('#table9');
    tableObj.innerHTML=html;

    console.log(tableObj);
}

// 문제10) 입력받은 줄(홀수) 수 만큼 * 출력  [ ex) 7 ]
/*
*     *
 *   *
  * *
   *
  * *
 *   *
*     *
*/

/*
output=``;
const line10=Number(prompt('문제10 줄수 :'))

//[행]  <tr>
for(let r=1; r<=line10; r++){
    //[열]  <td>
    for(let c=1; c<=line10; c++){
        //[조건1 = 행과 열이 같으면 별]
        if(r==c){ output+=`*`; }
        //[조건2 = 행과 열이 더한값이 입력받은값+1]
        else if(r+c==line10+1){output+=`*`;}
        //아니면 공백
        else{ output+=` `; }
    }
    output+=`\n`;
}
console.log(output);
*/

//문제10-2

function 문제10(){
    //[1. 입력]
    const line=Number(document.querySelector('#line10').value);
    let html=``;

    //[2. 처리]
    //[행]
    for(let r=1; r<=line; r++){
        html+=`<tr>`;   //행 시작

        for(let c=1; c<=line; c++){
            if(c==r){ html +=`<td>★</td>`;}
            else if(c+r==line+1){ html +=`<td>★</td>`;}
            else{html +=`<td>  </td>`;}
        }

        html+=`</tr>`;  //행 끝
    }

    //[3. 출력]
    const tableObj=document.querySelector('#table10');
    tableObj.innerHTML=html;
    console.log(tableObj);
}

