# Assignment 2: Student Management System

## Overview
A dashboard-based student CRUD system with role-based access control for managing student records.

## Features
- Role-based access control (Admin vs User)
- Student CRUD operations (Create, Read, Update, Delete)
- Dashboard with analytics and statistics
- Responsive UI design
- Search and filter functionality
- User management for admins

## Tech Stack
- **Frontend**: React.js, Redux Toolkit, Material-UI/Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT with role-based permissions

## User Roles

### Admin
- Full CRUD access to students
- User management capabilities
- View system analytics
- Export student data

### User (Teacher/Staff)
- View student records
- Limited edit permissions
- Add new students
- Generate reports

## Project Structure
```
Assignment-2/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── Dashboard/  # Dashboard components
│   │   │   ├── Students/   # Student management
│   │   │   └── Users/      # User management
│   │   ├── pages/          # Page components
│   │   ├── store/          # Redux store and slices
│   │   ├── services/       # API calls
│   │   ├── utils/          # Helper functions
│   │   └── hooks/          # Custom hooks
│   ├── public/
│   └── package.json
├── server/                 # Express backend
│   ├── controllers/        # Route handlers
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API routes
│   ├── middleware/        # Auth & role middleware
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
   cd Assignment-2
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
   MONGODB_URI=mongodb://localhost:27017/studentmanagement
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
- `GET /api/auth/profile` - Get user profile

### Students
- `GET /api/students` - Get all students (with pagination)
- `POST /api/students` - Create new student
- `GET /api/students/:id` - Get student by ID
- `PUT /api/students/:id` - Update student
- `DELETE /api/students/:id` - Delete student (Admin only)

### Users (Admin only)
- `GET /api/users` - Get all users
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user role
- `DELETE /api/users/:id` - Delete user

### Dashboard
- `GET /api/dashboard/stats` - Get dashboard statistics

## Features Implemented
- [x] Role-based authentication
- [x] Student CRUD operations
- [x] Dashboard with statistics
- [x] User management (Admin)
- [x] Search and filter students
- [x] Responsive design
- [x] Data validation
- [x] Error handling
- [x] Pagination

## Demo
[Add demo video or deployment link here]

## Screenshots
[Add screenshots of the application]

## Default Login Credentials
```
Admin:
Email: admin@example.com
Password: admin123

User:
Email: user@example.com
Password: user123
```

## Challenges Faced
[Document any challenges and how you solved them]

## Future Enhancements
- Student attendance tracking
- Grade management
- Parent portal
- Email notifications
- File upload for student documents
- Advanced reporting

## Author
Vivek Gangani

## Submission Date
[Add submission date]
