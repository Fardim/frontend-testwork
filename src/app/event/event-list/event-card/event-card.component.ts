import { Event } from './../../../_models/event';
import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-event-card',
	templateUrl: './event-card.component.html',
	styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent implements OnInit {
	@Input() event: Event = null;
	defaultImage = './../../../../assets/event.jpg';
	constructor() {}

	ngOnInit(): void {}
}
