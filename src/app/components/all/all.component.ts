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
    });
  }

  get getStatus() {
    return Status;
  }

  /*   createTodo() {
    if (this.todoForm.valid) {
      const newTodo: Todo = this.todoForm.value;
      this.datosService.createTodo(newTodo).subscribe(todo => {
        this.todos.push(todo);
        this.todoForm.reset();
      });
    }
  }

  updateTodo() {
    if (this.todoForm.valid && this.editingId !== null) {
      const updatedTodo: Todo = { ...this.todoForm.value, id: this.editingId };
      this.datosService.updateTodo(updatedTodo).subscribe(todo => {
        const index = this.todos.findIndex(t => t.id === todo.id);
        this.todos[index] = todo;
        this.editingId = null;
        this.todoForm.reset();
      });
    }
  }

  deleteTodo(id: number) {
    if (confirm('¿Estás seguro de eliminar este elemento?')) {
      this.datosService.deleteTodo(id).subscribe(() => {
        this.todos = this.todos.filter(todo => todo.id !== id);
      });
    }
  }

  editTodo(todo: Todo) {
    this.editingId = todo.id;
    this.todoForm.patchValue(todo);
  } */

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.close.emit();
  }
}
