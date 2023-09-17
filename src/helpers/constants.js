import JS from '../assets/js-logo.png';
import ReactJS from '../assets/react-logo.png';
import Golang from '../assets/golang-logo.png';
import Firebase from '../assets/firebase-logo.png';


export const BOXES = [
    {   id: 0, courseId: 'javascript', image: JS },
    {   id: 1, courseId: 'react', image: ReactJS },
    {   id: 2, courseId: 'golang', image: Golang },
    {   id: 3, courseId: 'firebase', image: Firebase }
];


export const ABOUT_CONTENT = [
    {   id: 0, type: 'title', data: 'About' },
    {   id: 1, type: 'text',
        data: 'Symbol 1...'
    },
    {   id: 2, type: 'text',
        data: 'Symbol 2...'
    }
];


// J A V A S C R I P T   L E S S O N S   C O N T E N T
const LESSON_ID_1_CONTENT = [
    {   id: 0, type: 'title', data: 'History' },
    {   id: 1, type: 'text',
        data: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that is widely used for front-end web development.'
    },
    {   id: 2, type: 'text',
        data: 'It was created by Brendan Eich in 1995 and originally developed for Netscape Navigator web browser.'
    },
    {   id: 3, type: 'title', data: 'Overview' },
    {   id: 4, type: 'text',
        data: 'JavaScript is known for its versatility and is primarily used for enhancing web pages by adding interactivity and dynamic behavior.'
    },
    {   id: 5, type: 'list',
        data: [
            'JavaScript is a client-side scripting language',
            'It is used on both the client-side (browser) and server-side (Node.js) of web applications',
            'JavaScript is often abbreviated as JS'
        ]
    },
    {   id: 6, type: 'code',
        data: [
            'let a = 5;',
            'console.log(a);'
        ]
    },
    {   id: 7, type: 'text',
        data: 'It has evolved over the years and is now commonly used on both the client-side (browser) and server-side (Node.js) of web applications.'
    },
    {
        id: 8, type: 'img',
        data: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2Fcontent%2Fcover_image_file%2Fcover_image%2F1085535%2Fstaging.toptal.net_javascript_functional-programming-javascript-3b5c20a73284cfe018fdde08bd2ef253.png'
    }
];



