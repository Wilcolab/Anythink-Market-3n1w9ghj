# JavaScript Express Server

This project is a simple Express server that listens on port 8001. It is set up to use `nodemon` for automatic code reloading during development.

## Project Structure

```
js-express-server
├── src
│   └── app.js          # Entry point of the application
├── .gitignore          # Files and directories to be ignored by Git
├── Dockerfile          # Instructions to build a Docker image for the application
├── package.json        # Configuration file for npm, including dependencies and scripts
├── yarn.lock           # Locks the versions of the dependencies
└── README.md           # Documentation for the project
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd js-express-server
   ```

2. **Install dependencies**:
   ```
   yarn install
   ```

3. **Run the server**:
   ```
   yarn start
   ```

   This will start the server using `nodemon`, which will automatically reload the server when changes are made to the code.

## Docker

To build and run the application in a Docker container, use the following commands:

1. **Build the Docker image**:
   ```
   docker build -t js-express-server .
   ```

2. **Run the Docker container**:
   ```
   docker run -p 8001:8001 js-express-server
   ```

The server will be accessible at `http://localhost:8001`.

## License

This project is licensed under the MIT License.