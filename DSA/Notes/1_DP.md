# Links
overlapping subproblems:
https://servicenow.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/12434654#overview

## Gist for DP Resources
  - https://labuladong.gitbook.io/algo-en/i.-dynamic-programming
  - Structy (youtube and structy)
  - LC DP card
  - Solving DP Patterns links - like below 🤌 and in sheet + DP questions category questions

- ⭐️⭐️ https://labuladong.gitbook.io/algo-en/i.-dynamic-programming/besttimetobuyandsellstock
- 🤌 https://leetcode.com/discuss/study-guide/458695/Dynamic-Programming-Patterns
- https://github.com/labuladong/fucking-algorithm/blob/english/think_like_computer/Framework%20and%20thoughts%20about%20learning%20data%20structure%20and%20algorithm.md#3guidelines-of-algorithm-exercises
- https://www.techinterviewhandbook.org/algorithms/dynamic-programming/#essential-questions
- Patterns: https://leetcode.com/discuss/general-discussion/458695/dynamic-programming-patterns#distinct-ways
- Realizing DP problem: https://leetcode.com/problems/longest-increasing-subsequence/solution/
  ⭐️ most dynamic programming problems can be solved this way.
- ⭐️ structy - https://structy.net/problems/fib/problem-index

# Notes

- ⭐️ memo key = argument to function = node value
  ⭐️ memo value = return value for that function call - unique set of arguments -> give particular result - go to exact return expression and add answer to memo object before return
- Alvin DP video - make notes of complexity explanation
- Also learn tabulation - all Alvin problems in second half of the video are solved using tabulation
- neetcode https://www.youtube.com/watch?v=mBNrRy2_hVs Top 5 DP patterns

# bottom-up vs top-down
https://chat.openai.com/share/f4a29594-d5bc-4188-ad5c-acd6780d936c
- ⭐️ You can think of "top-down" as breaking the problem down from the top to the base cases and "bottom-up" as building solutions up from the base cases to the original problem.

- Absolutely, you're correct. Both top-down and bottom-up approaches ultimately build up the solution to the original problem. The key difference lies in the order of how subproblems are solved:
- In the top-down approach, you start with the original problem and break it down into smaller subproblems until you reach the base cases (the "bottom"). Then, you solve those base cases and work your way back up to the original problem.
- In the bottom-up approach, you start by solving the smallest subproblems (the "bottom") and build your way up through iteration until you reach the original problem.

So, in both cases, you end up building the solution up, but the order in which you approach and solve the subproblems differs. It's more about the direction in which the computation flows.

- 📝 For a person who understands binary trees, it won't take long to do binary tree exercises. So if you can't or are afraid of working out questions, you can start from the binary trees. The first 10 may be a little uncomfortable. If you do another 20 with the framework, you may gain some understanding. If you finish that, and then do any backtracking, dynamic programming or divide-and-conquer topic, you will find that as long as recursion is involved, it's all a tree problem.
- do the exercises of the relevant topics of trees first. Try to see the problems in relation to the framework, rather than by focusing on details

- Generally an array is used as a memo, of course you can use hash table (dictionary), the thought is the same.
- The example of the Fibonacci sequence is not strictly a dynamic programming because it does not involve finding the optimal value.

- There are two ways to implement a DP algorithm:

Bottom-up, also known as tabulation -> Implemented using iteration.
Top-down, also known as memoization -> Implemented using recursion.

---
https://leetcode.com/explore/featured/card/dynamic-programming/630/an-introduction-to-dynamic-programming/4034/
- Break down problem F(n) into smaller subproblems F(n-1) and F(n-2) that are re-used multiple times =  "overlapping subproblems"
- Then, adding the solutions to these subproblems together gives the answer to the original question F(n−1)+F(n−2)=F(n) = "optimal substructure"

overlapping because F(4) will be needed for both F(5) and F(6)
also: https://servicenow.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/12434654#overview


# More

- Just focus on structy for both DP and Graph - it's enough
