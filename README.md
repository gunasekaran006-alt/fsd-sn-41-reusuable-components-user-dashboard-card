# Role-Based Dashboard Access (React)

A simple yet effective React project that demonstrates how to handle **Conditional Rendering** based on user roles and login status.

## 🚀 Features
- **Authentication Check**: Verifies if the user is logged in using a `loginstatus` boolean.
- **Role-Based UI**: Dynamically displays different action buttons based on the user's role:
  - **Developer**: Can "Submit Code".
  - **Lead**: Can "Create Task" and "Approve Task".
  - **Manager**: Can "Create Task", "Delete Task", and "Approve Task".
- **Reusable Components**: Uses a custom `Button` component with inline styling.

## 🛠️ Tech Stack
- **React.js**: Functional components and Props.
- **CSS-in-JS**: Inline styling for components.

## 📂 Project Structure
- `App.js`: Contains the main state/data for the user.
- `Dashboard.jsx`: Handles the logic for showing specific features based on roles.
- `Button.jsx`: A reusable UI component for actions.

## 📝 How it works
The `Dashboard` component receives `userData` as props. It first checks if the user is authenticated. If true, it evaluates the `role` property (`developer`, `lead`, or `manager`) using nested ternary operators to render the appropriate buttons.

## 💡 Note
In the `Button.jsx` file, ensure CSS property names are spelled correctly (e.g., `backgroundColor` instead of `backgroundColour`) for the styles to apply correctly in a browser environment.
