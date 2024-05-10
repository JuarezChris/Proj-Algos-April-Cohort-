class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SLL{
    constructor(){
        this.head = null
    }

    addToEnd(newNode){
        if(this.head == null){
            this.head = newNode
        }
        else{
            let currentNode = this.head
            while(currentNode.next != null){
                currentNode = currentNode.next
            }
            currentNode.next = newNode
        }
        return this
    }

    display(){
        let currentNode = this.head
        while(currentNode){
            console.log(currentNode.val)
            currentNode = currentNode.next
        }
    }

    addFront(newNode){
        if(this.head == null){
            this.head = newNode
        }
        let temp = this.head 
        this.head = newNode
        newNode.next = temp
        return this
    }

    contains(value){
        if(this.head == null){
            console.log("List is empty!")
            return this
        }
        let currentNode = this.head
        while(currentNode.val != value){
            currentNode = currentNode.next
        }
        if(currentNode.val == value){
            console.log(`Found your value of ${value}`)
            return this
        }else{
            console.log("Value not found")
        }
        return this
    }

    length(){
        if(this.head == null){
            console.log("List is empty!")
            return 0
        }
        let count = 0
        let currentNode = this.head
        while(currentNode){
            count++
            currentNode = currentNode.next
        }
        console.log(count)
        return count
    }

    removeEnd(){
        if(this.head == null){
            console.log("List is empty!")
            return this
        }
        let currentNode = this.head
        while(currentNode.next.next != null){
            currentNode = currentNode.next
        }
        currentNode.next = null
        return this
    }

    removeFront(){
        if(this.head == null){
            console.log("List is empty!")
            return this
        }
        let temp = this.head.next
        this.head.next = null
        this.head = temp
        return this
    }
}

let nodeOne = new Node(5)
let nodeTwo = new Node(10)
let nodeThree = new Node(20)
let nodeFour = new Node(1)

let sll = new SLL()

sll.addToEnd(nodeOne)
sll.addToEnd(nodeTwo)
sll.addToEnd(nodeThree)
sll.addFront(nodeFour)

sll.display()

// sll.contains(20)
// sll.length()
// sll.removeEnd()
// sll.removeEnd()
sll.removeFront()
sll.display()


// nodeOne.next = nodeTwo
// nodeTwo.next = nodeThree

// let currentNode = nodeOne
// while(currentNode){
//     console.log(currentNode.val)
//     currentNode = currentNode.next
// }
