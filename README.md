# How to Run the Project

## Frontend
1. `cd Frontend`
2. `npm install`
3. `npm run`

## Backend
1. Copy and paste `.env` to the `Backend` directory
2. `cd Backend`
3. `npm install`
4. `npm start`

## How to Open Swagger Documentation
1. Run the backend
2. Open this URL: [http://localhost:3000/api-docs/](http://localhost:3000/api-docs/)
3. Note that to access certain routes, you must first click 'Authorize' in the top right. The Auth token can be found after logging in.

# Design Decisions

### Why React?
- Because I am comfortable using React, and it is commonly used.

### Why Node.js/Express?
- Due to time limitations, I chose the language I am most comfortable with. Additionally, Node.js/Express is generally easy to work with, making it a good fit for the time constraint. Scaling is not a critical concern.

### Why MongoDB?
- Because it is Node.js-friendly and free to deploy via MongoDB Atlas.

### Miscellaneous
- Sorry for the bad naming convention, especially in React. I didn't have enough time to refactor.
