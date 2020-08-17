import { Event } from './../_models/event';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class EventService {
	private eventsUrl = 'api/events';
	constructor(private http: HttpClient) {}

	getEvents() {
		return this.http.get<Event[]>(this.eventsUrl).pipe(catchError(this.handleError<Event[]>('getHeroes', [])));
	}

	createEvent(event: Event): Observable<Event> {
		const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
		// Product Id must be null for the Web API to assign an Id
		const newEvent = { ...event, id: null };
		return this.http
			.post<Event>(this.eventsUrl, newEvent, { headers })
			.pipe(
				tap((data) => console.log('createProduct: ' + JSON.stringify(data))),
				catchError(this.handleError)
			);
	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead

			// TODO: better job of transforming error for user consumption
			console.log(`${operation} failed: ${error.message}`);

			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}
}
