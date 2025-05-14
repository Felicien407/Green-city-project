# 🌱 SeedTrack Platform

SeedTrack is an online platform that connects individuals, schools, NGOs, and communities seeking tree plants with cooperatives, individuals, and organizations supplying seedlings across Rwanda.

---

## 🚀 Features

- 👥 User roles: **Tree Seekers** and **Suppliers**
- 🌳 Suppliers can list available tree species, quantity, and prices
- 🔍 Seekers can search and filter tree types by location, species, and availability
- 📬 Booking and request system to connect seekers with suppliers
- 💬 Real-time chat between seekers and suppliers (via Socket.IO)
- 🔐 Authentication & authorization using JWT
- 🗺️ Supplier geolocation (optional with Mapbox or Leaflet)

---

## 🛠️ Tech Stack

### Frontend

- React.js
- TailwindCSS
- React Router
- Axios
- Socket.IO Client

### Backend

- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Socket.IO
- JWT Authentication

### Deployment

- Frontend: Vercel
- Backend: Render or Railway
- Database: MongoDB Atlas

---

## 📁 Project Structure

tree-link-platform/
├── client/ # React Frontend
├── server/ # Express Backend

---

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/Felicien407/Green-city-project.git
cd Green-city-project

Setup backend

cd server
npm install
touch .env

Setup from end

cd client
npm install
npm run dev

---

API Endpoints

POST   /api/auth/register         # Register user
POST   /api/auth/login            # Login user
GET    /api/trees                 # Fetch all listings
POST   /api/trees                 # Create new tree listing (supplier only)
POST   /api/messages              # Send a message
GET    /api/messages/:userId     # Get messages between users
```
