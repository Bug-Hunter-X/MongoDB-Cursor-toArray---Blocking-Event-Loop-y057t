```javascript
const query = { name: /John/i };
const cursor = db.collection('users').find(query);

// Incorrect way to convert cursor to array
const users = cursor.toArray(); // This will block the event loop until all results are fetched
```