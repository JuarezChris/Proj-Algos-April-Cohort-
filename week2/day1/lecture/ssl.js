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


// nodeOne.next = nodeTwo
// nodeTwo.next = nodeThree

// let currentNode = nodeOne
// while(currentNode){
//     console.log(currentNode.val)
//     currentNode = currentNode.next
// }
