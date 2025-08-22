import { IoStatsChart } from "react-icons/io5";
import { SiCanvas } from "react-icons/si";
import { GiDiscussion } from "react-icons/gi";
import { FaFileContract } from "react-icons/fa";
import update from "../data/updating";

const HeroBanner = () => {
  return (
    <section className="pt-10 sm:pt-14 md:pt-16 w-full px-4 sm:px-8 flex-center min-h-[60vh]">
      <div className="flex flex-col md:flex-row w-full max-w-7xl gap-8 md:gap-16 lg:gap-32">
        {/* Left/Top */}
        <div className="w-full md:w-1/2 bg-white p-4 md:p-8 rounded-lg md:rounded-xl shadow flex flex-col justify-center text-center">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold ">CIS 1962: JavaScript Programming</p>
          <div className="border-t-4 border-red-700 my-2 mb-4"></div>
          <p className="text-base sm:text-lg">Fall 2025</p>
          <p className="text-base sm:text-lg">Monday 5:15-6:45 PM</p>
          <p className="text-base sm:text-lg">Amy Gutmann Hall 214</p>
          {/* Links */}
          <div className="flex-center flex-wrap gap-4 sm:gap-8 mt-4 w-full">
            <a href="#" className="flex-center flex-col gap-1 group w-1/3 sm:w-auto">
              <div className="text-2xl sm:text-3xl font-bold bg-white text-indigo-800 group-hover:text-red-700 px-4 sm:px-8 py-2 sm:py-3 rounded shadow border transition-colors">
                <IoStatsChart />
              </div> 
              <p className="text-base sm:text-xl text-indigo-800 group-hover:text-red-700 cursor-pointer text-center">Gradescope</p>
            </a>
            <a href="#" className="flex-center flex-col gap-1 group w-1/3 sm:w-auto">
              <div  className="text-2xl sm:text-3xl font-bold bg-white text-indigo-800 group-hover:text-red-700 px-4 sm:px-8 py-2 sm:py-3 rounded shadow border transition-colors">
                <SiCanvas />
              </div> 
              <p className="text-base sm:text-xl text-indigo-800 group-hover:text-red-700 cursor-pointer text-center">Canvas</p>
            </a>
            <a href="#" className="flex-center flex-col gap-1 group w-1/3 sm:w-auto">
              <div  className="text-2xl sm:text-3xl font-bold bg-white text-indigo-800 group-hover:text-red-700 px-4 sm:px-8 py-2 sm:py-3 rounded shadow border transition-colors">
                <GiDiscussion />
              </div> 
              <p className="text-base sm:text-xl text-indigo-800 group-hover:text-red-700 cursor-pointer text-center">Discussion</p>
            </a>
            <a href="syllabus" className="flex-center flex-col gap-1 group w-1/3 sm:w-auto">
              <div  className="text-2xl sm:text-3xl font-bold bg-white text-indigo-800 group-hover:text-red-700 px-4 sm:px-8 py-2 sm:py-3 rounded shadow border transition-colors">
                <FaFileContract />
              </div> 
              <p className="text-base sm:text-xl text-indigo-800 group-hover:text-red-700 cursor-pointer text-center">Syllabus</p>
            </a>
          </div>
        </div>
        {/* Right/Bot */}
        <div className="flex-center flex-col w-full md:w-1/2 gap-4">
            <p className="text-sm sm:text-base md:text-lg text-center md:text-left px-4 sm:px-0">
              Welcome to CIS 1962, a mini-course on JavaScript at the University of Pennsylvania! This course will introduce students to the fundamentals of modern JavaScript. You will build interactive projects through learning Node.js and the basics of web development, and dive into exploring modern frameworks and concepts of JavaScript. 
            </p>
            <div className="rounded-lg md:rounded-xl shadow p-4 sm:p-8 md:px-16 bg-white flex flex-col mb-2 w-full sm:w-3/4 text-left">
              <h2> <span className="font-bold">Current Topic:</span> {update.topic}</h2>
              <div className="border-t-2 border-red-700 w-full my-2"></div>
              <h2> <span className="font-bold">Homework:</span> {update.current_assignment}</h2>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;