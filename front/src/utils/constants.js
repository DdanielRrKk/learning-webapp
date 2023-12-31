import JS from '../assets/js-logo.png';
import ReactJS from '../assets/react-logo.png';
import Golang from '../assets/golang-logo.png';
import Firebase from '../assets/firebase-logo.png';
import Cobol from '../assets/cobol-logo.png';

export const MAX_LENGTH = 50;
export const MAX_LONG_LENGTH = 1000;

export const WRITE_PAGE_PLACEHOLDER = `Write your lesson here...

Every time you make a new line, the content will be visualized on the right. 
To start writing, implement the following pattern:
line 1: >type of content
line 2: the content

Example:
>title
Hello this is a title
>text
This is the text below the title
And this is second text below the title
>list
item 1
item 2
item 3
>code
code 1
code 2
code 3
`;

export const MigrationConcept = [
	{id: 0, data: 'Variables declaration'},
	{id: 1, data: 'Data types'},
	{id: 2, data: 'Operators'},
	{id: 3, data: 'Functions'},
];
export const MigrationJavaScript = [
	{id: 0, data: `let, var, const`},
	{id: 1, data: `string, number, boolean`},
	{id: 2, data: `array, object`},
	{id: 3, data: `function`},
];
export const MigrationPython = [
	{id: 0, data: `int, float, string`},
	{id: 1, data: `list, tuple, set`},
	{id: 2, data: `dict`},
	{id: 3, data: `function`},
];

export const BOXES = [
	{id: 0, courseId: 'javascript', image: JS, title: 'JavaScript'},
	{id: 1, courseId: 'react', image: ReactJS, title: 'React'},
	{id: 2, courseId: 'golang', image: Golang, title: 'Golang'},
	{id: 3, courseId: 'firebase', image: Firebase, title: 'Firebase'},
	{id: 4, courseId: 'cobol', image: Cobol, title: 'Cobol'},
];

export const ABOUT_CONTENT = [
	{id: 0, type: 'title', data: 'About'},
	{id: 1, type: 'text', data: 'Symbol 1...'},
	{id: 2, type: 'text', data: 'Symbol 2...'},
];

// J A V A S C R I P T   L E S S O N S   C O N T E N T
const LESSON_ID_1_CONTENT =
	'>title\n' +
	'History\n' +
	'>text\n' +
	'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that is widely used for front-end web development.\n' +
	'It was created by Brendan Eich in 1995 and originally developed for Netscape Navigator web browser.\n' +
	'>title\n' +
	'Overview\n' +
	'>text\n' +
	'JavaScript is known for its versatility and is primarily used for enhancing web pages by adding interactivity and dynamic behavior.\n' +
	'>list\n' +
	'JavaScript is a client-side scripting language\n' +
	'It is used on both the client-side (browser) and server-side (Node.js) of web applications\n' +
	'JavaScript is often abbreviated as JS\n' +
	'>code\n' +
	'let a = 5;\n' +
	'console.log(a);\n' +
	'>text\n' +
	'It has evolved over the years and is now commonly used on both the client-side (browser) and server-side (Node.js) of web applications.\n' +
	'>img\n' +
	'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2Fcontent%2Fcover_image_file%2Fcover_image%2F1085535%2Fstaging.toptal.net_javascript_functional-programming-javascript-3b5c20a73284cfe018fdde08bd2ef253.png';

