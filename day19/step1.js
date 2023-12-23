/* 
    설계시
    1. 경험
    2. 기능 실행 순서
        [키오스크 = 사용자입장]
            카테고리선택 -> 제품선택 -> 장바구니 담기 -> 결제내역()
        [포스기 = 관리자입장]
            - 결제내역( 주문상태 )
            - 카테고리 추가/삭제 기능
            - 제품추가 삭제 기능
    3. 기능에 필요한 메모리(저장-db설계) 설계
        카테고리 = [{cno : 1, cname : '신제품(NEW)'}, 
            {cno : 2, cname : '프리미엄'}, 
            {cno : 3, cname : '와퍼&주니어'}, 
            {cno : 4, cname : '치킨&슈림프버거'}, 
            {cno : 5, cname : '올데이킹&킹모닝'}]
            - 관리자가 해당 배열을 추가/삭제
        
        카테고리 문서화 제출
        카테고리 표 [ 행 여러개 -> 개체 여러개 ] =>orm과 관련되어 있음
            카테고리 번호   카테고리 명
        1행       1         신제품(NEW)         -->하나의 행이 객체
        2행       2         프리미엄            -->하나의 행이 객체
        3행       3         와퍼&주니어         -->하나의 행이 객체
        4행       4         치킨&슈림프버거     -->하나의 행이 객체
        5행       5         올데이킹&킹모닝     -->하나의 행이 객체

        *배열[테이블]

        DB -> JAVA -> JS -> HTML

    4. 배열 안에 있는 데이터를 식별할 때 기준점
        사람=이름 : {'유재석', 나이 : 40세, 직업:강사 } - 이름으로 식별 시 동명이인이 존재하면 문제점 발생 [ 중복이 절대 없어야 함 ]
        사람={ 주민등록번호 : '123456-2'} - 주민등록은 절대 중복이 없다.

        인덱스 vs 식별코드생성 vs 이름  !!!중복이 없어야 한다. 고정값
*/

/* 백엔드로부터 데이터를 받았다 치고 */
let categoryArray = [
                {cno : 1, cname : '신제품(NEW)'}, 
                {cno : 2, cname : '프리미엄'}, 
                {cno : 3, cname : '와퍼&주니어'}, 
                {cno : 4, cname : '치킨&슈림프버거'}, 
                {cno : 5, cname : '올데이킹&킹모닝'}
            ]

/* 2. 제품목록 *제품 이미지명은 사진파일명이랑 동일하게 */
let productArray=[
    {pno : 1, pname : '큐브스테이크와퍼', pprice : 19000, pimg : '큐브스테이크와퍼.png', cno : 1},
    {pno : 2, pname : '스파이시 큐브스테이크와퍼', pprice : 25000, pimg : '스파이시큐브스테이크와퍼.png', cno : 1},
    {pno : 3, pname : '더블비프불고기버거', pprice : 13000, pimg : '더블비프불고기버거.png', cno : 5}    
]



//함수1 카테고리 출력하는 함수(실행조건 : js 열렸을때)
printCategory(1);   //최초 실행 시 선택 카테고리 cno=1 가정
function printCategory(selectCno){//함수 printCategory 선언  //매개변수 : 함수 안으로 들어온 변수
    console.log('printCategory()실행');

    //1. 어디에
    const categoryUl=document.querySelector("#header>ul");

    //2. 무엇을
    let html=``;

        //2-1. 카테고리 배열에 존재하는 카테고리객체들을 모두 li 형식으로 변환해서
    for(let i=0; i<categoryArray.length; i++){
        html+=`<li onclick="printCategory(${categoryArray[i].cno})" class="${categoryArray[i].cno==selectCno ? 'selectMenu' : ''}">
                ${categoryArray[i].cname}</li>`
    }

    //3. 카테고리출력
    categoryUl.innerHTML=html;

    //4. 제품출력
    printProduct(selectCno);    //카테고리에서 선택된 카테고리번호를 제품출력에 매개변수로 전달
    //제품 출력 시 모든제품 출력이 아니고 선택된 카테고리번호와 일치하는 제품만 출력되어야함
    console.log(categoryArray.cno);
}//f end

