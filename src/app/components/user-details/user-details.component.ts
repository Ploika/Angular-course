import { UserService } from 'src/app/services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../models/post';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input()
  userDetails: number;

  userPosts: IPost[]
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getCurrentUser(this.userDetails).subscribe(value => this.userPosts = value)
  }

}
