import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from 'src/app/sharedservice.service'
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit {

  // Downloading Images from server
  images = [1, 2, 3].map(
    (n) => `http://127.0.0.1:8000/TermsMedia/background${n}.jpg`
  );

  constructor(private service:SharedserviceService, config: NgbCarouselConfig) {
    // swiping images parameters
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
   }

  ngOnInit(): void {
  }

}
