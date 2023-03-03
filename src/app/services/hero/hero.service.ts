import { Injectable } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SettingsService } from '../../services/settings/settings.service';
import { Hero, Setting } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HeroService implements OnDestroy {

  public hero!: Hero;
  public settingsSubscription$!: Subscription;


  constructor(private settingsService: SettingsService) {
    this.settingsSubscription$ = this.settingsService.defaultSettings.subscribe(settings => {
      this.initPlayer(settings);
    })
  }

  initPlayer(settings: Setting) {
    this.hero = {
      position: { i: settings.gridDimension - 1, j: 0 },
      direction: 'up',
      gotGold: false,
      isAlive: true,
      arrowsLeft: settings.arrowsNumber
    };
  }

  ngOnDestroy(): void {
    this.settingsSubscription$.unsubscribe();
  }


}
