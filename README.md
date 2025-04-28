# MERN Event Management Application

This is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js) that allows users to manage and register for events. The application includes functionalities for user registration, event creation, and event registration.

## Features

- User Registration: Users can create an account to register for events.
- Event Creation: Admin users can create new events with details such as title, description, and date.
- Event Registration: Users can register for events they are interested in.
- User Dashboard: Users can view their registered events.

## Project Structure

```
mern-event-app
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── config
│   │   └── server.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── styles
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd mern-event-app
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

### API Endpoints

- **User Routes**
  - `POST /api/users/register`: Register a new user
  - `POST /api/users/login`: Login a user
  - `GET /api/users/events`: Get registered events for a user

- **Event Routes**
  - `POST /api/events`: Create a new event
  - `GET /api/events`: Get all events
  - `POST /api/events/:id/register`: Register for an event

## License

This project is licensed under the MIT License.