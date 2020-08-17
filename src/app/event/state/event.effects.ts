import { Event } from './../../_models/event';
import { EventService } from './../../_services/event.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromEventActions from './event.action';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class EventEffects {
	constructor(private actions$: Actions, private eventService: EventService) {}

	@Effect()
	loadEvents$ = this.actions$.pipe(
		ofType(fromEventActions.EventActionTypes.Load),
		mergeMap(() =>
			this.eventService.getEvents().pipe(
				map((events: Event[]) => new fromEventActions.LoadSuccess(events)),
				catchError((err) => of(new fromEventActions.LoadFail(err)))
			)
		)
	);

	@Effect()
	addEvent$ = this.actions$.pipe(
		ofType(fromEventActions.EventActionTypes.AddEvent),
		map((action: fromEventActions.AddEvent) => action.payload),
		mergeMap((event: Event) =>
			this.eventService.createEvent(event).pipe(
				map((addedEvent) => new fromEventActions.AddEventSuccess(addedEvent)),
				catchError((err) => of(new fromEventActions.AddEventFail(err)))
			)
		)
	);
}
