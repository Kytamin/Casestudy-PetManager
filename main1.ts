import {CustomerManager} from "./CustomerManager";
import {nameRegex} from "./regexp/name";
import {addressRegex} from "./regexp/address";
import {phoneRegex} from "./regexp/phonenumber";
import {idRegex} from "./regexp/id";
let customerManager1 = new CustomerManager()
let nameRegex1 = new nameRegex()
let addressRegex1 = new addressRegex()
let phoneRegex1 = new phoneRegex()
let idRegex1 = new idRegex()

function petSelection() {
    const readlineSync = require('readline-sync')
    let Options = ["feed", "showerPet", "vaccination"]
    let input = readlineSync.keyInSelect(Options, "choose an option", {cancel: "turnBack"}) + 1
    switch (input) {
        case 0:
            customerSelection()
            break;
        case 1: {
            let id
            do {
                id = readlineSync.question("Input ID");
                if (!idRegex1.validate(id)||customerManager1.findInfoByID(+id)===-1) {
                    console.log("Please enter the correct ID");
                }
            } while (!idRegex1.validate(id)||customerManager1.findInfoByID(+id)===-1);
            let petName;
            do {
                petName = readlineSync.question("Input pet name");
                if (!nameRegex1.validate(petName)||customerManager1.findInfoByID(+id)===-1||customerManager1.displayCustomer(+id).FindPetByName(petName)===-1) {
                    console.log("Please enter the correct pet name");
                }
            } while (!nameRegex1.validate(petName)||customerManager1.findInfoByID(+id)===-1||customerManager1.displayCustomer(+id).FindPetByName(petName)===-1);
            customerManager1.displayCustomer(+id).findPet(petName).feed()
            petSelection()
            break;
        }
        case 2: {
            let id
            do {
                id = readlineSync.question("Input ID");
                if (!idRegex1.validate(id)||customerManager1.findInfoByID(+id)===-1) {
                    console.log("Please enter the correct ID");
                }
            } while (!idRegex1.validate(id)||customerManager1.findInfoByID(+id)===-1);
            let petName;
            do {
                petName = readlineSync.question("Input pet name");
                if (!nameRegex1.validate(petName)||customerManager1.findInfoByID(+id)===-1||customerManager1.displayCustomer(+id).FindPetByName(petName)===-1) {
                    console.log("Please enter the correct pet name");
                }
            } while (!nameRegex1.validate(petName)||customerManager1.findInfoByID(+id)===-1||customerManager1.displayCustomer(+id).FindPetByName(petName)===-1);
            customerManager1.displayCustomer(+id).findPet(petName).showerPet()
            petSelection()
            break;
        }
        case 3: {
            let id
            do {
                id = readlineSync.question("Input ID");
                if (!idRegex1.validate(id)||customerManager1.findInfoByID(+id)===-1) {
                    console.log("Please enter the correct ID");
                }
            } while (!idRegex1.validate(id)||customerManager1.findInfoByID(+id)===-1);
            let petName;
            do {
                petName = readlineSync.question("Input pet name");
                if (!nameRegex1.validate(petName)||customerManager1.findInfoByID(+id)===-1||customerManager1.displayCustomer(+id).FindPetByName(petName)===-1) {
                    console.log("Please enter the correct pet name");
                }
            } while (!nameRegex1.validate(petName)||customerManager1.findInfoByID(+id)===-1||customerManager1.displayCustomer(+id).FindPetByName(petName)===-1);
            customerManager1.displayCustomer(+id).findPet(petName).vaccination()
            petSelection()
            break;
        }

    }


}

