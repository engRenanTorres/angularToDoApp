import { Component } from '@angular/core';
import { faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-button-delete-all',
  templateUrl: './todo-button-delete-all.component.html',
  styleUrls: ['./todo-button-delete-all.component.scss']
})
export class TodoButtonDeleteAllComponent {
  public faX = faX;
}
