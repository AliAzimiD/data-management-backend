

```markdown
# Data Management Backend

This repository contains the backend service for the Enhanced Data Management Application. The backend provides a robust API for managing dynamic data types, fields, and rows, with advanced features like CSV import/export and history tracking.

## Tech Stack

- **Node.js**: Backend runtime environment
- **Express**: Web framework for Node.js
- **PostgreSQL**: Relational database
- **Prisma ORM**: Database schema management and query builder
- **Redis**: Caching layer (optional, for future use)
- **Docker**: Containerization for deployment
- **Jest**: Unit testing framework

## Features

- RESTful API for managing:
  - Types (`TypeDefinition`)
  - Fields (`FieldDefinition`)
  - Rows (`Row`)
- CSV import/export with data validation
- Error handling and consistent response structure
- Environment variable support with `.env` files

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-org/data-management-backend.git
   cd data-management-backend


2.  **Install dependencies**:
    
    ```bash
    npm install
    ```
    
3.  **Configure environment variables**: Create a `.env` file based on `.env.example`:
    
    ```plaintext
    DATABASE_URL=postgresql://user:password@localhost:5432/dbname
    PORT=3000
    ```
    
4.  **Run the application**:
    
    ```bash
    npm start
    ```
    
5.  **Run tests**:
    
    ```bash
    npm test
    ```
    

API Endpoints
-------------

Method

Endpoint

Description

GET

`/api/types`

Fetch all types

POST

`/api/types`

Create a new type

GET

`/api/fields`

Fetch fields for a type

POST

`/api/rows`

Add a new row

GET

`/api/rows`

Fetch rows with filtering

POST

`/api/import`

Import rows from CSV

GET

`/api/export`

Export rows to CSV

License
-------

This project is licensed under the MIT License.

````yaml

---

#### **Repository 2: Frontend (data-management-frontend)**

**Repository Description:**  
This repository contains the frontend for the Enhanced Data Management Application. Built with React and TypeScript, the frontend provides an intuitive and responsive user interface for managing data, applying filters, and importing/exporting CSV files.

---

**`README.md` for Frontend Repository**

```markdown
# Data Management Frontend

This repository contains the frontend application for the Enhanced Data Management Application. The frontend allows users to define custom data types and fields, manage rows, apply filters, and import/export data in CSV format.

## Tech Stack

- **React**: JavaScript library for building user interfaces
- **TypeScript**: Typed superset of JavaScript
- **Redux Toolkit**: State management library
- **Axios**: HTTP client for API integration
- **React Hook Form**: Form management
- **Yup**: Schema validation for forms
- **TailwindCSS**: Utility-first CSS framework for styling
- **Jest**: Unit testing framework
- **Cypress**: End-to-end testing framework

## Features

- Dynamic form handling for user-defined types and fields
- Advanced filtering options, including range filters
- CSV import/export functionality
- History tracking of selected rows
- Responsive UI with TailwindCSS

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-org/data-management-frontend.git
   cd data-management-frontend


2.  **Install dependencies**:
    
    ```bash
    npm install
    ```
    
3.  **Configure environment variables**: Create a `.env` file based on `.env.example`:
    
    ```plaintext
    REACT_APP_API_URL=http://localhost:3000/api
    ```
    
4.  **Run the application**:
    
    ```bash
    npm start
    ```
    
5.  **Run tests**:
    
    ```bash
    npm test
    ```
    

Folder Structure
----------------

```plaintext
src/
├── components/        # UI components
├── hooks/             # Custom React hooks
├── pages/             # Main page components
├── services/          # API service layer
├── store/             # Redux store and slices
├── styles/            # Global and component styles
├── utils/             # Utility functions
└── App.tsx            # Main app component
