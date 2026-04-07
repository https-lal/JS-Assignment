Structure
·	Q1.js → Digit Gatekeeper
·	Q2.js → Roll-Seed Lock
·	Q3.js → Mirror Corridor
·	Q4.js → Fare Calculator
·	Q5.js → Skipping Numbers
·	Q6.js → Contest Score Judge


Approach
Q1) Loop from L to R → check divisibility → digit sum → prime check → no zero digit.

Q2) Apply transformation 3 times → check range and middle digit.

Q3) Try X from 0 to 100000 → check palindrome + divisible by K.

Q4) Apply conditions step by step → rounding using Math.ceil.

Q5) Keep adding numbers (skip multiples of seed+2) until sum ≥ N.

Q6) Compute score → apply conditions → assign PASS/FAIL.

Complexity
Q1: O(N log N)                                                   
Q2: O(1)                                                                 
Q3: O(100000 * digits)                                    
Q4: O(1)
Q5: O(N)
Q6: O(1)
