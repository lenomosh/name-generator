# Akan Name Generator
Made by [Lennox Omondi](https://linkedin.com/in/lenomosh)

## Project Description

This is a web application that takes a user's birthday and calculates the day of the week they were born and then depending on their gender outputs their Akan Name. 
Akan names are derived from Ghanian culture. Frequently in Ghana, children are given their first name as a 'day name' which corresponds to the day in the week they were born.

# Setup Instrutions
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Behaviour Driven Data
Behavious | Sample Input | Expected Output
------------ | ------------- | -------------
A year that is not 4 digits| 999| false
A day that is greater than 31 | 31| false
a day that is less than 1| 0 | false
any date with a decimale place | 1.2/11/2000 | false
a year that has four digits | 2000 | true
a date not in the format YYYY-MM-DD| 31-05-2000 | false

# Technologies used
This program was developed using ReactJS, JSX and SASS

# Contact Information
Found a bug or wish to reach out? Email me at omondilenox@outlook.com
