import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faListCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

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

  faListCheck = faListCheck;
  faTrash = faTrash;

  showTrash = false;
}
