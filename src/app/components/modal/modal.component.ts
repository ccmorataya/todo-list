import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
    title: new FormControl(''),
    description: new FormControl(''),
  });

  toggleModal() {
    this.close.emit();
    this.showModal = !this.showModal;
  }

  addItem() {
    this.close.emit();
    this.showModal = false;
  }
}
