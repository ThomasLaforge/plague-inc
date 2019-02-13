import { TraitType } from "./PlagueInc";

export class TraitCard {

    public name: string
    public traits: TraitType[]
    public cost: number

    constructor(name: string, traits: TraitType[], cost: number) {
        this.name = name
        this.traits = traits
        this.cost = cost
    }
}