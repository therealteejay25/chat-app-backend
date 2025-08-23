
### 📓 `backend/docs.md`

---

## 🔧 PROJECT OVERVIEW
This backend handles the chat functionality for a corporate messaging app that integrates Microsoft tools (e.g. Outlook, OneDrive, Calendar).  
Built with Node.js, Express, MongoDB, and Socket.IO.

---

## 🛠️ CURRENT SETUP
- MongoDB connected (`config/db.js`)
- Real-time messaging via Socket.IO (`config/socket.js`)
- Auth system using JWT (`routes/auth.js`, `middleware/auth.js`)
- Express structure: `routes`, `controllers`, `models`, `config`, `middleware`
- Basic endpoints tested with Postman

---

## ✅ TASKS COMPLETED
- Project initialized with `pnpm`
- Installed:
  - `express`
  - `mongoose`
  - `dotenv`
  - `cors`
  - `socket.io`
  - `nodemon` (dev)
- File structure created
- Auth routes done: register, login
- User profile route secured with auth middleware
- Socket.io set up for joining rooms and sending messages
- Message model created and integrated

---

## 🗓️ NEXT TASKS (TO DO)
- Add group chat logic
- Setup room history fetch on join
- Microsoft Graph API integration
- Upload file endpoint for sharing docs/media
- User roles: Admin, Manager, Member
- Typing indicators and message status (seen, delivered)
- Documentation for all API routes

---

## 🔐 ENV VARIABLES USED
```env
MONGO_URI=mongodb://localhost:27017/chat-app
JWT_SECRET=supersecretkey
PORT=5000
```

---

## 🧠 THOUGHTS / DEVELOPER LOG
- Using `pnpm` saved setup time and keeps things clean
- Will refactor Socket.IO logic into a service layer
- Need to enforce schema validation using something like `Joi` or `Zod`
- Add rate-limiting and helmet for basic security

---

## 🔢 API STRUCTURE (so far)
| Method | Endpoint        | Description               | Auth Required |
|--------|-----------------|---------------------------|---------------|
| POST   | /api/auth/login | Login with email/password | ❌ No         |
| POST   | /api/auth/register| Register new user      | ❌ No          |
| GET    | /api/user/profile| Get current user data   | ✅ Yes         |
| Socket | joinRoom        | Join a chat room         | ✅ Yes         |
| Socket | sendMessage     | Send a message           | ✅ Yes         |

---

## 🚀 PORT: 5000

---
I don try abeg 🥲😑