export const JAVASCRIPT_LESSONS = [
    {   id: 0, title: 'Introduction to JavaScript' }, // title
    {   id: 1, title: 'Understand what JavaScript is, its history, and its role in web development', content: LESSON_ID_1_CONTENT },
    {   id: 2, title: 'Setting Up Your Development Environment' },
    {   id: 3, title: 'Choose a code editor (e.g., VSCode) and install relevant extensions', content: [] },
    {   id: 4, title: "Learn how to use the browser's developer tools for debugging", content: [] },
    
    {   id: 5, title: 'JavaScript Basics' }, // title
    {   id: 6, title: 'Variables and Data Types', content: [] },
    //Learn about var, let, and const
    //Understand data types (string, number, boolean, object, null, undefined)
    {   id: 7, title: 'Operators', content: [] },
    //Arithmetic, comparison, and logical operators
    {   id: 8, title: 'Conditional Statements', content: [] },
    //if, else if, else, switch.
    {   id: 9, title: 'Loops', content: [] },
    //for, while, do...while, for...in, for...of.
    {   id: 10, title: 'Functions', content: [] },
    //Declaring functions, parameters, return statements
    //Function expressions and arrow functions
    
    {   id: 11, title: 'Scope and Closures' }, // title
    {   id: 12, title: 'Learn about variable scope and closures', content: [] },
    {   id: 13, title: 'Understand how closures work and their practical use cases', content: [] },
    
    {   id: 14, title: 'Arrays and Objects' }, // title
    {   id: 15, title: 'Working with arrays (methods like push, pop, map, filter)', content: [] },
    {   id: 16, title: 'Objects, properties, and methods', content: [] },
    
    {   id: 17, title: 'Error Handling' }, // title
    {   id: 18, title: 'Exception handling with try...catch', content: [] },
    {   id: 19, title: 'Custom error handling', content: [] },
    
    {   id: 20, title: 'Asynchronous JavaScript' }, // title
    {   id: 21, title: 'Callback functions', content: [] },
    {   id: 22, title: 'Promises', content: [] },
    //Creating, chaining, and error handling
    {   id: 23, title: 'Async/Await', content: [] },
    //Writing asynchronous code in a synchronous style
    
    {   id: 24, title: 'DOM Manipulation' }, // title
    {   id: 25, title: 'Understand the Document Object Model (DOM)', content: [] },
    {   id: 26, title: 'Selecting and modifying DOM elements', content: [] },
    {   id: 27, title: 'Event handling (click, submit, etc.)', content: [] },
    
    {   id: 28, title: 'Advanced JavaScript Concepts' }, // title
    {   id: 29, title: 'Prototypes and inheritance', content: [] },
    {   id: 30, title: 'Scopes and hoisting', content: [] },
    {   id: 31, title: 'The "this" keyword', content: [] },
    
    {   id: 32, title: 'ES6+ Features' }, // title
    {   id: 33, title: 'Arrow functions', content: [] },
    {   id: 34, title: 'Template literals', content: [] },
    {   id: 35, title: 'Destructuring', content: [] },
    {   id: 36, title: 'Spread/Rest operators', content: [] },
    {   id: 37, title: 'Classes and modules', content: [] },
    
    {   id: 38, title: 'Web APIs' }, // title
    {   id: 39, title: 'Fetch API for making HTTP requests', content: [] },
    {   id: 40, title: 'Local Storage for client-side data storage', content: [] },
    {   id: 41, title: 'Geolocation API for accessing user location', content: [] },
    
    {   id: 42, title: 'JavaScript Tools and Practices' }, // title
    {   id: 43, title: 'Package Managers (npm or Yarn)', content: [] },
    {   id: 44, title: 'Bundlers (Webpack, Rollup)', content: [] },
    {   id: 45, title: 'Transpilers (Babel)', content: [] },
    {   id: 46, title: 'Linters and Code Formatters (ESLint, Prettier)', content: [] },
    {   id: 47, title: 'Version Control (Git)', content: [] },
    
    {   id: 48, title: 'Testing' }, // title
    {   id: 49, title: 'Writing and running unit tests (Jest, Mocha)', content: [] },
    {   id: 50, title: 'End-to-end testing (Cypress, Selenium)', content: [] },
    
    {   id: 51, title: 'Client-Side Routing' }, // title
    {   id: 52, title: 'Using libraries like React Router for single-page applications', content: [] },
    
    {   id: 53, title: 'State Management (Optional)' }, // title
    {   id: 54, title: 'Learn about state management libraries like Redux or MobX', content: [] },
    
    {   id: 55, title: 'Responsive Web Design' }, // title
    {   id: 56, title: 'CSS Media Queries', content: [] },
    {   id: 57, title: 'Flexbox and Grid Layout', content: [] },
    
    {   id: 58, title: 'Web Accessibility (a11y)' }, // title
    {   id: 59, title: 'Implementing accessibility features for all users', content: [] },
    
    {   id: 60, title: 'Deployment and Hosting' }, // title
    {   id: 61, title: 'Deploying your JavaScript applications to a web server', content: [] },
    {   id: 62, title: 'Hosting options (Netlify, Vercel, AWS, Heroku)', content: [] },
    
    {   id: 63, title: 'Security' }, // title
    {   id: 64, title: 'Cross-Site Scripting (XSS) prevention', content: [] },
    {   id: 65, title: 'Cross-Site Request Forgery (CSRF) prevention', content: [] },
    {   id: 66, title: 'Content Security Policy (CSP)', content: [] },
    
    {   id: 67, title: 'Performance Optimization' }, // title
    {   id: 68, title: 'Code splitting', content: [] },
    {   id: 69, title: 'Lazy loading', content: [] },
    {   id: 70, title: 'Minification and compression', content: [] },
    {   id: 71, title: 'Debouncing and throttling', content: [] },
    
    {   id: 72, title: 'Progressive Web Apps (PWAs)' }, // title
    {   id: 73, title: 'Implementing PWA features for offline access and more', content: [] },
    
    {   id: 74, title: 'Server-Side Rendering (SSR) and Serverless (Optional)' }, // title
    {   id: 75, title: 'Explore server-side JavaScript with frameworks like Next.js', content: [] },
    {   id: 76, title: 'Understand serverless architecture (e.g., AWS Lambda)', content: [] },
    
    {   id: 77, title: 'Advanced Topics (Optional)' }, // title
    {   id: 78, title: 'WebSockets for real-time communication', content: [] },
    {   id: 79, title: 'GraphQL for efficient data fetching', content: [] },
    {   id: 80, title: 'Web Workers for multi-threading', content: [] },
    
    {   id: 81, title: 'Continuous Integration/Continuous Deployment (CI/CD)' }, // title
    {   id: 82, title: 'Setting up automated deployment pipelines', content: [] },
    
    {   id: 83, title: 'Contributing to Open Source (Optional)' }, // title
    {   id: 84, title: 'Get involved in JavaScript open-source projects', content: [] },
    
    {   id: 85, title: 'Stay Up-to-Date' }, // title
    {   id: 86, title: 'Keep learning about the latest JavaScript features and best practices as the language evolves', content: [] },
    
    {   id: 87, title: 'Final Projects' }, // title
    {   id: 88, title: 'Apply your knowledge by building complex web applications', content: [] }
];


