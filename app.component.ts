import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from "./header/header.component";
import { ClickCounterComponent } from "./click-counter/click-counter.component";
import { TaskListComponentComponent } from "./task-list-component/task-list-component.component";
@Component({
  selector: 'app-root',
  imports: [FooterComponent, HeaderComponent, ClickCounterComponent, TaskListComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
