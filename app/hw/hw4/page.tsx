import SideNav from '@/components/Sidenav';
import { FaGithub, FaPlug, FaClipboardList } from "react-icons/fa";
import { MdGrade } from "react-icons/md";
import schedule from '@/data/schedule';

import Link from 'next/link';
import type { Metadata } from "next";
import XLink from '@/components/XLink';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { IoMdAlert } from 'react-icons/io';

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
  title: "HW4 | CIS 1962",
  description: "Homework 4 Page of CIS 1962 for Spring 2026 at the University of Pennsylvania",
};

export default function HW4() {
    return (
        <div className="scroll-mt-48 max-w-5xl mx-auto text-lg text-black dark:text-white">      
            {/* Side Nav */}
        <SideNav sections={SECTIONS}/>
      
        <div className="mx-auto text-lg">
            {/* Title */}
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Homework 4: ChatJS</h1>
            <h3 className='text-lg sm:text-xl md:text-2xl opacity-60 mb-4'>Due February 26th at 11:59 PM</h3>

            <div className='red-block font-mono'><span className='font-bold'>Topics:</span> HTTP Requests, API Calls, Asynchronous JavaScript, LLM Chatbots</div>

            {/* Intro Text */}
            <section className="space-y-8 mb-8">
                <p className="ml-4">
                   This homework will be a continuation of Homework 3. You will build out the simple chatbot you create in Homework 3 into a fully fledged chatbot that uses Gemini API to generate responses. You will also implement chat persistence using a provided storage API that saves your chat history to a database.
                </p>
                <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Assignment Goals</h3>
                <ul className="text-lg ml-6 list-disc">
                    <li>Build a fully-functional LLM chatbot that uses Google Gemini</li>
                    <li>Test your ability to work with asynchronous syntax in JavaScript</li>
                    <li>Gain experience with working with backend systems by sending data to a provided storage API to save chat history</li>
                </ul>
            </section>

            {/* Introduction */}
            <section id="introduction" className="scroll-mt-48 space-y-8 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2"> <FaPlug /> Introduction &amp; Installation</h2>

                {/* Github Classroom */}
                <a
                    href={schedule[4].homework?.starter}
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
                        <li><span className='inline-code'>script.ts</span></li>
                        <li><span className='inline-code'>chat.ts</span></li>
                        <li><span className='inline-code'>chat-api.ts</span></li>
                        <li><span className='inline-code'>index.html</span></li>
                        <li><span className='inline-code'>style.css</span></li>
                        <li> <span className='inline-code'>package.json</span>, the prettier/eslint configs, RUBRIC.md, and an README.md file</li>
                    </ul>  
                </section>

                {/* Installation */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Installation & Importing HW3</h3>
                    <p className="ml-4">
                        You will import over the HTML and CSS files from HW3. You will need to copy over the contents of your <span className='inline-code'>index.html</span> and <span className='inline-code'>style.css</span> files from HW3 into the corresponding files in the HW4 starter code. You will then build on top of that existing structure and styling to implement the new features for HW4, so make sure to keep all of your previous code and not delete anything important!
                    </p>
                    <p className="ml-4">
                        You can use either the Live Server extension or the serve package to run your project locally for development. Refer to the previous homework's instructions if you need a refresher on how to use either of these tools. If you choose to use the serve package, make sure to run the following command in your terminal from the root directory of your project to start the server:
                    </p>
                    <pre className='blue-block font-mono'>
                        <code>
                            npx serve ./dist -p 3000
                        </code>
                    </pre>
                </section>

                {/* Gemini */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Google Gemini</h3>
                    <p className="ml-4">
                        In this homework, you will use the Gemini API to generate responses.
                    </p>
                    <p className='green-block'>
                        🤑 Gemini offers a free API, no credit card required!
                    </p>
                    <p className='ml-4'>First, you will need to create a new project in the <XLink link='https://console.cloud.google.com/' text='Google Cloud Console'/>.</p>
                    <p className='ml-4'>Once you've created a project, head over to <XLink link='https://aistudio.google.com/u/0/apikey' text='Google AI Studio'/> and create a new API key.</p>
                    <p className='ml-4'>
                        It should ask for your project name, and then you can create a new API key. Select the project you created in the previous step.
                    </p>
                    <p className='ml-4'>
                        Once you have created the API key, you can copy it and paste it into the <span className='inline-code'>chat.ts</span> file in the first lines of the script:
                    </p>
                    <div className='blue-block font-mono my-4 text-sm sm:text-xl ml-8'>
                    <SyntaxHighlighter
                        language="javascript"
                        style={vs}
                        customStyle={{
                            background: 'none',
                            border: 'none',
                            margin: 0,
                            padding: 0,
                        }}
                    >{`// Insert your Gemini API key here
const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY";
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/...";`}</SyntaxHighlighter>
                    </div>
                    <p className='ml-4'>
                        Make sure to replace the placeholder string with your actual Gemini API key. Keep in mind that you should never share your API key publicly or commit it to a public repository (we've made your respositories private for this assignment), as it can be used by others to access your quota and potentially incur costs.
                    </p>
                    <p className='ml-4'>
                        The starter code has provided a template Gemini API URL that calls the Gemini 2.5 Flash model. There are many applicable models that you could use for this assignment, so feel free to search them up and experiment with different ones if you are interested! You can find the documentation for the Gemini API <XLink link='https://ai.google.dev/gemini-api/docs' text='here'/>. Note that are using fetch API to call the Gemini API instead of the official client library in the docs since we are working in a primarily frontend environment only.
                    </p>
                </section>

                {/* Installation */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Chat API</h3>
                    <p className='ml-8'>
                        In order to use the Chat API for chat persistence, you will need another API key that we will provide for you. You should receive an email from the instructors soon after the homework is released with your API key. Make sure to <b>never</b> share this API key, just as you wouldn't share your Gemini API key! Once you have the API key, paste it into the <span className='inline-code'>chat-api.ts</span> file towards the top where the placeholder string is. This API key is specific to the Chat API and is different from your Gemini API key, so make sure not to mix them up!:
                    </p>
                    <div className='blue-block font-mono my-4 text-sm sm:text-xl ml-8'>
                    <SyntaxHighlighter
                        language="javascript"
                        style={vs}
                        customStyle={{
                            background: 'none',
                            border: 'none',
                            margin: 0,
                            padding: 0,
                        }}
                    >{`// Insert your Chat API key here
const BASE_URL = "https://cis-1962-201-sp26-hw4.onrender.com/api";
const API_KEY = "YOUR_API_KEY";`}</SyntaxHighlighter>
                    </div>
                    <div className='red-block mb-8'>
                        <h4 className='flex-center gap-2 text-2xl'> <IoMdAlert className='text-red-700'/> IMPORTANT <IoMdAlert className='text-red-700'/></h4>
                        <p>
                            For the simplicity of this homework, we hard-coded the Gemini API and Chat API keys. In a real-world application, you should never do this. Web applications are publicly accessible, so is your API key in your code. You should store your API key in a secure way, such as in an environment variable behind a backend server.
                        </p>
                    </div>
                    
                </section>
            </section>

            {/* Instructions */}
            <section id="instructions" className="scroll-mt-48 space-y-8 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2"><FaClipboardList />Instructions</h2>

                {/* Part 1 */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Part 1: Modularize and Reformat</h3>
                    <pre className='red-block ml-4 w-1/2'>
                        <b>Files</b>: <span className='inline-code'>chat.ts</span>
                    </pre>
                    <p className="ml-4">
                        You may notice that we didn't tell you to import the contents of your <span className='inline-code'>script.ts</span> file from HW3 into the new <span className='inline-code'>script.ts</span> file in the starter code. This is because you will need to restructure much of the code you wrote in HW3 to better fit the new modularized structure of the starter code. We'll begin with the format of messages themselves. 
                    </p>
                    <p className="ml-4">
                        Begin by opening the <span className='inline-code'>chat.ts</span> file and implement the following methods within the Chat class:
                    </p> 
                    <ul className="text-lg ml-12 list-disc ">
                        <li><span className='inline-code'>{`constructor({ id, messages })`}</span></li>
                        <li><span className='inline-code'>{`getMessages()`}</span></li>
                        <li><span className='inline-code'>{`sendMessage(message)`}</span></li>
                    </ul>
                    <p className="ml-4">
                        For this assignment we've provided a <span className='inline-code'>types.ts</span> file that contains useful TypeScript type definitions. Make sure to use these types where applicable in your code.
                    </p>
                    <p className='ml-4'>
                        Additionally, pay attention to the format of messages, specifically the <span className='inline-code'>role</span> fields of the message object. To properly pass chat history into Gemini API, you need to use "user" and "model" as the values for the <span className='inline-code'>role</span> field for user messages and AI messages, respectively.
                    </p>
                    <p className='ml-4'>
                        We've provided you the implementation of <span className='inline-code'>generateGeminiResponse()</span> method, which sends a request to the Gemini API and retrieves a response. You can use this method to test if your Gemini API key is working and if you are sending requests in the correct format. You can call this method in the browser console after initializing the app to see if you get a response back from the Gemini API.
                    </p>
                </section>

                <hr></hr>

                {/* Part 2 */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Part 2: Chat Persistence</h3>
                    <pre className='red-block ml-4 w-1/2'>
                        <b>Files</b>: <span className='inline-code'>chat-api.ts</span>
                    </pre>
                    <p className="ml-4">
                        Now, we will implement the chat API to save the chat history. Implement the following methods in the <span className='inline-code'>chat-api.ts</span> file, associated with the provided endpoints in the API documentation:
                    </p>
                    <ul className="text-lg ml-12 list-disc ">
                       <li><span className='inline-code'>GET /chat</span> - <span className='inline-code font-bold'>fetchChats()</span></li>
                        <ul className='list-disc ml-8'>
                            <li>Response: <span className='inline-code'>{`id: "default", messages: { role: string, content: string }[] `}</span></li>
                        </ul>
                        <li><span className='inline-code'>GET /chat/:id</span> - <span className='inline-code font-bold'>getChat(id: string)</span></li>
                        <ul className='list-disc ml-8'>
                            <li>Response: <span className='inline-code'>{`id: "default", messages: { role: string, content: string }[] `}</span></li>
                        </ul>
                        <li><span className='inline-code'>PUT /chat/:id</span> - <span className='inline-code font-bold'>updateChat(chat: Chat)</span></li>
                        <ul className='list-disc ml-8'>
                            <li>Request: <span className='inline-code'> {`id: "default", messages: { role: string, content: string }[] `}</span></li>
                            <li>Response: <span className='inline-code'>{` id: "default", messages: { role: string, content: string }[] `}</span></li>
                        </ul>
                    </ul>
                    <p className="ml-4">
                        For these methods, you will need to use the fetch API to make HTTP requests to the provided endpoints. For instance, both of these use the /chat endpoint, so they would each have the URL of <span className='inline-code'>https://cis-1962-201-sp26-hw4.onrender.com/api/chat</span>, but the PUT request would also include the chat ID as a parameter in the URL. 
                    </p>
                    <p className="ml-4">
                        Additionally, when sending requests to the API, you may need to specify the method, body, and headers of the HTTP request. Any HTTP method (GET, POST, PUT, DELETE) that is NOT GET should have the requisite method specified. Any requests that have a specified "request" body in the API documentation will require you to include that JSON body in the request, and ALL requests will require you to include your API key in the headers (for authentication purposes). Use the following format for a the header within your fetch requests:
                    </p>
                    <div className='blue-block font-mono my-4 text-sm sm:text-xl ml-8'>
                        <SyntaxHighlighter
                            language="javascript"
                            style={vs}
                            customStyle={{
                                background: 'none',
                                border: 'none',
                                margin: 0,
                                padding: 0,
                            }}
                        >{`headers: {
    "Authorization": \`Bearer \${this.apiKey}\`,
    "Content-Type": "application/json"
}`}</SyntaxHighlighter>
                    </div>
                    <div className='red-block'>
                        <h4 className='font-bold'> Important: Cold-Starting the API</h4>
                        <p>
                            When you make the first request to the API after it has been idle for a while, it may take a long time to respond (up to a minute) since the server needs to "wake up" from idleness. This is called cold-starting. To avoid this, you can make a simple GET request to the /chat endpoint right after you initialize the app to wake up the server. You can type the following command into the terminal to make a simple API request to wake up the server:
                        </p>
                        <pre className='blue-block font-mono mt-4'>
                            <code>
                                curl "https://cis-1962-201-sp26-hw4.onrender.com/api/chat/version"
                            </code>
                        </pre>
                    </div>
                </section>

                <hr></hr>

                {/* Part 3 */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Part 3: Functional Chat</h3>
                    <pre className='red-block ml-4 w-1/2'>
                        <b>Files</b>: <span className='inline-code'>script.ts</span>, <span className='inline-code'>chat.ts</span>
                    </pre>
                    <p className="ml-4">
                        Now we will use the chat API to make the chat functional. You will need to make changes to the <span className='inline-code'>script.ts</span> file, which initializes and manages various parts about the chatbot. We've provided important method headers that you will need to implement, some of which are different from HW3 slightly. You will need to:
                    </p>
                    <ul className="text-lg ml-12 list-disc ">
                        <li>Implement the <span className='inline-code'>save()</span> method in the <span className='inline-code'>Chat</span> class using the chat API. Your implementation should just call <span className='inline-code'>updateChat()</span> with the current chat object passed into the argument to that method.</li>
                        <li>
                            Import the Chat class from the <span className='inline-code'>chat.ts</span> file. Then, create a new Chat object stored to a variable called <span className='inline-code'>currentChat</span> with an <span className='inline-code'>id</span> of "default" and an initially empty message array. Pay attention to the parameters of the Chat class when constructing it.
                        </li>
                        <li>Implement <span className='inline-code'>renderMessages()</span>, which should be similar from the same method in HW3.</li>
                        <li>Implement <span className='inline-code'>switchToChat(chatId: string)</span>. This gets the chat with the given ID in the API and switches to it, updating the <span className='inline-code'>currentChat</span> variable. This could call the renderMessages() method here to update the UI. You will also call the renderChatList() method here too, but that will be implemented later.</li>
                        <li>Implement <span className='inline-code'>initializeApp()</span>, a method that is run at the start of the app to fetch a chat. This should call the respective API endpoint to retrieve the chat data, then switch to the first chat in the list. If none exist yet, load the "default" chat.</li>
                        <li>Implement <span className='inline-code'>showTypingIndicator()</span> and <span className='inline-code'>hideTypingIndicator()</span>, which shows or hides the typing indicator in the UI respectively when the AI is typing.</li>
                        <li>Add an event listener for submitting a new message to the chatbot. Your implementation here will incorporate sending a message to the Gemini, awaiting a response, and all the while rending the typing indicators. Follow the jsdoc comments for details.</li>
                    </ul>
                    <p className="ml-4">
                        At the end of this section, you should have a functional chatbot that has a single working chatroom. You should be able to send messages and receive responses from Gemini, and the chat history should be saved to the database through the chat API.
                    </p>
                </section>

                <hr></hr>

                {/* Part 4 */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Part 4: Multiple Chats</h3>
                    <p className="ml-4">
                        Now, we will implement multiple chats in the chat API. This will involve implementing a new endpoint in the ChatAPI to create and delete chats, while adding new UI elements to the frontend to display the list of chats and allow the user to switch between them, create new ones, and delete all chats.
                    </p>

                    {/* Chat API */}
                    <section className='space-y-4 my-8'>
                        <pre className='red-block ml-4 w-1/2'>
                            <b>Files</b>: <span className='inline-code'>chat-api.ts</span>
                        </pre>
                        <p className='ml-4'>
                            First, within <span className='inline-code'>chat-api.ts</span>, implement the following endpoints:
                        </p>
                        <ul className="text-lg ml-12 list-disc ">
                            <li><span className='inline-code'>POST /chat</span> - <span className='inline-code font-bold'>createChat()</span></li>
                            <ul className='list-disc ml-8'>
                                <li>Response: <span className='inline-code'>{` id: string, messages: { role: string, content: string }[]  `}</span></li>
                            </ul>
                            <li><span className='inline-code'>DELETE /chat</span> - <span className='inline-code font-bold'>clearChats()</span></li>
                            <li className='list-disc ml-8'>(no request or response)</li>
                        </ul>
                    </section>
                    
                    <hr className='w-3/4 mx-auto'></hr>
                    
                    {/* Chat */}
                    <section className='space-y-4 my-8'>
                        <pre className='red-block ml-4 w-1/2'>
                            <b>Files</b>: <span className='inline-code'>index.html</span> and <span className='inline-code'>style.css</span>
                        </pre>
                        <p className='ml-4'>
                            Next, implement some new UI elements for your new features. Implement the following in <span className='inline-code'>index.html</span> and style them in <span className='inline-code'>style.css</span>:
                        </p>
                        <ul className="text-lg ml-12 list-disc ">
                            <li>A "container" for the chat list (i.e. a sidebar on the left)</li>
                            <li>The styles for the chat items to be housed in the above container</li>
                            <li>A "Create New Chat" button</li>
                            <li>A "Delete All Chats" button</li>
                        </ul>   
                    </section>
                    
                    <hr className='w-3/4 mx-auto'></hr>

                    {/* Script */}
                    <section className='space-y-4 my-8'>
                        <pre className='red-block ml-4 w-1/2'>
                            <b>Files</b>: <span className='inline-code'>script.ts</span>
                        </pre>
                        <p className='ml-4'>
                            Finally, we'll implement the functionality for switching between multiple chats. Implement the following in <span className='inline-code'>script.ts</span>:
                        </p>
                        <ul className="text-lg ml-12 list-disc ">
                            <li><span className='inline-code'>renderChatList()</span></li>
                            <li>Add <span className='inline-code'>renderChatList()</span> to <span className='inline-code'>switchToChat()</span>, so that the chat list is updated when switching chats.</li>
                            <li>An event listener for the "Create New Chat" button</li>
                            <li>An event listener for the "Delete All Chats" button</li>
                        </ul>
                    </section>

                    <hr className='w-1/2 mx-auto'></hr>

                    <p className='ml-4'>
                        At the end of this section, you should have a fully functional chatbot that can handle multiple chats. You should be able to create new chats, switch between them, and delete all chats. Each chat should have its own separate chat history that is saved to the database through the chat API.
                    </p>
                    
                </section>
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
                        Submit your code through Gradescope as a <span className='inline-code'>.zip</span> file that contains your project. Make sure your project includes all files you worked on during this homework and your <span className='inline-code'>README.md</span> file. Make sure to include everything, including the contents of both <span className='inline-code'>src</span> and <span className='inline-code'>dist</span> directories, and all ts and compiled js files. Make sure the submitted file structure within your GitHub repository is <span className='red-bold'>exactly or similar</span> to the file structure you used to run and develop the project. Points will be taken off for malformed project structures in the final submission!
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