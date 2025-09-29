import { useEffect } from 'react';
import Navbar from '../../Components/Navbar'
import SideNav from '../../Components/SideNav';
import { FaGithub, FaPlug, FaRobot } from "react-icons/fa";
import { MdGrade } from "react-icons/md";
import { IoMdAlert } from "react-icons/io";
import { TbHexagonNumber1Filled, TbHexagonNumber2Filled, TbHexagonNumber3Filled } from "react-icons/tb";
import assignments from '../../data/assignments';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

const SECTIONS = [
  {
    id: "introduction",
    icon: <FaPlug className="inline-block text-3xl" />
  },
  {
    id: "p1",
    icon: <TbHexagonNumber1Filled className="inline-block text-3xl" />
  },
  {
    id: "p2",
    icon: <TbHexagonNumber2Filled className="inline-block text-3xl" />
  },
  {
    id: "p3",
    icon: <TbHexagonNumber3Filled className="inline-block text-3xl" />
  },
  {
    id: "ai-synthesis",
    icon: <FaRobot className="inline-block text-3xl" />
  },
  {
    id: "submission",
    icon: <MdGrade className="inline-block text-3xl" />
  }
];

function ChatJS() {
  useEffect(() => {
        document.title = 'HW2 | CIS 1962';
    }, []);
  return (
    <div className="main-bg-light min-h-screen pt-16 pb-24 flex flex-col items-center gap-16 ah-font">
      <Navbar/>
      
      {/* Side Nav */}
      <SideNav sections={SECTIONS}/>
      
      <div className="max-w-4xl mx-auto px-4 py-10 pt-10 sm:pt-14 md:pt-16 text-lg">
        {/* Title */}
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Homework 2: ChatJS</h1>
        <h3 className='text-lg sm:text-xl md:text-2xl opacity-60 mb-4'>Due October 20th at 11:59 PM</h3>

        <p className='red-block font-mono'><span className='font-bold'>Topics:</span> HTTP Requests, API Calls, Asynchronous JavaScript, HTML/CSS, DOM Manipulation, LLM Chatbots</p>

        {/* Intro Text */}
        <section className="mb-8 text-gray-800">
          <p className="mb-4">
            In this homework, we will use HTML, CSS, and JavaScript to build a chatbot using the Gemini API!
          </p>
          <p className="mb-4">
            This is an <b>semi-open ended</b> homework. You are recommended to follow the instructions, but you are free to implement the chatbot in a different way. Make sure that you read the rubric items provided in the starter code to make sure you don't miss any of them.
          </p>
          <p className="mb-4">
            This homework is assigned over 3 weeks, and as such is longer and more complex to compensate. This will likely be your first moderately large project in JavaScript that involves a proper webpage and some backend programming for data storage. Please pace yourself- there are 3 parts to this homework that you can use as checkpoints to gauge how much you should be done after each week it is assigned.
          </p>
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Assignment Goals</h3>
          <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
            <li>Build a fully-functional LLM chatbot that uses Google Gemini</li>
            <li>Test your ability to work with asynchronous syntax in JavaScript</li>
            <li>Gain experience with working with backend systems by sending data to a provided storage API to save chat history</li>
            <li>Learn to build websites from scratch using knowledge of HTML and CSS</li>
          </ul>
        </section>

        {/* Introduction */}
        <section id="introduction" className="mb-16 scroll-mt-28 text-gray-800">
          {/* GitHub Classroom */}
          <section className='mb-8'>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"> <FaPlug /> Introduction &amp; Installation</h2>
            <a
              href={assignments[1].starter}
              download
              aria-label="Download starter files as zip"
              className="flex-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-lg font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-red-300 w-1/2 my-4"
            >
              <FaGithub className="text-3xl"/> Accept assignment on GitHub Classroom
            </a>  
          </section>

          {/* Files */}
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Files</h3>
          <section className='mb-12 pl-3'>
            <p className="mb-4">
              Upon accepting the assignment on GitHub Classroom and retrieving the starter files, make sure you have the following files:
            </p>
            <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
              <li><span className='inline-code'>script.js</span></li>
              <li><span className='inline-code'>chat.js</span></li>
              <li><span className='inline-code'>chat-api.js</span></li>
              <li><span className='inline-code'>index.html</span></li>
              <li><span className='inline-code'>style.css</span></li>
              <li> <span className='inline-code'>package.json</span>, the prettier/eslint configs, RUBRIC.md, and an AIAssignment.md file</li>
            </ul>  
          </section>

          {/* Installation */}
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Installation</h3>
          <section className='mb-12 pl-3'>
            
            <p className="mb-4">
              We will use a package called <a href='https://www.npmjs.com/package/serve' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline"> serve</a> to serve up your website.
            </p>
            <p className="mb-8">
              Begin by running the installation command from your starter code directory:
            </p>
            <p className='blue-block font-mono'>
              npm install
            </p>
            <p className="mb-4">
              This will install <span className='inline-code'>serve</span> and any other dependencies for this project, like <span className='inline-code'>eslint</span> and <span className='inline-code'>prettier</span>. 
            </p>
            <p className="mb-8">
              In order to serve the website for this homework, run the following command from the starter code directory:
            </p>
            <pre className='blue-block font-mono'>
              <code>
                npx serve ./src -p 3000
              </code>
            </pre>
            <p className='mb-8'> Or you can run: </p>
            <pre className='blue-block font-mono'>
              <code>
                npm run dev
              </code>
            </pre>
            <p className='mb-8'>
              This will serve your website on a localhost at port 3000. You should see the following output:
            </p>
            <pre className='blue-block font-mono flex flex-col'>
              <code>
                Serving! Access URLs:
              </code>
              <code>
                - Local: http://localhost:3000
              </code>
              <code>
                - Network: http://(Your IP Address):3000
              </code>
            </pre>
            <p className='mb-4'>
              Once you see this output, you can open your browser and navigate to <span className='inline-code'>http://localhost:3000</span> and you should see the contents of the <span className='inline-code'>index.html</span> file.
            </p>
          </section>

          {/* Gemini */}
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Google Gemini</h3> 
          <section className='mb-12 pl-3'>
            <p className='mb-8'>In this homework, you will use the Gemini API to generate responses.</p>
            <p className='green-block'>
              🤑 Gemini offers a free API, no credit card required!
            </p>
            <p className='mb-4'>First, you will need to create a new project in the <a href='https://console.cloud.google.com/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline"> Google Cloud Console</a>.</p>
            <p className='mb-4'>Once you've created a project, head over to the <a href='https://aistudio.google.com/u/0/apikey' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Google AI Studio</a> and create a new API key.</p>
            <p className='mb-4'>
              It should ask for your project name, and then you can create a new API key. Select the project you created in the previous step.
            </p>
            <p className='mb-4'>
              Once you have created the API key, you can copy it and paste it into the `chat.js` file in the first lines of the script:
            </p>
            <p className='blue-block font-mono my-4 text-sm sm:text-xl mb-8'>
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
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/...";`}</SyntaxHighlighter>
            </p>
          </section>

          {/* ChatAPI */}
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Chat API</h3> 
          <section className='mb-12 pl-3'>
            <p className='mb-8'>In order to use the Chat API for chat persistence in part 2, you will need another API key that we will provide for you. You should receive an email from the instructors soon after the homework is released with your API key. Make sure to <b>never</b> share this API key, just as you wouldn't share your Gemini API key! Once you have the API key, paste it into the <span className='inline-code'>chat-api.js</span> file towards the bottom:</p>
            <p className='blue-block font-mono my-4 text-sm sm:text-xl mb-8'>
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
const BASE_URL = "https://hw2.cis1962.esinx.net/api";
const API_KEY = "YOUR_API_KEY";`}</SyntaxHighlighter>
            </p>
            <p className='red-block mb-8'>
              <h4 className='flex-center gap-2 text-2xl'> <IoMdAlert className='text-red-700'/> IMPORTANT <IoMdAlert className='text-red-700'/></h4>
              <p>For the simplicity of this homework, we hard-coded the Gemini API and Chat API keys. In a real-world application, you should never do this. Web applications are publicly accessible, so is your API key in your code. You should store your API key in a secure way, such as in an environment variable behind a backend server.</p>
            </p>
            
            <p className='red-block mb-8'>
              <b>Please note</b>: If you used AI for any part of this assignment, save <b>all</b> the chat logs and context! Your instructors will want to see this usage during the AI synthesis activity at the end the homework. If you did not or will no use AI, you can disregard this instruction.
            </p>
          </section>
          
        </section>

        {/* Part 1 */}
        <section id="p1" className="mb-8 scroll-mt-28 text-gray-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"><TbHexagonNumber1Filled />Part 1: Build a ChatBot</h2>

          {/* Part 1.1 */}
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Part 1.1: Chat</h3>
          <pre className='red-block mt-4'>
            <b>Files</b>: <span className='inline-code'>chat.js</span>
          </pre>
          <section className='mb-12 pl-3'>
            <p className="mb-4">
              We will start by implementing the chat functionality.
            </p>
            <p className="mb-4">
              Open the <span className='inline-code'>chat.js</span> file and implement the following methods within the Chat class:
            </p>  
            <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
              <li><span className='inline-code'>{`constructor({ id, messages })`}</span></li>
              <li><span className='inline-code'>{`getMessages()`}</span></li>
              <li><span className='inline-code'>{`sendMessage(message)`}</span></li>
            </ul>  
            <p className="mb-4">
              The end goal is to be able to send messages to the chat and see the responses. We'll implement the <span className='inline-code'>save()</span> method in the next part to allow the chat to be functional.
            </p>
            <p className="red-block">
              <h4 className='font-bold'>Jsdoc</h4>
              <p>Like in homework 1, we have provided Jsdoc-style comments above each method that shows the functionality of each method, the arguments the method takes, and the outputs that get returned. Some of these arguments and outputs use slightly different syntax for types that you may not be used to, like using generics within angle brackets {`<>`} in Promises, but most of the jsdoc comments should explain the functions of the methods well enough to allow you to implement them without issue.</p>
            </p>

            <p className="red-block">
              <h4 className='font-bold'>Classes and the keyword <span className='inline-code'>this</span></h4>
              <p>By the start of this homework, we will not have covered classes or object-oriented programming yet, which will be covered in the week after this homework is released. During this homework, you will be using the Chat and ChatAPI classes. These classes are objects which contain properties, called fields, which can be accessed from within the same class using the keyword <span className='inline-code'>this</span>. If you need to refer to the current class from within a method in the class at any time, use <span className='inline-code'>this</span>, which will provide you a reference to the current class, which will allow you to get properties and methods from elsewhere in the class.</p>
            </p>
            <p className="red-block">
              <h4 className='font-bold'>What is a <span className='inline-code'>message</span>?</h4>
              <p>When working with chatbots, messages need to store both the role, or who's speaking, and the message itself. In JavaScript, we can represent this through an object that stores both the role and content of the message, like so: </p>
              <div className="blue-block font-mono my-4">
                <SyntaxHighlighter
                  language="javascript"
                  style={vs}
                  customStyle={{
                      background: 'none',
                      border: 'none',
                      fontSize: 16,
                      margin: 0,
                      padding: 0,
                  }}
                >{`const message = { role: "assistant", content: "Hello world!" }`}</SyntaxHighlighter>
              </div>
              <p>There are two roles in a chat: the assistant, and the user. In general, you will be using this structure to store and display your chats, such as the messages array stored in each instance of the Chat class.</p>
            </p>
          </section>
          
          {/* Part 1.2 */}
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Step 1.2: HTML & CSS</h3>
          <pre className='red-block mt-4'>
            <b>Files</b>: <span className='inline-code'>index.html</span>, <span className='inline-code'>style.css</span>
          </pre>
          <section className='mb-8'>
            <p className="mb-4">
              Open the <span className='inline-code'>index.html</span> file and implement the HTML for the chat. This is a free-form step that can take many forms, but your chat interface should at least:
            </p> 
            <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
              <li>Implement a "container" for the chat messages</li>
              <li>Implement a form with an input field and a submit button</li>
            </ul>  
            <p className="mb-4">
              Feel free to style the chat messages, input, and form within <span className='inline-code'>style.css</span>. We don't have specific styles for this, so you can do whatever you want. You can use modern chat clients like ChatGPT or apps like WhatsApp as a model. Just be sure that it is easily readable and accessible- you will lose points if your app is unusable, hard to read, or confusing to use. Feel free to be creative! 😃
            </p>
          </section>

          {/* Part 1.3 */}
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Step 1.3: Script</h3>
          <pre className='red-block mt-4'>
            <b>Files</b>: <span className='inline-code'>script.js</span>
          </pre>
          <section className='mb-8'>
            <p className="mb-4">
              To make your chat work, you will need to make changes to the <span className='inline-code'>script.js</span> file, which initializes and manages various parts about the chatbot. You will need to:
            </p>
            <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
              <li>Implement some way to store the current chat.</li>
              <li>Set the current chat to the chat with the id "default" and a welcome message from the AI (feel free to write whatever you want as your welcome message!). This should use the <span className='inline-code'>Chat</span> class, pay attention to the parameters of the Chat class when constructing it.</li>
              <li>Implement a function to render the chat messages: <span className='inline-code'>renderMessages(messages)</span></li>
              <li>Implement some way to show / hide the typing indicator while the LLM API is pending (is typing)</li>
              <li>Add event listeners to the form and the submit button</li>
            </ul>  
            <p className="mb-4">
              After you have implemented the <span className='inline-code'>script.js</span> file, you should be able to:
            </p>
            <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
              <li>Send messages to the chat and see the responses</li>
              <li>See the typing indicator while the LLM API is pending (is typing)</li>
              <li>See the chat messages in the chat messages container</li>
              <li>See the chat input and form in the chat form container</li>
            </ul>
            <p className="mb-4">
              We've provided some functions in the starter code of <span className='inline-code'>script.js</span> for you to use, but you will have to write some of your own functions and code to handle some of the requirements above (TODOs not always provided!). The implementation of these functions will depend on how you structure your HTML and what you name various id's and CSS classes for DOM manipulation, so use your own discretion on how you design your web page and this script to work with it. Some of the provided functions will be used in other sections of this homework, so do not implement those yet!
            </p>
          </section>
        </section>

        {/* Part 2 */}
        <section id="p2" className="mb-8 scroll-mt-28 text-gray-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"><TbHexagonNumber2Filled />Part 2: Chat Persistence</h2>

          {/* Part 2.1 */}
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Part 2.1: Chat API</h3>
          <pre className='red-block mt-4'>
            <b>Files</b>: <span className='inline-code'>chat-api.js</span>
          </pre>
          <section className='mb-12 pl-3'>
            <p className="mb-4">
              Now, we will implement the chat API to save the chat history.
            </p>
            <p className="mb-4">
              The Chat API has the following endpoints:
            </p>  
            <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
              <li><span className='inline-code'>GET /messages</span> - Get all chats</li>
              <ul className='list-disc ml-8'>
                <li>Response: <span className='inline-code'>{`id: "default", messages: { role: string, content: string }[] `}</span></li>
              </ul>
              <li><span className='inline-code'>PUT /messages</span> - Update a chat</li>
              <ul className='list-disc ml-8'>
                <li>Request: <span className='inline-code'> {`id: "default", messages: { role: string, content: string }[] `}</span></li>
                <li>Response: <span className='inline-code'>{` id: "default", messages: { role: string, content: string }[] `}</span></li>
              </ul>
            </ul>  
            <p className="mb-4">
              Note that the id is the chat id(always set to "default" for now, we'll change this in the future).
            </p>
            <p className="mb-4">
              Remember that you must include the API key that we provided you in ALL request headers!
            </p>
          </section>
          
          {/* Part 2.2 */}
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Step 2.2: Saving Chat History and Implementing Persistence</h3>
          <pre className='red-block mt-4'>
            <b>Files</b>: <span className='inline-code'>chat.js</span>, <span className='inline-code'>script.js</span>
          </pre>
          <section className='mb-8'>
            <p className="mb-4">
              Now we will use the chat API to save chats and allow them to persist. Implement the following methods:
            </p> 
            <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
              <li>Implement the <span className='inline-code'>save()</span> method in the <span className='inline-code'>Chat</span> class using this API. Your implementation should:</li>
              <ul className='list-disc ml-8'>
                <li>Send a <span className='inline-code'>PUT</span> request to <span className='inline-code'>/messages</span> with the chat id and messages</li>
              </ul>
              <li>Implement the <span className='inline-code'>initializeApp()</span> function in the <span className='inline-code'>script.js</span> file using this API. In this step, your implementation should only:</li>
              <ul className='list-disc ml-8'>
                <li>Fetch the chat from the API</li>
                <li>Update the chat object with the fetched chat</li>
              </ul>
              <li>Implement some way to save the chat history to the API when the user sends a message and receives a response.</li>
            </ul>  
            <p className="mb-4">
              By the end of this part, you should be able to:
            </p>
            <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
              <li>Save the chat history to the API</li>
              <li>Load the chat history from the API</li>
              <li>Update the chat history in the API</li>
              <li>Get the chat history from the API</li>
            </ul>
            <p className="mb-4">
              Or in other words, you have achieved "persistence" for your chat! Your chat history should be saved to the API and loaded from the API when the user refreshes the page. 
            </p>
          </section>
        </section>

        {/* Part 3 */}
        <section id="p3" className="mb-8 scroll-mt-28 text-gray-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"><TbHexagonNumber3Filled />Part 3: Multiple Chats</h2>
          <p className="mb-4">
            Now, we will implement multiple chats in the chat API.
          </p>
          {/* Part 3.1 */}
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Part 3.1: Updating Chat API for Multiple Chats</h3>
          <pre className='red-block mt-4'>
            <b>Files</b>: <span className='inline-code'>chat-api.js</span>
          </pre>
          <section className='mb-12 pl-3'>
            <p className="mb-4">
              Implement the following endpoints in the chat API:
            </p>
            <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
              <li><span className='inline-code'>GET /chat</span> - Get all chatIds</li>
              <ul className='list-disc ml-8'>
                <li>Response: <span className='inline-code'>string[]</span></li>
              </ul>
              <li><span className='inline-code'>POST /chat</span> - Create a new chat with a randomized id</li>
              <ul className='list-disc ml-8'>
                <li>Request: (nothing)</li>
                <li>Response: <span className='inline-code'>{` id: string, messages: { role: string, content: string }[]  `}</span></li>
              </ul>
              <li><span className='inline-code'>PUT /chat/:id</span> - Update a chat</li>
              <ul className='list-disc ml-8'>
                <li>Request: <span className='inline-code'>{ `id: string, messages: { role: string, content: string }[]` }</span></li>
                <li>Response: <span className='inline-code'>{ `id: string, messages: { role: string, content: string }[]` }</span></li>
              </ul>
            </ul>  
            <p className="mb-4">
              With these endpoints, our chat API is complete, and ready to handle multiple chats.
            </p>
          </section>
          
          {/* Part 3.2 */}
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Step 3.2: Updating the Chat class for Multiple Chats</h3>
          <pre className='red-block mt-4'>
            <b>Files</b>: <span className='inline-code'>chat.js</span>
          </pre>
          <section className='mb-8'>
            <p className="mb-4">
              You would have noticed that the <span className='inline-code'>Chat</span> class has the <span className='inline-code'>save()</span> method which is now obsolete! Refactor the <span className='inline-code'>Chat</span> class to use the new implementation of the <span className='inline-code'>ChatAPI</span> class, that instead updates the chat with a given id in the API.
            </p> 
          </section>

          {/* Part 3.3 */}
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Step 3.3: HTML & CSS for Multiple Chats</h3>
          <pre className='red-block mt-4'>
            <b>Files</b>: <span className='inline-code'>index.html</span>, <span className='inline-code'>style.css</span>
          </pre>
          <section className='mb-8'>
            <p className="mb-4">
              Open the <span className='inline-code'>index.html</span> file and implement the HTML for the chat list. You should:
            </p> 
            <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
              <li>Implement a "container" for the chat list (likely a sidebar)</li>
              <li>Create a "Create New Chat" button</li>
              <li>Implement a "container" for the chat item</li>
            </ul>  
            <p className="mb-4">
              Feel free to style the chat list and chat item in <span className='inline-code'>style.css</span>!
            </p>
          </section>

          {/* Part 3.4 */}
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Step 3.4: Updating the Script for Multiple Chats</h3>
          <pre className='red-block mt-4'>
            <b>Files</b>: <span className='inline-code'>script.js</span>
          </pre>
          <section className='mb-8'>
            <p className="mb-4">
              Open the <span className='inline-code'>script.js</span> file and implement the following methods:
            </p> 
            <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
              <li><span className='inline-code'>renderChatList()</span></li>
              <li><span className='inline-code'>switchToChat(chatId)</span></li>
              <li><span className='inline-code'>createNewChat()</span></li>
              <li><span className='inline-code'>initializeApp()</span></li>
              <li>Any event listeners you need to implement for your new HTML elements</li>
            </ul> 
            <p className="mb-4">
              After you have implemented the `script.js` file, you should be able to:
            </p>
            <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
              <li>See the chat list in the chat list container</li>
              <li>Click on the "Create New Chat" button to create a new chat</li>
              <li>Click on a chat item to switch to that chat</li>
              <li>See the chat messages in the chat messages container</li>
              <li>See the chat input and form in the chat form container</li>
              <li>Interact through the chat</li>
            </ul> 
            <p className='mb-4'>
              Do not worry too much about the sorted order of the chat list. You only need to show us the ID of the chat in the chat list, and just make sure that the chat list stores the correct chatIds and messages.
            </p>
          </section>
        </section>

        {/* AI Synthesis */}
        <section id="ai-synthesis" className="mb-8 scroll-mt-28 text-gray-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"> <FaRobot />AI Synthesis Activity</h2>
          <p className='mb-4'>
            As part of an initiative to promote honest and ethical use of AI and LLMs in programming classes, you will perform an AI synthesis activity as part of this homework. This assignment will be written within your <span className='inline-code'>AIAssignment.md</span> file, and will differ based on a self-report of whether you have used AI for any part of this assignment or not.  Please be truthful about your usage, because either way, you will still need to perform this AI synthesis activity! This AI synthesis activity will represent <b>5% of the individual homework's grade</b>.
          </p>
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Activity A: If you used AI</h3>
          <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
            <li>Cite the usage by including screenshots or a link to the conversation with your AI of choice. Make sure to include any context, instructions, and all the converstations you had with the AI.</li>
            <li>Write about why you used AI. Was there a gap in knowledge you wanted to fill? Were the answers through traditional search engines not adquete? Did you want to let AI help you format something in a quick manner?</li>
            <li>Evaluate the AI's response. If you asked multiple questions, you can pick one of the responses the AI generated. Does the AI answer your question properly? Does it hallucinate any details? Could there be room to improve this response through manual editing? Did you accept this response fully or adapt parts of it into your work?  </li>
            <li>If you used unfamiliar syntax or concepts generated by AI within your assignment, be sure to research them and explain what those concepts are to demonstrate your understanding.</li>
          </ul>
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Activity B: If you did NOT AI</h3>
          <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
            <li>Explain some improvement you want to make within your code. Perhaps you have a code block that could be more concise, or a part of your code could be improved with a library or be performed with a more efficient algorithm.</li>
            <li>Ask AI how to improve your code, by picking a part of your program you are interested in improving and asking something along the lines of "how can I improve this code?" This does not have to be verbatim; you could ask more specific questions for improvement, like "what JavaScript libraries could improve the efficiency of my code?"</li>
            <li>Evaluate the response the AI generates. You may need to do some research to do this evaluation, to see if the syntax generates correctly or if any libraries the AI suggests are appropriate for the current task. Report on whether the AI's solution fits within your project, or if it would need modifications to work properly.</li>
            <li>You do NOT need to use the AI suggestion within your final submission, if your code already works properly. If the scope of your inquiry in this activity leads you to replace parts of your code, switch to Assignment A instead.</li>
          </ul>
          <p className='mb-4'>
            Templates for these responses are included in the provided <span className='inline-code'>AIAssignment.md</span> starter files for this assignment. You can also refer to the dedicated <a href='ai-policy' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">AI Policy</a> page for more information and examples of good responses. This activity will be graded mostly for effortful completion. We are looking to foster an environment of honest AI usage, so please take this activity as a learning opportunity!
          </p>
        </section>

        {/* Submission */}
        <section id="submission" className="mb-8 scroll-mt-28 text-gray-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"> <MdGrade />Submission</h2>
          <p className='mb-4'>
            To submit, simply push your commits to the repository generated from GitHub classroom. Make sure your latest commit before the deadline includes all files you worked on during this homework and your <span className='inline-code'>AIAssignment.md</span> file containing your AI syntesis activity. Before you submit, make sure you lint your code for style errors using the command <span className='inline-code'>npm run lint</span>. More details on style can be found in the <a href='style-guide' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">style guide</a>. We will take -1 points for every style error remaining in the submission for the submitted files.
          </p>
          <p className='mb-4'>
            Make sure that your application is fully functional and works as expected! For this assignment, we will be looking for functionality, not aesthetics. However, if your CSS styling / HTML structure prevents us from interacting with the application, we will consider the features to be incomplete. If you are unsure if your assignment meets all the functionality criteria we are looking for, refer to <span className='inline-code'>RUBRIC.md</span> for a checklist of what we will be grading for in your submission.
          </p>
        </section>
      </div>
    </div>
  )
}

export default ChatJS
