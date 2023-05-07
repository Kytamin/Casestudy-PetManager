import {CustomerManager} from "./CustomerManager";
import Menu from "./Menu";
const readlineSync = require('readline-sync')
let customerManager = new CustomerManager();
let flagApp = true;

function start(): void {
    while (flagApp) {
        Menu.mainMenu();
        let number = +readlineSync.question('Chose option: ')
        switch (number) {
            case 1:
                customerManager.displayList();
                start()
                break;
            case 2:
                customerManager.addCustomer();
                start()
                break;
            case 3:
                customerManager.displayCustomer()
                start()
                break;
            case 4:
                customerManager.deleteCustomer()
                start()
                break;
            case 5:
                customerManager.fixInfoCustomer()
                start()
                break;
            case 6:
                customerManager.isCheckEmptyCustomer() ? start() : customer()
                break;
            case 7:
                customerManager.isCheckEmptyCustomer() ? start() : pet()
                break;
            case 8:
                customerManager.totalRevenue()
                start()
                break;
            case 9:
                customerManager.numberOfCustomers()
                break;
            default:
                flagApp = false;
        }
    }
}

function customer() {
    while (flagApp) {
        Menu.customerMenu()
        let number = +readlineSync.question('Chose option: ')
        switch (number) {
            case 0:
                start()
                break;
            case 1:
                customerManager.petListCustomer()
                customer()
                break;

            case 2:
                customerManager.addCat()
                customer()
                break;
            case 3:
                customerManager.addDog()
                customer()
                break;
            case 4:
                customerManager.addMouse()
                customer()
                break;
            case 5:
                customerManager.findPet()
                customer()
                break;
            case 6:
                customerManager.fixInfoPet()
                customer()
            case 7:
                customerManager.deletePet()
                customer()
                break;
            case 8:
                customerManager.bill()
                customer()
                break;
            case 9:customerManager.pay()
                customer()
                break;
        }

    }
}

function pet() {
    while (flagApp) {
        Menu.petMenu()
        let number = +readlineSync.question('Chose option: ')
        switch (number) {
            case 0:
                start()
                break;
            case 1:
                customerManager.feedPet()
                pet()
                break;
            case 2:
                customerManager.showerPet()
                pet()
                break;
            case 3:
                customerManager.vaccinationPet()
                pet()
                break;
        }
    }

}

start();