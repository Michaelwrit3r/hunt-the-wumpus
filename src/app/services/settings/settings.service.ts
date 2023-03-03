import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Setting } from 'src/app/interfaces/interfaces'

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  defaultSettings: BehaviorSubject<Setting> = new BehaviorSubject<Setting>({
    gridDimension: 4,
    arrowsNumber: 3,
    wellsNumber: 3
  });

}
