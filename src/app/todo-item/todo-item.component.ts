import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faListCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../services/api.service';
import { Todo } from '../models/todo.model';
import { Status } from '../enum/status.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'todolist-todo-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() isCompletable = true;
  @Input() itemId = 0;

  http = inject(ApiService);
  router = inject(Router);

  faListCheck = faListCheck;
  faTrash = faTrash;

  showTrash = false;

  get getStatus() {
    return Status;
  }

  completeItem(itemId: number) {
    this.http.getTodo(itemId).subscribe((todoItem: Todo) => {
      todoItem.status = this.getStatus.COMPLETED;
      this.http.updateTodo(todoItem).subscribe(() => {
        location.reload();
      });
    });
  }

  deleteItem(itemId: number) {
    this.http.getTodo(itemId).subscribe((todoItem: Todo) => {
      todoItem.status = this.getStatus.DISCARDED;
      this.http.updateTodo(todoItem).subscribe(() => {
        location.reload();
      });
    });
  }
}
