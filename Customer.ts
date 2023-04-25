import {Cat} from "./typeofpet/Cat";
import {Dog} from "./typeofpet/Dog";
import {Mouse} from "./typeofpet/Mouse";

export class Customer {
    protected _name:string
    protected _address:string
    protected _numberPhone:string
    protected _id:number
    protected _pet:Cat|Dog|Mouse


    constructor(name: string, address: string, numberPhone: string, id: number,pet:Cat|Dog|Mouse) {
        this._name = name;
        this._address = address;
        this._numberPhone = numberPhone;
        this._id = id;
        this._pet=pet
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getAddress(): string {
        return this._address;
    }

    setAddress(value: string) {
        this._address = value;
    }

    getNumberPhone(): string {
        return this._numberPhone;
    }

    setNumberPhone(value: string):void {
        this._numberPhone = value;
    }

    getID(): number {
        return this._id;
    }

    setID(value: number) {
        this._id = value;
    }

    getPet(): Cat|Dog|Mouse {
        return this._pet;
    }

    setPet(value: Cat|Dog|Mouse):void {
        this._pet = value;
    }

    getTotalMoney():number{
        let total=0

        total =this._pet.countFeed*this._pet.costFeed+this._pet.countShower*this._pet.costShower+this._pet.countVaccination*this._pet.costVaccination+this._pet.countDeWorming*this._pet.costDeWorming
        return  total
    }


}