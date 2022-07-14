import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllTodoComponent } from './list-all-todo.component';

describe('ListAllTodoComponent', () => {
  let component: ListAllTodoComponent;
  let fixture: ComponentFixture<ListAllTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
