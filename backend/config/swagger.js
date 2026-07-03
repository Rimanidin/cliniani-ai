/**
 * -------------------------------------------------------
 * File: swagger.js
 * Module: Swagger Configuration
 * Project: CLINIANI AI
 * -------------------------------------------------------
 */

const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "CLINIANI AI API",
      version: "1.0.0",
      description: "Neurology EMR Backend APIs",
    },

    servers: [
      {
        url: "http://localhost:5001",
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },

    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;