import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixService } from 'src/app/services/matrix/matrix.service';
import { MessagesService } from 'src/app/services/messages/messages.service';
import { HeroService } from '../../services/hero/hero.service';

import { ControlsComponent } from './controls.component';

import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";

describe('ControlsComponent', () => {
  let component: ControlsComponent;
  let fixture: ComponentFixture<ControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControlsComponent],
      imports: [
        MatIconModule,
        MatGridListModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule
      ],
      providers: [
        MessagesService,
        MatrixService,
        HeroService
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
