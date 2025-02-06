import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfile } from './interface/student.interface';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  base_url: string = 'http://localhost/relearn/'
  constructor(
    private _http: HttpClient
  ) { }

  login(data: any) {
    return this._http.post(`${this.base_url}student.php`, data)
  }

  get_student_data(): Observable<UserProfile> {
    return this._http.get<UserProfile>(`${this.base_url}student.php`)
  }
}
