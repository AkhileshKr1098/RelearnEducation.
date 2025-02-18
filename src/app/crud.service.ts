import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfile } from './interface/student.interface';
import { DayRes, GradeRes, SectionRes, Week, WeekInsertRes, WeekRes } from './interface/Question.interface';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  // base_url: string = 'http://localhost/relearn/' 
  base_url: string = 'https://educatorbox.com/Development/API/'
  constructor(
    private _http: HttpClient
  ) { }

  login(data: any) {
    return this._http.post(`${this.base_url}student.php`, data)
  }

  get_student_data(): Observable<UserProfile> {
    return this._http.get<UserProfile>(`${this.base_url}student.php`)
  }

  Student_registation(data: any): Observable<UserProfile> {
    return this._http.post<UserProfile>(`${this.base_url}student_registation.php`, data)
  }

  Week_insert(data: any): Observable<WeekInsertRes> {
    return this._http.post<WeekInsertRes>(`${this.base_url}week.php`, data)
  }

  Week_update(data: any): Observable<WeekInsertRes> {
    return this._http.put<WeekInsertRes>(`${this.base_url}week.php`, data)
  }

  Week_delete(idn: number): Observable<any> {
    console.log(idn);

    return this._http.delete<any>(`${this.base_url}week.php`, {
      body: { id: idn },
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    })
  }

  getWeek(): Observable<WeekRes> {
    return this._http.get<WeekRes>(`${this.base_url}week.php`)
  }

  getDays(): Observable<DayRes> {
    return this._http.get<DayRes>(`${this.base_url}days.php`)
  }

  InserDay(data: any): Observable<any> {
    return this._http.post<any>(`${this.base_url}days.php`, data)
  }
  UpdateDay(data: any): Observable<any> {
    return this._http.put<any>(`${this.base_url}days.php`, data)
  }

  Day_delete(idn: number): Observable<any> {
    console.log(idn);

    return this._http.delete<any>(`${this.base_url}days.php`, {
      body: { id: idn },
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    })
  }

  // grade_tbl.php

  getClass(): Observable<GradeRes> {
    return this._http.get<GradeRes>(`${this.base_url}classes.php
`)
  }

  classAdd(data: any): Observable<any> {
    return this._http.post<any>(`${this.base_url}classes.php`, data)
  }
  classUpdate(data: any): Observable<any> {
    return this._http.put<any>(`${this.base_url}classes.php`, data)
  }

  classDeleted(idn: number): Observable<any> {
    console.log(idn);

    return this._http.delete<any>(`${this.base_url}classes.php`, {
      body: { id: idn },
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    })
  }

  // section.php

  getSection(): Observable<SectionRes> {
    return this._http.get<SectionRes>(`${this.base_url}section.php`)
  }

  SectionInsert(data: any): Observable<any> {
    return this._http.post<any>(`${this.base_url}section.php`, data)
  }
  SectionUpdate(data: any): Observable<any> {
    return this._http.put<any>(`${this.base_url}section.php`, data)
  }

  SectionDelete(idn: number): Observable<any> {
    console.log(idn);

    return this._http.delete<any>(`${this.base_url}section.php`, {
      body: { id: idn },
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    })
  }





}
