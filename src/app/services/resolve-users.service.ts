import { IUser } from './../models/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResolveUsersService implements Resolve<any[]>{

  constructor(private httpClient: HttpClient) { }
  resolve(){
      return this.httpClient.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
  }
}
