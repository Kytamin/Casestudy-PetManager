import {Customer} from "./Customer";
import {addressRegex} from "./regex/address";
import {idRegex} from "./regex/id";
import {nameRegex} from "./regex/name";
import {phoneRegex} from "./regex/phonenumber";

let addressRegex1 = new addressRegex()
let idRegex1 = new idRegex()
let nameRegex1 = new nameRegex()
let phoneRegex1 = new phoneRegex()

const readlineSync = require('readline-sync')

export class  CustomerManager {
    customerList: Customer[] = []
    size: number = 0
    revenue:number=0

    checkIDinList(id: number): boolean {
        let customerFilter = this.customerList.filter((item: any) => item._id == id)
        return customerFilter.length > 0
    }

    addCustomer(): void {
        this.size++
        let check = true;
        let id;
        do {
            id = +readlineSync.question('Enter id customer: ');
            !idRegex1.validate(id) || this.checkIDinList(id) ? console.log(`please  re enter the ID`):check= false
        } while (!idRegex1.validate(id)||check)

        let name;
        do {
            name = readlineSync.question("Input Name");
            console.log(!nameRegex1.validate(name)?"Please enter the correct name":"")
        } while (!nameRegex1.validate(name));

        let phone;
        do {
            phone = readlineSync.question("Input phoneNumber");
            console.log(!phoneRegex1.validate(phone)?"Please enter the correct phoneNumber":"")
        } while (!phoneRegex1.validate(phone));

        let address;
        do {
            address = readlineSync.question("Input address");
            console.log(!addressRegex1.validate(address)?"Please enter the correct Address":"")
        } while (!addressRegex1.validate(address));
        let customer = new Customer(name, address, phone, id)
        this.customerList.push(customer)
        this.customerList.sort((customer1, customer2) => {
            return customer1.getID() - customer2.getID()
        })
        console.log('Add customer success!')
    }
    displayList(): void {
        this.isEmptyCustomer()?console.log('Customer List is empty'):console.table(this.customerList)
    }
    isEmptyCustomer() {
        return this.customerList.length == 0;
    }
    isCheckEmptyCustomer(){
        if(this.isEmptyCustomer()) {
            console.log("List customer is Empty")
            return true
        }
        return false
    }
    findInfoByID(id: number): number {
        let low: number = 0;
        let high: number = this.customerList.length - 1;
        let result: number = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (this.customerList[mid].getID() === id) {
                result = mid;
                return result
            } else if (id < this.customerList[mid].getID()) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return result;
    }

    deleteCustomer() {
        if(this.isCheckEmptyCustomer()) return
        let id
        do {
            id = readlineSync.question("Input ID");
            console.log(this.findInfoByID(+id) === -1?"Please enter the correct ID":"")
        } while (this.findInfoByID(+id) === -1);
        let index = this.findInfoByID(+id)
        this.customerList.splice(index, 1)
        this.size--
    }


