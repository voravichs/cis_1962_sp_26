import SideNav from '@/components/Sidenav';
import { FaPlug, FaClipboardList} from "react-icons/fa";
import { TbCircleNumber0Filled, TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled} from 'react-icons/tb';
import { MdGrade } from "react-icons/md";
import schedule from '@/data/schedule';

import type { Metadata } from "next";
import XLink from '@/components/XLink';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

const SECTIONS = [
  {
    id: "introduction",
    icon: <FaPlug className="inline-block text-3xl" />
  },
  {
    id: "zero",
    icon: <TbCircleNumber0Filled className="inline-block text-3xl" />
  },
  {
    id: "one",
    icon: <TbCircleNumber1Filled className="inline-block text-3xl" />
  },
  {
    id: "two",
    icon: <TbCircleNumber2Filled className="inline-block text-3xl" />
  },
  {
    id: "three",
    icon: <TbCircleNumber3Filled className="inline-block text-3xl" />
  },
  {
    id: "four",
    icon: <TbCircleNumber4Filled className="inline-block text-3xl" />
  },
  {
    id: "submission",
    icon: <MdGrade className="inline-block text-3xl" />
  }
];

export const metadata: Metadata = {
  title: "HW6 | CIS 1962",
  description: "Homework 6 Page of CIS 1962 for Spring 2026 at the University of Pennsylvania",
};

