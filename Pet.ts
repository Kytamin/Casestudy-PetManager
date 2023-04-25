import {Customer} from "./Customer";

export enum Type {
    Cat=1,
    Dog=2,
    mouse,
    other

}
export class Pet {
    private _petName:string
    private _type:Type
    private _vaccine:boolean
    private _clean:boolean
    private _deWorm:boolean
    private _eatFull:boolean


    constructor(petName: string, type: Type, vaccine: boolean, clean: boolean, deWorm: boolean, eatFull: boolean) {
        this._petName = petName;
        this._type = type;
        this._vaccine = vaccine;
        this._clean = clean;
        this._deWorm = deWorm;
        this._eatFull = eatFull;
    }

    getPetName(): string {
        return this._petName;
    }

    setPetName(value: string) {
        this._petName = value;
    }

    getType(): Type {
        return this._type;
    }

    setType(value: Type) {
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

    getDeWorm(): boolean {
        return this._deWorm;
    }

    setDeWorm(value: boolean) {
        this._deWorm = value;
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
    deWorming():void{
        this._deWorm=true

    }
}