const rangeCore = function (from, to) {
  const result = []
  var n = from
  while (n < to) {
    result.push(n)
    n += 1
  }
  return result
}

export default rangeCore
