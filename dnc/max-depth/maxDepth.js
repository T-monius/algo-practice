const maxDepth = function(root, counter=0) {
  if(!root) { return counter }

  counter += 1;

  const leftCounter = maxDepth(root.left, counter);
  const rightCounter = maxDepth(root.right, counter);

  if (leftCounter > rightCounter) { return leftCounter }
  return rightCounter
};
