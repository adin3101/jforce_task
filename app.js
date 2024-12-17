import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import connectDb from "./config/db.js";
import adminRoutes from "./routes/adminRoutes.js"
import feedbackRoutes from "./routes/feedbackRoutes.js";
import userRoutes from "./routes/userRoutes.js"
import cors from "cors"
// Initialize the Express app
const app = express();
app.use(cors({
  origin: ['http://127.0.0.1:5500'], 
  methods: ['GET','POST', 'PUT', 'DELETE'],
  credentials: true, 
}));  

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware to parse cookies
app.use(cookieParser());

// Connect to the database
connectDb();

// Use routes
app.use('/admin',adminRoutes );
app.use('/feedback', feedbackRoutes);
app.use('/user', userRoutes);

// Serve static files (CSS, JS)
app.use(express.static('public'));

// Start the server
const port =  5500;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

