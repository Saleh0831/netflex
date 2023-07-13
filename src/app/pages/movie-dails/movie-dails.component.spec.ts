import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDailsComponent } from './movie-dails.component';

describe('MovieDailsComponent', () => {
  let component: MovieDailsComponent;
  let fixture: ComponentFixture<MovieDailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
