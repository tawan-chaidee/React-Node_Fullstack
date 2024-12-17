# How to Run the Project


## Backend
1. Copy and paste `.env` to the `Backend` directory
2. `cd Backend`
3. `npm install`
4. `node index.js`

## Frontend
1. `cd Frontend`
2. `npm install`
3. if above install is not working you might want to use this command `npm install --legacy-peer-deps`
4. `npm start`
5. to use the app you might want to make new account or login to username:test, password:12345

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
- Sorry for the bad naming convention and bad layout, I didn't have time to fix it.
