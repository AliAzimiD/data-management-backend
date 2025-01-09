### Git Commands for Each Task: A Guide

* * *

### **General Guidelines for Using Git Commands**

For every task, you should follow a structured Git workflow:

1.  **Create a new branch for the task.**
2.  **Stage and commit changes regularly.**
3.  **Push the branch to the remote repository.**
4.  **Open a pull request (PR) when the task is complete.**
5.  **Merge the branch after review.**

* * *

### **Git Commands for Specific Tasks**

* * *

#### **Task 1.x: Initial Setup**

**Actions:**

*   Setting up the project structure.
*   Adding `.gitignore`, `README.md`, and other initial files.

**Git Workflow:**

1.  **Initialize a Git repository (if not already done):**
    
    ```bash
    git init
    ```
    
2.  **Add `.gitignore` and commit:**
    
    ```bash
    git add .gitignore
    git commit -m "chore: add .gitignore"
    ```
    
3.  **Add all files for initial setup and commit:**
    
    ```bash
    git add .
    git commit -m "chore: initial project setup"
    ```
    
4.  **Create a new branch for development:**
    
    ```bash
    git branch -m main
    git checkout -b develop
    git push -u origin develop
    ```
    

* * *

#### **Task 2.1: Set Up Node.js Project with Express and Prisma**

**Actions:**

*   Set up the backend project with Node.js, Express, and Prisma.

**Git Workflow:**

1.  **Create a feature branch for the task:**
    
    ```bash
    git checkout -b feature/setup-backend
    ```
    
2.  **Stage and commit changes regularly as you progress:**
    
    ```bash
    git add .
    git commit -m "feat: set up Node.js project with Express"
    ```
    
3.  **After completing the task, push the branch:**
    
    ```bash
    git push origin feature/setup-backend
    ```
    
4.  **Open a pull request to merge `feature/setup-backend` into `develop`.**
    

* * *

#### **Task 2.2: Design and Implement the Database Schema Using Prisma**

**Actions:**

*   Define Prisma models.
*   Create and apply migrations.
*   Generate the Prisma client.

**Git Workflow:**

1.  **Create a feature branch:**
    
    ```bash
    git checkout -b feature/prisma-schema
    ```
    
2.  **Stage and commit the Prisma schema and migrations:**
    
    ```bash
    git add prisma/schema.prisma
    git commit -m "feat: add Prisma schema for TypeDefinition, FieldDefinition, and Row"
    ```
    
3.  **Push the branch:**
    
    ```bash
    git push origin feature/prisma-schema
    ```
    
4.  **Open a pull request and merge after review.**
    

* * *

#### **Task 2.3: Implement API Endpoints**

**Actions:**

*   Implement CRUD endpoints for managing types, fields, and rows.

**Git Workflow:**

1.  **Create a feature branch:**
    
    ```bash
    git checkout -b feature/api-endpoints
    ```
    
2.  **Stage and commit changes for each set of endpoints:**
    
    ```bash
    git add src/routes/types.ts
    git commit -m "feat: add CRUD endpoints for TypeDefinition"
    ```
    
3.  **Push the branch:**
    
    ```bash
    git push origin feature/api-endpoints
    ```
    
4.  **Open a pull request and merge after review.**
    

* * *

#### **Task 3.x: Frontend Development**

**Actions:**

*   Set up a React project and implement core components.

**Git Workflow:**

1.  **Create a feature branch:**
    
    ```bash
    git checkout -b feature/setup-frontend
    ```
    
2.  **Stage and commit changes for the initial React setup:**
    
    ```bash
    git add .
    git commit -m "feat: set up React project with TypeScript"
    ```
    
3.  **Push the branch:**
    
    ```bash
    git push origin feature/setup-frontend
    ```
    
4.  **Open a pull request and merge after review.**
    

* * *

#### **Task 4.x: Deployment**

**Actions:**

*   Add Docker support.
*   Create Kubernetes deployment files.
*   Set up CI/CD pipelines.

**Git Workflow:**

1.  **Create a feature branch for Docker setup:**
    
    ```bash
    git checkout -b feature/docker-setup
    ```
    
2.  **Stage and commit Dockerfiles:**
    
    ```bash
    git add Dockerfile docker-compose.yml
    git commit -m "feat: add Docker support for backend and frontend"
    ```
    
3.  **Push the branch:**
    
    ```bash
    git push origin feature/docker-setup
    ```
    
4.  **Open a pull request and merge after review.**
    

* * *

### **Git Command Summary by Task**

**Task**

**Branch Name**

**Main Commands**

Initial Setup

`develop`

`git init`, `git add`, `git commit`, `git push`

Set Up Node.js Project

`feature/setup-backend`

`git checkout -b feature/setup-backend`, `git add`, `git commit`, `git push`

Design Database Schema

`feature/prisma-schema`

`git checkout -b feature/prisma-schema`, `git add`, `git commit`, `git push`

Implement API Endpoints

`feature/api-endpoints`

`git checkout -b feature/api-endpoints`, `git add`, `git commit`, `git push`

Set Up React Frontend

`feature/setup-frontend`

`git checkout -b feature/setup-frontend`, `git add`, `git commit`, `git push`

Add Docker Support

`feature/docker-setup`

`git checkout -b feature/docker-setup`, `git add`, `git commit`, `git push`

Deployment (Kubernetes + CI/CD)

`feature/deployment`

`git checkout -b feature/deployment`, `git add`, `git commit`, `git push`

* * *

### **Best Practices for Using Git**

1.  **Commit Frequently**:  
    Commit changes frequently with meaningful commit messages. This makes it easier to track and review changes.
    
2.  **Use Descriptive Branch Names**:  
    Branch names should clearly describe the task or feature being developed (e.g., `feature/api-endpoints`, `bugfix/login-error`).
    
3.  **Review Before Merging**:  
    Always open a pull request and request a code review before merging into `develop` or `main`.
    
4.  **Avoid Large Commits**:  
    Break down large changes into smaller, logical commits to make reviews easier.
    

* * *

Would you like help with task **2.2** next, or do you want detailed steps for opening a pull request?

Hotkeys:

*   🆁: Ready for task 2.2
*   🅴: Expand with steps for opening a pull request and merge
*   🅵: Fix potential issues with Git commands or branching strategy