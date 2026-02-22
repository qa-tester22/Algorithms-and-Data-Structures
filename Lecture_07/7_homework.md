# Lecture 7 Homework: Quicksort + Stack Quests

## Goal
Practice the main “split and recurse” mindset from **quicksort**, and then solidify what a **stack** really is.

## Задача 1 (Sorting theme, easy)
**LeetCode 268 — Missing Number**

### Requirement
Implement the solution **using sorting**:
1. Sort the array (you can use your own `quickSort` from Lecture 7).
2. Scan from left to right: the first index `i` where `nums[i] !== i` is the answer.
3. If all indices match, answer is `n`.

### Mini checkpoint
Explain why “sorted order reveals the missing index”.

---

## Задача 2. Q2 (Stack quest)
**LeetCode 150 — Evaluate Reverse Polish Notation**

### Requirement
Use a stack:
- Numbers go onto the stack
- Operators pop 2 numbers, compute, push result back

### Mini checkpoint
Write one example line-by-line of how the stack changes.

---

## Задача 3. Q3 (Stack quest, call-stack realism)
**LeetCode 636 — Exclusive Time of Functions**

### Requirement
Use a stack to track the “currently running function”.
- Parse logs: `id:start:time` and `id:end:time`
- When a new function starts, the previous one pauses.
- When a function ends, it resumes the parent.

### What to pay attention to
- End timestamps are inclusive in this problem.
- The stack stores function ids (and the last timestamp you accounted for).

### Mini checkpoint
Write 2–3 lines explaining what your stack stores and why.

---

## Задача 4.  (Partition vibe, easy)
**LeetCode 905 — Sort Array By Parity**

### Requirement
Reorder so all even numbers come first, then odds.
- Any valid order is accepted.

### Mini checkpoint
State your invariant:
- “Everything left of `left` is even”
- “Everything right of `right` is odd”

---

## Задача 5.  (Two pointers, easy)
**LeetCode 977 — Squares of a Sorted Array**

### Requirement
Return squares of a sorted array in non-decreasing order.
- Don’t do `sort()` at the end.
- Use two pointers from both ends because the biggest square comes from the largest absolute value.

### Mini checkpoint
Explain why the largest square is always at either end.

---

## Submission checklist
For each task:
- Working solution
- 1–2 sentences: what pattern you used (sorting / partition / stack / two pointers)
- Big O time + space
- At least 2 test cases (including edge cases)

---
