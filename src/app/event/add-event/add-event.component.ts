import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _moment from 'moment';
import { take, takeUntil } from 'rxjs/operators';
import { Store, select, StoreModule } from '@ngrx/store';
import * as fromEvent from './../state/';
import * as eventActions from './../state/event.action';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
	selector: 'app-add-event',
	templateUrl: './add-event.component.html',
	styleUrls: ['./add-event.component.scss'],
})
export class AddEventComponent implements OnInit {
	eventFormGroup: FormGroup;
	defaultImage = './../../../assets/event.jpg';
	constructor(private fb: FormBuilder, private store: Store<fromEvent.State>, private router: Router) {}

	ngOnInit(): void {
		this.initForm();
	}

	initForm() {
		this.eventFormGroup = this.fb.group({
			eventName: ['', [Validators.required]],
			address: ['', [Validators.required]],
			date: [_moment().format(), [Validators.required]],
			picture: ['', []],
		});
	}

	saveEvent() {
		this.store.dispatch(new eventActions.AddEvent(this.eventFormGroup.value));
		this.router.navigate(['events']);
	}

	get eventName() {
		return this.eventFormGroup.get('eventName');
	}
	get address() {
		return this.eventFormGroup.get('address');
	}
	get date() {
		return this.eventFormGroup.get('date');
	}
	get picture() {
		return this.eventFormGroup.get('picture');
	}
}
