
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[];
  constructor(private userServise: UserService) { }

  ngOnInit(): void {
    this.userServise.getUsers().subscribe(value => this.users = value)
  }

}