//함수2 제품 출력하는 함수 (실행조건 : 카테고리 출력되었을때)
function printProduct(selectCno){    //함수선언  //전체출력X //내가 선택한 카테고리[부]의 제품[자]만
    console.log('printProduct()실행');

    //1. 어디에
    const productBox=document.querySelector("#productBox");

    //2. 무엇을
    let html=``;

    //자식요소에 내가 선택한 카테고리번호와 일치한 제품을 찾아서 div화
    for(let i=0; i<productArray.length; i++){
        //만약 i번째 제품의 co와 내가 선택한 cno가 같으면
        //천단위 쉼표 함수 : .toLocaleString()
        if(productArray[i].cno==selectCno){
            html+=`<!-- 제품1개 -->
            <div onclick="setCart(${productArray[i].pno})" class="product">
                <img src="img/${productArray[i].pimg}" />
                <div class="pinfo">
                    <div class="pname">${productArray[i].pname}</div>
                    <div class="pprice">${productArray[i].pprice.toLocaleString()}원</div>
                </div>                    
            </div>
            <!-- 제품1개 end-->`
        }
    }
    productBox.innerHTML=html;
}

let cartArray=[ ];  //카트목록

//함수3 제품 선택 시 장바구니에 담아주는 함수.(실행조건 : 제품을 클릭했을때)
function setCart(selectPno){//함수 printCategory 선언
    console.log('setCart() 실행'+ selectPno)   
    //1. 입력
    //2. 처리
    cartArray.push(selectPno);  console.log('selectPno' + selectPno);
    //3. 출력
    printCart();
        
}

//함수4 카트에서 x버튼을클릭 시 카트에서 삭제
function cartDelete(deleteIndex){   //cartDelete() start
    //1. 입력 -> 매개변수로 선택된 삭제 인덱스
    //2. 처리 -> 배열에서 해당 인덱스 삭제
    cartArray.splice(deleteIndex,1);
    //3. 출력 -> 카트상태 새로고침
    printCart();
}//f end



//함수5 카트의 현재상태를 출력하는 함수(실행조건 : 1. 제품을 선택했을때  2. 제품을 삭제했을때)
function printCart(){
    //1. 어디에
    const cartBottom=document.querySelector("#cartBottom");

    //2. 무엇을
    let html=``;
    let totalPrice=0;   //총 장바구니 금액
    let cartCount=cartArray.length; //카트 내 pno 개수

     //카트 목록에 존재하는 제품의 정보를 찾기
            //카트 목록에 있는 모든 요소를 하나로 출력
            for(let i=cartArray.length-1; i>=0; i--){  //0번인덱스부터 마지막 인덱스까지 하나씩 출력
                //해당 i번째 pno 제품의 정보 찾기
                for(let j=0; j<productArray.length; j++){  //0번인덱스부터 마지막 인덱스까지 하나씩 출력
                    if(cartArray[i]==productArray[j].pno){
                        html+=`<!--카트에 담긴 제품 1개 -->
                                <div class="citem">
                                    <div>${productArray[j].pname}</div>
                                    <div>${productArray[j].pprice.toLocaleString()}원</div>
                                    <span onclick="cartDelete(${i})">X</span>
                                </div>
                                <!--카트에 담긴 제품 1개 end --> `;
                        //총 가격 누적
                        totalPrice+=productArray[j].pprice  //j 번째의 제품 가격을 총합계에 더하기.
                    }//if end
                }//for end
            }//for end
        //3. 출력
        cartBottom.innerHTML=html;
        //개수, 총가격 출력
        document.querySelector("#count").innerHTML=cartCount;
        document.querySelector("#totl").innerHTML=totalPrice.toLocaleString()+"원";
}//f end




//========================과제===========================

//함수6 카테고리 추가
function CategoryUpload(){//CategoryUpload 함수 실행
    console.log('CategoryUpload() 실행');
    
    //입력 값 불러오기
    let inputCnum=Number(document.querySelector("#inputCnum").value);
    let inputCname=document.querySelector("#inputCname").value;

    if(isNaN(inputCnum)){
        alert("카테고리 고유번호를 숫자로 입력 해 주십시오.")
        return;
    }

    //배열에 입력받은 카테고리 추가
    categoryArray.push({cno : inputCnum, cname : inputCname});

    //카테고리 출력
    printCategory(1);
    addCategory()

    document.querySelector("#inputCnum").value=``;
    document.querySelector("#inputCname").value=``;
    
}//f end


