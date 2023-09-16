import JS from '../assets/js-logo.png';


export const BOXES = [
    {   id: 0, courseId: 'javascript', image: JS }
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
    {   id: 5, type: 'text',
        data: 'It has evolved over the years and is now commonly used on both the client-side (browser) and server-side (Node.js) of web applications.'
    },
    {   id: 6, type: 'list',
        data: [
            'JavaScript is a client-side scripting language',
            'It is used on both the client-side (browser) and server-side (Node.js) of web applications',
            'JavaScript is often abbreviated as JS'
        ]
    },
    {   id: 7, type: 'code',
        data: `
        let a = 5;
        console.log(a);
        `
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

