let node = require('./TreeNodes');

var convertBST = function(root) {
    let sum = {};
    sum.runningSum = 0;
    convertToGreaterTree(root,sum);
    return root;
};

let convertToGreaterTree =(root,sum)=>{

  if(root === null){
    return ;
  }
  convertToGreaterTree(root.right,sum);
  convert(root,sum);
  convertToGreaterTree(root.left,sum);
};


let convert = function(node,sum){
  sum.runningSum = sum.runningSum + node.val;
  node.val = sum.runningSum;
};

let testNode = new node(2);
testNode.left  = new node(5);
testNode.right = new node(13);
console.log(JSON.stringify(convertBST(testNode)));


