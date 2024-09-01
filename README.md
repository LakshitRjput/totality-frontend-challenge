
# Property Rental Application

This is a Property Rental Application developed as part of a company assignment. The application allows users to browse available properties, add them to a cart, and proceed with the booking process. The application includes user authentication, cart management, and date selection features, and it is styled using Tailwind CSS.

## Deployment

The application is deployed and hosted using Firebase Hosting. You can access the live application [here](https://propertyrental-8402a.web.app/).

## Tech Stack

- **Frontend:** React, Vite, React Router
- **Styling:** Tailwind CSS
- **State Management:** React useState, sessionStorage
- **Icons:** React Icons
- **Deployment:** Firebase Hosting

## Approach

### 1. Component Structure

The application is divided into several reusable components, such as `NavBar`, `Cart`, `ConfirmOrderPage`, `PropertyList`, and more. Each component is designed to handle specific tasks within the application.

### 2. State Management

- **Authentication:** The authentication state is managed using React's `useState` and `sessionStorage`. This ensures that users remain logged in while navigating within the app but are logged out on page reload.
- **Cart Management:** The cart state is managed using React's `useState`. The user can add or remove items, and select dates for booking. Date selection is required before proceeding to checkout.

### 3. Responsive Design

The application is designed to be responsive across different screen sizes, including mobile devices like the iPhone 14 Pro etc. Tailwind CSS is used extensively to ensure that components are properly styled and responsive.

### 4. Error Handling

Error handling is implemented for various scenarios, such as missing date selection during checkout. Users are prompted to correct errors before proceeding.

### 5. Firebase Hosting

The project was built using Vite, and the build files were deployed to Firebase Hosting for fast and reliable hosting.

## Additional Notes

- **Background Image on Home Page:** The home page features a background image with a call-to-action button. The text on the image is left-aligned and responsive.
- **NavBar:** The navigation bar changes layout based on screen size. On large screens, it displays the Home, Cart, and Logout buttons in separate sections, with the username centered. On small screens, these elements are hidden behind a hamburger menu, and the username is moved to the right.
- **Peach Color Theme:** A shade of peach color is used for the button on the hero section of the Home Page.

## Setup Instructions

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. To create a production build, run `npm run build`.

## License

This project is licensed under the MIT License.
