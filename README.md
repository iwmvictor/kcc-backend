# Kigali Car Connekt Backend (kcc-be)

This is the backend API for the **Kigali Car Connekt** project. The API is built with **Node.js**, **Express.js**, and connects to **MongoDB** for data storage. It provides routes for managing car listings, bookings, messages, and user authentication.

## Table of Contents

- [Installation](#installation)
- [Technologies](#technologies)
- [Environment Variables](#environment-variables)
- [Endpoints](#endpoints)
  - [Authentication Routes](#authentication-routes)
  - [Car Routes](#car-routes)
  - [Booking Routes](#booking-routes)
  - [Message Routes](#message-routes)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/iwmvictor/kcc-be.git
   cd kcc-be
   ```

2. Installation

```bash
npm install

```

3. Add following variables:

```MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
PORT=5000
```

4. Start server

```
npm start
```

Live Preview: [Kigali Car Connekt Website](https://www.kigalicarconnekt.com/)
