import {Customer} from "./Customer";


export class Pet {
    private _petName:string
    private _type:string
    private _vaccine:boolean
    private _clean:boolean
    private _eatFull:boolean


    constructor(petName: string, type: string, vaccine: boolean, clean: boolean, eatFull: boolean) {
        this._petName = petName;
        this._type = type;
        this._vaccine = vaccine;
        this._clean = clean;
        this._eatFull = eatFull;
    }

    getPetName(): string {
        return this._petName;
    }

    setPetName(value: string) {
        this._petName = value;
    }

    getType(): string {
        return this._type;
    }

    setType(value: string) {
        this._type = value;
    }

    getVaccine(): boolean {
        return this._vaccine;
    }

    setVaccine(value: boolean) {
        this._vaccine = value;
    }

    getClean(): boolean {
        return this._clean;
    }

    setClean(value: boolean) {
        this._clean = value;
    }

    getEatFull(): boolean {
        return this._eatFull;
    }

    setEatFull(value: boolean) {
        this._eatFull = value;
    }

    feed():void {
        this._eatFull=true
    }
    showerPet():void{
        this._clean=true
    }
    vaccination():void{
        this._vaccine=true

    }
}