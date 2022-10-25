import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsMixedAllComponent } from './posts-mixed-all.component';

describe('PostsMixedAllComponent', () => {
  let component: PostsMixedAllComponent;
  let fixture: ComponentFixture<PostsMixedAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsMixedAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsMixedAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
