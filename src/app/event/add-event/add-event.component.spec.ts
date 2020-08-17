import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './../../material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AddEventComponent } from './add-event.component';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('AddEventComponent', () => {
	let component: AddEventComponent;
	let fixture: ComponentFixture<AddEventComponent>;
	let formBuilder: FormBuilder;
	const initialState = { events: [], errro: '' };
	let store: MockStore;
	let router: Router;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AddEventComponent],
			imports: [RouterTestingModule.withRoutes([]), FormsModule, ReactiveFormsModule, MaterialModule, BrowserAnimationsModule],
			providers: [FormBuilder, provideMockStore({ initialState })],
		}).compileComponents();
		router = TestBed.get(Router);
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AddEventComponent);
		component = fixture.componentInstance;
		formBuilder = TestBed.get(FormBuilder);
		component.eventFormGroup = formBuilder.group({
			eventName: ['', [Validators.required]],
			address: ['', [Validators.required]],
			date: ['', [Validators.required]],
			picture: ['', []],
		});
		store = TestBed.inject(MockStore);
		fixture.detectChanges();
	});

	it('should create a form with 4 controls', () => {
		expect(component).toBeTruthy();
		expect(component.eventFormGroup.contains('eventName')).toBeTruthy();
		expect(component.eventFormGroup.contains('address')).toBeTruthy();
		expect(component.eventFormGroup.contains('date')).toBeTruthy();
		expect(component.eventFormGroup.contains('picture')).toBeTruthy();
	});

	it('should make the eventName control required', () => {
		let control = component.eventName;
		control.setValue('');
		expect(control.valid).toBeFalsy();
	});

	it('should redirect to events page after save', () => {
		let spy = spyOn(router, 'navigate');

		component.saveEvent();

		expect(spy).toHaveBeenCalledWith(['events']);
	});
});
