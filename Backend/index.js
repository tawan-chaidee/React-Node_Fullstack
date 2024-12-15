require('dotenv').config();
const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const connectDB = require('./db_connection');
const todoRoute = require('./routes/todoRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Connect to the database
connectDB();

// Swagger options
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',  // Use OpenAPI 3.0
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'A simple Express API with Swagger documentation',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ['./routes/*.js'],  // Path to the API routes (where you document your endpoints)
};

// Initialize Swagger specification
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Middleware
app.use(express.json());

// Define routes
app.use('/todos', todoRoute);
app.use('/auth', authRoutes);

// Swagger UI documentation route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Error handling middleware (uncomment if you want error handling)
 // app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log('Swagger UI is available on http://localhost:3000/api-docs');
});
