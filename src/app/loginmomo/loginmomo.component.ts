import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginmomo',
  templateUrl: './loginmomo.component.html',
  styleUrls: ['./loginmomo.component.scss']
})
export class LoginmomoComponent implements OnInit {

  invalid: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.invalid = false;
  }

  form = new FormGroup({
    password: new FormControl(''),
  })

  onSubmit(){
    if(this.form.get('password').value == "momocoffee26")
    {
      this.router.navigate(['/aryan_momo']);
    }
    else{
      this.invalid = true;
    }
  }

}
