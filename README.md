
# Ale-Yea-MVP

ALEYEA CRAFTBEER ME! App was designed to help people new to craft beer have an easy way to learn about craft beer as well as find beers they might like. More additions to the app will be made in the future, including linking the brewery where the beer can be found, a custom quiz for the user to find more optimal beer recommendations, and a page that will give the user more information on how beer is made and how to optimize the tasting experience of their craft beer. Additionally, links to articles with Taproom, brewery, and restaurant suggestions with good craft beer will be included.

## Setup

- Fork this repository
- Clone the forked repository
- Add your contributions
- Commit and push into the forked repository

### Dependencies

- Run `npm install` in the main project folder to install server-related dependencies
- Then, run `cd client` to move to the client folder and run `npm install` to install client dependencies.

In case these dependencies are not installed, please run the following commands to install them individually in the main project folder:

- `npm install dotenv`
- `npm install cors`
- `npm install mysql`
- `npm install nodemon`

### Database Migration
-`cd my-aleyea-app` before installing dependencies or running `npm start`.
- Access your MySQL interface
- Create a new database for the craftbeers and breweries: `CREATE DATABASE craftbeer;`
- Ensure the 'migrate' script is within the package.json file
- Run 'npm run migrate' to get a table called 'craftbeers' and 'breweries', which 
  can be found in the initial database file in the model folder.
