<p align="center">
  <b>NestJS Blog Application</b>
</p>

## Overview

The NestJS Blog Application is a robust server-side application designed to manage blogs efficiently. It provides features like user authentication, blog management, interceptors, caching, and data validation to ensure scalability and performance.

## Features

- **User Management**: Register, authenticate, and fetch user details.
- **Blog Management**: Create, update, delete, and fetch blog posts.
- **Interceptors**: Handle request and response transformations seamlessly.
- **Caching**: Boost performance with an integrated caching mechanism.
- **Data Validation**: Ensure input accuracy using pipes and `class-validator`.

## Getting Started

### Prerequisites

To run this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or later)
- [Nest CLI](https://docs.nestjs.com/cli/overview)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Nalon03/Nest-Blog-API.git
   cd Nest-Blog-API
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Run the application in different modes:

```bash
# Development mode
npm run start

# Watch mode (for live development)
npm run start:dev

# Production mode
npm run start:prod
```

### API Documentation

The API documentation is available via Swagger. Once the application is running, you can access it at:

```
http://localhost:<PORT>/api-docs
```

## Testing

Ensure the application functions as expected:

```bash
# Unit tests
npm run test

# End-to-end (e2e) tests
npm run test:e2e

# Test coverage
npm run test:cov
```
## Contact
For contributions and collaboration, please get in touch with Grace Yaa Nalon.


