import { Component } from '@angular/core';
import { HeaderComponent } from './header/Header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    TasksComponent,
    TaskComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)

  }

  onSelectUser(id: string) {
    // console.log("selected user with id " + id)
    this.selectedUserId = id
  }
}
