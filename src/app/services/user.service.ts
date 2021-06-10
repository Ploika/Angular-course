import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../components/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/users';
  private urlDetails = 'http://jsonplaceholder.typicode.com/posts?userId='
  constructor(private httpClient: HttpClient) { }
  getUsers(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(this.url)
  }
  getCurrentUser(id: number): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.urlDetails}${id}`)
  }
}
