# Palindrome Checker

Palindrom checker algorithm for the freeCodeCamp JavaScript Algorithms and Data Structures.

## What Is The Problem?

```
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
```

## How It Works

- The function takes a string to check then converts it to lowercase then matches if the characters are letters, and numbers.
- If there is no string after attempting to convert it will return false as there is nothing to check.
- If there is a string it will loop through half of the string and check if the end of the string matches which step it is at and will return false if it doesn't match.
- After the loop finished it will return true as it is a palindrome.
