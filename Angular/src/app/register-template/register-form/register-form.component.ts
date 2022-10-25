import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from 'src/app/sharedservice.service';
import { NavigationComponent } from 'src/app/navigation/navigation.component';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  register: any

  constructor(private service: SharedserviceService, private navref: NavigationComponent) { }

  ngOnInit(): void {
    this.register = {
      username: '',
      surname: '',
      password: '',
      email: ''
    }
  }

  registerUser() {
    if (this.register.username && this.register.surname && this.register.password&& this.register.email) {
      this.service.createUser(this.register).subscribe(data => {
        alert("Konto Utworzono Pomyślnie Proszę Się Zalogować")
        this.navref.navigate()
      })
    }
    else {
      alert('Podaj wymagane Pola')
    }
  }

}
