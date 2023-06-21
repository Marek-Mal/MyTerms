// api url's 

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  readonly APIUrl = "http://127.0.0.1:8000"
  readonly PhotoURL = "http://127.0.0.1:8000/TermsMedia/"
  

  constructor(private http:HttpClient) {}

  get_all():Observable<any>{
    return this.http.get<any>(this.APIUrl + '/get/');
  }

  get_sell_games():Observable<any>{
    return this.http.get<any>(this.APIUrl + '/get_sell_games/');
  }

  get_sell_acc():Observable<any>{
    return this.http.get<any>(this.APIUrl + '/get_sell_acc/');
  }

  get_coach():Observable<any>{
    return this.http.get<any>(this.APIUrl + '/get_coach/');
  }

  get_boost():Observable<any>{
    return this.http.get<any>(this.APIUrl + '/get_boost/');
  }

  get_sorted():Observable<any>{
    return this.http.get<any>(this.APIUrl + '/sort_terms/');
  }

  sort(): Observable<any> {
    return this.http.get(this.APIUrl + '/sort_terms/')
  }

  post_sell_games(val:any): Observable<any>{
    return this.http.post<any>(this.APIUrl + '/post_sell_games/', val)
  }

  post_sell_acc(val:any): Observable<any>{
    return this.http.post<any>(this.APIUrl + '/post_sell_acc/', val)
  }

  post_boosting(val:any): Observable<any>{
    return this.http.post<any>(this.APIUrl + '/post_boost/', val)
  }

  post_coach(val:any): Observable<any>{
    return this.http.post<any>(this.APIUrl + '/post_coach/', val)
  }

  update_sell_games(val:any): Observable<any>{
    return this.http.put<any>(this.APIUrl + '/update_sell_games/' + val.get('terms_id'), val)
  }

  update_sell_acc(val:any): Observable<any>{
    return this.http.put<any>(this.APIUrl + '/update_sell_acc/' + val.get('terms_id'), val)
  }

  update_coach(val:any): Observable<any>{
    return this.http.put<any>(this.APIUrl + '/update_coach/' + val.get('terms_id'), val)
  }

  update_boost(val:any): Observable<any>{
    return this.http.put<any>(this.APIUrl + '/update_boost/' + val.get('terms_id'), val)
  }

  delete_sell_games(val:any): Observable<any>{
    return this.http.delete(this.APIUrl + '/delete_sell_games/' + val)
  }

  delete_sell_acc(val:any): Observable<any>{
    return this.http.delete(this.APIUrl + '/delete_sell_acc/' + val)
  }

  delete_boost(val:any): Observable<any>{
    return this.http.delete(this.APIUrl + '/delete_boost/' + val)
  }

  delete_coach(val:any): Observable<any>{
    return this.http.delete(this.APIUrl + '/delete_coach/' + val)
  }

  createUser(val:any): Observable<any> {
    return this.http.post(this.APIUrl + '/users/', val)
  }

  UserMethodLogin(val:any): Observable<any> {
    return this.http.post(this.APIUrl + '/login/', val)
  }

  UserUpdate(val:any): Observable<any> {
    return this.http.put(this.APIUrl + '/update_user/' + val.terms_user_id, val)
  }

  UserDelete(val:any): Observable<any> {
    return this.http.delete(this.APIUrl + '/delete_user/' + val.terms_user_id, val)
  }

  // get user info
  GetUser(): Observable<any> {
    return this.http.get(this.APIUrl + '/show_current_user/')
  }

  // get user token
  public getToken(): any {
    if (localStorage.getItem('token') == null || localStorage.getItem('token') == undefined) {
      return 
    }
    return `Token ${localStorage.getItem('token')}`;
  }

}
