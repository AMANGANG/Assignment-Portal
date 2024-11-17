# Assignment Submission Portal

This is a backend system for an assignment submission portal built with **Node.js** and **MongoDB**. The system allows users to upload assignments, and admins can accept or reject them. Users and admins authenticate via **JWT (JSON Web Tokens)**.

## Features

- **Users** can:
  - Register and log in.
  - Upload assignments.
  
- **Admins** can:
  - Register and log in.
  - View assignments tagged to them.
  - Accept or reject assignments.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side programming.
- **Express**: Web framework for building REST APIs.
- **MongoDB**: NoSQL database to store user, admin, and assignment data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JWT (JSON Web Token)**: For user and admin authentication.
- **Bcryptjs**: For hashing user/admin passwords.
- **dotenv**: For managing environment variables.

## Installation

Follow the steps below to get this project up and running on your local machine.

### 1. Clone the Repository
git clone https://github.com/your-username/assignment-portal.git
cd assignment-portal

##Install Dependencies
- npm install

##Set Up Environment Variables
- PORT=5000
- MONGO_URI=mongodb://localhost:27017/assignment-portal  # Update this with your MongoDB URI (e.g., MongoDB Atlas)
- JWT_SECRET=your-secret-key  # You can use a random string here

##Run the Server
- npm start

##File Structure
- assignment-portal/
- │
- ├── controllers/              # Controllers for user and admin logic
- │   ├── adminController.js
- │   └── userController.js
- │
- ├── models/                   # MongoDB models
- │   ├── Admin.js
- │   ├── User.js
- │   └── Assignment.js
- │
- ├── routes/                   # API route definitions
- │   ├── adminRoutes.js
- │   └── userRoutes.js
- │ 
- ├── middleware/               # Middleware (authentication)
- │   └── authMiddleware.js
- │
- ├── .env                      # Environment variables (for local setup)
- ├── .gitignore                # Git ignore file
- ├── package.json              # Project metadata and dependencies
- ├── README.md                 # Project documentation
- └── server.js                 # Main entry point for the application
