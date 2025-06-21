export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  codeExample?: {
    html?: string;
    css?: string;
    javascript?: string;
  };
  exercises?: {
    id: string;
    title: string;
    description: string;
    startingCode: {
      html: string;
      css: string;
      javascript: string;
    };
    solution: {
      html: string;
      css: string;
      javascript: string;
    };
  }[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  bgGradient: string;
  borderColor: string;
  duration: string;
  level: string;
  topics: string[];
  students: string;
  rating: number;
  lessons: Lesson[];
}

export const courses: Course[] = [
  {
    id: 'html',
    title: 'HTML Mastery',
    description: 'Build the foundation of web development with semantic HTML, accessibility best practices, and modern web standards.',
    duration: '4-6 hours',
    level: 'Beginner',
    topics: ['Semantic Elements', 'Forms & Validation', 'Accessibility', 'SEO Optimization'],
    color: 'from-orange-400 to-red-500',
    bgGradient: 'from-orange-900/20 to-red-900/10',
    borderColor: 'border-orange-500/20 hover:border-orange-400/40',
    icon: '🏗️',
    students: '15K+',
    rating: 4.9,
    lessons: [
      {
        id: 'html-1',
        title: 'Introduction to HTML',
        description: 'Learn the basics of HTML structure and syntax',
        content: `
# Introduction to HTML

HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page using markup.

## What is HTML?
- HTML stands for HyperText Markup Language
- HTML is the standard markup language for creating Web pages
- HTML describes the structure of a Web page
- HTML consists of a series of elements
- HTML elements tell the browser how to display the content

## Basic HTML Structure
Every HTML document has a basic structure that includes:
- DOCTYPE declaration
- HTML element
- Head section
- Body section

## HTML Elements
HTML elements are the building blocks of HTML pages. An HTML element is defined by a start tag, some content, and an end tag.
        `,
        codeExample: {
          html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Welcome to HTML!</h1>
    <p>This is my first HTML paragraph.</p>
</body>
</html>`
        },
        exercises: [
          {
            id: 'html-1-ex-1',
            title: 'Create Your First HTML Page',
            description: 'Create a basic HTML page with a title, heading, and paragraph.',
            startingCode: {
              html: '<!-- Write your HTML here -->',
              css: '',
              javascript: ''
            },
            solution: {
              html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Page</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>This is my first HTML page.</p>
</body>
</html>`,
              css: '',
              javascript: ''
            }
          }
        ]
      },
      {
        id: 'html-2',
        title: 'HTML Elements and Tags',
        description: 'Explore different HTML elements and their usage',
        content: `
# HTML Elements and Tags

HTML elements are the building blocks of HTML documents. Each element serves a specific purpose and has its own semantic meaning.

## Common HTML Elements

### Headings
HTML provides six levels of headings, from h1 (most important) to h6 (least important).

### Paragraphs
The <p> element defines a paragraph of text.

### Links
The <a> element creates hyperlinks to other pages, files, or locations.

### Images
The <img> element embeds images in your HTML document.

### Lists
HTML supports ordered lists (<ol>) and unordered lists (<ul>).
        `,
        codeExample: {
          html: `<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Sub-subheading</h3>

<p>This is a paragraph with some <strong>bold text</strong> and <em>italic text</em>.</p>

<a href="https://example.com">Visit Example.com</a>

<img src="https://via.placeholder.com/300x200" alt="Placeholder image">

<ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>

<ol>
    <li>Step one</li>
    <li>Step two</li>
    <li>Step three</li>
</ol>`
        }
      }
    ]
  },
  {
    id: 'css',
    title: 'CSS Styling Pro',
    description: 'Master modern CSS with Flexbox, Grid, animations, and responsive design techniques that create stunning interfaces.',
    duration: '6-8 hours',
    level: 'Beginner to Intermediate',
    topics: ['Flexbox & Grid', 'Animations & Transitions', 'Responsive Design', 'CSS Variables'],
    color: 'from-blue-400 to-cyan-500',
    bgGradient: 'from-blue-900/20 to-cyan-900/10',
    borderColor: 'border-blue-500/20 hover:border-blue-400/40',
    icon: '🎨',
    students: '12K+',
    rating: 4.8,
    lessons: [
      {
        id: 'css-1',
        title: 'CSS Fundamentals',
        description: 'Learn CSS syntax, selectors, and basic styling',
        content: `
# CSS Fundamentals

CSS (Cascading Style Sheets) is used to style and layout web pages. It controls the presentation of HTML elements.

## What is CSS?
- CSS stands for Cascading Style Sheets
- CSS describes how HTML elements are to be displayed
- CSS saves a lot of work by controlling the layout of multiple web pages at once
- External stylesheets are stored in CSS files

## CSS Syntax
A CSS rule consists of a selector and a declaration block.

## CSS Selectors
CSS selectors are used to select HTML elements based on their element name, id, class, attribute, and more.
        `,
        codeExample: {
          html: `<div class="container">
    <h1 id="main-title">Welcome to CSS</h1>
    <p class="intro">This is an introduction to CSS styling.</p>
    <button class="btn primary">Click me</button>
</div>`,
          css: `/* Element selector */
h1 {
    color: #333;
    font-size: 2rem;
}

/* Class selector */
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.intro {
    font-size: 1.2rem;
    color: #666;
    line-height: 1.6;
}

/* ID selector */
#main-title {
    text-align: center;
    margin-bottom: 1rem;
}

/* Multiple classes */
.btn.primary {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}`
        }
      }
    ]
  },
  {
    id: 'javascript',
    title: 'JavaScript Mastery',
    description: 'From fundamentals to advanced concepts including ES6+, DOM manipulation, async programming, and modern JavaScript patterns.',
    duration: '12-15 hours',
    level: 'Beginner to Advanced',
    topics: ['ES6+ Features', 'DOM Manipulation', 'Async/Await & Promises', 'API Integration'],
    color: 'from-yellow-400 to-orange-500',
    bgGradient: 'from-yellow-900/20 to-orange-900/10',
    borderColor: 'border-yellow-500/20 hover:border-yellow-400/40',
    icon: '⚡',
    students: '20K+',
    rating: 4.9,
    lessons: [
      {
        id: 'js-1',
        title: 'JavaScript Fundamentals',
        description: 'Learn JavaScript syntax, variables, and data types',
        content: `
# JavaScript Fundamentals

JavaScript is a high-level, interpreted programming language that adds interactivity and dynamic behavior to web pages.

## What is JavaScript?
- JavaScript is a programming language that runs in web browsers
- It's used to create interactive web pages and web applications
- JavaScript can manipulate HTML and CSS dynamically
- It's an essential part of modern web development

## Variables and Data Types

### Variable Declarations
JavaScript has three ways to declare variables:
- \`var\` - function-scoped, can be redeclared
- \`let\` - block-scoped, cannot be redeclared
- \`const\` - block-scoped, cannot be reassigned

### Data Types
JavaScript has several primitive data types:
- **String**: Text data enclosed in quotes
- **Number**: Numeric values (integers and floats)
- **Boolean**: true or false values
- **Undefined**: Variable declared but not assigned
- **Null**: Intentional absence of value
- **Symbol**: Unique identifier (ES6+)
- **BigInt**: Large integers (ES2020+)

### Complex Data Types
- **Object**: Collection of key-value pairs
- **Array**: Ordered list of values
- **Function**: Reusable blocks of code

## Operators
JavaScript supports various operators:
- Arithmetic: +, -, *, /, %, **
- Assignment: =, +=, -=, *=, /=
- Comparison: ==, ===, !=, !==, <, >, <=, >=
- Logical: &&, ||, !
        `,
        codeExample: {
          html: `<div id="demo">
    <h2>JavaScript Variables & Data Types</h2>
    <div id="output"></div>
    <button onclick="demonstrateVariables()">Show Variables</button>
    <button onclick="demonstrateOperators()">Show Operators</button>
</div>`,
          css: `#demo {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 2px solid #007bff;
    border-radius: 10px;
    font-family: Arial, sans-serif;
}

#output {
    background: #f8f9fa;
    padding: 15px;
    margin: 15px 0;
    border-radius: 5px;
    min-height: 100px;
    font-family: monospace;
    white-space: pre-line;
}

button {
    background: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background: #0056b3;
}`,
          javascript: `// Variable declarations
let message = "Hello, JavaScript!";
const pi = 3.14159;
var isActive = true;

// Different data types
let userName = "John Doe";           // String
let age = 25;                       // Number
let isStudent = false;              // Boolean
let hobbies = ["coding", "reading"]; // Array
let person = {                      // Object
    name: "Alice",
    age: 30,
    city: "New York"
};

function demonstrateVariables() {
    const output = document.getElementById("output");
    
    let result = "=== VARIABLES & DATA TYPES ===\\n\\n";
    
    // String examples
    result += "STRING EXAMPLES:\\n";
    result += \`Name: \${userName} (type: \${typeof userName})\\n\`;
    result += \`Message: \${message}\\n\\n\`;
    
    // Number examples
    result += "NUMBER EXAMPLES:\\n";
    result += \`Age: \${age} (type: \${typeof age})\\n\`;
    result += \`Pi: \${pi}\\n\\n\`;
    
    // Boolean examples
    result += "BOOLEAN EXAMPLES:\\n";
    result += \`Is Active: \${isActive} (type: \${typeof isActive})\\n\`;
    result += \`Is Student: \${isStudent}\\n\\n\`;
    
    // Array examples
    result += "ARRAY EXAMPLES:\\n";
    result += \`Hobbies: \${hobbies.join(", ")}\\n\`;
    result += \`First hobby: \${hobbies[0]}\\n\`;
    result += \`Array length: \${hobbies.length}\\n\\n\`;
    
    // Object examples
    result += "OBJECT EXAMPLES:\\n";
    result += \`Person name: \${person.name}\\n\`;
    result += \`Person age: \${person.age}\\n\`;
    result += \`Person city: \${person.city}\\n\`;
    
    output.textContent = result;
}

function demonstrateOperators() {
    const output = document.getElementById("output");
    
    let a = 10;
    let b = 3;
    let x = "Hello";
    let y = "World";
    
    let result = "=== OPERATORS ===\\n\\n";
    
    // Arithmetic operators
    result += "ARITHMETIC OPERATORS:\\n";
    result += \`\${a} + \${b} = \${a + b}\\n\`;
    result += \`\${a} - \${b} = \${a - b}\\n\`;
    result += \`\${a} * \${b} = \${a * b}\\n\`;
    result += \`\${a} / \${b} = \${a / b}\\n\`;
    result += \`\${a} % \${b} = \${a % b} (remainder)\\n\`;
    result += \`\${a} ** \${b} = \${a ** b} (exponentiation)\\n\\n\`;
    
    // String concatenation
    result += "STRING OPERATIONS:\\n";
    result += \`"\${x}" + " " + "\${y}" = "\${x + " " + y}"\\n\`;
    result += \`Template literal: \\\`\${x} \${y}\\\` = "\${x} \${y}"\\n\\n\`;
    
    // Comparison operators
    result += "COMPARISON OPERATORS:\\n";
    result += \`\${a} == \${b}: \${a == b}\\n\`;
    result += \`\${a} != \${b}: \${a != b}\\n\`;
    result += \`\${a} > \${b}: \${a > b}\\n\`;
    result += \`\${a} < \${b}: \${a < b}\\n\`;
    result += \`\${a} >= \${b}: \${a >= b}\\n\`;
    result += \`\${a} <= \${b}: \${a <= b}\\n\\n\`;
    
    // Logical operators
    result += "LOGICAL OPERATORS:\\n";
    result += \`true && false: \${true && false}\\n\`;
    result += \`true || false: \${true || false}\\n\`;
    result += \`!true: \${!true}\\n\`;
    
    output.textContent = result;
}

// Initialize with variables demo
demonstrateVariables();`
        },
        exercises: [
          {
            id: 'js-1-ex-1',
            title: 'Variable Practice',
            description: 'Create variables of different types and display their values.',
            startingCode: {
              html: `<div id="exercise">
    <h3>Variable Exercise</h3>
    <div id="result"></div>
    <button onclick="showMyVariables()">Show My Variables</button>
</div>`,
              css: `#exercise {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 20px;
}

#result {
    background: #f0f0f0;
    padding: 10px;
    margin: 10px 0;
    border-radius: 3px;
    font-family: monospace;
}`,
              javascript: `// TODO: Create the following variables:
// 1. A string variable called 'myName' with your name
// 2. A number variable called 'myAge' with your age
// 3. A boolean variable called 'isLearning' set to true
// 4. An array called 'mySkills' with at least 3 skills
// 5. An object called 'myInfo' with name, age, and city properties

function showMyVariables() {
    // TODO: Display all your variables in the result div
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Complete the exercise above!';
}`
            },
            solution: {
              html: `<div id="exercise">
    <h3>Variable Exercise</h3>
    <div id="result"></div>
    <button onclick="showMyVariables()">Show My Variables</button>
</div>`,
              css: `#exercise {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 20px;
}

#result {
    background: #f0f0f0;
    padding: 10px;
    margin: 10px 0;
    border-radius: 3px;
    font-family: monospace;
}`,
              javascript: `// Solution: Variables of different types
let myName = "Alex Johnson";
let myAge = 28;
let isLearning = true;
let mySkills = ["JavaScript", "HTML", "CSS", "React"];
let myInfo = {
    name: "Alex Johnson",
    age: 28,
    city: "San Francisco"
};

function showMyVariables() {
    const resultDiv = document.getElementById('result');
    
    let output = "My Variables:\\n\\n";
    output += \`Name: \${myName} (type: \${typeof myName})\\n\`;
    output += \`Age: \${myAge} (type: \${typeof myAge})\\n\`;
    output += \`Is Learning: \${isLearning} (type: \${typeof isLearning})\\n\`;
    output += \`Skills: \${mySkills.join(", ")}\\n\`;
    output += \`Info: Name=\${myInfo.name}, Age=\${myInfo.age}, City=\${myInfo.city}\`;
    
    resultDiv.textContent = output;
}`
            }
          }
        ]
      }
    ]
  },
  {
    id: 'react',
    title: 'React Development',
    description: 'Build powerful, scalable web applications with React, hooks, state management, and modern development practices.',
    duration: '15-20 hours',
    level: 'Intermediate to Advanced',
    topics: ['Components & JSX', 'Hooks & State', 'Context API', 'React Router'],
    color: 'from-purple-400 to-pink-500',
    bgGradient: 'from-purple-900/20 to-pink-900/10',
    borderColor: 'border-purple-500/20 hover:border-purple-400/40',
    icon: '⚛️',
    students: '18K+',
    rating: 4.9,
    lessons: [
      {
        id: 'react-1',
        title: 'Introduction to React',
        description: 'Learn React fundamentals, components, and JSX',
        content: `
# Introduction to React

React is a JavaScript library for building user interfaces, particularly web applications. It was created by Facebook and is now maintained by Meta and the open-source community.

## What is React?

React is a **declarative**, **component-based** JavaScript library that makes it easy to build interactive user interfaces.

### Key Concepts:
- **Declarative**: You describe what the UI should look like for any given state
- **Component-Based**: Build encapsulated components that manage their own state
- **Learn Once, Write Anywhere**: Use React for web, mobile (React Native), and even VR

## Why React?

### 1. **Virtual DOM**
React uses a virtual representation of the DOM in memory. When state changes, React:
1. Creates a new virtual DOM tree
2. Compares it with the previous tree (diffing)
3. Updates only the parts that changed (reconciliation)

This makes React applications fast and efficient.

### 2. **Component Reusability**
Components are like JavaScript functions that return JSX. They can be reused throughout your application.

### 3. **Unidirectional Data Flow**
Data flows down from parent to child components, making applications predictable and easier to debug.

### 4. **Rich Ecosystem**
Huge community, extensive libraries, and excellent tooling support.

## JSX (JavaScript XML)

JSX is a syntax extension for JavaScript that looks similar to HTML but is actually JavaScript.

### JSX Rules:
1. **Return a single parent element** (or use React.Fragment)
2. **Close all tags** (including self-closing tags like \`<img />\`)
3. **Use camelCase for attributes** (\`className\` instead of \`class\`)
4. **Use curly braces for JavaScript expressions**

### JSX vs HTML Differences:
- \`className\` instead of \`class\`
- \`htmlFor\` instead of \`for\`
- \`onClick\` instead of \`onclick\`
- Style objects instead of strings: \`style={{color: 'red'}}\`

## Components

Components are the building blocks of React applications. There are two types:

### 1. Function Components (Recommended)
\`\`\`jsx
function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
}

// Arrow function version
const Welcome = (props) => {
    return <h1>Hello, {props.name}!</h1>;
};
\`\`\`

### 2. Class Components (Legacy)
\`\`\`jsx
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}!</h1>;
    }
}
\`\`\`

## Props

Props (properties) are how you pass data from parent to child components.

### Characteristics:
- **Read-only**: Components should never modify their props
- **Can be any data type**: strings, numbers, objects, functions, etc.
- **Default values**: Can be set using defaultProps

### Example:
\`\`\`jsx
function UserCard({ name, age, email }) {
    return (
        <div className="user-card">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
        </div>
    );
}

// Usage
<UserCard name="Alice" age={30} email="alice@example.com" />
\`\`\`

## State

State is data that can change over time. In function components, we use the \`useState\` hook.

### useState Hook:
\`\`\`jsx
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}
\`\`\`

## Event Handling

React uses SyntheticEvents, which wrap native events to provide consistent behavior across browsers.

### Common Events:
- \`onClick\`: Mouse clicks
- \`onChange\`: Input changes
- \`onSubmit\`: Form submissions
- \`onMouseOver\`: Mouse hover

### Example:
\`\`\`jsx
function Button() {
    const handleClick = (event) => {
        event.preventDefault();
        console.log('Button clicked!');
    };
    
    return (
        <button onClick={handleClick}>
            Click me!
        </button>
    );
}
\`\`\`

## Conditional Rendering

Render different content based on conditions:

### Methods:
1. **If statements**
2. **Ternary operator**
3. **Logical AND (&&)**

\`\`\`jsx
function Greeting({ isLoggedIn, user }) {
    if (isLoggedIn) {
        return <h1>Welcome back, {user.name}!</h1>;
    }
    
    return (
        <div>
            <h1>Please sign in</h1>
            {/* Ternary operator */}
            {user ? <p>Hello, {user.name}</p> : <p>Hello, Guest</p>}
            
            {/* Logical AND */}
            {isLoggedIn && <button>Logout</button>}
        </div>
    );
}
\`\`\`

## Lists and Keys

Render arrays of data using the \`map\` function:

\`\`\`jsx
function TodoList({ todos }) {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.text}
                </li>
            ))}
        </ul>
    );
}
\`\`\`

### Keys:
- **Required** for list items
- **Should be unique** among siblings
- **Help React identify** which items have changed
- **Use stable IDs**, not array indices when possible
        `,
        codeExample: {
          html: `<div id="root"></div>`,
          css: `.app {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Segoe UI', system-ui, sans-serif;
}

.header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    margin-bottom: 30px;
    box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
}

.header h1 {
    margin: 0 0 10px 0;
    font-size: 2.5rem;
}

.header p {
    margin: 0;
    opacity: 0.9;
    font-size: 1.1rem;
}

.section {
    background: white;
    border-radius: 12px;
    padding: 25px;
    margin-bottom: 25px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid #e1e5e9;
}

.section h2 {
    color: #333;
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 1.5rem;
    border-bottom: 2px solid #667eea;
    padding-bottom: 10px;
}

.counter {
    text-align: center;
    padding: 20px;
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    border-radius: 10px;
    color: white;
    margin: 20px 0;
}

.counter h3 {
    margin-top: 0;
    font-size: 2rem;
}

.counter button {
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid white;
    color: white;
    padding: 12px 24px;
    margin: 0 10px;
    border-radius: 25px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
}

.counter button:hover {
    background: white;
    color: #4facfe;
    transform: translateY(-2px);
}

.user-card {
    background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
    color: white;
    padding: 20px;
    border-radius: 12px;
    margin: 15px 0;
    box-shadow: 0 4px 15px rgba(250, 112, 154, 0.3);
}

.user-card h3 {
    margin-top: 0;
    font-size: 1.3rem;
}

.user-card p {
    margin: 8px 0;
    opacity: 0.9;
}

.greeting {
    background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    margin: 20px 0;
    color: #333;
}

.greeting h2 {
    margin-top: 0;
    color: #2d3748;
    border: none;
    padding: 0;
}

.greeting button {
    background: #667eea;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    margin: 0 10px;
    transition: all 0.3s ease;
}

.greeting button:hover {
    background: #5a67d8;
    transform: translateY(-1px);
}

.todo-list {
    background: #f7fafc;
    border-radius: 10px;
    padding: 20px;
    margin: 20px 0;
}

.todo-list h3 {
    color: #2d3748;
    margin-top: 0;
}

.todo-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.todo-list li {
    background: white;
    padding: 12px 16px;
    margin: 8px 0;
    border-radius: 8px;
    border-left: 4px solid #667eea;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
}

.todo-list li:hover {
    transform: translateX(5px);
}

.jsx-demo {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
}

.jsx-demo h3 {
    margin-top: 0;
}

.jsx-demo .code-block {
    background: rgba(0, 0, 0, 0.2);
    padding: 15px;
    border-radius: 8px;
    font-family: 'Courier New', monospace;
    margin: 10px 0;
    overflow-x: auto;
}

.jsx-demo .result {
    background: rgba(255, 255, 255, 0.1);
    padding: 15px;
    border-radius: 8px;
    margin: 10px 0;
    border-left: 4px solid #ffd700;
}`,
          javascript: `// React Introduction Examples

// Welcome Component
function Welcome({ name, role }) {
    return (
        <div className="user-card">
            <h3>Welcome, {name}!</h3>
            <p>Role: {role}</p>
            <p>Thanks for joining our React tutorial!</p>
        </div>
    );
}

// Counter Component with useState
function Counter() {
    const [count, setCount] = React.useState(0);
    
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    
    return (
        <div className="counter">
            <h3>Count: {count}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>+</button>
        </div>
    );
}

// Greeting Component with Conditional Rendering
function Greeting() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [user, setUser] = React.useState({ name: 'Alice', email: 'alice@example.com' });
    
    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };
    
    return (
        <div className="greeting">
            {isLoggedIn ? (
                <div>
                    <h2>Welcome back, {user.name}!</h2>
                    <p>Email: {user.email}</p>
                    <button onClick={toggleLogin}>Logout</button>
                </div>
            ) : (
                <div>
                    <h2>Please sign in</h2>
                    <p>Join our amazing React community!</p>
                    <button onClick={toggleLogin}>Login</button>
                </div>
            )}
            
            {/* Conditional rendering with logical AND */}
            {isLoggedIn && (
                <p style={{ marginTop: '15px', fontStyle: 'italic' }}>
                    You have access to premium features!
                </p>
            )}
        </div>
    );
}

// TodoList Component demonstrating lists and keys
function TodoList() {
    const [todos, setTodos] = React.useState([
        { id: 1, text: 'Learn React basics', completed: false },
        { id: 2, text: 'Understand JSX', completed: true },
        { id: 3, text: 'Master components', completed: false },
        { id: 4, text: 'Practice with hooks', completed: false }
    ]);
    
    const [newTodo, setNewTodo] = React.useState('');
    
    const addTodo = () => {
        if (newTodo.trim()) {
            const todo = {
                id: Date.now(),
                text: newTodo,
                completed: false
            };
            setTodos([...todos, todo]);
            setNewTodo('');
        }
    };
    
    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };
    
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    
    return (
        <div className="todo-list">
            <h3>📝 Todo List ({todos.filter(t => !t.completed).length} remaining)</h3>
            
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                    placeholder="Add a new todo..."
                    style={{
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        marginRight: '10px',
                        width: '200px'
                    }}
                />
                <button
                    onClick={addTodo}
                    style={{
                        padding: '10px 15px',
                        backgroundColor: '#667eea',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Add Todo
                </button>
            </div>
            
            <ul>
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        style={{
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            opacity: todo.completed ? 0.6 : 1,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <span
                            onClick={() => toggleTodo(todo.id)}
                            style={{ cursor: 'pointer', flex: 1 }}
                        >
                            {todo.completed ? '✅' : '⭕'} {todo.text}
                        </span>
                        <button
                            onClick={() => deleteTodo(todo.id)}
                            style={{
                                background: '#ff6b6b',
                                color: 'white',
                                border: 'none',
                                padding: '5px 10px',
                                borderRadius: '3px',
                                cursor: 'pointer',
                                fontSize: '12px'
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            
            {todos.length === 0 && (
                <p style={{ textAlign: 'center', color: '#666', fontStyle: 'italic' }}>
                    No todos yet. Add one above!
                </p>
            )}
        </div>
    );
}

// JSX Demonstration Component
function JSXDemo() {
    const [name, setName] = React.useState('React Developer');
    const [showCode, setShowCode] = React.useState(false);
    
    // JavaScript expressions in JSX
    const currentTime = new Date().toLocaleTimeString();
    const isEvening = new Date().getHours() >= 18;
    const greeting = isEvening ? 'Good evening' : 'Good day';
    
    const styles = {
        container: {
            padding: '20px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            margin: '20px 0'
        },
        input: {
            padding: '8px 12px',
            borderRadius: '5px',
            border: 'none',
            marginRight: '10px',
            fontSize: '14px'
        },
        button: {
            padding: '8px 15px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            border: '2px solid white',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '14px'
        }
    };
    
    return (
        <div style={styles.container}>
            <h3>🚀 JSX in Action</h3>
            <p>{greeting}, {name}! Current time: {currentTime}</p>
            
            <div style={{ margin: '15px 0' }}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    style={styles.input}
                />
                <button
                    onClick={() => setShowCode(!showCode)}
                    style={styles.button}
                >
                    {showCode ? 'Hide' : 'Show'} JSX Code
                </button>
            </div>
            
            {showCode && (
                <div style={{
                    background: 'rgba(0, 0, 0, 0.2)',
                    padding: '15px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '13px',
                    marginTop: '15px'
                }}>
                    <div>// JSX expressions in curly braces:</div>
                    <div>const greeting = isEvening ? 'Good evening' : 'Good day';</div>
                    <div><p>{'{greeting}, {name}! Current time: {currentTime}'}</p></div>
                    <br />
                    <div>// Event handlers:</div>
                    <div><button onClick={'{() => setShowCode(!showCode)}'}></div>
                    <br />
                    <div>// Conditional rendering:</div>
                    <div>{'{showCode && <div>...</div>}'}</div>
                </div>
            )}
            
            <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '15px',
                borderRadius: '8px',
                marginTop: '15px'
            }}>
                <strong>JSX Features Demonstrated:</strong>
                <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
                    <li>JavaScript expressions in curly braces</li>
                    <li>Event handlers (onClick, onChange)</li>
                    <li>Conditional rendering with &&</li>
                    <li>Inline styles as objects</li>
                    <li>Component state with useState</li>
                </ul>
            </div>
        </div>
    );
}

// Main App Component
function App() {
    return (
        <div className="app">
            <header className="header">
                <h1>⚛️ React Fundamentals</h1>
                <p>Learn the building blocks of React development</p>
            </header>
            
            <div className="section">
                <h2>👋 Welcome Component</h2>
                <p>Components are reusable pieces of UI. Here's a simple welcome component:</p>
                <Welcome name="Alice" role="Frontend Developer" />
                <Welcome name="Bob" role="Full Stack Developer" />
            </div>
            
            <div className="section">
                <h2>🔢 State Management</h2>
                <p>State allows components to remember and update data. Try the counter below:</p>
                <Counter />
            </div>
            
            <div className="section">
                <h2>🔀 Conditional Rendering</h2>
                <p>Render different content based on conditions:</p>
                <Greeting />
            </div>
            
            <div className="section">
                <h2>📋 Lists and Keys</h2>
                <p>Render arrays of data with proper keys for React optimization:</p>
                <TodoList />
            </div>
            
            <div className="section">
                <h2>⚡ JSX Demonstration</h2>
                <p>JSX combines HTML-like syntax with JavaScript expressions:</p>
                <JSXDemo />
            </div>
        </div>
    );
}

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));`
        }
      }
    ]
  }
];