import { ActivatedRoute } from '@angular/router';
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
  constructor( private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value  => this.users = value.data)
   }

  ngOnInit(): void {
  }
}
