import { useEffect } from 'react';
import Navbar from '../../Components/Navbar'
import { FaPlug, FaClipboardList  } from "react-icons/fa";

function DataAnalysis() {
  useEffect(() => {
        document.title = 'HW1 | CIS 1962';
    }, []);
  return (
    <div className="main-bg-light min-h-screen pt-16 pb-24 flex flex-col items-center gap-16 ah-font">
      <Navbar/>
      <div className="max-w-4xl mx-auto px-4 py-10 pt-10 sm:pt-14 md:pt-16 text-lg">
        {/* Title */}
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Homework 1: Data Analysis</h1>
        <h3 className='text-lg sm:text-xl md:text-2xl opacity-60 mb-4'>Due September 29th at 11:59 PM</h3>

        <p className='p-4 border-l-4 border-red-700 rounded-lg ring-2 ring-red-700 mb-4 shadow-lg font-mono'><span className='font-bold'>Topics:</span> CSV File Parsing, Data Cleaning, Destructuring, Array Methods, Control Flow, Template Literals, Data Analysis/Aggregation</p>

        {/* Intro */}
        <section className="mb-8 text-gray-800">
          <p className="mb-4">
            This homework will help you get acquainted with using JavaScript syntax and developing moderately complex JavaScript projects. For this assignment, you will be analysing a <a className='text-blue-700 underline' href='https://www.kaggle.com/datasets/pratyushpuri/multilingual-mobile-app-reviews-dataset-2025' target="_blank" rel="noopener noreferrer">Kaggle dataset of multilingual mobile app reviews</a>, presented to you as a CSV file. You will be writing code to parse, clean, prepare, and analyze this data to extract meaningful insights. This is a classic exercise in data wrangling and preprocessing!
          </p>
          <p className="mb-4">
            Your analysis of this dataset will mostly be exploratory, within the bounds of what you've learned in JavaScript so far. We will not expect analysis on the level of a Big Data class. However, you may find that you can do quite a lot of interesting anaylsis already with the knowledge of JavaScript you've learned so far!
          </p>
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Assignment Goals</h3>
          <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
              <li>Strengthen your ability to work with objects, arrays, and various data types in real-world scenarios</li>
              <li>Gain experience using modern ES6 features such as destructuring, template literals, and advanced function syntax for arrays</li>
              <li>Practice designing and implementing data transformation, filtering, and analysis logic using loops, conditions, and functions</li>
              <li>Learn to use various built-in and external Node dependencies (fs and papaparse)</li>
          </ul>
        </section>

        {/* Introduction */}
        <section className="mb-16 text-gray-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"> <FaPlug /> Introduction and Installation</h2>
          <p className="mb-4">
            Imagine you are a data analyst for a mobile app developer, and you are tasked with performing analysis on app reviews of various popular apps from users across multiple languages. You have been asked to perform this analysis in JavaScript, and fortunately you have just recently learned the basics of JavaScript, enough to parse, clean, and analyze this data!
          </p>
          <p className="mb-4">
            This assignment will be written in Node.js, a server-side implementation of JavaScript. Through code editors and plain text files, you will be able to run script files that perform the data analysis without the need of a browser to run JavaScript. Much like Java's compiler or Python's interpreter, Node will handle the compilation and interpretation of the code for you.
          </p>
          <p className="mb-4">
            Before you start this homework, make sure you have already installed Node.js and a code editor like VSCode by following the instructions in the <a className='text-blue-700 underline' href='dev-guide' target="_blank" rel="noopener noreferrer">JS Development Guide</a>. 
          </p>
          <p className="mb-8">
            Then, you should download the starter files from the top of this page (or from the card on this site's homepage), which contains some skeleton code with TODO items, README template, a <span className='inline-code'>package.json</span>  file, and the CSV file for the dataset. Once you have the starter files, navigate to the starter code directory within a terminal (either using the one integrated into your code editor or the terminal included with your OS), and type:
          </p>
          <p className='p-4 border-l-4 border-indigo-800 rounded-lg ring-2 ring-indigo-800 mb-8 shadow-lg font-mono'>
            npm install
          </p>
          <p className="mb-4">
            This command will be something you will commonly run at the start of every JavaScript project, in order to install the dependencies you need for the project. These dependencies are defined in the <span className='inline-code'>package.json</span> file, and the command downloads all of the dependencies from npmjs.com. For this homework, we will be using the <span className='inline-code'>papaparse</span> library to parse CSV files.
          </p>
          <p className="mb-8">
            To run this homework, you can run the command:
          </p>
          <pre className='p-4 border-l-4 border-indigo-800 rounded-lg ring-2 ring-indigo-800 mb-8 shadow-lg font-mono'>
            <code>
              node src/main.js
            </code>
          </pre>
        </section>

        {/* Instructions */}
        <section className="mb-8 text-gray-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"><FaClipboardList />Instructions</h2>
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Step 1: Parse the Data</h3>
          <p className="mb-4">
            Your first task will be to utilize two dependencies, the built-in <span className='inline-code'>fs</span>, and <span className='inline-code'>papaparse</span>, which you installed earlier, in order to turn the CSV data into an object we can work with in JavaScript. Here are the specifications and tips for using each of these dependencies:
          </p>
          {/* fs */}
          <div className='p-4 border-l-4 border-red-700 rounded-lg ring-2 ring-red-700 mb-4 shadow-lg'>
            <span className='inline-code'>fs</span>
            <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                <li><span className='inline-code'>fs</span>, which stands for File System, is a built-in module for Node.js</li>
                <li>It allows your program to interact with the file system on your computer.</li>
                <li>After importing the module, you can call various methods, defined in its <a className='text-blue-700 underline' href='https://nodejs.org/api/fs.html' target="_blank" rel="noopener noreferrer">documentation</a>.</li>
                <li>For our purposes, use <span className='inline-code'>fs.readFileSync(path[, options])</span>, which is a simple synchronous option to read files. Here's an example of how you may import <span className='inline-code'>fs</span> and use this method:</li>
                <pre className='p-4 border-l-4 border-indigo-800 rounded-lg ring-2 ring-indigo-800 my-8 shadow-lg font-mono'>
                  <code>
                    {`const fs = require('fs');
const data = fs.readFileSync('./file.txt', 'utf8');`}
                  </code>
                </pre>
            </ul>  
          </div>
          {/* papaparse */}
          <div className='p-4 border-l-4 border-red-700 rounded-lg ring-2 ring-red-700 mb-4 shadow-lg'>
            <span className='inline-code'>papaparse</span>
            <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                <li><span className='inline-code'>papaparse</span> is a simple CSV parser that parses CSV files into JSON/JavaScript objects with minimal code. You should read the opening page of <a className='text-blue-700 underline' href='https://www.papaparse.com/' target="_blank" rel="noopener noreferrer">documentation</a>, as it contains all you need for this assignment.</li>
                <li>It's important to note that <span className='inline-code'>papaparse</span> <b>parses everything into a string</b>, this means even numbers and booleans. While <span className='inline-code'>papaparse</span> has options to automatically convert types, we recommend against doing so, so that you can get practice with JavaScripts normal type conversion in the data cleaning part of the assignment.</li>
                <li>Similar to fs above, you must import <span className='inline-code'>papaparse</span> in order to use it. Here's an example:</li>
                <pre className='p-4 border-l-4 border-indigo-800 rounded-lg ring-2 ring-indigo-800 my-8 shadow-lg font-mono'>
                  <code>
                    {`const Papa = require('papaparse');
const csv = Papa.parse(csv);`}
                  </code>  
                </pre>
                
                <li>Look at the documentation to see what other options you might need to specify given this dataset. Hint: there's may be a few important options you will need to specify!</li>
            </ul>  
          </div>
          <p className="mb-4">
            At the end of this section, you should have your data stored an object in a variable. 
          </p>
        </section>
      </div>
    </div>
  )
}

export default DataAnalysis
