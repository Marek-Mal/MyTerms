import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from '../sharedservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private service: SharedserviceService, private router: Router) { }

  token:any
  terms_user:any

  ngOnInit(): void {
    // downloading user token and username
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        this.token= localStorage.getItem('token')
        this.terms_user = JSON.parse(localStorage.getItem('user') || '{}')
      }
    })
  }

 // getting username
  getName() {
    return this.terms_user.username
  }
  // go to main page
  navigate() {
    this.router.navigateByUrl('');
    this.ngOnInit()
  }
 // user profile
  navigate_user() {
    this.router.navigateByUrl('Profile');
    this.ngOnInit()
  }
 // logout
  deleteClick(){
    if(confirm('Napewno Chcesz Się Wylogować?')){
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      this.router.navigateByUrl('')
      this.token= localStorage.getItem('token')
      this.terms_user = JSON.parse(localStorage.getItem('user') || '{}')
    }
  }

}
