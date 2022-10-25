import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsBoostComponent } from './posts-boost.component';

describe('PostsBoostComponent', () => {
  let component: PostsBoostComponent;
  let fixture: ComponentFixture<PostsBoostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsBoostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsBoostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
