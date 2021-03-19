/*
 * TODO
 * Return the average of a given array of integers,
 * rounded down to its nearest integer.
 *
 *
 * E.g. [1, 2, 3] => 2
 *
 * @param array - Array of integers
 * @returns The average (mean) integer
 */
export function getAverage(array) {
  // write code here
}

/*
 * TODO
 * Write a function that takes a list of non-negative integers and strings
 * and returns a new list with the strings filtered out
 *
 * E.g. [1, 2, "x"] => [1, 2]
 *
 * @param list - Array of integers and strings
 * @returns An array of integers
 */
export function filterList(list) {
  // write code here
}

/*
 * TODO
 * You are given an array (which will have a length of at least 3,
 * but could be very large) containing integers. The array is either
 * entirely comprised of odd integers or entirely comprised of even integers
 * except for a single integer N. Write a method that takes the array
 * as an argument and returns this "outlier" N.
 *
 * E.g. [1, 2, 4, 6, 8] => 1
 *
 * @param integers - Array of integers
 * @returns integer
 */
export function findOutlier(integers) {
  // write code here
}

/*
 * TODO
 * Take 2 strings s1 and s2 including only letters from a to z.
 * Return a new sorted string, the longest possible, containing distinct
 * letters - each taken only once - coming from s1 or s2.
 *
 * E.g. ("abcd", "cdefg") => "abcdefg"
 *
 * @param s1 - A string of a-z letters
 * @param s2 - A string of a-z letters
 * @returns A string of unique letters
 */
export function longest(s1, s2) {
  // write code here
}

/*
 * TODO
 * You will be given an array of numbers. You have to sort the odd
 * numbers in ascending order while leaving the even numbers
 * at their original positions.
 *
 * E.g. [5, 3, 2, 8, 1, 4] => [1, 3, 2, 8, 5, 4]
 *
 * @param array - An array of integers
 * @returns An array of integers
 */
export function sortArray(array) {
  // write code here
}

/*
 * TODO
 * You will be given an object node that has the following shape:
 *
 * Node
 * {
 *    id: number;
 *    name: string;
 *    children: Node[];
 * }
 *
 * Nodes can be nested within nodes as children, so a node can have a few levels
 * of children nodes.
 *
 * Write a function so when given a node object with nested children nodes,
 * it flattens them and returns the object with a flattened array of children.
 *
 * E.g.
 *
 * {
 *    id: 1,
 *    name: "a",
 *    children: [
 *      {
 *        id: 2,
 *        name: "b",
 *        children: [
 *          {
 *            id: 3,
 *            name: "c",
 *            children: [
 *              {
 *                id: 4,
 *                name: "d",
 *                children: []
 *              }
 *            ]
 *          }
 *        ]
 *      }
 *    ]
 * }
 *
 * =>
 *
 * {
 *    id: 1,
 *    name: "a",
 *    children: [
 *      {
 *        id: 2,
 *        name: "b"
 *      },
 *      {
 *        id: 3,
 *        name: "c"
 *      },
 *      {
 *        id: 4,
 *        name: "d"
 *      }
 *    ]
 * }
 *
 * @params node - Object
 * @returns Object
 */
export function flattenChildren(node) {
  // write code here
}
