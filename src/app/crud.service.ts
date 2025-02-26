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

  getClass(): Observable<any> {
    return this._http.get<any>(`${this.base_url}classes.php
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


  getUnit(): Observable<any> {
    return this._http.get<any>(`${this.base_url}unit_tbl.php`)
  }


  getUnitByClass(class_id: string): Observable<any> {
    return this._http.get<any>(`${this.base_url}unit_tbl.php?class_id=${class_id}`);
  }


  addUnit(data: any): Observable<any> {
    return this._http.post<any>(`${this.base_url}unit_tbl.php`, data)
  }
  unitUpdate(data: any): Observable<any> {
    return this._http.put<any>(`${this.base_url}unit_tbl.php`, data)
  }

  unitDeleted(idn: number): Observable<any> {
    console.log(idn);

    return this._http.delete<any>(`${this.base_url}unit_tbl.php`, {
      body: { id: idn },
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    })
  }


  getTopics(): Observable<any> {
    return this._http.get<any>(`${this.base_url}topics.php`)
  }

  getTopicsByunit(unit: string): Observable<any> {
    return this._http.get<any>(`${this.base_url}topics.php?class_id=${unit}`);
  }

  addTopics(data: any): Observable<any> {
    return this._http.post<any>(`${this.base_url}topics.php`, data)
  }
  TopicsUpdate(data: any): Observable<any> {
    return this._http.put<any>(`${this.base_url}topics.php`, data)
  }

  TopicsDelted(idn: number): Observable<any> {
    console.log(idn);

    return this._http.delete<any>(`${this.base_url}topics.php`, {
      body: { id: idn },
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    })
  }

  // for sub topics 

  getSubTopics(): Observable<any> {
    return this._http.get<any>(`${this.base_url}sub_topics.php`)
  }

  addSubTopics(data: any): Observable<any> {
    return this._http.post<any>(`${this.base_url}sub_topics.php`, data)
  }
  SubTopicsUpdate(data: any): Observable<any> {
    return this._http.put<any>(`${this.base_url}sub_topics.php`, data)
  }

  SubTopicsDelted(idn: number): Observable<any> {
    console.log(idn);

    return this._http.delete<any>(`${this.base_url}sub_topics.php`, {
      body: { id: idn },
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    })
  }


  // for Question topics 

  getQuestion(): Observable<any> {
    return this._http.get<any>(`${this.base_url}question_mcq.php`)
  }

  addQuestion(data: any): Observable<any> {
    return this._http.post<any>(`${this.base_url}question_mcq.php`, data)
  }

  QuestionUpdate(data: any): Observable<any> {
    return this._http.put<any>(`${this.base_url}question_mcq.php`, data)
  }

  QuestionDeleted(idn: number): Observable<any> {
    console.log(idn);

    return this._http.delete<any>(`${this.base_url}question_mcq.php`, {
      body: { id: idn },
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    })
  }

}
