## Description
The project is a To Do List application developed using TypeScript and React.js. 
Users can manage their tasks, including adding, editing, and deleting them, alongside the capability to mark tasks as completed. 
The tasks are persisted using the browser's local storage, ensuring that the tasks remain intact even after a page refresh. 
Additionally, the project includes Jest and Cypress for testing. These tests are designed to validate the functionality and reliability 
of the application across various scenarios and user interactions.

## Technologies Used
React.js
TypeScript
JavaScript
Local Storage API
Jest for unit and integration testing
Cypress for end-to-end testing
Tailwind CSS

## Prerequisites
Node.js installed on your machine
npm or yarn

## Installation
Clone the repository to your local machine.

Navigate to the project directory: cd to-do-list

Install dependencies: npm install or yarn install


## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn  start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test` or `yarn test` for Jest Tests

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## add  "scripts": { "cypress:open": "cypress open", "cypress:run": "cypress run" } inside package.json

### `npm run cypress:open` or `yarn cypress:open` for Cypress Tests
