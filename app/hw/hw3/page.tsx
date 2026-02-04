import SideNav from '@/components/Sidenav';
import { FaGithub, FaPlug, FaClipboardList } from "react-icons/fa";
import { MdGrade } from "react-icons/md";
import schedule from '@/data/schedule';

import Link from 'next/link';
import type { Metadata } from "next";
import XLink from '@/components/XLink';

const SECTIONS = [
  {
    id: "introduction",
    icon: <FaPlug className="inline-block text-3xl" />
  },
  {
    id: "instructions",
    icon: <FaClipboardList className="inline-block text-3xl" />
  },
  {
    id: "submission",
    icon: <MdGrade className="inline-block text-3xl" />
  }
];

export const metadata: Metadata = {
  title: "HW3 | CIS 1962",
  description: "Homework 3 Page of CIS 1962 for Spring 2026 at the University of Pennsylvania",
};

export default function HW3() {
    return (
        <div className="scroll-mt-48 max-w-5xl mx-auto text-lg text-black dark:text-white">      
            {/* Side Nav */}
        <SideNav sections={SECTIONS}/>
      
        <div className="mx-auto text-lg">
            {/* Title */}
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Homework 3: Echo ChatBot</h1>
            <h3 className='text-lg sm:text-xl md:text-2xl opacity-60 mb-4'>Due February 12th at 11:59 PM</h3>

            <div className='red-block font-mono'><span className='font-bold'>Topics:</span> HTML/CSS, DOM Manipulation</div>

            {/* Intro Text */}
            <section className="space-y-8 mb-8">
                <p className="ml-4">
                    In this homework, we will use HTML, CSS, and JavaScript to build a very basic chatbot that repeats what you say! This is a prequel to next week's homework, where you will build a more advanced chatbot using AI. This homework is designed to get you familiar with building web applications using the DOM and event listeners, as well as getting you comfortable with HTML and CSS for structuring and styling web pages.
                </p>
                <p className="ml-4">
                    This is an <b>semi-open ended</b> homework. You are recommended to follow the instructions, but you are free to implement the chatbot in a different way. Make sure that you read the rubric items provided in the starter code to make sure you don't miss any of them.
                </p>
                <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Assignment Goals</h3>
                <ul className="text-lg ml-6 list-disc">
                    <li>Learn to build websites from scratch using knowledge of HTML and CSS</li>
                    <li>Understand how to manipulate the DOM using JavaScript</li>
                    <li>Get familiar with event listeners and handling user input in web applications</li>
                </ul>
            </section>

            {/* Introduction */}
            <section id="introduction" className="scroll-mt-48 space-y-8 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2"> <FaPlug /> Introduction &amp; Installation</h2>

                {/* Github Classroom */}
                <a
                    href={schedule[3].homework?.starter}
                    className="flex justify-center items-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-lg font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-red-300 w-1/2 my-4 cursor-pointer"
                >
                    <FaGithub className="text-3xl"/> Accept assignment on Github Classroom
                </a>

                {/* Files */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Files</h3>
                    <p className="ml-4">
                        Upon accepting the assignment on GitHub Classroom and retrieving the starter files, make sure you have the following files:
                    </p>
                    <ul className="text-lg ml-12 list-disc">
                        <li><span className='inline-code'>script.js</span></li>
                        <li><span className='inline-code'>index.html</span></li>
                        <li><span className='inline-code'>style.css</span></li>
                        <li> <span className='inline-code'>package.json</span>, the prettier/eslint configs, RUBRIC.md, and an README.md file</li>
                    </ul>  
                </section>

                {/* Installation */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Installation</h3>
                    <p className="ml-4">
                        You can use either the Live Server extension in VS Code or a package called <a href='https://www.npmjs.com/package/serve' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline"> serve</a> to serve up your website.
                    </p>
                    <p className="ml-4">
                        The serve package has been provided within the <span className='inline-code'>devDependencies</span> of the provided <span className='inline-code'>package.json</span>. You can install it by running:
                    </p>
                    <div className='red-block font-mono'>npm install</div>
                    <p className="ml-4">
                        Then, you can run the command below to serve up your website at <span className='inline-code'>http://localhost:3000</span> (provided you already compiled your script to js in to dist):
                    </p>
                    <pre className='blue-block font-mono'>
                        <code>
                            npx serve ./dist -p 3000
                        </code>
                    </pre>
                </section>
            </section>

            {/* Instructions */}
            <section id="instructions" className="scroll-mt-48 space-y-8 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2"><FaClipboardList />Instructions</h2>

                {/* HTML */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>HTML</h3>
                    <p className="ml-4">
                        You should begin by implementing the HTML structure of the chatbot. This includes the following items:
                    </p>
                    <ul className="text-lg ml-12 list-disc ">
                        <li>A header section with the title of the chatbot</li>
                        <li>A main chat area where messages will be displayed</li>
                        <li>An input field for the user to type their messages</li>
                        <li>A send button to submit the user's message</li>
                        <li>A new chat button to reset the chat history and start a new conversation</li>
                    </ul>  
                    <p className="ml-4">
                        Make sure to use semantic HTML elements where appropriate, and give your elements meaningful IDs or classes for styling and JavaScript manipulation.
                    </p>
                </section>

                {/* CSS */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>CSS</h3>
                    <p className="ml-4">
                        Next, style your chatbot using CSS. You should aim to create a visually appealing and user-friendly interface. We will not be grading or looking for "pretty" designs, but designs that are clear and easy to use. Take inspiration from existing chat applications or websites you may have used, like ChatGPT or social media chats. Your CSS should cover the following aspects:
                    </p>
                    <ul className="text-lg ml-12 list-disc ">
                        <li>Makes use of at least one flexbox, if not more to properly layout elementse</li>
                        <li>Considering using a proper color scheme for your app, using built-in colors or hex/RGB codes</li>
                        <li>Make use of the box model with proper margins, padding, and borders where applicable</li>
                        <li>Make sure all interactable items, like buttons and inputs fields are visible and clickable. When the input field is empty, the send button should be disabled or visually indicated as such.</li>
                        <li>Consider basic UI/UX considerations, like responsive design. Make sure you app works on both large and small screens (test using Dev Tools).</li>
                    </ul> 
                </section>

                {/* DOM */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Functionality</h3>
                    <p className="ml-4">
                        Finally, implement the JavaScript functionality of the chatbot. This includes the following features:
                    </p>
                    <ul className="text-lg ml-12 list-disc ">
                        <li>When the user types a message and clicks the send button (or presses Enter), the message should be added to the chat area as a user message.</li>
                        <li>The chatbot should then respond by echoing back the user's message, prefixed with "Echo:", and this response should also be added to the chat area. (This function has been provided in the starter code with a 500ms delay)</li>
                        <li>When the new chat button is clicked, the chat area should be cleared of all messages, allowing the user to start a new conversation.</li>
                        <li>Chats should be persisted in local storage so that they are not lost when the page is refreshed.</li>
                        <li>Your script will be in TypeScript, and will be compiled to JavaScript within the <span className="inline-code">dist</span> directory. There are some specific DOM types for TS that you may need to use, which you can review <XLink link="https://www.typescriptlang.org/docs/handbook/dom-manipulation.html" text='here'/>.</li> Note: You will need to use type assertions (e.g., <span className='inline-code'>(document.getElementById("myInput") as HTMLInputElement)</span>) to let TypeScript know the specific types of certain DOM elements.
                        <li>Make sure to handle edge cases, such as empty input fields or excessively long messages.</li>
                    </ul>
                </section>

                <div className='blue-block space-y-2'>
                    <h4 className='font-bold'>What is Local Storage?</h4>
                    <p className='mb-2'>In lieu of using a proper storage solution for this assignment, we will instead be using your browser's local storage. This allows you to persist data in the browser even after the page is refreshed or closed.</p>
                    <p className='mb-2'>Local storage is a simple key-value store that is available in all modern browsers. It is persistent across browser sessions and can be accessed via JavaScript. This store only persists on the same domain and protocol (e.g., http vs https).</p>
                    <p className='mb-2'>You can read from and write to local storage using the <span className='inline-code'>localStorage</span> object in JavaScript. Here are some basic operations:</p>
                    <ul className='list-disc ml-6'>
                        <li><span className='inline-code'>localStorage.setItem(key, value)</span>: Stores a value under the specified key.</li>
                        <li><span className='inline-code'>localStorage.getItem(key)</span>: Retrieves the value associated with the specified key.</li>
                        <li><span className='inline-code'>localStorage.removeItem(key)</span>: Removes the key-value pair associated with the specified key.</li>
                        <li><span className='inline-code'>localStorage.clear()</span>: Clears all key-value pairs in local storage.</li>
                    </ul>
                    <p className='mb-2'>Note that local storage can only store strings, so you may need to use <span className='inline-code'>JSON.stringify()</span> and <span className='inline-code'>JSON.parse()</span> to store and retrieve more complex data structures like arrays or objects.</p>
                </div>
            </section>

            {/* Submission */}
            <section id="submission" className="scroll-mt-48 space-y-8 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2"> <MdGrade />Submission</h2>
                
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>README</h3>
                    <p className="ml-4">
                        Answer the provided reflection questions within the starter code README file. In this reflection, you will also indicite whether or not you used AI, and also document your usage of AI as well. Please don't forget this step, as it is important feedback for the homework and the content of the course!
                    </p> 
                </section>
                 
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Submission</h3>
                    <p className='ml-4'>
                        To submit, simply push your commits to the repository generated from GitHub classroom. Make sure your latest commit before the deadline includes all files you worked on during this homework and your <span className='inline-code'>README.md</span> file. Make sure to include everything, including the contents of both <span className='inline-code'>src</span> and <span className='inline-code'>dist</span> directories. Make sure the submitted file structure within your GitHub repository is <span className='red-bold'>exactly or similar</span> to the file structure you used to run and develop the project. Points will be taken off for malformed project structures in the final submission!
                    </p>
                    <p className='ml-4'>
                        Before you submit, make sure you lint your code for style errors using the command <span className='inline-code'>npm run lint</span>. More details on style can be found in the <Link className='link' href={"/styleguide"}>style guide</Link>. We will take -1 points for every style error remaining in the submission for the submitted files. Since this project requires you to make your own ESLint, we will use your linting rules instead of the standard rules we would apply, so make sure you pass your own set of style rules!
                    </p>
                    <p className='ml-4'>
                        For this homework, we've provided a rubric file named <span className='inline-code'>RUBRIC.md</span> in the starter code. Make sure to read through it carefully and ensure that your submission meets all the requirements outlined in the rubric. This will help you maximize your score and ensure that you've covered all necessary aspects of the assignment.
                    </p>
                </section>
            </section>
        </div>
    </div>
  )
}