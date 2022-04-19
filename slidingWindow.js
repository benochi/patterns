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
