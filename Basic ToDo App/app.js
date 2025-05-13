const input = document.querySelector(".input");
const addBtn = document.querySelector(".addBtn");
const list = document.querySelector(".list");

addBtn.addEventListener("click", () => {
  if (input.value == "") {
    input.setAttribute("placeholder", "Kindly Add New Todo");
  } else {
    const todoList = document.createElement("LI");
    todoList.innerHTML = `<div class="todo">
                            <span>${input.value}</span>
                            <div>
                                <i class=" px-2 fa-solid fa-pen-to-square edit" style="color: #646464;"></i>
                                <button class="dltBtn red">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </div>           
                        </div>`;
    todoList.classList.add("listItem");
    list.appendChild(todoList);
    input.value = "";
    input.setAttribute("placeholder", "Enter Another New Todo");
  }
});
list.addEventListener("click", (e) => {
  const targetElement = e.target;
  const listItem = targetElement.closest(".listItem");
  const todo = listItem.querySelector(".todo");
  if (targetElement && targetElement.classList.contains("dltBtn")) {
    listItem.remove();
  } else if (targetElement && targetElement.classList.contains("edit")) {
    const editSpan = listItem.querySelector("span");
    const inputEdit = document.createElement("input");
    inputEdit.classList.add("inputEdit");
    inputEdit.type = "text";
    inputEdit.value = editSpan.textContent;
    todo.replaceChild(inputEdit, editSpan);
    targetElement.classList.replace("edit", "save");
  } else if (targetElement && targetElement.classList.contains("save")) {
    const inputEdit = listItem.querySelector(".inputEdit");
    const span = document.createElement("span");
    span.textContent = inputEdit.value;
    todo.replaceChild(span, inputEdit);
    targetElement.classList.replace("save", "edit");
  }
});
