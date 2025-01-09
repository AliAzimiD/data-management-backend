

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

