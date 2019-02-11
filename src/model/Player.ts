import { PlayerBoard } from "./PlayerBoard";

export class Player {

    public dnaAmount: number
    public board: PlayerBoard

    constructor(dnaAmount = 0, playerBoard = new PlayerBoard()) {
        this.dnaAmount = dnaAmount
        this.board = playerBoard
    }

    hasAirborne(){ return this.board.hasAirborne() }
    hasWaterbone(){ return this.board.hasWaterbone() }
    hasColdResistance(){ return this.board.hasColdResistance() }
    hasHeatResistance(){ return this.board.hasHeatResistance() }

    
}