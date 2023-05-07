import {Pet} from "../Pet";

export class Mouse extends Pet {
    countShower: number = 0
    costShower: number = 50000
    countFeed: number = 0
    costFeed: number = 30000
    countVaccination: number = 0
    costVaccination = 120000

    constructor(petName: string,
                type: string,
                vaccine: boolean,
                clean: boolean,
                eatFull: boolean) {
        super(petName, type, vaccine, clean, eatFull);
    }

    feed(): void {
        this.setEatFull(true)
        this.countFeed++
    }

    showerPet(): void {
        this.setClean(true)
        this.countShower++
    }

    vaccination(): void {
        this.setVaccine(true)
        this.countVaccination++
    }
}