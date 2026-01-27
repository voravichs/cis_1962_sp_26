import SideNav from '@/components/Sidenav';
import { FaGithub, FaPlug, FaRobot, FaPizzaSlice, FaClipboardList } from "react-icons/fa";
import { MdGrade } from "react-icons/md";
import schedule from '@/data/schedule';

import Link from 'next/link';
import type { Metadata } from "next";
import XLink from '@/components/XLink';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

const SECTIONS = [
  {
    id: "pizza",
    icon: <FaPizzaSlice className="inline-block text-3xl" />
  },
  {
    id: "installation",
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
  title: "HW2 | CIS 1962",
  description: "Homework 2 Page of CIS 1962 for Spring 2026 at the University of Pennsylvania",
};

export default function HW2() {
    return (
        <div className="scroll-mt-48 max-w-5xl mx-auto text-lg text-black dark:text-white">      
            {/* Side Nav */}
        <SideNav sections={SECTIONS}/>
      
        <div className="mx-auto text-lg">
            {/* Title */}
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Homework 2: Project Scaffolding</h1>
            <h3 className='text-lg sm:text-xl md:text-2xl opacity-60 mb-4'>Due February 5th at 11:59 PM</h3>

            <div className='red-block font-mono'><span className='font-bold'>Topics:</span> TypeScript, ESLint, Prettier formatting, Zod Validation, Unit Testing, CLI execution, Project Management</div>

            {/* Intro Text */}
            <section className="space-y-8 mb-8">
                <p className="ml-4">
                    In this homework, you will be putting together your own npm package using a combination of TypeScript and the Zod package for validating types. You will be building this project <span className='red-bold'>from scratch</span>: we will provide you no starter code, not even a <span className='inline-code'>package.json</span> or configuration files like before! With the knowledge from the lecture on project mananagement, you'll get to step into the shoes of a developer to choose all the tools you need for a project yourself- with some guidance, of course. 
                </p>
                <p className="ml-4">
                    This homework is an exercise in reading documentation on your own. About 80% of this homework is just looking it up, because you're exploring new packages and setting things up yourself! In particular, acquiant yourself with the Zod and TypeScript documentations to get familiar with how to use them in projects.
                </p>
                <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Assignment Goals</h3>
                <ul className="text-lg ml-6 list-disc">
                    <li>Use TypeScript in a project alongside the Zod package for validation</li>
                    <li>Develop project management skills in JavaScript by building a project and its dependencies from scratch</li>
                    <li>Learn the ecosystem of npm and publishing packages</li>
                </ul>
            </section>

            {/* Pizza */}
            <section id="pizza" className="scroll-mt-48 space-y-8 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2"> <FaPizzaSlice /> Pizza Validation</h2>

                {/* Intro */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Schema</h3>
                    <p className="ml-4">
                        In this assignment you'll be developing a pizza validation package. By the end, you should be able to pass in a JSON file into a command-line interface (CLI) and judge whether that object is a valid pizza or not. What constitutes a valid pizza? Well, we will use the following schema for a pizza:
                    </p>
                    <ul className="text-lg ml-12 list-disc">
                        <li><span className='inline-code'>size</span>: <span className='inline-code'>number</span>- diameter in inches</li>
                        <li><span className='inline-code'>crust</span>: <span className='inline-code'>string</span>- either <span className='inline-code'>stuffed</span> or <span className='inline-code'>normal</span></li>
                        <li><span className='inline-code'>isDeepDish</span>: optional <span className='inline-code'>boolean</span>- by default should be false (non-deep dish)</li>
                        <li><span className='inline-code'>toppings</span>: optional <span className='inline-code'>array of strings</span>- should include only valid toppings. You should choose at least 4 toppings that should never go on pizza. (so it's up to you whether you think pineapple should be on pizza!)  </li>
                    </ul> 
                </section>
            </section>

            {/* Installation */}
            <section id="installation" className="scroll-mt-48 space-y-8 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2"><FaClipboardList />Installation</h2>

                {/* Github Classroom */}
                <a
                    href={schedule[1].homework?.starter}
                    download
                    aria-label="Download starter files as zip"
                    className="flex justify-center items-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-lg font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-red-300 w-1/2 my-4 cursor-pointer"
                >
                    <FaGithub className="text-3xl"/> Accept assignment on Github Classroom
                </a>

                {/* Start */}
                <section className='space-y-4'>
                    <p className="ml-4">
                        We will provide a general order of operations to get you through this assignment. You don't have to follow them exactly- you just need to meet the requirements for this project by the end! See the <Link href={'#submission'} className='link'>rubric</Link> at the bottom of this assignment for more details. 
                    </p>
                    <p className="ml-4">
                        Be reminded that this assignment is all about finding solutions on your own. You know the tools and knowledge to read and find documentation online. Most the tools you need for this project are well-documented and have plenty of resources online! You don't always need to fall back to asking AI for the answer, though if you do, remember to keep all chat logs to document your conversations. We recommend you use <XLink text='MDN Docs' link='https://developer.mozilla.org/en-US/docs/Web/JavaScript'/> and <XLink text='TypeScript Docs' link='https://www.typescriptlang.org/docs/'/> to help you through this assignment, among other library documentations.
                    </p>
                    <div className="red-block">
                        Please use git to your advantage! Remember to make a commit (and push) when you've done something significant, so you can't accidentally un-make that progress later.
                    </div>
                    <p className="ml-4">
                       At the very least, you will need to following <span className='red-bold'>dependencies</span> to develop this application:
                    </p>
                    <ul className="text-lg ml-12 list-disc">
                        <li><span className='inline-code'>typescript</span></li>
                        <li><span className='inline-code'>eslint</span></li>
                        <li><span className='inline-code'>prettier</span></li>
                        <li><span className='inline-code'>zod</span></li>
                        <li><span className='inline-code'>jest</span> (or another testing framework)</li>
                    </ul> 
                    <p className="ml-4">
                       <span className='red-bold'>This may not be an exhaustive list of the dependencies you need for this project.</span> You are free to install any other packages that may help for this project, so long as the core of the project still uses TypeScript and Zod. 
                    </p>
                    <p className="ml-4">
                       When setting up your project, be sure to follow the requirements listed in the rubric for what we are looking for in terms of setup. You will need to add a few configuration files and set up some rules and options within them.
                    </p>
                </section>
            </section>

            {/* Installation */}
            <section id="instructions" className="scroll-mt-48 space-y-8 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2"><FaClipboardList />Instructions</h2>

                {/* Code */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Validation Function</h3>
                    <p className="ml-4">
                        Once your project's dependencies are installed, should start by creating your validation function. This pizza validation should use the <span className='red-bold'>Zod</span> package in order to validate whether a given input is a pizza. Follow the specifications in the rubric for specific details that we want out of this function. If we don't mention a certain detail, it is up to your discretion on how to implement that feature.
                    </p>
                </section>

                {/* CLI */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>CLI Functionality</h3>
                    <p className="ml-4">
                        Next, you'll set up your command-line interface. This should involve another source file that runs the pizza validator on a selected JSON file containing a pizza object passed in through some manner of input arguments within the command-line. There are a variety of ways to parse input arguments, but we'll direct you to <span className='inline-code'>parseArgs</span> from the built-in <span className='inline-code'>node:util</span>. You may also find that the package <span className='inline-code'>ts-node</span> is good to testing this section, so that you don't have to rebuild your project every time you need to test this code.
                    </p>
                </section>

                {/* Testing */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Unit Testing</h3>
                    <p className="ml-4">
                        Finally, you set up and write some unit tests for your project. We will be using Jest for this purpose, so look up how to install and use the syntax of Jest in order to prepare your test suite. We'd recommend using <span>ts-jest</span> alongside this it, but feel free to find your own solution if you come across one. Follow the requirements for tests in the rubric below.
                    </p>
                </section>

                {/* Polish & Style */}
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Polish & Style</h3>
                    <p className="ml-4">
                        Finally, you should polish up your project and standardize the style within the project. With <span className='inline-code'>eslint</span>, add 4 extra style rules beyond any recommended default rules for JavaScript and TypeScript. With <span className='inline-code'>prettier</span>, add 2 extra rules beyond the defaults. This process will give you a taste of setting up style checking as part of the production pipeline of projects. Don't just copy the rules from Homework 1 (since some of them require extra dependencies), try branching out a bit and exploring how different rules work!
                    </p>
                </section>

                <div className='blue-block'>
                    <h4 className='font-bold'>File Structure</h4>
                    <p className='mb-2'>We recommend you put any <span className='red-bold'>source code</span> you write within a <span className='inline-code'>src</span> directory.</p>
                    <p className='mb-2'>When building a TypeScript project, you will be compiling and outputting .ts code to a separate directory. You can leave this as the default <span className='inline-code'>dist</span> or change it if you'd like. Make sure this output directory is the one that is shipped when you go to publish the project.</p>
                    <p className='mb-2'>When writing test code, read up on some documentation of what will be detected by Jest tests or other frameworks. Organizing your project in a certain way will let your tests be easily automated with a command and allow you to even write multiple test files!</p>
                </div>
            </section>

            {/* Submission */}
            <section id="submission" className="scroll-mt-48 space-y-8 mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2"> <MdGrade />Submission & Rubric</h2>
                
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>README</h3>
                    <p className="ml-4">
                        Answer the provided reflection questions within the starter code README file. In this reflection, you will also indicite whether or not you used AI, and also document your usage of AI as well. Please don't forget this step, as it is important feedback for the homework and the content of the course!
                    </p> 
                </section>
                 
                <section className='space-y-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Submission</h3>
                    <p className='ml-4'>
                        To submit, simply push your commits to the repository generated from GitHub classroom. Make sure your latest commit before the deadline includes all files you worked on during this homework and your <span className='inline-code'>README.md</span> file. Make sure the submitted file structure within your GitHub repository is <span className='red-bold'>exactly or similar</span> to the file structure you used to run and develop the project. Points will be taken off for malformed project structures in the final submission!
                    </p>
                    <p className='ml-4'>
                        Before you submit, make sure you lint your code for style errors using the command <span className='inline-code'>npm run lint</span>. More details on style can be found in the <Link className='link' href={"/styleguide"}>style guide</Link>. We will take -1 points for every style error remaining in the submission for the submitted files. Since this project requires you to make your own ESLint, we will use your linting rules instead of the standard rules we would apply, so make sure you pass your own set of style rules!
                    </p>
                </section>
                
                <section className='space-y-12'>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 text-indigo-600'>Rubric</h3>
                    <div className="ml-4">
                        <h4 className='font-bold'><span className='red-bold'>[5pts total]</span> Your package must be organized and valid for publishing with npm.</h4>
                        <ul className="text-lg ml-6 list-disc">
                            <li><span className='red-bold'>[3pts]</span> It must have a name, version, author, and description</li>
                            <li><span className='red-bold'>[2pts]</span> Only the packages required in your source code should be listed as <span className='inline-code'>dependencies</span>. The rest (i.e. typescript, eslint) should be <span className='inline-code'>devDependencies</span>.</li>
                        </ul>  
                        <div className='blue-block mt-4'>
                            <p className='mb-2'>To test this section, try making a new, empty package in a directory next to your pizza validator. You should be able to install it as a dependency just by providing its path:</p>
                            <div className='red-block font-mono'>npm install ../folder-name </div> 
                            <p>Alternatively, you can actually publish the package to npm and install it from there. Make sure you indicate that you did so within the README so that we can see it as well!</p>
                        </div>
                    </div>
                    <div className="ml-4">
                        <h4 className='font-bold'><span className='red-bold'>[10pts total]</span> Your package should provide an exported function taking a parameter of type unknown which allows users to check if something is a pizza.</h4>
                        <ul className="text-lg ml-6 list-disc ">
                            <li><span className='red-bold'>[3pts]</span> The function's behavior should be accurate to "valid pizzas".</li>
                            <li><span className='red-bold'>[4pts]</span> This function's implementation must use the package <span className='inline-code'>zod</span> for validation.</li>
                            <li><span className='red-bold'>[3pts]</span> This function must return a <span className='red-bold'>discriminated union</span> type object with the fields:</li>
                            <ul className='list-disc ml-8'>
                            <li><span className='inline-code'>isPizza</span></li>
                            <li><span className='inline-code'>errors</span> only if <span className='inline-code'>isPizza</span> is <span className='inline-code'>false</span> (providing some form of information on why the given object is not a pizza)</li>
                            <li><span className='inline-code'>pizza</span> only if <span className='inline-code'>isPizza</span> is <span className='inline-code'>true</span>, which should be our same pizza object but with the type known.</li>
                            </ul>
                        </ul>  
                        <div className='blue-block mt-4'>
                            <p className='mb-2'>Here's an example of usage as a dependency:</p>
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
                                >{`import { validatePizza } from '<package-name>';

const result = validatePizza({ hehehehaw: true });
// there should be no typescript errors below
if (result.isPizza) console.log(result.pizza.crust);
else console.log(result.errors);`}</SyntaxHighlighter>
                            </div>
                        </div>
                    </div>

                    <div className="ml-4">
                        <h4 className='font-bold'><span className='red-bold'>[5pts total]</span> Your project should use TypeScript.</h4>
                        <ul className="text-lg ml-6 list-disc ">
                            <li><span className='red-bold'>[2pts]</span> All your code (besides config files) should be written in TypeScript – in <span className='inline-cde'>.ts</span> files</li>
                            <li><span className='red-bold'>[3pts]</span> You should have a <span className='inline-code'>package.json</span> script called <span className='inline-code'>build</span> that transpiles your source code using <span className='inline-code'>tsc</span>, and plops it into a directory preferably called <span className='inline-code'>dist</span></li>
                        </ul>  
                    </div>

                    <div className="ml-4">
                        <h4 className='font-bold'><span className='red-bold'>[5pts total]</span> Your project should have linting and formatting set up.</h4>
                        <ul className="text-lg ml-6 list-disc ">
                            <li><span className='red-bold'>[3pts]</span> <span className='inline-code'>eslint</span> installed locally + config file with at least 4 extra rules other than the recommended default rules</li>
                            <li><span className='red-bold'>[2pts]</span> <span className='inline-code'>prettier</span> installed locally + config file with at least 2 extra rules that are not default</li>
                        </ul>  
                    </div>

                    <div className="ml-4">
                        <h4 className='font-bold'><span className='red-bold'>[5pts total]</span> Your project should have unit testing.</h4>
                        <ul className="text-lg ml-6 list-disc ">
                            <li><span className='red-bold'>[2pts]</span> A testing suite, such as Jest, should be run when you call <span className='inline-cde'>npm test</span>. It should test any <span className='inline-cde'>*.test.ts</span> files in your <span className='inline-cde'>test</span> folder.</li>
                            <li><span className='red-bold'>[3pts]</span> For your pizza validation function, write at least 1 valid and 2 invalid test cases.</li>
                        </ul>  
                    </div>

                    <div className="ml-4">
                        <h4 className='font-bold'><span className='red-bold'>[7pts total]</span> Your package should include CLI functionality.</h4>
                        <ul className="text-lg ml-6 list-disc ">
                            <li><span className='red-bold'>[5pts]</span> Running your package as a binary should tell us in the console if a given json file is a pizza, and if not, the specific reason(s) why it's not a pizza.</li>
                            <li><span className='red-bold'>[2pts]</span> If provided a file that doesn't exist or it can't read, it should catch this error and report it to the console.</li>
                        </ul>
                        <div className='blue-block mt-4'>
                            <p className='mb-2'>To test this, you can run the following:</p>
                            <div className='red-block font-mono'>
                                <p>npm install --global . # install this package globally</p>
                                <p>{`<package-name>`} test-pizza.json  # assuming you have a file `test-pizza.json`</p>
                            </div>
                        </div>  
                    </div>

                    <div className="ml-4">
                        <h4 className='font-bold'><span className='red-bold'>[5pts total]</span> You should include a <span className='inline-code'>README.md</span> and <span className='inline-code'>LICENSE file</span>.</h4>
                        <ul className="text-lg ml-6 list-disc ">
                            <li><span className='red-bold'>[2pts]</span> <span className='inline-code'>README.md</span> should provide an example of using the package as a dependency.</li>
                            <li><span className='red-bold'>[2pts]</span> And it should show CLI usage.</li>
                            <li><span className='red-bold'>[2pts]</span> <span className='inline-code'>LICENSE</span> file, matching the license listed in <span className='inline-code'>package.json</span> (use ISC if not sure)</li>
                        </ul>  
                    </div>

                    <div className="ml-4">
                        <h4 className='font-bold'><span className='red-bold'>[3pts]</span> Your repository should not include <span className='inline-code'>node_modules</span> or any emitted code. This can be controlled with a <span className='inline-code'>.gitignore</span> file.</h4>
                    </div>
                </section>
            </section>
        </div>
    </div>
  )
}