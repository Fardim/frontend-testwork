import { Event } from './../../_models/event';
import { Action } from '@ngrx/store';

export enum EventActionTypes {
	Load = '[Event] Load',
	LoadSuccess = '[Event] Load Success',
	LoadFail = '[Event] Load Fail',
	AddEvent = '[Event] Add Event',
	AddEventSuccess = '[Event] Add Event Success',
	AddEventFail = '[Event] Add Event Fail',
}

export class Load implements Action {
	readonly type = EventActionTypes.Load;
	constructor() {}
}
export class LoadSuccess implements Action {
	readonly type = EventActionTypes.LoadSuccess;
	constructor(public payload: Event[]) {}
}
export class LoadFail implements Action {
	readonly type = EventActionTypes.LoadFail;
	constructor(public payload: string) {}
}

export class AddEvent implements Action {
	readonly type = EventActionTypes.AddEvent;
	constructor(public payload: Event) {}
}
export class AddEventSuccess implements Action {
	readonly type = EventActionTypes.AddEventSuccess;
	constructor(public payload: Event) {}
}
export class AddEventFail implements Action {
	readonly type = EventActionTypes.AddEventFail;
	constructor(public payload: string) {}
}

export type EventActions = Load | LoadSuccess | LoadFail | AddEvent | AddEventSuccess | AddEventFail;