// R E A C T   L E S S O N S
export const REACT_LESSONS = [
    {   id: 1, title: 'Prerequisites' }, // title
    {   id: 2, title: 'Ensure you have a strong understanding of HTML, CSS, and JavaScript, including ES6+ features', content: [] },

    {   id: 3, title: 'JavaScript Fundamentals' }, // title
    {   id: 4, title: 'Review and strengthen your knowledge of JavaScript', content: [] },

    {   id: 5, title: 'Introduction to React' }, // title
    {   id: 6, title: "Understand what React is and why it's used", content: [] },
    {   id: 7, title: 'Set up your development environment with Node.js and npm/yarn', content: [] },

    {   id: 8, title: 'JSX (JavaScript XML)' }, // title
    {   id: 9, title: 'Learn JSX syntax and how it blends HTML with JavaScript', content: [] },

    {   id: 10, title: 'Components' }, // title
    {   id: 11, title: 'Understand React components', content: [] },
    {   id: 12, title: 'Create functional and class components', content: [] },
    {   id: 13, title: 'Learn about props and state', content: [] },
    {   id: 14, title: 'Lifecycle methods for class components (if necessary)', content: [] },

    {   id: 15, title: 'State and Props' }, // title
    {   id: 16, title: 'Understand component state and when to use it', content: [] },
    {   id: 17, title: 'Learn how to pass data via props', content: [] },
    {   id: 18, title: 'Use PropTypes for type checking (optional)', content: [] },

    {   id: 19, title: 'Event Handling' }, // title
    {   id: 20, title: 'Handle events in React components', content: [] },
    {   id: 21, title: 'Learn about synthetic events', content: [] },

    {   id: 22, title: 'Conditional Rendering' }, // title
    {   id: 23, title: 'Render components conditionally based on state and props', content: [] },
    {   id: 24, title: 'Understand the ternary operator and logical &&', content: [] },

    {   id: 25, title: 'Lists and Keys' }, // title
    {   id: 26, title: 'Render lists of data using map() and provide unique keys', content: [] },
    {   id: 27, title: 'Understand the importance of keys', content: [] },

    {   id: 28, title: 'Forms and Controlled Components' }, // title
    {   id: 29, title: 'Handle form input elements', content: [] },
    {   id: 30, title: 'Create controlled components', content: [] },
    {   id: 31, title: 'Learn about controlled vs. uncontrolled components', content: [] },

    {   id: 32, title: 'Component Lifecycle' }, // title
    {   id: 33, title: 'If working with class components, understand lifecycle methods', content: [] },
    {   id: 34, title: 'ComponentDidMount, ComponentDidUpdate, componentWillUnmount, etc.', content: [] },

    {   id: 35, title: 'React Router (Client-Side Routing)' },  // title
    {   id: 36, title: 'Implement client-side routing with React Router', content: [] },
    {   id: 37, title: 'Set up routes and navigation', content: [] },

    {   id: 38, title: 'Styling in React' }, // title
    {   id: 39, title: 'Learn different methods for styling in React', content: [] },
    {   id: 40, title: 'Inline styles', content: [] },
    {   id: 41, title: 'CSS Modules', content: [] },
    {   id: 42, title: 'Styled-components, Emotion (CSS-in-JS libraries)', content: [] },
    
    {   id: 43, title: 'State Management (Context API and Redux - Optional)' }, // title
    {   id: 44, title: 'Explore state management options', content: [] },
    {   id: 45, title: 'Use the Context API for simple state management', content: [] },
    {   id: 46, title: 'Learn Redux for more complex applications', content: [] },

    {   id: 47, title: 'Hooks' }, // title
    {   id: 48, title: 'Understand React hooks (useState, useEffect, useContext, etc.)', content: [] },
    {   id: 49, title: 'Refactor class components to functional components with hooks', content: [] },

    {   id: 50, title: 'Redux (Optional)' }, // title
    {   id: 51, title: 'Dive deeper into Redux for advanced state management', content: [] },
    {   id: 52, title: 'Learn about actions, reducers, and the Redux store', content: [] },

    {   id: 53, title: 'API Requests' }, // title
    {   id: 54, title: 'Fetch data from APIs using the fetch() method', content: [] },
    {   id: 55, title: 'Handle asynchronous data using async/await or Promises', content: [] },

    {   id: 56, title: 'Testing' }, // title
    {   id: 57, title: 'Write unit tests with libraries like Jest and React Testing Library', content: [] },
    {   id: 58, title: 'Learn about test-driven development (TDD) if desired', content: [] },

    {   id: 59, title: 'Performance Optimization' }, // title
    {   id: 60, title: 'Optimize component rendering using PureComponent or memoization', content: [] },
    {   id: 61, title: 'Lazy loading and code splitting with React.lazy and Suspense', content: [] },

    {   id: 62, title: 'Error Handling' }, // title
    {   id: 63, title: 'Implement error boundaries', content: [] },
    {   id: 64, title: 'Handle errors gracefully in your application', content: [] },

    {   id: 65, title: 'Forms Validation' }, // title
    {   id: 66, title: 'Implement form validation with custom logic or libraries like Formik or Yup', content: [] },

    {   id: 67, title: 'Server-Side Rendering (Next.js - Optional)' }, // title
    {   id: 68, title: 'Explore server-side rendering with Next.js if building more complex apps', content: [] },

    {   id: 69, title: 'Web Accessibility (a11y)' }, // title
    {   id: 70, title: 'Implement accessibility features to ensure your app is usable by everyone', content: [] },

    {   id: 71, title: 'Internationalization and Localization (i18n - Optional)' }, // title
    {   id: 72, title: 'Learn how to make your app multilingual', content: [] },

    {   id: 73, title: 'Progressive Web Apps (PWAs - Optional)' }, // title
    {   id: 74, title: 'Turn your app into a Progressive Web App for offline access and more', content: [] },

    {   id: 75, title: 'Deployment' }, // title
    {   id: 76, title: 'Deploy your React app to platforms like Netlify, Vercel, or AWS', content: [] },

    {   id: 77, title: 'Real-World Projects' }, // title
    {   id: 78, title: 'Build practical projects to apply your knowledge', content: [] },

    {   id: 79, title: 'Advanced Topics (Optional)' }, // title
    {   id: 80, title: 'Learn about advanced topics like context, hooks, render props, and more', content: [] },

    {   id: 81, title: 'Best Practices and Patterns' }, // title
    {   id: 82, title: 'Explore React best practices and common design patterns', content: [] },

    {   id: 83, title: 'Stay Updated' }, // title
    {   id: 84, title: 'Continuously learn about new React features and updates', content: [] }
];


