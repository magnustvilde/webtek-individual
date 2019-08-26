
var list = document.getElementById("list");
var task = document.getElementById("task");

var tasks = Array();
var counter = 0;
var done = 0;

var output = document.getElementById("outputResult");

function inc(number) {
   number+=1;
}

function addTask() {
   counter+=1;
   var next = document.createElement("li");

   var checkBox = document.createElement("input");
   checkBox.type = "checkBox";

   var label = document.createElement("label");
   label.innerText = task.value;
   label.style.class = "strikeThrough";

   checkBox.addEventListener("click", handleFinishedTask);

   next.appendChild(checkBox);
   next.appendChild(label);

   list.insertBefore(next, list.firstChild);
   tasks.push(Object(task.value, counter));

   next.id = counter;

   console.log("Here comes the ARRAYYYY");
   for (element in tasks) {
      console.log(tasks[element]);
   }

   task.value = "";
   handleAddedTask();
}

function handleFinishedTask() {
   done = document.querySelectorAll('input[type="checkbox"]:checked').length;
   output.innerText = done + "/" + counter + " completed";
}

function handleAddedTask() {
   output.innerText = done + "/" + counter + " completed";
   console.log(counter);
}