export const JAVASCRIPT_LESSONS = [
	{id: 0, title: 'Introduction to JavaScript'}, // title
	{
		id: 1,
		title: 'Understand what JavaScript is, its history, and its role in web development',
		content: LESSON_ID_1_CONTENT,
	},

	{id: 2, title: 'Setting Up Your Development Environment'}, // title
	{id: 3, title: 'Choose a code editor (e.g., VSCode) and install relevant extensions', content: []},
	{id: 4, title: "Learn how to use the browser's developer tools for debugging", content: []},

	{id: 5, title: 'JavaScript Basics'}, // title
	{id: 6, title: 'Variables and Data Types', content: []},
	//Learn about var, let, and const
	//Understand data types (string, number, boolean, object, null, undefined)
	{id: 7, title: 'Operators', content: []},
	//Arithmetic, comparison, and logical operators
	{id: 8, title: 'Conditional Statements', content: []},
	//if, else if, else, switch.
	{id: 9, title: 'Loops', content: []},
	//for, while, do...while, for...in, for...of.
	{id: 10, title: 'Functions', content: []},
	//Declaring functions, parameters, return statements
	//Function expressions and arrow functions

	{id: 11, title: 'Scope and Closures'}, // title
	{id: 12, title: 'Learn about variable scope and closures', content: []},
	{id: 13, title: 'Understand how closures work and their practical use cases', content: []},

	{id: 14, title: 'Arrays and Objects'}, // title
	{id: 15, title: 'Working with arrays (methods like push, pop, map, filter)', content: []},
	{id: 16, title: 'Objects, properties, and methods', content: []},

	{id: 17, title: 'Error Handling'}, // title
	{id: 18, title: 'Exception handling with try...catch', content: []},
	{id: 19, title: 'Custom error handling', content: []},

	{id: 20, title: 'Asynchronous JavaScript'}, // title
	{id: 21, title: 'Callback functions', content: []},
	{id: 22, title: 'Promises', content: []},
	//Creating, chaining, and error handling
	{id: 23, title: 'Async/Await', content: []},
	//Writing asynchronous code in a synchronous style

	{id: 24, title: 'DOM Manipulation'}, // title
	{id: 25, title: 'Understand the Document Object Model (DOM)', content: []},
	{id: 26, title: 'Selecting and modifying DOM elements', content: []},
	{id: 27, title: 'Event handling (click, submit, etc.)', content: []},

	{id: 28, title: 'Advanced JavaScript Concepts'}, // title
	{id: 29, title: 'Prototypes and inheritance', content: []},
	{id: 30, title: 'Scopes and hoisting', content: []},
	{id: 31, title: 'The "this" keyword', content: []},

	{id: 32, title: 'ES6+ Features'}, // title
	{id: 33, title: 'Arrow functions', content: []},
	{id: 34, title: 'Template literals', content: []},
	{id: 35, title: 'Destructuring', content: []},
	{id: 36, title: 'Spread/Rest operators', content: []},
	{id: 37, title: 'Classes and modules', content: []},

	{id: 38, title: 'Web APIs'}, // title
	{id: 39, title: 'Fetch API for making HTTP requests', content: []},
	{id: 40, title: 'Local Storage for client-side data storage', content: []},
	{id: 41, title: 'Geolocation API for accessing user location', content: []},

	{id: 42, title: 'JavaScript Tools and Practices'}, // title
	{id: 43, title: 'Package Managers (npm or Yarn)', content: []},
	{id: 44, title: 'Bundlers (Webpack, Rollup)', content: []},
	{id: 45, title: 'Transpilers (Babel)', content: []},
	{id: 46, title: 'Linters and Code Formatters (ESLint, Prettier)', content: []},
	{id: 47, title: 'Version Control (Git)', content: []},

	{id: 48, title: 'Testing'}, // title
	{id: 49, title: 'Writing and running unit tests (Jest, Mocha)', content: []},
	{id: 50, title: 'End-to-end testing (Cypress, Selenium)', content: []},

	{id: 51, title: 'Client-Side Routing'}, // title
	{id: 52, title: 'Using libraries like React Router for single-page applications', content: []},

	{id: 53, title: 'State Management (Optional)'}, // title
	{id: 54, title: 'Learn about state management libraries like Redux or MobX', content: []},

	{id: 55, title: 'Responsive Web Design'}, // title
	{id: 56, title: 'CSS Media Queries', content: []},
	{id: 57, title: 'Flexbox and Grid Layout', content: []},

	{id: 58, title: 'Web Accessibility (a11y)'}, // title
	{id: 59, title: 'Implementing accessibility features for all users', content: []},

	{id: 60, title: 'Deployment and Hosting'}, // title
	{id: 61, title: 'Deploying your JavaScript applications to a web server', content: []},
	{id: 62, title: 'Hosting options (Netlify, Vercel, AWS, Heroku)', content: []},

	{id: 63, title: 'Security'}, // title
	{id: 64, title: 'Cross-Site Scripting (XSS) prevention', content: []},
	{id: 65, title: 'Cross-Site Request Forgery (CSRF) prevention', content: []},
	{id: 66, title: 'Content Security Policy (CSP)', content: []},

	{id: 67, title: 'Performance Optimization'}, // title
	{id: 68, title: 'Code splitting', content: []},
	{id: 69, title: 'Lazy loading', content: []},
	{id: 70, title: 'Minification and compression', content: []},
	{id: 71, title: 'Debouncing and throttling', content: []},

	{id: 72, title: 'Progressive Web Apps (PWAs)'}, // title
	{id: 73, title: 'Implementing PWA features for offline access and more', content: []},

	{id: 74, title: 'Server-Side Rendering (SSR) and Serverless (Optional)'}, // title
	{id: 75, title: 'Explore server-side JavaScript with frameworks like Next.js', content: []},
	{id: 76, title: 'Understand serverless architecture (e.g., AWS Lambda)', content: []},

	{id: 77, title: 'Advanced Topics (Optional)'}, // title
	{id: 78, title: 'WebSockets for real-time communication', content: []},
	{id: 79, title: 'GraphQL for efficient data fetching', content: []},
	{id: 80, title: 'Web Workers for multi-threading', content: []},

	{id: 81, title: 'Continuous Integration/Continuous Deployment (CI/CD)'}, // title
	{id: 82, title: 'Setting up automated deployment pipelines', content: []},

	{id: 83, title: 'Contributing to Open Source (Optional)'}, // title
	{id: 84, title: 'Get involved in JavaScript open-source projects', content: []},

	{id: 85, title: 'Stay Up-to-Date'}, // title
	{
		id: 86,
		title: 'Keep learning about the latest JavaScript features and best practices as the language evolves',
		content: [],
	},

	{id: 87, title: 'Final Projects'}, // title
	{id: 88, title: 'Apply your knowledge by building complex web applications', content: []},
];

