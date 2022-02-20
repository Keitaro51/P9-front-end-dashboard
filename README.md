![createBy](https://img.shields.io/static/v1.svg?label=CREATE%20BY&message=ROMAIN%20CHARLOT&color=success)
![createBy](https://img.shields.io/static/v1.svg?label=MADE%20WITH&message=React.js&logo=React&color=blue)
![createBy](https://img.shields.io/static/v1.svg?label=MADE%20WITH&message=Javascript.js&logo=Javascript&color=yellow)

# Project OC - Front-end React Dashboard

This repo contains all the source code to run the micro API for the sports analytics dashboard SportSee.
____
## I. USING API DATA

### 1. Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

### 2. Installing API

- Fork this repository
- Clone it on your computer.
- The `yarn` command will allow you to install the dependencies.

### 3. Launch API

- The `yarn start` command will allow you to run the micro API.
- Server will run on port 3000, so frontend app will have to run on another port (mostly 3001)

### 4. Endpoints

#### 4.1 Possible endpoints

This project includes four endpoints that you will be able to use: 

- `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).


**Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**

#### 4.2 Examples of queries

- `http://localhost:3000/user/12/performance` - Retrieves the performance of the user with id 12
- `http://localhost:3000/user/18` - Retrieves user 18's main information.
____
## II. USING MOCK DATA

It's possible to run app without api, with mock data. 

To switch between api and mock data, just toggle `DATA_SRC` value into `../frontend/src/config.js` folder
____
## III. GETTING STARTED WITH SPORTSEE

- Run your terminal on frontend sub-folder 
- `npm install` command will allow you to install the front dependencies

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser (or `port 3001` if used with api).

The page will reload when you make changes.