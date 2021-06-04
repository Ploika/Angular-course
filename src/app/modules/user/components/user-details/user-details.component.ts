
import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/post';
import { UserDetailsService } from '../services/user-details.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetails: IPost[]
  constructor(private userDetailsService: UserDetailsService ) { }

  ngOnInit(): void {
  }

}
