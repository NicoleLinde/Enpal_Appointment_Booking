# Enpal Appointment Booking Frontend

This project is a Next.js-based application created for Enpal's appointment booking system.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (latest stable version)
- **npm** (comes with Node.js)

### Installation

To install the project dependencies, navigate to the project folder and run:

```bash
npm install
```

### Running the Development Server

To start the development server, use the following command:

```bash
npm run dev
```

The application will run on http://localhost:3001 because the API is running on port 3000.

### Building the Project

To create a production build, run:

```bash
npm run build
``` 
Once the build is finished, you can start the production server with:

```bash
npm start
``` 

### Running the Linter

To check for linting issues, run the following command:

```bash
npm run lint
```

This will automatically check the code for any linting errors based on the project’s ESLint configuration.

### Trade-offs and Time Constraints

During the development process, the following trade-offs were made due to time constraints:

- **Global Message State:** A global state management solution (such as Redux or Context API) was not implemented for handling global messages. Instead, messages were handled locally within components for simplicity.
- **User Authentication & Role Management:** No user login or handling was implemented to display different content based on user roles. This could be important in a production environment but was omitted to focus on core functionality.
- **Responsiveness:** The design is optimized for desktop devices. Responsiveness for mobile and tablet devices was deprioritized due to time constraints.
- **Refactoring and Generalization:** There was limited refactoring and generalization of components, meaning certain parts of the code could benefit from further abstraction or simplification.

### Api Routes

The application interacts with the provided API for managing appointment slots. Here are some key routes:

- **GET /api/slots:** Fetches available slots, can be filtered by date, booking status, or customer name.
- **POST /api/slots/{slotId}/book:** Books a specific slot by its ID.
- **POST /api/slots/{slotId}/cancel-booking:** Cancels a booked slot.

These routes are used by the frontend to display and manage appointment slots.

### Acknowledgements:

This project was created as part of an assessment for Enpal, and the API provided by Enpal is used for fetching and managing appointment booking data.
