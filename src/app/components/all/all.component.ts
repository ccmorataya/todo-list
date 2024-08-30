import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCirclePlus, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { MenuContainerComponent } from '../menu/menu-container/menu-container.component';

@Component({
  selector: 'todolist-all',
  standalone: true,
  imports: [FontAwesomeModule, MenuContainerComponent],
  templateUrl: './all.component.html',
  styleUrl: './all.component.scss',
})
export class AllComponent {
  faCirclePlus = faCirclePlus;
  faListCheck = faListCheck;
}
