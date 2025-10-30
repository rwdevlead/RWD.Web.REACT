# Portfolio Backend API Service

A lightweight, secure Node.js API service that handles email notifications and form submissions for the portfolio website.

## 🏗 Technical Stack

### Core Technologies

- **Runtime**: Node.js
- **Framework**: Express.js
- **Email Service**: EmailJS integration
- **Validation**: Custom middleware with schema validation

### API Architecture

- **Style**: RESTful API
- **Format**: JSON
- **Error Handling**: Standardized error responses
- **Middleware**: Custom validation and security layers

### Security Features

- **Input Validation**: Schema-based request validation
- **Rate Limiting**: Protection against abuse
- **CORS**: Configured for secure cross-origin requests
- **Environment Variables**: Secure configuration management

## 📚 API Endpoints

### POST /api/email

Handles contact form submissions and email notifications.

**Request Body:**

```json
{
  "name": "string",
  "email": "string",
  "message": "string",
  "subject": "string"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

## 🚀 Development

```bash
# Install dependencies
npm install

# Start development server with hot reload
npm run dev

# Run tests
npm run test

# Start production server
npm start
```

## 🔧 Configuration

The service uses environment variables for configuration:

- `EMAILJS_SERVICE_ID`: EmailJS service identifier
- `EMAILJS_TEMPLATE_ID`: Email template identifier
- `EMAILJS_PUBLIC_KEY`: EmailJS public key
- `EMAILJS_PRIVATE_KEY`: EmailJS private key

## 📈 Monitoring & Logging

- Request logging with Morgan
- Error tracking and monitoring
- Performance metrics collection
- Health check endpoint

## ⚡ Performance

- Efficient request handling
- Response caching where appropriate
- Rate limiting for API protection
- Optimized error handling

## 🧪 Testing

- Unit tests with Jest
- API endpoint testing
- Schema validation testing
- Error handling test cases

## 🔐 Security Best Practices

1. Input validation on all requests
2. Rate limiting to prevent abuse
3. CORS configuration for security
4. Secure headers implementation
5. Environment variable protection

## 📦 Project Structure

```
backend/
├── api/
│   ├── index.js          # Main API setup
│   └── middleware/       # Custom middleware
│       └── validate.js   # Request validation
├── nodemon.json         # Development config
└── package.json        # Dependencies and scripts
```

## 🔄 Integration

The backend service integrates with:

- EmailJS for email handling
- Frontend React application
- Monitoring services
- Logging systems

## 📝 Development Guidelines

1. Follow RESTful API best practices
2. Implement comprehensive error handling
3. Maintain test coverage
4. Document API changes
5. Use semantic versioning
