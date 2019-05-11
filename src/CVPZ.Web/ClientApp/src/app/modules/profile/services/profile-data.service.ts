import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, finalize } from 'rxjs/operators';
import { Profile } from '../model/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  constructor(
    protected http: HttpClient,
  ) { }

  getProfile(): Observable<Profile> {

    const requestUrl = './api/profile';

    console.log(`Loading: ${requestUrl}`);

    const request: Observable<Profile>
        = this.http.get<Profile>(requestUrl);

    return request.pipe(
        tap(data => {
            console.log(data);
        }),
        // catchError(this.handleError),
        finalize(() => console.log(`Loaded: ${requestUrl}`))
    );
  }
}
