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

export class CustomerManager {
    customerList: Customer[] = []
    size: number = 0

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
            if (!idRegex1.validate(id)||this.checkIDinList(id)) {
                console.log(`please  re enter the ID`)
            } else {
                check = false;
            }
        } while (!idRegex1.validate(id)||check)

        let name;
        do {
            name = readlineSync.question("Input Name");
            if (!nameRegex1.validate(name)) {
                console.log("Please enter the correct name");
            }
        } while (!nameRegex1.validate(name));
        let phone;
        do {
            phone = readlineSync.question("Input phoneNumber");
            if (!phoneRegex1.validate(phone)) {
                console.log("Please enter the correct phoneNumber");
            }
        } while (!phoneRegex1.validate(phone));
        let address;
        do {
            address = readlineSync.question("Input address");
            if (!addressRegex1.validate(address)) {
                console.log("Please enter the correct Address");
            }
        } while (!addressRegex1.validate(address));

        let customer = new Customer(name, address, phone, id)
        this.customerList.push(customer)
        this.customerList.sort((customer1, customer2) => {
            return customer1.getID() - customer2.getID()
        })
        console.log('Add customer success!')
    }

    displayList(): void {
        if (this.isEmptyCustomer()) {
            console.log('Customer is empty')
        } else {
            console.table(this.customerList)
        }

    }

    isEmptyCustomer() {
        return this.customerList.length == 0;
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
        if(this.isEmptyCustomer()){
            console.log(`Customer list is Empty already`)
            return
        }
        let id
        do {
            id = readlineSync.question("Input ID");

            if (this.findInfoByID(+id) === -1) {
                console.log("Please enter the correct ID");
            }
        } while (this.findInfoByID(+id) === -1);
        let index = this.findInfoByID(+id)
        this.customerList.splice(index, 1)
        this.size--
    }


    fixInfoCustomer(): void {
        if (this.isEmptyCustomer()) {
            console.log('Customer is empty')
            return
        }
        let id
        do {
            id = readlineSync.question("Input ID");

            if (this.findInfoByID(+id) === -1) {
                console.log("Please enter the correct ID");
            }
        } while (this.findInfoByID(+id) === -1);
        let index = this.findInfoByID(+id)
        let name;
        do {
            name = readlineSync.question("Input new Name");
            if (!nameRegex1.validate(name)) {
                console.log("Please enter the correct new name");
            }
        } while (!nameRegex1.validate(name));
        let phone;
        do {
            phone = readlineSync.question("Input  new phoneNumber");
            if (!phoneRegex1.validate(phone)) {
                console.log("Please enter the correct new phoneNumber");
            }
        } while (!phoneRegex1.validate(phone));
        let address;
        do {
            address = readlineSync.question("Input new address");
            if (!addressRegex1.validate(address)) {
                console.log("Please enter the correct Address");
            }
        } while (!addressRegex1.validate(address));
        this.customerList[index].setName(name)
        this.customerList[index].setAddress(address)
        this.customerList[index].setNumberPhone(phone)

    }


    displayCustomer(): void {
        if(this.isEmptyCustomer()){
            console.log(`Customer list is Empty`)
            return
        }
        let id

        do {
            id = readlineSync.question("Input ID");

            if (this.findInfoByID(+id) === -1) {
                console.log("Please enter the correct ID");
            }
        } while (this.findInfoByID(+id) === -1);
        let index = this.findInfoByID(+id)
        console.log(this.customerList[index])
    }



    petListCustomer() :void{
        if(this.isEmptyCustomer()){
            console.log(`Customer list is Empty to do any thing`)
            return
        }
        let id
        do {
            id = readlineSync.question("Input ID");

            if (this.findInfoByID(+id) === -1) {
                console.log("Please enter the correct ID");
            }
        } while (this.findInfoByID(+id) === -1);
        let index = this.findInfoByID(+id)
        if (this.customerList[index].isEmptyPet()) {
            console.log(`List is Empty`)
        } else {
            console.table(this.customerList[index].getPetList())
        }
    }

    addCat(): void {
        if(this.isEmptyCustomer()){
            console.log(`Customer list is Empty to do any thing`)
            return
        }
        let id
        do {
            id = readlineSync.question("Input ID");

            if (this.findInfoByID(+id) === -1) {
                console.log("Please enter the correct ID");
            }
        } while (this.findInfoByID(+id) === -1);
        let index = this.findInfoByID(+id)
        let name;
        do {
            name = readlineSync.question("Input Cat Name");
            if (!nameRegex1.validate(name)) {
                console.log("Please enter the correct Cat name");
            }
        } while (!nameRegex1.validate(name));
        let type = readlineSync.question("Input Type")
        let vaccine = false
        let clean = false
        let eatFull= false
        this.customerList[index].addCat(name,type,vaccine,clean,eatFull)
    }
    addDog():void{
        if(this.isEmptyCustomer()){
            console.log(`Customer list is Empty to do any thing`)
            return
        }
        let id
        do {
            id = readlineSync.question("Input ID");

            if (this.findInfoByID(+id) === -1) {
                console.log("Please enter the correct ID");
            }
        } while (this.findInfoByID(+id) === -1);
        let index = this.findInfoByID(+id)
        let name;
        do {
            name = readlineSync.question("Input Dog Name");
            if (!nameRegex1.validate(name)) {
                console.log("Please enter the correct Dog name");
            }
        } while (!nameRegex1.validate(name));
        let type = readlineSync.question("Input Type")
        let vaccine = false
        let clean = false
        let eatFull= false
        this.customerList[index].addDog(name,type,vaccine,clean,eatFull)
    }
    addMouse():void{
        if(this.isEmptyCustomer()){
            console.log(`Customer list is Empty to do any thing`)
            return
        }
        let id
        do {
            id = readlineSync.question("Input ID");

            if (this.findInfoByID(+id) === -1) {
                console.log("Please enter the correct ID");
            }
        } while (this.findInfoByID(+id) === -1);
        let index = this.findInfoByID(+id)
        let name;
        do {
            name = readlineSync.question("Input Mouse Name");
            if (!nameRegex1.validate(name)) {
                console.log("Please enter the correct Mouse name");
            }
        } while (!nameRegex1.validate(name));
        let type = readlineSync.question("Input Type")
        let vaccine = false
        let clean = false
        let eatFull= false
        this.customerList[index].addMouse(name,type,vaccine,clean,eatFull)
    }
    findPet():void{
        if(this.isEmptyCustomer()){
            console.log(`Customer list is Empty to do any thing`)
            return
        }
        let id
        do {
            id = readlineSync.question("Input ID");

            if (this.findInfoByID(+id) === -1) {
                console.log("Please enter the correct ID");
            }
        } while (this.findInfoByID(+id) === -1);
        let index = this.findInfoByID(+id)
        if(this.customerList[index].isEmptyPet()){
            console.log(`this pet list is empty`)
            return;
        }
        let petName;
        do {
            petName = readlineSync.question("Input pet name");
            if (this.customerList[index].FindPetByName(petName)===-1) {
                console.log("Please enter the correct pet name");
            }
        } while (this.customerList[index].FindPetByName(petName)===-1);
        console.table(this.customerList[index].findPet(petName))
    }
    fixInfoPet(){
        if(this.isEmptyCustomer()){
            console.log(`Customer list is Empty to do any thing`)
            return
        }
        let id
        do {
            id = readlineSync.question("Input ID");

            if (this.findInfoByID(+id) === -1) {
                console.log("Please enter the correct ID");
            }
        } while (this.findInfoByID(+id) === -1);
        let index = this.findInfoByID(+id)
        if(this.customerList[index].isEmptyPet()){
            console.log(`this pet list is empty`)
            return;
        }
        let petName;
        do {
            petName = readlineSync.question("Input pet name");
            if (this.customerList[index].FindPetByName(petName)===-1) {
                console.log("Please enter the correct  pet name");
            }
        } while (this.customerList[index].FindPetByName(petName)===-1);
        let newName;
        do {
            newName = readlineSync.question("Input new Pet Name");
            if (!nameRegex1.validate(newName)) {
                console.log("Please enter the correct new name");
            }
        } while (!nameRegex1.validate(newName));
        let type=readlineSync.question("Input Type")
        let vaccinated=false
        let clean=false
        let eatFull=false
        this.customerList[index].fixInfoPet(petName,newName,type,vaccinated,clean,eatFull)
    }
    deletePet(){
        if(this.isEmptyCustomer()){
            console.log(`Customer list is Empty to do any thing`)
            return
        }
        let id
        do {
            id = readlineSync.question("Input ID");

            if (this.findInfoByID(+id) === -1) {
                console.log("Please enter the correct ID");
            }
        } while (this.findInfoByID(+id) === -1);
        let index = this.findInfoByID(+id)
        if(this.customerList[index].isEmptyPet()){
            console.log(`this pet list is empty`)
            return;
        }
        let petName;
        do {
            petName = readlineSync.question("Input pet name");
            if (this.customerList[index].FindPetByName(petName)===-1) {
                console.log("Please enter the correct  pet name");
            }
        } while (this.customerList[index].FindPetByName(petName)===-1);
         this.customerList[index].deletePet(petName)
    }
    pay(){
        if(this.isEmptyCustomer()){
            console.log(`Customer list is Empty to do any thing`)
            return
        }
        let id
        do {
            id = readlineSync.question("Input ID");

            if (this.findInfoByID(+id) === -1) {
                console.log("Please enter the correct ID");
            }
        } while (this.findInfoByID(+id) === -1);
        let index = this.findInfoByID(+id)
        console.log("the price that customer id: "+id+" "+"has to pay is :"+this.customerList[index].customerTotalMoney())
    }
    feedPet(){
        if(this.isEmptyCustomer()){
            console.log(`Customer list is Empty to do any thing`)
            return
        }
        let id
        do {
            id = readlineSync.question("Input ID");

            if (this.findInfoByID(+id) === -1) {
                console.log("Please enter the correct ID");
            }
        } while (this.findInfoByID(+id) === -1);
        let index = this.findInfoByID(+id)
        if(this.customerList[index].isEmptyPet()){
            console.log(`this pet list is empty`)
            return;
        }
        let petName;
        do {
            petName = readlineSync.question("Input pet name");
            if (this.customerList[index].FindPetByName(petName)===-1) {
                console.log("Please enter the correct  pet name");
            }
        } while (this.customerList[index].FindPetByName(petName)===-1);
        this.customerList[index].findPet(petName).feed()
    }
    showerPet(){
        if(this.isEmptyCustomer()){
            console.log(`Customer list is Empty to do any thing`)
            return
        }
        let id
        do {
            id = readlineSync.question("Input ID");

            if (this.findInfoByID(+id) === -1) {
                console.log("Please enter the correct ID");
            }
        } while (this.findInfoByID(+id) === -1);
        let index = this.findInfoByID(+id)
        if(this.customerList[index].isEmptyPet()){
            console.log(`this pet list is empty`)
            return;
        }
        let petName;
        do {
            petName = readlineSync.question("Input pet name");
            if (this.customerList[index].FindPetByName(petName)===-1) {
                console.log("Please enter the correct  pet name");
            }
        } while (this.customerList[index].FindPetByName(petName)===-1);
        this.customerList[index].findPet(petName).showerPet()
    }
    vaccinationPet(){
        if(this.isEmptyCustomer()){
            console.log(`Customer list is Empty to do any thing`)
            return
        }
        let id
        do {
            id = readlineSync.question("Input ID");

            if (this.findInfoByID(+id) === -1) {
                console.log("Please enter the correct ID");
            }
        } while (this.findInfoByID(+id) === -1);
        let index = this.findInfoByID(+id)
        if(this.customerList[index].isEmptyPet()){
            console.log(`this pet list is empty`)
            return;
        }
        let petName;
        do {
            petName = readlineSync.question("Input pet name");
            if (this.customerList[index].FindPetByName(petName)===-1) {
                console.log("Please enter the correct  pet name");
            }
        } while (this.customerList[index].FindPetByName(petName)===-1);
        this.customerList[index].findPet(petName).vaccination()
    }
    totalRevenue(): void {
        let sum = 0
        for (let i = 0; i < this.customerList.length; i++) {
            sum += this.customerList[i].customerTotalMoney()
        }
        console.log(`Current TotalRevenue : ${sum}`)
    }



}