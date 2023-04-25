import {CustomerManager} from "./CustomerManager";
import {Cat} from "./typeofpet/Cat";
import {Dog} from "./typeofpet/Dog";
import {Mouse} from "./typeofpet/Mouse";
import {Type} from "./Pet";
let customerManager1= new CustomerManager()
customerManager1.addCustomer("A","AAAA","0938288484",1,new Cat("Tom",Type.Cat,false,false,false,false))
customerManager1.addCustomer("B","BBBB","1242363233",2,new Mouse("Jerry",Type.mouse, false,false,false,false))
customerManager1.addCustomer("C","CCCC","7372124122",7,new Dog("Spite",Type.Dog, false,false,false,false))
customerManager1.addCustomer("D","DDDD","0433531213",9,new Dog("Yasuo",Type.Dog, false,false,false,false))
customerManager1.addCustomer("E","EEEE","3667133888",3,new Cat("Yone",Type.Cat, false,false,false,false))
console.table(customerManager1.displayList())
customerManager1.displayPetOfCustomer(1).feed()
customerManager1.displayPetOfCustomer(1).deWorming()
customerManager1.displayPetOfCustomer(2).vaccination()
console.log(customerManager1.displayCustomer(1).getTotalMoney())
console.log(customerManager1.displayCustomer(2).getTotalMoney())
console.log(customerManager1.totalRevenue())