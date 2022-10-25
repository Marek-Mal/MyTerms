import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from 'src/app/sharedservice.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface Terms_table_posts {
	game_title: string;
	game_category: string;
	price: number;
}

@Component({
  selector: 'app-posts-games',
  templateUrl: './posts-games.component.html',
  styleUrls: ['./posts-games.component.css']
})
export class PostsGamesComponent implements OnInit {

  Terms_Posts: Terms_table_posts[] = []
  terms:any
  photo_url:string = this.service.PhotoURL
  page = 1;
	pageSize = 6;
	collectionSize:any

  constructor(private service:SharedserviceService, private modalService: NgbModal) { }
  
  ngOnInit(): void {
    this.refreshTerms()
    
  }

  refreshTerms() {
    this.service.get_sell_games().subscribe(data => {
      this.collectionSize = data.results.length;
      this.Terms_Posts = data.results.slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
        );
    })
  }
  
  moreInfoClick(item:any, longContent:any) {
    this.terms=item;
    this.modalService.open(longContent, { scrollable: true, size: "lg" });
  }

}


