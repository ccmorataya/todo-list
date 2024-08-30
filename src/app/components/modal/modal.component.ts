import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todolist-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Output() close = new EventEmitter<void>();
  showModal = false;

  toggleModal() {
    this.close.emit();
    this.showModal = !this.showModal;
  }

  addItem() {
    this.close.emit();
    this.showModal = false;
  }
}
