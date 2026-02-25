import SideNav from '@/components/Sidenav';
import { FaGithub, FaPlug, FaClipboardList, FaPython} from "react-icons/fa";
// import DogCarousel from '@/components/DogCarousel';
import ModalDemo from '@/components/demos/ModalDemo';
import Image from 'next/image';
import hw5_1 from '@/assets/hw5-1.png';
import hw5_2 from '@/assets/hw5-2.png';
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
  title: "HW5 | CIS 1962",
  description: "Homework 5 Page of CIS 1962 for Spring 2026 at the University of Pennsylvania",
};

export default function HW5() {
    return (
        <div className="scroll-mt-48 max-w-5xl mx-auto text-lg text-black dark:text-white">      
        {/* Side Nav */}
        <SideNav sections={SECTIONS}/>
      
        <div className="mx-auto text-lg">
            {/* Title */}
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Homework 5: Pokedex</h1>
            <h3 className='text-lg sm:text-xl md:text-2xl opacity-60 mb-4'>Due March 5th at 11:59 PM</h3>

            <div className='red-block font-mono'><span className='font-bold'>Topics:</span> Frontend, React props, React States, Modals, Pagination, Search</div>

            {/* Intro Text */}
            <section className="space-y-8 mb-8">
                <p className="ml-4">
                   This homework will be a chance for you to work with the React library to build a simplified Pokedex of the first 151 Pokémon! Like homework 3, this will primarily be a front-end focused homework- you will be working with a provided API to retrieve data about the Pokémon and display it in your React app, but you won't have to worry about building the backend for this homework. This homework will be a fun opportunity for you to practice working with React props, as well as implementing some common frontend features such as modals, pagination, and search bars.
                </p>
                <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Assignment Goals</h3>
                <ul className="text-lg ml-6 list-disc">
                    <li>Build a simplified Pokedex of the first 151 Pokémon as a React SPA (Single-page application)</li>
                    <li>Learn to work with common UI patterns such as modals, pagination, and search bars</li>
                    <li>Get comfortable working with React projects using the Vite build tool</li>
                </ul>
            </section>

            {/* Introduction */}
            <section id="introduction" className="scroll-mt-48 space-y-8 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2"> <FaPlug /> Introduction &amp; Installation</h2>

                {/* Starter Code */}
                <a
                    href={schedule[6].homework?.starter}
                    className="flex justify-center items-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-lg font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-red-300 w-1/2 my-4 cursor-pointer mx-auto"
                >
                    Starter Code
                </a>

                {/* What is a Pokedex */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>What is a Pokedex?</h3>
                    <p className="ml-4">
                        A Pokedex is a digital encyclopedia that provides information about different species of Pokémon from the Pokémon franchise of video games. In this homework, you will build a simplified version of a Pokedex that displays information about the original 151 Pokémon.
                    </p>
                    <p className="ml-4">
                        You will not need domain knowledge about the Pokémon franchise to do this project. However, there are some important terms to review that may help when designing your Pokedex. We'll provide their definitions as they relate to the app below:
                    </p>
                    <ul className="text-lg ml-12 list-disc">
                        <li><b>Pokémon</b>: A creature that can be caught and stored in your Pokedex</li>
                        <li><b>Pokedex</b>: A device for viewing Pokémon information and tracking catches</li>
                        <li><b>Box</b>: An online storage container for caught Pokémon entries</li>
                    </ul>
                    <p className="ml-4">
                        There are many online resources you may reference to inspire the design of your Pokedex. For instance, <XLink link='https://dex.pokemonshowdown.com/pokemon/' text='Pokémon Showdown'/> has a searchable Pokedex that contains a lot of information. Your web application will show a much smaller subset of information and be paginated, but should generally show serve a similar function to similar online Pokedexes.
                    </p>
                </section>

                {/* Files */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Files</h3>
                    <p className="ml-4">
                        The starter code for this homework has been booted up with the Vite build tool. You should be familiar with this file structure from lecture activities. We've provide some additional files of note:
                    </p>
                    <ul className="text-lg ml-12 list-disc">
                        <li><span className='inline-code'>colors.ts</span> in <span className='inline-code'>util</span></li>
                        <li><span className='inline-code'>types.ts</span> in <span className='inline-code'>util</span></li>
                        <li> <span className='inline-code'>prettier</span> config and format command</li>
                        <li><span className='inline-code'>README.md</span></li>
                        <li><span className='inline-code'>API.md</span></li>
                    </ul>  
                    <p className='ml-4'>
                        You will start with the boilerplay code provided by Vite and build your application from there. You should make good use of modularization and break up your code into different files and Components as you see fit. Points may be taken off for messy projects, files that are too long and not modularized, and code that is not well-organized, so make sure to put some thought into the structure of your project and how to break up your code!
                    </p>
                    <p className='ml-4'>
                        To start this homework you should run <span className='inline-code'>npm install</span> to install the dependencies for the project, and then <span className='inline-code'>npm run dev</span> to start the development server.
                    </p>
                </section>

                {/* Files */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Style</h3>
                    <p className="ml-4">
                        Similar to homework 3, there is no required style or layout for this project, but you should make sure your app is visually appealing and easy to use. We provide suggestions for design throughout this assignment, but you may choose to implement a different style if you prefer, so long as it still meets the criteria of the rubric. 
                    </p>
                    <p className='ml-4'>
                        You may also elect to use a style library such as Tailwind CSS, Material UI, or Bootstrap to style your app and make your life easier during development. If you choose to use a style library, make sure to include the necessary dependencies and configuration in your project. Make sure in your submission, you provide all the files and instructions (in your README) needed to run your project if it requires more than just running <span className='inline-code'>npm install</span> and <span className='inline-code'>npm run dev</span>.
                    </p>
                </section>
            </section>

            {/* Instructions */}
            <section id="instructions" className="scroll-mt-48 space-y-8 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2"><FaClipboardList />Instructions</h2>

                {/* Part 1 */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Part 1: Fetch Pokemon and Display</h3>
                    <p className="ml-4">
                        The purpose of a Pokedex is to display information about Pokemon gotten from the API, so your first task is to implement the functionality to fetch Pokemon data and display it in your app. 
                    </p>
                    <p className="ml-4">
                        Implement a component that fetches data about the first 151 Pokemon from the provided API endpoint and displays <span className='red-bold'>only the name, image, and types</span> of the pokemon. You can use the provided <span className='inline-code'>colors.ts</span> file to style the types of each Pokemon based on their type. We recommend you try a card UI design to display the information about each Pokemon, but feel free to get creative with the design!
                    </p>
                    <div className='blue-block mt-8'>
                        <h4 className='flex-center gap-2 text-2xl font-bold'> What is a Card?</h4>
                        <p className='flex-center'>
                            A card is a UI component that groups related information together in a visually distinct container.
                        </p>
                        <p className='flex-center'>
                            Here's an example:
                        </p>
                        <div className='flex-center mt-4'>
                            <Image
                                src={hw5_1}
                                alt="Next.js Logo"
                                width={635}
                                height={185}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </section>

                <hr></hr>

                {/* Part 2 */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Part 2: Pagination</h3>
                    <p className="ml-4">
                        Okay, now you should have a display of 151 Pokemon in a scrollable page. However, this isn't the most user-friendly design, and also takes a long time to load due to needing to retrieve so much information at once. In this section, you will implement pagination to break up the Pokemon into different pages of 10 Pokemon each, with buttons to switch between the pages. This will make the app more user-friendly and faster to load, while also giving you practice working with pagination, which is a common feature in web applications.
                    </p>
                    <p className="ml-4">
                        Implement a way to track what "page" of the Pokedex the user is on, and buttons to switch between pages. When a page button is clicked, the display should update to show the correct 10 Pokemon for that page. You can implement the pagination however you like, but we recommend a simple design with "Previous" and "Next" buttons to switch between pages, as well as buttons for each individual page number. 
                    </p>
                    <p className='ml-4'>
                        You should refer to <span className='inline-code'>API.md</span> for more information about how pagination work within the API. You'll need to find a way to dynamically input the limit and offset parameters for the API calls based on what page the user is on, so that you are only fetching the data for the 10 Pokemon that should be displayed on that page. Make sure to also handle edge cases such as when the user is on the first or last page and the "Previous" or "Next" buttons should be disabled.
                    </p>
                    <div className='blue-block mt-8'>
                        <h4 className='flex-center gap-2 text-2xl font-bold'> Pagination</h4>
                        <p className='flex-center'>
                            Pagination is a UI pattern that breaks up content into different pages, with buttons to switch between the pages. This is commonly used in web applications to make it easier for users to navigate through large amounts of content without being overwhelmed.
                        </p>
                        <p className='flex-center'>
                            Image carousels are a common example of pagination, as seen below:
                        </p>
                        <div className="flex-center mt-4">
                            <Image
                                src={hw5_2}
                                alt="Next.js Logo"
                                width={411}
                                height={260}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </section>

                <hr></hr>

                {/* Part 3 */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Part 3: Pokemon Info Modals</h3>
                    <p className="ml-4">
                        There's one last part of the Pokemon information that we haven't displayed yet- The flavour text! We will display this short description of each Pokemon in a modal that pops up upon some user input, usually a click to some button or element. 
                    </p>
                    <p className="ml-4">
                        Implement a modal that pops up when you click on a Pokemon display or some button you provide, and displays all the information provided from the API about the Pokemon, including <span className='red-bold'>name, sprite, types, and flavour text</span>. You can style the modal however you like, but make sure it's visually distinct from the rest of the page and easy to read. You should also implement a way to close the modal, such as a close button or clicking outside the modal to close it. (Hint: This will likely involve managing some state to track whether the modal is open or closed!)
                    </p>
                    <div className='blue-block mt-8'>
                        <h4 className='flex-center gap-2 text-2xl font-bold'> Modals</h4>
                        <p className='flex-center'>
                            Modals are a UI pattern that allows you to display additional information without navigating to a new page. This is commonly used in web applications to provide more details or actions related to a specific item.
                        </p>
                        <div className="flex-center mt-4">
                            <ModalDemo />
                        </div>
                    </div>
                </section>

                <hr></hr>

                {/* Part 4 */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Part 4: Search Functionality</h3>
                    <p className="ml-4">
                        As the final feature to this Pokedex, we'll implement a simple search functionality to allow users to search for Pokemon by name and by type. This will be a good opportunity to practice working with search bars and filtering content based on user input, which is a common feature in web applications.
                    </p>
                    <p className="ml-4">
                        Implement a search bar that allows users to search for Pokemon by name and/or by type. When the user types in the search bar or selects a type, the display should update in <span className='red-bold'>when you click a search button</span> to show only the Pokemon that match the search query (you should not update the results during typing to improve performance on the API backend). You can implement the search functionality however you like, but we recommend a simple design with a text input for searching by name, and a dropdown or set of checkboxes for searching by type. Make sure to also handle edge cases such as when there are no Pokemon that match the search query.
                    </p>
                    <p className='ml-4'>
                        Once again, refer to <span className='inline-code'>API.md</span> for more information about how to implement search functionality with the API. For search results, you should make sure your results are <span className='red-bold'>paginated</span> as well, with the same 10 Pokemon-per-page limit as before.
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
                        Submit your code through Gradescope as a <span className='inline-code'>.zip</span> file that contains your project. Make sure your project includes all files you worked on during this homework and your <span className='inline-code'>README.md</span> file. Make sure the submitted file structure within your submission is <span className='red-bold'>exactly or similar</span> to the file structure you used to run and develop the project. Points will be taken off for malformed project structures in the final submission!
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