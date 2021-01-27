Part 1. Intro to Javascript


// Variables & Scoping

// var
1. At line 11, the value of i is printed. prices.length will be printed. Javascript var has no block scope. "i" is visible after loop. It is a global variable.

2. At line 12, the value of discountedPrice is printed. prices[prices.length - 1] * (1 - discount) will be printed. Javascript var has no block scope. "discountedPrice" is visible after the loop. It is a global variable.

3. At line 13, the value of finalPrice is printed, the last value stored in the variable given the discountedPrice. Javascript var has no block scope. "finalPrice" is visible after the loop. It is a global variable.

4. If we call discountPrices([100, 200, 300], .5), the function will return [50, 100, 150]. Javascript var has no block scope. "discounted" is visible function-scope and global-scope. After processing the prices array with the discount value, three new values are inserted in the discounted array.

// let
5. At line 11, a reference error will be produced claiming that "i" was not defined. i is a let variable declaration, so i only lives in the for loop code block.
   
6. At line 12, a reference error will be produced claiming that "discountedPrice" was not defined. discountedPrice is a let variable declaration, so it only lives in the for loop code block.
   
7. At line 13, finalPrice will be printed. It was initialized as a let variable declaration within the function-scope.
   
8. If we call discountPrices([100, 200, 300], .5), the function will return [50, 100, 150]. "discounted" is visible function-scope. After processing the prices array with the discount value, three new values are inserted in the discounted array.

// const
9.  At line 11, a reference error will be produced claiming that "i" was not defined. i is a let variable declaration, so i only lives in the for loop code block. 
    
10. At line 12, a reference error will be produced claiming that "discountedPrice" was not defined. discountedPrice is a const variable declaration, so it only lives in the for loop code block.

11. At line 13, 0 will be printed. finalPrice is a const variable declaration that is function-scope. Once declared, its value can't ve changed.
    
12. If we call discountPrices([100, 200, 300], .5), the function will return []. "discounted" is a const variable declaration, so its value is immutable.

// Data Types

13. student object
    A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher']['name']
    E. student.courseLoad[0]

// Basic Operators & Type Conversion

14. Arithmetic
    A. '32'                 // string concatenation
    B. 1                    // stings are converted to numbers
    C. 3                    // 3 + 0 
    D. '3null'              // string concatenation
    E. 4                    // true has the value 1; 1 + 3
    F. 0                    // 0 + 0
    G. '3undefined'         // string concatenation
    H. NaN                  // error; undefined is NaN as a number

15. Comparison
    A. true                 // strings are converted to numbers
    B. false                // dictionary comparison; first char '2' is greater than first char '1'
    C. true                 // strings are converted to numbers
    D. false                // types are different
    E. false                // true becomes 1; 1 is not equal to 2
    F. true                 // Boolean(2) is true

16. A strict equality operator === checks the equality without type conversion. Regular equality check == allows operands of different types to be converted to numbers--thus, harder to differentiate something like false and 0.

// Conditionals

17. From the code snippet, 'How are you?' gets printed. Observe that 2 is not equal to 1 in the first if statement. Then it checks the next elif which is true, because any nonzero value is true in terms of boolean.

// Loops

18. // part1-question18.js

// Functions

19. If we call modifyArray([1,2,3], doSomething), the result will be [ 6, 8, 10 ]. Our modifyArray function runs after the doSomething callback is complete. doSomething adds 2 to each num, so we get [3, 4, 5]. Once the doSomething callback is completed, it will then multiply each num in the array by 2 producing [6, 8, 10].
    
20. // part1-question20.js

21. The output of the code is 
    1
    4
    3
    2


    