import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../components/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/users';
  private urlDetails = ''
  constructor(private httpClient: HttpClient) { }
  getUsers(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(this.url)
  }
}
