import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsCoachComponent } from './posts-coach.component';

describe('PostsCoachComponent', () => {
  let component: PostsCoachComponent;
  let fixture: ComponentFixture<PostsCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsCoachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
