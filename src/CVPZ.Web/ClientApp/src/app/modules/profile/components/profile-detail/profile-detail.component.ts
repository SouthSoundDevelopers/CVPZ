import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from '../../services/profile-data.service';
import { Profile } from '../../model/profile';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

  profile: Profile;

  constructor(private profileDataService: ProfileDataService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {

    this.profileDataService
      .getProfile()
      .subscribe(
        (resp) => this.profile = resp// ,
        // (err) => this.serviceError = err
      );
  }
}
