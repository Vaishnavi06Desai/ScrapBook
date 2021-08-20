import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flipbook',
  templateUrl: './flipbook.component.html',
  styleUrls: ['./flipbook.component.scss']
})
export class FlipbookComponent implements OnInit {

  constructor() { }
  x: any;

  ngOnInit(): void {
    this.x = document.getElementById("myaud");
  }

  play(){
    this.x.play();
  }

}
