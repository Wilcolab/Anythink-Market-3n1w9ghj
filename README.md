
# Python & Node.js Servers

This project contains two servers: a FastAPI server implemented in Python and a Node.js server using Express. Both servers provide routes for managing a task list.

## Project Structure

The project has the following files and directories:

- `python-server/src/main.py`: This file contains the implementation of the FastAPI server with two routes. It handles adding a task to a list and retrieving the list.

- `python-server/src/__init__.py`: This file is an empty file that marks the `src` directory as a Python package.

- `python-server/requirements.txt`: This file lists the dependencies required for the FastAPI server and other dependencies.
- `node-server/src/index.js`: This file contains the implementation of the Node.js server using Express. It provides similar routes for adding and retrieving tasks.

- `node-server/src/__init__.js`: This file is not required for Node.js projects and is not present.

- `node-server/package.json`: This file lists the dependencies and scripts for the Node.js server.

- `node-server/Dockerfile`: This file is used to build a Docker image for the Node.js server. It specifies the base image, copies the source code, installs dependencies, and sets the command to run the server.
- `python-server/Dockerfile`: This file is used to build a Docker image for the FastAPI server. It specifies the base image, copies the source code into the image, installs the dependencies, and sets the command to run the server.

- `docker-compose.yml`: This file is used to define and run multi-container Docker applications. It specifies the services to run, their configurations, and any dependencies between them.


## Getting Started

To run both the FastAPI (Python) and Express (Node.js) servers using Docker Compose:

1. **Build and start the containers:**

  ```shell
  docker compose up
  ```

  This command will build the Docker images and start both the FastAPI and Node.js servers as defined in `docker-compose.yml`.

2. **Access the servers:**

  - FastAPI server: [http://localhost:8000](http://localhost:8000)
  - Node.js server: [http://localhost:8001](http://localhost:8001)

3. **Stop the containers** when you're done:

  ```shell
  docker compose down
  ```

You can now interact with both servers using their respective API routes. The Node.js server uses Express and provides similar endpoints to the FastAPI server.


## API Routes

Both servers provide the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain a JSON object with a `text` property (the task description).
- `GET /tasks`: Retrieves the task list as a JSON array.
- `GET /`: Returns a simple "Hello World" message.
