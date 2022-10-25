import { Component, OnInit, Input, Output } from '@angular/core';
import { SharedserviceService } from 'src/app/sharedservice.service';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {

  constructor(private service: SharedserviceService) { }
  @Input() terms:any;
  photo:any

  ngOnInit(): void {
    if (this.terms.photo) {
      if (this.terms.photo.startsWith('http') || this.terms.photo.startsWith('https')) {
      }
      else {
        this.terms.photo = this.service.APIUrl+this.terms.photo
      }
    }
  }

}
