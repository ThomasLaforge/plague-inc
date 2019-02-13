import { PlayerBoard } from "./PlayerBoard";
import * as uuid from "uuid"

export class Player {

    public id: string
    public dnaAmount: number
    public board: PlayerBoard

    constructor(id: string = uuid.v4(), dnaAmount = 0, playerBoard = new PlayerBoard()) {
        this.id = id
        this.dnaAmount = dnaAmount
        this.board = playerBoard
    }

    hasAirborne(){ return this.board.hasAirborne() }
    hasWaterbone(){ return this.board.hasWaterbone() }
    hasColdResistance(){ return this.board.hasColdResistance() }
    hasHeatResistance(){ return this.board.hasHeatResistance() }

    isEqual(p: Player){
        return this.id === p.id
    }
    is(p: Player){ return this.isEqual(p)}
}