    fixInfoCustomer(): void {
        if(this.isCheckEmptyCustomer()) return
        let id
        do {
            id = readlineSync.question("Input ID");
            console.log(this.findInfoByID(+id) === -1?"Please enter the correct ID":"")
        } while (this.findInfoByID(+id) === -1);
        let index = this.findInfoByID(+id)
        let name;
        do {
            name = readlineSync.question("Input new Name");
            console.log(!nameRegex1.validate(name)?"Please enter the correct new name":"")
        } while (!nameRegex1.validate(name));
        let phone;
        do {
            phone = readlineSync.question("Input  new phoneNumber");
            console.log(!phoneRegex1.validate(phone)?"Please enter the correct new phoneNumber":"")
        } while (!phoneRegex1.validate(phone));
        let address;
        do {
            address = readlineSync.question("Input new address");
            console.log(!addressRegex1.validate(address)?"Please enter the correct Address":"")
        } while (!addressRegex1.validate(address));
        this.customerList[index].setName(name)
        this.customerList[index].setAddress(address)
        this.customerList[index].setNumberPhone(phone)

    }
    displayCustomer(): void {
        if(this.isCheckEmptyCustomer()) return
        let id
        do {
            id = readlineSync.question("Input ID");
            console.log(this.findInfoByID(+id) === -1?"Please enter the correct ID":"")
        } while (this.findInfoByID(+id) === -1);
        let index = this.findInfoByID(+id)
        console.log(this.customerList[index])
    }
    numberOfCustomers():void{
        console.log(`current number of customer: ${this.size}`)
    }
    petListCustomer() :void{
        if(this.isCheckEmptyCustomer()) return
        let id
        do {
            id = readlineSync.question("Input ID");
            console.log(this.findInfoByID(+id) === -1?"Please enter the correct ID":"")
        } while (this.findInfoByID(+id) === -1);
        let index = this.findInfoByID(+id)
        this.customerList[index].isEmptyPet()?console.log(`List is Empty`):console.table(this.customerList[index].getPetList())
    }
    addCat(): void {
        if(this.isCheckEmptyCustomer()) return
        let id
        do {
            id = readlineSync.question("Input ID");
            console.log(this.findInfoByID(+id) === -1?"Please enter the correct ID":"")
        } while (this.findInfoByID(+id) === -1);
        let index = this.findInfoByID(+id)
        let name;
        do {
            name = readlineSync.question("Input Cat Name");
            console.log(!nameRegex1.validate(name)?"Please enter the correct Cat name":"")
        } while (!nameRegex1.validate(name));
        let type = readlineSync.question("Input Type")
        let vaccine = false
        let clean = false
        let eatFull= false
        this.customerList[index].addCat(name,type,vaccine,clean,eatFull)
    }
    addDog():void{
        if(this.isCheckEmptyCustomer()) return
        let id
        do {
            id = readlineSync.question("Input ID");
            console.log(this.findInfoByID(+id) === -1?"Please enter the correct ID":"")
        } while (this.findInfoByID(+id) === -1);
        let index = this.findInfoByID(+id)
        let name;
        do {
            name = readlineSync.question("Input Dog Name");
            console.log(!nameRegex1.validate(name)?"Please enter the correct Dog name":"")
        } while (!nameRegex1.validate(name));
        let type = readlineSync.question("Input Type")
        let vaccine = false
        let clean = false
        let eatFull= false
        this.customerList[index].addDog(name,type,vaccine,clean,eatFull)
    }
    addMouse():void{
        if(this.isCheckEmptyCustomer()) return
        let id
        do {
            id = readlineSync.question("Input ID");
            console.log(this.findInfoByID(+id) === -1?"Please enter the correct ID":"")
        } while (this.findInfoByID(+id) === -1);
        let index = this.findInfoByID(+id)
        let name;
        do {
            name = readlineSync.question("Input Mouse Name");
            console.log(!nameRegex1.validate(name)?"Please enter the correct Mouse name":"")
        } while (!nameRegex1.validate(name));
        let type = readlineSync.question("Input Type")
        let vaccine = false
        let clean = false
        let eatFull= false
        this.customerList[index].addMouse(name,type,vaccine,clean,eatFull)
    }
    findPet():void{
        if(this.isCheckEmptyCustomer()) return
        let id
        do {
            id = readlineSync.question("Input ID");
            console.log(this.findInfoByID(+id) === -1?"Please enter the correct ID":"")
        } while (this.findInfoByID(+id) === -1);
        let index = this.findInfoByID(+id)
        if(this.customerList[index].isEmptyPet()){
            console.log(`this pet list is empty`)
            return;
        }
        let petName;
        do {
            petName = readlineSync.question("Input pet name");
            console.log(this.customerList[index].FindPetByName(petName)===-1?"Please enter the correct pet name":"")
        } while (this.customerList[index].FindPetByName(petName)===-1);
        console.table(this.customerList[index].findPet(petName))
    }

