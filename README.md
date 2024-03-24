
# Ale-Yea-MVP

ALEYEA CRAFTBEER ME! App was designed to help people new to craft beer have an easy way to learn about craft beer as well as find beers they might like. More additions to the app will be made in the future, including linking the brewery where the beer can be found, a custom quiz for the user to find more optimal beer recommendations, and a page that will give the user more information on how beer is made and how to optimize the tasting experience of their craft beer. Additionally, links to articles with Taproom, brewery, and restaurant suggestions with good craft beer will be included.

# index.js

The index.js file serves as the backend server for the application. It utilizes Express.js to define various endpoints for fetching data from the database. Here's a breakdown of its functionality:

- **Routing**: The file defines routes for different endpoints using Express Router. These routes handle HTTP requests and interact with the database to fetch data.
- **Database Interaction**: Each route executes SQL queries to retrieve data from the database. These queries are performed asynchronously using the `await` keyword with functions provided by the `db` helper module.
- **GET Endpoints**:
  - `/breweries`: Returns a list of all breweries from the database.
  - `/breweries/:id`: Returns a brewery based on its ID.
  - `/breweries/location/:location`: Returns breweries located in a specific city.
  - `/craftbeers`: Returns a list of all craft beers from the database.
  - `/craftbeers/:flavor`: Returns craft beers based on a specified flavor.
- **Issues**: There are issues with the POST recommendations endpoint that need to be resolved to return all three data points.

-**Note**: Users need to cd to the `my-aleyea-app` directory before running `npm run migrate` or `npm run start` to access the backend.

# App.jsx

The App.jsx file serves as the main entry point for the frontend application. Here's a breakdown of its functionality:

- **Routing**: The file utilizes React Router's `Routes` component to define different routes for various parts of the application. Each route corresponds to a specific component to render when the corresponding URL is matched.
- **State Management**: State is managed using the `useState` hook from React to track the selected flavor, recommendations, and error messages.
- **Fetching Recommendations**: The component includes functions to fetch recommendations for craft beers based on flavor preferences. There's also a commented-out function intended for fetching recommendations through a custom quiz.
- **Lifecycle Management**: The `useEffect` hook is utilized to execute code upon component mounting.

-**Note**: Users need to cd to the `client` directory before running `npm run dev` to view the frontend.

-**Issues**: There are issues with the `fetchRecommendations` function, which is supposed to be part of the code for the POST recommendations endpoint. This part of the functionality is not operational.

# Home.jsx

The Home.jsx file represents the home page of the frontend application. Here's an overview of its functionality:

- **Navigation**: The component includes a navigation bar for easy navigation between different sections of the application.
- **Carousel**: A carousel component is utilized to display images and brief descriptions of different sections of the application.
- **Routing**: The `Link` components within the carousel items are configured to navigate users to the corresponding sections when clicked.

-**Note**:  Ensure that the navigation links and carousel items are properly linked to the relevant sections of the application.

# AleYea.jsx

The AleYea.jsx file represents a component responsible for allowing users to search for craft beer recommendations based on flavor preferences. Here's an overview of its functionality:

- **State Management**: State is managed using the `useState` hook from React to track recommendations, user input, and error messages.
- **Fetching Recommendations**: The component utilizes a function passed as a prop to fetch recommendations for craft beers based on the user's flavor input.
- **User Interface**: The component presents a user-friendly interface, including a form for inputting flavor preferences and error handling for invalid inputs.
- **Displaying Recommendations**: Fetched recommendations are dynamically displayed within the component.

-**Note**: Ensure that the `fetchFlavorRecommendations` function is properly implemented and configured to fetch recommendations based on the user's flavor input.
