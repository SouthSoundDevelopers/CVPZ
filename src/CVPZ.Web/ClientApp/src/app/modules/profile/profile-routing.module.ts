import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountProfileComponent } from './components/account-profile/account-profile.component';

const routes: Routes = [
  {
    path: 'profile',
    children: [
      {
        path: 'account',
        component: AccountProfileComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
