# JWT Auth API

A **RESTful API** for user authentication built with **Node.js, Express, MongoDB, and JWT**.  
This project demonstrates secure user registration, login, password hashing with bcrypt, and protected routes using JSON Web Tokens.

---

## 🚀 Features
- User registration with hashed passwords (bcrypt)
- User login with JWT authentication
- Protected routes (require valid token)
- Environment variable configuration using `.env`
- MongoDB integration (Mongoose)
- Express middleware for error handling and logging (morgan, cors)
- Nodemon for development auto-restart

---

## 📂 Project Structure
```
jwt-auth-api/
├── config/          # Configuration files (DB connection, environment setup)
├── controllers/     # Route controllers (register, login, etc.)
├── db/              # Database connection and setup (MongoDB)
├── middlewares/     # Auth middleware (JWT verification, error handling)
├── models/          # Mongoose models (User schema)
├── routes/          # API routes (auth routes, user routes)
├── utils/           # Utility functions (token generation, helpers)
├── .env             # Environment variables
├── package.json     # Project dependencies and scripts
├── server.js        # Server setup
└── app.js           # Express app configuration
```

---

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Md-Abu-Omayer-Babu/jwt-auth-node.git
   cd jwt-auth-node
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file in the root directory:**
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the API (development mode):**
   ```bash
   npm run dev
   ```

---

## 🔑 API Endpoints

### Auth Routes
| Method | Endpoint        | Description             | Protected |
|--------|-----------------|-------------------------|-----------|
| POST   | `/api/auth/register` | Register a new user    | ❌        |
| POST   | `/api/auth/login`    | Login and get token    | ❌        |
| GET    | `/api/auth/profile`  | Get user profile (JWT) | ✅        |

---

## 🔒 JWT Authentication Flow
1. User registers → Password hashed and stored.
2. User logs in → Valid credentials return a **JWT token**.
3. Protected routes require **Authorization: Bearer <token>** header.
4. Middleware verifies JWT before granting access.

---

## 📦 Scripts
- **Start server (production):**
  ```bash
  npm start
  ```
- **Start server (development with nodemon):**
  ```bash
  npm run dev
  ```

---

## 🧰 Tech Stack
- **Node.js** (Runtime)
- **Express.js** (Framework)
- **MongoDB + Mongoose** (Database)
- **JWT (jsonwebtoken)** (Authentication)
- **bcryptjs** (Password hashing)
- **dotenv** (Environment variables)
- **morgan, cors** (Logging & CORS handling)

---

## 📝 License
This project is licensed under the [MIT License](LICENSE).
