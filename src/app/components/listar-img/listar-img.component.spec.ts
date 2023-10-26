import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarImgComponent } from './listar-img.component';

describe('ListarImgComponent', () => {
  let component: ListarImgComponent;
  let fixture: ComponentFixture<ListarImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarImgComponent]
    });
    fixture = TestBed.createComponent(ListarImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
