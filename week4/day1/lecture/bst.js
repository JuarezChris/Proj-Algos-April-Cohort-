class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }

    add(newNode){
        if( !this.root ){
            this.root = newNode
            return this
        }
        let monkey = this.root
        while(monkey){
            if(newNode.value >= monkey.value){
                if(monkey.right == null){
                    monkey.right = newNode
                    return this
                }
                else{
                    monkey = monkey.right
                }
            }
            else{
                if(monkey.left == null){
                    monkey.left = newNode
                    return this
                }
                else{
                    monkey = monkey.left
                }
            }
        }
    }

    contains(val){
        if(this.root == null){
            return false
        }
        if(val == this.root.value){
            return true
        }
        let monkey = this.root
        while(monkey){
            if(val > monkey.value ){
                if(monkey.right == null){
                    return false
                }
                else if(monkey.right.value == val){
                    return true
                }
                else{
                    monkey = monkey.right
                }
            }
            else {
                if(monkey.left == null ){
                    return false
                }
                if(monkey.left.value == val){
                    return true
                }
                else{
                    monkey = monkey.left
                }
            }
        }
    }
}


// let node1 = new Node(45)
// let node2 = new Node(18)
// let node3 = new Node(62)

// let bst = new BST()

// bst.add(node1)
// bst.add(node2)
// bst.add(node3)

// console.log(bst)

let node1 = new Node(3)
let node2 = new Node(5)
let node3 = new Node(1)
let node4 = new Node(19)
let node5 = new Node(100)

let bst = new BST()

bst.add(node1)
bst.add(node2)
bst.add(node3)
bst.add(node4)
bst.add(node5)

console.log(bst.contains(1))
console.log(bst.contains(80))
console.log(bst.contains(100))
// console.log(bst)