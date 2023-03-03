import { Component } from '@angular/core';
import { Cell, Coordinates, Directions, Hero } from 'src/app/interfaces/interfaces';
import { MatrixService } from 'src/app/services/matrix/matrix.service';
import { MessagesService } from 'src/app/services/messages/messages.service';
import { HeroService } from '../../services/hero/hero.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {

  public isGameOver = false
  public hero!: Hero;
  public matrix!: Cell[][];

  constructor(
    private messageService: MessagesService,
    private heroService: HeroService,
    private matrixService: MatrixService
  ) {
    this.hero = this.heroService.hero;
    this.matrix = this.matrixService.matrix;
  }

  rotateHeroe(direction: Directions) {
    const rotateDirectionsMap: Directions[] = ['up', 'right', 'down', 'left'];
    let currentPos = rotateDirectionsMap.indexOf(this.hero.direction);
    if (direction === 'right') {
      this.hero.direction = rotateDirectionsMap[(currentPos + 1) % 4];
    } else {
      currentPos ||= 4;
      this.hero.direction = rotateDirectionsMap[currentPos - 1];
    }
  }

  moveForward() {
    switch (this.hero.direction) {
      case 'right': {
        if (this.hero.position.j < this.matrixService.gridDimension - 1) {
          this.hero.position.j++;
          this.visitCell(this.hero.position);
        } else {
          this.messageService.triggerMessage('You have hit the wall');
        }
        break;
      }
      case 'left': {
        if (this.hero.position.j > 0) {
          this.hero.position.j--;
          this.visitCell(this.hero.position);
        } else {
          this.messageService.triggerMessage('You have hit the wall');
        }
        break;
      }
      case 'up': {
        if (this.hero.position.i > 0) {
          this.hero.position.i--;
          this.visitCell(this.hero.position);
        } else {
          this.messageService.triggerMessage('You have hit the wall');
        }
        break;
      }
      case 'down': {
        if (this.hero.position.i < this.matrixService.gridDimension - 1) {
          this.hero.position.i++;
          this.visitCell(this.hero.position);
        } else {
          if (this.hero.position.i === this.matrixService.gridDimension - 1 && this.hero.position.j === 0) {
            this.gameOver();
          } else {
            this.messageService.triggerMessage('You have hit the wall');
          }
        }

        break;
      }
    }
  }

  visitCell(position: Coordinates) {
    this.matrix[position.i][position.j].visited = true;
    if (this.matrix[position.i][position.j].occupiedBy) {
      this.hero.isAlive = false;
      this.gameOver();
    }
    if (this.matrix[position.i][position.j].gold) {
      this.hero.gotGold = true;
      this.messageService.triggerMessage('Gold is so bright');
    }
  }

  getWumpusCell() {
    return this.matrix.find(row => row.find(cell => cell.occupiedBy === 'wumpus'))?.find(res => res.occupiedBy === 'wumpus');
  }

  throwArrow() {
    const wumpusPosition = this.getWumpusCell()?.position;
    if (this.hero.arrowsLeft) {
      if (wumpusPosition) {
        switch (this.hero.direction) {
          case 'right': {
            if (this.hero.position.i === wumpusPosition.i && this.hero.position.j < wumpusPosition.j) {
              this.killWumpus();
            }
            break;
          }
          case 'left': {
            if (this.hero.position.i === wumpusPosition.i && this.hero.position.j > wumpusPosition.j) {
              this.killWumpus();
            }
            break;
          }
          case 'up': {
            if (this.hero.position.j === wumpusPosition.j && this.hero.position.i > wumpusPosition.i) {
              this.killWumpus();
            }
            break;
          }
          case 'down': {
            if (this.hero.position.j === wumpusPosition.j && this.hero.position.i < wumpusPosition.i) {
              this.killWumpus();
            }
            break;
          }
        }
      }
      this.hero.arrowsLeft--;
      this.messageService.triggerMessage(this.hero.arrowsLeft == 1 ? '1 arrow left' : this.hero.arrowsLeft + ' arrows left');
    }
  };

  killWumpus() {
    const position = this.getWumpusCell()?.position;
    if (position) {
      this.messageService.triggerMessage('A scream has been heard');
      this.matrixService.matrix[position.i][position.j].occupiedBy = null;
    }
  }

  gameOver() {
    this.isGameOver = true;
    if (!this.hero.isAlive) {
      this.messageService.triggerMessage('You died');
    } else {
      if (this.hero.gotGold) {
        this.messageService.triggerMessage('You have scaped with the gold. Congratulations You Win!');
      } else {
        this.messageService.triggerMessage('You have exit');
      }
    }
    this.messageService.triggerMessage('Game over');
  }

}
