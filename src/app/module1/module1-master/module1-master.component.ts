import { Component, OnInit } from '@angular/core';
import { UserStore, ReservationStore } from '../../user.store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-module1-master',
  templateUrl: './module1-master.component.html',
  styleUrls: ['./module1-master.component.css'],
  providers: [
    ReservationStore
  ]
})
export class Module1MasterComponent implements OnInit {

  resSubscription: Subscription;
  userSubscription: Subscription;
  constructor(private userStore: UserStore, private reservationStore: ReservationStore) {
    this.userSubscription = userStore.user.subscribe(v => console.log('module1 user ' + v));
    this.resSubscription = reservationStore.res.subscribe(v => console.log('module1 res ' + v));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
    this.resSubscription.unsubscribe();
  }

}
