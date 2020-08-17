import { reducer } from './state/event.reducer';
import { EventEffects } from './state/event.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from './../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component';
import { EventCardComponent } from './event-list/event-card/event-card.component';
import { AddEventComponent } from './add-event/add-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
	{ path: '', component: EventListComponent },
	{ path: 'add', component: AddEventComponent },
];

@NgModule({
	declarations: [EventListComponent, EventCardComponent, AddEventComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		FlexLayoutModule,
		MaterialModule,
		StoreModule.forFeature('events', reducer),
		EffectsModule.forFeature([EventEffects]),
		FormsModule,
		ReactiveFormsModule,
	],
})
export class EventModule {}
