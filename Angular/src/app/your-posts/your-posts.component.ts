import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from 'src/app/sharedservice.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface Terms_table_posts {
	game_title: string;
	price: number;
  post_type:string;
}

@Component({
  selector: 'app-your-posts',
  templateUrl: './your-posts.component.html',
  styleUrls: ['./your-posts.component.css']
})
export class YourPostsComponent implements OnInit {

  Your_Posts: Terms_table_posts[] = []
  terms:any
  photo_url:string = this.service.PhotoURL
  page = 1;
	pageSize = 6;
	collectionSize:any
  is_sell_games:boolean = false
  is_sell_acc:boolean = false
  is_boost:boolean = false
  is_coach:boolean = false
  is_empty:boolean = false

  IsADD:boolean = true

  constructor(private service:SharedserviceService,  private modalService: NgbModal) { }
  
  ngOnInit(): void {
    this.refreshTerms()
  }
  
  refreshTerms() {
    this.service.sort().subscribe(data => {
      if (data.length <= 0) {
        this.is_empty = true
      } else {
        this.collectionSize = data.length;
        
        this.Your_Posts = data.slice(
          (this.page - 1) * this.pageSize,
          (this.page - 1) * this.pageSize + this.pageSize
          );
      }
    })
  }
  
  moreInfoClick(item:any, longContent:any) {
    this.terms=item;
    this.modalService.open(longContent, { scrollable: true, size: "lg" });
  }
  
  Add(item:any, longContent:any) {
    this.terms=item;
    this.modalService.open(longContent, { scrollable: true, size: "lg" });
    this.IsADD = true
    this.is_sell_games = false
    this.is_sell_acc = false
    this.is_boost = false
    this.is_coach = false
  }

  Edit(item:any, longContent:any) {
    this.terms=item;
    this.modalService.open(longContent, { scrollable: true, size: "lg" });
    this.IsADD = false
    if (item.post_type == "Sprzedaż Konta") {
      this.is_sell_games = false
      this.is_sell_acc = true
      this.is_boost = false
      this.is_coach = false
    }

    if (item.post_type == "Sprzedaż Gry") {
      this.is_sell_games = true
      this.is_sell_acc = false
      this.is_boost = false
      this.is_coach = false
    }

    if (item.post_type == "Coach") {
      this.is_sell_games = false
      this.is_sell_acc = false
      this.is_boost = false
      this.is_coach = true
    }

    if (item.post_type == "Boosting") {
      this.is_sell_games = false
      this.is_sell_acc = false
      this.is_boost = true
      this.is_coach = false
    }
  }

  deleteClick(item:any) {
    if (confirm(`Jesteś pewien że chcesz usunąć ${item.game_title}?`)) {
      if (item.post_type == "Sprzedaż Gry") {
        this.service.delete_sell_games(item.terms_id).subscribe(data => {
          this.refreshTerms()
        })
      }

      if (item.post_type == "Sprzedaż Konta") {
        this.service.delete_sell_acc(item.terms_id).subscribe(data => {
          this.refreshTerms()
        })
      }

      if (item.post_type == "Boosting") {
        this.service.delete_boost(item.terms_id).subscribe(data => {
          this.refreshTerms()
        })
      }

      if (item.post_type == "Coach") {
        this.service.delete_coach(item.terms_id).subscribe(data => {
          this.refreshTerms()
        })
      }
    }
  }

}
