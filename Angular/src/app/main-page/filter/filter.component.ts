import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  public isCollapsed = false;
  public posts_all: boolean = false;
  public posts_games: boolean = true;
  public posts_acc_sell: boolean = false;
  public posts_coach: boolean = false;
  public posts_boost: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setallFalse():void {
    this.posts_all = false
    this.posts_games = false
    this.posts_acc_sell = false
    this.posts_coach = false
    this.posts_boost = false
  }

}
