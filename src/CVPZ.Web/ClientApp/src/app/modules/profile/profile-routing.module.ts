import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileDetailComponent } from './components/profile-detail/profile-detail.component';

const routes: Routes = [
    {
      path: '', //Default route
      component: ProfileDetailComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }