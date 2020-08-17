import { Event } from './../../_models/event';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import * as fromEvent from './../state/';
import * as eventActions from './../state/event.action';
import { Subject, Observable } from 'rxjs';

@Component({
	selector: 'app-event-list',
	templateUrl: './event-list.component.html',
	styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit, OnDestroy {
	events$: Observable<Event[]>;
	private unsubscribeAll$: Subject<boolean> = new Subject<boolean>();
	constructor(private store: Store<fromEvent.State>) {}

	ngOnInit(): void {
		this.store.dispatch(new eventActions.Load());
		this.events$ = this.store.pipe(takeUntil(this.unsubscribeAll$), select(fromEvent.getEvents));
	}

	ngOnDestroy(): void {
		this.unsubscribeAll$.next(true);
		this.unsubscribeAll$.complete();
	}
}
