import SideNav from '@/components/Sidenav';
import { FaPlug, FaClipboardList, FaGrinStars} from "react-icons/fa";
import { MdGrade, MdCoPresent } from "react-icons/md";

import type { Metadata } from "next";
import { VscDebugStart } from 'react-icons/vsc';

const SECTIONS = [
  {
    id: "proposal",
    icon: <VscDebugStart className="inline-block text-3xl" />
  },
  {
    id: "milestones",
    icon: <FaClipboardList className="inline-block text-3xl" />
  },
  {
    id: "presentation",
    icon: <MdCoPresent className="inline-block text-3xl" />
  },
  {
    id: "extra",
    icon: <FaGrinStars className="inline-block text-3xl" />
  },
  {
    id: "rubric",
    icon: <MdGrade className="inline-block text-3xl" />
  },
  {
    id: "suggestions",
    icon: <FaPlug className="inline-block text-3xl" />
  }
];

export const metadata: Metadata = {
  title: "Final Project | CIS 1962",
  description: "Final Project Page of CIS 1962 for Spring 2026 at the University of Pennsylvania",
};

export default function FinalProject() {
    return (
        <div className="scroll-mt-48 max-w-5xl mx-auto text-lg text-black dark:text-white">      
        {/* Side Nav */}
        <SideNav sections={SECTIONS}/>
      
        <div className="mx-auto text-lg">
            {/* Title */}
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Final Project</h1>
            <h3 className='text-lg sm:text-xl md:text-2xl opacity-60'>Proposal: Due April 2nd</h3>
            <h3 className='text-lg sm:text-xl md:text-2xl opacity-60'>Milestone 1: Due April 16th</h3>
            <h3 className='text-lg sm:text-xl md:text-2xl opacity-60'>Milestone 2: Due April 23rd</h3>
            <h3 className='text-lg sm:text-xl md:text-2xl opacity-60'>Presentations: Due April 23rd</h3>
            <h3 className='text-lg sm:text-xl md:text-2xl opacity-60 mb-8'>Final Deadline: Due May 4th</h3>

            {/* Intro Text */}
            <section className="space-y-4 mb-8">
                <p className="ml-4">
                    Your final project for CIS 1962 will be a culmination of all that you learned within this course. This will be an full-stack open-ended project that must include a front-end and back-end component with deployment at the end, but otherwise is an opportunity to apply what you learned in a creative way to make something cool! You can use what you've learned in this class, or do a deep dive into new technologies, frameworks, or libraries to create something truly unique. 
                </p>
                <p className="ml-4">
                    There are a few deadlines to keep track track of: a proposal will be due a week after this final project is announced, on April 2nd. Short milestone check-ins will be due April 16th and April 23rd to check in on your progress towards completing the final project. Then, we will present your projects in class during our final scheduled class on April 23rd. Your final submission will be due on May 4th (a day after reading days). <span className='red-bold'>All submissions will be done through Canvas assignments, either as text documents or a link to your final GitHub repo. </span>
                </p>
                <p className="ml-4">
                    This project is intended to be done <span className='red-bold'>solo</span> or as a <span className='red-bold'>pair</span>. You will indicate this to us during your project proposals. Feel free to use Ed Discussion to find a group member if you desire for your project ideas. You will be submitting your final project as a GitHub repo, so make sure you familiarize yourself with GitHub collaboration techniques like pull requests, code reviews, and branches if you intend to work in a group. <span className='red-bold'>Only 1 student of a pair has to submit for the group for all assignments.</span>
                </p>
            </section>

            {/* Proposal */}
            <section id="proposal" className="scroll-mt-48 space-y-4 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2"> <VscDebugStart /> Proposal </h2>
                <p className="ml-4">
                    Before you begin your project, we would like to gauge what kinds of project you would like to do. We would like a clear and concise description of what your project will provide for users, and a rough idea of the technologies and tech stack you will use for the final project (Express, React, Vite, MongoDB, etc.), and how you plan to deploy your app at the end. You are welcome to include topics we haven't yet or will not discuss in this course, as this project is a chance to explore new ideas and technologies in JavaScript.
                </p>
                <p className="ml-4">
                    You will submit your proposal as a text document responding to the below questions to Canvas:
                </p>
                <ul className="text-lg ml-12 list-disc">
                    <li>Are you working solo or as a pair? If you are working as a pair, who are the group members?</li>
                    <li>Write a pitch for your final project. This should include a clear description of the project's goals and what it will provide for users.</li>
                    <li>Describe the tech stack for this project, including the main frontend and backend technologies you will use, and what your plan for deploying the app will be.</li>
                    <li>Include your goals for what you would like to be done with before the scheduled milestone check-ins. For these milestones, you should consider prioritizing the back-end functionality first before the front-end, but it is up to you to pace yourself and hold yourself to your own scheduled goals.</li>
                    <li>If you intend to use unique, new technologies we will not discuss in this course (see Extra Credit section), include them within your proposal so that we can verify whether or not it will count for extra credit!</li>
                </ul>  
                <p className="ml-4">
                    After submitting your proposals, we will return to you with feedback on them promptly. You are free to start working on them or setting up your projects beforehand, so long as your project scope will fall within our rubric specifications and you do not get an outright rejection of your proposal from the instructors. Please look at the provided rubric for the final project to get a better sense of what kinds of projects will be appropriate for this assignment. If you have any questions about your proposal or want to run an idea by us, please feel free to reach out to us on Ed Discussion or during office hours!
                </p>
            </section>

            {/* Milestone */}
            <section id="milestones" className="scroll-mt-48 space-y-4 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2"><FaClipboardList />Milestone</h2>
                <p className="ml-4">
                    It is important to pace yourself and give yourself enough time to develop and research new technologies for this final project. This is why we've explicitly required two milestone check-ins and for you to schedule your goals for them in advance in the proposal.
                </p>
                <p className="ml-4">
                    You will submit your milestones as a text documents responding to the below questions to Canvas:
                </p>
                <ul className="text-lg ml-12 list-disc">
                    <li>Have you met your goals for this milestone that you defined in your proposal?</li>
                    <li>Describe any setbacks and challenges you are facing at this moment in the project, either related to this milestone or otherwise.</li>
                    <li>At this point in time, are you on track to completing this final project in the alloted time?</li>
                </ul>
            </section>

            {/* Presentation */}
            <section id="presentation" className="scroll-mt-48 space-y-4 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2"><MdCoPresent />Presentation</h2>
                <p className="ml-4">
                    During our last scheduled class on April 23rd, you will be expected to present your final project to the class. This presentation should be around 5-10 minutes long and should include a demo of your project, an overview of the technologies you used, and a reflection on the development process. This is a chance to show off your hard work and creativity, and to share your project with your classmates. More details about the presentation format and expectations will be provided as we get closer to the date, including where to submit the slides for your presentation. You are expected to present in person during class, but if you have an excused absence for that day, please reach out to us and we can work something out for you to present remotely or submit a recorded presentation for the instructor.
                </p>
                <p className="ml-4">
                    Since this presentation is before the final project submission, you are not expected to have a fully polished and completed project by the time of the presentation. However, you should have a working demo that you can show to the class, and you should be able to talk about your development process and the technologies you used in a thoughtful way. This is also a chance to get feedback from your classmates and instructors on your project before the final submission, so we encourage you to be open to constructive criticism and suggestions during your presentation!
                </p>
            </section>

            {/* Extra Credit */}
            <section id="extra" className="scroll-mt-48 space-y-4 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2"><FaGrinStars />Extra Credit</h2>
                <p className="ml-4">
                    You can gain up to 30% extra credit on this final project, usable for the grade of this project or applied to lost points in previous homework grades. We will award 10% extra credit for each unique, new techonology you use that is not covered in this course. These technologies should be substantial libraries or frameworks that add significant functionality to the app. For instance, a small library like <span className='inline-code'>react-hot-toast</span> won't be applicable.
                </p>
                <p className="ml-4">
                    Some ideas for technologies include:
                </p>
                <ul className="text-lg ml-12 list-disc">
                    <li><a href='https://threejs.org/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Three.js</a> for 3D</li>
                    <li><a href='https://motion.dev/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Framer Motion</a> or <a href='https://www.react-spring.dev/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">React Spring</a> for animations</li>
                    <li><a href='https://github.com/jaredhanson/passport' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Passport.js</a> for validation</li>
                    <li><a href='https://www.prisma.io/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Prisma</a> or <a href='https://orm.drizzle.team/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Drizzle</a> for database interactions</li>
                    <li><a href='https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">WebSockets</a> or <a href='https://socket.io/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Socket.io</a> for real time communication/live data/multiplayer</li>
                    <li>AI applications that make use of libraries like <a href='https://github.com/openai/openai-node' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">openai-node</a> or <a href='https://github.com/anthropics/anthropic-sdk-typescript' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">anthropic-sdk-typescript</a> must have a novel use other than a chatbot (which we already did!) Points will not be given for just connecting to an API and returning chat responses, consider prompt engineering, fine tuning, computer vision/images, or other AI integrations.</li>
                    <li>We will NOT count any UI libraries or frameworks for extra credit. We will need to use at least one UI library for the frontend of this application, any additional will not count towards extra credit (unless there is sufficient complexity in how you plan to use them).</li>
                </ul> 
            </section>

            {/* Rubric */}
            <section id="rubric" className="scroll-mt-48 space-y-4 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2"> <MdGrade />Rubric</h2>

                <p className="ml-4">
                    All final projects will be graded with the same rubric, with 4 sections. In total, you can get up to 14 points - and we're hoping everyone can get all points! Below you can see the requirements for getting points in each section.
                </p>

                {/* Rubric */}
                <section className='mb-12 pl-3 grid grid-cols-2 gap-6 py-8 text-gray-800'>
                    <div className="rounded-xl bg-white shadow-md p-8 flex flex-col gap-4 items-center justify-center">
                        <div className="mb-2">
                            <h4 className='font-bold'>[3 pts] Backend</h4>
                            <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                                <li>Backend has working API routes that perform basic CRUD operations for the application</li>
                                <li>Backend code is cleanly organized, is well-documented, and secure (no sensitive information exposed, data is sent in secure/encrypted formats)</li>
                                <li>App has clean middleware, robust authentication, and fully functional database integration</li>
                            </ul>  
                        </div>

                        <div className='blue-block'>
                            <p className='mb-2'>Authentication and databases are optional if your project is otherwise sufficiently complex in other aspects. Please clarify if this is the case in your proposal.</p>
                        </div>  
                    </div>
                        
                    <div className="rounded-xl bg-white shadow-md p-8 flex flex-col gap-4 items-center justify-center">
                        <div className="mb-2">
                            <h4 className='font-bold'>[3 pts] Front-end</h4>
                            <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                                <li>Frontend uses at least one UI library, framework, or component library for customized styling</li>
                                <li>Frontend is a multi-page app with some form of routing, or is a sufficiently complex single-page app</li>
                                <li>Frontend follows good UI/UX practices for accessibility, is easy to navigate, and is not able to be broken by normal users.</li>
                            </ul>  
                        </div>
                    </div>
                        
                    <div className="rounded-xl bg-white shadow-md p-8 flex flex-col gap-4 items-center justify-center">
                        <div className="mb-2">
                            <h4 className='font-bold'><b>[3 pts]</b> Full-Stack & Deployment</h4>
                            <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                                <li>Frontend and backend connect seamlessly without bugs</li>
                                <li>App is deployed to a production environment at an accessible URL</li>
                                <li>Users are able to interact with the app at the deployed URL for the intended functionality of the app without encountering errors or issues</li>
                            </ul>  
                        </div>
                    </div>
                        
                    <div className="rounded-xl bg-white shadow-md p-8 flex flex-col gap-4 items-center justify-center">
                        <div className="mb-2">
                            <h4 className='font-bold'><b>[5 pts]</b> Project Goals + Submission</h4>
                            <ul className="text-lg mb-4 ml-6 list-decimal text-gray-900">
                                <li>Submitted Proposal by April 2nd</li>
                                <li>Submitted milestone 1 by April 16th</li>
                                <li>Submitted milestone 2 by April 23rd</li>
                                <li>Presented a final project during class on April 23rd</li>
                                <li>Submitted the final project code by April 29th</li>
                            </ul>  
                        </div>
                    </div>
                </section>
            </section>

            {/* Submission */}
            <section id="suggestions" className="scroll-mt-48 space-y-8 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-4 flex gap-2"> <FaPlug />Suggestions</h2>

                <p className="ml-4">
                    This is a selection of approved proposals and various project ideas to help inspire you for your final project! These are truncated versions of proposals, so please use these as a reference but go into more detail in your own proposals so we can understand your project and give you feedback on it.
                </p>

                {/* Examples */}
                <section className='text-gray-800'>
                    <div className="grid grid-cols-2 gap-6 py-8">
                        <div className="rounded-xl bg-white shadow-md p-8 flex flex-col gap-4">
                            <h4 className="text-2xl font-semibold text-gray-700 text-center">FridgeFriend</h4>
                            <p>FridgeFriend is here to simplify your kitchen experience by providing a seamless platform to organize your groceries, monitor your fridge inventory, and explore delightful culinary possibilities.</p>
                            <p><b>Tech Stack:</b> React + React Router, Express, MongoDB + Mongoose</p>
                            <ul className='list-disc ml-4'>
                                <li> Milestone 1: Backend API and basic frontend</li>
                                <li> Milestone 2: Complete Frontend Components </li>
                            </ul>
                            <p><b>New tech:</b></p>
                            <ul className='list-disc ml-4'>
                                <li> AI Image analysis to suggest items based on uploaded images (+10% extra credit) </li>
                            </ul>
                        </div>
                        <div className="rounded-xl bg-white shadow-md p-8 flex flex-col gap-4">
                            <h4 className="text-2xl font-semibold text-gray-700 text-center">Trivia Website</h4>
                            <p>A trivia website that allows users to improve their general knowledge by answering trivia questions. They’ll be able to type answers to random trivia questions that pop up. There’ll also be a leaderboard for both accuracy and number of questions answered. Some additional features could be categorizing questions based on topic/difficulty using NLP techniques.</p>
                            <p><b>Tech Stack:</b> Postgres, ExpressJS, and React</p>
                            <ul className='list-disc ml-4'>
                                <li> Milestone 1: All backend routes and question categorization logic</li>
                                <li> Milestone 2: Complete frontend components and integrate with backend </li>
                            </ul>
                            <p><b>New tech:</b></p>
                            <ul className='list-disc ml-4'>
                                <li> Prisma ORM (+10% extra credit) </li>
                                <li> AI/NLP to categorize questions (+10% extra credit) </li>
                            </ul>
                        </div>
                        <div className="rounded-xl bg-white shadow-md p-8 flex flex-col gap-4">
                            <h4 className="text-2xl font-semibold text-gray-700 text-center">3D Snake</h4>
                            <p>A web app that lets you play a multiplayer, head-to-head game of 3D Snake.</p>
                            <p><b>Tech Stack:</b> Three.js, socket.io, PostgreSQL, Prisma</p>
                            <ul className='list-disc ml-4'>
                                <li> Milestone 1: Backend + socket.io </li>
                                <li> Milestone 2: Frontend and Three.js integration </li>
                            </ul>
                            <p><b>New tech:</b></p>
                            <ul className='list-disc ml-4'>
                                <li> Three.js for rendering of game (+10% extra credit) </li>
                                <li> Socket.io for real-time multiplayer (+10%) (+10% extra credit) </li>
                                <li> Prisma for database interactions (+10% extra credit) </li>
                            </ul>
                        </div>
                        <div className="rounded-xl bg-white shadow-md p-8 flex flex-col gap-4">
                            <h4 className="text-2xl font-semibold text-gray-700">VidToScore</h4>
                            <p>A web application that extracts musical scores or sheet music from video content and converts them into a downloadable PDF format. Includes Youtube video URL input and preview, a video editor interface, frame extraction, and PDF generation/download functionality.</p>
                            <p><b>Tech Stack:</b> React, Python/Flask</p>
                            <ul className='list-disc ml-4'>
                                <li> Milestone 1: Backend Video Processing </li>
                                <li> Milestone 2: Frontend Core Interface </li>
                            </ul>
                            <p><b>New tech:</b></p>
                            <ul className='list-disc ml-4'>
                                <li> Flask Backend (+10% extra credit) </li>
                            </ul>
                        </div>
                    </div>  
                </section>
            </section>
        </div>
    </div>
  )
}