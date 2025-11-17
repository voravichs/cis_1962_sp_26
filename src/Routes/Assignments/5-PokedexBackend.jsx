import { useEffect } from 'react';
import Navbar from '../../Components/Navbar'
import SideNav from '../../Components/SideNav';
import InlineCode from '../../Components/InlineCode';
import { FaGithub, FaPlug, FaRobot, FaPizzaSlice, FaClipboardList } from "react-icons/fa";
import { MdGrade, MdCatchingPokemon, MdCheckBoxOutlineBlank } from "react-icons/md";
import { TbBoxModel } from "react-icons/tb";
import { GrDocumentTest } from "react-icons/gr";
import assignments from '../../data/assignments';

const SECTIONS = [
  {
    id: "installation",
    icon: <FaPlug className="inline-block text-3xl" />
  },
  {
    id: "endpoints",
    icon: <TbBoxModel className="inline-block text-3xl" />
  },
  {
    id: "guidelines",
    icon: <FaClipboardList className="inline-block text-3xl" />
  },
  {
    id: "validerrortest",
    icon: <GrDocumentTest className="inline-block text-3xl" />
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

function PokedexBackend() {
  useEffect(() => {
        document.title = 'HW5 | CIS 1962';
    }, []);
  return (
    <div className="main-bg-light min-h-screen pt-16 pb-24 flex flex-col items-center gap-16 ah-font">
      <Navbar/>
      
      {/* Side Nav */}
      <SideNav sections={SECTIONS}/>
      
      <div className="max-w-4xl mx-auto px-4 py-10 pt-10 sm:pt-14 md:pt-16 text-lg">
        {/* Title */}
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Homework 5: Pokedex Backend</h1>
        <h3 className='text-lg sm:text-xl md:text-2xl opacity-60 mb-4'>Due December 1st at 11:59 PM</h3>

        {/* GitHub Classroom */}
        <section className='mb-8'>
          <a
            href={assignments[4].starter}
            download
            aria-label="Download starter files as zip"
            className="flex-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-lg font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-red-300 w-1/2 my-4"
          >
            <FaGithub className="text-3xl"/> Accept assignment on GitHub Classroom
          </a>  
        </section>
        
        {/* Intro Text */}
        <section className="mb-8 text-gray-800">
          <p>In this homework, you will be implementing a backend service in Express that provides a Pokedex API for managing Pokemon data and user Box entries. It will:</p>
          <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
            <li>Provides endpoints for fetching Pokemon data</li>
            <li>Manages user Box entries with authentication</li>
            <li>Handles CRUD operations for Box entries</li>
            <li>Validates requests and returns appropriate error responses</li>
          </ul>
          <p className="mb-4">
            This homework is heavily related to HW4, but does not require homework 4 to function. Essentially, you will be building the backend that we had provided you within HW4. By the end of this assignment, you should be able to run your Express server and get the same results you would with our provided API server. 
          </p>
          <p className='blue-block'>
            <h4 className='font-bold'>API Documentation</h4>
            <p className='mb-2'>See <InlineCode text={"API.md"}/> within the starter files for complete endpoint details, request/response formats, and type definitions.</p>
          </p>
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Assignment Goals</h3>
          <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
            <li>Use Express.js to design your own backend</li>
            <li>Work with JWT authentication to have secure API routes</li>
            <li>Learn to connect to Redis cloud databases for data persistence</li>
          </ul>
        </section>

        <hr className='my-16'></hr>

        {/* Installation */}
        <section id="installation" className="mb-8 scroll-mt-28 text-gray-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-4 flex gap-2"><FaPlug />Installation & Setup</h2>
          
          {/* Dependencies */}
          <section className="mb-8">
            <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Dependencies</h3>
            <p className="mb-4">
              This homework requires the following dependencies:
            </p>
            <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
              <li><InlineCode text={"typescript"}/></li>
              <li><InlineCode text={"zod"}/></li>
              <li><InlineCode text={"express"}/></li>
              <li><InlineCode text={"jsonwebtoken"}/></li>
              <li><InlineCode text={"pokedex-promise-v2"}/></li>
              <li><InlineCode text={"redis"}/></li>
              <li><InlineCode text={"@paralleldrive/cuid2"}/></li>
            </ul>
          </section>

          {/* Setup Requirements */}
          <section className="mb-8">
            <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Setup Requirements</h3>
            <p className="mb-4">
              Your backend must use <InlineCode text={"express"}/>, with <InlineCode text={"jsonwebtoken"}/> for authorization, and <InlineCode text={"redis"}/> for data persistence. You may choose to either use a Redis cloud database or a local Redis database.
            </p>
            <p className="mb-4">
              Follow the instructions provided during lecture to install and setup all three of these items. If you choose to use a Redis cloud database, please use a <InlineCode text={".env"}/> file and provide a <InlineCode text={".env.example"}/> file for instructors to use during grading.
            </p>
          </section>
          
        </section>

        <hr className='my-16'></hr>

        {/* Endpoints, Types, & Models */}
        <section id="endpoints" className="mb-8 scroll-mt-28 text-gray-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-4 flex gap-2"><TbBoxModel />Endpoints, Types, & Models</h2>

          {/* API Endpoint Structure */}
          <section className="mb-8">
            <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>API Endpoint Structure</h3>
            <p className='mb-4'>Your backend should implement the following endpoints as documented in <InlineCode text={"API.md"}/>:</p>
            <div className='ml-4 flex flex-col gap-4'>
              <section>
                <h4 className='font-bold'>Pokemon Endpoints (no authentication required)</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li><InlineCode text={"GET /pokemon/"}/> - List Pokemon with pagination</li>
                  <li><InlineCode text={"GET /pokemon/:name"}/> - Get Pokemon by name</li>
                </ul>  
              </section>
              <section>
                <h4 className='font-bold'>Box Endpoints (authentication required):</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li><InlineCode text={"GET /box/"}/> - List all Box entry IDs for authenticated user</li>
                  <li><InlineCode text={"POST /box/"}/> - Create a new Box entry</li>
                  <li><InlineCode text={"GET /box/:id"}/> - Get a specific Box entry</li>
                  <li><InlineCode text={"PUT /box/:id"}/> - Update a Box entry</li>
                  <li><InlineCode text={"DELETE /box/:id"}/> - Delete a Box entry</li>
                  <li><InlineCode text={"DELETE /box/"}/> - Clear all Box entries for authenticated user</li>
                </ul>  
              </section>
              <section>
                <h4 className='font-bold'>Authentication Endpoint</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li><InlineCode text={"POST /token"}/> - Creates and signs a JWT token that can be used for <InlineCode text={"Authorization"}/> headers in box routes </li>
                </ul>  
              </section>
            </div>
            
          </section>

          <hr className='my-8 mx-24'></hr>

          {/* Data Models */}
          <section className="mb-4">
            <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Data Models</h3>
            <p className='mb-4'>Define data models that match the API response types. Reference the type definitions in <InlineCode text={"API.md"}/>.</p>
            <div className='ml-4 flex flex-col gap-4'>
              <section>
                <h4><b>Core Types:</b></h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li><InlineCode text={"Pokemon"}/> - Complete Pokemon data with stats, sprites, types, and moves</li>
                  <li><InlineCode text={"PokemonType"}/> - Type information with name and color</li>
                  <li><InlineCode text={"PokemonMove"}/> - Move information with name, power, and type</li>
                  <li><InlineCode text={"BoxEntry"}/> - Complete Box entry with all fields</li>
                  <li><InlineCode text={"InsertBoxEntry"}/> - Box entry data for creation (without <InlineCode text={"id"}/>)</li>
                  <li><InlineCode text={"UpdateBoxEntry"}/> - Partial Box entry data for updates</li>
                </ul> 
              </section>
              <section>
                <h4><b>Box Entry Schema:</b></h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li><InlineCode text={"id: string"}/> - Unique identifier (CUID2-generated)</li>
                  <li><InlineCode text={"createdAt: string"}/> - ISO 8601 date string</li>
                  <li><InlineCode text={"level: number"}/> - Level between 1 and 100</li>
                  <li><InlineCode text={"location: string"}/> - Catch location</li>
                  <li><InlineCode text={"notes?: string"}/> - Optional notes</li>
                  <li><InlineCode text={"pokemonId: number"}/> - Pokemon ID</li>
                </ul> 
              </section>
            </div>
          </section>
        </section>  

        <hr className='my-16'></hr>

        {/* Assignment Guidelines */}
        <section id="guidelines" className="mb-8 scroll-mt-28 text-gray-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-4 flex gap-2"><FaClipboardList />Assignment Guidelines</h2>

          {/* Pokemon Data Synthesis */}
          <section className="mb-8">
            <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Pokemon Data Synthesis</h3>
            <div className='red-block'>
              <h4 className='font-bold'>Important:</h4>
              <p>Some <InlineCode text={"/pokemon"}/> endpoints require calling multiple endpoints from the <InlineCode text={"pokedex-promise-v2"}/> library and synthesizing the results into a single response. The Pokemon API client does not provide a single endpoint that returns all the data needed for your API responses. You should refer to the API Docs to see which data is required for each endpoint.</p>
            </div>
            <div className='ml-4 flex flex-col gap-4'>
              {/* GET /pokemon/:name */}
              <section>
                <h4 className='font-bold'>For <InlineCode text={"GET /pokemon/:name"}/></h4>
                <p className='mb-4'>This endpoint requires synthesizing data from multiple <InlineCode text={"pokedex-promise-v2"}/> API calls:</p> 
                <ul className="text-lg mb-4 ml-6 list-decimal text-gray-900">
                  <li><InlineCode text={"getPokemonByName(name)"}/> - Returns basic Pokemon data including:</li>
                  <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                    <li>ID, sprites, types, stats</li>
                    <li>Move references (names only, not full move data)</li>
                  </ul>
                  <li><InlineCode text={"getPokemonSpeciesByName(name)"}/> - Returns species data including:</li>
                  <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                    <li>Flavor text entries (for description)</li>
                    <li>Localized names (for proper English name)</li>
                  </ul>
                  <li><InlineCode text={"getMoveByName(moveName)"}/> - For each move in the Pokemon's move list:</li>
                  <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                    <li>Fetch full move details including power and type</li>
                    <li>Extract localized English name from move data</li>
                  </ul>
                </ul>  
              </section>

              {/* GET /pokemon/ */}
              <section>
                <h4 className='font-bold'>For <InlineCode text={"GET /pokemon/"}/> (List)</h4>
                <p className='mb-4'>This endpoint also requires multiple API calls:</p> 
                <ul className="text-lg mb-4 ml-6 list-decimal text-gray-900">
                  <li><InlineCode text={"getPokemonsList({ limit, offset })"}/> - Returns a paginated list of Pokemon references (names only)</li>
                  <li>For each Pokemon in the list, call <InlineCode text={"GET /pokemon/:name"}/> (or the equivalent service method) to get full Pokemon data</li>
                </ul>  
              </section>
            </div>
            <div className='blue-block'>
              <h4 className='font-bold'>Performance Considerations:</h4>
              <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                <li>Use <InlineCode text={"Promise.all()"}/> to fetch multiple Pokemon or moves in parallel</li>
                <li>Consider caching Pokemon data to avoid redundant API calls</li>
                <li>Handle errors gracefully if any individual API call fails</li>
              </ul>  
            </div>
          </section>

          <hr className='my-8 mx-24'></hr>

          {/* Authentication Middleware */}
          <section className="mb-4">
            <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Authentication Middleware</h3>
            <p className='mb-4'>Implement a <InlineCode text={"POST /token"}/> route that: </p>
            <div className='ml-4 flex flex-col gap-4'>
              <section>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li> Extracts a 'pennkey' from the body of the POST request</li>
                  <li> Handles missing 'pennkey' or body</li>
                  <li> Generates and signs a token using a provided <InlineCode text={"JWT_TOKEN_SECRET"}/> environment variable (use <a href='https://generate-secret.vercel.app/32' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">this link</a> to help generate a secret key)</li>
                </ul> 
              </section>
            </div>
            <p className='mb-4'>Then, implement authentication middleware that:</p>
            <div className='ml-4 flex flex-col gap-4'>
              <section>
                <h4 className='font-bold'>Token Extraction:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li> Extracts JWT token from <InlineCode text={"Authorization"}/> header</li>
                  <li> Expects format:< InlineCode text={"Authorization: Bearer <token>"}/></li>
                  <li> Handles missing or malformed headers</li>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>Token Validation:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li> Verifies JWT token signature</li>
                  <li> Validates token expiration</li>
                  <li> Extracts user information (pennkey) from token payload</li>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>Error Handling:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li> Returns <InlineCode text={"401 UNAUTHORIZED"}/> if token is missing </li>
                  <li> Returns <InlineCode text={"401 UNAUTHORIZED"}/> if token is invalid or expired </li>
                  <li>  Returns <InlineCode text={"401 UNAUTHORIZED"}/> if token format is incorrect </li>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>Context Passing:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li> Adds authenticated user information (pennkey) to request context </li>
                  <li> Makes user information available to Box endpoint handlers </li>
                </ul> 
              </section>
            </div>
          </section>

          <hr className='my-8 mx-24'></hr>

          {/* Box Entry Operations */}
          <section className="mb-4">
            <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Box Entry Operations</h3>
            <div className='ml-4 flex flex-col gap-4'>
              <section>
                <h4 className='font-bold'>Create Box Entry:</h4>
                <ul className="text-lg mb-4 ml-6 list-decimal text-gray-900">
                  <li>Validate request body against <InlineCode text={`InsertBoxEntry`}/> schema</li>
                  <li>Generate unique ID (CUID2)</li>
                  <li>Create complete <InlineCode text={`BoxEntry`}/> with generated ID</li>
                  <li>Store entry with key: <InlineCode text={`{pennkey}:pokedex:{id}`}/></li>
                  <li>Return created entry with <InlineCode text={`201 CREATED`}/></li>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>Get Box Entry:</h4>
                <ul className="text-lg mb-4 ml-6 list-decimal text-gray-900">
                  <li>Extract entry ID from path parameter</li>
                  <li>Retrieve entry from storage using <InlineCode text={`{pennkey}:pokedex:{id}`}/></li>
                  <li>Verify entry exists</li>
                  <li>Verify entry belongs to authenticated user</li>
                  <li>Return entry with <InlineCode text={`200 OK`}/> or <InlineCode text={`404 NOT_FOUND`}/></li>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>List Box Entries:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li>Query all keys matching pattern: <InlineCode text={`{pennkey}:pokedex:*`}/></li>
                  <li>Extract entry IDs from keys</li>
                  <li>Return array of unique entry IDs with <InlineCode text={`200 OK`}/></li>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>Update Box Entry:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li>Validate request body against <InlineCode text={`UpdateBoxEntry`}/> schema</li>
                  <li>Retrieve existing entry</li>
                  <li>Verify entry exists and belongs to user</li>
                  <li>Merge update fields with existing entry</li>
                  <li>Validate merged entry against <InlineCode text={`BoxEntry`}/> schema</li>
                  <li>Store updated entry</li>
                  <li>Return updated entry with <InlineCode text={`200 OK`}/></li>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>Delete Box Entry:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li>Extract entry ID from path parameter</li>
                  <li>Verify entry exists and belongs to user</li>
                  <li>Delete entry from storage</li>
                  <li>Return <InlineCode text={`204 NO CONTENT`}/></li>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>Clear All Box Entries:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li>Query all keys matching pattern: <InlineCode text={`{pennkey}:pokedex:*`}/></li>
                  <li>Delete all matching entries</li>
                  <li>Return <InlineCode text={`204 NO CONTENT`}/></li>
                </ul> 
              </section>
              
            </div>
          </section>

          <hr className='my-8 mx-24'></hr>

          {/* Data Persistence */}
          <section className="mb-4">
            <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Data Persistence</h3>
            <div className='ml-4 flex flex-col gap-4'>
              <section>
                <h4 className='font-bold'>Storage Strategy:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li>Store Box entries in a persistent storage system (use Redis get/set)</li>
                  <li>Use user-scoped keys: <InlineCode text={"{pennkey}:pokedex:{entryId}"}/></li>
                  <li>Ensure data isolation between users</li>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>ID Generation:</h4>
                <ul className="text-lg mb-4 ml-6 list-decimal text-gray-900">
                  <li>Generate unique IDs for Box entries using CUID2 or similar</li>
                  <li>Ensure IDs are collision-resistant</li>
                  <li>Return generated ID in created response</li>
                </ul> 
              </section>
              <seciton>
                <h4 className='font-bold'>Data Retrieval:</h4>
                <ul className="text-lg mb-4 ml-6 list-decimal text-gray-900">
                  <li><InlineCode text={"GET /box/"}/> should return only entry IDs (not full entries)</li>
                  <li><InlineCode text={"GET /box/:id"}/> should return complete entry data</li>
                  <li>Filter entries by user's pennkey to ensure data isolation</li>
                </ul> 
              </seciton>
            </div>
          </section>

        </section>

        <hr className='my-16'></hr>

        {/* Validation, Errors, and Testing */}
        <section id="validerrortest" className="mb-8 scroll-mt-28 text-gray-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-4 flex gap-2"><GrDocumentTest />Validation, Errors, and Testing</h2>
          {/* Request Validation */}
          <section className="mb-4">
            <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Request Validation</h3>
            <div className='ml-4 flex flex-col gap-4'>
              <section>
                <h4 className='font-bold'>Query Parameter Validation:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li><InlineCode text={"GET /pokemon/"}/> requires <InlineCode text={"limit"}/> and <InlineCode text={"offset"}/> as numbers</li>
                  <li>Validate <InlineCode text={"limit > 0"}/> and <InlineCode text={"offset >= 0"}/></li>
                  <li>Return <InlineCode text={"400 BAD_REQUEST"}/> for invalid parameters</li>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>Path Parameter Validation:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li><InlineCode text={"GET /pokemon/:name"}/> requires valid name string</li>
                  <li><InlineCode text={"GET /box/:id"}/>, <InlineCode text={"PUT /box/:id"}/>, <InlineCode text={"DELETE /box/:id"}/> require valid ID string</li>
                  <li>Return <InlineCode text={"400 BAD_REQUEST"}/> for invalid path parameters</li>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>Request Body Validation:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li><InlineCode text={`POST /box/`}/> requires valid <InlineCode text={`InsertBoxEntry`}/>:</li>
                  <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                    <li><InlineCode text={`createdAt`}/>: valid ISO 8601 string</li>
                    <li><InlineCode text={`level`}/>: number between 1 and 100</li>
                    <li><InlineCode text={`location`}/>: non-empty string</li>
                    <li><InlineCode text={`notes`}/>: optional string</li>
                    <li><InlineCode text={`pokemonId`}/>: valid number</li>
                  </ul>
                  <li><InlineCode text={`PUT /box/:id`}/> requires valid <InlineCode text={`UpdateBoxEntry`}/> (all fields optional)</li>
                  <li>Return <InlineCode text={`400 BAD_REQUEST`}/> for invalid request bodies</li>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>Business Logic Validation:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li>Validate that Box entry exists before update/delete</li>
                  <li>Validate that Box entry belongs to authenticated user</li>
                  <li>Return <InlineCode text={`404 NOT_FOUND`}/> if entry doesn't exist</li>
                  <li>Return <InlineCode text={`403 FORBIDDEN`}/> if user tries to access another user's entry</li>
                </ul> 
              </section>
            </div>
          </section>

          <hr className='my-8 mx-24'></hr>

          {/* Error Handling */}
          <section className="mb-4">
            <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Error Handling</h3>
            <div className='ml-4 flex flex-col gap-4'>
              <section>
                <h4 className='font-bold'>Error Response Format:</h4>
                <p className='mb-4'>Return errors in the format specified in <InlineCode text={"API.md"}/>:</p>
                <div className='blue-block my-4'>
                  <pre>{`{
  code: string;        // Error code (e.g., "UNAUTHORIZED")
  message: string;     // Human-readable error message
}`}

                  </pre>
                </div>
              </section>
              <section>
                <h4 className='font-bold'>HTTP Status Codes:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li><InlineCode text={`200 OK`}/> - Successful GET, PUT requests</li>
                  <li><InlineCode text={`201 CREATED`}/> - Successful POST requests</li>
                  <li><InlineCode text={`204 NO CONTENT`}/> - Successful DELETE requests</li>
                  <li><InlineCode text={`400 BAD_REQUEST`}/> - Invalid request parameters or body</li>
                  <li><InlineCode text={`401 UNAUTHORIZED`}/> - Missing or invalid authentication token</li>
                  <li><InlineCode text={`403 FORBIDDEN`}/> - Insufficient permissions</li>
                  <li><InlineCode text={`404 NOT_FOUND`}/> - Resource not found</li>
                  <li><InlineCode text={`409 CONFLICT`}/> - Resource conflict</li>
                  <li><InlineCode text={`500 INTERNAL_SERVER_ERROR`}/> - Server error</li>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>Error Scenarios:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li>Missing required fields → <InlineCode text={`400 BAD_REQUEST`}/></li>
                  <li>Invalid field types → <InlineCode text={`400 BAD_REQUEST`}/></li>
                  <li>Invalid field values {`(e.g., level < 1 or > 100)`} → <InlineCode text={`400 BAD_REQUEST`}/></li>
                  <li>Missing authentication token → <InlineCode text={`401 UNAUTHORIZED`}/></li>
                  <li>Invalid/expired token → <InlineCode text={`401 UNAUTHORIZED`}/></li>
                  <li>Box entry not found → <InlineCode text={`404 NOT_FOUND`}/></li>
                  <li>Database/storage errors → <InlineCode text={`500 INTERNAL_SERVER_ERROR`}/></li>
                </ul> 
              </section>

            </div>
          </section>

          <hr className='my-8 mx-24'></hr>

          {/* Testing Considerations */}
          <section className="mb-4">
            <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Testing Considerations</h3>
            <div className='blue-block my-4'>
              <p className='mb-4'>In order to test your backend code, you should start up your Express backend (and Redis if you are using a local database) and make requests to your backend using <InlineCode text={"curl"}/> commands. You may also choose to use your frontend from HW4 if you can run both concurrently.</p>
            </div>
            
            <div className='ml-4 flex flex-col gap-4'>
              <section>
                <h4 className='font-bold'>Authentication:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li>Missing Authorization header</li>
                  <li>Invalid token format</li>
                  <li>Expired token</li>
                  <li>Invalid token signature</li>
                  <li>Valid token with correct user context</li>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>Pokemon Endpoints:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li>List with valid pagination parameters</li>
                  <li>List with invalid parameters (negative, non-numeric)</li>
                  <li>Get by valid name</li>
                  <li>Get by invalid name (not found)</li>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>Box Endpoints:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li>Create with all required fields</li>
                  <li>Create with optional fields</li>
                  <li>Create with invalid data (missing fields, invalid types, out of range)</li>
                  <li>Get existing entry</li>
                  <li>Get non-existent entry</li>
                  <li>Get entry belonging to different user</li>
                  <li>Update with partial fields</li>
                  <li>Update non-existent entry</li>
                  <li>Delete existing entry</li>
                  <li>Delete non-existent entry</li>
                  <li>List entries for authenticated user</li>
                  <li>Clear all entries</li>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>Edge Cases:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li>Very long strings in location/notes</li>
                  <li>Boundary values (level 1, level 100)</li>
                  <li>Special characters in input fields</li>
                  <li>Concurrent requests for same resource</li>
                  <li>Empty Box (no entries)</li>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>Error Handling:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li>Network failures</li>
                  <li>Storage/database errors</li>
                  <li>Invalid JSON in request body</li>
                  <li>Missing required headers</li>
                </ul> 
              </section>
            </div>
          </section>

          <hr className='my-8 mx-24'></hr>

          {/* Extra */}
          <section className="mb-4">
            <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Additional Considerations</h3>
            <p>Within the homework instructions are additional sections about security, performance, and common pitfalls when desinging your backend. Please refer to these to help you through as you develop your backend code.</p>
          </section>

        </section>

        <hr className='my-16'></hr>

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
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"> <MdGrade />Submission & Requirements</h2>
          <p className='mb-4'>
            To submit, simply push your commits to the repository generated from GitHub classroom. Make sure your latest commit before the deadline includes all files you worked on during this homework and your <span className='inline-code'>AIAssignment.md</span> file containing your AI synthesis activity. Before you submit, make sure you lint your code for style errors using the command <span className='inline-code'>npm run lint</span>. More details on style can be found in the <a href='style-guide' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">style guide</a>. We will take -1 points for every style error remaining in the submission for the submitted files.
          </p>

          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Requirements</h3>
          <p className='mb-4'>Your backend implementation must provide the following:</p>
          <ul className="text-lg mb-4 ml-6 text-gray-900">
            <li className='flex items-center gap-2'><MdCheckBoxOutlineBlank/> Implement Pokemon endpoints (list and get by name)</li>
            <li className='flex items-center gap-2'><MdCheckBoxOutlineBlank/> Implement Box endpoints (list, create, get, update, delete, clear)</li> 
            <li className='flex items-center gap-2'><MdCheckBoxOutlineBlank/> Handle JWT authentication for Box endpoints</li> 
            <li className='flex items-center gap-2'><MdCheckBoxOutlineBlank/> Validate request parameters and request bodies</li> 
            <li className='flex items-center gap-2'><MdCheckBoxOutlineBlank/> Return appropriate error responses</li> 
            <li className='flex items-center gap-2'><MdCheckBoxOutlineBlank/> Persist Box entries per user (scoped by pennkey) using Redis </li> 
            <li className='flex items-center gap-2'><MdCheckBoxOutlineBlank/> Generate unique IDs for Box entries using CUID2 or equivalent</li>
            <li className='flex items-center gap-2'><MdCheckBoxOutlineBlank/> Provide a proper <InlineCode text={".env.example"}/> file with instructions on using Redis cloud or Redis locally</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default PokedexBackend
