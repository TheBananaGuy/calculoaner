# Loan calculator

Simple front-end assignment

Check the result live [here](www.blinkandscroll.com/test_loan_calculator)

## Project Background

Task at hand - to make a dynamic loan calculator on a single page.

The user must be able to:
- Specify loan amount
- Specify down payment (in percentage)
- Specify loan term (1-6 years)

Interest rate is fixed: 1.5/100.
Monthly payment formula is given: `(price * interest) / (1 - (Math.pow(1 / (1 + interest), period)))`.
User input should be validated.
Output should be rounded to have two digits after decimal point.

## Template + own code

Builder template based on [this repository](https://github.com/cichy380/html-starter-bs4-webpack)

Main code chunks for review are `assets/scripts/main.js` and `assets/html/partials/calculator.html`. No significant modifications/additions to the core template structure anywhere else, but feel free to roam around the code if You feel that's necessary/interesting...

## Prerequisites

- [Node.js](https://nodejs.org/)

Once you have that, download this repository and hit `npm install` in the project directory to download all the dependencies.

## Basic commands

- `npm run start` - Starts up a `webpack-dev-server` session and compiles the assets on save/changes in the assets directory.
- `npm run build` - Compiles all the assets for production environment to the `/dist` folder.
- `npm run clean` - Deletes `/dist` folder.

For more commands and information check out `package.json` or [the original template repository](https://github.com/cichy380/html-starter-bs4-webpack)