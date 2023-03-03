export type Sense = 'breeze' | 'stench';
export type Directions = 'up' | 'right' | 'down' | 'left';
export type Hazards = 'wumpus' | 'well' | null;


export interface Setting {
    gridDimension: number;
    arrowsNumber: number;
    wellsNumber: number;
}

export interface Coordinates {
    i: number,
    j: number
}


export interface Hero {
    position: Coordinates;
    direction: Directions;
    gotGold: boolean;
    isAlive: boolean;
    arrowsLeft: number;
}

export interface Cell {
    position: Coordinates;
    senses: Sense[];
    visited: boolean;
    occupiedBy: Hazards;
    gold: boolean,
}