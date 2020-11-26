const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const inputBox = document.getElementById('input-box')
const todo_Obj = {
    uncheckedItemCount:  0,// keeps track of all unchecked todo items
    totalItemCount: 0, //keeps a count of all todo items
    pendingArray : [], //keeps track of all todo items entered
    compare : function(value){ //bool function used to compare whether input text is a duplicate        
    },   
        
    // }    
};

function newTodo() 
{
    console.log(list);
    console.log(itemCountSpan);
    console.log(uncheckedCountSpan);
    console.log(inputBox);
    console.log(todo_Obj);
    
  
}

function deleteTodo()
{
    
}

