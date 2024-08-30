import { Component, inject } from '@angular/core';
import { MenuContainerComponent } from '../menu/menu-container/menu-container.component';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../../todo-item/todo-item.component';
import { Status } from '../../enum/status.enum';
import { Todo } from '../../models/todo.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'todolist-completed',
  standalone: true,
  imports: [CommonModule, MenuContainerComponent, TodoItemComponent],
  templateUrl: './completed.component.html',
})
export class CompletedComponent {
  api = inject(ApiService);
  todos: Todo[] = [];

  ngOnInit(): void {
    this.api.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  get getStatus() {
    return Status;
  }
}
