import { Component, OnInit, NgZone, Input} from '@angular/core';
import { Router } from '@angular/router';

import { SignUpComponent } from '../sign-up/sign-up.component';
declare var FB: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() signUpC : SignUpComponent;

  username: String;
  password: String;
  error: String;
  signUpClicked: boolean = false;

  constructor(private ngZone: NgZone, private router : Router) { }

  ngOnInit() {
    (window as any).fbAsyncInit = () => {
      FB.init({appId: 'APPID',cookie: true, xfbml: true, version: 'v2.8'});
      FB.Event.subscribe('auth.authResponseChange', (response) => {
        if (response.status === 'connected') {
          this.statusChangeCallback(response)
        } else if (response.status === 'not_authorized') {
          console.log("Not authorised")
        } else {
           console.log("error in verifying")
          } });
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }


 fetchUserDetail(){
    FB.api(
      '/me',
      'GET',
      {"fields":"id,name,birthday,email"},
      (response) => {
          console.log(response);
          this.navigate(['/dashboard']);
      }
    );
  }

  public navigate(commands: any[]): void {
    this.ngZone.run(() => this.router.navigate(commands)).then();
  }

  statusChangeCallback(res){
    if (res.status === 'connected') {
      this.fetchUserDetail();
    }
   }


  submit(){
    if(this.username === 'admin' && this.password === 'admin'){
      // console.log(this.username, this.password)
      this.router.navigate(['dashboard']);
    }
    else{
      this.error = "Wrong Credentials";
    }
  }

  forgotPass(){
    alert("Yaay! You clicked on Forgot password.");
  }

  signUp(){
    this.signUpClicked = true;
  }

  getNotification(value){
    if(value === true)
      this.signUpClicked = false
  }

}