//========================== 제품등록 ========================
//**제품등록 > 카테고리 목록 추가
addCategory('selectCategory');  //카테고리 출력함수 실행.

//카테고리 출력함수
function addCategory(outputId){//addCategory() 실행(카테고리 출력함수)
    console.log("addCategory() 실행")

    let selectCategory=document.querySelector(`#${outputId}`);

    let html=`<option value="" selected disabled hidden>카테고리 선택</option>`;

    for(let i=0; i<categoryArray.length; i++){
        html+=`<option>${categoryArray[i].cname}</option>`
    }

    selectCategory.innerHTML=html;
}//f end

//카테고리 클릭 시 카테고리 번호 출력 함수
function printCno(selectValue, outputId){//printCno() 실행
    console.log('printCno() 실행');
    let selectCategory=document.querySelector(`#${selectValue}`).value;

    console.log('selectCategory'+selectValue);

    for(let i=0; i<categoryArray.length; i++){
        if(selectCategory==categoryArray[i].cname){
            //선택된 카테고리명과 카테고리 배열.cname이 일치하면,
            //카테고리 고유번호를 옆에 출력
            document.querySelector(`#${outputId}`).value=categoryArray[i].cno;
        }
    }
}//f end

//제품 등록/출력 함수
function inputProduct(){//inputProduct 함수 실행
    console.log('inputProduct() 실행')

    let selectCno=document.querySelector("#selectCno").value;
    let inputPname=document.querySelector("#inputPname").value;
    let inputPimg=document.querySelector("#inputPimg").value;
    let inputPrice=document.querySelector("#inputPrice").value;
    let inputPno=document.querySelector('#inputPno').value;
    

    //이미지 경로 가공(절대경로 : 오류발생, 상대경로로 바꾸기)
    let newImg=inputPimg.split('\\')[2];
    console.log(inputPimg.split('\\')[2]);


    //제품 등록
    productArray.push({
        pno : inputPno, 
        pname : inputPname, 
        pprice :inputPrice, 
        pimg : newImg, 
        cno :  selectCno
    })
    console.log(productArray);

    //등록하면 ui에 바로 출력
    printCategory(selectCno);

    //input value값 초기화
    addCategory();
    document.querySelector('#selectCno').value=``;
    document.querySelector("#inputPname").value=``;
    document.querySelector("#inputPimg").value=``;
    document.querySelector("#inputPrice").value=``;
    document.querySelector('#inputPno').value=``;
    
    //제품 등록 end

}//f end
//============================= 제품등록 end =============================

//주문목록 받아서 정보/상태 출력하기


//==========과제end==========================================================

//=====과제랑 다르게 제품목록 수정/ 삭제 기능====

addCategory('listCategory');

//제품리스트 출력
function printPlist(){//제품리스트출력함수 실행
    console.log('printPlist() 실행')
    const plist=document.querySelector("#plist");
    let listCno=document.querySelector('#listCno').value;
    console.log(listCno);

    let html=``;

    for(let i=0; i<productArray.length; i++){
        if(productArray[i].cno==listCno){
            html+=`<!-- 제품 1개 -->
                <tr>
                    <td>${productArray[i].pno}</td>
                    <td>${productArray[i].pname}</td>
                    <td>${productArray[i].pprice}</td>
                    <td>${productArray[i].pimg}</td>
                    <td><input onclick="" type="button" value="수정"></td>
                    <td><input onclick="deletePlist(${productArray[i].pno})" type="button" value="삭제"></td>
                </tr>
                <!-- 제품 1개 end -->`;
        }
    }

    plist.innerHTML=html;
}   //f end

//제품 삭제 
function deletePlist(deletePno){//제품 삭제 함수
    console.log('deletePlist() 실행')
    let lastCnum=0;
    
    for(let i=0; i<productArray.length; i++){
        if(productArray[i].pno==deletePno){
            lastCnum=productArray[i].cno;
            productArray.splice(i,1);
        }
    }

    //ui에서도 삭제
    printCategory(lastCnum);
    
    //제품리스트 출력
    printPlist();
}//f end

//===================end=======================