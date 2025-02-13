# Project BaseDashBoard by phoenixSaas Team

Welcome to the Project repository! This project follows a well-structured folder organization to maintain a clean, scalable, and maintainable codebase.

## Folder Structure

The project is organized into the following directories:

- **apis**: Contains API service files responsible for making HTTP requests to external services or backend endpoints.
- **enums**: Holds enumeration definitions used throughout the project to maintain consistent and readable code.
- **types**: Contains TypeScript type definitions and interfaces to ensure type safety and clarity in the project.
- **components**: Contains reusable React components. Each component should be in its own folder, including its associated styles and tests.
- **pages**: Contains React components representing different pages or views of the application. Each page may compose multiple components.
- **states**: Manages application state using state management libraries such as Redux or Context API.
- **hooks**: Contains custom React hooks that encapsulate reusable logic.
- **utils**: Utility functions and helper methods used across the project.
- **design-system**: Contains design system files, including themes, colors, fonts, and other design-related resources.
- **styles**: Global styles and style utilities, such as CSS or SASS files.

## Creating a New Module

To create a new module, use the `npx module create` command followed by the name of your module. This command scaffolds a new module in your project with the necessary files and structure.

### Example Command

```sh
npx module create MyNewModule
```

### Steps to Create a New Module

1. **Open Terminal**: Open your terminal or command prompt.
2. **Navigate to Project Directory**: Ensure you are in the root directory of your project.
3. **Run Command**: Execute the command `npx module create MyNewModule`, replacing `MyNewModule` with the desired name of your module.
4. **Verify Module Creation**: After running the command, verify that a new folder with the module name has been created in the appropriate directory with the necessary files.

### Sample Folder Structure After Module Creation

```
project-root/
├── apis/
├── enums/
├── types/
├── components/
├── pages/
├── states/
├── hooks/
├── utils/
├── design-system/
├── styles/
└── package.json
```

## Additional Scripts

The project includes several npm scripts to help generate various types of files. Below is a list of the available scripts and their purposes:

- **format**: Formats the code using Prettier.

  ```sh
  npm run format
  ```

- **g:api**: Generates an API file.

  ```sh
  npm run g:api
  ```

- **g:column**: Generates a column file.

  ```sh
  npm run g:column
  ```

- **g:type**: Generates a type file.

  ```sh
  npm run g:type
  ```

- **g:page**: Generates a page file.

  ```sh
  npm run g:page
  ```

- **g:createPage**: Generates a create page file.

  ```sh
  npm run g:createPage
  ```

- **g:updatePage**: Generates an update page file.

  ```sh
  npm run g:updatePage
  ```

- **g:form**: Generates a form file.

  ```sh
  npm run g:form
  ```

- **g:formUtil**: Generates a form utility file.

  ```sh
  npm run g:formUtil
  ```

- **g:dashboard**: Generates a dashboard file.
  ```sh
  npm run g:dashboard
  ```

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**:

   ```sh
   git clone https://gitlab.com/phoenix-saas/basestructure/dashboard.git
   cd dashboard
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

### Running the Project

To start the development server:

```sh
npm start
```

## Contact

If you have any questions or suggestions, feel free to open an issue or contact us at [phoenixsaas.info@gmail.com](mailto:phoenixsaas.info@gmail.com).
