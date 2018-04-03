import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component'
import { UserEntryComponent } from './user-entry/user-entry.component'
import { WakeupComponent } from './wakeup/wakeup.component'

const appRoutes: Routes = [
  {
  path: '',
  component: StartComponent,
  },
  {
  path: 'user-entry',
  component: UserEntryComponent,
  },
  {
  path: 'wakeup',
  component: WakeupComponent,
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
