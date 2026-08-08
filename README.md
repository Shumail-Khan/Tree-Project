# Tree-Project - A MERN Stack Application

This is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for a tree service company. It features a comprehensive client-facing website to showcase services, and a powerful admin panel for managing content, services, and customer requests.

## Features

### Client-Facing Website

*   **Services Pages:** Detailed pages for various services like Tree Removal, Tree Trimming, Land Clearing, etc.
*   **Location-Specific Pages:** Pages tailored for different service areas.
*   **Blog:** A blog to share articles and news, with posts organized by categories.
*   **Photo Gallery:** A gallery to showcase completed projects.
*   **Testimonials:** Display customer testimonials and ratings.
*   **Contact & Estimate Forms:** Allow users to contact the company and request service estimates.

### Admin Panel

*   **Secure Login:** Admin authentication using JWT.
*   **Dashboard:** An overview of the application's status.
*   **Blog Management:** Full CRUD (Create, Read, Update, Delete) functionality for blog posts.
*   **Category Management:** Add, delete, and update blog categories.
*   **Request Management:** View and manage customer service requests and estimates.
*   **Profile Management:** Admins can change their password and update their profile.

## Technologies Used

### Backend

*   Node.js
*   Express.js
*   MongoDB with Mongoose
*   JSON Web Token (JWT) for authentication
*   Bcrypt for password hashing
*   Multer for file uploads
*   Slugify for SEO-friendly URLs

### Frontend

*   React.js
*   Vite
*   React Router for navigation
*   Redux Toolkit for state management
*   Axios for API requests
*   Material-UI for UI components
*   Tailwind CSS for styling
*   React Quill for rich text editing

## Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/tree-project.git
    cd tree-project
    ```
2.  **Backend Setup:**
    ```bash
    cd Backend
    npm install
    ```
    Create a `.env` file in the `Backend` directory and add the following environment variables:
    ```
    MONGO_URI=<your_mongodb_connection_string>
    JWT_SECRET=<your_jwt_secret>
    ```
3.  **Frontend Setup:**
    ```bash
    cd ../Frontend
    npm install
    ```

## Usage

1.  **Start the backend server:**
    ```bash
    cd Backend
    npm start
    ```
    The backend will be running on `http://localhost:5000` (or the port you configure).

2.  **Start the frontend development server:**
    ```bash
    cd Frontend
    npm run dev
    ```
    The frontend will be running on `http://localhost:5173` (or the port Vite chooses).

3.  **Access the application:**
    *   **Website:** Open your browser and go to `http://localhost:5173`.
    *   **Admin Panel:** Navigate to `http://localhost:5173/admin/login` to log in as an admin.
