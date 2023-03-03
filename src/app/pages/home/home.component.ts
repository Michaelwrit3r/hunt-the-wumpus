import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs';
import { SettingsService } from '../../services/settings/settings.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  settingsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private settingsService: SettingsService
  ) {
    this.settingsForm = this.formBuilder.group({
      gridDimension: [null, Validators.required],
      arrowsNumber: [null, Validators.required],
      wellsNumber: [null, Validators.required],
    })
  }

  ngOnInit(): void {
    this.settingsService.defaultSettings.subscribe(settings =>
      this.settingsForm.patchValue(settings, { emitEvent: false })
    );

    this.settingsForm.valueChanges
      // .pipe(distinctUntilChanged())
      .subscribe(settings =>
        this.settingsService.defaultSettings.next(settings)
      );
  }
}
