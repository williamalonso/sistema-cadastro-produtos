import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() changeHome: EventEmitter<any> = new EventEmitter();
  @Output() changeList: EventEmitter<any> = new EventEmitter();

  home() {
    this.changeHome.emit();
  }
  list() {
    this.changeList.emit();
  }

}
