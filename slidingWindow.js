/*
You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick.
Example 1:

Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.
*/

var totalFruit = function(tree) {
  const max = tree.length
  const s = new Set()
  let ans = Number.MIN_SAFE_INTEGER
  let sum = 0

  for (let i = 0; i < max; i++) {
    const type = tree[i]
    if (s.size < 2) {
      s.add(type)
      sum++
      continue
    }

    if (s.has(type)) {
      sum++
    } else {
      ans = Math.max(ans, sum)
      let start = i - 1
      while (start > 0) {
        const cur = tree[start]
        const pre = tree[start - 1]
        if (cur === pre) {
          start--
        } else {
          break
        }
      }
      sum = i - start + 1
      s.clear()
      s.add(type)
      s.add(tree[i - 1])
    }
  }

  ans = Math.max(ans, sum)
  return ans
};
