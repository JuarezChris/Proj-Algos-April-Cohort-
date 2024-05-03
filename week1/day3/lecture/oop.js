class Tamagotchi{
    constructor(name){
        this.name = name
        this.health = 100
        this.itemList = []
        this.equip = ""
    }

    sayHello(){
        console.log(`${this.name} says hello!`)
    }

    storeItem(item){
        this.itemList.push(item)
    }

    displayItems(){
        console.log(`${this.name} items: ${this.itemList}`)
    }

    equipItem(item){
        if(this.itemList.includes(item)){
            this.itemList = this.itemList.filter( eqiupment => eqiupment != item)
        }
        if(this.equip){
            this.itemList.push(this.equip)
            this.equip = item
        }
        this.equip = item
        console.log(this.equip)
    }
}

let Quinn = new Tamagotchi("Quinn")
let Hoshi = new Tamagotchi("Hoshi")

Quinn.sayHello()
Hoshi.sayHello()

Quinn.storeItem("Umbrella")
Quinn.storeItem("Hamburger")

Hoshi.storeItem("Dog Collar")
Hoshi.storeItem("Chew Toy")

// Quinn.displayItems()
// Hoshi.displayItems()

Quinn.equipItem("Laser")
Quinn.equipItem("Hamburger")

Quinn.displayItems()


// console.log(Quinn.name)