export default function HW6() {
    return (
        <div className="scroll-mt-48 max-w-5xl mx-auto text-lg text-black dark:text-white">      
        {/* Side Nav */}
        <SideNav sections={SECTIONS}/>
      
        <div className="mx-auto text-lg">
            {/* Title */}
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Homework 6: Blog Part 1</h1>
            <h3 className='text-lg sm:text-xl md:text-2xl opacity-60 mb-4'>Due March 19th at 11:59 PM</h3>

            <div className='red-block font-mono'><span className='font-bold'>Topics:</span> Backend, Express.js, Account Management Systems, JWT Authentication, Redis Cloud Database</div>

            {/* Intro Text */}
            <section className="space-y-8 mb-8">
                <p className="ml-4">
                    In this homework, you will build the backend for a simple blogging platform using Express.js. This will be a multi-part homework that will continue after Spring Break with connecting to the frontend and deploying the application, but in this first part you will focus on building the backend and implementing the core functionality of the application. You will implement a RESTful API with Express.js that allows users to create accounts, log in, create blog posts, and view blog posts. You will also implement JWT authentication to secure the API endpoints and ensure that only authenticated users can access certain functionality. Finally, you'll connect to a Redis Cloud database to store user information, blog posts, and comments. This homework will give you practice working with backend development, Express.js, and authentication, which are all important skills for web developers.
                </p>
                <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Assignment Goals</h3>
                <ul className="text-lg ml-6 list-disc">
                    <li>Build the backend for a simple blogging platform</li>
                    <li>Learn to work with Express.js and RESTful API design</li>
                    <li>Implement JWT authentication for secure API endpoints</li>
                    <li>Get comfortable working with backend development and Redis Cloud databases</li>
                </ul>
            </section>

            {/* Introduction */}
            <section id="introduction" className="scroll-mt-48 space-y-8 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2"> <FaPlug /> Introduction &amp; Installation</h2>

                {/* Starter Code */}
                <a
                    href={schedule[7].homework?.starter}
                    className="flex justify-center items-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-lg font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-red-300 w-1/2 my-4 cursor-pointer mx-auto"
                >
                    Starter Code
                </a>

                {/* Blog */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Overview</h3>
                    <p className="ml-4">
                        For this homework, you will be building a blog using Express.js with protected routes that require JWT authentication. Your backend will connect to a Redis database to store user information and blog posts, and will provide a RESTful API for the future frontend to interact with. The core functionality of the application will include:
                    </p>
                    <ul className="text-lg ml-12 list-disc">
                        <li>User account creation and management</li>
                        <li>User login and authentication with JWT</li>
                        <li>Creating, editing, and deleting blog posts</li>
                        <li>Creating and managing comments on multiple accounts</li>
                    </ul>
                </section>

                {/* Files */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Files</h3>
                    <p className="ml-4">
                        The starter code for this homework contains the files for a server architecture using Express. This includes routes, controllers, services, and a Redis client. You should take some time to understand the provided file structure and purpose of each file as you will be building on top of this code to implement the functionality of the application. 
                    </p>
                    <p className='ml-4'>
                        Upon installing the starter code for this project, you should have the following files:
                    </p>
                    <ul className="text-lg ml-12 list-disc">
                        <li>A <span className='inline-code'>config</span> folder with <span className='inline-code'>redis.ts</span>, a filled-out Redis Client</li>
                        <li>A <span className='inline-code'>controllers</span> folder with various controllers for auth, comments, posts, and profiles</li>
                        <li>A <span className='inline-code'>routes</span> folder with various routes for auth, posts, and profiles</li>
                        <li>A <span className='inline-code'>services</span> folder with various services for auth, comments, posts, and profiles</li>
                        <li>A <span className='inline-code'>types</span> folder for a helper type extension for Express Requests, and helpful types</li>
                        <li>A <span className='inline-code'>utils</span> folder with <span>auth.ts</span> for mananging various authentication helper functions and middleware</li>
                        <li><span className='inline-code'>index.ts</span>, where your server will be started</li>
                    </ul>  
                    <p className='ml-4'>
                        Throughout this homework you can use the provided files to build your backend. Feel free to add various helper functions, middleware, and files as necessary to implement the functionality of the application, but make sure to keep your file structure organized and easy to navigate. 
                    </p>
                </section>

                {/* Dependencies */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Dependencies</h3>
                    <p className="ml-4">
                        This homework will use various dependencies to help manage your backend server. Here is an overview of the main dependencies and libraries you will be using:
                    </p>
                    <ul className="text-lg ml-12 list-disc">
                        <li>Express, a web framework for Node.js to build server-side applications</li>
                        <li>TypeScript and tsx, a TypeScript execution environment for Node.js</li>
                        <li><XLink link="https://www.npmjs.com/package/nodemon" text='nodemon' />, a tool that helps develop Node.js applications by automatically restarting the server when file changes are detected</li>
                        <li><XLink link="https://www.npmjs.com/package/jsonwebtoken" text='jsonwebtoken' />, a library for creating and verifying JSON Web Tokens (JWTs) for authentication</li>
                        <li><XLink link="https://www.npmjs.com/package/bcrypt" text='bcrypt' />, a library for hashing passwords</li>
                        <li><XLink link="https://www.npmjs.com/package/dotenv" text='dotenv' />, a library for loading environment variables from a .env file</li>
                        <li><XLink link="https://www.npmjs.com/package/redis" text='redis' />, a library for interacting with a Redis database</li>
                        <li><XLink link="https://www.npmjs.com/package/@paralleldrive/cuid2" text='@paralleldrive/cuid2' />, a library for generating unique IDs</li>
                    </ul>
                    <p className='ml-4'>
                        You should take some time to familiarize yourself with these dependencies and how they work. This homework specification will mention when to use these dependencies. Feel free to ask on Ed or in office hours if you are unsure about how to make use of any of these dependencies.
                    </p>
                    <p className='ml-4'>
                        We've also provided a start script for development, with the command <span className='inline-code'>npm start</span>. This runs both nodemon and tsx together to automatically restart the server when file changes are detected and to run the server with TypeScript.
                    </p>
                </section>

                {/* Postman */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Postman</h3>
                    <p className="ml-4">
                        Since this homework requires you to test your backend API endpoints, we recommend using Postman, a popular API testing tool that allows you to easily send requests to your API and view the responses. You can download Postman for free from their <XLink link="https://www.postman.com/downloads/" text="official website" />.
                    </p>
                    <p className='ml-4'>
                        Postman will allow you to make API calls, like <span className='inline-code'>GET http://localhost:3000/register</span> without the need to format a curl command. It also lets you easily add parameters, headers, and body data to your requests, and also provides multiple environments to manage different requests. Take advantage of Postman to thoroughly test your API endpoints with good and bad data, as we will also do the same when grading your homework!
                    </p>
                </section>

                {/* Types */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>TypeScript</h3>
                    <p className="ml-4">
                        For TypeScript use within this homework, you will need to make use of the Request and Response types from the Express library. However, these types don't include specific fields you have in the parameters or bodies of the API routes. You will need to add generics to the Request type to specify the types of the request parameters, query, and body for each route. For example, you may specify the ID of a URL parameter like so:
                    </p>
                    <div className="red-block font-mono my-4 text-sm sm:text-xl">
                        <SyntaxHighlighter
                        language="typescript"
                        style={vs}
                        customStyle={{
                            background: 'none',
                            border: 'none',
                            margin: 0,
                            padding: 0,
                        }}
                        >{`import type { Request, Response } from "express";

type Params = { id: string };

export function getUser(req: Request<Params>, res: Response) {
  const { id } = req.params; // this is now typed as a string
}`}</SyntaxHighlighter>
                    </div>
                    <p className='ml-4'>
                        We've additionally provided you an type extension on the Request type to allow it to have an optional "user" field attached to it, so that you can work with the decoded JWT token payload a lot easier.
                    </p>
                </section>
            </section>

            {/* Instructions */}
            <section className="space-y-8 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2"><FaClipboardList />Instructions</h2>

                {/* Part 0 */}
                <section id="zero" className='scroll-mt-48 space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Part 0: Set up your Redis Cloud DB and Environment Variables</h3>
                    <pre className='red-block ml-4 my-4 w-1/2'>
                        <b>Files</b>: <span className='inline-code'>index.ts</span>
                    </pre>
                    <p className="ml-4">
                        We will be using <XLink link="https://cloud.redis.io/#/" text='Redis Cloud' /> for this homework to host our Redis database. You should set up an account (with a Google email or GitHub) and create a Redis database instance to use for this homework. You should use the free tier, which provides more than enough resources for this homework. Once you have your Redis database set up, you should have the following information that you will need to connect to your database from your Express server:
                    </p>
                    <ul className="text-lg ml-12 list-disc">
                        <li>A public endpoint (i.e. someting.cloud.redislabs.com)</li>
                        <li>A password (find this within the Security tab on your database page)</li>
                    </ul>
                    <p className="ml-4">
                        Next, you should set up your environment variables to securely store this information and use it within your Express server. You should create a <span className='inline-code'>.env</span> file in the root of your project. A <span className='inline-code'>.env.example</span> file has been provided in the starter code with the necessary variable names, so you can just copy that file to <span className='inline-code'>.env</span> and fill in your own information. You should have the following environment variables set up:
                    </p>
                    <ul className="text-lg ml-12 list-disc">
                        <li><span className='inline-code'>JWT_TOKEN_SECRET</span> (choose anything you want, you can use a <XLink link="https://jwtsecrets.com/#generator" text="generator" /> to help)</li>
                        <li><span className='inline-code'>REDIS_URL</span> (formatted as redis://default:[PASSWORD]@[URL] with the information from your Redis Cloud dashboard)</li>
                    </ul>
                    <p className='ml-4'>
                        Once you are all set up with Redis (and have made sure to run <span className='inline-code'>npm i</span> to install dependencies), start setting up your Express application in <span className='inline-code'>index.ts</span>. Make sure your Express server can boot up with <span className='inline-code'>npm start</span> without any errors, and test a basic route just to make sure. 
                    </p>
                    <p className='ml-4'>
                        We have provided a pre-written Redis client that connects to your provided Redis URL. This client is primarily used in your services to interact with the Redis database. For now, you should test that you can connect to your Redis database from your Express server by importing the cilent, starting the server, then testing if you see 'Redis connected successfully' in your terminal. If you don't see this message, make sure to check your environment variables and Redis Cloud setup to ensure everything is correct. 
                    </p>
                    <div className='blue-block mt-8'>
                        <h4 className='flex-center gap-2 text-2xl font-bold'>Using environment variables</h4>
                        <p className='ml-4'>
                            You'll notice in the Redis client provided that the <span className='inline-code'>dotenv</span> package is used to load environment variables from your <span className='inline-code'>.env</span> file, with the line <span className='inline-code'>dotenv.config()</span>. This allows you to access your environment variables using <span className='inline-code'>process.env.VARIABLE_NAME</span> anywhere in your code. For example, in the Redis client, the Redis URL is accessed with <span className='inline-code'>process.env.REDIS_URL</span>.
                        </p>
                    </div>
                </section>

                <hr></hr>

                {/* Part 1 */}
                <section id="one" className='scroll-mt-48 space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Part 1: Authorization and Authentication with JWT</h3>
                    <pre className='red-block ml-4 my-4'>
                        <b>Files</b>: <span className='inline-code'>auth.ts</span>, <span className='inline-code'>authRoutes.ts</span>, <span className='inline-code'>authController.ts</span>, <span className='inline-code'>authService.ts</span>
                    </pre>
                    <p className="ml-4">
                        Now we can start implementing the core functionality of our application, starting with user account management and authentication. In this part, you will implement the backend functionality to allow users to create accounts, log in, and authenticate with JWTs.
                    </p>
                    <p className="ml-4">
                        You will be working in the auth routes, controllers, and services to implement the necessary API endpoints and logic for user registration, login, and JWT authentication. You should implement the following routes:
                    </p>
                    <ul className="text-lg ml-12 list-disc space-y-10">
                        <li><span className='red-bold'>Method:</span> <span className='inline-code'>POST /register</span>
                            <ul className='list-disc ml-8'>
                                <li><span className='red-bold'>Description:</span> Create a new user account. Validates that user input meets the required criteria and that the username is unique within the database. Hashes the user inputted password before creating a user with the role <span className='inline-code'>user</span>.</li>
                                <li><span className='red-bold'>Request Body (JSON):</span>
                                    <ul className='list-disc ml-8'>
                                        <li><span className='inline-code'>username</span>: <span>string (required, 3-20 alphanumeric chars, no spaces)</span></li>
                                        <li><span className='inline-code'>password</span>: <span>string (required, min 8 chars, at least one letter and one number)</span></li>
                                        <li><span className='inline-code'>email</span>: <span>string (required, valid email format, like example@domain.com)</span></li>
                                    </ul>
                                </li>
                                <li><span className='red-bold'>Response:</span>
                                    <ul className='list-disc ml-8'>
                                        <li><span className='inline-code'>201</span> Success: <span className='inline-code'>{`{ message: 'Account created' }`}</span></li>
                                        <li><span className='inline-code'>400</span> Error: <span className='inline-code'>{`{ error: 'Missing fields: ...' }`}</span> or validation error messages</li>
                                        <li><span className='inline-code'>409</span> Error: <span className='inline-code'>{`{ error: 'Username or email already exists.' }`}</span></li>
                                    </ul>
                                </li>
                                <li><span className='red-bold'>Database Interaction:</span>
                                    <ul className='list-disc ml-8'>
                                        <li>Creates a Redis hash under the key <span className='inline-code'>user:[username]</span> that stores the following fields:</li>
                                        <ul className='list-disc ml-8'>
                                            <li><span className='inline-code'>username</span>: the user's username</li>
                                            <li><span className='inline-code'>email</span>: the user's email address</li>
                                            <li><span className='inline-code'>passwordHash</span>: the user's password hashed securely with <span className='inline-code'>bcrypt</span></li>
                                            <li><span className='inline-code'>role</span>: defaults to <span className='inline-code'>user</span></li>
                                        </ul>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><span className='red-bold'>Method:</span> <span className='inline-code'>POST /login</span>
                            <ul className='list-disc ml-8'>
                                <li><span className='red-bold'>Description:</span> Log in to an existing user account. Validates that the username and password are provided, checks that the username exists in the database, and compares the provided password with the stored hashed password using <span className='inline-code'>bcrypt</span>. If the credentials are valid, generates a JWT token that includes the user's username and role, and returns it in the response.</li>
                                <li><span className='red-bold'>Request Body (JSON):</span>
                                    <ul className='list-disc ml-8'>
                                        <li><span className='inline-code'>username</span>: <span>string (required)</span></li>
                                        <li><span className='inline-code'>password</span>: <span>string (required)</span></li>
                                    </ul>
                                </li>
                                <li><span className='red-bold'>Response:</span>
                                    <ul className='list-disc ml-8'>
                                        <li><span className='inline-code'>200</span> Success: <span className='inline-code'>{`{ message: 'Login successful', jwt_token }`}</span></li>
                                        <li><span className='inline-code'>400</span> Error: <span className='inline-code'>{`{ error: 'Missing username or password' }`}</span></li>
                                        <li><span className='inline-code'>401</span> Error: <span className='inline-code'>{`{ error: 'Invalid credentials' }`}</span></li>
                                    </ul>
                                </li>
                                <li><span className='red-bold'>Database Interaction:</span>
                                    <ul className='list-disc ml-8'>
                                        <li>Get a user by username from database to compare login credentials</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <p className='ml-4'>
                        For each of the routes above, and in the rest of this homework, you should start by defining the route in the routes file, that leads to a route handler in the controller file, and then calls any necessary functions in the service file to interact with the Redis database. Try each route one-by-one to make sure everything is working as you build it.
                    </p>
                    <p className='ml-4'>
                        Additionally, in the login route, you will need to generate and sign a JWT token using the <span className='inline-code'>jsonwebtoken</span> library. The token should include the user's username and role in the payload, and should be signed with the secret from your environment variables. You should return this token in the response when the user successfully logs in, as it will be used to authenticate future requests to protected routes. You can use <span className='inline-code'>auth.ts</span> to implement to helper function.
                    </p>
                    <div className='blue-block mt-8'>
                        <h4 className='flex-center gap-2 text-2xl font-bold'>Redis Data Storage</h4>
                        <ul className='text-lg ml-8 list-disc'>
                            <li>
                                <span className='red-bold'>How Redis Stores Data:</span> Redis is a key-value database, meaning it stores data as pairs of keys and values. Each key is a unique string, and its value can be a <span className='red-bold'>string, list, set, hash, or other data type</span>. For user accounts, you should use a key format like <span className='inline-code'>user:[username]</span> to uniquely identify each user. This makes it easy to look up, update, or delete a user's information by their username.
                            </li>
                            <li>
                                In the case of POST /register, we recommend you use a Redis hash to store the various fields of a user's account (username, email, passwordHash, role). A Redis hash allows you to store multiple field-value pairs under a single key, which is perfect for storing related information about a user. You can use the Redis commands <span className='inline-code'>hSet</span> to set fields in the hash, and <span className='inline-code'>hGetAll</span> to retrieve all the fields and values for a user when they log in.
                            </li>
                            <li>
                                <span className='red-bold'>Useful Redis Methods:</span>
                                <ul className='list-disc ml-8'>
                                    <li><span className='inline-code'>hSet(key, field, value)</span>: Set a field in a hash.</li>
                                    <li><span className='inline-code'>hGet(key, field)</span>: Get the value of a field in a hash.</li>
                                    <li><span className='inline-code'>hGetAll(key)</span>: Get all fields and values in a hash.</li>
                                    <li><span className='inline-code'>hmSet/Get(key, obj)</span>: Set/Get multiple fields in a hash.</li>
                                    <li><span className='inline-code'>hExists(key, field)</span>: Check if a field exists in a hash.</li>
                                    <li><span className='inline-code'>hDel(key, field)</span>: Delete a field from a hash.</li>
                                    <li><span className='inline-code'>rpush(key, value)</span>: Add a value to the end of a list.</li>
                                    <li><span className='inline-code'>lrange(key, start, stop)</span>: Get a range of elements from a list.</li>
                                    <li><span className='inline-code'>lrem(key, count, value)</span>: Remove elements from a list that match a value.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    
                </section>

                <hr></hr>

                {/* Part 2 */}
                <section id="two" className='scroll-mt-48 space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Part 2: Profile Routes</h3>
                    <pre className='red-block ml-4 my-4'>
                        <b>Files</b>: <span className='inline-code'>profileRoutes.ts</span>, <span className='inline-code'>profileController.ts</span>, <span className='inline-code'>profileService.ts</span>
                    </pre>
                    <p className='ml-4'>
                        After implementing the registration and login routes, you should now be able to see some data within your Redis database for the users you have created! As a sanity check, you can use a Redis GUI client like <XLink link="https://redis.com/redis-enterprise/redis-insight/" text='Redis Insight' /> to easily view and manage your Redis database, which should available to you within the Redis Cloud dashboard. Check that your new users you've created are showin up in your database, with the hash structure you desire.
                    </p>
                    <p className='ml-4'>
                        However, we don't want to just have user data sitting there in your database! Let's access and modify that data, with the following two routes for user profiles:
                    </p>
                    <ul className="text-lg ml-12 list-disc space-y-10">
                        <li><span className='red-bold'>Method:</span> <span className='inline-code'>GET /profile</span>
                            <ul className='list-disc ml-8'>
                                <li><span className='red-bold'>Description:</span> Fetch the profile information for the currently authenticated user. </li>
                                <li><span className='red-bold'>Authentication:</span> JWT required in Authorization header. <span className='inline-code'>username</span> must be present in the token.</li>
                                <li><span className='red-bold'>Response:</span>
                                    <ul className='list-disc ml-8'>
                                        <li><span className='inline-code'>200</span> Success: <span className='inline-code'>{`{ username, email, role, description? }`}</span></li>
                                        <li><span className='inline-code'>401</span> Error: <span className='inline-code'>{`{ error: 'Unauthorized' }`}</span></li>
                                        <li><span className='inline-code'>400</span> Error: <span className='inline-code'>{`{ error: 'Missing username in token' }`}</span></li>
                                        <li><span className='inline-code'>500</span> Error: <span className='inline-code'>{`{ error: 'Failed to fetch profile' }`}</span></li>
                                    </ul>
                                </li>
                                <li><span className='red-bold'>Database Interaction:</span>
                                    <ul className='list-disc ml-8'>
                                        <li>Fetches the user's profile from Redis, excluding the <span className='inline-code'>password</span> field for security.</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><span className='red-bold'>Method:</span> <span className='inline-code'>PATCH /profile</span>
                            <ul className='list-disc ml-8'>
                                <li><span className='red-bold'>Description:</span> Update the profile information for the currently authenticated user. Partially updates the user's profile fields depending on what is provided in the request body.</li>
                                <li><span className='red-bold'>Authentication:</span> JWT required in Authorization header. <span className='inline-code'>username</span> must be present in the token.</li>
                                <li><span className='red-bold'>Request Body (JSON):</span>
                                    <ul className='list-disc ml-8'>
                                        <li><span className='inline-code'>email</span>: <span>string (optional)</span></li>
                                        <li><span className='inline-code'>role</span>: <span>string (optional)</span></li>
                                        <li><span className='inline-code'>description</span>: <span>string (optional)</span></li>
                                    </ul>
                                </li>
                                <li><span className='red-bold'>Response:</span>
                                    <ul className='list-disc ml-8'>
                                        <li><span className='inline-code'>200</span> Success: <span className='inline-code'>{`{ username, email, role, description? }`}</span></li>
                                        <li><span className='inline-code'>401</span> Error: <span className='inline-code'>{`{ error: 'Unauthorized' }`}</span></li>
                                        <li><span className='inline-code'>400</span> Error: <span className='inline-code'>{`{ error: 'Missing username in token' }`}</span></li>
                                        <li><span className='inline-code'>500</span> Error: <span className='inline-code'>{`{ error: 'Failed to update profile' }`}</span></li>
                                    </ul>
                                </li>
                                <li><span className='red-bold'>Database Interaction:</span>
                                    <ul className='list-disc ml-8'>
                                        <li>Updates the user's profile in Redis, excluding the <span className='inline-code'>password</span> field for security.</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <p className='ml-4'>
                        For these routes and all future routes, you should implement a middleware function to authenticate the JWT token provided in the Authorization header of the request. For JWT tokens, the Authorization header should be formatted as <span className='inline-code'>Authorization: Bearer [token]</span>. The middleware should verify the token using the secret from your environment variables, and if the token is valid, it should attach the decoded token payload (which includes the username and role) to the request object for use in the route handler. If the token is missing or invalid, the middleware should return a 401 Unauthorized error. You can implement this middleware function in <span className='inline-code'>auth.ts</span> and use it in any routes that require authentication.
                    </p>
                </section>

                <hr></hr>

                {/* Part 3 */}
                <section id="three" className='scroll-mt-48 space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Part 3: Post Routes</h3>
                    <pre className='red-block ml-4 my-4'>
                        <b>Files</b>: <span className='inline-code'>postRoutes.ts</span>, <span className='inline-code'>postController.ts</span>, <span className='inline-code'>postService.ts</span>
                    </pre>
                    <p className="ml-4">
                        Now we get to the meat of this app: you'll be implementing the routes to create, read, update, and delete (CRUD) blog posts! Implement the following routes:
                    </p>
                    <ul className="text-lg ml-12 list-disc space-y-10">
                        <li><span className='red-bold'>Method:</span> <span className='inline-code'>POST /posts</span>
                            <ul className='list-disc ml-8'>
                                <li><span className='red-bold'>Description:</span> Create a new blog post for the authenticated user. Each blog <span className='inline-code'>Post</span> in the database should contain a unique ID created with <span className='inline-code'>@paralleldrive/cuid2</span>, the username of the creator, a title, content, and a timestamp (Date) for when it was created.</li>
                                <li><span className='red-bold'>Authentication:</span> JWT required in Authorization header. <span className='inline-code'>username</span> must be present in the token.</li>
                                <li><span className='red-bold'>Request Body (JSON):</span>
                                    <ul className='list-disc ml-8'>
                                        <li><span className='inline-code'>title</span>: <span>string (required)</span></li>
                                        <li><span className='inline-code'>content</span>: <span>string (required)</span></li>
                                    </ul>
                                </li>
                                <li><span className='red-bold'>Response:</span>
                                    <ul className='list-disc ml-8'>
                                        <li><span className='inline-code'>201</span> Success: <span className='inline-code'>{`{post}: Post`}</span></li>
                                        <li><span className='inline-code'>500</span> Error: <span className='inline-code'>{`{ error: 'Failed to create post' }`}</span></li>
                                    </ul>
                                </li>
                                <li><span className='red-bold'>Database Interaction:</span>
                                    <ul className='list-disc ml-8'>
                                        <li>Stores the post object in the database with a unique ID, username, title, content, and timestamp.</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><span className='red-bold'>Method:</span> <span className='inline-code'>GET /posts/:user</span>
                            <ul className='list-disc ml-8'>
                                <li><span className='red-bold'>Description:</span> Get all blog posts for the specified user.</li>
                                <li><span className='red-bold'>Authentication:</span> No authentication required.</li>
                                <li><span className='red-bold'>Request Parameters:</span>
                                    <ul className='list-disc ml-8'>
                                        <li><span className='inline-code'>user</span>: <span>string (required, the username of the user)</span></li>
                                    </ul>
                                </li>
                                <li><span className='red-bold'>Response:</span>
                                    <ul className='list-disc ml-8'>
                                        <li><span className='inline-code'>200</span> Success: Array of <span className='inline-code'>Post</span> objects</li>
                                        <li><span className='inline-code'>500</span> Error: <span className='inline-code'>{`{ error: 'Failed to fetch posts' }`}</span></li>
                                    </ul>
                                </li>
                                <li><span className='red-bold'>Database Interaction:</span>
                                    <ul className='list-disc ml-8'>
                                        <li>Fetches all posts for the specified user from the database.</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><span className='red-bold'>Method:</span> <span className='inline-code'>GET /posts/:user/:id</span>
                            <ul className='list-disc ml-8'>
                                <li><span className='red-bold'>Description:</span> Get a specific blog post by its ID for the specified user.</li>
                                <li><span className='red-bold'>Authentication:</span> No authentication required.</li>
                                <li><span className='red-bold'>Request Parameters:</span>
                                    <ul className='list-disc ml-8'>
                                        <li><span className='inline-code'>user</span>: <span>string (required, the username of the user)</span></li>
                                        <li><span className='inline-code'>id</span>: <span>string (required, the unique ID of the post)</span></li>
                                    </ul>
                                </li>
                                <li><span className='red-bold'>Response:</span>
                                    <ul className='list-disc ml-8'>
                                        <li><span className='inline-code'>200</span> Success: <span className='inline-code'>Post</span> object</li>
                                        <li><span className='inline-code'>404</span> Error: <span className='inline-code'>{`{ error: 'Post not found' }`}</span></li>
                                        <li><span className='inline-code'>500</span> Error: <span className='inline-code'>{`{ error: 'Failed to fetch post' }`}</span></li>
                                    </ul>
                                </li>
                                <li><span className='red-bold'>Database Interaction:</span>
                                    <ul className='list-disc ml-8'>
                                        <li>Fetches a specific post by its ID for the specified user from the database.</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><span className='red-bold'>Method:</span> <span className='inline-code'>PATCH /posts/:id</span>
                            <ul className='list-disc ml-8'>
                                <li><span className='red-bold'>Description:</span> Update a specific blog post by its ID for the authenticated user. Partially updates the post fields depending on what is provided in the request body.</li>
                                <li><span className='red-bold'>Authentication:</span> JWT required in Authorization header. <span className='inline-code'>username</span> must be present in the token.</li>
                                <li><span className='red-bold'>Request Parameters:</span>
                                    <ul className='list-disc ml-8'>
                                        <li><span className='inline-code'>id</span>: <span>string (required, the unique ID of the post)</span></li>
                                    </ul>
                                </li>
                                <li><span className='red-bold'>Request Body (JSON):</span>
                                    <ul className='list-disc ml-8'>
                                        <li><span className='inline-code'>title</span>: <span>string (optional)</span></li>
                                        <li><span className='inline-code'>content</span>: <span>string (optional)</span></li>
                                    </ul>
                                </li>
                                <li><span className='red-bold'>Response:</span>
                                    <ul className='list-disc ml-8'>
                                        <li><span className='inline-code'>200</span> Success: <span className='inline-code'>Updated post object</span></li>
                                        <li><span className='inline-code'>404</span> Error: <span className='inline-code'>{`{ error: 'Post not found' }`}</span></li>
                                        <li><span className='inline-code'>500</span> Error: <span className='inline-code'>{`{ error: 'Failed to update post' }`}</span></li>
                                    </ul>
                                </li>
                                <li><span className='red-bold'>Database Interaction:</span>
                                    <ul className='list-disc ml-8'>
                                        <li>Partially updates the specified post in the database with the provided fields.</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><span className='red-bold'>Method:</span> <span className='inline-code'>DELETE /posts/:id</span>
                            <ul className='list-disc ml-8'>
                                <li><span className='red-bold'>Description:</span> Delete a specific blog post by its ID for the authenticated user.</li>
                                <li><span className='red-bold'>Authentication:</span> JWT required in Authorization header. <span className='inline-code'>username</span> must be present in the token.</li>
                                <li><span className='red-bold'>Request Parameters:</span>
                                    <ul className='list-disc ml-8'>
                                        <li><span className='inline-code'>id</span>: <span>string (required, the unique ID of the post)</span></li>
                                    </ul>
                                </li>
                                <li><span className='red-bold'>Response:</span>
                                    <ul className='list-disc ml-8'>
                                        <li><span className='inline-code'>200</span> Success: <span className='inline-code'>{`{ message: 'Post deleted' }`}</span></li>
                                        <li><span className='inline-code'>404</span> Error: <span className='inline-code'>{`{ error: 'Post not found' }`}</span></li>
                                        <li><span className='inline-code'>500</span> Error: <span className='inline-code'>{`{ error: 'Failed to delete post' }`}</span></li>
                                    </ul>
                                </li>
                                <li><span className='red-bold'>Database Interaction:</span>
                                    <ul className='list-disc ml-8'>
                                        <li>Deletes the specified post from the database.</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <p className='ml-4'>
                        For storing posts in Redis, you can choose the data structure that you think is best suited for this use case. One possible approach is to store each post as a <span className='inline-code'>hash</span> with a unique key like <span className='inline-code'>post:[id]</span>, and then maintain a <span className='inline-code'>list</span> of post IDs for each user under a key like <span className='inline-code'>user:[username]:posts</span>. This way, you can easily fetch all posts for a user by getting the list of post IDs and then fetching each post by its ID. However, feel free to choose any data structure and organization that you think works best!
                    </p>
                    <p className='ml-4'>
                        Additionally, be mindful that each created post must have a unique ID. You can use the <span className='inline-code'>@paralleldrive/cuid2</span> library to generate unique IDs for each post. Make sure to include this ID in the post object that you store in the database, and use it to identify posts for fetching, updating, and deleting.
                    </p>
                </section>

                <hr></hr>

                {/* Part 4 */}
                <section id="four" className='scroll-mt-48 space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Part 4: Comment Routes</h3>
                    <pre className='red-block ml-4 my-4'>
                        <b>Files</b>: <span className='inline-code'>postRoutes.ts</span>, <span className='inline-code'>commentController.ts</span>, <span className='inline-code'>commentService.ts</span>
                    </pre>
                    <p className="ml-4">
                        Finally, we'll implement some routes to allow other users to comment on blog posts! This will allow you to practice implementing routes that interact with data from multiple users, and practice implementing pagination, like you've experienced before in HW5 with the Pokedex. You should implement the following routes within <span className='inline-code'>postRoutes.ts</span>:
                    </p>
                    <ul className="text-lg ml-12 list-disc space-y-10">
                        <li><span className='red-bold'>Method:</span> <span className='inline-code'>POST /posts/:id/comments</span>
                            <ul className='list-disc ml-8'>
                                <li><span className='red-bold'>Description:</span> Create a new comment on the specified post. A <span className='inline-code'>Comment</span> consists of a unique comment ID, the post ID it belongs to, the username of the commenter, the content of the comment, the post author, and a createdAt timestamp.</li>
                                <li><span className='red-bold'>Authentication:</span> JWT required in Authorization header. <span className='inline-code'>username</span> must be present in the token.</li>
                                <li><span className='red-bold'>Request Parameters:</span>
                                    <ul className='list-disc ml-8'>
                                        <li><span className='inline-code'>id</span>: <span>string (required, the unique ID of the post)</span></li>
                                    </ul>
                                </li>
                                <li><span className='red-bold'>Request Body (JSON):</span>
                                    <ul className='list-disc ml-8'>
                                        <li><span className='inline-code'>content</span>: <span>string (required)</span></li>
                                    </ul>
                                </li>
                                <li><span className='red-bold'>Response:</span>
                                    <ul className='list-disc ml-8'>
                                        <li><span className='inline-code'>201</span> Success: <span className='inline-code'>{`{comment}: Comment`}</span></li>
                                        <li><span className='inline-code'>500</span> Error: <span className='inline-code'>{`{ error: 'Failed to create comment' }`}</span></li>
                                    </ul>
                                </li>
                                <li><span className='red-bold'>Database Interaction:</span>
                                    <ul className='list-disc ml-8'>
                                        <li>Stores the comment object in the database with a unique ID, post ID, username, content, post author, and timestamp.</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><span className='red-bold'>Method:</span> <span className='inline-code'>GET /posts/:id/comments</span>
                            <ul className='list-disc ml-8'>
                                <li><span className='red-bold'>Description:</span> Get all comments for the specified post. The response to this route should be <span className='inline-code'>paginated</span>.</li>
                                <li><span className='red-bold'>Authentication:</span> No authentication required.</li>
                                <li><span className='red-bold'>Query Parameters:</span>
                                    <ul className='list-disc ml-8'>
                                        <li><span className='inline-code'>limit</span>: <span>number (optional, default: 5)</span></li>
                                        <li><span className='inline-code'>offset</span>: <span>number (optional, default: 0)</span></li>
                                    </ul>
                                </li>
                                <li><span className='red-bold'>Request Parameters:</span>
                                    <ul className='list-disc ml-8'>
                                        <li><span className='inline-code'>id</span>: <span>string (required, the unique ID of the post)</span></li>
                                    </ul>
                                </li>
                                <li><span className='red-bold'>Response:</span>
                                    <ul className='list-disc ml-8'>
                                        <li><span className='inline-code'>200</span> Success: Array of <span className='inline-code'>Comment</span> objects</li>
                                        <li><span className='inline-code'>500</span> Error: <span className='inline-code'>{`{ error: 'Failed to fetch comments' }`}</span></li>
                                    </ul>
                                </li>
                                <li><span className='red-bold'>Database Interaction:</span>
                                    <ul className='list-disc ml-8'>
                                        <li>Fetches comments for the specified post from the database with pagination support.</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><span className='red-bold'>Method:</span> <span className='inline-code'>DELETE /posts/:id/comments/:commentId</span>
                            <ul className='list-disc ml-8'>
                                <li><span className='red-bold'>Description:</span> Allows an authenticated user to delete a specific comment on their own post. User and post author must match for deletion to be successful.</li>
                                <li><span className='red-bold'>Authentication:</span> JWT required in Authorization header. <span className='inline-code'>username</span> must be present in the token.</li>
                                <li><span className='red-bold'>Request Parameters:</span>
                                    <ul className='list-disc ml-8'>
                                        <li><span className='inline-code'>id</span>: <span>string (required, the unique ID of the post)</span></li>
                                        <li><span className='inline-code'>commentId</span>: <span>string (required, the unique ID of the comment)</span></li>
                                    </ul>
                                </li>
                                <li><span className='red-bold'>Response:</span>
                                    <ul className='list-disc ml-8'>
                                        <li><span className='inline-code'>200</span> Success: <span className='inline-code'>{`{ message: 'Comment deleted' }`}</span></li>
                                        <li><span className='inline-code'>404</span> Error: <span className='inline-code'>{`{ error: 'Post/Comment not found or not authorized' }`}</span></li>
                                        <li><span className='inline-code'>500</span> Error: <span className='inline-code'>{`{ error: 'Failed to delete comment' }`}</span></li>
                                    </ul>
                                </li>
                                <li><span className='red-bold'>Database Interaction:</span>
                                    <ul className='list-disc ml-8'>
                                        <li>Deletes the specified comment from the post if the user is authorized.</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <p className='ml-4'>
                        Your implementation of comments should allow a user to comment on their own post, and other users to comment on other users' posts. This authorship of comments should be reflected in the comment data stored in the database.
                    </p>
                </section>
            </section>

            {/* Submission */}
            <section id="submission" className="scroll-mt-48 space-y-8 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2"> <MdGrade />Submission</h2>
                
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>README</h3>
                    <p className="ml-4">
                        Answer the provided reflection questions within the starter code README file. In this reflection, you will also indicate whether or not you used AI, and also document your usage of AI as well. Please don't forget this step, as it is important feedback for the homework and the content of the course!
                    </p> 
                </section>
                 
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Submission</h3>
                    <p className='ml-4'>
                        Submit your code through Gradescope as a <span className='inline-code'>.zip</span> file that contains your project. Make sure your project includes all files you worked on during this homework and your <span className='inline-code'>README.md</span> file. Make sure the submitted file structure within your submission is <span className='red-bold'>exactly or similar</span> to the file structure you used to run and develop the project. Points will be taken off for malformed project structures in the final submission! Additionally, <span className='red-bold'>do not</span> include the <span className='inline-code'>.env</span> folder in your submission! We will be grading your project with our own database to test how your backend interacts with it, so there is no need to include your own environment variables in the submission.
                    </p>
                    <p className='ml-4'>
                        Before you submit, make sure you lint your code for style errors using the command <span className='inline-code'>npm run lint</span>. We will be using the eslint rules provided by Vite for linting this project.
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