# Assignment 1: Task Manager App

## Overview
A full-stack MERN application with user authentication and task management functionality.

## Features
- User registration and login with JWT authentication
- Task CRUD operations (Create, Read, Update, Delete)
- Task status toggle (pending/completed)
- Redux state management on frontend
- MongoDB database integration
- Responsive design

## Tech Stack
- **Frontend**: React.js, Redux Toolkit, CSS/Styled Components
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Project Structure
```
Assignment-1/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── store/          # Redux store and slices
│   │   ├── services/       # API calls
│   │   └── utils/          # Helper functions
│   ├── public/
│   └── package.json
├── server/                 # Express backend
│   ├── controllers/        # Route handlers
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── config/            # Database config
│   └── package.json
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Assignment-1
   ```

2. **Backend Setup**
   ```bash
   cd server
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd client
   npm install
   ```

4. **Environment Variables**
   Create `.env` file in server directory:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/taskmanager
   JWT_SECRET=your_jwt_secret_key
   ```

5. **Run the Application**
   
   Backend (Terminal 1):
   ```bash
   cd server
   npm run dev
   ```
   
   Frontend (Terminal 2):
   ```bash
   cd client
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Tasks
- `GET /api/tasks` - Get all user tasks
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task
- `PATCH /api/tasks/:id/toggle` - Toggle task status

## Features Implemented
- [x] User authentication (register/login)
- [x] JWT token management
- [x] Task CRUD operations
- [x] Task status toggle
- [x] Redux state management
- [x] Responsive design
- [x] Error handling
- [x] Form validation

## Demo
[Add demo video or deployment link here]

## Screenshots
[Add screenshots of the application]

## Challenges Faced
[Document any challenges and how you solved them]

## Future Enhancements
- Task categories/tags
- Due dates and reminders
- Task priority levels
- Search and filter functionality
- Dark mode theme

## Author
Vivek Gangani

## Submission Date
[Add submission date]
