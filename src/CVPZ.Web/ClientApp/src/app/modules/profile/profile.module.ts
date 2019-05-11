import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileDetailComponent } from './components/profile-detail/profile-detail.component';
import { ProfileDataService } from './services/profile-data.service';

@NgModule({
  declarations: [
    ProfileDetailComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  providers: [
    ProfileDataService
  ]
})
export class ProfileModule { }
