import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Component,  OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {




  constructor(private authService: AuthService,
    private router: Router, private http: HttpClient)  { }
  

  ngOnInit(): void {

  }
  Login() :void {
    
  }


  
  onLogin(data: NgForm): void {

    this.authService.login(data)
    .subscribe(resp=>{
    let jwt=resp.headers.get('Authorization');
    console.log(jwt)
    this.authService.saveToken('token');
    console.log(this.authService.saveToken('token'))
    this.router.navigate(['/profil']);
  },err=>{

    })

   


  }

  
  


}

