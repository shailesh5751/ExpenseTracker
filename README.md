![Demo App](https://i.ibb.co/WHyMscm/Screenshot-42.png)

# Expense Tracker Web App

**ExpenseTracker** is a full-stack personal finance management platform that empowers users to track, manage, and analyze their income and expenses. Built on the MERN stack (MongoDB, Express.js, React.js, Node.js) and enriched with GraphQL, it offers a dynamic and efficient user experience.

---

## Features

- **CRUD operations**: Seamlessly add, edit, and delete both expense and income entries.
- **Real-time UI updates**: Powered by Apollo Client and GraphQL subscriptions for a reactive interface.
- **Secure access control**: Implements JWT-based authentication with protected routes to safeguard data.
- **Modular API design**: Organized GraphQL API structure for clean, maintainable backend logic.
- **Responsive UI**: Tailwind CSS ensures compatibility across desktop and mobile devices.

---

## Tech Stack

| Layer        | Technologies & Tools                   |
|--------------|----------------------------------------|
| Frontend     | React.js, Apollo Client, Tailwind CSS  |
| Backend      | Node.js, Express.js, GraphQL, Passport.js |
| Database     | MongoDB (via Mongoose)                 |
| Authentication | JWT + Passport.js                   |
| Deployment   | Render / Netlify (optional)            |

---

## Prerequisites

Before setting up the project locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or above)  
- [npm](https://www.npmjs.com/) (v6 or above)  
- MongoDB instance (local or cloud-hosted like MongoDB Atlas)  

---

## Getting Started (Development Setup)

1. **Clone the repository**

   ```bash
   git clone https://github.com/shailesh5751/ExpenseTracker.git
   cd ExpenseTracker
   ```

2. **Install project dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   In `backend/.env`, add:

   ```
   MONGO_URI=your_mongo_connection_string
   SESSION_SECRET=your_session_secret_string
   ```

4. **Run the application**

   - Start the backend server:

     ```bash
     cd backend
     node index.js
     ```

   - Launch the frontend:

     ```bash
     cd frontend
     npm run dev
     ```

5. **Open your browser**

   Visit `http://localhost:3000` (or whichever port your frontend is running on) to start using the app.

---

## Project Structure

```
ExpenseTracker/
├── backend/
│   ├── index.js              # App entry-point
│   ├── schema/               # GraphQL type definitions & resolvers
│   ├── models/               # Mongoose schemas
│   └── config/               # Config files for JWT, database, auth, etc.
│
├── frontend/
│   ├── src/
│   │   ├── components/       # React UI components
│   │   ├── apollo/           # Apollo GraphQL client setup
│   │   └── styles/           # Tailwind and other styling
│   └── public/               # Static assets
│
├── .gitignore
├── package.json
└── README.md
```

---

## Deployment Tips

- **Environment Variables**: Ensure `MONGO_URI` and `SESSION_SECRET` are configured in your hosting service.
- **Separate Build Steps**: Most platforms (Render, Netlify) allow you to point separately to frontend and backend build scripts.
- **CORS & Routing**: If serving the frontend from a different origin, configure CORS accordingly and ensure GraphQL requests are routed properly.

---

## Author

**Shailesh More**  
- [GitHub Profile](https://github.com/shailesh5751)
- [LinkedIn](https://www.linkedin.com)

---

## License

MIT License

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## Contributing

Interested in contributing? Here’s how to get started:

- Fork the _ExpenseTracker_ repository.
- Create a new feature branch:

  ```bash
  git checkout -b feature/your-feature
  ```

- Make your changes, commit thoroughly, and submit a pull request.

---

## Contact

Questions, feedback, or suggestions?  
Feel free to open an issue or reach out via GitHub or LinkedIn!

