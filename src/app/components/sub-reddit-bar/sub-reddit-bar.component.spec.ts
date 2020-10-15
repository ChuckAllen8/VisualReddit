import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRedditBarComponent } from './sub-reddit-bar.component';

describe('SubRedditBarComponent', () => {
  let component: SubRedditBarComponent;
  let fixture: ComponentFixture<SubRedditBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubRedditBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRedditBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
