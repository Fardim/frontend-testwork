import { NotFoundComponent } from './shell/not-found/not-found.component';
import { ShellComponent } from './shell/shell/shell.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'events',
        loadChildren: () =>
          import('./event/event.module').then((m) => m.EventModule),
      },
      { path: '', redirectTo: 'events', pathMatch: 'full' },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
