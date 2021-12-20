import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContractorListComponent} from './pages/contractor-list/contractor-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/contractors', pathMatch: 'full' },
  {
    path: 'contractors',
    component: ContractorListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
