Community Platform
This is a community platform built using the MERN Stack (MongoDB, Express, React, Node.js). It allows users to register, login, and interact with a community by viewing updates, key metrics, and exploring a member directory.

Features
User Authentication: Secure login for existing users.
Registration for new users with proper validations.
Community Dashboard: Displays community updates.
Displays key community metrics (e.g., total members, recent joiners).
Member Directory:
A searchable directory of community members with relevant details.
Tech Stack
Frontend: React.js
Backend: Node.js with Express
Database: MongoDB
Authentication: JWT & Passport.js
Project Structure
Backend
plaintext
Copy
backend/
|-- config/
|   |-- passport.js                # Passport configuration for authentication
|-- controllers/
|   |-- authController.js          # Handles user registration and login
|   |-- dashboardController.js     # Manages dashboard data
|   |-- memberController.js        # Manages member data and search functionality
|-- models/
|   |-- User.js                    # Mongoose model for User
|-- routes/
|   |-- authRoutes.js              # Routes for authentication (register, login)
|   |-- dashboardRoutes.js         # Routes for fetching dashboard data
|   |-- memberRoutes.js            # Routes for fetching member data
|-- server.js                      # Main server file to start the Express server
|-- .env                           # Environment variables (e.g., MongoDB URI, JWT Secret)
Frontend
plaintext
Copy
frontend/
|-- src/
|   |-- components/                # Reusable React components
|   |   |-- Navbar/                # Navigation bar component
|   |   |-- Auth/                  # Components related to authentication (Login, Register, ProtectedRoute)
|   |   |-- Dashboard/             # Dashboard component to show updates and metrics
|   |   |-- MemberDirectory/       # Component for displaying and searching community members
|   |-- context/                   # Context for managing authentication state
|   |-- App.js                     # Main application file with routing
|   |-- index.js                   # Entry point of the React application
Installation
Backend
Clone the repository:

bash
Copy
git clone https://github.com/yourusername/community-platform.git
cd community-platform/backend
Install dependencies:

bash
Copy
npm install
Create a .env file in the backend directory and add the following:

makefile
Copy
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
Run the server:

bash
Copy
npm run start
Frontend
Navigate to the frontend directory:

bash
Copy
cd community-platform/frontend
Install dependencies:

bash
Copy
npm install
Set up the API URL in the frontend code:

In frontend/src/Main.jsx, update the base URL of Axios:

js
Copy
axios.defaults.baseURL = 'http://localhost:5000';
Start the React development server:

bash
Copy
npm start
This will start the frontend on http://localhost:3000.

Usage
Register a New Account:

Go to /register and create a new account by providing your name, email, and password.
Login:

Go to /login and enter your credentials to log in.
Dashboard:

After logging in, you will be redirected to the /dashboard where you can view community updates and key metrics.
Member Directory:

Access the /members page to view and search for community members.
API Endpoints
Authentication
POST /api/auth/register: Register a new user.
POST /api/auth/login: Log in an existing user and receive a JWT token.
GET /api/auth/me: Get logged-in user's details (requires JWT token).
Dashboard
GET /api/dashboard: Fetch community updates and metrics.
Members
GET /api/members: Fetch all members.
GET /api/members/search: Search members by name.
Contributing
We welcome contributions! If you'd like to help improve this project, please fork the repository, create a branch, and submit a pull request with your changes.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Thanks to the open-source community for providing tools and libraries like React, Express, Passport, etc.
This project was built as part of a learning experience with the MERN stack.
