import {Pet} from "../Pet";

export class Dog extends Pet {
    countShower: number = 0
    costShower: number = 70000
    countFeed: number = 0
    costFeed: number = 60000
    countVaccination: number = 0
    costVaccination = 250000


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