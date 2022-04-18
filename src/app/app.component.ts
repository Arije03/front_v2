import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'pfa';
  constructor(private authService: AuthService ) {}
  ngOnInit(): void {
    this.authService.loadToken();
  }
  isUser(){
    return this.authService.isUser()
  }
  isAuthentificated(){
    return this.authService.isAuthentificated;
  }
  LogOut(){
    this.authService.logout();
  }
}
