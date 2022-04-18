import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
host2:string="http://localhost:8080";
jwt: string | undefined;
username:string |undefined;
roles:Array<string>|undefined;

  JwtHelperService: any;
  constructor( private http: HttpClient) { }


  login (data: NgForm){
return this.http.post(this.host2+"/login",data,{observe: 'response'});
  }
  saveToken (jwt: string ){
    localStorage.setItem('token', jwt);
    this.jwt=jwt;
    this.parseJWT();
  }
  parseJWT(){
    let jwtHelper= new JwtHelperService();
    let objJWT=jwtHelper.decodeToken(this.jwt);
    this.username=objJWT.obj;
    this.roles=objJWT.obj;
  }
  isUser(){
    return this.roles?.indexOf('USER') ;
    }
isAuthentificated(){
  return this.roles!=undefined;
}
isAuth():boolean{
  const token = localStorage.getItem('token');
  if((token && this.JwtHelperService.isTokenExpired(token)) || !localStorage.getItem('token')){
    return false;
  }
  return true;
}

loadToken(){
  const token = localStorage.getItem('token');
  if((token && this.JwtHelperService.isTokenExpired(token)) || !localStorage.getItem('token')){
    return false;
  }
  return true;    
 
}
logout(){
  localStorage.removeItem('token');
  this.initParams();
 
}
initParams(){
  this.jwt=undefined;
  this.username=undefined;
  this.roles=undefined;
}
}
