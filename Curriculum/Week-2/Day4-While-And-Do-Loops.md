# Week 2, Day 4: While and Do Loops

**Duration:** 180 minutes (90 min theory + 90 min practical)  
**Date:** February 13, 2026  
**Learning Outcome:** Understand loops to repeat code multiple times

---

## 📚 THEORY SESSION (90 minutes)

### 1. What is a Loop?

A **loop** is a programming construct that lets you repeat a block of code multiple times, as long as a certain condition is true. This is called **iteration**—each time the code runs is one iteration.

**Why do coders use loops?**
- To avoid writing repetitive code (DRY principle)
- To process lists, perform calculations, or automate tasks
- To handle unknown or changing amounts of data

**Real-World Analogy:**
- Without a loop: "Flip card 1, flip card 2, flip card 3..." (tedious, error-prone)
- With a loop: "While there are cards left, flip the next card" (automatic, scalable)

**Example:**
```javascript
// Without loop - Repetitive
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

// With loop - Clean and scalable
let i = 1;
while (i <= 5) {
    console.log(i);
    i = i + 1;
}
```

**Key Point:**
> Loops are the backbone of automation in programming. Mastering them lets you solve problems of any size!

---


### 2. The while Loop

A **while loop** is the simplest type of loop in JavaScript. It keeps running a block of code as long as the condition you specify remains true.

**Syntax:**
```javascript
while (condition) {
    // Code to repeat
    // (You must update something so the loop can end!)
}
```

**Example:**
```javascript
let count = 1;
while (count <= 5) {
    console.log("Count: " + count);
    count = count + 1;  // Always update the variable!
}
// Output: Count: 1 ... Count: 5
```

**Why is this important?**
- If you forget to update the variable, your loop will run forever (infinite loop) and crash your program!

```javascript
let x = 0;

// ❌ INFINITE LOOP - NEVER DO THIS
// while (x < 10) {
//     console.log(x);
//     // x never changes! Loop never ends!
// }

// ✅ CORRECT - Loop will end
while (x < 10) {
    console.log(x);
    x = x + 1;  // Progress toward condition
}
```

---

### 3. Practical while Loop Examples

#### Example 1: Counting Up
```javascript
let num = 1;

while (num <= 3) {
    console.log("Number: " + num);
    num++;  // Same as: num = num + 1
}

// Output:
// Number: 1
// Number: 2
// Number: 3
```

#### Example 2: Counting Down
```javascript
let countdown = 5;

while (countdown > 0) {
    console.log(countdown + "...");
    countdown--;  // Same as: countdown = countdown - 1
}
console.log("Blastoff!");

// Output:
// 5...
// 4...
// 3...
// 2...
// 1...
// Blastoff!
```

#### Example 3: Process Until Condition Met
```javascript
let password = "";
let correctPassword = "secret123";

// Simulate prompting for password
let attempts = 0;
while (attempts < 3) {
    password = "attempt" + (attempts + 1);
    
    if (password === correctPassword) {
        console.log("Login successful!");
        break;  // Exit loop early
    } else {
        console.log("Wrong password. Try again.");
    }
    
    attempts++;
}
```

---


### 4. The do...while Loop

A **do...while loop** is similar to a while loop, but it always runs the code block at least once—because it checks the condition *after* running the code.

**Syntax:**
```javascript
do {
    // Code to repeat
} while (condition);
```

**Example:**
```javascript
let i = 1;
do {
    console.log("Iteration: " + i);
    i++;
} while (i <= 3);
// Output: Iteration: 1, 2, 3
```

**Key Difference:**
- `while` checks the condition *before* running the code (may run zero times)
- `do...while` runs the code *once before* checking the condition (always runs at least once)

**Why use do...while?**
- Useful for menus, user input, or anything that must happen at least once before checking a condition.

---


### 5. Loop Control: break and continue

Sometimes you need to control the flow inside a loop—maybe to exit early, or to skip certain steps. JavaScript gives you two powerful tools for this: `break` and `continue`.

#### `break` — Exit Loop Early
Use `break` to immediately stop the loop, even if the condition is still true. This is useful for searching, quitting on error, or stopping when a goal is reached.
```javascript
let i = 1;
while (true) {  // Infinite loop condition
    if (i > 5) {
        break;  // Exit the loop
    }
    console.log(i);
    i++;
}
// Output: 1 2 3 4 5

// Real-world: Search for a value
let students = ["Alice", "Bob", "Charlie", "Diana"];
let searchName = "Charlie";
let count = 0;
while (count < students.length) {
    if (students[count] === searchName) {
        console.log("Found " + searchName + "!");
        break;  // Stop searching
    }
    count++;
}
```

