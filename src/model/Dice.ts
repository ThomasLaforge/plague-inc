import { getRandomIntInclusive } from "../Utils";

export class Dice {

    public faces: number[]
    public currentFace: number

    constructor(nbFace = 6, currentFace = 0, roll = true) {
        this.currentFace = currentFace
        this.faces = Array(nbFace).fill(null).map( (e, i) => i + 1)
        roll && this.roll()
    }

    roll(){
        this.currentFace = getRandomIntInclusive(0, this.nbFace - 1)
        return this.value
    }

    get value(){
        return this.faces[this.currentFace]
    }

    get nbFace(){
        return this.faces.length
    }

}