
let TreeNode = require('./TreeNodes');
let findMax =(root,set,max)=>{
    if(root ==null){ //reached leaf node
      if(set.size>max){
        console.log(max);
        max=set.size;
      }
    }
    set.add(root.val);

      findMax(root.left,set,max);


      findMax(root.right,set,max);

};


let newNode = new TreeNode(0);
newNode.left = new TreeNode(1);
newNode.right = new TreeNode(2);
newNode.right.right = new TreeNode(4);
newNode.left.right = new TreeNode(5);
var max = 0;
console.log(findMax(newNode,new Set(),max));


