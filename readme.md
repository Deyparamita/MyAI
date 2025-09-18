# MyAI 🚀

MyAI is a full-stack AI SaaS application built with **MERN (MongoDB, Express, React, Node.js)** and **Clerk Authentication**.  
It provides multiple AI-powered features such as:
- ✍️ Generate Articles
- 📰 Generate Blog Titles
- 🖼️ Generate Images
- 🪄 Remove Image Background
- 🎯 Remove Image Objects
- 📄 Resume Review (AI-powered)

## 📂 Project Structure
```plaintext
project-root/
│── server/
│ ├── controllers/
│ │ ├── aiController.js # Handles AI feature logic
│ │ └── userController.js # Handles user-related logic
│ ├── middlewares/
│ │ └── auth.js # Authentication & plan check
│ ├── configs/
│ │ └── multer.js # File upload config
│ ├── routes/
│ │ ├── aiRouter.js # Routes for AI features
│ │ └── userRouter.js # Routes for user features
│ └── server.js # Express app entry point
│
│── client/
│ ├── src/
│ │ ├── pages/ # React pages
│ │ ├── components/ # Reusable components
│ │ └── App.jsx # React entry point
│
│── README.md
```

---

## ⚙️ Tech Stack

- **Frontend**: React, Axios, TailwindCSS
- **Backend**: Node.js, Express
- **Authentication**: Clerk
- **Database**: MongoDB
- **AI Integration**: OpenAI API (or Gemini/other providers)
- **File Uploads**: Multer

---

## 🔑 Features

- 🔒 User Authentication with Clerk
- 📊 Free vs Premium plan handling
- 💾 Track free usage via `privateMetadata`
- 🖼️ Upload files (images, resumes) using Multer
- 🤖 AI-powered generation & review

---