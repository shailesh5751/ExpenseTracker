# 💸 Expense Tracker Web App

A full-stack web application for managing personal finances. Built using the MERN stack (MongoDB, Express, React, Node.js) and Apollo GraphQL for API communication.

## 🚀 Features

- Add, edit, delete expenses and income entries
- Real-time updates with Apollo Client
- JWT-based authentication and protected routes
- Modular GraphQL APIs for data operations
- Responsive UI for desktop and mobile

## 🛠️ Tech Stack

- **Frontend:** React.js, Apollo Client, Tailwind CSS
- **Backend:** Node.js, Express.js, GraphQL, Passport.js
- **Database:** MongoDB (with Mongoose)
- **Authentication:** JWT + Passport.js
- **Deployment:** Render / Netlify (optional)

## 📦 Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/shailesh5751/ExpenseTracker.git
   cd ExpenseTracker
   
2. **Install dependencies**
```bash
npm build
```

3. **Configure environment variables**

In backend/.env, set:

```env
MONGO_URI=your_mongo_connection_string
SESSION_SECRET=your_session_secret_string
```

4. **Run the app**

```bash
# Backend
cd backend
node index.js

# Frontend
cd frontend
npm run dev
```

## 🧑‍💻 Author
**Shailesh More**
📫 [LinkedIn](https://www.linkedin.com/in/shailesh-more) | [GitHub](https://github.com/shailesh5751)
