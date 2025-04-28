# MERN Event Management Application

This is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js) that allows users to manage and register for events. 

## Features

- User registration and authentication
- Event creation and management
- User registration for events
- View upcoming events
- Detailed event information

## Project Structure

```
mern-event-app
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   └── eventController.js
│   │   │   └── userController.js
│   │   ├── models
│   │   │   └── eventModel.js
│   │   │   └── userModel.js
│   │   ├── routes
│   │   │   └── eventRoutes.js
│   │   │   └── userRoutes.js
│   │   ├── server.js
│   │   └── config
│   │       └── db.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   └── EventCard.jsx
│   │   │   └── Navbar.jsx
│   │   ├── pages
│   │   │   └── HomePage.jsx
│   │   │   └── EventPage.jsx
│   │   │   └── RegisterPage.jsx
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles
│   │       └── App.css
│   ├── package.json
│   └── README.md
├── README.md
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd mern-event-app/backend
   ```

3. Install backend dependencies:
   ```
   npm install
   ```

4. Set up the database connection in `backend/src/config/db.js`.

5. Start the backend server:
   ```
   npm start
   ```

6. Navigate to the frontend directory:
   ```
   cd ../frontend
   ```

7. Install frontend dependencies:
   ```
   npm install
   ```

8. Start the frontend application:
   ```
   npm start
   ```

## Usage

- Register a new user to create an account.
- Create new events and manage them.
- Users can view upcoming events and register for them.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.