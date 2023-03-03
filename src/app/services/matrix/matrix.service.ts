import { Injectable } from '@angular/core';
import { SettingsService } from '../settings/settings.service';
import { Setting, Cell, Coordinates, Sense } from 'src/app/interfaces/interfaces';
import { Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MatrixService {

  public gridDimension!: number;
  public wellsNumber!: number;
  public matrix!: Cell[][];
  public startPosition!: Coordinates;
  public settingsSubscription$!: Subscription;

  constructor(
    private settingsService: SettingsService,
  ) {

    this.settingsSubscription$ = this.settingsService.defaultSettings.subscribe(settings => {
      this.gridDimension = settings.gridDimension;
      this.startPosition = { i: settings.gridDimension - 1, j: 0 };
      this.initMatrix(settings);
    })
  }

  initMatrix(settings: Setting) {
    this.generateMatrix(settings);
    this.addWells(settings);
    this.addWumpus(settings);
    this.addGold(settings);
  }

  generateMatrix(settings: Setting) {
    this.matrix = [];
    for (let i = 0; i < settings.gridDimension; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < settings.gridDimension; j++) {
        let position: Coordinates = { i, j }
        this.matrix[i][j] = {
          position,
          senses: [],
          visited: position.i == this.startPosition.i && position.j == this.startPosition.j,
          occupiedBy: null,
          gold: false,
        };
      }
    }
    console.dir(this.matrix);
  }

  addWells(settings: Setting) {
    let cont = 0;
    let randomPosition: Coordinates;
    while (cont < settings.wellsNumber) {
      randomPosition = {
        i: Math.floor(Math.random() * settings.gridDimension),
        j: Math.floor(Math.random() * settings.gridDimension)
      }
      if (randomPosition.i === this.startPosition.i && randomPosition.j === this.startPosition.j) {
        continue;
      }
      if (!this.matrix[randomPosition.i][randomPosition.j].occupiedBy) {
        this.matrix[randomPosition.i][randomPosition.j].occupiedBy = 'well';
        this.addSense('breeze', randomPosition.i + 1, randomPosition.j);
        this.addSense('breeze', randomPosition.i - 1, randomPosition.j);
        this.addSense('breeze', randomPosition.i, randomPosition.j + 1);
        this.addSense('breeze', randomPosition.i, randomPosition.j - 1);
        cont++;
      }
    }
  }

  addWumpus(settings: Setting) {
    let cont = 0;
    let randomPosition: Coordinates;
    while (cont < 1) {
      randomPosition = {
        i: Math.floor(Math.random() * settings.gridDimension),
        j: Math.floor(Math.random() * settings.gridDimension)
      }
      if (randomPosition.i === this.startPosition.i && randomPosition.j === this.startPosition.j) {
        continue;
      }
      if (!this.matrix[randomPosition.i][randomPosition.j].occupiedBy) {
        this.matrix[randomPosition.i][randomPosition.j].occupiedBy = 'wumpus';
        // this.freeCells--;
        this.addSense('stench', randomPosition.i + 1, randomPosition.j);
        this.addSense('stench', randomPosition.i - 1, randomPosition.j);
        this.addSense('stench', randomPosition.i, randomPosition.j + 1);
        this.addSense('stench', randomPosition.i, randomPosition.j - 1);
        cont++;
      }
    }

  }

  addGold(settings: Setting) {
    let cont = 0;
    let randomPosition: Coordinates;
    while (cont < 1) {
      randomPosition = {
        i: Math.floor(Math.random() * settings.gridDimension),
        j: Math.floor(Math.random() * settings.gridDimension)
      }
      if (randomPosition.i === this.startPosition.i && randomPosition.j === this.startPosition.j) {
        continue;
      }
      if (this.matrix[randomPosition.i][randomPosition.j].occupiedBy !== 'well') {
        this.matrix[randomPosition.i][randomPosition.j].gold = true;
        cont++;
      }
    }
  }


  addSense(sense: Sense, i: number, j: number) {
    if (typeof this.matrix[i] !== 'undefined' && typeof this.matrix[i][j] !== 'undefined' &&
      !this.matrix[i][j].occupiedBy && !this.matrix[i][j].senses.includes(sense)) {
      this.matrix[i][j].senses.push(sense);
    }
  }

}
