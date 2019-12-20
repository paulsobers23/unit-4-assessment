function ToDoList(list){
    this.list = [];
}

function Tasks(list){
    ToDoList.call(this,list);
}
Tasks.prototype.addTask = function(task){
    this.list.push(task);
    return 'task successfully added'
}

Tasks.prototype.removeTask = function(task){
    this.list.splice(this.list.indexOf(task), 1);
    return 'Task removed'
}

let paulList = new Tasks()