- Add a .env file to the project folder containing the MySQL authentication:
- You can insert the data below to populate your craftbeer tables:
- `INSERT INTO craftbeers (id, breweries_id, beername, flavor, type_style, ABV, color, description, guest_beer, image_url)
VALUES
(1, 31, 'Vanilla Coffee Stout 2023', 'coffee,vanilla', 'Imperial Stout', 8, 'dark', 'Bourbon Barrel-Aged Imperial Stout w/ Coffee & Vanilla', 1, 'https://images.untp.beer/crop?width=640&height=640&stripmeta=true&url=https://untappd.s3.amazonaws.com/photos/2024_02_24/87443bd2b66fdbeec0c0642743a8badc_c_1358493293_raw.jpg'),
(2, 23, 'Surfs Up', 'dry hopped', 'Hazy IPA', 6, 'Light Amber', 'Hazy IPA Dry-Hopped w/ Citra & Motueka', 1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXxu6_WlijOhUNjDZ3yefvXumaoV1RjY2Ltg&usqp=CAU'),
(3, 1, 'ROSÉ DE GAMBRINUS', 'fruity,raspberry', 'Lambic', 5, 'dark red', 'Lambic w/ 200g/L of Raspberry from Cantillon BE', 1, 'https://belgiancraftbeers.com/wp-content/uploads/2020/04/cantillon-rose-gambrinus_800x.jpg'),
(4, 1, 'Time & Place', 'fruity,apple,tart', 'Cider', 7, 'yellow, light', 'Dry & Tart Wild-Fermented Farmhouse Apple Cider Aged on Crabapple Pomace from Revel (CA)', 1, 'https://images.untp.beer/crop?width=640&height=640&stripmeta=true&url=https://untappd.s3.amazonaws.com/photos/2024_02_10/35fa118371e09793621a73a314dc8b18_c_1354801104_raw.jpg'),
(5, 1, 'Peanut Butter Jelly Crime', 'nutty, fruity', 'Mead', 13, 'dark red', 'Blueberry & Peanut Butter Mead – Superstition (US)', 1, 'https://assets.untappd.com/photos/2023_03_20/b333d131ff2572894d96bf5c91f6a905_640x640.jpg'),
(6, 1, 'Knorke', 'chocolate,vanilla', 'Imperial Stout', 8, 'dark brown', 'Bourbon Barrel-Aged Imperial Stout w/ Marshmallow, Brownie, Cacao & Vanilla – Schnieke (DE)', 1, 'https://images.untp.beer/crop?width=640&height=640&stripmeta=true&url=https://untappd.s3.amazonaws.com/photos/2024_02_28/c81471ac64e513187ed62c977fd2f3d4_c_1359511505_raw.jpg'),
(7, 1, 'Liberator', 'fruity,tropical,mango,pineapple,tangerines', 'Pale Ale', 5, 'light', 'is a pale top-fermented beer. The lower bitterness complements the pleasant hop aroma of the Centennial and Mosaic varieties, which are also used for cold hopping. We chose pilsner, Munich and caramel malts. The result is a drinkable, almost summery, light beer. It tastes and smells like tropical fruits (pineapple, mango) and tangerines. from Vinohradský (CZ)', 1, 'https://images.untp.beer/crop?width=640&height=640&stripmeta=true&url=https://untappd.s3.amazonaws.com/photos/2024_02_24/cb0fdc1f6de67a835099757a76e20c75_c_1358649320_raw.jpg'),
(8, 1, 'Evolution #007', 'hoppy', 'Pale Ale', 5, 'light', 'In our Evolution beer series, we try and present new Czech experimental hop varieties. We always use whole dried heads in light beer, where the aroma of hops can really stand out. from Sibeeria (CZ)', 1, 'https://www.pivnici.cz/foto/16/df3c2304266802c69c71caa437bc2bb.jpg'),
(10, 4, 'Knorke', 'cocoa,marshmallow,coconut,vanilla', 'Barrel Aged Stout', 8, 'light', 'Essentially, this is a big, bold, classic, crowd-pleasing Blended Bourbon Barrel Aged Stout; what a mouthful! And that's what it is: a sweet 8%er bursting with toasted marshmallows, coconut, cocoa and bourbon vanilla.', 0, 'https://shop.vagabundbrauerei.com/cdn/shop/files/stout-cover-webshop.png?v=1701262628'),
(11, 4, 'ART+74 Pastry Philly Sour', 'fruity, cinnamon, orange', 'Wheat Beer', 5, 'medium brown', 'Orange, cranberry, pear, cinnamon, lactose and wafer combine to make a delicious wintry pastry. This beer will delight you with its aromatic richness and a full on smack to your pallet.', 0, 'https://shop.vagabundbrauerei.com/cdn/shop/files/Pastrysourbeer-experimentalbeer_1024x1024.png?v=1706191937'),
(12, 4, 'Hauptstadt Helles', 'fruity, floral, bitter', 'Pilsner', 5, 'light', 'This crisp, unconventional Helles is floral and lightly fruity with the clean, refreshing, bitter hop bite of a Northern Pilsner.', 0, 'https://www.bierlinie.de/images/stories/flexicontent/m_vagabund_hauptstadt_helles_0_33_l_bierflasche_mit_vollem_bierglas.jpg'),
(13, 4, 'Sessionable Healing', 'citrus,fruity,tropical', 'IPA,Session', 5, 'medium', 'This Session IPA has a light, sensual body with bold aromas of tropical fruit, citrus peel and pine and a lower alcohol content to help you enjoy and feel good for longer.', 0, 'https://www.bierlinie.de/images/stories/flexicontent/l_vagabund_sessionable_healing_session_ipa_0_33_l_bierflasche_mit_vollem_bierglas.jpg'),
(14, 4, 'Bindlestiff', 'caramel,tropical,fruity,malty,bitter', 'IPA', 6, 'light', 'This daring IPA rides the rails between fresh, aromatic tropical fruits and golden, caramel maltiness before moving on with a satisfyingly-bitter finish.', 0, 'https://www.bierlinie.de/images/stories/flexicontent/m_vagabund_bindlestiff_ipa_0_33_l_bierflasche_mit_vollem_bierglas.jpg'),
(15, 4, 'Kottbusser', 'honey,spicy,malty,fruity', 'Wheat Beer', 5, 'medium', 'This historical hybrid beer recipe dates back to the early 1800s when small Berlin breweries brewed wheat, barley, and oats beers with honey, molasses, and even spices.', 0, 'https://www.bierlinie.de/images/stories/flexicontent/m_vagabund_kottbusser_0_33_l_bierflasche_mit_vollem_bierglas.jpg');`


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
