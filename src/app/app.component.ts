import { Component } from '@angular/core';
import { UserStore } from './user.store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private userStore: UserStore) {

  }

  userNext() {
    this.userStore.next(new Date().toISOString());
  }

}
