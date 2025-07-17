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
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

3. **Configure environment variables**

In server/.env, set:

```env
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
```

4. **Run the app**

```bash
# Backend
cd server
npm run dev

# Frontend
cd ../client
npm start
```

## 🧑‍💻 Author
**Shailesh More**
📫 [LinkedIn]{https://www.linkedin.com/in/shailesh-more} | [GitHub]{https://github.com/shailesh5751}
