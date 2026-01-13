import { MdDescription, MdFactCheck, MdGrade  } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi";
import { FaRobot } from "react-icons/fa";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import XLink from "@/components/XLink";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Syllabus | CIS 1962",
  description: "Syllabus Page of CIS 1962 for Spring 2026 at the University of Pennsylvania",
};

const gradeBreakdown = [
  { label: "Attendance", percent: 5, color: "bg-blue-400" },
  { label: "Homework", percent: 60, color: "bg-green-400" },
  { label: "Final Project", percent: 35, color: "bg-orange-400" },
];

export default function Syllabus() {
    return (
        <div className="scroll-mt-48 max-w-5xl mx-auto text-lg text-white">
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-8'>Syllabus</h1>
            <div className="flex flex-col gap-12">
                {/* Course Description */}
                <section className="space-y-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-700 font-bold mb-2 flex gap-2"><MdDescription />Course Description</h2>
                    <p className="ml-4">
                        This course will provide a comprehensive introduction to JavaScript, one of the most widely used programming languages for web development. We will focus on the fundamentals of JavaScript and what makes it unique from other programming languages. Students will be given the opportunity to explore contemporary topics of interest in JavaScript and web development, such as modern frameworks and libraries. Through projects, participants will develop the skills necessary to build dynamic, interactive web applications.
                    </p>
                    <p className="ml-4">
                        This section (201) of CIS 1962 will be focused on working towards building full-stack web applicaitons using JavaScript and modern frameworks. This section will not go in depth into topics like exploring specific backend libraries and solutions for the web, rather it aim to equip students with the fundamentals of making robust web applications and encouraging students to explore specific libraries and technologies on their own.
                    </p>
                </section>

                {/* Prereqs */}
                <section className="space-y-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-700 font-bold mb-2 flex gap-2"> <MdFactCheck />Prerequisites</h2>
                    <span className="font-semibold text-2xl text-red-700 ml-4">CIS 1200</span>
                    <p className="ml-4">This course will assume that you have basic knowledge of some other programming language, whether it's Java, Python, or some other programming language. Additionally, knowledge of version control in Git will be helpful throughout the course for homework submissions and final project collaboration if you choose to work in a group. Please speak to the instructor if you do not meet this requirement but you have similar experience, or if you have any questions about the content of the course. Prior knowledge of HTML and CSS are not required, and will be taught during lectures.</p>
                </section>

                {/* Grading */}
                <section className="space-y-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-700 font-bold mb-2 flex gap-2"><MdGrade />Grading</h2>
                    <div>
                        <div className="w-full h-8 flex rounded overflow-hidden my-4 border">
                            {gradeBreakdown.map((item) => (
                                <div
                                    key={item.label}
                                    className={`${item.color} h-full flex items-center justify-center text-xs font-semibold text-white`}
                                    style={{ width: `${item.percent}%` }}
                                    title={item.label}
                                >
                                    {item.percent > 10 && (
                                        <span className="w-full text-center">{item.label} ({item.percent}%)</span>
                                    )}
                                </div>
                            ))}
                        </div>
                        <ul className="flex justify-center gap-8 mt-2">
                            {gradeBreakdown.map((item) => (
                                <li key={item.label} className="flex items-center gap-1">
                                <span className={`inline-block w-4 h-4 rounded ${item.color}`}></span>
                                <span>{item.label} ({item.percent}%)</span>
                                </li>
                            ))}
                        </ul>    
                    </div>
                    
                    <div className="ml-4 space-y-4">
                        <h3 className='text-xl font-bold text-indigo-700'>Attendance</h3>
                        <p className='ml-4'>Attendance will be taken through online polling, which will also be used for in-class questions and quizzes. Attendance will not be mandatory, but lectures will not be recorded, so it is in your best interest to attend as many classes as possible. If we notice you are missing a majority of lectures in the semester (7+), <span className="red-bold">these points will be deducted from your final grade</span>.</p>
                        <p className="ml-4">If you do need to miss a lecture or have extenuating circumstances, please feel free to contact the course staff. Lecture slides and code will be provided after each lecture on both the course website and Ed Lessons.</p>
                    </div>
                    <div className="ml-4 space-y-4">
                        <h3 className='text-xl font-bold text-indigo-700'>Homework</h3>
                        <p className='ml-4'>There will be 8 homework assignments, which are primarily structured coding assignments within JavaScript. Grading will be based on correctness based on certain test criteria and best coding practices, including style. Submitted code will often be manually graded, but subject to run tests for correctness and ESLint for style errors based on a pre-defined <Link href="/styleguide" className="text-blue-700 underline">style guide</Link>.</p>
                    </div>
                    <div className="ml-4 space-y-4">
                        <h3 className='text-xl font-bold text-indigo-700'>Final Project</h3>
                        <p className='ml-4'>The final project for this course will be an open-ended synthesis of all the JavaScript topics students will learn in this course. The project will be assigned almost month in advance to allow project proposals and planning to occur. This project should be considered a chance for students to make something they can be proud of, and display in their portfolios as a mark of their experience with JavaScript. More details about the content of this final project will be posted closer to release date.</p>

                        <p className='ml-4'>This project can be done solo in a group. It will be mandated that the project be hosted on GitHub and make full use of version control.</p>
                    </div>
                </section>

                {/* Late Policy and Others */}
                <section className="space-y-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-700 font-bold mb-2 flex gap-2"><MdGrade />Late Policy, Extensions, and Exceptions</h2>
                    <div className="ml-4 space-y-4">
                        <h3 className='text-xl font-bold text-indigo-700'>Late Submission Policy</h3>
                        <p className='ml-4'>We know that stuff happens during the semester that's out of your control. Midterms, interviews, and other unforeseen circumstances may prevent you from submitting assignments on time. Thus, we have a 72 hour late submission policy, where each assignment can be submitted up to 72 hours late for 10% off of the grade. We will not accept submission after this deadline unless an extension is granted by the instructor.</p>
                    </div>
                    <div className="ml-4 space-y-4">
                        <h3 className='text-xl font-bold text-indigo-700'>Resubmission and Regrades</h3>
                        <p className='ml-4'>If you would like to resubmit an assignment after it is graded, or if you miss the original deadline and the late submission period, you will have an opportunity to resubmit for a regrade at the end of the semester. We will open a Google Form at the end of the semester to facilitate these submissions, so look out for an Ed post about it if you are interested. All resubmission are subject to a 20% penalty, meaning that the max grade you can get is 80% for resubmissions.</p>
                    </div>

                </section>

                {/* Academic Integrity */}
                <section className="space-y-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-700 font-bold mb-2 flex gap-2"><HiAcademicCap/>Academic Integrity</h2>
                    <div className="ml-4 space-y-4">
                        <p>
                            Implementation details for homeworks should be <span className="red-bold">individual work</span>, authored by the student without help from others, and reflect work associated specifically made for this class, and no other past or present classes.
                        </p>
                        <p>
                            We encourage students to use Google and modern AI/LLM tools for <span className="red-bold">learning and seeking out answers to conceptual questions</span>. However, we will not allow students to copy/paste code from online sources or directly lifted from code generation by AI. While short generation is allowed, action will be taken if we suspect excessive AI code generation for assignments. For instance, copying the exact or paraphrased assignment instructions as a prompt to the AI under the intent to generate code, and using that code verbatim or in full in your final submission is explicitly not allowed. This would fit under these terms of "excessive code generation" and would reflect an imbalance of individual and AI effort shown in your work. We reserve the right to <span className="red-bold">take points off from assignments </span>should we detect this level of AI usage.
                        </p>
                        <p>
                            Homework will be submitted to GitHub classroom and subject to checks for plagiarism. Submitted homework should reflect one's own individual work, any attempts to copy or plagiarize code will be penalized. Please review <XLink link='https://catalog.upenn.edu/pennbook/code-of-academic-integrity/' text="Penn's Code of Academic Integrity" /> for more details. 
                        </p>    
                    </div>
                    
                </section>

                <section className="space-y-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"><FaRobot />AI Guidelines</h2>
                    <div className="ml-4 space-y-4">
                        <p>
                            The use of AI tools, such as ChatGPT, GitHub Copilot, and others, is not permitted for graded assignments in this course unless explicitly stated otherwise (such as when you are building an AI Chatbot!). While these tools can be helpful for learning and exploring concepts, relying on them for completing assignments undermines the learning process and violates academic integrity policies.
                        </p>
                        <p>
                            However, at the same time, it is difficult to detect AI usage in code. Additionally, a lot of IDEs (like VSCode) already have AI tools like Copilot built into their interfaces. AI tools can be supremely helpful for learning topics and used as a "search engine" for conceptual questions. As such, we would humbly ask that you hold yourself accountable for your own AI usage when working on assignments. You will absorb less information if you simply just generate all the code for an assignment using AI, rather than working through the problems and concepts yourself!
                        </p>  
                        <p>
                            Each homework assignment will include an AI usage declaration in the README files that will require you to document your use of AI, including any transcripts. Please don't forget to keep your AI conversations saved if you do use AI tools for help! We are also counting on you to be honest and include all your transcripts. We will likely be nicer about point deductions for excessive AI usage if you are upfront about it, rather than trying to hide it.
                        </p>
                        <p>
                            These policies are in place to encourage responsible use of AI, but at the end of the day, you are adults with agency over your own learning. AI tools can help you learn, but also hinder your learning if you use them as a crutch. Use them wisely, and you'll get the most out of this course!
                        </p>
                    </div>
                    
                   
                </section>
            </div>
            
        </div>
    )
}
