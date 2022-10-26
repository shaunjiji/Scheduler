# Interview Scheduler

## Project Description

Interview Scheduler is a SPA (Single Page Application) for tracking students interviews built with the latest tools and techniques for optimized user experience. The App utilizes React built-in and custom hooks and allows users to add, edit and delete appointments in real time. Data is persisted by the API server using a PostgreSQL database. The client application communicates with an API server over HTTP, using the JSON format. For quality assurance, the project follows best practices of TDD (Test Driven Development), where individual Components are tested in isolation as well as End-to-End testing is performed.

## Project Features

- Appointment days (Monday to Friday) are displayed and colour-coordinated depending on availability
- The days show the number of slots available as a snapshot of the week
- A user can switch between days and see detailed information
- Booked and available slots are clearly differentiated
- A user can book interviews by typing in a student name and clicking on an interviewer from a list of interviewers
- A user can change the details of an existing interview by pressing the edit icon
- A user can cancel an existing interview, a pop-up message will ask to confirm the action before permanently deleting an interview
- Days display currently remaining spots and capture updates after each modification

## Homepage

!["Interview Scheduler Homepage"](https://github.com/shaunjiji/Scheduler/blob/master/docs/home%20page.png?raw=true)

## Creating Appointments

!["Creating Appointments"](https://github.com/shaunjiji/Scheduler/blob/master/docs/Create%20Appointments.png?raw=true)

## Deleting Appointments

!["Deleting Appointments"](https://github.com/shaunjiji/Scheduler/blob/master/docs/delete%20appointment.png?raw=true)

## Installation

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## API server/\*Database Setup

For full functionality both must run concurrently: the client and the API server applications.

- Start by forking and cloning the scheduler-api server [here](https://github.com/lighthouse-labs/scheduler-api)
- Follow the steps outlined in README to install and setup the database
- Fork and clone this repo
- Navigate to the root directory and install dependencies with `npm install`
- Once you have the database setup and the scheduler-api server running, run the following command from the root directory of the project `npm start`

## Project Stack

**Front-End:** React, Axios, JSX, HTML, SASS, JavaScript

**Back-End:** Express, Node.js, PostgreSQL

**Testing:** Storybook, Webpack Dev Server, Jest, Testing Library and Cypress

## Dependencies

- Axios
- Classnames
- Normalize.css
- React
- React-dom
- React-scripts
- Babel/core
- Storybook/addon-actions
- Storybook/addon-backgrounds
- Storybook/addon-links
- Storybook/addons
- Storybook/react
- Testing-library/jest-dom
- Testing-library/react
- Testing-library/react-hooks
- Babel-loader
- Node-sass
- Prop-types
- React-test-renderer
