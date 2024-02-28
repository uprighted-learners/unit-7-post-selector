# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# Lab: Post Selector

## Welcome!

Let's create a React component that consists of two main components; a list of post titles, and a display box, that will show the currently selected post.

## Create the React App

Inside your `react-apps` directory (the location where you installed `create-react-app`) use the command `npx create-react-app post-selector` to set up a new directory with all of the necessary react packages, and files, as well as some scripts to improve your workflow. It might take a couple of minutes for everything to install, but once it's all set up `cd` into the new directory, and open VSCode. 

## Setting up the Component Tree

Create two new JS files in your `src` subdirectory:

- `List.js` for your list of posts to choose from
- `Display.js` for the box that will show you the post's content

Create a corresponding functional React component in each of these files. Don't forget to export your components!

Import both components into `App.js` and have your `App` component render them (and nothing else).

If you view your page by running `npm start` and visiting `localhost:3000` at this point you should see a blank page as we haven't pulled in any data yet.

## Fetching Data with `useEffect`

Let's fill out that list. Import the `useState` and `useEffect` hooks from `React` in your `List.js` file, and use them to fetch a list of posts from `jsonplaceholder.typicode.com` and store the array of post objects in a stateful property. Don't forget to wrap your fetch in a guard clause so that it only fetches posts when it doesn't have any stored in state, otherwise you can end up in an infinite loop!

Iterate over your array of objects and generate an array of elements that you can render with your `List` component. Each element should contain the post's title.

## Tracking Selections with `useState`

We also need to determine which post has been selected so we can display it in our `Display` component so create a new stateful property,and updater function using the `useState` hook to track the ID of the selected post. I will refer to them as `postId` and `setPostId` respectively.

## Lifting State

Since components can't access each other's states, and we need to track the selected `postId` in both our `List` and `Display` components we will need to set that stateful property on a higher order component that has access to both of them. Bring the `useState` hook that sets the up the `postId` property, and `setPostId` updater function into your `App` component since it is the parent of both `List` and `Display`, and so can communicate to both of them.

## Using Props

React functional components can take a single argument, and that argument is `props`. Make sure you have the `props` *parameter* defined on both the `Display` and `List` components.

- In `App` pass the updater function `setPostId` as a prop to `List`
  - In `List` create an event handler function that will call the prop you set, passing in the appropriate ID whenever a post is clicked
- In `App` pass the `postId` as a prop to `Display`
  - In `Display` use that prop to fetch the appropriate post data from `jsonplaceholder.typicode.com` and display the title, and body on the page
    - Note: You will need to use both `useState` and `useEffect` to do this

Give it a test run, and see how it works!

## Adding styles

To style your page you can import a CSS file into a component, and the styles will be applied to everything that component renders. This means if we import a style sheet into `App.js` it can be used to style our entire page.

By default `create-react-app` creates a `App.css` file which is already imported into our `App.js` file. Go ahead and remove any styles that are already present in `App.css` and create your own page layout using standard CSS. Play around with a few different layout styles to see which one you like best!