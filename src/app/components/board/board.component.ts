import { Component } from '@angular/core';
import { Cell, Hero } from 'src/app/interfaces/interfaces';
import { HeroService } from 'src/app/services/hero/hero.service';
import { MatrixService } from '../../services/matrix/matrix.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  public gridDimension!: number;
  public matrix!: Cell[][];
  public hero!: Hero;

  constructor(
    private matrixService: MatrixService,
    private heroService: HeroService
  ) {
    this.gridDimension = this.matrixService.gridDimension;
    this.matrix = this.matrixService.matrix;
    this.hero = this.heroService.hero;
  }
}
