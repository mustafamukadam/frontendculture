## Dynamic Programming Resources
- [Labuladong's Dynamic Programming Guide](https://labuladong.gitbook.io/algo-en/i.-dynamic-programming)
- [Structy](https://structy.net/problems/fib/problem-index) (YouTube and Structy)
- [LeetCode Dynamic Programming Patterns](https://leetcode.com/discuss/study-guide/458695/Dynamic-Programming-Patterns)
- [LC DP Card](https://leetcode.com/discuss/general-discussion/458695/dynamic-programming-patterns#distinct-ways)
- [Tech Interview Handbook DP Questions](https://www.techinterviewhandbook.org/algorithms/dynamic-programming/#essential-questions)

## DP Problem Solving Tips
- [Realizing DP Problem](https://leetcode.com/problems/longest-increasing-subsequence/solution/): Most dynamic programming problems can be solved this way.
- Memoization: 
  - Memo key = argument to function = node value
  - Memo value = return value for that function call - unique set of arguments -> give particular result - go to exact return expression and add answer to memo object before return
- Tabulation: All Alvin problems in the second half of the video are solved using tabulation.

## DP Problem Solving Patterns
- [Top 5 DP Patterns](https://www.youtube.com/watch?v=mBNrRy2_hVs) by NeetCode

## Bottom-Up vs Top-Down
- In the top-down approach, you start with the original problem and break it down into smaller subproblems until you reach the base cases (the "bottom"). Then, you solve those base cases and work your way back up to the original problem.
- In the bottom-up approach, you start by solving the smallest subproblems (the "bottom") and build your way up through iteration until you reach the original problem.

## Binary Trees and DP
- For a person who understands binary trees, it won't take long to do binary tree exercises. So if you can't or are afraid of working out questions, you can start from the binary trees. The first 10 may be a little uncomfortable. If you do another 20 with the framework, you may gain some understanding. If you finish that, and then do any backtracking, dynamic programming or divide-and-conquer topic, you will find that as long as recursion is involved, it's all a tree problem.
- Do the exercises of the relevant topics of trees first. Try to see the problems in relation to the framework, rather than by focusing on details.

## Notes
- Overlapping subproblems: Some problems have "subproblems" but not "overlapping" eg Merge sort. Merge sort is Divide and conquer pattern
// use this instead of creating whole array upfront https://leetcode.com/problems/climbing-stairs/solutions/4184632/beats-100-c-javascript/comments/2102599
let arr = [1, 1];
// then in for-loop-
arr.push(arr[i-1] + arr[i-2]);

- (Don't pay much attention but interesting..) Most likely not, but it really varies from company to company. 95% of companies don't test for dynamic programming or graphs (but 5% do!) - source: https://formation.dev/guide/ 