import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  newTodo = '';
  todos: string[] = [];

  ngOnInit() {
    // Load To-Do items from local storage on component initialization
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    }
  }

  addTodo() {
    if (this.newTodo.length >= 4 && this.newTodo.length <= 200 && /^[a-zA-Z0-9\s]*$/.test(this.newTodo)) {
      this.todos.push(this.newTodo);
      this.newTodo = '';
      this.saveToLocalStorage();
    } else {
      alert('Please enter a valid To-Do item (4-200 characters, no special characters).');
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
    this.saveToLocalStorage();
  }

  validateInput(event: KeyboardEvent) {
    const input = event.key;
    const isSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(input);
    if (isSpecialCharacter) {
      event.preventDefault();
    }
  }

  private saveToLocalStorage() {
    // Save To-Do items to local storage
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  




}
