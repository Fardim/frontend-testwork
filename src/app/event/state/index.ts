import * as fromRoot from './../../state/app.state';
import { EventState } from './event.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
	events: EventState;
}

const getEventFeatureState = createFeatureSelector<EventState>('events');

export const getEvents = createSelector(getEventFeatureState, (state) => state.events);
export const getError = createSelector(getEventFeatureState, (state) => state.error);
