var diameterOfBinaryTree = function(root) {
    let depth = 1;
    
    function traverse(root) {
        if(!root) return 0;
        
        let leftDepth = traverse(root.left);
        let rightDepth = traverse(root.right);
        
        depth = Math.max(depth, leftDepth + rightDepth + 1);
        
        return Math.max(leftDepth, rightDepth) + 1;
    }
    
    traverse(root)
    
    return depth - 1;
};