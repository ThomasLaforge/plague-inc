import { InitialCardPower } from "./PlagueInc";

// Jt+love=Bébé

export class InitialCard {

    public name: string
    public description: string
    public power: InitialCardPower

    constructor(name: string, description: string, power: InitialCardPower) {
        this.name = name
        this.description = description
        this.power = power
    }
}

export const DnaCard = new InitialCard(
    'bonus dna', 
    'During DNA Phase Score 1 extra DNA Point.', 
    InitialCardPower.GetOneMoreDNA
)
export const FreeMoveCard = new InitialCard(
    'outbreak', 
    'Skip INFECTION Phase Move 1 of your Tokens to another City on the board. (Ignore all restrictions)', 
    InitialCardPower.SkipInfectionButFreeMove
)