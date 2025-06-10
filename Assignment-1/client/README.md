# Task Manager Frontend

A modern, responsive task management application built with React, Redux Toolkit, and Tailwind CSS.

## Features

- **Authentication**: Secure login and registration with JWT tokens
- **Task Management**: Create, read, update, and delete tasks
- **Task Filtering**: Filter tasks by status (all, completed, pending)
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Updates**: Instant UI updates with optimistic updates
- **Form Validation**: Client-side validation with error handling
- **Loading States**: Visual feedback for all async operations

## Tech Stack

- **React 18** - UI library
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI components
- **TypeScript** - Type safety
- **Vite** - Build tool

## Project Structure

\`\`\`
src/
├── components/
│ ├── auth/
│ │ ├── auth-provider.tsx
│ │ ├── login-page.tsx
│ │ ├── register-page.tsx
│ │ └── protected-route.tsx
│ ├── layout/
│ │ └── navigation.tsx
│ ├── tasks/
│ │ ├── task-dashboard.tsx
│ │ ├── task-form.tsx
│ │ ├── task-list.tsx
│ │ ├── task-item.tsx
│ │ └── task-filters.tsx
│ └── ui/ (shadcn/ui components)
├── store/
│ ├── store.ts
│ └── slices/
│ ├── auth-slice.ts
│ └── task-slice.ts
├── services/
│ └── api.ts
├── hooks/
│ └── use-redux.ts
└── App.tsx
\`\`\`

## Installation

1. Clone the repository:
   \`\`\`bash
   git clone <repository-url>
   cd task-manager-frontend
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Create a \`.env\` file in the root directory:
   \`\`\`env
   VITE_API_BASE_URL=http://localhost:5000/api
   \`\`\`

4. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

The application will be available at \`http://localhost:5173\`.

## API Integration

The frontend expects the following API endpoints:

### Authentication

- \`POST /api/auth/login\` - User login
- \`POST /api/auth/register\` - User registration

### Tasks

- \`GET /api/tasks\` - Get all user tasks
- \`POST /api/tasks\` - Create a new task
- \`PUT /api/tasks/:id\` - Update a task
- \`DELETE /api/tasks/:id\` - Delete a task

### Expected API Response Format

**Login/Register Response:**
\`\`\`json
{
"token": "jwt-token-here",
"user": {
"id": "user-id",
"name": "User Name",
"email": "user@example.com"
}
}
\`\`\`

**Task Object:**
\`\`\`json
{
"id": "task-id",
"title": "Task Title",
"description": "Task Description",
"completed": false,
"priority": "medium",
"dueDate": "2024-01-15",
"createdAt": "2024-01-01T00:00:00.000Z",
"updatedAt": "2024-01-01T00:00:00.000Z"
}
\`\`\`

## State Management

The application uses Redux Toolkit with the following slices:

### Auth Slice

- Manages user authentication state
- Handles login, register, and logout actions
- Stores JWT token and user information

### Task Slice

- Manages task data and operations
- Handles CRUD operations for tasks
- Manages task filtering state

## Features in Detail

### Authentication

- JWT token-based authentication
- Automatic token refresh handling
- Protected routes that redirect to login
- Persistent login state across browser sessions

### Task Management

- Create tasks with title, description, priority, and due date
- Mark tasks as completed/pending
- Edit existing tasks inline
- Delete tasks with confirmation
- Filter tasks by completion status

### UI/UX

- Responsive design that works on all screen sizes
- Loading indicators for all async operations
- Toast notifications for user feedback
- Form validation with error messages
- Clean, modern interface with proper spacing

## Building for Production

\`\`\`bash
npm run build
\`\`\`

The built files will be in the \`dist\` directory.

## Environment Variables

- \`VITE_API_BASE_URL\` - Backend API base URL (default: http://localhost:5000/api)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License
