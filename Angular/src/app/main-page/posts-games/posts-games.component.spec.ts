import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsGamesComponent } from './posts-games.component';

describe('PostsGamesComponent', () => {
  let component: PostsGamesComponent;
  let fixture: ComponentFixture<PostsGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
