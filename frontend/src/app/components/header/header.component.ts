import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myName: string = '';

  onChangeHome() {
    this.myName = 'Home';
  }
  onChangeList() {
    this.myName = 'Lista'
  }

}
