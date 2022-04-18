import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.css']
})
export class ParametreComponent implements OnInit {

  constructor(private Router: Router,private authService: AuthService  ) { }

  ngOnInit(): void {
  }
  hide = true;
  valider() :void {
    this.Router.navigate(['/profil']);
}
isUser(){
  return this.authService.isUser()
}
isAuthentificated(){
  return this.authService.isAuthentificated;
}
}
