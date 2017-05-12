
let TreeNode = require('./TreeNodes');
let LinkedList = require('./linkedList');

let treeProblems = {};
function isBinaryTreeBST(node, min, max) {
  //edge case
  if (node === null) {
    return true;
  }
  if ((min > node.val && min != null) || (max < node.val && max != null)) {
    return false;
  }
  else {
    if (isBinaryTreeBST(node.right, node.val, max) == false || isBinaryTreeBST(node.left, min, node.val) == false) {
      return false;
    }
  }
  return true;
}
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
  if (Math.abs(lh - rh) > 1) {
    return -1;
  }
  else {
    return (Math.max(_isHeight(node.left), _isHeight(node.right)) + 1);
  }
}

function isBalanced(node) {

  if (node == null) {
    return true;
  }
  return (_isHeight(node) != -1);
}

//Create a min height BST out of a sorted Array.
function createMinBalancedSearchTree(start, end, sortedArray) {

  if (end < start) {
    return null;
  }
  let mid = Math.floor((start + end) / 2);
  let root = new TreeNode(sortedArray[mid]);
  root.left = createMinBalancedSearchTree(start, mid - 1, sortedArray);
  root.right = createMinBalancedSearchTree(mid + 1, end, sortedArray);
  return root;
}
var minDiff = Number.POSITIVE_INFINITY;
let previous ;

function DlinkListOutOFBinaryTree(binaryTreeNode) {

  let q = [];
  let listOfLinkLists = [];
  q.push(binaryTreeNode);
  let i = 0;
  while (q.length != 0) {
    let linkList = new LinkedList();
    let sizeOFLevel = q.length;
    while (sizeOFLevel > 0) {
      let node = q.shift();
      linkList.add(node.val)
      if (node.left != null) {
        q.push(node.left);
      }
      if (node.right != null) {
        q.push(node.right);
      }
      sizeOFLevel--;
    }
    listOfLinkLists[i] = linkList;
    i++;
  }
  return listOfLinkLists;
}

var lowestCommonAncestor = function(root, p, q) {
   if (root === null) {return null;}
   console.log(root.val);
  if (root.val ==  p.val || q.val == root.val) {
    return root;
  }
 let left = lowestCommonAncestor(root.left,p,q);
 let right = lowestCommonAncestor(root.right,p,q);
  if (left!==null && right!==null) {
    return root;
  }
  if(left!=null){
    return left;
  }
  else{
     return right;
  }
}

let _findDistaceFromRoot  = function _findDistaceFromRoot(root,m,minMax)
    {
        let q = [];
        let hd = 0;
        if(root===null){
            return ;
        }
        q.push([root,hd]);
        while(q.length!==0){
            let node = q.shift();
            if(node[0]!==null){
               let val = node[0].val;
                hd = node[1];
            if(hd >minMax[1]){
                minMax[1]= hd;
            }
            if(hd <minMax[0]){
                minMax[0] =hd;
            }
            if(m.has(hd)){
                let valOfNode = m.get(hd);
                valOfNode.push(val);
                m.set(hd,valOfNode);

            }
            else{
                 m.set(hd,[val]);

            }
            if(node.left!==null || undefined){

                q.push([node[0].left,hd-1]);
            }
            if(node.right!==null||undefined){

                q.push([node[0].right,hd+1]);
                console.log('q',q)
            }
        }
           }


}
var verticalOrder = function(root) {
    let m = new Map();
    let minMax =[0,0];
    _findDistaceFromRoot(root,m,minMax);
    let result = [];
    console.log(minMax);
    for(var i = minMax[0]; i<= minMax[1]; i++){
       result.push(m.get(i));
    }
    return result;
};

var inorderTraversal = function(root) {
    if(root ===null ){
        return root;
    }
    else{
    let st =[];
    let res = [];
    while(true){
       if(root!==null||undefined){
            st.push(root);
            root = root.left;
        }
        if(st.length===0){
            break;
        }

        root = st.pop();
        res.push(root.val);
        root = root.right;

    }
       return res;
    }
};
/*
  {2, 3, 4, 7, 17, 19, 21, 35, 89} and
   x is 19,the biggest key that is smaller than x is 17.
*/

function findBiggestElemSmallerThanX(root,key){
    while(root!= null){
      if(root.val<x){
        result = root.val;
        root = root.right;
      }
      else{
        root = root.left;
      }
    }
    return root;
}

var lowestCommonAncestorBST = function(root, p, q) {
  //try to walk all the tree and till both are on same side ,
    while((root.val -p.val) * (root.val -q.val) > 0){
        root = p.val<root.val ? root.left :root.right;
    }
    return root;
};
//treeProblems.lca = lca;
treeProblems.isBalanced = isBalanced;
treeProblems.createMinBalancedSearchTree = createMinBalancedSearchTree;
treeProblems.DlinkListOutOFBinaryTree = DlinkListOutOFBinaryTree;
treeProblems.isBinaryTreeBST = isBinaryTreeBST;
//treeProblems.findMinSumBST = findMinSumBST;
module.exports = treeProblems;




let node = new TreeNode(0);
node.left = new TreeNode(1)
node.right = new TreeNode(2);
//node.left.left = new TreeNode(3)
//node.left.right = new TreeNode(4);
 let sortedArrayOfIntegers = [1, 2, 3, 4, 5, 6, 7];
// console.log(treeProblems.createMinBalancedSearchTree(0, sortedArrayOfIntegers.length - 1, sortedArrayOfIntegers));
// console.log(treeProblems.isBalanced(node));
// console.log(JSON.stringify(treeProblems.DlinkListOutOFBinaryTree(node)));
// //bst
// //console.log(treeProblems.isBinaryTreeBST(treeProblems.createMinBalancedSearchTree(0, sortedArrayOfIntegers.length - 1, sortedArrayOfIntegers)));
// let trickynode = new TreeNode(20);
// trickynode.left = new TreeNode(10) ;
// trickynode.right = new TreeNode(30);
// trickynode.left.right = new TreeNode(25);
// //non bst
//console.log(treeProblems.isBinaryTreeBST(trickynode,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY));
let nodeA = new TreeNode(1);
let nodeB = new TreeNode(2);
let nodeMinSum = treeProblems.createMinBalancedSearchTree(0, sortedArrayOfIntegers.length - 1, sortedArrayOfIntegers)
console.log(lowestCommonAncestor(node, nodeA, nodeB));
console.log(minDiff);
console.log(verticalOrder(nodeMinSum));
let nodeTest = new TreeNode(1);
nodeTest.left = null;
nodeTest.right = new TreeNode(2);
nodeTest.right.left = new TreeNode(3);
console.log(inorderTraversal(nodeTest));
