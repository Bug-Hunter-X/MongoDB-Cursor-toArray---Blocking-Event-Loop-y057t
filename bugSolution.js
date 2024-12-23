```javascript
async function getUsers() {
  const query = { name: /John/i };
  const cursor = db.collection('users').find(query);

  // Correct way to convert cursor to array using async/await
  const users = await cursor.toArray();
  return users;
}

// Example of how to use the asynchronous function
getUsers().then(users => {
  console.log(users);
}).catch(err => {
  console.error('Error fetching users:', err);
});
```