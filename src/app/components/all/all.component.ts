import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { MenuContainerComponent } from '../menu/menu-container/menu-container.component';
import { TodoItemComponent } from '../../todo-item/todo-item.component';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';

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
  ],
  templateUrl: './all.component.html',
})
export class AllComponent {
  @Output() close = new EventEmitter<void>();
  faCirclePlus = faCirclePlus;

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.close.emit();
  }
}
