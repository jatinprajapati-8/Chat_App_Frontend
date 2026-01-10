# 💬 MERN Stack Real-Time Chat Application

A fully functional **Full-Stack Chat Application** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.  
This project demonstrates real-world backend architecture, secure authentication, RESTful APIs, and a modern React frontend.

---

## 🔥 Live Overview

This chat app allows users to **register, login, create or access chats, and send real-time messages**, with all data securely stored in MongoDB.

It is designed with **scalability, clean code structure, and production-level practices** in mind.

---

## ✨ Features

### 🔐 Authentication & Security
- User Registration & Login
- JWT-based Authentication
- Password hashing using bcrypt
- Protected Routes (Frontend & Backend)
- Middleware-based user verification

### 💬 Chat & Messaging
- One-to-One Chat System
- Create or Fetch Existing Chats
- Send & Receive Messages
- Messages stored in MongoDB
- Last Message Preview Support

### ⚙️ Backend Architecture
- RESTful APIs
- MVC Pattern (Models, Controllers, Routes)
- Centralized Error Handling
- Async Error Wrapper
- Secure Token Validation

### 🎨 Frontend
- Clean & Responsive UI
- Conditional Rendering based on Auth State
- Protected Routes using React Router
- Global State Management (Context API / Redux)

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Context API / Redux
- Tailwind CSS / CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- webSockets
- JWT (jsonwebtoken)
- bcrypt.js

---

## 📁 Folder Structure

├── backend
│ ├── controllers
│ │ ├── auth.controller.js
│ │ ├── chat.controller.js
│ │ └── message.controller.js
│ ├── models
│ │ ├── user.model.js
│ │ ├── chat.model.js
│ │ └── message.model.js
│ ├── routes
│ │ ├── auth.routes.js
│ │ ├── chat.routes.js
│ │ └── message.routes.js
│ ├── middleware
│ │ └── verifyUser.js
│ ├── utils
│ │ ├── asyncErrorHandler.js
│ │ └── CustomError.js
│ ├── config
│ │ └── db.js
│ └── server.js
│
├── frontend
│ ├── src
│ │ ├── components
│ │ ├── pages
│ │ ├── context
│ │ ├── services
│ │ └── App.js
│
└── README.md

yaml
Copy code

---

## 🔑 API Endpoints

### Auth
- `POST /api/auth/register` → Register User
- `POST /api/auth/login` → Login User

### Chat
- `POST /api/chat` → Create or Access Chat
- `GET /api/chat` → Get All Chats for Logged-in User

### Message
- `POST /api/message` → Send Message
- `GET /api/message/:chatId` → Fetch Messages of a Chat

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```bash

git clone https://github.com/your-username/chat-app.git
cd chat-app

2️⃣ Backend Setup
bash
Copy code
cd backend
npm install
Create .env file:

env
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Run backend server:

bash
Copy code
npm run dev
3️⃣ Frontend Setup
bash
Copy code
cd frontend
npm install
npm start