// R E A C T   L E S S O N S
export const REACT_LESSONS = [
	{id: 0, title: 'Prerequisites'}, // title
	{
		id: 1,
		title: 'Ensure you have a strong understanding of HTML, CSS, and JavaScript, including ES6+ features',
		content: [],
	},

	{id: 2, title: 'JavaScript Fundamentals'}, // title
	{id: 3, title: 'Review and strengthen your knowledge of JavaScript', content: []},

	{id: 4, title: 'Introduction to React'}, // title
	{id: 5, title: "Understand what React is and why it's used", content: []},
	{id: 6, title: 'Set up your development environment with Node.js and npm/yarn', content: []},

	{id: 7, title: 'JSX (JavaScript XML)'}, // title
	{id: 8, title: 'Learn JSX syntax and how it blends HTML with JavaScript', content: []},

	{id: 9, title: 'Components'}, // title
	{id: 10, title: 'Understand React components', content: []},
	{id: 11, title: 'Create functional and class components', content: []},
	{id: 12, title: 'Learn about props and state', content: []},
	{id: 13, title: 'Lifecycle methods for class components (if necessary)', content: []},

	{id: 14, title: 'State and Props'}, // title
	{id: 15, title: 'Understand component state and when to use it', content: []},
	{id: 16, title: 'Learn how to pass data via props', content: []},
	{id: 17, title: 'Use PropTypes for type checking (optional)', content: []},

	{id: 18, title: 'Event Handling'}, // title
	{id: 19, title: 'Handle events in React components', content: []},
	{id: 20, title: 'Learn about synthetic events', content: []},

	{id: 21, title: 'Conditional Rendering'}, // title
	{id: 22, title: 'Render components conditionally based on state and props', content: []},
	{id: 23, title: 'Understand the ternary operator and logical &&', content: []},

	{id: 24, title: 'Lists and Keys'}, // title
	{id: 25, title: 'Render lists of data using map() and provide unique keys', content: []},
	{id: 26, title: 'Understand the importance of keys', content: []},

	{id: 27, title: 'Forms and Controlled Components'}, // title
	{id: 30, title: 'Handle form input elements', content: []},
	{id: 31, title: 'Create controlled components', content: []},
	{id: 32, title: 'Learn about controlled vs. uncontrolled components', content: []},

	{id: 33, title: 'Component Lifecycle'}, // title
	{id: 34, title: 'If working with class components, understand lifecycle methods', content: []},
	{id: 35, title: 'ComponentDidMount, ComponentDidUpdate, componentWillUnmount, etc.', content: []},

	{id: 36, title: 'React Router (Client-Side Routing)'}, // title
	{id: 37, title: 'Implement client-side routing with React Router', content: []},
	{id: 38, title: 'Set up routes and navigation', content: []},

	{id: 39, title: 'Styling in React'}, // title
	{id: 40, title: 'Learn different methods for styling in React', content: []},
	{id: 41, title: 'Inline styles', content: []},
	{id: 42, title: 'CSS Modules', content: []},
	{id: 43, title: 'Styled-components, Emotion (CSS-in-JS libraries)', content: []},

	{id: 44, title: 'State Management (Context API and Redux - Optional)'}, // title
	{id: 45, title: 'Explore state management options', content: []},
	{id: 46, title: 'Use the Context API for simple state management', content: []},
	{id: 47, title: 'Learn Redux for more complex applications', content: []},

	{id: 48, title: 'Hooks'}, // title
	{id: 49, title: 'Understand React hooks (useState, useEffect, useContext, etc.)', content: []},
	{id: 50, title: 'Refactor class components to functional components with hooks', content: []},

	{id: 51, title: 'Redux (Optional)'}, // title
	{id: 52, title: 'Dive deeper into Redux for advanced state management', content: []},
	{id: 53, title: 'Learn about actions, reducers, and the Redux store', content: []},

	{id: 54, title: 'API Requests'}, // title
	{id: 55, title: 'Fetch data from APIs using the fetch() method', content: []},
	{id: 56, title: 'Handle asynchronous data using async/await or Promises', content: []},

	{id: 57, title: 'Testing'}, // title
	{id: 58, title: 'Write unit tests with libraries like Jest and React Testing Library', content: []},
	{id: 59, title: 'Learn about test-driven development (TDD) if desired', content: []},

	{id: 60, title: 'Performance Optimization'}, // title
	{id: 61, title: 'Optimize component rendering using PureComponent or memoization', content: []},
	{id: 62, title: 'Lazy loading and code splitting with React.lazy and Suspense', content: []},

	{id: 63, title: 'Error Handling'}, // title
	{id: 64, title: 'Implement error boundaries', content: []},
	{id: 65, title: 'Handle errors gracefully in your application', content: []},

	{id: 66, title: 'Forms Validation'}, // title
	{id: 67, title: 'Implement form validation with custom logic or libraries like Formik or Yup', content: []},

	{id: 68, title: 'Server-Side Rendering (Next.js - Optional)'}, // title
	{id: 69, title: 'Explore server-side rendering with Next.js if building more complex apps', content: []},

	{id: 70, title: 'Web Accessibility (a11y)'}, // title
	{id: 71, title: 'Implement accessibility features to ensure your app is usable by everyone', content: []},

	{id: 72, title: 'Internationalization and Localization (i18n - Optional)'}, // title
	{id: 73, title: 'Learn how to make your app multilingual', content: []},

	{id: 74, title: 'Progressive Web Apps (PWAs - Optional)'}, // title
	{id: 75, title: 'Turn your app into a Progressive Web App for offline access and more', content: []},

	{id: 76, title: 'Deployment'}, // title
	{id: 77, title: 'Deploy your React app to platforms like Netlify, Vercel, or AWS', content: []},

	{id: 78, title: 'Real-World Projects'}, // title
	{id: 79, title: 'Build practical projects to apply your knowledge', content: []},

	{id: 80, title: 'Advanced Topics (Optional)'}, // title
	{id: 81, title: 'Learn about advanced topics like context, hooks, render props, and more', content: []},

	{id: 82, title: 'Best Practices and Patterns'}, // title
	{id: 83, title: 'Explore React best practices and common design patterns', content: []},

	{id: 84, title: 'Stay Updated'}, // title
	{id: 85, title: 'Continuously learn about new React features and updates', content: []},
];

