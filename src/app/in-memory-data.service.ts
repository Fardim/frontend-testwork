import { Event } from './_models/event';
import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

@Injectable({
	providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
	constructor() {}
	createDb() {
		const events: Event[] = [
			{
				id: 1,
				eventName: 'NY Concert',
				address: 'NY, USA',
				date: '12-10-2020',
				picture: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
			},
			{
				id: 2,
				eventName: 'Dhaka Concert',
				address: 'Dhaka, Bangladesh',
				date: '06-11-2020',
				picture: 'https://total-event.com/wp-content/uploads/2018/01/event-planning-microsoft-ignite.jpg',
			},
			{
				id: 3,
				eventName: 'California Concert',
				address: 'California, USA',
				date: '12-12-2020',
				picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyZItU0TfTpE3Fx8uAvTKDU7oKiLsITdts0A&usqp=CAU',
			},
		];
		return { events };
	}
}
