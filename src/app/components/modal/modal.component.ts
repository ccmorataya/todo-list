import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Todo } from '../../models/todo.model';
import { Status } from '../../enum/status.enum';

@Component({
  selector: 'todolist-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Output() close = new EventEmitter<void>();
  showModal = false;
  modalForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  http = inject(ApiService);

  get getStatus() {
    return Status;
  }

  toggleModal() {
    this.close.emit();
    this.showModal = !this.showModal;
  }

  addItem() {
    this.createTodo();
  }

  createTodo() {
    if (this.modalForm.valid) {
      const newTodo: Todo = {
        title: this.modalForm.value.title!,
        description: this.modalForm.value.description!,
        createdAt: String(new Date()),
        status: 0,
      };
      this.http.createTodo(newTodo).subscribe(() => {
        this.modalForm.reset();
        this.http.getTodos().subscribe(() => {
          location.reload();
        });
      });
    }
  }
}
