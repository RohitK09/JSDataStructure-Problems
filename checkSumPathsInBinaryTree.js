
let TreeNode = require('./TreeNodes');
let noOfPath =0;
let countPathFromroot = function(root,sum){
  if (root==null){
    return 0;
  }
  let totalPaths = countPathFromNode(root,sum,0);
  if(root.left!==null){
    totalPaths = totalPaths + countPathFromroot(root.left,sum,0);
  }
  if(root.right!==null){
     totalPaths = totalPaths + countPathFromroot(root.left,sum,0);
  }

  return totalPaths;


}
let countPathFromNode =(root,sum,currSum) => {
  if(root==null){
    return 0;
  }

  currSum = currSum + root.val;
  let totalPaths =0;

  if(sum===currSum){
    totalPaths++;
  }

  if(root.left!==null){
   totalPaths = totalPaths + countPathFromNode(root.left,sum,currSum);
  }
  if(root.right!==null){
     totalPaths = totalPaths +countPathFromNode(root.right,sum,currSum);
  }
  return totalPaths;
}
let newNode = new TreeNode(0);
newNode.left = new TreeNode(1);
newNode.right = new TreeNode(2);
newNode.right.right = new TreeNode(4);
newNode.left.right = new TreeNode(5);
//newNode.left.left = new TreeNode()

//console.log(countPathFromroot(newNode,6));
//[1,2,3]
function countPathSumAdavanced(root,sum){
  let preSum = new Map();
  preSum.set(0,1); //setting the map for saving the running sum.The
  if(root ==null){
    return 0;
  }
  return countPathHelper(root,0,sum,preSum);

}
function countPathHelper(root,currSum,targetSum,preSum){
    if(root==null){
      return 0;
    }
   currSum =currSum + root.val;
    let count = 0;
   if(preSum.has(currSum-targetSum)){
    count = preSum.get(currSum-targetSum); // the count will be added based on the number of paths to sum-k;
   }
   if(preSum.has(currSum)){
     preSum.set(currSum,preSum.get(currSum)+1); // if presum map already has that sum
                                                // prefix available it just increments the pasth to reach to that sum.
   }
   else{
     preSum.set(currSum,1);
   }
   count = count +countPathHelper(root.left,currSum,targetSum,preSum)+countPathHelper(root.right,currSum,targetSum,preSum);
   //count the path from left and right
    preSum.set(currSum,preSum.get(currSum)-1); //decrease the path by 1
    return count;
}

console.log(countPathSumAdavanced(newNode,6));