function customerSelection() {
    const readlineSync = require('readline-sync')
    let Options = ["addCat", "addDog", "addMouse", "getPetList", "findPet", "deletePet", "fixInfoPet", "getTotalMoney","petSelections"]
    let input = readlineSync.keyInSelect(Options, "choose an option", {cancel: "turnBack"}) + 1
    switch (input) {
        case 0:
            start()
            break;
        case 1: {
            let id
            do {
                id = readlineSync.question("Input ID");
                if (!idRegex1.validate(id)||customerManager1.findInfoByID(+id)===-1) {
                    console.log("Please enter the correct ID");
                }
            } while (!idRegex1.validate(id)||customerManager1.findInfoByID(+id)===-1);
            let petName;
            do {
                petName = readlineSync.question("Input pet name");
                if (!nameRegex1.validate(petName)) {
                    console.log("Please enter the correct type of pet name");
                }
            } while (!nameRegex1.validate(petName));
            let type = readlineSync.question("input Type")
            let vaccine = false
            let clean = false
            let eatFull = false
            customerManager1.displayCustomer(+id).addCat(petName, type, vaccine, clean, eatFull)
            customerSelection()
            break;
        }

        case 2: {
            let id
            do {
                id = readlineSync.question("Input ID");
                if (!idRegex1.validate(id)||customerManager1.findInfoByID(+id)===-1) {
                    console.log("Please enter the correct ID");
                }
            } while (!idRegex1.validate(id)||customerManager1.findInfoByID(+id)===-1);
            let petName;
            do {
                petName = readlineSync.question("Input pet name");
                if (!nameRegex1.validate(petName)) {
                    console.log("Please enter the correct type of pet name");
                }
            } while (!nameRegex1.validate(petName));
            let type = readlineSync.question("input Type")
            let vaccine = false
            let clean = false
            let eatFull = false
            customerManager1.displayCustomer(+id).addDog(petName, type, vaccine, clean, eatFull)
            customerSelection()
            break;
        }
        case 3: {
            let id
            do {
                id = readlineSync.question("Input ID");
                if (!idRegex1.validate(id)||customerManager1.findInfoByID(+id)===-1) {
                    console.log("Please enter the correct ID");
                }
            } while (!idRegex1.validate(id)||customerManager1.findInfoByID(+id)===-1);
            let petName;
            do {
                petName = readlineSync.question("Input pet name");
                if (!nameRegex1.validate(petName)) {
                    console.log("Please enter the correct type of pet name");
                }
            } while (!nameRegex1.validate(petName));
            let type = readlineSync.question("input Type")
            let vaccine = false
            let clean = false
            let eatFull = false
            customerManager1.displayCustomer(+id).addMouse(petName, type, vaccine, clean, eatFull)
            customerSelection()
            break;
        }
        case 4: {
            let id
            do {
                id = readlineSync.question("Input ID");
                if (!idRegex1.validate(id)||customerManager1.findInfoByID(+id)===-1) {
                    console.log("Please enter the correct ID");
                }
            } while (!idRegex1.validate(id)||customerManager1.findInfoByID(+id)===-1);
            console.table(customerManager1.displayCustomer(+id).getPetList())
            customerSelection()
            break;
        }
        case 5: {
            let id
            do {
                id = readlineSync.question("Input ID");
                if (!idRegex1.validate(id)||customerManager1.findInfoByID(+id)===-1) {
                    console.log("Please enter the correct ID");
                }
            } while (!idRegex1.validate(id)||customerManager1.findInfoByID(+id)===-1);
            let petName;
            do {
                petName = readlineSync.question("Input pet name");
                if (!nameRegex1.validate(petName)||customerManager1.findInfoByID(+id)===-1||customerManager1.displayCustomer(+id).FindPetByName(petName)===-1) {
                    console.log("Please enter the correct type of pet name");
                }
            } while (!nameRegex1.validate(petName)||customerManager1.findInfoByID(+id)===-1||customerManager1.displayCustomer(+id).FindPetByName(petName)===-1);
            console.log(customerManager1.displayCustomer(+id).findPet(petName))
            customerSelection()
            break;
        }
        case 6: {
            let id
            do {
                id = readlineSync.question("Input ID");
                if (!idRegex1.validate(id)||customerManager1.findInfoByID(+id)===-1) {
                    console.log("Please enter the correct ID");
                }
            } while (!idRegex1.validate(id)||customerManager1.findInfoByID(+id)===-1);
            let petName;
            do {
                petName = readlineSync.question("Input pet name");
                if (!nameRegex1.validate(petName)||customerManager1.findInfoByID(+id)===-1||customerManager1.displayCustomer(+id).FindPetByName(petName)===-1) {
                    console.log("Please enter the correct type of pet name");
                }
            } while (!nameRegex1.validate(petName)||customerManager1.findInfoByID(+id)===-1||customerManager1.displayCustomer(+id).FindPetByName(petName)===-1);
            customerManager1.displayCustomer(+id).deletePet(petName)
            customerSelection()
            break;
        }
        case 7: {
            let id
            do {
                id = readlineSync.question("Input ID");
                if (!idRegex1.validate(id)||customerManager1.findInfoByID(+id)===-1) {
                    console.log("Please enter the correct ID");
                }
            } while (!idRegex1.validate(id)||customerManager1.findInfoByID(+id)===-1);
            let petName;
            do {
                petName = readlineSync.question("Input pet name");
                if (!nameRegex1.validate(petName)||customerManager1.findInfoByID(+id)===-1||customerManager1.displayCustomer(+id).FindPetByName(petName)===-1) {
                    console.log("Please enter the correct type of pet name");
                }
            } while (!nameRegex1.validate(petName)||customerManager1.findInfoByID(+id)===-1||customerManager1.displayCustomer(+id).FindPetByName(petName)===-1);

            let newName;
            do {
                newName = readlineSync.question("Input new Name");
                if (!nameRegex1.validate(newName)) {
                    console.log("Please enter the correct name");
                }
            } while (!nameRegex1.validate(newName));
            let type = readlineSync.question("input Type")
            let vaccinated = false
            let clean = false
            let eatFull = false
            customerManager1.displayCustomer(+id).fixInfoPet(petName, newName, type, vaccinated, clean, eatFull)
            customerSelection()
            break;
        }
        case 8: {
            let id
            do {
                id = readlineSync.question("Input ID");
                if (!idRegex1.validate(id)||customerManager1.findInfoByID(+id)===-1) {
                    console.log("Please enter the correct ID");
                }
            } while (!idRegex1.validate(id)||customerManager1.findInfoByID(+id)===-1);
            console.log("total money customer has id:" + id + "pay:" + customerManager1.displayCustomer(+id).getTotalMoney())
            customerSelection()
            break;
        }
        case 9:
            petSelection()
            break;

    }
}


