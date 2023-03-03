import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagesService } from '../../services/messages/messages.service';

import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ConsoleComponent } from './console.component';

describe('ConsoleComponent', () => {
  let component: ConsoleComponent;
  let fixture: ComponentFixture<ConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsoleComponent],
      imports: [
        MatIconModule,
        MatGridListModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        BrowserAnimationsModule
      ],
      providers: [
        MessagesService
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
