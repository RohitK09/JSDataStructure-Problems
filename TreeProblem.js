let TreeNode = require('./TreeNodes');

let treeProblems = {};
function _isHeight(node) {
    if (node == null) {
        return 0;
    }
    let lh = _isHeight(node.left);
    if (lh == -1) {
        return -1;
    }


    let rh = _isHeight(node.right);
    if (rh == -1) {
        return -1;
    }
    if(Math.abs(lh-rh)>1){
        return -1 ;
    }
    else {
        return (Math.max(_isHeight(node.left), _isHeight(node.right)) + 1);
    }
}

function isBalanced(node) {

    if (node == null) {
        return true;
    }
    return (_isHeight(node)!=-1);
}

//Create a min height BST out of a sorted Array.
function createMinBalancedSearchTree (start,end,sortedArray){

    if(end<start){
        return null;
    }
    let mid =Math.floor((start+end)/2) ;
    let root = new TreeNode(sortedArray[mid]);
    root.left  = createMinBalancedSearchTree(start,mid-1,sortedArray);
    root.right = createMinBalancedSearchTree(mid+1,end,sortedArray);
    return root;
}
treeProblems.isBalanced = isBalanced;
treeProblems.createMinBalancedSearchTree = createMinBalancedSearchTree;


module.exports = treeProblems;


let node = new TreeNode(0);
node.left = new TreeNode(1)
node.right = new TreeNode(2);
node.left.left = new TreeNode(3)
node.left.right = new TreeNode(4);
let sortedArrayOfIntegers = [1,2,3,4,5,6,7];
console.log(treeProblems.createMinBalancedSearchTree(0,sortedArrayOfIntegers.length-1,sortedArrayOfIntegers));
console.log(treeProblems.isBalanced(node));