import { IUser } from './../../models/User';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FetchService } from 'src/app/services/fetch.service';
import { IPost } from 'src/app/models/Post';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[];
  constructor(private fetchService: FetchService) {
   }

  ngOnInit(): void {
    this.fetchService.getUsers().subscribe(value => this.users = value)

  }
}
