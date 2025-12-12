# Exercise 09 - sumAll

Implement a function that takes 2 positive integers and returns the sum of every integer between (and including) them:

```javascript
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
```


## Hints

Think about how you would do this on pen and paper and then how you might translate that process into code:
- make sure you pay attention to the function parameters
- create a variable to hold the final sum
- loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
- on each iteration add the number to the sum
- return the sum after finishing the loop

# Plan:
- have two function params that define bottom and top of range
- use a for loop that begins at bottom of range and continues to top of range (INCLUDING THE TOP)
- Each iteration, you just .push() the generated numbers into an array
- use .reduce() on the array with generated numbers to get the final value