import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { MenuContainerComponent } from '../menu/menu-container/menu-container.component';
import { TodoItemComponent } from '../../todo-item/todo-item.component';

@Component({
  selector: 'todolist-all',
  standalone: true,
  imports: [
    FontAwesomeModule,
    MenuContainerComponent,
    MenuContainerComponent,
    TodoItemComponent,
  ],
  templateUrl: './all.component.html',
})
export class AllComponent {
  faCirclePlus = faCirclePlus;
}
