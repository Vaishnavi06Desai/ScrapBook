import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yuvi',
  templateUrl: './yuvi.component.html',
  styleUrls: ['./yuvi.component.scss']
})
export class YuviComponent implements OnInit {

  constructor() { }

  x: any;

  ngOnInit(): void {
    this.x = document.getElementById("myaud");
  }

  play(){
    this.x.play();
  }


}
