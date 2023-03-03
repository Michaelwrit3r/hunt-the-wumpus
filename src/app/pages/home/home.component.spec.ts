import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsService } from '../../services/settings/settings.service';
import { of } from 'rxjs';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";

import { HomeComponent } from './home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let settingsService: SettingsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        BrowserAnimationsModule
      ],
      providers: [
        {
          provide: SettingsService,
          useValue: {
            defaultSettings: of({
              gridDimension: null,
              arrowsNumber: null,
              wellsNumber: null,
            }),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    settingsService = TestBed.inject(SettingsService);
  });



  it('should create the HomeComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    expect(component.settingsForm.controls['gridDimension'].value).toBeNull();
    expect(component.settingsForm.controls['arrowsNumber'].value).toBeNull();
    expect(component.settingsForm.controls['wellsNumber'].value).toBeNull();
  });






});