// G O L A N G   L E S S O N S
export const GOLANG_LESSONS = [
    { id: 0, title: 'Introduction to Go' }, // title
    { id: 1, title: "Understand what Go is and its origins", content: [] },
    { id: 2, title: "Learn about Go's goals and design principles", content: [] },

    { id: 3, title: 'Setting Up Your Development Environment' }, // title
    { id: 4, title: 'Install Go on your system', content: [] },
    { id: 5, title: 'Configure environment variables (GOPATH, PATH)', content: [] },
    { id: 6, title: 'Set up a code editor (e.g., VSCode) with Go extensions', content: [] },

    { id: 7, title: 'Basics of Go: Variables and Data Types' }, // title
    { id: 8, title: 'Learn about basic types (int, float64, string, bool)', content: [] },
    { id: 9, title: 'Understand variable declarations and initialization', content: [] },
    { id: 10, title: 'Constants and iota: Work with constants and iota for enums', content: [] },
    { id: 11, title: 'Operators: Arithmetic, comparison, logical, and bitwise operators', content: [] },
    { id: 12, title: 'Control Flow: If, else if, else statements', content: [] },
    { id: 13, title: 'Switch statements', content: [] },
    { id: 14, title: 'Loops: For, while, range loops', content: [] },

    { id: 15, title: 'Functions' }, // title
    { id: 16, title: 'Define and call functions', content: [] },
    { id: 17, title: 'Function parameters and return values', content: [] },
    { id: 18, title: 'Anonymous functions (closures)', content: [] },

    { id: 19, title: 'Packages and Importing' }, // title
    { id: 20, title: 'Organize code into packages', content: [] },
    { id: 21, title: 'Import and use packages from the standard library and third-party libraries', content: [] },

    { id: 22, title: 'Error Handling' }, // title
    { id: 23, title: 'Handle errors with the error type', content: [] },
    { id: 24, title: 'Learn about the panic and recover functions', content: [] },

    { id: 25, title: 'Data Structures' }, // title
    { id: 26, title: 'Arrays and Slices: Create arrays and slices', content: [] },
    { id: 27, title: 'Work with slices for dynamic collections', content: [] },
    { id: 28, title: 'Maps: Define and use maps for key-value pairs', content: [] },
    { id: 29, title: 'Iterate over maps', content: [] },
    { id: 30, title: 'Structs: Create and use custom data structures with structs', content: [] },

    { id: 31, title: 'Pointers and Memory Management' }, // title
    { id: 32, title: 'Understand pointers and memory addresses', content: [] },
    { id: 33, title: 'Learn about the garbage collector', content: [] },

    { id: 34, title: 'Object-Oriented Programming (OOP) in Go' }, // title
    { id: 35, title: 'Understand Go\'s approach to OOP using structs and methods', content: [] },
    { id: 36, title: 'Composition over inheritance', content: [] },

    { id: 37, title: 'Interfaces' }, // title
    { id: 38, title: 'Define and implement interfaces', content: [] },
    { id: 39, title: 'Understand how interfaces enable polymorphism', content: [] },

    { id: 40, title: 'Concurrency and Goroutines' }, // title
    { id: 41, title: 'Learn about Goroutines for concurrent programming', content: [] },
    { id: 42, title: 'Synchronization with channels', content: [] },
    { id: 43, title: 'The go keyword and sync package', content: [] },

    { id: 44, title: 'File I/O' }, // title
    { id: 45, title: 'Read and write files', content: [] },
    { id: 46, title: 'Work with the os package', content: [] },

    { id: 47, title: 'Testing in Go' }, // title
    { id: 48, title: 'Write and run tests using the testing package', content: [] },
    { id: 49, title: 'Learn about test coverage', content: [] },

    { id: 50, title: 'Error Handling Best Practices' }, // title
    { id: 51, title: 'Explore error handling patterns and best practices in Go', content: [] },

    { id: 52, title: 'Structuring Go Projects' }, // title
    { id: 53, title: 'Understand how to structure your Go projects', content: [] },
    { id: 54, title: 'Explore Go modules for dependency management', content: [] },

    { id: 55, title: 'JSON and Serialization' }, // title
    { id: 56, title: 'Marshal and unmarshal JSON data', content: [] },
    { id: 57, title: 'Work with the encoding/json package', content: [] },

    { id: 58, title: 'Web Development with Go' }, // title
    { id: 59, title: 'Create HTTP servers and handle HTTP requests', content: [] },
    { id: 60, title: 'Use third-party packages like Gorilla Mux for routing', content: [] },

    { id: 61, title: 'Databases and SQL' }, // title
    { id: 62, title: 'Connect to and interact with databases (e.g., PostgreSQL, MySQL) using database/sql package or ORM (e.g., GORM)', content: [] },

    { id: 63, title: 'RESTful APIs' }, // title
    { id: 64, title: 'Build RESTful APIs using the standard library or frameworks like Gin or Echo', content: [] },

    { id: 65, title: 'GraphQL (Optional)' }, // title
    { id: 66, title: 'Explore GraphQL and implement GraphQL APIs using packages like graphql-go', content: [] },

    { id: 67, title: 'Concurrency Patterns (Optional)' }, // title
    { id: 68, title: "Dive deeper into Go's concurrency patterns and practices", content: [] },

    { id: 69, title: 'Deployment and DevOps' }, // title
    { id: 70, title: 'Deploy Go applications to production servers', content: [] },
    { id: 71, title: 'Learn about containerization (Docker) and orchestration (Kubernetes)', content: [] },

    { id: 72, title: 'Advanced Topics (Optional)' }, // title
    { id: 73, title: 'Reflection, unsafe, and cgo', content: [] },
    { id: 74, title: 'Working with system-level programming in Go', content: [] },

    { id: 75, title: 'Community and Open Source (Optional)' }, // title
    { id: 76, title: 'Get involved in the Go community and contribute to open-source projects', content: [] },

    { id: 77, title: 'Continuous Learning' }, // title
    { id: 78, title: 'Stay up-to-date with Go by reading documentation and following the Go blog', content: [] },

    { id: 79, title: 'Real-World Projects' }, // title
    { id: 80, title: 'Apply your knowledge by building practical projects in Go', content: [] },
  ];
