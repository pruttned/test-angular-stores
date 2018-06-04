import { Injectable, OnDestroy } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { tap, multicast, refCount, shareReplay, map } from 'rxjs/operators';
@Injectable()
export class UserStore implements OnDestroy {

  userSubj = new ReplaySubject<string>();

  user: Observable<string>;

  constructor() {
    console.log('UserStore1 constructor');

    this.user = this.userSubj
      .pipe(shareReplay(1))
      .pipe(tap(v => console.log('user tap ' + v)));
    // .pipe(multicast(() => new ReplaySubject(1)))
    // .pipe(refCount())
  }

  ngOnDestroy(): void {
    console.log('UserStore1 destroy');
  }

  next(v) {
    this.userSubj.next('user-' + v);
  }
}


@Injectable()
export class ReservationStore implements OnDestroy {

  res: Observable<string>;

  constructor(private userStore: UserStore) {
    console.log('ReservationStore constructor');

    this.res =
      this.userStore.user
        .pipe(map(u => 'res ' + u))
        .pipe(shareReplay(1))
        .pipe(tap(v => console.log('res tap ' + v)));
    // .pipe(multicast(() => new ReplaySubject(1)))
    // .pipe(refCount())
  }

  ngOnDestroy(): void {
    console.log('ReservationStore destroy');
  }
}
