import SideNav from '@/components/Sidenav';
import { FaPlug, FaClipboardList} from "react-icons/fa";
import { TbCircleNumber0Filled, TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled} from 'react-icons/tb';
import { MdGrade } from "react-icons/md";
import schedule from '@/data/schedule';

import type { Metadata } from "next";
import Link from 'next/dist/client/link';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Image from 'next/image';
import hw7_1 from '@/assets/hw7-1.png'

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
  title: "HW7 | CIS 1962",
  description: "Homework 7 Page of CIS 1962 for Spring 2026 at the University of Pennsylvania",
};

export default function HW7() {
    return (
        <div className="scroll-mt-48 max-w-5xl mx-auto text-lg text-black dark:text-white">      
        {/* Side Nav */}
        <SideNav sections={SECTIONS}/>
      
        <div className="mx-auto text-lg">
            {/* Title */}
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Homework 7: Blog Part 2</h1>
            <h3 className='text-lg sm:text-xl md:text-2xl opacity-60 mb-4'>Due April 2nd at 11:59 PM</h3>

            <div className='red-block font-mono'><span className='font-bold'>Topics:</span> Full Stack Development, Blogging, Cookies, Security, Routing</div>

            {/* Intro Text */}
            <section className="space-y-8 mb-8">
                <p className="ml-4">
                    This homework is a continuation of <Link className="link" href="/hw/hw6">Homework 6</Link>. In this assignment, you'll be taking your backend and connecting it to a provided frontend to create a full stack blogging application. Your backend is mostly complete for this task, but you may need to update some routes and add some routes to work with the provided frontend application. By the end of this assignment, you'll have a fully functional bloggin platform that users may create a accounts on, log in, create blog posts, and comment on posts. This homework will give you experience working with full stack development, connecting a frontend to a backend, and working with cookies for authentication. 
                </p>
                <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Assignment Goals</h3>
                <ul className="text-lg ml-6 list-disc">
                    <li>Connect a backend to a frontend</li>
                    <li>Learn to work with Express.js alongside React</li>
                    <li>Utilize cookies for authentication and data transfer</li>
                </ul>
            </section>

            {/* Introduction */}
            <section id="introduction" className="scroll-mt-48 space-y-8 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2"> <FaPlug /> Introduction &amp; Installation</h2>

                {/* Starter Code */}
                <a
                    href={schedule[9].homework?.starter}
                    className="flex justify-center items-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-lg font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-red-300 w-1/2 my-4 cursor-pointer mx-auto"
                >
                    Starter Code
                </a>

                {/* Blog */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Premise</h3>
                    <p className="ml-4">
                        Imagine you are a web developer for a tiny startup called "PennBlog". You have already written some backend code for the functionality of a blogging platform, and the frontend team has just handed you the frontend code for this application (your starter code). Your manager has tasked you with connecting the frontend to your backend, and making any necessary updates to your backend to make sure the frontend works properly.
                    </p>
                    <p className="ml-4">
                        At the end of the day, your blogging platform must meet the following requirements:
                    </p>
                    <ul className="text-lg ml-12 list-disc">
                        <li>Users can create accounts and login to the system</li>
                        <li>Each user is tied to a singular blog and profile</li>
                        <li>Users can view the blogs of all other users on the platform</li>
                        <li>Users can create, edit, and delete their own blog posts</li>
                        <li>Users can view comments on their blog posts and add comments to other users' posts</li>
                        <li>Users can delete comments on their own posts</li>
                    </ul>
                </section>

                {/* Files */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Files</h3>
                    <p className="ml-4">
                        Your starter code for this homework includes the most of the frontend code and configurations you need.
                        Upon installing the starter code for this project, you should have the following files:
                    </p>
                    <ul className="text-lg ml-12 list-disc">
                        <li>A <span className='inline-code'>client</span> folder containing a React/Vite project</li>
                        <li>An empty <span className='inline-code'>server</span> folder to import your backend code</li>
                        <li>A <span className='inline-code'>package.json</span> with a <span className='inline-code'>concurrently</span> script</li>
                    </ul>  
                    <p className='ml-4'>
                        You should import your backend code into the <span className='inline-code'>server</span> folder. This homework is written the expectation that you have already completed homework 6, so you should have all the necessary backend code already written to just import into this starter code. You may need to make some updates to your backend code to make sure it works with the provided frontend, but you should not need to change too much of your existing code. The main focus of this homework is connecting your backend to a frontend, so you should try to reuse as much of your existing code as possible while making the necessary adjustments to work with the frontend.
                    </p>
                    <p className='ml-4'>
                        Since we have both a frontend and a backend to this application, you'll need to install the dependencies on both the frontend and the backend for this application to work. The common practice for this is to have a <span className='inline-code'>package.json</span> file in both the root directory (which contains scripts to run both the frontend and backend concurrently), and a <span className='inline-code'>package.json</span> file in both the <span className='inline-code'>client</span> and <span className='inline-code'>server</span> folders that contain the dependencies for each side of the application. Make sure to run <span className='inline-code'>npm install</span> in both the root directory, and within the <span className='inline-code'>client</span> and <span className='inline-code'>server</span> folders to install all necessary dependencies.
                    </p>
                    <p className='ml-4'>
                        The root directory contains a singular dependency, <span className='inline-code'>concurrently</span>, which allows you to run both the frontend and backend at the same time with a single command. This makes it much more convenient to work with a full stack application, as you can start both the frontend and backend with a single command. For development of this project, run <span className='inline-code'>npm run dev</span> from the root directory after installing all your dependencies, and this should start 2 localhosts to host your frontend and backend within the same terminal.
                    </p>
                    <div className='red-block'>
                        <h4 className='flex-center gap-2 text-2xl font-bold'>NOTE: Installation</h4>
                        <p className='ml-4'>
                            There is an incompatibility warning at the moment when you install the frontend of this application (tailwindcss/vite has not updated for Vite 8.0). You may install the frontend with the flag --force (<span className='inline-code'>npm install --force</span>). This should work properly and allow you to install the frontend dependencies, but you may see some warnings in your terminal about peer dependencies. This is a known issue with the current version of Vite and the tailwindcss/vite plugin, and should not cause any issues with the functionality of the application.
                        </p>
                    </div>
                </section>
            </section>

            {/* Instructions */}
            <section className="space-y-8 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2"><FaClipboardList />Instructions</h2>

                {/* Part 0 */}
                <section id="zero" className='scroll-mt-48 space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Part 0: Import your Backend and Run the App</h3>
                    <p className="ml-4">
                        First, you should check that your fullstack application runs properly with the provided frontend and your existing backend code. Start by importing your backend code into the <span className='inline-code'>server</span> folder of the starter code. You can use the same Redis Cloud database and environment variables that you set up for homework 6 for this assignment as well.
                    </p>
                    <p className="ml-4">
                        Next, you'll need to add CORS configuration to your backend to allow your frontend to make requests to it. Since your frontend and backend will be hosted on different localhosts, you will need to set up CORS in your backend to allow requests from the frontend's localhost. We've provided the <span className='inline-code'>cors</span> package in the backend dependencies, so you should use this package to set up CORS in your backend. Import CORS into your main server file and add the following line:
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
                        >{`app.use(cors({ origin: 'http://localhost:5173', credentials: true }));`}</SyntaxHighlighter>
                    </div>
                    <p className="ml-4">
                        Once you've installed your backend and installed the dependencies for the frontend, run the command <span className='inline-code'>npm run dev</span> from the root directory to start both the frontend and backend concurrently. This should start two local servers, one for the frontend and one for the backend. The frontend should be hosted on <span className='inline-code'>localhost:5173</span> and the backend should be hosted on <span className='inline-code'>localhost:3000</span>. Check that you can access both the frontend and backend in your browser/postman, and that there are no errors in your terminal. If you run into any issues with this, make sure to check that your environment variables are set up correctly, and that your backend code is properly imported into the <span className='inline-code'>server</span> folder. 
                    </p>
                    <p className="ml-4">
                        If everything is properly installed, your frontend should look like the following picture, at the homepage of the application:
                    </p>
                    <Image src={hw7_1} alt="Homepage screenshot" />
                </section>

                <hr></hr>

                {/* Part 1 */}
                <section id="one" className='scroll-mt-48 space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Part 1: Routing</h3>
                    <pre className='red-block ml-4 my-4'>
                        <b>Files</b>: <span className='inline-code'>App.tsx</span>
                    </pre>
                    <p className="ml-4">
                        You'll notice that your provided <span className='inline-code'>App.tsx</span> has a React Router from <span className='inline-code'>react-router-dom</span> set up for you. However, the only route provided is the Home route ("/"), which just shows a welcome message. The rest of the routes for this application are not set up yet, and you will need to add these routes to the frontend to connect it to your backend. You should add the following routes to the frontend:
                    </p>
                    <ul className="text-lg ml-12 list-disc">
                        <li><span className='inline-code'>/register</span>, going to the page <span className='inline-code'>{`<Register / >`}</span></li>
                        <li><span className='inline-code'>/login</span>, going to the page <span className='inline-code'>{`<Login / >`}</span></li>
                        <li><span className='inline-code'>/profile</span>, going to the page <span className='inline-code'>{`<Profile / >`}</span></li>
                        <li><span className='inline-code'>/posts/:user</span>, going to the page <span className='inline-code'>{`<Posts / >`}</span></li>
                        <li><span className='inline-code'>/posts/:user/:id</span>, going to the page <span className='inline-code'>{`<PostDetail / >`}</span></li>
                    </ul>
                    <p className='ml-4'>
                        Each of these pages should direct to a different component provided in the starter code as shown above. Make sure to test a few of these routes to be sure that they work properly. The Navbar directs to the registration and login pages initially, but you can also test the profile to see that it shows nothing if you are not logged in. (a normal user would not be allowed to access that page without logging in first)
                    </p>
                </section>

                <hr></hr>

                {/* Part 2 */}
                <section id="two" className='scroll-mt-48 space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Part 2: Registration, Login, and Home</h3>
                    <pre className='red-block ml-4 my-4'>
                        <b>Files</b>: <span className='inline-code'>Login.tsx</span>, <span className='inline-code'>Register.tsx</span>, <span className='inline-code'>Home.tsx</span>
                    </pre>
                    <p className='ml-4'>
                        Implement the login and registration features in their respective pages. The starter files have provided you the user interface and components for these pages already, so you just need to fill in the TODOs on each of the pages with connections to the backend. 
                    </p>
                    <p className='ml-4'>
                        For the registration page, you should connect the form to the backend route for registration that you created in homework 6. When a user fills out the registration form and submits it, it should send a request to your backend to create a new user with the provided information. Make sure to handle any errors that may occur during registration (such as username already taken) and display appropriate error messages to the user (on the frontend, not just in the console!). Upon registration, a success message should be shown and the user should be redirected to the login page. Use the provided <span className='inline-code'>navigate</span> function from useNavigate to redirect the user after successful registration.
                    </p>
                    <p className='ml-4'>
                        Similarly for login, you should connect the login form to the backend route for login. Login also involves attaching the JWT token and the current user's username to temporary session cookies. Pay attention to the documention, as you will need to set certain flags in the cookies and set an expiration time for the cookies. Upon successful login, the user should be redirected to the home page.
                    </p>
                    <p className='ml-4'>
                        Test the login and registration features. You should be able to make multiple accounts easily, and then log out of them with the navbar button that shows up. If you don't see new navbar buttons, this means that your JWT token in your cookie has been set incorrectly! Check <span className='inline-code'>util.ts</span> for some helper functions that check for the presence of the JWT token in the cookies, and use these functions to debug your login functionality if you run into any issues. (You'll also find them useful later on!)
                    </p>
                    <p className='ml-4'>
                        Once your are satisfied with your login and registration functionality, implement the homepage TODOs. These TODOs will involve populating the homepage with the blogs available in the database. Each user can only have 1 blog, so this is also a representation of the users in the database. The current logged in user's blog should be displayed on top, while the rest of the blogs should be displayed below (excluding the current user). 
                    </p>
                    <p className='ml-4'>
                        For this home page, you will need an extra route in your backend to get all the blogs in the database (Get /blogs or something like that). This route should query the database for all the blogs, and return them to the frontend to be displayed on the homepage. Make sure to test this route in postman and on the frontend to ensure that it works properly and displays the blogs as expected.
                    </p>
                </section>

                <hr></hr>

                {/* Part 3 */}
                <section id="three" className='scroll-mt-48 space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Part 3: Profile, Posts, and Post Details</h3>
                    <pre className='red-block ml-4 my-4'>
                        <b>Files</b>: <span className='inline-code'>Profile.tsx</span>, <span className='inline-code'>Posts.tsx</span>, <span className='inline-code'>PostsDetails.tsx</span>
                    </pre>
                    <p className="ml-4">
                        Now that basic authentication is working and you can see the blogs on the homepage, it's time to implement the core functionality of the blogging platform, which is creating, editing, and deleting blog posts. The profile page is where a user can view and edit their own profile information (such as their display name and bio), while the posts page is where a user can view all the posts for a specific user, and the post details page is where a user can view the details of a specific post and edit or delete that post if it's their own. Implement the TODOs for each of these features in their respective pages.
                    </p>
                    <p className='ml-4'>
                        It may be helpful to see how each of these pages are connected to the components they use, for the sake of seeing how data is being passed down and displayed. While we don't require you to edit anything in the <span className='inline-code'>components</span> folder, understanding their structure can help you implement the features more effectively.
                    </p>
                    <p className='ml-4'>
                        Additionally, pay close attention to the provided states and parameters in the starter code. If a state is defined, it will likely get used somewhere in within the code to update a frontend component! 
                    </p>
                    <p className='ml-4'>
                        At the end of this process, you should have a fully functional blogging platform! Refer to the video demo below to see and example of all of the features of this app that you will need to implement. 
                    </p>
                    <div className="flex justify-center my-4">
                        <iframe
                            src="https://drive.google.com/file/d/1WVMcDRGJ3MDqgYnZ1XM6YQCFwblHUw7x/view?usp=sharing"
                            width="640"
                            height="360"
                            allowFullScreen
                            title="Google Drive Video Demo"
                        ></iframe>
                    </div>
                </section>

                <hr></hr>
                
                {/* Part 4 */}
                <section id="four" className='scroll-mt-48 space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Part 4: Reflection Questions</h3>
                    <p className="ml-4">
                        For the final part of this assignment, you'll be writing a reflection on the security and optimization features of this application. The design of this application on the frontend was intentionally made to reflect certain web vulnerabilities and optimization issues. Additionally, we did not require you to update much of the backend for this assignment.
                    </p>
                    <p className='ml-4'>
                        Within your README file (questions provided within the starter code), you will answer the following questions:
                    </p>
                    <ul className="text-lg ml-12 list-disc">
                        <li>What security vulnerabilities may be present in this application? How would you go about fixing these vulnerabilities? Please be specific as to what feature may be causing the vulnerability, how an attacker may exploit it, and what steps you would take to mitigate the risk.</li>
                        <li> What are some possible optimization and UI/UX issues, either in the current backend and frontend code? Given time, would you design the frontend or backend any differently to improve them? If applicable, describe any changes you've already made to them in your final submission.</li>
                        <li>Imagine you want to deploy this application. Research and describe a possible plan to deploy this application efficiently. This can involve considerations such as refactoring the code to different frameworks or considering the architecture of different deployment environments as well. </li>
                    </ul>
                    <p className='ml-4'>
                        You don't need to write a formal essay for each question, but we are looking for thoughtful and detailed responses that show that you have a good understanding of security, optimization, and deployment considerations for this app.
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
                        Before you submit, make sure you lint your code for style errors using the command <span className='inline-code'>npm run lint</span>. You should run each of the linters for both the frontend and backend separately to check for any linting errors. 
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