    fixInfoPet():void{
        if(this.isCheckEmptyCustomer()) return
        let id
        do {
            id = readlineSync.question("Input ID");
            console.log(this.findInfoByID(+id) === -1?"Please enter the correct ID":"")
        } while (this.findInfoByID(+id) === -1);
        let index = this.findInfoByID(+id)
        if(this.customerList[index].isEmptyPet()){
            console.log(`this pet list is empty`)
            return;
        }
        let petName;
        do {
            petName = readlineSync.question("Input pet name");
            console.log(this.customerList[index].FindPetByName(petName)===-1?"Please enter the correct  pet name":"")
        } while (this.customerList[index].FindPetByName(petName)===-1);
        let newName;
        do {
            newName = readlineSync.question("Input new Pet Name");
            console.log(!nameRegex1.validate(newName)?"Please enter the correct new name":"")
        } while (!nameRegex1.validate(newName));
        let type=readlineSync.question("Input Type")
        let vaccinated=false
        let clean=false
        let eatFull=false
        this.customerList[index].fixInfoPet(petName,newName,type,vaccinated,clean,eatFull)
    }
    deletePet():void{
        if(this.isCheckEmptyCustomer()) return
        let id
        do {
            id = readlineSync.question("Input ID");
            console.log(this.findInfoByID(+id) === -1?"Please enter the correct ID":"")
        } while (this.findInfoByID(+id) === -1);
        let index = this.findInfoByID(+id)
        if(this.customerList[index].isEmptyPet()){
            console.log(`this pet list is empty`)
            return;
        }
        let petName;
        do {
            petName = readlineSync.question("Input pet name");
            console.log(this.customerList[index].FindPetByName(petName)===-1?"Please enter the correct  pet name":"")
        } while (this.customerList[index].FindPetByName(petName)===-1);
         this.customerList[index].deletePet(petName)
    }
    bill():void{
        if(this.isCheckEmptyCustomer()) return
        let id
        do {
            id = readlineSync.question("Input ID");
            console.log(this.findInfoByID(+id) === -1?"Please enter the correct ID":"")
        } while (this.findInfoByID(+id) === -1);
        let index = this.findInfoByID(+id)
        console.table(this.customerList[index].getPetList())
        console.log("the price that customer id: "+id+" "+"has to pay is :"+this.customerList[index].customerTotalMoney())

    }
    pay():void{
        if(this.isCheckEmptyCustomer()) return
        let id
        do {
            id = readlineSync.question("Input ID");
            console.log(this.findInfoByID(+id) === -1?"Please enter the correct ID":"")
        } while (this.findInfoByID(+id) === -1);
        let index = this.findInfoByID(+id)
        this.revenue+=this.customerList[index].customerTotalMoney()
        this.customerList.splice(index, 1)
    }
    feedPet():void{
        if(this.isCheckEmptyCustomer()) return
        let id
        do {
            id = readlineSync.question("Input ID");
            console.log(this.findInfoByID(+id) === -1?"Please enter the correct ID":"")
        } while (this.findInfoByID(+id) === -1);
        let index = this.findInfoByID(+id)
        if(this.customerList[index].isEmptyPet()){
            console.log(`this pet list is empty`)
            return;
        }
        let petName;
        do {
            petName = readlineSync.question("Input pet name");
            console.log(this.customerList[index].FindPetByName(petName)===-1?"Please enter the correct  pet name":"")
        } while (this.customerList[index].FindPetByName(petName)===-1);
        this.customerList[index].findPet(petName).feed()
    }
    showerPet():void{
        if(this.isCheckEmptyCustomer()) return
        let id
        do {
            id = readlineSync.question("Input ID");
            console.log(this.findInfoByID(+id) === -1?"Please enter the correct ID":"")
        } while (this.findInfoByID(+id) === -1);
        let index = this.findInfoByID(+id)
        if(this.customerList[index].isEmptyPet()){
            console.log(`this pet list is empty`)
            return;
        }
        let petName;
        do {
            petName = readlineSync.question("Input pet name");
            console.log(this.customerList[index].FindPetByName(petName)===-1?"Please enter the correct  pet name":"")
        } while (this.customerList[index].FindPetByName(petName)===-1);
        this.customerList[index].findPet(petName).showerPet()
    }
    vaccinationPet():void{
        if(this.isCheckEmptyCustomer()) return
        let id
        do {
            id = readlineSync.question("Input ID");
            console.log(this.findInfoByID(+id) === -1?"Please enter the correct ID":"")
        } while (this.findInfoByID(+id) === -1);
        let index = this.findInfoByID(+id)
        if(this.customerList[index].isEmptyPet()){
            console.log(`this pet list is empty`)
            return;
        }
        let petName;
        do {
            petName = readlineSync.question("Input pet name");
            console.log(this.customerList[index].FindPetByName(petName)===-1?"Please enter the correct  pet name":"")
        } while (this.customerList[index].FindPetByName(petName)===-1);
        this.customerList[index].findPet(petName).vaccination()
    }
    totalRevenue(): void {
        console.log(`totalRevenue: ${this.revenue}`)
    }
}