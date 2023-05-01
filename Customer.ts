import {Cat} from "./typeofpet/Cat";
import {Dog} from "./typeofpet/Dog";
import {Mouse} from "./typeofpet/Mouse";


export class Customer {
    protected _name:string
    protected _address:string
    protected _numberPhone:string
    protected _id:number
    protected _pet:Array<Cat|Dog|Mouse>=[]


    constructor(name: string, address: string, numberPhone: string, id: number) {
        this._name = name;
        this._address = address;
        this._numberPhone = numberPhone;
        this._id = id;
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

   addCat(petName:string,type:string,vaccine: boolean, clean: boolean,eatFull: boolean){
        this._pet.push(new Cat(petName,type,vaccine,clean,eatFull))
    }
    addDog(petName:string,type:string,vaccine: boolean, clean: boolean, eatFull: boolean){
        this._pet.push(new Dog(petName,type,vaccine,clean,eatFull))
    }
    addMouse(petName:string,type:string,vaccine: boolean, clean: boolean, eatFull: boolean){
        this._pet.push(new Mouse(petName,type,vaccine,clean,eatFull))
    }
    getPetList():Array<Cat|Dog|Mouse>{
        return this._pet
    }
    FindPetByName(petName:string){
        let i=-1
        this._pet.forEach((pet,index)=>{
            if(pet.getPetName()===petName){
                i=index
            }
        })
        return i
    }
    findPet(petName:string):Cat|Dog|Mouse{
        let index=this.FindPetByName(petName)
        if(index!==-1){
            let pet = this._pet[index]
            if(pet!==undefined){
                return pet
            }
        }else {
            console.log(`this Pet is not Exist`)
        }
        return this._pet[index]
    }



    deletePet(petName:string):void{
        let index=this.FindPetByName(petName)
        if(index!==-1){
             this._pet.splice(index,1)
        }
    }
    fixInfoPet(petName:string,newName:string,type:string,vaccinated:boolean,clean:boolean,eatFull:boolean):void{
        let index=this.FindPetByName(petName)
        if(index!==-1){
            this._pet[index].setPetName(newName)
            this._pet[index].setType(type)
            this._pet[index].setVaccine(vaccinated)
            this._pet[index].setClean(clean)
            this._pet[index].setEatFull(eatFull)
        }
    }
    isEmptyPet() {
        return this._pet.length == 0;
    }
    customerTotalMoney():number{
        let total=0
        this._pet.forEach((element)=>{
            total+=element.countFeed*element.costFeed+element.countShower*element.costShower+element.countVaccination*element.costVaccination
        })
        return  total
    }

}