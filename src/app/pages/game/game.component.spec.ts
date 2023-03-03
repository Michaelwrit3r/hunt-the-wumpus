import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import { BoardComponent } from '../../components/board/board.component';
import { ConsoleComponent } from '../../components/console/console.component';
import { ControlsComponent } from '../../components/controls/controls.component';

import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GameComponent,
        BoardComponent,
        ConsoleComponent,
        ControlsComponent
      ],
      imports: [
        MatIconModule,
        MatGridListModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        BrowserAnimationsModule
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
