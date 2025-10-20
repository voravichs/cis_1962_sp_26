import { useEffect } from 'react';
import Navbar from '../../Components/Navbar'
import SideNav from '../../Components/SideNav';
import { FaGithub, FaPlug, FaRobot, FaPizzaSlice, FaClipboardList } from "react-icons/fa";
import { MdGrade } from "react-icons/md";
import assignments from '../../data/assignments';

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
    id: "ai-synthesis",
    icon: <FaRobot className="inline-block text-3xl" />
  },
  {
    id: "submission",
    icon: <MdGrade className="inline-block text-3xl" />
  }
];

function ProjectScaffolding() {
  useEffect(() => {
        document.title = 'HW3 | CIS 1962';
    }, []);
  return (
    <div className="main-bg-light min-h-screen pt-16 pb-24 flex flex-col items-center gap-16 ah-font">
      <Navbar/>
      
      {/* Side Nav */}
      <SideNav sections={SECTIONS}/>
      
      <div className="max-w-4xl mx-auto px-4 py-10 pt-10 sm:pt-14 md:pt-16 text-lg">
        {/* Title */}
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Homework 3: Project Scaffolding</h1>
        <h3 className='text-lg sm:text-xl md:text-2xl opacity-60 mb-4'>Due November 3rd at 11:59 PM</h3>

        <p className='red-block font-mono'><span className='font-bold'>Topics: </span>TypeScript, ESLint, Prettier formatting, Zod Validation, Unit Testing, CLI execution, Project Management </p>

        {/* Intro Text */}
        <section className="mb-8 text-gray-800">
          <p className="mb-4">
            In this homework, you will be putting together your own publishable npm package using a combination of TypeScript and the Zod package for validating types. You will be building this project <b>from scratch</b>: we will provide you no starter code, not even a <span className='inline-code'>package.json</span> or configuration files like before! With the knowledge from the lecture on project mananagement, you'll get to step into the shoes of a developer to choose all the tools you need for a project yourself- with some guidance, of course. 
          </p>
          <p className="mb-4">
            This homework is an exercise in reading documentation on your own. About 80% of this homework is just looking it up, because you're exploring new packages and setting things up yourself! In particular, acquiant yourself with the Zod and TypeScript documentations to get familiar with how to use them in projects.
          </p>
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Assignment Goals</h3>
          <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
            <li>Use TypeScript in a project alongside the Zod package for validation</li>
            <li>Develop project management skills in JavaScript by building a project and its dependencies from scratch</li>
            <li>Learn the ecosystem of npm and publishing packages</li>
          </ul>
        </section>

        {/* Pizza */}
        <section id="pizza" className="mb-16 scroll-mt-28 text-gray-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"> <FaPizzaSlice /> Pizza Validation</h2>

          {/* Intro */}
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Schema</h3>
          <section className='mb-12 pl-3'>
            <p className="mb-4">
              In this assignment you'll be developing a pizza validation package. By the end, you should be able to pass in a JSON file into a command-line interface (CLI) and judge whether that object is a valid pizza or not. What constitutes a valid pizza? Well, we will use the following schema for a pizza:
            </p>
            <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
              <li><span className='inline-code'>size</span>: <span className='inline-code'>number</span>- diameter in inches</li>
              <li><span className='inline-code'>crust</span>: <span className='inline-code'>string</span>- either <span className='inline-code'>stuffed</span> or <span className='inline-code'>normal</span></li>
              <li><span className='inline-code'>isDeepDish</span>: optional <span className='inline-code'>boolean</span>- by default should be false (non-deep dish)</li>
              <li><span className='inline-code'>toppings</span>: optional <span className='inline-code'>array of strings</span>- should include only valid toppings. You should choose at least 4 toppings that should never go on pizza. (so it's up to you whether you think pineapple should be on pizza!)  </li>
            </ul>  
          </section>
        </section>

        {/* Installation */}
        <section id="installation" className="mb-8 scroll-mt-28 text-gray-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"><FaPlug />Installation</h2>

          {/* GitHub Classroom */}
          <section className='mb-8'>
            <a
              href={assignments[2].starter}
              download
              aria-label="Download starter files as zip"
              className="flex-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-lg font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-red-300 w-1/2 my-4"
            >
              <FaGithub className="text-3xl"/> Accept assignment on GitHub Classroom
            </a>  
          </section>

          <p className="mb-4">
            Below we'll provide a general order of operations to get you started. You don't have to follow it exactly- you just have to meet the requirements for the project by the end! See the rubric at the bottom of this assignment for more details.
          </p>
          <p className="mb-4">
            Be reminded that this assignment is all about finding solutions on your own. You know the tools and knowledge to read and find documentation online. Most the tools you need for this project are well-documented and have plenty of resources online! You don't always need to fall back to asking AI for the answer, though if you do, remember to keep all chat logs to document your conversations!
          </p>

          <p className="red-block">
            <p>Please use git to your advantage! Remember to make a commit (and push) when you've done something significant, so you can't accidentally un-make that progress later.</p>
          </p>

          {/* Dependencies */}
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 mt-8'>Dependencies</h3>
          <section className='mb-12 pl-3'>
            <p className="mb-4">
              At the very least, you will need to following dependencies to develop this application:
            </p> 
            <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
              <li>typescript</li>
              <li>eslint</li>
              <li>prettier</li>
              <li>zod</li>
              <li>jest (or another testing framework)</li>
            </ul>  
            <p className="mb-4">
              <b>This may not be an exhaustive list of the dependencies you need for this project.</b> You are free to install any other packages that may help for this project, so long as the core of the project still uses TypeScript and Zod. 
            </p>
            <p className="mb-4">
              When setting up your project, be sure to follow the requirements listed in the rubric for what we are looking for in terms of setup. You will need to add a few configuration files and set up some rules and options within them.
            </p>
          </section>
        </section>

        {/* Instructions */}
        <section id="instructions" className="mb-8 scroll-mt-28 text-gray-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"><FaClipboardList />Instructions</h2>

          {/* Code */}
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Validation Function</h3>
          <section className='mb-12 pl-3'>
            <p className="mb-4">
              Once your project's dependencies are installed, should start by creating your validation function. This pizza validation should use the <b>Zod</b> package in order to validate whether a given input is a pizza. Follow the specifications in the rubric for specific details that we want out of this function. If we don't mention a certain detail, it is up to your discretion on how to implement that feature.
            </p>
          </section>

          {/* CLI */}
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>CLI Functionality</h3>
          <section className='mb-12 pl-3'>
            <p className="mb-4">
              Next, you'll set up your command-line interface. This should involve another source file that runs the pizza validator on a selected JSON file containing a pizza object passed in through some manner of input arguments within the command-line. There are a variety of ways to parse input arguments, but we'll direct you to <span className='inline-code'>parseArgs</span> from the built-in <span className='inline-code'>node:util</span>. You may also find that the package <span className='inline-code'>ts-node</span> is good to testing this section, so that you don't have to rebuild your project every time you need to test this code.
            </p>
          </section>

          {/* Testing */}
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Unit Testing</h3>
          <section className='mb-12 pl-3'>
            <p className="mb-4">
              Finally, you set up and write some unit tests for your project. We will be using Jest for this purpose, so look up how to install and use the syntax of Jest in order to prepare your test suite. We'd recommend using <span>ts-jest</span> alongside this it, but feel free to find your own solution if you come across one. Follow the requirements for tests in the rubric below.
            </p>
          </section>

          {/* Docs */}
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Documentation</h3>
          <section className='mb-12 pl-3'>
            <p className="mb-4">
              A good project and package should always be well documented and user friendly! In a <span>README.md</span> file, document how to use your package, including how to use the CLI functionality, and what function(s) the pizza validator will use. Don't forget to comment your code liberally, so that developers may inspect the inner workings of your code!
            </p>
          </section>

          {/* Publishing */}
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Publish to npm (optional)</h3>
          <section className='mb-12 pl-3'>
            <p className="mb-4">
              Finally, you'll get to publish your package to npm! This process was shown partially in class, but can be reviewed at this <a href='https://docs.npmjs.com/creating-and-publishing-scoped-public-packages' className='text-blue-700 underline' target="_blank" rel="noopener noreferrer">link</a>. Remember that you will need to create an npm account, login to the account through the terminal, and make sure you publish the package publically (or else it will prompt you to pay to be private!).
            </p>
          </section>

          <p className='blue-block'>
            <h4 className='font-bold'>File Structure</h4>
            <p className='mb-2'>We recommend you put any <b>source code</b> you write within a <span className='inline-code'>src</span> directory.</p>
            <p className='mb-2'>When building a TypeScript project, you will be compiling and outputting .ts code to a separate directory. You can leave this as the default <span className='inline-code'>dist</span> or change it if you'd like. Make sure this output directory is the one that is shipped when you go to publish the project.</p>
            <p className='mb-2'>When writing test code, read up on some documentation of what will be detected by Jest tests or other frameworks. Organizing your project in a certain way will let your tests be easily automated with a command and allow you to even write multiple test files!</p>
          </p>
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

        {/* Submission & Rubric */}
        <section id="submission" className="mb-8 scroll-mt-28 text-gray-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"> <MdGrade />Submission & Rubric</h2>
          <p className='mb-4'>
            To submit, simply push your commits to the repository generated from GitHub classroom. Make sure your latest commit before the deadline includes all files you worked on during this homework and your <span className='inline-code'>AIAssignment.md</span> file containing your AI syntesis activity. You should only push the files related to the package, you don't need to push any test files you made to test the package. Before you submit, make sure you lint your code for style errors using the command <span className='inline-code'>npm run lint</span>. More details on style can be found in the <a href='style-guide' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">style guide</a>. We will take -1 points for every style error remaining in the submission for the submitted files. Since this project requires you to make your own ESLint, we will use your linting rules instead of the standard rules we would apply.
          </p>

          {/* Rubric */}
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Rubric</h3>
          <section className='mb-12 pl-3'>
            <div className="mb-4">
              <h4 className='font-bold'><b>[5pts total]</b> Your package must be organized and valid for publishing with npm.</h4>
              <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                <li><b>[3pts]</b> It must have a name, version, author, and description</li>
                <li><b>[2pts]</b> Only the packages required in your source code should be listed as <span className='inline-code'>dependencies</span>. The rest (i.e. typescript, eslint) should be <span className='inline-code'>devDependencies</span>.</li>
              </ul>  
            </div>

            <p className='blue-block'>
              <p className='mb-2'>To test this section, try making a new, empty package in a directory next to your pizza validator. You should be able to install it as a dependency just by providing its path:</p>
              <p className='red-block font-mono'>npm install ../folder-name </p> 
              <p>Alternatively, you can actually publish the package to npm and install it from there. Make sure you indicate that you did so within the README so that we can see it as well!</p>
            </p>

            <div className="mb-4">
              <h4 className='font-bold'><b>[10pts total]</b> Your package should provide an exported function taking a parameter of type unknown which allows users to check if something is a pizza.</h4>
              <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                <li><b>[3pts]</b> The function's behavior should be accurate to "valid pizzas".</li>
                <li><b>[4pts]</b> This function's implementation must use the package <span className='inline-code'>zod</span> for validation.</li>
                <li><b>[3pts]</b> This function must return a <b>discriminated union</b> type object with the fields:</li>
                <ul className='list-disc ml-8'>
                  <li><span className='inline-code'>isPizza</span></li>
                  <li><span className='inline-code'>errors</span> only if <span className='inline-code'>isPizza</span> is <span className='inline-code'>false</span> (providing some form of information on why the given object is not a pizza)</li>
                  <li><span className='inline-code'>pizza</span> only if <span className='inline-code'>isPizza</span> is <span className='inline-code'>true</span>, which should be our same pizza object but with the type known.</li>
                </ul>
              </ul>  
            </div>

            <p className='blue-block'>
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
            </p>

            <div className="mb-4">
              <h4 className='font-bold'><b>[5pts total]</b> Your project should use TypeScript.</h4>
              <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                <li><b>[2pts]</b> All your code (besides config files) should be written in TypeScript – in <span className='inline-cde'>.ts</span> files</li>
                <li><b>[3pts]</b> You should have a <span className='inline-code'>package.json</span> script called <span className='inline-code'>build</span> that transpiles your source code using <span className='inline-code'>tsc</span>, and plops it into a directory preferably called <span className='inline-code'>dist</span></li>
              </ul>  
            </div>

            <div className="mb-4">
              <h4 className='font-bold'><b>[5pts total]</b> Your project should have linting and formatting set up.</h4>
              <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                <li><b>[3pts]</b> <span className='inline-code'>eslint</span> installed locally + config file with at least 4 extra rules other than the recommended default rules</li>
                <li><b>[2pts]</b> <span className='inline-code'>prettier</span> installed locally + config file with at least 2 extra rules that are not default</li>
              </ul>  
            </div>

            <div className="mb-4">
              <h4 className='font-bold'><b>[5pts total]</b> Your project should have unit testing.</h4>
              <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                <li><b>[2pts]</b> A testing suite, such as Jest, should be run when you call <span className='inline-cde'>npm test</span>. It should test any <span className='inline-cde'>*.test.ts</span> files in your <span className='inline-cde'>test</span> folder.</li>
                <li><b>[3pts]</b> For your pizza validation function, write at least 1 valid and 2 invalid test cases.</li>
              </ul>  
            </div>

            <div className="mb-4">
              <h4 className='font-bold'><b>[7pts total]</b> Your package should include CLI functionality.</h4>
              <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                <li><b>[5pts]</b> Running your package as a binary should tell us in the console if a given json file is a pizza, and if not, the specific reason(s) why it's not a pizza.</li>
                <li><b>[2pts]</b> If provided a file that doesn't exist or it can't read, it should catch this error and report it to the console.</li>
              </ul>  
            </div>

            <p className='blue-block'>
              <p className='mb-2'>To test this, you can run the following:</p>
              <p className='red-block font-mono'>
                <p>npm install --global . # install this package globally</p>
                <p>{`<package-name>`} test-pizza.json  # assuming you have a file `test-pizza.json`</p>
              </p>
            </p>

            <div className="mb-4">
              <h4 className='font-bold'><b>[5pts total]</b> You should include a <span className='inline-code'>README.md</span> and <span className='inline-code'>LICENSE file</span>.</h4>
              <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                <li><b>[2pts]</b> <span className='inline-code'>README.md</span> should provide an example of using the package as a dependency.</li>
                <li><b>[2pts]</b> And it should show CLI usage.</li>
                <li><b>[2pts]</b> <span className='inline-code'>LICENSE</span> file, matching the license listed in <span className='inline-code'>package.json</span> (use ISC if not sure)</li>
              </ul>  
            </div>

            <div className="mb-4">
              <h4 className='font-bold'><b>[3pts]</b> Your repository should not include <span className='inline-code'>node_modules</span> or any emitted code. This can be controlled with a <span className='inline-code'>.gitignore</span> file.</h4>
            </div>
          </section>
        </section>
      </div>

      <footer className='text-sm'>This assignment was adapted from an <a href='https://javascriptclass.org/assignments/project-scaffolding' className='text-blue-700 underline' target="_blank" rel="noopener noreferrer">assignment</a> from Spring 2025 CIS 1962. </footer>
    </div>
  )
}

export default ProjectScaffolding
