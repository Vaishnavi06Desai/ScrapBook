import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginyuvi',
  templateUrl: './loginyuvi.component.html',
  styleUrls: ['./loginyuvi.component.scss']
})
export class LoginyuviComponent implements OnInit {

  invalid: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.invalid = false;
  }

  form = new FormGroup({
    password: new FormControl(''),
  })

  onSubmit(){
    if(this.form.get('password').value == "yuvixd21")
    {
      this.router.navigate(['/yuvi']);
    }
    else{
      this.invalid = true;
    }
  }

}
