import {CustomerManager} from "./CustomerManager";
import {Pet} from "./Pet";
import {Cat} from "./typeofpet/Cat";
import {Dog} from "./typeofpet/Dog";
import {Mouse} from "./typeofpet/Mouse";
const readlineSync = require('readline-sync')
let Options = ["addCustomer", "displayList", "checkIDinList", "deleteCustomer", "fixInfo", "displayCustomer", "totalRevenue",]
let customerManager1= new CustomerManager()
let input = readlineSync.keyInSelect(Options,"choose method")+1
switch (input){

    case 1:
        let customerName = readlineSync.question(" nhập tên")
        let address=readlineSync.question("nhập địa chỉ")
        let numberPhone=readlineSync.question("nhập sdt")
        let id=readlineSync.question("nhập ID")
        let pet=readlineSync.question("nhập pet")
    // let pet=new Cat()|new Dog()|new Mouse()
    // customerManager1.addCustomer(customerName,address,numberPhone,id)

}