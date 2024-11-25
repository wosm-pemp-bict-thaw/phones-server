# Express TypeScript Server

This project is an Express server built with TypeScript. It includes a GET endpoint that fetches phone number information from an external API, validates the response, and returns it to the client. The server incorporates authentication, logging, environment configurations, and supports API versioning. It is configured with development best practices, including hot-reloading, code linting, and pre-commit hooks.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Server](#running-the-server)
  - [Development Mode](#development-mode)
  - [Production Mode](#production-mode)
- [API Documentation](#api-documentation)
- [Design Decisions](#design-decisions)
- [License](#license)

## Features

- **TypeScript**: Strongly typed programming language that builds on JavaScript.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **Environment Configurations**: Uses `config` and `dotenv` for environment variables.
- **Authentication**: Bearer token authentication middleware.
- **Data Validation**: Validates external API responses using `jsonschema`.
- **Logging**: Uses `winston` and `morgan` for logging.
- **API Documentation**: Integrated Swagger UI for API documentation.
- **API Versioning**: Supports different API versions via route prefixes.
- **Security**: Uses `cors` and `helmet` for security enhancements.
- **Development Tools**: `nodemon` for hot-reloading, `husky` and `lint-staged` for pre-commit hooks, `eslint` for code linting.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v14 or higher)
- [npm](https://www.npmjs.com/get-npm) (v6 or higher)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/express-ts-server.git
   cd express-ts-server
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

## Configuration

1. **Environment Variables**

   Create a `.env` file in the root directory:

   ```bash
   cp .env.example .env
   ```

   The `.env.example` file includes all required environment variables:

   ```env
   PORT=3000
   AUTH_TOKEN=your-secret-token
   NODE_ENV=development
   ```

   - **PORT**: The port on which the server will run.
   - **AUTH_TOKEN**: The Bearer token used for authentication.
   - **NODE_ENV**: The environment in which the application is running (`development`, `staging`, `production`).

   **Note:** Do not commit your `.env` file to version control. It is included in `.gitignore`.

2. **Configuration Files**

   The `config` directory contains environment-specific configurations:

   - `config/default.json`
   - `config/development.json`
   - `config/staging.json`
   - `config/production.json`

   These files can be used to override default configurations based on `NODE_ENV`.

## Running the Server

### Development Mode

1. **Start the development server with hot-reloading**

   ```bash
   npm run dev
   ```

   This command uses `nodemon` and `ts-node` to watch for file changes and restart the server automatically.

2. **Access the API**

   - API Endpoint: `http://localhost:3000/api/v1/phone-info`
   - Swagger UI: `http://localhost:3000/api-docs`

### Production Mode

1. **Build the project**

   ```bash
   npm run build:all
   ```

   This command compiles the TypeScript code into JavaScript in the `dist` directory and use dist from ng from the client folder.

2. **Start the server**

   ```bash
   npm start
   ```

   This command runs the compiled JavaScript code using Node.js.

3. **Access the API**

   - API Endpoint: `http://localhost:3000/api/v1/phone-info`
   - Swagger UI: `http://localhost:3000/api-docs`

## API Documentation

The server includes Swagger UI for interactive API documentation.

- Visit `http://localhost:3000/api-docs` in your browser to view the API documentation.

## Design Decisions

### Environment Configurations

- **Tools Used**: `config` and `dotenv`.
- **Reasoning**:
  - **`dotenv`**: Loads environment variables from a `.env` file, keeping sensitive data out of the codebase.
  - **`config`**: Manages configuration files for different environments and automatically switches based on `NODE_ENV`.
- **Benefits**: Secure handling of environment-specific settings and sensitive information.

### Authentication

- **Method**: Bearer token authentication middleware.
- **Reasoning**: Simple and effective way to protect API endpoints.
- **Benefits**: Ensures that only authorized users can access the API.

### Data Validation

- **Tool Used**: `jsonschema`.
- **Reasoning**: Validates the structure of data received from external APIs.
- **Benefits**: Prevents the application from processing invalid or corrupted data, enhancing robustness.

### Logging

- **Tools Used**: `winston` and `morgan`.
- **Reasoning**:
  - **`winston`**: Provides a flexible and extensible logging system.
  - **`morgan`**: HTTP request logger that integrates with `winston`.
- **Benefits**: Comprehensive logging for debugging and monitoring.

### API Documentation

- **Tools Used**: `swagger-ui-express` and `swagger-jsdoc`.
- **Reasoning**: Generates interactive API documentation directly from the code.
- **Benefits**: Simplifies API exploration and testing for developers.

### API Versioning

- **Implementation**: Route prefixes (e.g., `/api/v1`).
- **Reasoning**: Allows for backward compatibility and gradual adoption of new API versions.
- **Benefits**: Facilitates long-term maintenance and scalability.

### Security Enhancements

- **Tools Used**: `cors` and `helmet`.
- **Reasoning**:
  - **`cors`**: Enables controlled access from different origins.
  - **`helmet`**: Secures HTTP headers to protect against common vulnerabilities.
- **Benefits**: Enhances the security posture of the application.

### Development Tools

- **Tools Used**: `nodemon`, `husky`, `lint-staged`, `eslint`.
- **Reasoning**:
  - **`nodemon`**: Provides hot-reloading for faster development.
  - **`husky` and `lint-staged`**: Run linting and tests before commits to maintain code quality.
  - **`eslint`**: Enforces coding standards and catches potential errors.
- **Benefits**: Improves developer efficiency and code quality.