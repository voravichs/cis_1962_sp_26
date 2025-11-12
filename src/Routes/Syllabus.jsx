import { useEffect } from 'react';
import Navbar from '../Components/Navbar'
import { MdDescription, MdFactCheck, MdGrade  } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi";
import { FaRobot } from "react-icons/fa";


function Syllabus() {
    useEffect(() => {
        document.title = 'Syllabus | CIS 1962';
    }, []);
    return (
        <div className="main-bg-light min-h-screen pt-16 pb-24 flex flex-col items-center gap-16 ah-font">
            <Navbar/>
            <div className="max-w-4xl mx-auto px-4 py-10 pt-10 sm:pt-14 md:pt-16 text-lg">
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-8'>Syllabus</h1>
                {/* Course Description */}
                <section className="mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"><MdDescription />Course Description</h2>
                    <p className="text-gray-900 mb-2">
                        This course will provide a comprehensive introduction to JavaScript, one of the most widely used programming languages for web development. We focus on the fundamentals of JavaScript and what makes it unique from other programming languages. Students will be given the opportunity to explore contemporary topics of interest in JavaScript and web development, such as modern frameworks and libraries. Through projects, participants will develop the skills necessary to build dynamic, interactive web applications.
                    </p>
                </section>

                {/* Prereqs */}
                <section className="mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"> <MdFactCheck />Prerequisites</h2>
                    <span className="font-semibold text-xl">CIS 1200</span>
                    <p className="text-gray-900">This course will assume that you have basic knowledge of some other programming language, whether it's Java, Python, or some other programming language. Additionally, knowledge of version control in Git will be helpful in the final project. Please speak to the instructor if you do not meet this requirement but you have similar experience, or if you have any questions about the content of the course. Prior knowledge of HTML and CSS are not required.</p>
                </section>

                {/* Grading */}
                <section className="mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"><MdGrade />Grading</h2>
                    <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                        <li><span className="font-semibold">5% Attendance</span></li>
                        <li><span className="font-semibold">60% Homework</span></li>
                        <li><span className="font-semibold">35% Final Project</span></li>
                    </ul>
                    <p className="text-gray-900 mb-4">
                        <h3 className='text-xl font-bold'>Attendance</h3>
                        <p className='mb-4'>Attendance will be taken through online polling, which will also be used for in-class questions and quizzes. Attendance will not be mandatory, but lectures will not be recorded, so it is in your best interest to attend as many classes as possible. If we notice you are missing a majority of lectures in the semester (6+), these points will be deducted from your final grade.</p>
                        <p>If you do need to miss a lecture or have extenuating circumstances, please feel free to contact the course staff. Lecture slides and code will be provided after each lecture on both the course website and Ed Lessons.</p>

                    </p>
                    <p className="text-gray-900 mb-4">
                        <h3 className='text-xl font-bold'>Homework</h3>
                        <p className='mb-4'>There will be 5 homework assignments, which are primarily structured coding assignments within JavaScript. These homeworks are meant to be substantial projects assigned over 2 weeks, except homework 2, which will be assigned over 3 weeks. Grading will be based on correctness based on certain test criteria and best coding practices, including style. Submitted code will often be manually graded, but subject to run tests for correctness and ESLint for style errors based on a pre-defined style guide, provided on the course website.</p>

                        <p className='mb-4'>The first 3 homeworks will be based on the first half of the course, while the content of the last two homeworks will depend on the topics that will be chosen for the second half of the course.</p>

                        <p>Each assignment can be submitted up to 24 hours late for 10% off of the grade, and up to 72 hours late for 20% off of the grade. No submissions will be accepted after this late deadline, unless an extension is granted by the instructor. Please reach out to the instructor via email if you need to request any extensions for any reason <span className='font-bold'>before</span> the late deadline.</p>

                    </p>
                    <p className="text-gray-900 mb-4">
                        <h3 className='text-xl font-bold'>Final Project</h3>
                        <p className='mb-4'>The final project for this course will be an open-ended synthesis of all the JavaScript topics students will learn in this course. The project will be assigned a month in advance to allow project proposals and planning to occur. This project should be considered a chance for students to make something they can be proud of, and display in their portfolios as a mark of their experience with JavaScript.</p>

                        <p className='mb-4'>This project can be done solo in a group. It will be mandated that the project be hosted on GitHub and make full use of version control.</p>
                    </p>
                </section>

                {/* Academic Integrity */}
                <section className="mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"><HiAcademicCap/>Academic Integrity</h2>
                    <p className="text-gray-900 mb-4">
                        Implementation details for homeworks should be <b>individual work</b>, authored by the student without help from others, and reflect work associated specifically made for this class, and no other past or present classes.
                    </p>
                    <p className="text-gray-900 mb-4">
                        We actively encourage students to use Google and modern AI/LLM tools for learning and seeking out answers to conceptual questions (see section below for AI guidelines). However, we will not allow students to copy/paste code from online sources or directly lifted from code generation by AI. While short generation is allowed, action will be taken against excessive AI code generation for assignments. For instance, copying the exact or paraphrased assignment instructions as a prompt to the AI under the intent to generate code, and using that code verbatim or in part in your final submission is explicitly not allowed, and would fit under these terms of "excessive code generation" and would reflect an imbalance of individual and AI effort shown in your work. We reserve the right to <b>take points off</b> of assignments should we detect this level of AI usage.
                    </p>
                    <p className="text-gray-900 mb-4">
                        Homework will be submitted to GitHub classroom and subject to checks for plagiarism. Submitted homework should reflect one's own individual work, any attempts to copy or plagiarize code will be penalized. Please review <a href='https://catalog.upenn.edu/pennbook/code-of-academic-integrity/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Penn's Code of Academic Integrity</a> for more details. 
                    </p>
                </section>

                <section className="mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"><FaRobot />AI Guidelines</h2>
                    <p className="text-gray-900 mb-4">
                        We recognize the prevalence of generative artificial intelligence (AI) tools and LLM models such as ChatGPT and Deepseek in academics, and want to encourage responsible and ethical use within this classroom. It is becoming increasingly difficult to detect the use of AI within submitted works, especially in low-level coding tasks. For this reason, it is difficult to adjudicate cases of alleged AI use when the guidelines for AI use in assignments are strict.
                    </p>
                    <p className="text-gray-900 mb-4">
                        Therefore, for each assignment, students will be required to perform an AI enrichment exercise that will allow both those that used AI for the assignment and those that did not use AI for the assignment to benefit.
                    </p>
                    <ul className="list-disc ml-6 text-gray-900 mb-4">
                        <li>
                            <span className="font-semibold">If you used AI, you will: </span>  
                            Document your usage, including the context, prompts, and conversations you had with the LLM (as a screenshot, or preferably a link), and write a short response on why you used AI, what you learned from using it, and evaluate the quality of the response.
                        </li>
                        <li>
                            <span className="font-semibold">If you did NOT use AI, you will: </span>
                            Ask an AI about how you might improve your code, through improving efficiency, improving syntax, or learning other ways certain actions can be performed (better algorithms, using libraries, etc.). Evaluate the quality of the response, perform some research to cross-reference whether AI is hallucinating or providing a solid response to your query.
                        </li>
                    </ul>
                    <p className="text-gray-900 mb-4">Guidelines for these responses can be found on the dedicated <a
                        href="ai-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 underline"
                    >AI Policy page</a>.</p>
                    <p className="text-gray-900 mb-4">
                        Through these guidelines, we would like to provide students a safe and ethical way for students to make use of modern AI tools to supplement, rather than replace, their learning. If we detect unauthorized use of AI that reflect serious issues of academic integrity, such as using AI to generate code for a whole assignment without reporting it, or excessive use of AI for entire assignments, grade penalties and academic warnings will be administered.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default Syllabus
