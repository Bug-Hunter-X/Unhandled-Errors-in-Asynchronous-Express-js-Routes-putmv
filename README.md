# Unhandled Errors in Asynchronous Express.js Routes

This repository demonstrates a common error in Node.js Express.js applications: unhandled errors within asynchronous route handlers.  Improper error handling in these scenarios can lead to server crashes and unexpected behavior.

## The Problem

The `bug.js` file contains an Express.js server with a route that simulates an asynchronous operation (e.g., database interaction).  This operation might fail, throwing an error.  Without proper error handling, this unhandled error will cause the server to crash.

## The Solution

The `bugSolution.js` file shows how to correctly handle potential errors using `try...catch` blocks within asynchronous route handlers, ensuring that the server remains operational even if errors occur.  The solution also logs the error for debugging purposes.

## How to Run

1. Clone the repository
2. Navigate to the project directory
3. Run `node bug.js` to see the unhandled error behavior.
4. Run `node bugSolution.js` to see the corrected error handling.