import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentValue : string
    constructor( private dataTransfer: DataService) {
      this.dataTransfer.store.subscribe(value => this.currentValue = value)
    }

  ngOnInit(): void {
  }

}
