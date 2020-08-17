import { Event } from './../../_models/event';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListComponent } from './event-list.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('EventListComponent', () => {
	let component: EventListComponent;
	let fixture: ComponentFixture<EventListComponent>;
	const initialState = { events: [], errro: '' };
	let store: MockStore;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [EventListComponent],
			providers: [provideMockStore({ initialState })],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EventListComponent);
		component = fixture.componentInstance;
		store = TestBed.inject(MockStore);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
	// it('should fetch events from api', () => {
	// 	let events: Event[];
	// 	component.ngOnInit();
	// 	component.events$.subscribe((resp) => (events = resp));
	// 	fixture.detectChanges();
	// 	expect(events.length).toBeGreaterThan(1);
	// });
});
