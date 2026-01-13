export default function WelcomeCard() {
  return (
    <>
      <section 
          className="bg-indigo-900 text-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto"
      >
          <h1 className="text-4xl font-bold mb-4">Welcome to CIS 1962 Section 201!</h1>
          <p className="text-lg mb-6">
              This is a mini-course on JavaScript at the University of Pennsylvania! This course will introduce students to the fundamentals of modern JavaScript. You will build interactive projects through learning Node.js and the basics of web development, and dive into exploring modern frameworks and concepts of JavaScript.
          </p>
          <div className="flex justify-center">
            <a href="/syllabus" className="text-indigo-700 hover:text-white bg-white hover:bg-indigo-600 focus:text-white focus:bg-indigo-600 px-6 py-3 rounded-lg font-bold text-lg shadow-md transition-colors shadow-lg hover:shadow-xl focus:shadow-xl">
                Check out our syllabus!
            </a>
          </div>
          
      </section>
    </>
    
  )
}