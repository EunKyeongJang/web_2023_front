list()
function list(){
const boardArray=JSON.parse(localStorage.getItem('boardArray'));
console.log(boardArray);

const tbody=document.querySelector("tbody");

let html=``;

if(boardArray==null){
    html=`<tr><td>등록된 내역이 없습니다.</td></tr>`
}
else{
    for(let i=0; i<boardArray.length; i++){
        html+=`<tr onclick=""><td>${i}</td>   <td>${boardArray[i].제목}</td>   <td>${boardArray[i].작성자}</td>  <td>${boardArray[i].조회수}</td></tr>`;
    }
console.log(html);
}

tbody.innerHTML=html;

}


