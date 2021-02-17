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

//A very big sum

function aVeryBigSum(ar) {
  return ar.reduce((a, b) => a + b)
}

/* Many tall buildings, including hotels, skip the number 13 when numbering floors -- often going from floor 12 to floor 14. It is thought that the number 13 is unlucky! Write a program that will number 15 rooms starting from 1, skipping the number 13. Here is the solution */

var countOfRooms = 15
for (i = 1; i < 17; i++) {
  if (i == 13) {
    continue
  }
  console.log(i)
}
//output 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16
