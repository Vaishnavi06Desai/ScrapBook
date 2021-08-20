import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ss',
  templateUrl: './ss.component.html',
  styleUrls: ['./ss.component.scss']
})
export class SsComponent implements OnInit {

  constructor() { }

  x: any;



  ngOnInit(): void {
    this.x = document.getElementById("myaud");
  }

  play(){
    this.x.play();
  }

}
