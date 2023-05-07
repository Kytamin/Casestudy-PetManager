class Menu {
    static mainMenu() {
        console.log('1: Show list customer')
        console.log('2: Add customer')
        console.log('3: Display customer')
        console.log('4: Delete customer')
        console.log('5: Fix info customer')
        console.log('6: Customer options')
        console.log('7: Pet options')
        console.log('8: TotalRevenue')
        console.log('9: Number of customers')
        console.log('0: Exit')
    }

    static customerMenu() {
        console.log('1: Show list pet')
        console.log('2: Add cat')
        console.log('3: Add Dog')
        console.log('4: Add Mouse')
        console.log('5: Find Pet')
        console.log('6: Fix info Pet')
        console.log('7: Delete pet')
        console.log('8: Bill')
        console.log('9: Pay')
        console.log('0: Turn back')
    }
    static petMenu(){
        console.log('1: feedPet')
        console.log('2: showerPet')
        console.log('3: vaccinationPet')
        console.log('0: turn Back')
    }
}

export default Menu;