## Odin Project - Computer Science - Recursion
# Recursion is a programming technique where a function calls itself in order to solve a problem. It typically involves a base case that stops the recursion and a recursive case that breaks the problem into smaller subproblems.
# In this project, we will implement two common algorithms using recursion: the Fibonacci sequence and merge sort.
## Fibonacci Sequence
The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. The sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, and so on. The nth Fibonacci number can be calculated using the following recursive formula:
```F(n) = F(n-1) + F(n-2)
```
with base cases:
```F(0) = 0
F(1) = 1
```
## Merge Sort
Merge sort is a divide-and-conquer algorithm that sorts an array by recursively dividing it into smaller subarrays until each subarray contains a single element. Then, it merges those subarrays back together in a sorted order. The merge sort algorithm can be implemented as follows:
1. If the array has one or zero elements, it is already sorted. Return the array.
2. Divide the array into two halves.
3. Recursively call merge sort on each half to sort them.
4. Merge the two sorted halves back together to form a single sorted array.

## How to use the exercise?
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies using `npm install`.
3. Open the `fibb.js` file and implement the `fibbonacci` function to calculate the nth Fibonacci number using recursion.
4. Open the `merge.js` file and implement the `mergeSort` function to sort an array using the merge sort algorithm.
5. You can test your implementations by creating test cases through using command:
```npm test fibb.test.js
npm test merge.test.js
```
6. Once you have completed the implementations, you can commit your changes and push them to the repository.

## Conclusion
Recursion is a powerful technique that can simplify code and make it easier to read. By implementing the Fibonacci sequence and merge sort using recursion, you will gain a deeper understanding of how recursive functions work and how they can be used to solve complex problems.