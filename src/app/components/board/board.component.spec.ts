import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroService } from 'src/app/services/hero/hero.service';
import { MatrixService } from '../../services/matrix/matrix.service';

import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";

import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardComponent],
      imports: [
        MatIconModule,
        MatGridListModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule
      ],
      providers: [
        MatrixService,
        HeroService
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
