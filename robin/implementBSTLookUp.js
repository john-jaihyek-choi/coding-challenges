// Function will assume that it is searching for a value in the following binary structure:
    //     10
    //   9    15
    // 7  11 13 22
    
// Will simply implement a lookup function that traverses down the tree, making binary decisions to narrow down the search process to result to O(log n ) operation

// Will assume there is a tree object which contains binary tree nodes


function lookup(value){
    let currentNode = tree.root;
    if(!tree.root) return null;
    while(currentNode) {
      if(currentNode.value === value) return currentNode;
      if(value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }
  