import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from 'src/app/sharedservice.service';
import { NavigationComponent } from 'src/app/navigation/navigation.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  login:any

  constructor(private service: SharedserviceService, private navref: NavigationComponent) { }

  ngOnInit(): void {
    this.login = {
      email: '',
      password: ''
    }
  }

  loginUser() {
    if (this.login.password && this.login.email != '') {
      this.service.UserMethodLogin(this.login).subscribe(data => {
        let val = {
          "username": data.user.username,
          "surname": data.user.surname,
          "email": data.user.email,
        }
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(val))
        this.navref.navigate()
      })
    }
    else {
      alert('Podaj Email I Hasło')
    }
  }

}