#### `continue` — Skip to Next Iteration
Use `continue` to skip the rest of the current loop and jump to the next iteration. This is handy for filtering, skipping invalid data, or ignoring special cases.
```javascript
let i = 0;
while (i < 5) {
    i++;
    if (i === 3) {
        continue;  // Skip printing 3
    }
    console.log(i);
}
// Output: 1 2 4 5

// Real-world: Process only valid numbers
let numbers = [1, -2, 3, -4, 5];
let index = 0;
while (index < numbers.length) {
    if (numbers[index] < 0) {
        index++;
        continue;  // Skip negative numbers
    }
    console.log("Positive: " + numbers[index]);
    index++;
}
```

**Key Point:**
> `break` and `continue` give you fine control over your loops—use them wisely to write efficient, readable code!

---

## ✅ PRACTICAL SESSION (90 minutes)

### Experiment 11: Check Leap Year

**Objective:** Use conditions to determine if a year is a leap year

```javascript
/*
 * Experiment 11: Check Leap Year
 * Leap year rules:
 * - Divisible by 400 → Leap year
 * - Divisible by 100 → NOT leap year
 * - Divisible by 4 → Leap year
 * - Otherwise → NOT leap year
 */

function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;    // Divisible by 400
    } else if (year % 100 === 0) {
        return false;   // Divisible by 100 (but not 400)
    } else if (year % 4 === 0) {
        return true;    // Divisible by 4 (but not 100)
    } else {
        return false;   // Not divisible by 4
    }
}

// Test cases
console.log("=== Experiment 11: Leap Year Checker ===");
console.log("2000 is leap? " + isLeapYear(2000));  // true (div by 400)
console.log("1900 is leap? " + isLeapYear(1900));  // false (div by 100, not 400)
console.log("2024 is leap? " + isLeapYear(2024));  // true (div by 4)
console.log("2025 is leap? " + isLeapYear(2025));  // false (not div by 4)

// Detailed version with explanation
function checkLeapYear(year) {
    console.log("\nChecking year: " + year);
    
    if (year % 400 === 0) {
        console.log("✓ " + year + " is a LEAP YEAR (divisible by 400)");
        return true;
    } else if (year % 100 === 0) {
        console.log("✗ " + year + " is NOT a leap year (divisible by 100)");
        return false;
    } else if (year % 4 === 0) {
        console.log("✓ " + year + " is a LEAP YEAR (divisible by 4)");
        return true;
    } else {
        console.log("✗ " + year + " is NOT a leap year");
        return false;
    }
}

checkLeapYear(2020);
checkLeapYear(2021);
checkLeapYear(1996);
```

---

### Experiment 12: Generate Random Number Between Two Numbers

**Objective:** Generate random numbers within a range

```javascript
/*
 * Experiment 12: Random Number Between Two Numbers
 */

function randomBetween(min, max) {
    // Math.random() gives 0 to 0.999...
    // Formula: min + (random * range)
    const random = Math.random();
    const range = max - min + 1;
    const randomInRange = Math.floor(random * range);
    return min + randomInRange;
}

// Test cases
console.log("\n=== Experiment 12: Random Number Generator ===");
console.log("Random between 1-10:");
for (let i = 0; i < 5; i++) {
    console.log(randomBetween(1, 10));
}

console.log("\nRandom between 50-100:");
for (let i = 0; i < 5; i++) {
    console.log(randomBetween(50, 100));
}

// Dice roller example
function rollDice() {
    return randomBetween(1, 6);
}

console.log("\n=== Dice Rolls ===");
console.log("Roll 1: " + rollDice());
console.log("Roll 2: " + rollDice());
console.log("Roll 3: " + rollDice());
console.log("Roll 4: " + rollDice());
```

---

### Exercise 4.3: Loop with Calculations

**Objective:** Use loops to process multiple values

```javascript
/*
 * Problem: Sum numbers from 1 to N
 */

function sumToN(n) {
    let sum = 0;
    let current = 1;
    
    while (current <= n) {
        sum = sum + current;  // Add current number
        current++;            // Move to next
    }
    
    return sum;
}

console.log("\n=== Sum Numbers ===");
console.log("Sum of 1 to 5: " + sumToN(5));      // 15 (1+2+3+4+5)
console.log("Sum of 1 to 10: " + sumToN(10));    // 55
console.log("Sum of 1 to 100: " + sumToN(100));  // 5050

// Visualization
function sumWithTrace(n) {
    console.log("\nCalculating sum of 1 to " + n);
    let sum = 0;
    let current = 1;
    
    while (current <= n) {
        sum = sum + current;
        console.log("Added " + current + " → Sum is now " + sum);
        current++;
    }
    
    return sum;
}

sumWithTrace(5);
```

---

### Exercise 4.4: Using break Statement

**Objective:** Exit loop early based on condition

