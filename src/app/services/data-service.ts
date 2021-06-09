import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  store = new BehaviorSubject<any>('anonymus')
  constructor() { }
}
