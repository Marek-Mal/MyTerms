import { Component, Input, OnInit } from '@angular/core';
import { SharedserviceService } from 'src/app/sharedservice.service';
import { FormBuilder} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { YourPostsComponent } from '../your-posts.component';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})

export class AddEditComponent implements OnInit {

  @Input() terms:any;
  @Input() IsADD:any;
  @Input() is_sell_games:boolean = false
  @Input() is_sell_acc:boolean = false
  @Input() is_boost:boolean = false
  @Input() is_coach:boolean = false

  terms_id:any
  game_title:any = ''
  price:any = 0
  game_category:any = ''
  played_for:any = ''
  skins:any = 0
  level:any = ''
  description:any = ''
  platform:any = ''
  producent:any = ''
  rank:any = ''
  photo:any

  form:any
  user:any

  i:number = 1

  constructor(private service:SharedserviceService, private formBuilder: FormBuilder, private modalService: NgbModal, public yp: YourPostsComponent) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      profile: ['']
    })
    this.service.GetUser().subscribe(x => {
      this.user=x.terms_user_id
    })
    if (!this.IsADD) {
      this.terms_id = this.terms.terms_id
      this.game_title = this.terms.game_title
      this.price = this.terms.price
      this.game_category = this.terms.game_category
      this.played_for = this.terms.player_for
      this.skins = this.terms.skins
      this.level = this.terms.level
      this.description = this.terms.description
      this.platform = this.terms.platform
      this.producent = this.terms.producent
      this.rank = this.terms.rank
    }
  }

  onChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('profile').setValue(file);
    }
  }

  Edit_Terms() {
    if (this.is_sell_acc) {
      if (
        this.game_title == '' ||
        this.price <= 0 ||
        this.game_category == '' ||
        this.played_for == '' || this.played_for == undefined ||
        this.skins <= 0 ||
        this.level <= 0 ||
        this.description == '' || this.description.length <= 50 ||
        this.platform == '' ||
        this.producent == '' ||
        this.rank == ''
      ) {
        alert("Wypełnij Poprawnie Wszystkie Pola")
      } else {
        let Data:FormData = new FormData
        let headers = new Headers()
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        Data.append("terms_id", this.terms_id)
        Data.append("price", this.price)
        Data.append("game_title", this.game_title)
        Data.append("description", this.description)
        Data.append("game_category", this.game_category)
        Data.append("player_for", this.played_for)
        Data.append("skins", this.skins)
        Data.append("level", this.level)
        Data.append("platform", this.platform)
        Data.append("producent", this.producent)
        Data.append("rank", this.rank)
        Data.append("photo", this.form.get('profile').value)
        Data.append("user", this.user)

        this.service.update_sell_acc(Data).subscribe(res => {
          this.modalService.dismissAll()
          this.yp.ngOnInit()
        })
      }
    } 
    if (this.is_sell_games) { 
      if (
        this.game_title == '' ||
        this.price <= 0 ||
        this.game_category == '' ||
        this.description == '' || this.description.length <= 50 ||
        this.platform == '' ||
        this.producent == ''
      ) {
        alert("Wypełnij Poprawnie Wszystkie Pola")
      } else {
        let Data:FormData = new FormData
        let headers = new Headers()
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        Data.append("terms_id", this.terms_id)
        Data.append("price", this.price)
        Data.append("game_title", this.game_title)
        Data.append("description", this.description)
        Data.append("game_category", this.game_category)
        Data.append("platform", this.platform)
        Data.append("producent", this.producent)
        Data.append("photo", this.form.get('profile').value)
        Data.append("user", this.user)

        this.service.update_sell_games(Data).subscribe(res => {
          this.modalService.dismissAll()
          this.yp.ngOnInit()
        })
      }
     }
    if (this.is_boost) { 
      if (
        this.game_title == '' ||
        this.price <= 0 ||
        this.description == '' || this.description.length <= 50 
      ) {
        alert("Wypełnij Poprawnie Wszystkie Pola")
      } else {
        let Data:FormData = new FormData
        let headers = new Headers()
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        Data.append("terms_id", this.terms_id)
        Data.append("price", this.price)
        Data.append("game_title", this.game_title)
        Data.append("description", this.description)
        Data.append("photo", this.form.get('profile').value)
        Data.append("user", this.user)

        this.service.update_boost(Data).subscribe(res => {
          this.modalService.dismissAll()
          this.yp.ngOnInit()
        })
      }
     }
    if (this.is_coach) { 
      if (
        this.game_title == '' ||
        this.price <= 0 ||
        this.description == '' || this.description.length <= 50 
      ) {
        alert("Wypełnij Poprawnie Wszystkie Pola")
      } else {
        let Data:FormData = new FormData
        let headers = new Headers()
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        Data.append("terms_id", this.terms_id)
        Data.append("price", this.price)
        Data.append("game_title", this.game_title)
        Data.append("description", this.description)
        Data.append("photo", this.form.get('profile').value)
        Data.append("user", this.user)

        this.service.update_coach(Data).subscribe(res => {
          this.modalService.dismissAll()
          this.yp.ngOnInit()
        })
      }
     }
  }

  Add_Terms() {
    if (this.is_sell_acc) {

      if (
        this.game_title == '' ||
        this.price <= 0 ||
        this.game_category == '' ||
        this.played_for == '' || this.played_for == undefined ||
        this.skins <= 0 ||
        this.level <= 0 ||
        this.description == '' || this.description.length <= 50 ||
        this.platform == '' ||
        this.producent == '' ||
        this.rank == ''
      ) {
        alert("Wypełnij Poprawnie Wszystkie Pola")
      } 
      else {
        let Data:FormData = new FormData
        let headers = new Headers()
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        Data.append("price", this.price)
        Data.append("game_title", this.game_title)
        Data.append("description", this.description)
        Data.append("game_category", this.game_category)
        Data.append("player_for", this.played_for)
        Data.append("skins", this.skins)
        Data.append("level", this.level)
        Data.append("platform", this.platform)
        Data.append("producent", this.producent)
        Data.append("rank", this.rank)
        Data.append("photo", this.form.get('profile').value)
        Data.append("user", this.user)

        this.service.post_sell_acc(Data).subscribe(res => {
          this.modalService.dismissAll()
          this.yp.ngOnInit()
          this.yp.is_empty = false
        })}
    }
    if (this.is_sell_games) { 
      if (
        this.game_title == '' ||
        this.price <= 0 ||
        this.game_category == '' ||
        this.description == '' || this.description.length <= 50 ||
        this.platform == '' ||
        this.producent == ''
      ) {
        alert("Wypełnij Poprawnie Wszystkie Pola")
      } else {
        let Data:FormData = new FormData
        let headers = new Headers()
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        Data.append("price", this.price)
        Data.append("game_title", this.game_title)
        Data.append("description", this.description)
        Data.append("game_category", this.game_category)
        Data.append("platform", this.platform)
        Data.append("producent", this.producent)
        Data.append("photo", this.form.get('profile').value)
        Data.append("user", this.user)

        this.service.post_sell_games(Data).subscribe(res => {
          this.modalService.dismissAll()
          this.yp.ngOnInit()
          this.yp.is_empty = false
        })
      }
     }
    if (this.is_boost) { 
      if (
        this.game_title == '' ||
        this.price <= 0 ||
        this.description == '' || this.description.length <= 50 
      ) {
        alert("Wypełnij Poprawnie Wszystkie Pola")
      } else {
        let Data:FormData = new FormData
        let headers = new Headers()
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        Data.append("price", this.price)
        Data.append("game_title", this.game_title)
        Data.append("description", this.description)
        Data.append("photo", this.form.get('profile').value)
        Data.append("user", this.user)

        this.service.post_boosting(Data).subscribe(res => {
          this.modalService.dismissAll()
          this.yp.ngOnInit()
          this.yp.is_empty = false
        })
      }
     }
    if (this.is_coach) { 
      if (
        this.game_title == '' ||
        this.price <= 0 ||
        this.description == '' || this.description.length <= 50 
      ) {
        alert("Wypełnij Poprawnie Wszystkie Pola")
      } else {
        let Data:FormData = new FormData
        let headers = new Headers()
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        Data.append("price", this.price)
        Data.append("game_title", this.game_title)
        Data.append("description", this.description)
        Data.append("photo", this.form.get('profile').value)
        Data.append("user", this.user)

        this.service.post_coach(Data).subscribe(res => {
          this.modalService.dismissAll()
          this.yp.ngOnInit()
          this.yp.is_empty = false
        })
      }
     } 
  }

  Sell_Games_Set_True() {
    this.is_sell_games = true
    this.is_sell_acc = false
    this.is_boost = false
    this.is_coach = false
  }

  Sell_Acc_Set_True() {
    this.is_sell_games = false
    this.is_sell_acc = true
    this.is_boost = false
    this.is_coach = false
  }

  Boost_Set_True() {
    this.is_sell_games = false
    this.is_sell_acc = false
    this.is_boost = true
    this.is_coach = false
  }

  Coach_Set_True() {
    this.is_sell_games = false
    this.is_sell_acc = false
    this.is_boost = false
    this.is_coach = true
  }

}
