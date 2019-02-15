import { Player } from "./Player";
import { ContinentName, GamePhase } from "./PlagueInc";
import { Country } from "./Country";
import { TraitCard } from "./TraitCard";
import * as _ from 'lodash'

export class Game {

    public players: Player[]
    public nbPlayerTurn: number
    public currentPhase: GamePhase

    constructor(players: Player[], nbPlayerTurn = 0, currentPhase = GamePhase.DNA){
        this.nbPlayerTurn = nbPlayerTurn
        this.currentPhase = currentPhase
        this.players = players
        // this.players = _.shuffle(this.players)
        this.players.forEach( (p, i) => p.dnaAmount = i)
    }

    getMyDNA(p: Player){
        let turnDNA = 0
        p.dnaAmount += turnDNA
    }

    pickCountry(p: Player, index: number, toDiscard: boolean){
        if(toDiscard){
            // pick new trait cards
        }
        else {
            // put it on world map
        }
    }

    skipEvolve(){
        this.nextPhase()
    }
    evolve(p: Player, card: TraitCard){
        this.nextPhase()
    }

    infect(p: Player, country: Country){

    }

    completeInfectionPhase(p: Player, countries: Country[]){

    }

    getPossibleDeathCountries(){
        
    }

    death(p: Player, country: Country){
        return false
    }

    nextPhase(){
        this.currentPhase++
    }

}