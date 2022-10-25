import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from '../sharedservice.service';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-profile-template',
  templateUrl: './profile-template.component.html',
  styleUrls: ['./profile-template.component.css']
})
export class ProfileTemplateComponent implements OnInit {

  userid:any

  UserForm:any

  constructor(private service: SharedserviceService, private navref: NavigationComponent) { }

  ngOnInit(): void {
    this.UserForm = {
      username: '',
      surname: '',
      email: '',
      password:'',
    }
    this.service.GetUser().subscribe(x => {
      console.log(x)
      this.UserForm= {
        terms_user_id:x.terms_user_id,
        username: x.username,
        surname: x.surname,
        email: x.email,
        password:'',
      }
    })

  }

  Edit() {
    if (this.UserForm.password != '') {
        this.service.UserUpdate(this.UserForm).subscribe((data) => {
          let val = {
            username: data.username,
            surname: data.surname,
            email: data.email,
          }
          localStorage.removeItem('user')
          localStorage.setItem('user', JSON.stringify(val))
          this.navref.navigate_user()
    })
    }
    else {
      alert('Podaj Hasło')
    }
  }

  Delete() {
    if (this.UserForm.password != '') {
      this.service.UserDelete(this.UserForm).subscribe((data) => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        this.navref.navigate_user()
    })}
    else {
      alert('Podaj Hasło')
    }
  }

}
