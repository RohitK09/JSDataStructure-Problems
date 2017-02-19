class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
 
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }
  
  add(value) {
    let node = new Node(value);         
    if(!this._head && !this._tail){     
      this._head = node;                
      this._tail = this._head;
    }else{
    this._tail.next = node;             
    this._tail = this._tail.next;       
    }
    this._length++;
  }
  
  contains(value){
    let node = this._head;
    while(node){
      if(node.value === value){
        return true;
      }
      node = node.next;
    }
    return false;
  }
  
  size() {
    return this._length;
  }
  
}
module.exports = LinkedList;