# FP in TypeScript

## Functional Programming Fundamentals

- Learn about the following:
  - The main characteristics of functional programming
  - The main benefits of functional programming
  - Pure functions
  - side-effects
  - Immutability
  - Function arity
  - Higher-order functions
  - Laziness

### Is TypeScript a functional programming language

- The answer to this question is yes, but only in part. TypeScript is a multi-paradigm programming language and, as a result, it includes many influences from both OOP languages and functional programming paradigms.

### The benefits of functional programming

- Writing TypeScript code using a functional programming style has many benefits, among which we can highlight the following:

  - **Our code is testable**
  - **Our code is easy to reason about**
  - **Concurrency**
  - **Simpler caching**

### Introducing FP

- Functional programming (FP) is a programming paradigm that receives its name from the way we build applications when we use it. In a programming paradigm such as OOP, the main building blocks that we use to create an application are objects (objects are declared using classes). However, in FP, we use functions as the main building block in our applications.

### Pure functions

- A function can be considered pure when it returns a value that is computed using only the arguments passed to it. Also, a pure function avoids mutating its arguments or any other external variables. As a result, a pure function always returns the same value given the same arguments, independently of when it is invoked.

### Side-effects

- A pure function returns a value that can be computed using only the arguments passed to it. A pure function also avoids mutating its arguments or any other external variable that is not passed to the function as an argument. In FP terminology, it is common to say that a pure function is a function that has no side-effects, which means that, when we invoke a pure function, we can expect that the function is not going to interfere (through a state mutation) with any other component in our application.

### Referential transparency

### Stateless versus stateful

- A piece of code is stateless when its outcomes are not influenced by previous events.
- Pure functions and referential transparent expressions are stateless.
- The opposite of stateless code is stateful code

### Declarative versus imperative

[Code Demo](./fundamentals/imperative-declarative.ts)

### Immutability

- Immutability refers to the inability to change the value of a variable after a value has been assigned to it.

### Functions as first-class citizens

- It is common to find mentions of functions as **first-class citizens** in the FP literature. We say that a function is a first-class citizen when it can do everything that a variable can do, which means that functions can be passed to other functions as an argument.
  - It is returned by another function
  - It can also be assigned to variables

### Lambda expressions

``` const log = (arg: any) => console.log(arg); ```

### Function arity

- The **arity** of a function is the number of arguments that the function takes.
- A unary function is a function that only takes a single argument. Unary functions are very important in FP because they facilitate utilization of the function composition pattern.
- A binary function is a function that takes two arguments or more.
- A ternary function is a function that takes three arguments or more.
-

### Higher-order functions

- A higher-order function is a function that does at least one of the following things:
  - Takes one or more functions as arguments
  - Returns a function as its result

### Laziness

- The idea behind lazy evaluation is that operations are not computed until doing so can no longer be postponed.
- [Code Demo](./fundamentals/laziness.ts)

## Mastering Functions

### Function types

- [Code Demo](./mastering_functions/function_types.ts)
  
