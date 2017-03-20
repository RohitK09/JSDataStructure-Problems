
var TreeNode =require('./TreeNodes');
var deserialize = function(data) {

    if(data===null ||data.length===0){
        return null;
    }

    var charArray = data.split(',');
     console.log(charArray[0]);
  var root = new TreeNode(parseInt(charArray[0]));
  var q=[];
  q.push(root);
  var i =1 ;
  while (q.length>0){
      var curr = q.shift();
       console.log(curr);
      if(curr===null){
           continue;
      }
      if(charArray[i]!=='#'){
            curr.left = new TreeNode(parseInt((charArray[i])));
            q.push(curr.left);
      }else{
          curr.left = null;
          q.push(null);
      }
      i++;
      if(charArray[i]!='#'){
            curr.right = new TreeNode(parseInt((charArray[i])));
            q.push(curr.right);
      }else{
          curr.right = null;
          q.push(null);
      }
      i++;

  }
  return root;

};

console.log(deserialize('-1,0,1,#,#,#,#'));
