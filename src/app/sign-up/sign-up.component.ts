import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  @Output() public onLogin: EventEmitter<any> = new EventEmitter();
  email: String;
  password: String;
  error: String;

  constructor() { }

  ngOnInit() {
  }

  loginClicked(){
    this.onLogin.emit(true);
  }

  submit(){
    console.log("Success", this.email, this.password);
  }

}
