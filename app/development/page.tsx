import { FaNodeJs, FaGithub } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { VscRunAll } from "react-icons/vsc";
import XLink from "@/components/XLink";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Development | CIS 1962",
  description: "Development Page of CIS 1962 for Spring 2026 at the University of Pennsylvania",
};

export default function Development() {
    return (
        <div className="scroll-mt-48 max-w-5xl mx-auto text-lg text-white">
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-8'>Development</h1>

            <div className="space-y-16">
                {/* Node and NPM */}
                <section className="space-y-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"><FaNodeJs />Installing Node.js &amp; npm</h2>
                    <p className='ml-4'>
                        <b>Node (Node.js)</b> is a JavaScript runtime that operates anywhere, even beyond the browser. It lets JavaScript become a general use programming language, and also allows JavaScript to handle backend processes as well. <b>Node Package Manager (npm)</b> is a tool used by most developers working in JavaScript to manage dependencies on behalf of applications in Node.js. It allows a lightweight way to manage dependencies, download and update packages, and publish and share code with others. 
                    </p>
                    <p className='ml-4'>
                        First, check if node and npm are already installed on your device. Open a terminal and run these two lines:
                    </p>
                    <p className='blue-block font-mono'>
                        node -v
                    </p>
                    <p className='blue-block font-mono'>
                        npm -v
                    </p>
                    <p className='ml-4'>
                        If already installed, you should get something along the lines of <span className='inline-code'>v22.18.0</span> for node and <span className='inline-code'>10.9.3</span> for npm. If your node version is less than <span className='inline-code'>18</span>, consider installing a more recent release. If an error or no version shows up, you will need to download a new version of node and npm using the instructions below.
                    </p>
                    <p className='ml-4'>
                        <b>Node Version Manager (nvm) </b> is one of the recommended ways for installing node. It provides users fine control of what node version is installed on the system, and even allows multiple versions to be installed for various purposes. Follow the directions under "Install &amp; Update Script" at <XLink link="https://github.com/nvm-sh/nvm#install--update-script" text="the nvm github page"/>. Note that you may have to update some environment variables for nvm to work. If you are on <b>Windows</b>, you can also use the <span className='inline-code'>nvm-setup.exe</span> installer from <XLink link="https://github.com/coreybutler/nvm-windows/releases/tag/1.2.2" text="this github page"/> to install nvm. Once nvm is installed, you can install the most recent version of node and npm through this command:
                    </p>
                    <p className='blue-block font-mono'>
                        nvm install --lts
                    </p>
                    <p className='ml-4'>
                        The script may prompt you to run further commands to activate node, follow those commands. If everything is set up correctly, you should now be able to run <span className='inline-code'>node -v</span> and <span className='inline-code'>npm -v</span> to see your node and npm versions.
                    </p>
                </section>

                {/* VSCode */}
                <section className='space-y-8'>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"><VscVscodeInsiders />Code Editor</h2>
                    <p className='ml-4'>
                        While many professionals do use full-fledged integrated development environments (IDEs) for JavaScript like <XLink link="https://www.jetbrains.com/webstorm/" text="WebStorm"/>, they are often unnecessary for the overhead they introduce unless developing complex, enterprise-level applications.
                    </p>
                    <p className='ml-4'>
                        We recommend lightweight editors such as <XLink link="https://code.visualstudio.com/" text="VSCode"/>. Most in-class coding and office hours help in JavaScript will feature VSCode, and will provide ample support in how best to program for web development using the various extensions and features of VSCode. 
                    </p>
                </section>

                {/* Running */}
                <section className='space-y-8'>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"><VscRunAll />Installing &amp; Running Projects</h2>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Running JavaScript Code</h3>
                    <p className='ml-4'>
                        JavaScript code can be run in many ways. Within a browser, you can open development tools / inspect elements in order to view various aspects about a webpage, including HTML/CSS, network calls, persistent storage, and a console where JavaScript code can immediately be executed.
                    </p>
                    <p className='ml-4'>
                        You will be working with Node throughout the semester in a code editor, so you can run JavaScript by running the <span className='inline-code'>node</span> command with a file you want to run as an argument: 
                    </p>
                    <p className='blue-block font-mono'>
                        {`node <file_name.js>`}
                    </p>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Installing Dependencies</h3>
                    <p className='ml-4'>
                        Often, projects will use various npm dependencies in order to make certain features function properly. Project starter code will come with a <span className='inline-code'>package.json</span> file that determines the exact dependencies that will need to be installed. To install these dependencies, you can run the command:
                    </p>
                    <p className='blue-block font-mono'>
                        npm install
                    </p>
                    <p className='ml-4'>
                        This will create a <span className='inline-code'>node_modules</span> directory that stores all your dependencies and a <span className='inline-code'>package-lock.json</span> that tracks exact versions of dependencies for easier installation and collaboration. Generally, you should <b>not</b> include the <span className='inline-code'>node_modules</span> directory in any git commits you make. It is very often included in any <span className='inline-code'>.gitignore</span> file, as the dependencies take up a lot of memory in repositories. It is best practice to commit the <span className='inline-code'>package.json</span> and <span className='inline-code'>package-lock.json</span> to allow any collaborators to download the dependencies on their own.
                    </p>
                    <p className='ml-4'>
                        Dependencies beyond what are included in homeworks starter code are not allowed to be used. However, for the final project, you may install whatever npm modules you desire. When the time comes, search through the <XLink link='https://www.npmjs.com/' text="npmjs website"/> for any cool modules and frameworks you'd like to use! 
                    </p>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Scripts </h3>
                    <p className='ml-4'>
                        Often, we will provide <b>custom scripts</b> that run parts of the assignment. These scripts are defined in the <span className='inline-code'>package.json</span> file, and can be run with:
                    </p>
                    <p className='blue-block font-mono'>
                        {`npm run <script_name>`}
                    </p>
                    <p className='ml-4'>
                        For instance, both the <span className='inline-code'>prettier</span> and <span className='inline-code'>ESLint</span> scripts are already defined for you, and will fix formatting errors and run style checks respectively. You would run these commands using <span className='inline-code'>npm run format</span> and <span className='inline-code'>npm run lint</span>. For more information on style, see the <Link href="/styleguide" className="text-blue-700 underline">style guide</Link>.
                    </p>
                </section>

                {/* Git & GitHub Classroom */}
                <section className='space-y-8'>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"><FaGithub />Git & GitHub Classroom</h2>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Git</h3>
                    <p className='ml-4'>
                        We will be using Git to practice proper version control within this class. While we will not teach the basics of Git, there are many online resources for you to learn Git and Git commands. For this class, you will simply need to know how to clone a repository and push commits to a remote repository. If you plan on working in groups in the final project, knowing how to collaborate on Git properly using pull requests and code reviews will also help.
                    </p>
                    <p className='ml-4'>You can refer to <XLink link='https://drive.google.com/file/d/1xFnnBgz8PzHgMqoh5U1nd9jcAfnOHIwP/view?usp=sharing' text="this video"/> from the 19xx website from Penn in order to learn the basics of Git if you aren't already familiar. Feel free to ask through Ed Discussion if you have any issues setting up Git for this course!
                    </p>
                    
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>GitHub Classroom</h3>
                    <p className='ml-4'>
                        We will be using GitHub classroom for you to accept and submit assignments this semester. Make sure you have a GitHub account and git installed on your device. Each homework will have a link to the assignment on GitHub classroom, which you can accept and create a fork of the GitHub repository with the starter code for each assignment. You will need to then clone the repository to a local directory to start working on the assignment. You should make commits often, when you've finished important parts of the assignment, so that you have a version history for any unforseen hardware issues. Once you are done with the homework, you just need to make your final changes and commit to your repo before the due date. While the GitHub classroom might not enforce the due date, we will know when you last commited, so we will only grade the most recent commit before the due date!
                    </p>
                </section>
            </div>
        </div>
    )
}