import {Customer} from "./Customer";
import {Cat} from "./typeofpet/Cat";
import {Dog} from "./typeofpet/Dog";
import {Mouse} from "./typeofpet/Mouse";

export class CustomerManager {
    customerList: Customer[] = []
    size: number = 0
    checkIDinList(id: number): boolean {
        let count = 0
        this.customerList.forEach((element) => {
            if (element.getID() === id) {
                count++
            }
        })
        if (count > 0) {
            return true
        }
        return false
    }

    addCustomer(name:string,address:string,numberPhone:string,id:number):void{
        if(this.checkIDinList(id)){
            console.log(`id:${id} is Existed `)
        } else {
            this.customerList.push( new Customer(name, address, numberPhone, id))
        }
        this.customerList.sort((customer1,customer2)=>{
            return customer1.getID()-customer2.getID()
        })
    }

    displayList(): Customer[] {
        return this.customerList
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

    deleteCustomer(id: number) {
        this.size--
        let index = this.findInfoByID(id)
        if (index !== -1) {
            this.customerList.splice(index, 1)
        }else {
            console.log("this customer is not Exist")
        }
    }

    fixInfo(id: number, name: string, address: string, numberPhone: string ): void {
        let index = this.findInfoByID(id)
        if (index !== -1) {
            this.customerList[index].setName(name)
            this.customerList[index].setAddress(address)
            this.customerList[index].setNumberPhone(numberPhone)

        }else {
            console.log(`this Customer is not Exist`)
        }
    }



    displayCustomer(id: number): Customer {

        let index = this.findInfoByID(id)
        if (index !== -1) {
            let customer= this.customerList[index]
            if(customer!==undefined){
                return customer
            }else {
                console.log("there is no customer to display")
            }

        }
        return this.customerList[index]
    }

    totalRevenue():number{
        let sum=0
        for (let i = 0; i < this.customerList.length; i++) {
            sum+= this.customerList[i].getTotalMoney()
        }
        return sum
    }
}