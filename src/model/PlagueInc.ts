import { Continent } from "./Continent";

export enum PlayerBoardType {
    Bacteria,
    Virus
}

export enum GamePhase {
    DNA,
    Country,
    Evolution,
    Infection,
    Death
}

export enum ContinentName {
    NorthAmerica = 'nort_america',
    SouthAmerica = 'south_america',
    Europa = 'europa',
    Asia = 'asia',
    Africa = 'africa',
    Oceania = 'oceania'
}

export const DEFAULT_CONTINENTS = [
    new Continent(ContinentName.NorthAmerica, 3),
    new Continent(ContinentName.SouthAmerica, 4),
    new Continent(ContinentName.Europa, 5),
    new Continent(ContinentName.Asia, 5),
    new Continent(ContinentName.Africa, 5),
    new Continent(ContinentName.Oceania, 3)
]

export enum TraitType {
    HeatResistance = 0,
    ColdResistance = 1,
    Airbone = 2,
    Waterbone = 3,
    Infectivity = 4,
    Lethality = 5
}

export enum InitialCardPower {
    GetOneMoreDNA,
    SkipInfectionButFreeMove
}