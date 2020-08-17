import { Event } from './../../_models/event';
import { EventActions, EventActionTypes } from './event.action';

export interface EventState {
	events: Event[];
	error: string;
}

const initialState: EventState = {
	events: [],
	error: '',
};

export function reducer(state = initialState, action: EventActions): EventState {
	switch (action.type) {
		case EventActionTypes.LoadSuccess:
			return {
				...state,
				events: action.payload,
				error: '',
			};
		case EventActionTypes.LoadFail:
			return {
				...state,
				events: [],
				error: action.payload,
			};
		case EventActionTypes.AddEventSuccess:
			const addedProducts = [...state.events, action.payload];
			return {
				...state,
				events: addedProducts,
				error: '',
			};
		case EventActionTypes.AddEventFail:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
}