// G O L A N G   L E S S O N S
export const GOLANG_LESSONS = [
	{id: 0, title: 'Introduction to Go'}, // title
	{id: 1, title: 'Understand what Go is and its origins', content: []},
	{id: 2, title: "Learn about Go's goals and design principles", content: []},

	{id: 3, title: 'Setting Up Your Development Environment'}, // title
	{id: 4, title: 'Install Go on your system', content: []},
	{id: 5, title: 'Configure environment variables (GOPATH, PATH)', content: []},
	{id: 6, title: 'Set up a code editor (e.g., VSCode) with Go extensions', content: []},

	{id: 7, title: 'Basics of Go: Variables and Data Types'}, // title
	{id: 8, title: 'Learn about basic types (int, float64, string, bool)', content: []},
	{id: 9, title: 'Understand variable declarations and initialization', content: []},
	{id: 10, title: 'Constants and iota: Work with constants and iota for enums', content: []},
	{id: 11, title: 'Operators: Arithmetic, comparison, logical, and bitwise operators', content: []},
	{id: 12, title: 'Control Flow: If, else if, else statements', content: []},
	{id: 13, title: 'Switch statements', content: []},
	{id: 14, title: 'Loops: For, while, range loops', content: []},

	{id: 15, title: 'Functions'}, // title
	{id: 16, title: 'Define and call functions', content: []},
	{id: 17, title: 'Function parameters and return values', content: []},
	{id: 18, title: 'Anonymous functions (closures)', content: []},

	{id: 19, title: 'Packages and Importing'}, // title
	{id: 20, title: 'Organize code into packages', content: []},
	{id: 21, title: 'Import and use packages from the standard library and third-party libraries', content: []},

	{id: 22, title: 'Error Handling'}, // title
	{id: 23, title: 'Handle errors with the error type', content: []},
	{id: 24, title: 'Learn about the panic and recover functions', content: []},

	{id: 25, title: 'Data Structures'}, // title
	{id: 26, title: 'Arrays and Slices: Create arrays and slices', content: []},
	{id: 27, title: 'Work with slices for dynamic collections', content: []},
	{id: 28, title: 'Maps: Define and use maps for key-value pairs', content: []},
	{id: 29, title: 'Iterate over maps', content: []},
	{id: 30, title: 'Structs: Create and use custom data structures with structs', content: []},

	{id: 31, title: 'Pointers and Memory Management'}, // title
	{id: 32, title: 'Understand pointers and memory addresses', content: []},
	{id: 33, title: 'Learn about the garbage collector', content: []},

	{id: 34, title: 'Object-Oriented Programming (OOP) in Go'}, // title
	{id: 35, title: "Understand Go's approach to OOP using structs and methods", content: []},
	{id: 36, title: 'Composition over inheritance', content: []},

	{id: 37, title: 'Interfaces'}, // title
	{id: 38, title: 'Define and implement interfaces', content: []},
	{id: 39, title: 'Understand how interfaces enable polymorphism', content: []},

	{id: 40, title: 'Concurrency and Goroutines'}, // title
	{id: 41, title: 'Learn about Goroutines for concurrent programming', content: []},
	{id: 42, title: 'Synchronization with channels', content: []},
	{id: 43, title: 'The go keyword and sync package', content: []},

	{id: 44, title: 'File I/O'}, // title
	{id: 45, title: 'Read and write files', content: []},
	{id: 46, title: 'Work with the os package', content: []},

	{id: 47, title: 'Testing in Go'}, // title
	{id: 48, title: 'Write and run tests using the testing package', content: []},
	{id: 49, title: 'Learn about test coverage', content: []},

	{id: 50, title: 'Error Handling Best Practices'}, // title
	{id: 51, title: 'Explore error handling patterns and best practices in Go', content: []},

	{id: 52, title: 'Structuring Go Projects'}, // title
	{id: 53, title: 'Understand how to structure your Go projects', content: []},
	{id: 54, title: 'Explore Go modules for dependency management', content: []},

	{id: 55, title: 'JSON and Serialization'}, // title
	{id: 56, title: 'Marshal and unmarshal JSON data', content: []},
	{id: 57, title: 'Work with the encoding/json package', content: []},

	{id: 58, title: 'Web Development with Go'}, // title
	{id: 59, title: 'Create HTTP servers and handle HTTP requests', content: []},
	{id: 60, title: 'Use third-party packages like Gorilla Mux for routing', content: []},

	{id: 61, title: 'Databases and SQL'}, // title
	{
		id: 62,
		title: 'Connect to and interact with databases (e.g., PostgreSQL, MySQL) using database/sql package or ORM (e.g., GORM)',
		content: [],
	},

	{id: 63, title: 'RESTful APIs'}, // title
	{id: 64, title: 'Build RESTful APIs using the standard library or frameworks like Gin or Echo', content: []},

	{id: 65, title: 'GraphQL (Optional)'}, // title
	{id: 66, title: 'Explore GraphQL and implement GraphQL APIs using packages like graphql-go', content: []},

	{id: 67, title: 'Concurrency Patterns (Optional)'}, // title
	{id: 68, title: "Dive deeper into Go's concurrency patterns and practices", content: []},

	{id: 69, title: 'Deployment and DevOps'}, // title
	{id: 70, title: 'Deploy Go applications to production servers', content: []},
	{id: 71, title: 'Learn about containerization (Docker) and orchestration (Kubernetes)', content: []},

	{id: 72, title: 'Advanced Topics (Optional)'}, // title
	{id: 73, title: 'Reflection, unsafe, and cgo', content: []},
	{id: 74, title: 'Working with system-level programming in Go', content: []},

	{id: 75, title: 'Community and Open Source (Optional)'}, // title
	{id: 76, title: 'Get involved in the Go community and contribute to open-source projects', content: []},

	{id: 77, title: 'Continuous Learning'}, // title
	{id: 78, title: 'Stay up-to-date with Go by reading documentation and following the Go blog', content: []},

	{id: 79, title: 'Real-World Projects'}, // title
	{id: 80, title: 'Apply your knowledge by building practical projects in Go', content: []},
];

