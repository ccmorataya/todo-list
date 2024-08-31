import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { MenuContainerComponent } from '../menu/menu-container/menu-container.component';
import { TodoItemComponent } from '../../todo-item/todo-item.component';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Todo } from '../../models/todo.model';
import { HttpClientModule } from '@angular/common/http';
import { Status } from '../../enum/status.enum';

@Component({
  selector: 'todolist-all',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    MenuContainerComponent,
    MenuContainerComponent,
    TodoItemComponent,
    ModalComponent,
    HttpClientModule,
  ],
  templateUrl: './all.component.html',
})
export class AllComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  faCirclePlus = faCirclePlus;
  showModal = false;
  api = inject(ApiService);
  todos: Todo[] = [];

  ngOnInit(): void {
    this.api.getTodos().subscribe((todos) => {
      this.todos = todos;
      console.log(todos);
    });
  }

  get getStatus() {
    return Status;
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.close.emit();
  }
}
