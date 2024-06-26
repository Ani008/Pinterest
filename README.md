# Pinterest-Clone

This is an Pinterest Clone application with various middlewares for handling sessions, authentication, logging, and more.

## Modules and Middleware Used

1. **http-errors**: To create HTTP errors.  
   [npm package](https://www.npmjs.com/package/http-errors)

2. **express**: Web framework for Node.js.  
   [npm package](https://www.npmjs.com/package/express)

3. **path**: A Node.js core module for working with file and directory paths.  
   [Node.js documentation](https://nodejs.org/api/path.html)

4. **cookie-parser**: Middleware for parsing cookies.  
   [npm package](https://www.npmjs.com/package/cookie-parser)

5. **morgan**: HTTP request logger middleware.  
   [npm package](https://www.npmjs.com/package/morgan)

6. **express-session**: Middleware for managing sessions.  
   [npm package](https://www.npmjs.com/package/express-session)

7. **passport**: Authentication middleware for Node.js.  
   [npm package](https://www.npmjs.com/package/passport)

8. **connect-flash**: Middleware for flash messages.  
   [npm package](https://www.npmjs.com/package/connect-flash)

9. **mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
   [npm package](https://www.npmjs.com/package/mongoose)

10. **multer**: Multer for image processing and image uploading.
    [npm package](https://www.npmjs.com/package/multer)

11. **nodemon**: Nodemon to run the app for only one time.
    [npm package](https://www.npmjs.com/package/nodemon)

## View Engine

- **ejs**: Template engine to render views.  
  [npm package](https://www.npmjs.com/package/ejs)

## File Structure

- `app.js`: Main application file where middlewares and routes are configured.
- `routes/`: Directory containing route handlers.
- `views/`: Directory containing view templates.

## How to Run

1. Install dependencies:
   ```sh
   npm install

2. Type:
   ```sh
   npx nodemon
