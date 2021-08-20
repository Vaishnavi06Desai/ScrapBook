import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginss',
  templateUrl: './loginss.component.html',
  styleUrls: ['./loginss.component.scss']
})
export class LoginssComponent implements OnInit {

  invalid: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.invalid = false;
  }

  form = new FormGroup({
    password: new FormControl(''),
  })

  onSubmit(){
    if(this.form.get('password').value == "sharvasanmegh99")
    {
      this.router.navigate(['/sharva_sanmegh']);
    }
    else{
      this.invalid = true;
    }
  }

}
