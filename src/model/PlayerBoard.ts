import { TraitCard } from "./TraitCard";
import { TraitType, PlayerBoardType } from "./PlagueInc";
import { InitialCard, DnaCard, FreeMoveCard } from "./InitialCard";

type BoardCard = null | TraitCard | InitialCard

export class PlayerBoard {

    public slots: BoardCard[]
    public initialInfectivity: number
    public initialLethality: number
    public type: PlayerBoardType

    constructor(type = PlayerBoardType.Bacteria, slots?: BoardCard[], initialInfectivity = 2, initialLethality = 1){
        this.type = type
        this.slots = slots || [null, null, null, DnaCard, FreeMoveCard]
        this.initialInfectivity = initialInfectivity
        this.initialLethality = initialLethality
    }
    
    getTraitSlots() {
        return this.slots.filter(s => s && s instanceof TraitCard) as TraitCard[]
    }

    hasTrait(type: TraitType){
        return this.getTraitSlots().findIndex(
            tc => tc.traits.findIndex(t => t === type) !== -1 
        ) !== -1
    }

    hasAirborne(){
        return this.hasTrait(TraitType.Airbone)
    }
    hasWaterbone(){
        return this.hasTrait(TraitType.Waterbone)
    }
    hasColdResistance(){
        return this.hasTrait(TraitType.ColdResistance)
    }
    hasHeatResistance(){
        return this.hasTrait(TraitType.HeatResistance)
    }

    getCountOfTrait(type: TraitType, initialCount: number){
        const countOfTraitCard = this.getTraitSlots().reduce(
            (sum: number, tc) => {
                return sum + tc.traits.reduce( (nb, trait) => trait === type ? nb + 1 : nb, 0)
            },
            0
        )
        return countOfTraitCard + initialCount
    }

    getLethalityCount(){
        return this.getCountOfTrait(TraitType.Lethality, this.initialLethality)
    }
    getInfectivityCount(){
        return this.getCountOfTrait(TraitType.Infectivity, this.initialInfectivity)
    }
    
}