function start() {
    const readlineSync = require('readline-sync')
    let Options = ["addCustomer", "displayListCustomer", "deleteCustomer", "fixInfo", "FindCustomer", "totalRevenue","customerSelection"]

    let input = readlineSync.keyInSelect(Options, "choose an option") + 1
    switch (input) {
        case 1: {
            let customerName;
            do {
                customerName = readlineSync.question("Input Name");
                if (!nameRegex1.validate(customerName)) {
                    console.log("Please enter the correct name");
                }
            } while (!nameRegex1.validate(customerName));

            let address;
            do {
                address = readlineSync.question("Input address");
                if (!addressRegex1.validate(address)) {
                    console.log("Please enter the correct Address");
                }
            } while (!addressRegex1.validate(address));

            let numberPhone;
            do {
                numberPhone = readlineSync.question("Input phoneNumber");
                if (!phoneRegex1.validate(numberPhone)) {
                    console.log("Please enter the correct phoneNumber");
                }
            } while (!phoneRegex1.validate(numberPhone));

            let id
            do {
                id = readlineSync.question("Input ID");
                if (!idRegex1.validate(id)) {
                    console.log("Please enter the correct ID");
                }
            } while (!idRegex1.validate(id));
            customerManager1.addCustomer(customerName, address, numberPhone, +id)
            start()
            break;
        }
        case 2:
            console.table(customerManager1.displayList())
            start()
            break;
        case 3: {
            let id
            do {
                id = readlineSync.question("Input ID");
                if (!idRegex1.validate(id)||customerManager1.findInfoByID(+id)===-1) {
                    console.log("Please enter the correct ID");
                }
            } while (!idRegex1.validate(id)||customerManager1.findInfoByID(+id)===-1);
            customerManager1.deleteCustomer(+id)
            start()
            break;
        }
        case 4: {
            let id
            do {
                id = readlineSync.question("Input ID");
                if (!idRegex1.validate(id)||customerManager1.findInfoByID(+id)===-1) {
                    console.log("Please enter the correct ID");
                }
            } while (!idRegex1.validate(id)||customerManager1.findInfoByID(+id)===-1);
            let newName
            do {
                newName = readlineSync.question("Input new Name");
                if (!nameRegex1.validate(newName)) {
                    console.log("Please enter the correct name");
                }
            } while (!nameRegex1.validate(newName));

            let address;
            do {
                address = readlineSync.question("Input address");
                if (!addressRegex1.validate(address)) {
                    console.log("Please enter the correct Address");
                }
            } while (!addressRegex1.validate(address));

            let numberPhone;
            do {
                numberPhone = readlineSync.question("Input phoneNumber");
                if (!phoneRegex1.validate(numberPhone)) {
                    console.log("Please enter the correct phoneNumber");
                }
            } while (!phoneRegex1.validate(numberPhone));

            customerManager1.fixInfo(+id, newName, address, numberPhone)
            start()
            break;
        }
        case 5: {
            let id
            do {
                id = readlineSync.question("Input ID");
                if (!idRegex1.validate(id)||customerManager1.findInfoByID(+id)===-1) {
                    console.log("Please enter the correct ID");
                }
            } while (!idRegex1.validate(id)||customerManager1.findInfoByID(+id)===-1);
            console.log(customerManager1.displayCustomer(+id))
            break;
        }
        case 6: {
            console.log("totalRevenue:" + customerManager1.totalRevenue())
            start()
            break;
        }
        case 7:
            customerSelection()
            break;
    }
}
start()