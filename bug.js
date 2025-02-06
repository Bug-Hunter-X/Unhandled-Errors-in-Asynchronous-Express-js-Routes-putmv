const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    // This will throw an error if the condition is met
    if (Math.random() < 0.5) {
      throw new Error('Simulated database error');
    }
    res.send('Hello from Express!');
  }, 1000);
});
app.listen(3000, () => console.log('Server listening on port 3000'));