import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Router: Router) { }

  ngOnInit(): void {}
  Login() :void {
    this.Router.navigate(['/profil']);
  }
  
  
  


}

