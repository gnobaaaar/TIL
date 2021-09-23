let todoInputHandler = function () {
  //todos 배열에 {todoNum:todoNum}은 todos.lenth:1, title:todoInput에 입력된 value 값 추가
  //loop를 돌면서 가장 큰 값을 max)todoNum+1 -> 번호 유지
  const result = todos.map((todo) => todo.todoNum);
  const maxTodoNum = Math.max.apply(...result); //전개 연산자
  const addtitle = document.getElementById("todoInput").value;
  let todo = { todoNum: maxTodoNum + 1, title: addtitle };
  todos.push(todo);
  //todoList rendering
  displayList();
};

let todoDeleteHandler = function (todoNum) {
  //todos 배열에서 todoNum에 해당하는 데이터 삭제
  const index = todos.findIndex((todo) => todo.todoNum == todoNum);
  todos.splice(index, 1);
  console.log(todos);
  //todoList rendering : displayList();
  displayList();
};

let todoClear = function () {
  //todos 배열 empty
  //todoList rendering
  todos = [];
  displayList();
  //공백문자로 다 지워라
};

function displayList() {
  const todoList = document.getElementById("todoList");
  let dataList = "";
  todos.forEach((todo) => {
    dataList += `
    <li class="shadow" >
        <i  aria-hidden="true" class="checkBtn fa fa-check"></i>${todo.title}
        <span type="button" class="removeBtn" onclick="todoDeleteHandler(${todo.todoNum})">
            <i aria-hidden="true" class="fa fa-trash-o"></i>
        </span>
    </li>`;
  });
  todoList.innerHTML = dataList;
}
