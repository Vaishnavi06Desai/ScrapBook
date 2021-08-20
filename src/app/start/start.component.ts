import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  aryan(){
    this.router.navigate(['/welcome_aryan']);
  }

  yuvi(){
    this.router.navigate(['/welcome_yuvaraj']);
  }

  ss()
  {
    this.router.navigate(['/welcome_sharva_and_sanmegh']);
  }
}
