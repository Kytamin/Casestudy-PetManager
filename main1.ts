import {CustomerManager} from "./CustomerManager";
let customerManager1 = new CustomerManager()

function petSelection() {
    const readlineSync = require('readline-sync')
    let Options=["feed","showerPet","vaccination"]
    let input= readlineSync.keyInSelect(Options,"choose a option",{cancel:"turnBack"})+1
    switch(input){
        case 0:
            customerSelection()
            break;
        case 1: {
            let id = +readlineSync.question("inputID")
            let petName = readlineSync.question("input petName")
            customerManager1.displayCustomer(id).findPet(petName).feed()
            customerSelection()
            break;
        }
        case 2:{
            let id = +readlineSync.question("inputID")
            let petName = readlineSync.question("input petName")
            customerManager1.displayCustomer(id).findPet(petName).showerPet()
            customerSelection()
            break;
        }
        case 3:{
            let id = +readlineSync.question("inputID")
            let petName = readlineSync.question("input petName")
            customerManager1.displayCustomer(id).findPet(petName).vaccination()
            customerSelection()
            break;
        }

    }


}
function customerSelection() {
    const readlineSync = require('readline-sync')
    let Options = ["addCat", "addDog", "addMouse", "getPetList", "findPet", "deletePet", "fixInfoPet", "getTotalMoney"]
    let input = readlineSync.keyInSelect(Options, "choose a option",{cancel:"turnBack"}) + 1
    switch (input) {
        case 0:
            start()
            break;
        case 1: {
            let id = +readlineSync.question("inputID")
            let petName = readlineSync.question("input petName")
            let type = readlineSync.question("input Type")
            let vaccine = false
            let clean = false
            let eatFull = false
            customerManager1.displayCustomer(id).addCat(petName, type, vaccine, clean, eatFull)
            customerSelection()
            break;
        }

        case 2:{
            let id = +readlineSync.question("inputID")
            let petName = readlineSync.question("input petName")
            let type = readlineSync.question("input Type")
            let vaccine = false
            let clean = false
            let eatFull = false
            customerManager1.displayCustomer(id).addDog(petName, type, vaccine, clean, eatFull)
            customerSelection()
            break;
        }
        case 3:{
            let id = +readlineSync.question("inputID")
            let petName = readlineSync.question("input petName")
            let type = readlineSync.question("input Type")
            let vaccine = false
            let clean = false
            let eatFull = false
            customerManager1.displayCustomer(id).addMouse(petName, type, vaccine, clean, eatFull)
            customerSelection()
            break;
        }
        case 4: {
            let id = +readlineSync.question("inputID")
            console.table(customerManager1.displayCustomer(id).getPetList())
            customerSelection()
            break;
        }
        case 5:{
            let id = +readlineSync.question("inputID")
            let petName=readlineSync.question("input PetName")
            console.log(customerManager1.displayCustomer(id).findPet(petName))
            petSelection()
            break;
        }
        case 6:{
            let id = +readlineSync.question("inputID")
            let petName=readlineSync.question("input PetName")
            customerManager1.displayCustomer(id).deletePet(petName)
            customerSelection()
            break;
        }
        case 7:{
            let id = +readlineSync.question("inputID")
            let petName=readlineSync.question("input petName")
            let newName=readlineSync.question("input new petName")
            let type=readlineSync.question("input Type")
            let vaccinated=false
            let clean=false
            let eatFull=false
            customerManager1.displayCustomer(id).fixInfoPet(petName,newName,type,vaccinated,clean,eatFull)
            customerSelection()
            break;
        }
        case 8:{
            let id = +readlineSync.question("inputID")
            console.log("total money customer has id:" +id +"pay:"+customerManager1.displayCustomer(id).getTotalMoney())
            customerSelection()
            break;
        }

    }
}


function start() {
    const readlineSync = require('readline-sync')
    let Options = ["addCustomer", "displayListCustomer", "deleteCustomer", "fixInfo", "FindCustomer", "totalRevenue",]

    let input = readlineSync.keyInSelect(Options, "choose a option") + 1
    switch (input) {
        case 1: {
            let customerName = readlineSync.question(" Input Name")
            let address = readlineSync.question("Input Address")
            let numberPhone = readlineSync.question("Input PhoneNumber")
            let id = +readlineSync.question("Input ID")
            customerManager1.addCustomer(customerName, address, numberPhone, id)
            start()
            break;
        }
        case 2:
            console.table(customerManager1.displayList())
            start()
            break;
        case 3: {
            let id = +readlineSync.question("Input ID")
            customerManager1.deleteCustomer(id)
            start()
            break;
        }
        case 4: {
            let id = +readlineSync.question("Input ID")
            let name = readlineSync.question("Input new Name")
            let address = readlineSync.question("Input new Address")
            let numberPhone = readlineSync.question("Input new numberPhone")
            customerManager1.fixInfo(id, name, address, numberPhone)
            start()
            break;
        }
        case 5: {
            let id = +readlineSync.question("Input ID")
            console.log(customerManager1.displayCustomer(id))
            customerSelection()
            break;
        }
        case 6: {
            console.log("totalRevenue:"+customerManager1.totalRevenue())
            start()
            break;
        }

    }
}
start()