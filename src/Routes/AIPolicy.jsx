import { useEffect } from 'react';
import Navbar from '../Components/Navbar'
import { HiAcademicCap } from "react-icons/hi";
import { FaRobot } from "react-icons/fa";
import { MdGrade } from "react-icons/md";


function AIPolicy() {
    useEffect(() => {
        document.title = 'AI Policy | CIS 1962';
    }, []);
    return (
        <div className="main-bg-light min-h-screen pt-16 pb-24 flex flex-col items-center gap-16 ah-font">
            <Navbar/>
            <div className="max-w-4xl mx-auto px-4 py-10 pt-10 sm:pt-14 md:pt-16 text-lg">
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-8'>AI Policy</h1>

                <section className="mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"><FaRobot />Purposes Behind AI Policy</h2>
                    <p className="mb-4">
                        In recent years, with the rise of more powerful AI tools, the workplaces of software developers and web developers has seen more AI integration. In a <a href='https://survey.stackoverflow.co/2024/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">survey</a> of over 65000 developers, StackOverflow found that 76% were using or planning to use AI, and 62% are already using AI. Undoublably, knowing how to properly use AI is important in modern workplaces.
                    </p>
                    <p className='mb-4'>
                        However, in academic settings, AI runs the risk of plagiarism and lowering academic integrity. <a href='https://arxiv.org/pdf/2304.14993v2' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Joshi et. al, 2023</a> finds that ChatGPT responses are often incorrect if insufficient context, and cannot be fully relied on for the variability across responses. Even as AI improves at generating code, students relying solely on AI to generate code runs counter to learning in general and shows a lack of academic integrity.
                    </p>
                    <p className='mb-8'>
                        To balance both of these issues, this class will not entirely prohibit the use of AI. Assignments will be designed without the need to use AI, and AI should be the last choice you choose to help in order to get the most out of this course. However, in order to present a learning opportunity for both those that use AI and those that do not use AI during assignments, an AI synthesis activity will accompany every homework. This is to allow those that use AI to properly explain their usage and be honest about their use, and those that did not use AI to learn something new or improve their coding skills in some way. The AI synthesis activity is based on having AI complement a developer as they code, and research has shown that less rote, more intensive coding activities benefit greatly from augmentation of code via AI, rather than just automation <a href='https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5028371' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">(Loazia &amp; Rigobon, 2024)</a>
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"><HiAcademicCap />AI Synthesis Activity</h2>
                    <p className='mb-4'>
                        As part of each homework, you will perform an AI synthesis activity reflecting on your use of AI or using AI to improve your code in somew ay. This assignment will be written within your <span className='inline-code'>README.md</span> files for each homework, and will differ based on a self-report of whether you have used AI for any part of this assignment or not. For each assignment, you should save the chat logs with AI if you use it explicity for the assignment, as it will be submitted as part of this activity! The AI synthesis activity will represent <b>5% of the individual homework's grade</b>.
                    </p>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Activity A: If you used AI</h3>
                    <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                        <li>Cite the usage by including screenshots or a link to the conversation with your AI of choice. Make sure to include any context, instructions, and all the converstations you had with the AI.</li>
                        <li>Write about why you used AI. Was there a gap in knowledge you wanted to fill? Were the answers through traditional search engines not adquete? Did you want to let AI help you format something in a quick manner?</li>
                        <li>Evaluate the AI's response. If you asked multiple questions, you can pick one of the responses the AI generated. Does the AI answer your question properly? Does it hallucinate any details? Could there be room to improve this response through manual editing? Did you accept this response fully or adapt parts of it into your work? </li>
                        <li>If you used unfamiliar syntax or concepts generated by AI within your assignment, be sure to research them and explain what those concepts are to demonstrate your understanding.</li>
                    </ul>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Activity B: If you did NOT AI</h3>
                    <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                        <li>Explain some improvement you want to make within your code. Perhaps you have a code block that could be more concise, or a part of your code could be improved with a library or be performed with a more efficient algorithm.</li>
                        <li>Ask AI how to improve your code, by picking a part of your program you are interested in improving and asking something along the lines of "how can I improve this code?" This does not have to be verbatim; you could ask more specific questions for improvement, like "what JavaScript libraries could improve the efficiency of my code?" Screenshot or link the response.</li>
                        <li>Evaluate the response the AI generates. You may need to do some research to do this evaluation, to see if the syntax generates correctly or if any libraries the AI suggests are appropriate for the current task. Report on whether the AI's solution fits within your project, or if it would need modifications to work properly.</li>
                        <li>You do NOT need to use the AI suggestion within your final submission, if your code already works properly. If the scope of your inquiry in this activity leads you to replace parts of your code, switch to the other version of this activity instead.</li>
                    </ul>
                    <p className='mb-4'>
                        Templates for these responses are included in the provided <span className='inline-code'>README.md</span> starter files for each assignment. This activity will be graded mostly for effortful completion.
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"><MdGrade />Example Response</h2>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Activity A: You used AI</h3>
                    <div className='red-block mb-4'>
                        <b>Part 1: Cite the usage by including screenshots or a link to the conversation with your AI of choice. Make sure to include any context, instructions, and all the converstations you had with the AI.</b>
                        <p className='mb-4'> Here is a link to the conversation: <a href='https://platform.openai.com/logs/resp_68a3b66fc6dc8190aef9e49dc49b11050e8f44d6ae042de2' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">https://platform.openai.com/logs/resp_68a3b66fc6dc8190aef9e49dc49b11050e8f44d6ae042de2</a> </p>
                        <b>Part 2: Write about why you used AI. Was there a gap in knowledge you wanted to fill? Were the answers through traditional search engines not adquete? Did you want to let AI help you format something in a quick manner?</b>
                        <p className='mb-4'> I used AI for this part of the assignment in order to help me format spells form my DnD app. I was unsure as to what format certain parts of my JSON used to store spells would look like, so I decided to ask GPT-4 in order to get a preliminary format for my JSON. </p>
                        <b>Part 3: Evaluate the AI's response. If you asked multiple questions, you can pick one of the responses the AI generated. Does the AI answer your question properly? Does it hallucinate any details? Could there be room to improve this response through manual editing? Did you accept this response fully or adapt parts of it into your work?</b>
                        <p className='mb-4'> I think the generated response gives me a good start to figuring out how I will format my spells and what properties the object for my spells will have in the application. While the generated object is quite thorough, especially in the object, and does not have any inaccuracies, the structuring of the JSON and the property names will likely require some adjustment in order to fit with my application. I will use this AI response as a base to build the JSON structure for spells in my program, with some adjustments. </p>
                        <b>Part 4: If you used unfamiliar syntax or concepts generated by AI within your assignment, be sure to research them and explain what those concepts are to demonstrate your understanding.</b>
                        <p className='mb-4'> There were no unfamiliar parts or syntax in the AI response.</p>
                    </div>
                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Activity B: You did NOT AI</h3>
                    <div className='blue-block mb-4'>
                        <b>Part 1: Explain some improvement you want to make within your code. Perhaps you have a code block that could be more concise, or a part of your code could be improved with a library or be performed with a more efficient algorithm.</b>
                        <p className='mb-4'> I want to improve the password verificiation within my program. While the complexity of my current password verification is enough for the current assignment, I have seen other websites that use much stronger password verification that includes things like symbols. I would like to learn how to incorporate that into my program.</p>
                        <b>Part 2: Ask AI how to improve your code, by picking a part of your program you are interested in improving and asking something along the lines of "how can I improve this code?" This does not have to be verbatim; you could ask more specific questions for improvement, like "what JavaScript libraries could improve the efficiency of my code?" Screenshot or link the response.</b>
                        <p className='mb-4'> Here is a link to the conversation: <a href='https://platform.openai.com/logs/resp_68a3bbcf5380819489d7775a2fe1194f0cab63f69f72ea6b' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">https://platform.openai.com/logs/resp_68a3bbcf5380819489d7775a2fe1194f0cab63f69f72ea6b</a> </p>
                        <b>Part 3: Evaluate the response the AI generates. You may need to do some research to do this evaluation, to see if the syntax generates correctly or if any libraries the AI suggests are appropriate for the current task. Report on whether the AI's solution fits within your project, or if it would need modifications to work properly.</b>
                        <p className='mb-4'> This response seems to be exactly what I was looking for in terms of improving the strength of passwords. It improves my regex by adding a section on special characters. I ran the new regex through a tester like <a href='https://regex101.com/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">https://regex101.com/</a> and it seemed to detect properly for an input like "Password1$". The suggestion of the library zxcvbn is interesting as it scores passwords passed into the library, allowing a pretty lightweight way to test passwords. There was even a testing website to try out passwords, which will make integrating it into an application pretty easy. In the future I will definitely consider zxcvbn if if password strength is of any concern.</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AIPolicy
