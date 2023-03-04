# JS Frameworks CA

## Tasks

- [x] Create a new CRA app.
- [x] Create a Header that has a Nav.
- [ ] Add React Router and route to each of the pages. The ProductPage page will be using a dynamic segment.
- [ ] Create a Cart Icon component and position this next to your Nav. This Cart Icon component will have an overlay that displays the number of items in the cart.
- [ ] Create a Footer component
- [x] Create a Layout component that has your Header and Footer.
      Create pages:
- [ ] Home
  - [ ] Fetch the list of products on the Homepage and store this as a state.
  - [ ] Display a Product component for each item. This Product component should look like a product card. Each Product component will have a View product button which will link to the ProductPage page.
  - [ ] Lookahead/auto-complete search bar component. Typing values in the search bar should display products where the title matches the search input. Clicking on an item should take the user to the ProductPage page. Tip: Filter the user input and then display products that match the input.
- [ ] Product Specific
  - [ ] On the ProductPage, use the ID of the product as the params for the dynamic segment.
  - [ ] Display individual items data.
  - [ ] Add to cart button. Create a cart state. When the Add to cart button on the ProductPage is clicked, add the product to the cart.
  - [ ] Reviews listed for the product if there are any.
  - [ ] You should use the discountedPrice property to display the price of the product. If there is a difference between the discountedPrice and price properties then that means there is a discount for that product. Calculate what this discount is and display it on the page.
- [ ] Checkout/Cart Page
  - [ ] Clicking on the Cart icon will load the Cart page which will list all of the products as well as a total. The Cart page will have a Checkout button at the button. Clicking this Checkout button then goes to a Checkout success page.
- [ ] CheckoutSuccess Page
  - [ ] The Checkout success page will display a message to the user notifying them that their order was successful.
  - [ ] There should also be a link that lets a user go back to the store.
        = [ ] The cart must be cleared if the user gets to the Checkout success page.
- [ ] Contact Page
  - Requirements:
  - [ ] Full name (Minimum number of characters is 3, required)
  - [ ] Subject (Minimum number of characters is 3, required)
  - [ ] Email (Must be a valid email address, required)
  - [ ] Body (Minimum number of characters is 3, required)
  - [ ] Submit button
  - [ ] console.log the data from the form once validation requirements are met.
- [ ] Once your project is done, deploy it to Netlify.

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
