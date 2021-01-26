//Simple Sum Array

function simpleArraySum(ar) {
  return ar.reduce((accum, curr) => accum + curr)
}

console.log(simpleArraySum([1, 2, 3]))

//Compare the triplets

function compareTriplets(a, b) {
  let scores = [0, 0]
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) scores[0] = scores[0] + 1
    else if (b[i] > a[i]) scores[1] = [scores[1] + 1]
  }
  return scores
}
