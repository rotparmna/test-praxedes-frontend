import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCharacteresComponent } from './list-characteres.component';

describe('ListCharacteresComponent', () => {
  let component: ListCharacteresComponent;
  let fixture: ComponentFixture<ListCharacteresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCharacteresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCharacteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
