import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSideBarComponent } from './top-side-bar.component';

describe('TopSideBarComponent', () => {
  let component: TopSideBarComponent;
  let fixture: ComponentFixture<TopSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
