import { useEffect } from 'react';
import Navbar from '../../Components/Navbar'
import SideNav from '../../Components/SideNav';
import InlineCode from '../../Components/InlineCode';
import { FaGithub, FaPlug, FaRobot, FaPizzaSlice, FaClipboardList } from "react-icons/fa";
import { MdGrade, MdCatchingPokemon, MdCheckBoxOutlineBlank } from "react-icons/md";
import assignments from '../../data/assignments';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

const SECTIONS = [
  {
    id: "terminology",
    icon: <MdCatchingPokemon className="inline-block text-3xl" />
  },
  {
    id: "steps",
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

const pokedexTree = (
  <pre>{`
pokedex/
├── src/
│   ├── components/
│   │   ├── PokemonList.tsx
│   │   ├── PokemonCard.tsx
│   │   ├── PokemonDetails.tsx
│   │   ├── BoxList.tsx
│   │   ├── BoxCard.tsx
│   │   ├── BoxForm.tsx
│   │   └── Modal.tsx
│   ├── api/
│   │   └── PokemonAPI.ts
│   ├── types/
│   │   └── types.ts
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── package.json
└── tsconfig.json
`}</pre>
);

function ReactPokedex() {
  useEffect(() => {
        document.title = 'HW4 | CIS 1962';
    }, []);
  return (
    <div className="main-bg-light min-h-screen pt-16 pb-24 flex flex-col items-center gap-16 ah-font">
      <Navbar/>
      
      {/* Side Nav */}
      <SideNav sections={SECTIONS}/>
      
      <div className="max-w-4xl mx-auto px-4 py-10 pt-10 sm:pt-14 md:pt-16 text-lg">
        {/* Title */}
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Homework 4: React Pokedex</h1>
        <h3 className='text-lg sm:text-xl md:text-2xl opacity-60 mb-4'>Due November 17th at 11:59 PM</h3>

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
        
        {/* Intro Text */}
        <section className="mb-8 text-gray-800">
          <p className="mb-4">
            In this homework, you will use <b>React</b> and <b>Vite</b> to build a Pokedex application. 
          </p>
          <p className="mb-4">
            A Pokedex is a handheld device from the Pokémon franchise that displays information about Pokémon and tracks which ones you've caught. You'll be building a web-based Pokedex using the API we've provided.
          </p>
          <p className="mb-4">
            This homework is open-ended, so feel free to get creative with the design and features while meeting the core requirements below.
          </p>
          <p className='blue-block'>
            <h4 className='font-bold'>API Documentation</h4>
            <p className='mb-2'>See <InlineCode text={"API.md"}/> within the starter files for complete endpoint details and response types.</p>
            <p className='mb-2'><b>Important</b>: Box management endpoints require authentication via Bearer token. You'll need to obtain a JWT token from your instructor to access these features.</p>
          </p>
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Assignment Goals</h3>
          <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
            <li>Use React to design the view for an app given a complete backend</li>
            <li>Communicate with a backend API to retrieve and store data</li>
            <li>Learn the project structure and syntax of a React application, making use of TypeScript for types throughout.</li>
          </ul>
        </section>

        {/* Terminology */}
        <section id="terminology" className="mb-8 scroll-mt-28 text-gray-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"><MdCatchingPokemon />Terminology & References</h2>

          <p className="mb-4">
            You will not need domain knowledge about the Pokémon franchise to do this project. However, there are some important terms to review that may help when designing your Pokedex. We'll provide their definitions as they relate to the app below:
          </p>

          <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
            <li><b>Pokémon</b>: A creature that can be caught and stored in your Pokedex</li>
            <li><b>Pokedex</b>: A device for viewing Pokémon information and tracking catches</li>
            <li><b>Box</b>: An online storage container for caught Pokémon entries</li>
          </ul>

          <p className="mb-4">
            There are many online resources you may reference to inspire the design of your Pokedex. For instance, <a href='https://dex.pokemonshowdown.com/pokemon/' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Pokémon Showdown</a> has a searchable Pokedex that contains a lot of information. Your web application will show a much smaller subset of information and be paginated, but should generally show serve a similar function to similar online Pokedexes.
          </p>
        </section>

        {/* Recommended Steps */}
        <section id="steps" className="mb-8 scroll-mt-28 text-gray-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-800 font-bold mb-2 flex gap-2"><FaClipboardList />Recommended Steps</h2>

          {/* Step 1 */}
          <section className="mb-4">
            <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Step 1: Set up the project</h3>
            <div className='ml-4'>
              <p>Create a new React project using Vite with TypeScript:</p>
              <div className='blue-block font-mono my-4'>
                npm create vite@latest pokedex --template react-ts
              </div>
              <p>Install any necessary dependencies and organize your project structure appropriately.</p>
              <div className='blue-block my-4'>
                <h4 className='font-bold'>Recommended Project Structure:</h4>
                {pokedexTree}
                <p className='mt-4'>This structure keeps your code organized and makes it easy to find and modify specific features.</p>
              </div>  
            </div>
          </section>

          {/* Step 2 */}
          <section className="mb-4">
            <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Step 2: Define TypeScript types and build the basic interface</h3>
            <div className='ml-4 flex flex-col gap-4'>
              <section>
                <h4 className='font-bold'>TypeScript Types:</h4>
                <p>First, create type definitions based on the API documentation. Create a types.ts file with interfaces that match the API responses:</p>
                <div className='blue-block my-4'>
                  <pre>{`// From API.md - Pokemon types
export interface PokemonType {
  name: string;
  color: string;
}

export interface PokemonMove {
  name: string;
  power?: number;
  type: PokemonType;
}

export interface Pokemon {
  id: number;
  name: string;
  description: string;
  types: PokemonType[];
  moves: PokemonMove[];
  sprites: {
    front_default: string;
    back_default: string;
    front_shiny: string;
    back_shiny: string;
  };
  stats: {
    hp: number;
    speed: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
  };
}

// Box entry types
export interface BoxEntry {
  id: string;
  createdAt: string;
  level: number;
  location: string;
  notes?: string;
  pokemonId: number;
}

export interface InsertBoxEntry {
  createdAt: string;
  level: number;
  location: string;
  notes?: string;
  pokemonId: number;
}

export interface UpdateBoxEntry {
  createdAt?: string;
  level?: number;
  location?: string;
  notes?: string;
  pokemonId?: number;
}`}</pre>
                </div>
              </section>
              
              <section>
                <h4 className='font-bold'>Component Structure</h4>
                <p>Create the foundational UI components for your Pokedex:</p>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li><InlineCode text={"PokemonList"}/> — displays the paginated list of Pokémon with pagination controls</li>
                  <li><InlineCode text={"PokemonCard"}/> — shows individual Pokémon (image, name, types) in the list</li>
                  <li><InlineCode text={"PokemonDetail"}/> — displays detailed Pokémon information in a modal</li>
                  <li><InlineCode text={"BoxList"}/> — displays the user's caught Pokémon</li>
                  <li><InlineCode text={"BoxCard"}/> — shows a Box entry with edit/delete buttons</li>
                  <li><InlineCode text={"BoxForm"}/> — form for creating/editing Box entries</li>
                  <li><InlineCode text={"Modal"}/> — reusable modal component for forms and details</li>
                </ul>  
              </section>
              
              <section>
                <h4 className='font-bold'>Component Props</h4>
                <p>Define clear prop interfaces for each component:</p>
                <div className='blue-block my-4'>
                  <pre>{`interface PokemonCardProps {
  pokemon: Pokemon;
  onClick: () => void;
}

interface BoxCardProps {
  entry: BoxEntry;
  pokemon: Pokemon;
  onEdit: (entry: BoxEntry) => void;
  onDelete: (id: string) => void;
}`}</pre>
                </div>
                <p>When defining prop and state types for each component, reference the response types provided in <InlineCode text={"API.md"}/>.</p>
              </section>
            </div>
            
          </section>

          {/* Step 3 */}
          <section className="mb-4">
            <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Step 3: Create an API service class</h3>
            <p className='mb-4'>Create an API service class (e.g., <InlineCode text={"PokemonAPI.ts"}/>) to encapsulate all API requests. This class should:</p>
            <div className='ml-4 flex flex-col gap-4'>
              <section>
                <h4 className='font-bold'>Configuration:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li>Use base URL: <InlineCode text={"https://cis1962-hw4-server.esinx.net/api/"}/></li>
                  <li>Store and manage the JWT authentication token (provided by your instructor)</li>
                  <li>Handle adding the <InlineCode text={"Authorization: Bearer {token}"}/> header for Box endpoints</li>
                  <li>Implement error handling for failed requests</li>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>API Endpoints to Support:</h4>
                <p>Refer to <InlineCode text={"API.md"}/> for complete details on all endpoints. Your class should support:</p>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li><b>Pokémon Endpoints</b> (no authentication required):</li>
                  <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                    <li><InlineCode text={"GET /pokemon/"}/> - List Pokémon with pagination (requires <InlineCode text={"limit"}/> and <InlineCode text={"offset"}/> query params)</li>
                    <li><InlineCode text={"GET /pokemon/:name"}/> - Get details for a specific Pokémon by name</li>
                  </ul>
                  <li><b>Box Endpoints</b> (authentication required):</li>
                  <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                    <li><InlineCode text={"GET /box/"}/> - List all Box entry IDs for the authenticated user</li>
                    <li><InlineCode text={"POST /box/"}/> - Create a new Box entry</li>
                    <li><InlineCode text={"GET /box/:id"}/> - Get a specific Box entry</li>
                    <li><InlineCode text={"PUT /box/:id"}/> - Update a Box entry</li>
                    <li><InlineCode text={"DELETE /box/:id"}/> - Delete a Box entry</li>
                  </ul>
                </ul> 
              </section>
            </div>
            <div className='blue-block'>
              <h4 className='font-bold'>Pagination Tips:</h4>
              <ul className="mb-4 ml-6 list-disc text-gray-900">
                <li>Listing endpoints require <InlineCode text={"limit"}/> and <InlineCode text={"offset"}/> parameters</li>
                <li>We recommend a page size of <InlineCode text={"10"}/>, though you're free to choose differently</li>
                <li>Calculate <InlineCode text={"offset"}/> as <InlineCode text={"pageNumber * pageSize"}/> to fetch the correct page</li>
              </ul>
            </div>
          </section>

          {/* Step 4 */}
          <section className="mb-4">
            <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Step 4: Integrate the API with components</h3>
            <p className='mb-4'>With your basic interface and API class ready, connect them together.</p>
            <div className='ml-4 flex flex-col gap-4'>
              <section>
                <h4 className='font-bold'>State Management:</h4>
                <p>Create state variables in your components to track:</p>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li><InlineCode text={"pokemon: Pokemon[]"}/> — the current page of Pokémon</li>
                  <li><InlineCode text={"loading: boolean"}/> — whether data is being fetched</li>
                  <li><InlineCode text={"error: string | null"}/> — any error messages</li>
                  <li><InlineCode text={"currentPage: number"}/> — the current pagination page</li>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>Data Fetching Flow:</h4>
                <ul className="text-lg mb-4 ml-6 list-decimal text-gray-900">
                  <li>When the component mounts, call the <InlineCode text={"GET /pokemon/"}/> endpoint with appropriate <InlineCode text={"limit"}/> and <InlineCode text={"offset"}/></li>
                  <li>Set <InlineCode text={"loading"}/> to <InlineCode text={"true"}/> before the request</li>
                  <li>On success, update the <InlineCode text={"pokemon"}/> state and set <InlineCode text={"loading"}/> to <InlineCode text={"false"}/></li>
                  <li>On error, store the error message and set <InlineCode text={"loading"}/> to <InlineCode text={"false"}/></li>
                  <li>Display loading spinners, error messages, or the Pokémon list based on state</li>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>Pagination Controls:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li>Add "Previous" and "Next" buttons to navigate between pages</li>
                  <li>Disable "Previous" when on the first page</li>
                  <li>Update the <InlineCode text={"currentPage"}/> state when buttons are clicked</li>
                  <li>Fetch new data whenever currentPage changes (use useEffect)</li>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>Pokémon Details:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li>When a user clicks on a <InlineCode text={"PokemonCard"}/>, fetch details via <InlineCode text={"GET /pokemon/:name"}/></li>
                  <li>Display the detailed information in a modal</li>
                  <li>The API response includes:</li>
                  <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                    <li>Stats (HP, Attack, Defense, Special Attack, Special Defense, Speed)</li>
                    <li>Sprites (front_default, back_default, front_shiny, back_shiny)</li>
                    <li>Types with colors (useful for styling!)</li>
                    <li>Moves with power and type information</li>
                  </ul>
                </ul> 
              </section>
            </div>
            <p>By the end of this step, you should have a working Pokedex that displays a paginated list of Pokémon and shows detailed information in a modal when a Pokémon is clicked.</p>
            <div className='blue-block my-4'>
              <p><b>Note</b>: You may not use third-party libraries for state management or data fetching (like React Query, SWR, Redux, etc.). Use React's built-in <InlineCode text={"useState"}/> and <InlineCode text={"useEffect"}/> hooks.</p>
            </div>
          </section>

          {/* Step 5 */}
          <section className="mb-4">
            <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Step 5: Implement Box functionality</h3>
            <p className='mb-4'>With the basic Pokedex working, add the ability to catch and store Pokémon.</p>
            <div className='ml-4 flex flex-col gap-4'>
              <section>
                <h4><b>Box Entry Structure</b>: Each Box entry must contain:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li><InlineCode text={"pokemonId: number"}/> — The Pokémon's ID</li>
                  <li><InlineCode text={"location: string"}/> — Where it was caught (e.g., "Route 1", "Viridian Forest")</li>
                  <li><InlineCode text={"createdAt: string"}/> — Catch date and time in ISO 8601 format (e.g., "2024-01-15T10:30:00Z")</li>
                  <li><InlineCode text={"level: number"}/> — The level at which it was caught (1-100)</li>
                  <li><InlineCode text={"notes?: string "}/> — Optional notes about the catch</li>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>Implementation Steps:</h4>
                <ul className="text-lg mb-4 ml-6 list-decimal text-gray-900">
                  <li>Add a catch button:</li>
                  <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                    <li>Add an "Add to Box" or "Catch" button to the <InlineCode text={"PokemonDetails"}/> modal</li>
                    <li>When clicked, open a new modal or form overlay</li>
                  </ul>
                  <li>Create a Box entry form:</li>
                  <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                    <li>Create form inputs for each required field</li>
                    <li>Use controlled components (inputs tied to state variables)</li>
                    <li>Add validation:</li>
                    <ul className="text-lg ml-6 list-disc text-gray-900">
                      <li>Location: non-empty string</li>
                      <li>Level: number between 1 and 100</li>
                      <li>Date: valid ISO 8601 string (use new <InlineCode text={"Date().toISOString() "}/> for current time)</li>
                    </ul>
                    <li>Notes field is optional</li>
                  </ul>
                  <li>Handle form submission:</li>
                  <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                    <li>Construct an <InlineCode text={"InsertBoxEntry"}/> object with the form data</li>
                    <li>Send a <InlineCode text={"POST"}/> request to <InlineCode text={"/box/"}/> with the entry data in the request body</li>
                    <li>Include the authentication token in the <InlineCode text={"Authorization"}/> header</li>
                    <li>On success, close the modal and refresh the Box list</li>
                    <li>Handle any errors appropriately</li>
                  </ul>
                  <li>Error handling:</li>
                  <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                    <li>Handle authentication errors (401) — invalid or missing token</li>
                    <li>Handle validation errors (400) — invalid input data</li>
                    <li>Display error messages to users in a user-friendly way</li>
                  </ul>
                </ul> 
              </section>
            </div>
            <p>By the end of this step, you should have a working Pokedex that displays a paginated list of Pokémon and shows detailed information in a modal when a Pokémon is clicked.</p>
            <div className='blue-block my-4'>
              <p><b>Note</b>: You may not use third-party libraries for state management or data fetching (like React Query, SWR, Redux, etc.). Use React's built-in <InlineCode text={"useState"}/> and <InlineCode text={"useEffect"}/> hooks.</p>
            </div>
          </section>

          {/* Step 6 */}
          <section className="mb-4">
            <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Step 6: Implement Box list view</h3>
            <p className='mb-4'>Create a view for users to see their caught Pokémon.</p>
            <div className='ml-4 flex flex-col gap-4'>
              <section>
                <h4 className='font-bold'>View Switching:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li>Add a toggle or tab navigation to switch between "All Pokémon" and "My Box" views</li>
                  <li>Keep these views separate (don't unmount them unnecessarily to preserve scroll position)</li>
                  <li>Consider using state like <InlineCode text={"view: 'pokemon' | 'box'"}/> to control which view is shown</li>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>Fetching Box Data:</h4>
                <p>The Box API works differently from the Pokémon list:</p>
                <ul className="text-lg mb-4 ml-6 list-decimal text-gray-900">
                  <li>First, call <InlineCode text={"GET /box/"}/> to get an array of Box entry IDs</li>
                  <li>Then, for each ID, call <InlineCode text={"GET /box/:id"}/> to get the complete entry</li>
                  <li>For each entry, you'll need to fetch the corresponding Pokémon data</li>
                </ul> 
              </section>
              <section className='blue-block my-4'>
                <h4 className='font-bold'>Important Challenge:</h4>
                <p>Box entries only store <InlineCode text={"pokemonId"}/> (a number), but <InlineCode text={"GET /pokemon/:name"}/> requires a name (string). To solve this:</p>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li><b>Option A</b>: When initially loading Pokémon, create a Map of <InlineCode text={"id -> name"}/> that you can reference later</li>
                  <li><b>Option B</b>: Extend your Box entry state to also store the Pokemon name when creating entries</li>
                  <li><b>Option C</b>: Fetch all Pokemon first and create a lookup function that finds by ID</li>
                </ul> 
                <p>We recommend Option A: maintain a Pokemon ID-to-name mapping at the app level. Fetch a large batch of Pokemon on app load, build a Map, then use it to look up names when displaying Box entries.</p>
              </section>
              <section>
                <h4 className='font-bold'>Box Card Component:</h4>
                <p>Create a <InlineCode text={"BoxCard"}/> component that displays:</p>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li>The Pokémon's name and sprite (fetch from Pokemon data)</li>
                  <li>Catch location</li>
                  <li>Catch date (format the ISO string to be readable)</li>
                  <li>Level</li>
                  <li>Notes (if present)</li>
                  <li>Action buttons:</li>
                  <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                    <li><b>Edit</b> — opens a modal with pre-filled form to update the entry</li>
                    <li><b>Delete</b> — confirms and deletes the entry</li>
                  </ul>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>Edit Functionality:</h4>
                <ul className="text-lg mb-4 ml-6 list-decimal text-gray-900">
                  <li>When "Edit" is clicked, open a modal with the form pre-populated with current values</li>
                  <li>Allow users to modify location, level, and notes</li>
                  <li>On submit, send a <InlineCode text={"PUT"}/> request to <InlineCode text={"/box/:id"}/> with the updated fields</li>
                  <li>Refresh the Box list after successful update</li>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>Delete Functionality:</h4>
                <ul className="text-lg mb-4 ml-6 list-decimal text-gray-900">
                  <li>When "Delete" is clicked, show a confirmation dialog</li>
                  <li>On confirmation, send a <InlineCode text={"DELETE"}/> request to <InlineCode text={"/box/:id"}/></li>
                  <li>Remove the entry from state or refetch the entire list</li>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>Auto-Refresh</h4>
                <p>After creating, updating, or deleting an entry, refresh the Box list by re-fetching the data from the API.</p>
              </section>
            </div>
          </section>

          {/* Step 7 */}
          <section className="mb-4">
            <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Step 7: Polish and test your application</h3>
            <p className='mb-4'>Before submitting, ensure your application is complete and polished.</p>
            <div className='ml-4 flex flex-col gap-4'>
              <section>
                <h4 className='font-bold'>Error Handling:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li>Test what happens when the API is unreachable</li>
                  <li>Handle all error codes appropriately:</li>
                  <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                    <li><InlineCode text={"401 UNAUTHORIZED"}/> — Show message about invalid/missing authentication token</li>
                    <li><InlineCode text={"404 NOT_FOUND"}/> — Handle when a Pokémon or Box entry doesn't exist</li>
                    <li><InlineCode text={"400 BAD_REQUEST"}/> — Display validation errors to users</li>
                    <li><InlineCode text={"500 INTERNAL_SERVER_ERROR"}/> — Show a generic error message</li>
                  </ul>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>Loading States:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li>Show loading spinners or skeletons while fetching data</li>
                  <li>Disable buttons during API calls to prevent duplicate requests</li>
                  <li>Consider optimistic updates for better UX (update UI before API response)</li>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>Styling and UX:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li>Make your application visually appealing</li>
                  <li>Use the <InlineCode text={"color"}/> property from Pokemon types to add themed styling</li>
                  <li>Display Pokemon sprites prominently</li>
                  <li>Ensure forms are user-friendly with clear labels and validation messages</li>
                  <li>Add hover effects and transitions</li>
                  <li>Make it responsive for different screen sizes</li>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>Edge Cases to Test:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li>Empty states (no Box entries)</li>
                  <li>First/last page of pagination</li>
                  <li>Creating multiple Box entries for the same Pokémon</li>
                  <li>Editing entries with optional fields (notes)</li>
                  <li>Very long notes or location names</li>
                  <li>Form validation (negative levels, empty required fields)</li>
                </ul> 
              </section>
              <section>
                <h4 className='font-bold'>TypeScript:</h4>
                <ul className="text-lg mb-4 ml-6 list-disc text-gray-900">
                  <li>Ensure all types are properly defined</li>
                  <li>No <InlineCode text={"any"}/> types without good reason</li>
                  <li>Use the types from <InlineCode text={"API.md"}/> as interfaces in your code</li>
                </ul> 
              </section>
            </div>
          </section>
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
            To submit, simply push your commits to the repository generated from GitHub classroom. Make sure your latest commit before the deadline includes all files you worked on during this homework and your <span className='inline-code'>AIAssignment.md</span> file containing your AI syntesis activity. Before you submit, make sure you lint your code for style errors using the command <span className='inline-code'>npm run lint</span>. More details on style can be found in the <a href='style-guide' target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">style guide</a>. We will take -1 points for every style error remaining in the submission for the submitted files.
          </p>

          <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Rubric</h3>
          <ul className="text-lg mb-4 ml-6 text-gray-900">
            <li className='flex items-center gap-2'><MdCheckBoxOutlineBlank/> Create a new React project using Vite with TypeScript</li>
            <li className='flex items-center gap-2'><MdCheckBoxOutlineBlank/> Fetch Pokémon data from the provided API</li> 
            <li className='flex items-center gap-2'><MdCheckBoxOutlineBlank/> Display Pokémon data in a <b>paginated</b> list</li> 
            <li className='flex items-center gap-2'><MdCheckBoxOutlineBlank/> Allow users to mark a Pokémon as caught and add it to their Box</li> 
            <li className='flex items-center gap-2'><MdCheckBoxOutlineBlank/> Display a user's caught Pokémon in a Box view</li> 
            <li className='flex items-center gap-2'><MdCheckBoxOutlineBlank/> Show detailed information for individual Pokémon</li> 
            <li className='flex items-center gap-2'><MdCheckBoxOutlineBlank/> Enable users to delete Box entries</li> 
            <li className='flex items-center gap-2'><MdCheckBoxOutlineBlank/> Enable users to edit Box entries</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default ReactPokedex
