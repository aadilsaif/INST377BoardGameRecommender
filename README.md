## Title: Board Game Quiz
## Description:
Welcome to The Board Game Quiz! This quiz is designed to test your knowledge of board game release years. You will be presented with questions about when certain board games were published. Try to select the correct year from the provided options.

## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Vercel Link
https://inst-377-board-game-recommender.vercel.app/

## Target Browsers: 
Web: Firefox and Chrome

## Developer Manual:
### Installation Guide:
#### Prerequisites
Make sure you have the following requirements:
- Operating System: Linux, macOS, or Windows
- Node.js: Version 14 or higher
- PostgreSQL: Version 12 or higher
- Python: Verison 3.8 higher
## Installation Steps
1. Clone the Repository
2. Set up Environment Variables
3. Install Node.js Dependencies
4. Set up the Database
## Running the Application on a Server
1. Start the Development Server
   `npm run dev`
2. Build and Start the Production Server
   `npm run build`
   `npm start`
## API Documentation 
- GET /api/games
  Description: Retrieves a list of ttop 20 hottest boards games
  Response: JSON array ofgame objects
- POST /api/quiz
  Description: Submits user preference them the quiz
  `Example:
  {
    "players": 2,
    "difficulty": 3.0,
    "score": 8.0,
    "preferences": {
    "bluff": 1,
    "teams": "",
    "dice": 2,
    "eliminate": 1,
    "memory": 3
  }
}`
- Response: JSON object with recommedation games
  `Example:
  {
  "recommendations": [
    {
      "id": "12345",
      "name": "Recommended Game",
      "avgRating": 8.5,
      "imagePath": "http://example.com/image.jpg"
    }
  ]
}`
## Patch Endpoints 
- PATCH /api/games/{id}
  Description: Updates the details of a specific game by ID
  Request Body:
  `{
    "name": "Updated Game Name",
    "avgRating": 9.0
  }`
- Response: JSON object of the updated game
`{
    "id": "12345",
    "name": "Updated Game Name",
    "avgRating": 9.0
}`
  
## Known Bugs and Roadmap
1. Quiz Submission Errors
   Description: Some users experience errors when submitting the quiz form
   Workaround: Ensure all fields are filled correctly.

## Roadmap for Future Development
1. Feature Enhancements:
     - Implement a game search functionality
     - Add user profile and game review features
2. Performance Improvements:
     - Optimize the database queries
3. Fix Bugs 
   
   
