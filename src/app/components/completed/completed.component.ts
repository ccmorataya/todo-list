import { Component } from '@angular/core';
import { MenuContainerComponent } from '../menu/menu-container/menu-container.component';

@Component({
  selector: 'todolist-completed',
  standalone: true,
  imports: [MenuContainerComponent],
  templateUrl: './completed.component.html',
})
export class CompletedComponent {}
