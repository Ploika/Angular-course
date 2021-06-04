import { IPost } from 'src/app/models/post';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IUser } from 'src/app/models/user';
import { UserDetailsService } from '../services/user-details.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: IUser
  userDetails: IPost[]
  constructor(private userDetailsService: UserDetailsService, private router: Router, private activatedRoute: ActivatedRoute ) {

    this.activatedRoute.params.subscribe(params => {
      this.router.getCurrentNavigation()?.extras.state as IUser
      this.userDetailsService.getDetailsUser(params.id).subscribe(value => this.userDetails = value)
    })
  }



  ngOnInit(): void {
  }

}
