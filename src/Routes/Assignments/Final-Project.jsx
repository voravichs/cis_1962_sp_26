import { useEffect } from 'react';
import Navbar from '../../Components/Navbar'
import SideNav from '../../Components/SideNav';
import { VscDebugStart } from "react-icons/vsc";
import { FaGrinStars, FaPlug, FaRobot, FaClipboardList } from "react-icons/fa";
import { MdGrade } from "react-icons/md";

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
    id: "extra",
    icon: <FaGrinStars className="inline-block text-3xl" />
  },
  {
    id: "submission",
    icon: <MdGrade className="inline-block text-3xl" />
  },
  {
    id: "suggestions",
    icon: <FaPlug className="inline-block text-3xl" />
  }
];

function FinalProject() {
  useEffect(() => {
        document.title = 'Final Project | CIS 1962';
    }, []);

  return (
    <div className="main-bg-light min-h-screen pt-16 pb-24 flex flex-col items-center gap-16 ah-font">
      <Navbar/>
      
      {/* Side Nav */}
      <SideNav sections={SECTIONS}/>
      
      <div className="max-w-4xl mx-auto px-4 py-10 pt-10 sm:pt-14 md:pt-16 text-lg">
        {/* Title */}
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Final Project</h1>
        <h3 className='text-lg sm:text-xl md:text-2xl opacity-60'>Proposal: Due November 17th</h3>
        <h3 className='text-lg sm:text-xl md:text-2xl opacity-60'>Milestone 1: Due November 24th</h3>
        <h3 className='text-lg sm:text-xl md:text-2xl opacity-60'>Milestone 2: Due December 1st</h3>
        <h3 className='text-lg sm:text-xl md:text-2xl opacity-60'>Presentations: Due December 8th</h3>
        <h3 className='text-lg sm:text-xl md:text-2xl opacity-60 mb-8'>Final Deadline: Due December 11th</h3>

        {/* Intro Text */}
        <section className="mb-8 text-gray-800">
          <p className="mb-4">
            Your final project for CIS 1962 will be a culmination of all that you learned within this course. This will be an full-stack open-ended project that must include a front-end and back-end component, but otherwise is an opportunity to apply what you learned in a creative way to make something cool! You can use what you've learned in this class, or do a deep dive into new technologies, frameworks, or libraries to create something truly unique. 
          </p>
          <p className="mb-4">
            There are a few deadlines to keep track track of: a proposal will be due a week after this final project is announced, on November 10th. A short milestone check-in will be due November 24th to check in on your progress towards completing the final project. Then, we will present your projects in class during our final scheduled class on December 8th. Your final submission will be due on December 11th. <b>All submissions will be done through Canvas assignments, either as text documents or a link to your final GitHub repo. </b> 
          </p>
          <p className="mb-4">
            Please be mindful of the final due date: <b>This is a hard deadline that is non-negotiable and late submissions will not be acccepted. Plan accordingly!</b>
          </p>
          <p className="mb-4">
            This project is intended to be done <b>solo</b> or as a <b>pair</b>. You will indicate this to us during your project proposals. Feel free to use Ed Discussion to find a group member if you desire for your project ideas. You will be submitting your final project as a GitHub repo, so make sure you familiarize yourself with GitHub collaboration techniques like pull requests, code reviews, and branches if you intend to work in a group. <b>Only 1 student of a pair has to submit for the group for all assignments.</b>
          </p>
        </section>

        {/* Proposal */}
        <section id="proposal" className="mb-8 scroll-mt-28 text-gray-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"><VscDebugStart />Proposal</h2>

          <p className="mb-4">
            Before you begin your project, we would like to gauge what kinds of project you would like to do. We would like a clear and consise description of what your project will provide for users, and a rough idea of the technologies and tech stack you will use for the final project (Express, React, Vite, MongoDB, etc.). You are welcome to include topics we haven't yet or will not discuss in this course, as this project is a chance to explore new ideas and technologies in JavaScript.
          </p>
          <p className="mb-4">
            You will submit your proposal as a text document responding to the below questions to Canvas:
          </p>
          <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
            <li>Are you working solo or as a pair? If you are working as a pair, who are the group members?</li>
            <li>Write a pitch for your final project. This should include a clear description of the project's goals and what it will provide for users, and a short description of the important technologies/libraries used in the tech stack for the project.</li>
            <li>Include your goals for what you would like to be done with before the schedule milestone check-ins. For these milestones, you should consider prioritizing the back-end functionality first before the front-end, but it is up to you to pace yourself and hold yourself to your own scheduled goals.</li>
            <li>If you intend to use unique, new technologies we will not discuss in this course (see Extra Credit section), include them within your proposal so that we can verify whether or not it will count for extra credit!</li>
          </ul>  
          <p className="mb-4">
           After submitting your proposals, we will return to you with feedback on them promptly. You are free to start working on them or setting up your projects beforehand, so long as your project scope will fall within our rubric specifications and you do not get an outright rejection of your proposal from the instructors.
          </p>
        </section>

        {/* Milestones */}
        <section id="milestones" className="mb-8 scroll-mt-28 text-gray-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"><FaClipboardList />Milestones</h2>
          <p className="mb-4">
            It is important to pace yourself and give yourself enough time to develop and research new technologies for this final project. This is why we've explicitly required two milestone check-ins and for you to schedule your goals for them in advance in the proposal.
          </p>
          <p className="mb-4">
            You will submit your milestones as a text document responding to the below questions to Canvas:
          </p>
          <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
            <li>Have you met your goals for this milestone that you defined in your proposal?</li>
            <li>Describe any setbacks and challenges you are facing at this moment in the project, either related to this milestone or otherwise.</li>
            <li>At this point in time, are you on track to completing this final project in the alloted time?</li>
          </ul>
        </section>

        {/* Extra Credit */}
        <section id="extra" className="mb-8 scroll-mt-28 text-gray-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"><FaGrinStars />Extra Credit</h2>
          <p className="mb-4">
            You can gain up to 30% extra credit on this final project, usable for the grade of this project or applied to lost points in previous homework grades. We will award 10% extra credit for each unique, new techonology you use that is not covered in this course. These technologies should be substantial libraries or frameworks that add significant functionality to the app. For instance, a small library like <span className='inline-code'>react-hot-toast</span> won't be applicable.
          </p>
          <p className="mb-4">
            Some ideas for technologies include:
          </p>
          <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
            <li><a href='https://threejs.org/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Three.js</a> for 3D</li>
            <li><a href='https://motion.dev/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Framer Motion</a> or <a href='https://www.react-spring.dev/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">React Spring</a> for animations</li>
            <li><a href='https://github.com/jaredhanson/passport' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Passport.js</a> for validation</li>
            <li><a href='https://www.prisma.io/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Prisma</a> or <a href='https://orm.drizzle.team/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Drizzle</a> for database interactions</li>
            <li><a href='https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">WebSockets</a> or <a href='https://socket.io/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Socket.io</a> for real time communication/live data/multiplayer</li>
            <li>AI applications that make use of libraries like <a href='https://github.com/openai/openai-node' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">openai-node</a> or <a href='https://github.com/anthropics/anthropic-sdk-typescript' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">anthropic-sdk-typescript</a> must have a novel use other than a chatbot (which we already did in homework 2!) Points will not be given for just connecting to an API and returning chat responses, consider prompt engineering, fine tuning, computer vision/images, or other AI integrations.</li>
            <li>We will NOT count any UI libraries or frameworks for extra credit. We will <b>highly</b> encourage you to use one throughout your app to expedite front-end development. A list of these libraries is available in the Resources section of this page.</li>
          </ul> 
        </section>

        {/* Rubric */}
        <section id="submission" className="mb-8 scroll-mt-28 text-gray-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"> <MdGrade />Rubric</h2>

          <p className="mb-4">
            All final projects will be graded with the same rubric, with 4 sections. In total, you can get up to 13 points - and we're hoping everyone can get all 13! Below you can see the requirements for getting points in each section.
          </p>

          {/* Rubric */}
          <section className='mb-12 pl-3 grid grid-cols-2 gap-6 py-8'>
            <div className="rounded-xl bg-white shadow-md p-8 flex flex-col gap-4 items-center">
              <div className="mb-2">
                <h4 className='font-bold'>[3 pts] Backend</h4>
                <ul className="text-lg mb-4 ml-6 list-decimal text-gray-900">
                  <li>Backend has some API routes working but mostly not working</li>
                  <li>Backend has most API routes working and database is connected</li>
                  <li>Backend has all desired API routes working, clean middleware, and robust authentication</li>
                </ul>  
              </div>

              <p className='blue-block'>
                <p className='mb-2'>Authentication and database are optional if your project is otherwise sufficiently complex. Please clarify if this is the case in your proposal.</p>
              </p>  
            </div>
            
            <div className="rounded-xl bg-white shadow-md p-8 flex flex-col gap-4 items-center">
              <div className="mb-2">
                <h4 className='font-bold'>[3 pts] Front-end</h4>
                <ul className="text-lg mb-4 ml-6 list-decimal text-gray-900">
                  <li>Frontend does not work as intended - the app is unusable</li>
                  <li>Frontend mostly works, with some bugs if doing things too quickly</li>
                  <li>Frontend is not breakable by normal users, has customized styling, has some form of routing, and uses React/other framework best practices</li>
                </ul>  
              </div>

              <p className='blue-block'>
                <p className='mb-2'>Customized styling and routing are optional if your project is otherwise sufficiently complex. Please clarify if this is the case in your proposal.</p>
              </p>
            </div>
            
            <div className="rounded-xl bg-white shadow-md p-8 flex flex-col gap-4 items-center">
              <div className="mb-2">
                <h4 className='font-bold'><b>[3 pts]</b> Full-Stack: Frontend + backend communication</h4>
                <ul className="text-lg mb-4 ml-6 list-decimal text-gray-900">
                  <li>Frontend and backend do not connect correctly</li>
                  <li>Full stack working but some minor bugs here and there that regular users could encounter</li>
                  <li>Seamless full-stack functionality, not noticeable for regular users</li>
                </ul>  
              </div>
            </div>
            
            <div className="rounded-xl bg-white shadow-md p-8 flex flex-col gap-4 items-center">
              <div className="mb-2">
                <h4 className='font-bold'><b>[4 pts]</b> Personal project goals + Submission</h4>
                <ul className="text-lg mb-4 ml-6 list-decimal text-gray-900">
                  <li>Did not submit any milestones, version control not used or used improperly</li>
                  <li>Submitted milestone 1</li>
                  <li>Submitted milestone 1 & 2</li>
                  <li>Submitted milestone 1 & 2, used proper version control in the final submission, and project achieved goals set up in the project proposal.</li>
                </ul>  
              </div>
            </div>
          </section>
        </section>

        {/* Suggestions and Resources */}
        <section id="suggestions" className="mb-8 scroll-mt-28 text-gray-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-4 flex gap-2"> <FaPlug />Suggestions and Resources</h2>

          {/* Examples */}
          <section>
            <h3 className='text-lg sm:text-xl md:text-2xl font-bold'>Proposal Examples</h3>
            <div className="grid grid-cols-2 gap-6 py-8">
              <div className="rounded-xl bg-white shadow-md p-8 flex flex-col gap-4 items-center">
                <h4 className="text-2xl font-semibold text-gray-700">♟️3D Checkers</h4>
                <p>A web app that lets you play checkers against other players online, asynchronously. Uses react-three-fiber for 3D rendering. Uses NextJS for full-stack functionality, connected to a MongoDB database with users and live/previous games tracked.</p>
                <ul className='list-disc ml-4'>
                  <li> Milestone 1: backend doing game state logic, with routes to act as game actions</li>
                  <li> Milestone 2: frontend scaffold built and mostly working with backend </li>
                </ul>
                <p><b>New tech:</b></p>
                <ul className='list-disc ml-4'>
                  <li> TRPC for API routes (+10% extra credit) </li>
                  <li> react-three-fiber for 3D rendering (+10% extra credit) </li>
                </ul>
              </div>
              <div className="rounded-xl bg-white shadow-md p-8 flex flex-col gap-4 items-center">
                <h4 className="text-2xl font-semibold text-gray-700">🐦 Mini-Twitter</h4>
                <p>Fake twitter! A social media platform allowing users to make their own "posts," follow other users to see a feed of their "posts," @ other users to notify them, and "quote post" other "posts". Uses an express backend that connects to a PostgreSQL database, and a client-side-routed frontend built using Vite.</p>
                <ul className='list-disc ml-4'>
                  <li> Milestone 1: backend routes with authentication completed</li>
                  <li> Milestone 2: frontend works with the backend and the site is well-formatted </li>
                </ul>
              </div>
              <div className="rounded-xl bg-white shadow-md p-8 flex flex-col gap-4 items-center">
                <h4 className="text-2xl font-semibold text-gray-700">🎭 GPT Comedian</h4>
                <p>The next FLUFFY (best comedian) that automatically makes funny jokes and holds wildly entertaining conversations. (NOTE: MAY NOT BE TRUTHFUL.) Uses OpenAI for GPT-4 API routes with Fastify backend + NextJS frontend.</p>
                <ul className='list-disc ml-4'>
                  <li> Milestone 1: routes are able to connect/respond with large language model(s) with desired comedic behavior </li>
                  <li> Milestone 2: frontend dashboard to display LLM routes (bonus points if streaming) and styling complete </li>
                </ul>
                <p><b>New tech:</b> GPT API (+10% extra credit)</p>
              </div>
              <div className="rounded-xl bg-white shadow-md p-8 flex flex-col gap-4 items-center">
                <h4 className="text-2xl font-semibold text-gray-700">🌤️ Weather App</h4>
                <p>Accurate weather app for the Philadelphia area that provides warnings for emergency services and otherwise daily, helpful weather news. Uses Chart.js on a Remix frontend to display weather data and a Meteor with Meteor MongoDB to hold the weather data with daily cron jobs and hooks to collect weather info.</p>
                <ul className='list-disc ml-4'>
                  <li> Milestone 1: backend communicates with National Weather Service API and regularly stores data using a cron job to trigger a scrape every hour </li>
                  <li> Milestone 2: frontend displays recent weather data and displays graphs of information </li>
                </ul>
              </div>
              <div className="rounded-xl bg-white shadow-md p-8 flex flex-col gap-4 items-center">
                <h4 className="text-2xl font-semibold text-gray-700">🛒 Marketplace</h4>
                <p>Friendly neighborhood Amazon that allows sellers and buyers to easily exchange goods and services with low costs. Uses Vite + React (with Redux) & Express.js with a MySQL database to hold information about groceries and prices as well as session data for user carts.</p>
                <ul className='list-disc ml-4'>
                  <li> Milestone 1: backend has cart for each user and holds data regarding the items available for purchase including quantity and price </li>
                  <li> Milestone 2: nice shopping UI that has pages for every aspect of the online shopping experience </li>
                </ul>
              </div>
            </div>  
          </section>

          {/* Resources */}
          <section>
            <h3 className='text-lg sm:text-xl md:text-2xl font-bold'>Resources and Libraries</h3>
            <div className="grid grid-cols-2 gap-6 py-8">
              <div>
                <h4 className="text-2xl font-semibold text-gray-700">Utility-First CSS Libraries</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li>❤️<a href='https://tailwindcss.com/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">TailwindCSS</a></li>
                  <li><a href='https://emotion.sh/docs/introduction' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Emotion</a></li>
                  <li><a href='https://unocss.dev/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">UnoCSS</a></li>
                  <li><a href='https://windicss.org/guide/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">WindiCSS</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-gray-700">CSS-In-JS</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li><a href='https://styled-components.com/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">styled-components</a></li>
                  <li><a href='https://vanilla-extract.style/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">vanilla-extract</a></li>
                  <li><a href='https://stitches.dev/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Stitches</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-gray-700">CSS Libraries</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li><a href='https://getbootstrap.com/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Bootstrap</a></li>
                  <li><a href='https://bulma.io/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Bulma</a></li>
                  <li><a href='https://get.foundation/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Foundation</a></li>
                  <li><a href='https://semantic-ui.com/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Semantic UI</a></li>
                  <li><a href='https://materializecss.com/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Materialize</a></li>
                  <li><a href='https://www.skeleton.dev/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Skeleton</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-gray-700">React UI Libraries</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li><a href='https://mui.com/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Material UI</a></li>
                  <li><a href='https://react-bootstrap.netlify.app/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">React Bootstrap</a></li>
                  <li><a href='https://chakra-ui.com/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Chakra UI</a></li>
                  <li><a href='https://ant.design/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Ant Design</a></li>
                </ul>
              </div>
            </div>
          </section>
          
        </section>
      </div>

      <footer className='text-sm'>This assignment was adapted from the <a href='https://javascriptclass.org/assignments/final-project' className='text-blue-700 underline' target="_blank" rel="noopener noreferrer">final project</a> from Spring 2025 CIS 1962. </footer>
    </div>
  )
}

export default FinalProject
