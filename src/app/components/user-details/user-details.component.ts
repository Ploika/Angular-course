import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { DataService } from 'src/app/services/data-service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input()
  currentUser: IUser

  constructor(private dataTransfer: DataService) { }

  ngOnInit(): void {
  }
  catchCurrentUser(): void{
    this.dataTransfer.store.next(this.currentUser.name)
  }

}