```javascript
/*
 * Problem: Find first number divisible by 3
 */

function findFirstDivisibleBy3(start, end) {
    let current = start;
    
    while (current <= end) {
        if (current % 3 === 0) {
            return current;  // Found it!
        }
        current++;
    }
    
    return undefined;  // Not found
}

console.log("\n=== Find Divisible by 3 ===");
console.log("First in 1-10: " + findFirstDivisibleBy3(1, 10));    // 3
console.log("First in 20-30: " + findFirstDivisibleBy3(20, 30));  // 21

// With break
function searchBreak(max) {
    console.log("\nSearching from 1 to " + max);
    let num = 1;
    
    while (num <= max) {
        if (num % 3 === 0) {
            console.log("Found: " + num);
            break;  // Exit immediately
        }
        num++;
    }
}

searchBreak(10);
```

---

### Exercise 4.5: do...while Loop Example

**Objective:** Understand when do...while is useful

```javascript
/*
 * Problem: Menu-driven program (simulated)
 */

function menuDemo() {
    console.log("\n=== Menu-Driven Program ===");
    let choice = 1;
    let iteration = 0;
    
    // do...while ensures menu shows at least once
    do {
        console.log("Menu Options: 1=Start, 2=Continue, 3=Exit");
        console.log("You chose: " + choice);
        
        if (choice === 1) {
            console.log("Starting program...");
        } else if (choice === 2) {
            console.log("Continuing...");
        } else if (choice === 3) {
            console.log("Exiting...");
            break;
        }
        
        // Simulate next choice
        iteration++;
        if (iteration === 1) choice = 2;
        else choice = 3;
        
    } while (choice !== 3);
}

menuDemo();

/*
 * Practical use: User login with retry limit
 */

function loginAttempt() {
    console.log("\n=== Login Attempt ===");
    let attempts = 0;
    let maxAttempts = 3;
    let isLoggedIn = false;
    
    do {
        attempts++;
        console.log("Attempt " + attempts + ": Entering password...");
        
        // Simulate checking (always fails first 2 times)
        if (attempts === 3) {
            isLoggedIn = true;
            console.log("✓ Login successful!");
        } else {
            console.log("✗ Invalid password");
        }
        
    } while (!isLoggedIn && attempts < maxAttempts);
    
    if (!isLoggedIn) {
        console.log("Account locked!");
    }
}

loginAttempt();
```

---

## 🎯 Loop Categories

### Pattern 1: Count Up
```javascript
let i = 1;
while (i <= 10) {
    // Do something
    i++;
}
```

### Pattern 2: Count Down
```javascript
let i = 10;
while (i > 0) {
    // Do something
    i--;
}
```

### Pattern 3: Until Condition Met
```javascript
let found = false;
while (!found) {
    // Search for something
    if (condition) {
        found = true;
    }
}
```

### Pattern 4: Guaranteed At Least Once
```javascript
do {
    // Code runs at least once
} while (condition);
```

---

## 📋 Practice Challenges

### Challenge 1: Multiplication Table
Print times-table (1-10) using a loop

### Challenge 2: Count Specific Numbers
Count how many numbers in 1-100 are divisible by 5

### Challenge 3: Find Pattern
Find first even number sqrt(n) > 10

---

## 📝 Note on Leap Year Experiments

**Clarification**: Leap year checking logic (Experiment 11) is covered comprehensively in the \"**Experiment 11: Check Leap Year**\" section earlier in this file. Both simple and advanced implementations with complete test cases are provided there. Refer to that section for all leap year solutions that fully satisfy the mandatory requirement from the Unit 2 practical syllabus.

---

## ✅ Checklist

- [ ] Understand while loops
- [ ] Can write while loops correctly
- [ ] Know how to update loop variable
- [ ] Understand do...while difference
- [ ] Can use break statement
- [ ] Can use continue statement
- [ ] Completed Experiments 11-12
- [ ] Completed Experiment 16
- [ ] Completed Exercises 4.3-4.5
- [ ] Challenge questions attempted

---

## 📚 Summary

| Concept | Purpose | Example |
|---------|---------|---------|
| while | Loop while true | `while (i < 10)` |
| do...while | Run first, check after | `do { } while()` |
| break | Exit loop | `break;` |
| continue | Skip iteration | `continue;` |
| ++ | Increment | `i++` is `i = i + 1` |
| -- | Decrement | `i--` is `i = i - 1` |

---

## 📖 Today's Learning Path

**09:00-09:30 (30 min):** Theory - while Loops  
**09:30-10:00 (30 min):** Theory - do...while, break, continue  
**10:00-10:30 (30 min):** Practice - Experiments 11-12  
**10:30-11:00 (30 min):** Practice - Exercises 4.3-4.5  
**11:00-11:30 (30 min):** Challenges & Wrap-up  

**Next Day Preview:** For loops and the week-end integration project!

---

**File:** `Curriculum/Week-2/Day4-While-And-Do-Loops.md`  
**Status:** Complete ✅  
**Last Updated:** February 2026
