import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-task-list-component',
  imports: [FormsModule],
  templateUrl: './task-list-component.component.html',
  styleUrl: './task-list-component.component.css'
})
export class TaskListComponentComponent{

items: string[] = [];
newItem: string = '';

addItem() {
  if (this.newItem.trim() !== '') {
    this.items.push(this.newItem);
    this.newItem = '';
  }
}
}
