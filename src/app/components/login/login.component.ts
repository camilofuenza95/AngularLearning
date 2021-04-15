import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged:boolean;

  constructor(private router: Router) {
   }

  ngOnInit() {
  }

  submit(usr, pass){
    console.log(usr);
    if (usr.value==="admin" && pass.value==="123"){
      this.router.navigate(['/home']);

    }else{
      console.log('error')
    }

  }



}