// C O B O L   L E S S O N S
export const COBOL_LESSONS = [
	{id: 0, title: "Understand COBOL's History and Purpose"}, // title
	{id: 1, title: 'Learn the history of COBOL and why it was created', content: []},
	{id: 2, title: 'Understand its role in legacy systems and enterprise applications', content: []},

	{id: 3, title: 'Setup COBOL Development Environment'}, // title
	{id: 4, title: 'Install a COBOL compiler/interpreter like GnuCOBOL or Micro Focus COBOL', content: []},
	{
		id: 5,
		title: 'Set up an Integrated Development Environment (IDE) or text editor for COBOL coding',
		content: [],
	},

	{id: 6, title: 'COBOL Basics'}, // title
	{id: 7, title: 'Learn the syntax and structure of COBOL programs', content: []},
	{id: 8, title: 'Understand divisions, sections, paragraphs, and statements', content: []},

	{id: 9, title: 'Data Types and Variables'}, // title
	{id: 10, title: "Explore COBOL's data types, including numeric, alphanumeric, and usage clauses", content: []},
	{id: 11, title: 'Define and declare variables', content: []},
	{id: 12, title: 'Understand the concept of levels (level numbers) for data items', content: []},

	{id: 13, title: 'Arithmetic Operations'}, // title
	{id: 14, title: 'Perform basic arithmetic operations in COBOL', content: []},
	{id: 15, title: 'Learn about computational clauses like COMPUTE and ADD', content: []},

	{id: 16, title: 'Conditional Statements'}, // title
	{id: 17, title: 'Implement conditional logic using IF statements', content: []},
	{id: 18, title: 'Work with IF-ELSE and nested IF statements', content: []},

	{id: 19, title: 'Loops and Iteration'}, // title
	{id: 20, title: 'Use PERFORM loops for repetitive tasks', content: []},
	{id: 21, title: 'Understand iterative constructs like PERFORM UNTIL and PERFORM VARYING', content: []},

	{id: 22, title: 'File Handling'}, // title
	{id: 23, title: 'Learn how COBOL interacts with files', content: []},
	{id: 24, title: 'Read and write data from/to files (e.g., sequential, indexed, relative)', content: []},
	{id: 25, title: 'Understand the FILE SECTION and I/O control clauses', content: []},

	{id: 26, title: 'Data Structures'}, // title
	{id: 27, title: 'Work with data structures like arrays and records (GROUP items)', content: []},
	{id: 28, title: 'Perform operations on structured data', content: []},

	{id: 29, title: 'Subprograms and Functions'}, // title
	{id: 30, title: 'Create subprograms (subroutines and functions) in COBOL', content: []},
	{id: 31, title: 'Understand the CALL statement to invoke subprograms', content: []},

	{id: 32, title: 'String Manipulation'}, // title
	{id: 33, title: 'Manipulate strings and perform string operations', content: []},
	{id: 34, title: 'Learn about STRING, UNSTRING, and INSPECT verbs', content: []},

	{id: 35, title: 'Error Handling'}, // title
	{id: 36, title: 'Implement error handling and exception handling', content: []},
	{id: 37, title: 'Use declaratives for error conditions', content: []},

	{id: 38, title: 'COBOL Debugging Techniques'}, // title
	{id: 39, title: 'Learn debugging methods in COBOL', content: []},
	{id: 40, title: 'Use debugging tools and techniques available for COBOL', content: []},

	{id: 41, title: 'COBOL Standards and Best Practices'}, // title
	{id: 42, title: 'Study COBOL coding standards and best practices', content: []},
	{id: 43, title: 'Follow naming conventions and code formatting guidelines', content: []},

	{id: 44, title: 'COBOL and Modern Development'}, // title
	{id: 45, title: "Explore COBOL's relevance in modern enterprise systems", content: []},
	{id: 46, title: 'Learn about COBOL integration with other languages and technologies', content: []},

	{id: 47, title: 'Database Access (Optional)'}, // title
	{id: 48, title: "Understand COBOL's interaction with databases (e.g., SQL databases)", content: []},
	{id: 49, title: 'Use embedded SQL or COBOL-specific database access methods', content: []},

	{id: 50, title: 'COBOL in the Mainframe Environment (Optional)'}, // title
	{id: 51, title: 'Learn about COBOL usage in mainframe systems', content: []},
	{id: 52, title: 'Understand concepts like JCL (Job Control Language) and VSAM', content: []},

	{id: 53, title: 'Web Services (Optional)'}, // title
	{id: 54, title: "Explore COBOL's usage in web services development", content: []},
	{id: 55, title: 'Learn about RESTful APIs and SOAP services', content: []},

	{id: 56, title: 'COBOL Migration and Modernization (Optional)'}, // title
	{
		id: 57,
		title: 'Understand strategies for migrating legacy COBOL applications to modern platforms',
		content: [],
	},
	{id: 58, title: 'Explore tools and approaches for COBOL modernization', content: []},

	{id: 59, title: 'COBOL Community and Resources'}, // title
	{id: 60, title: 'Join COBOL forums, mailing lists, and communities', content: []},
	{id: 61, title: 'Access COBOL documentation and tutorials', content: []},

	{id: 62, title: 'Continuous Learning'}, // title
	{id: 63, title: 'Stay updated with new developments and trends in the COBOL ecosystem', content: []},

	{id: 64, title: 'Real-World Projects'}, // title
	{id: 65, title: 'Apply your COBOL knowledge by working on real-world COBOL projects', content: []},
];
