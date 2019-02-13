import { Deck } from "./Deck";

export abstract class DeckWithDiscard<T> extends Deck<T> {

    constructor(arrayDeck: T[] = [], arrayDiscard : T[] = []) {
        super(arrayDeck, arrayDiscard)
    }

}