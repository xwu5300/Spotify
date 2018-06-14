// Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time. 

// Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations. 

// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations: 

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

const changePossibilities = (amount, coins) => {
  var count = 0
  function inner(amount, i) {
    var coin = coins[i]
    if (i === 0) {
      if (amount % coin === 0) {
        count++
      }
      return;
    } else {
      while (amount > 0) {
        inner(amount, i - 1)
        amount -= coin
      }
      if (amount === 0) {
        count++
      }
    }
  }
  inner(amount, coins.length - 1)
  return count
}