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
            Then, you should download the starter files from the top of this page (or from the card on this site's homepage), which contains some skeleton code with TODO items, a README and AI Synthesis template, a <span className='inline-code'>package.json</span> file, and the CSV file for the dataset. Once you have the starter files, navigate to the starter code directory within a terminal (either using the one integrated into your code editor or the terminal included with your OS), and run the command:
          </p>
          <p className='p-4 border-l-4 border-indigo-800 rounded-lg ring-2 ring-indigo-800 mb-8 shadow-lg font-mono'>
            npm install
          </p>
          <p className="mb-4">
            This command will be something you will commonly run at the start of every JavaScript project, in order to install the dependencies you need for the project. These dependencies are defined in the <span className='inline-code'>package.json</span> file, and the command downloads all of the dependencies from npmjs.com. For this homework, we will be using the <span className='inline-code'>papaparse</span> library to parse CSV files. Upon running this command, you should see a new directory called <span className='inline-code'>node_modules</span> and a <span className='inline-code'>package-lock.json</span> file have been created. The directory houses all the dependencies, while the the json file records installed dependencies. We will discuss project structure and dependency management in a later lecture, so for now leave both of these files alone for now!
          </p>
          <p className="mb-8">
            To run this homework, you can enter the command:
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

          {/* Step 1 */}
          <section className='mb-8'>
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
  const csv = Papa.parse(some_data);`}
                    </code>  
                  </pre>
                  
                  <li>Look at the documentation to see what other options you might need to specify given this dataset. Hint: there's may be a few important options you will need to specify!</li>
              </ul>  
            </div>
            <p className="mb-4">
              At the end of this section, you should have your data stored an object in a variable. 
            </p>  
          </section>
          
          {/* Step 2 */}
          <section className='mb-8'>
            <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Step 2: Data Cleaning</h3>
            <p className="mb-4">
              Now that you have your csv data parsed, you will want to destructure and clean your data in preparation for analysis. Data you recieve from large datasets may not always be clean- in fact, this dataset has many null values, including null review texts, ratings, countries, genders, and app versions. 
            </p>  
            <p className="mb-4">
              First, review the <a className='text-blue-700 underline' href='https://www.kaggle.com/datasets/pratyushpuri/multilingual-mobile-app-reviews-dataset-2025' target="_blank" rel="noopener noreferrer">dataset's column specifications</a>. The Kaggle page will contain a table of the columns of this data, their data types, descriptions and samples, and how many nulls values are contained in each column. As mentioned earlier, <span className='inline-code'>papaparse</span> converted all the data into strings. You will be converting all of the column values into their proper types.
            </p>
            <p className="mb-4">
              Your data cleaning goals are as follows:
            </p>
            <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
              <li>Filter out every record with <span className='inline-code'>null</span> column values, <b>except</b> <span className='inline-code'>user_gender</span>, as a null value is allowed.</li>
              <li>Convert the <span className='inline-code'>review_id</span>, <span className='inline-code'>user_id</span>, <span className='inline-code'>num_helpful_votes</span>, and <span className='inline-code'>user_age</span> to Integer</li>
              <li>Convert the <span className='inline-code'>rating</span> into a Float</li>
              <li>Convert <span className='inline-code'>review_date</span> into a <a className='text-blue-700 underline' href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date' target="_blank" rel="noopener noreferrer">Date</a></li>
              <li>Convert <span className='inline-code'>verified_purchase</span> to Boolean</li>
            </ul>
            <p className="mb-8">
              Here is an example of one of the cleaned, filtered records from the dataset:
            </p>
            <pre className='p-4 border-l-4 border-indigo-800 rounded-lg ring-2 ring-indigo-800 my-8 shadow-lg font-mono'>
              <code>
                {`{
  review_id: 99,
  user_id: 9262579,
  app_name: 'Grammarly',
  app_category: 'Music & Audio',
  review_text: 'Stupido malattia donna magari già posare sbagliare qualità. 
    Tempo vino morale sviluppo ora popolazione avvicinare.',
  review_language: 'fi',
  rating: 2.3,
  review_date: 2024-06-28T22:59:58.000Z,
  verified_purchase: false,
  device_type: 'Windows Phone',
  num_helpful_votes: 1090,
  user_age: 44,
  user_country: 'Vietnam',
  user_gender: '',
  app_version: '6.9.40-beta'
}`}
              </code>  
            </pre>
            <p className="mb-8">
              At the end of this section, you should have an object that contained your filtered and cleaned data. Make sure your properties <b>exactly</b> match the property names from the original dataset and have the correct data types stored in them.
            </p>
          </section>

          {/* Step 3 */}
          <section className='mb-8'>
            <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Step 3: Sentiment Analysis</h3>
            <p className="mb-4">
              With newly cleaned data, we are now ready to start analysing it! In this step, we will add a property to each record called <span className='inline-code'>sentiment</span> that represents a general label of the rating each user granted to apps. We will also destructure some parts of the reviews for analysis later on.
            </p>
            <p className="mb-4">
              Write a function called <span className='inline-code'>labelSentiment()</span> that takes in a rating as an argument and returns strings based on that rating:
            </p>
            <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
              <li><span className='inline-code'>positive</span> if the rating is greater than 4.0.</li>
              <li><span className='inline-code'>neutral</span> if the rating is between 2.0 and 3.0.</li>
              <li><span className='inline-code'>negative</span> if the rating is below 2.0</li>
            </ul>
            <p className="mb-4">
              Then, use this function to label every data record with a new property called <span className='inline-code'>sentiment</span>.
            </p>
            <p className="mb-4">
              Next, we will print out a breakdown of the sentiments by App, and then by language. You should format your <span className='inline-code'>console.log</span> statements similar to the examples below:
            </p>
            <pre className='p-4 border-l-4 border-indigo-800 rounded-lg ring-2 ring-indigo-800 my-8 shadow-lg font-mono'>
              <code>
                {`WhatsApp- Positive: 0, Neutral: 0, Negative: 0
...
fr- Positive: 0, Neutral: 0, Negative: 0`}
              </code>  
            </pre>
            <p className='mb-4'>
              For this section, you may find destructuring your objects to be helpful in processing and sorting your data. Also, you may find template literals to be helpful to print out complex lines like the ones shown above. Refer to the lecture slides for how you can use both of these syntactical techniques!
            </p>
          </section>

          {/* Step 4 */}
          <section className='mb-8'>
            <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Step 4: Basic NLP</h3>
            <p className="mb-4">
              With newly cleaned data, we are now ready to start analysing it! In this step, we will add a property to each record called <span className='inline-code'>sentiment</span> that represents a general label of the rating each user granted to apps. We will also destructure some parts of the reviews for analysis later on.
            </p>
            <p className="mb-4">
              Write a function called <span className='inline-code'>labelSentiment()</span> that takes in a rating as an argument and returns strings based on that rating:
            </p>
            <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
              <li><span className='inline-code'>positive</span> if the rating is greater than 4.0.</li>
              <li><span className='inline-code'>neutral</span> if the rating is between 2.0 and 3.0.</li>
              <li><span className='inline-code'>negative</span> if the rating is below 2.0</li>
            </ul>
            <p className="mb-4">
              Then, use this function to label every data record with a new property called <span className='inline-code'>sentiment</span>.
            </p>
            <p className="mb-4">
              Next, we will print out a breakdown of the sentiments by App, and then by language. You should format your <span className='inline-code'>console.log</span> statements similar to the examples below:
            </p>
            <pre className='p-4 border-l-4 border-indigo-800 rounded-lg ring-2 ring-indigo-800 my-8 shadow-lg font-mono'>
              <code>
                {`WhatsApp- Positive: 0, Neutral: 0, Negative: 0
...
fr- Positive: 0, Neutral: 0, Negative: 0`}
              </code>  
            </pre>
            <p className='mb-4'>
              For this section, you may find destructuring your objects to be helpful in processing and sorting your data. Also, you may find template literals to be helpful to print out complex lines like the ones shown above. Refer to the lecture slides for how you can use both of these syntactical techniques!
            </p>
          </section>
        </section>
      </div>
    </div>
  )
}

export default DataAnalysis
