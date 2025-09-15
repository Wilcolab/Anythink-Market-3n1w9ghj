# Node Server

This project is a simple JavaScript Express server that listens on port 8001. It is set up to use Nodemon for automatic code reloading during development.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository** (if applicable):
   ```
   git clone <repository-url>
   cd node-server
   ```

2. **Install dependencies**:
   ```
   yarn install
   ```

3. **Run the server**:
   ```
   yarn start
   ```

The server will start and listen on `http://localhost:8001`. 

## Docker

To run the server in a Docker container, you can build the Docker image and run it using the following commands:

1. **Build the Docker image**:
   ```
   docker build -t node-server .
   ```

2. **Run the Docker container**:
   ```
   docker run -p 8001:8001 node-server
   ```

The server will be accessible at `http://localhost:8001` from your host machine. 

## License

This project is licensed under the MIT License.