# Brewsapp

# Book CRUD API (Backend)

This is the backend API for a project that performs CRUD operations on books. It provides the necessary endpoints for creating, reading, updating, and deleting books. You can also run this API locally.

## API Endpoints

### Create a Book

- **Endpoint**: `POST /add`
- **Request Body**:
  ```json
  {
    "title": "Sample Book Title",
    "author": "John Doe",
    "summary": "This is a sample book summary."
  }
- **Usage**: Create a new book by providing the title, author, and summary.

### Read Books
- **Endpoint**: `GET /book`
- **Usage**: Retrieve a list of all books with their details.

### Read Specific Book By Using Id
- **Endpoint**: `GET /book/:id`
- **Usage** : Retrieve a Specific book with their details.
### Update a Book
- **Endpoint**: `PATCH /update/:id`
- **Request Body**:
   ```json
   {
  "title": "Updated Title",
  "author": "Updated Author",
  "summary": "Updated book summary."
   }
- **Usage**: Update the information of a book by providing its unique identifier (ID) and the new title, author, or summary.

### Delete a Book
- **Endpoint**: `DELETE /delete/:id`
- **Usage**: Delete a book by providing its unique identifier (ID).

## Local Setup

To run this project locally, follow these steps:

1. **Clone the Repository**:
    ```bash
   git clone https://github.com/your-username/book-crud-backend.git
2. **Navigate to the Project Directory**:
    ```bash
       cd book-crud-backend
3. **Install Dependencies**:
     ```bash
       npm install
4. **Start the API Locally**:
   ```bash
       npm start
**The API will be accessible locally at http://localhost:3000.**

## Deployment using Render

This project is deployed on Render, a cloud platform that simplifies the deployment process. You can access the deployed application [here](https://book-app-h51n.onrender.com).





