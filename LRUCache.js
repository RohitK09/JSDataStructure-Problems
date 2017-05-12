/***
 * @argument doubleLinkedList for maintaining the recently used cache.
 */
class doubleLinkedList{
  constructor(key){
    this.next = null;
    this.prev = null;
    this.key = key;
  }
}
class LRUCache {
  constructor(capacity){
    this.size = capacity
    this.tail = null;
    this.head=null;
    this.mapOfKeys = new Map();
    this.currSize = 0;
}
set(key,value){
  if(this.head ==null){
    this.head = new doubleLinkedList(key);
    this.tail = new doubleLinkedList(key);
    this.mapOfKeys.set(key,value);
}
 else if(this.mapOfKeys.size<this.size){
     this.mapOfKeys.set(key,value);
     let newNode = new doubleLinkedList(key);
     this.newtail.next = newNode;
     newNode.prev =tmpLast;
     this.tail = newNode;
  }else{
      //remove the tail node;

       this.removeLast();
       this.mapOfKeys.set(key,value);
       let newNode =  new doubleLinkedList(key);
       newNode.next = null;
       let lastnode = this.tail;
       lastnode.next = newNode;
       newNode.prev = lastnode;
       this.tail = newNode;
        this.currSize--;
    }
}
get(key){

  if(this.mapOfKeys.get(key)){
   let tmp =  this.head ;
   let newHeadNode = new doubleLinkedList(key);
   tmp.pre = newHeadNode;
   newHeadNode.next = tmp;
   this.currSize++;
   if(this.currSize>this.size){
      //remove the tail node;
      this.removeLast();
      this.currSize--;
   }
   return this.mapOfKeys.get(key);
  }
  else{
    return -1;
  }

}
// remove the last key
removeLast(){
   let tmpPrev = this.tail.pre;
    tmpPrev.next = null;
    this.mapOfKeys.delete(this.tail.key);
    this.tail = tmpPrev;
}
}

let f = new LRUCache(4);
f.set(1,1);
f.set(2,2);
f.set(3,3);
f.set(4,4);
f.set(5,5);

console.log(f.get(1));
