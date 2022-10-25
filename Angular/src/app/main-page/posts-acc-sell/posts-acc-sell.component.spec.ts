import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsAccSellComponent } from './posts-acc-sell.component';

describe('PostsAccSellComponent', () => {
  let component: PostsAccSellComponent;
  let fixture: ComponentFixture<PostsAccSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsAccSellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsAccSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
