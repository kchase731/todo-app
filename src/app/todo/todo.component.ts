import { Component, OnInit } from "@angular/core";
import { Todos } from "../todo/todo";
import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  todo: Todos = {
    todo: '',
    completed: false
  };

  todos: Todos[];

  constructor() {}

  ngOnInit() {
    {
      this.todos = [
        {
          todo: "test todo1",
          completed: true
        },
        {
          todo: "test todo2",
          completed: false
        }
      ];
    }
  }

  addTodo() {
    
    this.todos.push(this.todo);
    this.todo = {
      todo: '',
      completed: false
    };
    


  }
  removeToDo(i) {
    let index = this.todos.indexOf(i);
    this.todos.splice(index, 1);
    console.log(index)
  }

  status(todos){
    todos.completed = !this.todo.completed;
    // preventDefault();

  }

  // filter(e){
  //   this.todo.todo = !e.target.value;
  //   console.log(e.target.value);


  // }
}

