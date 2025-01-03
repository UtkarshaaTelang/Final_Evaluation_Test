const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./utils/errorHandler');
const bcrypt = require("bcryptjs");
const User = require("./models/User");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

app.use('/api/auth', (req, res, next) => {
  console.log('API auth route hit');
  next(); // Continue to authRoutes
});


// Error Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/', (req, res) => {
    res.send('Server is running');
  });

  // app.post('/register', async (req, res) => {
  //   const { username, email, password, confirmPassword } = req.body;
  
  //   // Check if password and confirm password match
  //   if (password !== confirmPassword) {
  //     return res.status(400).json({ error: 'Passwords do not match' });
  //   }
  
  //   // Check if email already exists
  //   const existingUser = await User.findOne({ email });
  //   if (existingUser) {
  //     return res.status(400).json({ error: 'Email already exists' });
  //   }
  
  //   // Encrypt password
  //   const hashedPassword = await bcrypt.hash(password, 10);
  
  //   // Create new user
  //   const newUser = new User({
  //     username,
  //     email,
  //     password: hashedPassword,
  //   });
  
  //   try {
  //     await newUser.save();
  //     res.status(201).json({ message: 'User registered successfully' });
  //   } catch (error) {
  //     res.status(500).json({ error: 'Failed to register user' });
  //   }
  // });
  
  // // Login Route
  // app.post('/login', async (req, res) => {
  //   const { email, password } = req.body;
  
  //   // Check if user exists
  //   const user = await User.findOne({ email });
  //   if (!user) {
  //     return res.status(400).json({ error: 'Invalid email or password' });
  //   }
  
  //   // Compare passwords
  //   const isMatch = await bcrypt.compare(password, user.password);
  //   if (!isMatch) {
  //     return res.status(400).json({ error: 'Invalid email or password' });
  //   }
  
  //   // If login successful, return JWT or user data
  //   const token = generateAuthToken(user); // Assuming generateAuthToken is defined to generate JWT
  //   res.status(200).json({ message: 'Login successful', token });
  // });