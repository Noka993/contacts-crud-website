# Contacts CRUD Website

A full-stack web application for managing contacts with Create, Read, Update, and Delete (CRUD) functionality.

## Features

- **Frontend**:
  - React-based user interface
  - Modal forms for creating/editing contacts
  - Responsive table display of all contacts
  - Edit and delete functionality for each contact
  - Real-time updates after modifications

- **Backend**:
  - Flask REST API
  - SQLite database with SQLAlchemy ORM
  - CORS support for frontend-backend communication
  - Full CRUD endpoints for contacts management
  - Error handling and validation

## Technologies Used

- **Frontend**:
  - React
  - Vite (build tool)
  - CSS for styling

- **Backend**:
  - Python
  - Flask
  - Flask-SQLAlchemy
  - Flask-CORS
  - SQLite

## Installation

### Backend Setup:
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   python main.py
   ```
### Frontend Setup
  ```bash
  cd frontend
  npm install
  npm run dev
  ```
### Open your browser to http://localhost:5173 (or the port indicated in the console)

## API Endpoints
- ```GET /contacts``` - Get all contacts
- ```POST /create_contact``` - Create a new contact
- ```PATCH /update_contact/<id>``` - Update an existing contact
- ```DELETE /delete_contact/<id>``` - Delete a contact

## License

This project is licensed under the [MIT License](LICENSE).
   
