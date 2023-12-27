document.addEventListener('DOMContentLoaded',function(){

    //1. 문서객체 가져오기
    const input=document.querySelector('#todo');
    const todoList=document.querySelector('#todo-list');
    const addButton=document.querySelector('#add-button');

    //2. 문서객체 제거용 변수 생성
    let keyCount=0;

    //3. 할일 추가 함수
    const addTodo=function(){
        if(input.value.trim()==''){ //trim : 공백제거함수   //공백 제거 후 빈칸이면 알람 생성
                alert('할일을 입력해주세요');
                return;
        }
        

        const item=document.createElement('div');   //div 생성
        const checkbox=document.createElement('input'); //input 생성
        const text=document.createElement('span');  //span 생성
        const button=document.createElement('button');  //button 생성

        const key=keyCount; 
        keyCount+=1;

        item.setAttribute('data-key', key)  //setAttribute : 속성 추가(=> <div data-key="key"> )
        item.appendChild(checkbox)      //<div>안에 <input> 생성
        item.appendChild(text)      //<div>안에 <span> 생성
        item.appendChild(button)      //<div>안에 <button> 생성
        todoList.appendChild(item)      //<div>안에 <div> 생성

        checkbox.type='checkbox';   //checkbox(<input type="checkbox">)
        checkbox.addEventListener('change',function(event){     //체크박스가 체크되면 라인을그어주는 함수가 실행된다.
            item.style.textDecoration=event.target.checked ? 'line-through' : '';
        });//e end

        text.textContent=input.value;   //#todo의 value를 text에 넣기

        button.textContent=`제거하기`;  //버튼의 값을 제거하기로 설정
        button.addEventListener('click',function(){ //버튼 클릭 시 실행 함수(항목 제거)
            removeTodo(key);
        });//e end

        input.value=''; //#todo 초기화

    }//f end

    const removeTodo=function(key){ //항목제거 함수
        const item=document.querySelector(`[data-key="${key}"]`);
        todoList.removeChild(item);
    }//f end

    addButton.addEventListener('click',addTodo);
    input.addEventListener('keyup',function(event){
        const ENTER=13;
        if(event.keyCode==ENTER){
            addTodo90;
        }
    })//e end

});//e end