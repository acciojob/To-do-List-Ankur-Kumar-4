document.getElementById("addTodoBtn").addEventListener("click",()=>{
	let value = document.getElementById("newTodoInput").value;
	let addlist = document.getElementById("todoList");
	let list = document.createElement("li");
	list.innerHTML=value;
	addlist.appendChild(list);
});

