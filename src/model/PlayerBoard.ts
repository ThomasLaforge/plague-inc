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

    hasAirborne(){
        return false
    }
    hasWaterbone(){
        return false 
    }
    hasColdResistance(){
        return false 
    }
    hasHeatResistance(){
        return false
    }

    getLethalityCount(){
        const lethalityFromTraitCards = this.getTraitSlots().reduce(
            (sum: number, tc) => {
                return sum + tc.traits.reduce( (nb, trait) => trait === TraitType.Lethality ? nb + 1 : nb, 0)
            },
            0
        )
        return lethalityFromTraitCards + this.initialLethality
    }
    getInfectivityCount(){
        const infectivityFromTraitCards = this.getTraitSlots().reduce(
            (sum, tc: TraitCard) => {
                return sum + tc.traits.reduce( (nb, trait) => trait === TraitType.Infectivity ? nb + 1 : nb, 0)                
            },
            0
        )
        return infectivityFromTraitCards + this.initialInfectivity
    }
    
}