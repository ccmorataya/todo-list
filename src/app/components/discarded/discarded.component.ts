import { Component } from '@angular/core';
import { MenuContainerComponent } from '../menu/menu-container/menu-container.component';

@Component({
  selector: 'todolist-discarded',
  standalone: true,
  imports: [MenuContainerComponent],
  templateUrl: './discarded.component.html',
  styleUrl: './discarded.component.scss',
})
export class DiscardedComponent {}
