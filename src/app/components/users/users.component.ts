import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { DataService } from 'src/app/services/data-service';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[]
  secondUser: IUser
  constructor(private userService: UserService, private dataTransfer: DataService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value)
  }
  catchUser(value: any): void {
    this.secondUser = value;
  }
  

}
