const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

const app = express();
const port = 3000;



// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the directory for your views
app.set('views', path.join(__dirname, 'views',));
app.use(express.static(path.join(__dirname, 'public')));

// Define route handler for the home page
app.get('/', (req, res) => {
  // Render the index.ejs view and send it as the response
  res.render('index',{posts:posts, comments:comments, users:users});
});




// Sample data
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

let posts = [
  { id: 1, userId: 1, title: 'Post 1' },
  { id: 2, userId: 2, title: 'Post 2' }
];

let comments = [
  { id: 1, postId: 1, userId: 1, body: 'Comment 1 on Post 1' },
  { id: 2, postId: 1, userId: 2, body: 'Comment 2 on Post 1' },
  { id: 3, postId: 2, userId: 1, body: 'Comment 1 on Post 2' }
];

// Custom middleware to log request details
const requestLogger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Call the next middleware in the stack
};

// Custom middleware to add a custom header to all responses
const customHeader = (req, res, next) => {
  res.setHeader('X-Custom-Header', 'Hello from custom middleware!');
  next(); // Call the next middleware in the stack
};

// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Apply the custom middleware globally
app.use(requestLogger); // Log request details
app.use(customHeader); // Add custom header to all responses

// Route for retrieving users
app.get('/users', (req, res) => {
  res.json(users);
});

// Route for retrieving a single user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Route for creating a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// Route for retrieving posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

// Route for creating a new post
app.post('/posts', (req, res) => {
  const newPost = req.body;
  posts.push(newPost);
  res.status(201).json(newPost);
});

// Route for retrieving comments with optional query parameters
app.get('/comments', (req, res) => {
  let filteredComments = comments;

  // Filter comments by postId if postId query parameter is provided
  if (req.query.postId) {
    const postId = parseInt(req.query.postId);
    filteredComments = filteredComments.filter(comment => comment.postId === postId);
  }

  // Filter comments by userId if userId query parameter is provided
  if (req.query.userId) {
    const userId = parseInt(req.query.userId);
    filteredComments = filteredComments.filter(comment => comment.userId === userId);
  }

  res.json(filteredComments);
});

// Route for creating a new comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.status(201).json(newComment);
});

// DELETE route for deleting a user
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === userId);
  if (index !== -1) {
    users.splice(index, 1);
    res.sendStatus(204); // No content
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// PUT route for updating a user
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === userId);
  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// PATCH route for updating a post
app.patch('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const index = posts.findIndex(post => post.id === postId);
  if (index !== -1) {
    posts[index] = { ...posts[index], ...req.body };
    res.json(posts[index]);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

// DELETE route for deleting a comment
app.delete('/comments/:id', (req, res) => {
  const commentId = parseInt(req.params.id);
  const index = comments.findIndex(comment => comment.id === commentId);
  if (index !== -1) {
    comments.splice(index, 1);
    res.sendStatus(204); // No content
  } else {
    res.status(404).json({ error: 'Comment not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});