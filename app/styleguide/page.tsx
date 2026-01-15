import { HiOutlineLightBulb, HiOutlineCode } from "react-icons/hi";
import { MdFactCheck, MdInfoOutline } from "react-icons/md";
import { FaHandSparkles } from "react-icons/fa";
import { SiEslint } from "react-icons/si";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Style Guide | CIS 1962",
  description: "Style Guide Page of CIS 1962 for Spring 2026 at the University of Pennsylvania",
};

export default function StyleGuide() {
    return (
        <div className="scroll-mt-48 max-w-5xl mx-auto text-lg text-black dark:text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">JavaScript Style Guide</h1>

            {/* Introduction */}
            <section className="mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2">
                    <MdInfoOutline/>Overview</h2>
                <p className="ml-4">
                    This style guide summarizes the JavaScript coding standards for all coursework. It is enforced by our ESLint configuration. Following these practices will help you pass the autograder and produce readable, professional code. <span className="font-bold">Key ESLint rules are referenced throughout.</span>
                </p>
            </section>

            {/* Variable Declaration & Assignment */}
            <section className="mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2">
                    <HiOutlineCode/>Variable Declaration &amp; Assignment
                </h2>
                <ul className="list-disc ml-6  mb-4 text-lg">
                    <li>
                        <span className="font-semibold">Prefer <code>const</code> for variables that never change.</span>
                        <span className="ml-1 text-red-500 text-sm">(ESLint: <code>prefer-const</code>)</span>
                    </li>
                    <li>
                        <span className="font-semibold">Use <code>let</code> when reassignment is needed.</span>
                    </li>
                    <li>
                        <span className="font-semibold">Never use <code>var</code>; it is disallowed.</span>
                        <span className="ml-1 text-red-500 text-sm">(ESLint: <code>no-var</code>)</span>
                    </li>
                    <li>
                        <span className="font-semibold">Do not declare variables that are unused.</span>
                        <span className="ml-1 text-red-500 text-sm">(ESLint: <code>no-unused-vars</code>)</span>
                    </li>
                </ul>
                <p className="font-semibold text-xl">❌ Bad</p>
                <div className="red-block">
                    <SyntaxHighlighter
                        language="javascript"
                        style={vs}
                        customStyle={{
                            background: '#fee2e2',
                            border: 'none',
                            fontSize: 16,
                            margin: 0,
                            padding: 0,
                        }}
                    >{`var total = 0;
var unusedVar = 5; // Unused
total = total + 2;
`}</SyntaxHighlighter>
                </div>
                <p className="font-semibold text-xl">✅ Good</p>
                <div className="green-block font-mono">
                    <SyntaxHighlighter
                    language="javascript"
                    style={vs}
                    customStyle={{
                        background: '#d1fae5',
                        border: 'none',
                        fontSize: 16,
                        margin: 0,
                        padding: 0,
                    }}
                    >{`let total = 0;
// Only use let if variable may change
total += 2; 

// Use const if never reassigned
const userName = 'Alice'; 
`}</SyntaxHighlighter>
                </div>
            </section>

            {/* Equality & Conditionals */}
            <section className="mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2">
                    <FaHandSparkles/>Equality &amp; Conditionals
                </h2>
                <ul className="list-disc ml-6  mb-4 text-lg">
                    <li>
                        <span className="font-semibold">Always use <code>===</code> and <code>!==</code> for equality checks.</span>
                        <span className="ml-1 text-red-500 text-sm">(ESLint: <code>eqeqeq</code>)</span>
                    </li>
                    <li>
                        <span className="font-semibold">Combine if/else blocks to avoid “lonely” <code>if</code> statements.</span>
                        <span className="ml-1 text-red-500 text-sm">(ESLint: <code>no-lonely-if</code>, <code>unicorn/no-lonely-if</code>)</span>
                    </li>
                    <li>
                        <span className="font-semibold">Prefer ternary operators (<code>? :</code>) over simple if/else assignments when appropriate.</span>
                        <span className="ml-1 text-red-500 text-sm">(ESLint: <code>unicorn/prefer-ternary</code>)</span>
                    </li>
                </ul>
                <div className="mb-2">
                    <p className="font-semibold text-xl">❌ Bad</p>
                    <div className="red-block">
                        <SyntaxHighlighter
                        language="javascript"
                        style={vs}
                        customStyle={{
                            background: '#fee2e2',
                            border: 'none',
                            fontSize: 16,
                            margin: 0,
                            padding: 0,
                        }}
                        >{`if (score == 5) {
message = "Perfect!";
} else {
// "Lonely" if inside else
if (score == 0) {
    message = "Try again.";
}
}

if (flag) {
result = "yes";
} else {
result = "no";
}
`}</SyntaxHighlighter>
                    </div>
                    <p className="font-semibold text-xl">✅ Good</p>
                    <div className="green-block font-mono">
                        <SyntaxHighlighter
                        language="javascript"
                        style={vs}
                        customStyle={{
                            background: '#d1fae5',
                            border: 'none',
                            fontSize: 16,
                            margin: 0,
                            padding: 0,
                        }}
                        >{`if (score === 5) {
message = "Perfect!";
} else if (score === 0) {
message = "Try again.";
}

// Ternary for simple assignments
result = flag ? "yes" : "no";
`}</SyntaxHighlighter>
                    </div>
                </div>
            </section>

            {/* Function & String Syntax */}
            <section className="mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2">
                    <MdFactCheck/>Function &amp; String Syntax
                </h2>
                <ul className="list-disc ml-6  mb-4 text-lg">
                    <li>
                        <span className="font-semibold">Use arrow functions for callbacks where possible.</span>
                        <span className="ml-1 text-red-500 text-sm">(ESLint: <code>prefer-arrow-callback</code>)</span>
                    </li>
                    <li>
                        <span className="font-semibold">Always use template literals (<code>{'`'}</code>...<code>{'`'}</code>) for string interpolation and avoiding string concatenation.</span>
                        <span className="ml-1 text-red-500 text-sm">(ESLint: <code>prefer-template</code>)</span>
                    </li>
                </ul>
                <div className="mb-2">
                    <p className="font-semibold text-xl">❌ Bad</p>
                    <div className="red-block">
                        <SyntaxHighlighter
                        language="javascript"
                        style={vs}
                        customStyle={{
                            background: '#fee2e2',
                            border: 'none',
                            fontSize: 16,
                            margin: 0,
                            padding: 0,
                        }}
                        >{`arr.map(function(item) {
// String concatenation
return "Value: " + item; 
});
`}
</SyntaxHighlighter>
                    </div>
                    <p className="font-semibold text-xl">✅ Good</p>
                    <div className="green-block font-mono">
                        <SyntaxHighlighter
                        language="javascript"
                        style={vs}
                        customStyle={{
                            background: '#d1fae5',
                            border: 'none',
                            fontSize: 16,
                            margin: 0,
                            padding: 0,
                        }}
                        >{`// Arrow function + template literal
arr.map(item => \`Value: \${item}\`);  
`}</SyntaxHighlighter>
                    </div>
                </div>
            </section>

            {/* Advanced & Code Quality */}
            <section className="mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2">
                    <HiOutlineLightBulb/>Advanced & Code Quality
                </h2>
                <ul className="list-disc ml-6  mb-4 text-lg">
                    <li>
                        <span className="font-semibold">Destructure properties used repeatedly from objects.</span>
                        <span className="ml-1 text-red-500 text-sm">(ESLint: <code>unicorn/consistent-destructuring</code>)</span>
                    </li>
                    <li>
                        <span className="font-semibold">Always include a descriptive error message in <code>throw new Error()</code>.</span>
                        <span className="ml-1 text-red-500 text-sm">(ESLint: <code>unicorn/error-message</code>)</span>
                    </li>
                    <li>
                        <span className="font-semibold">Avoid disabling ESLint rules without a clear reason.</span>
                        <span className="ml-1 text-red-500 text-sm">(ESLint: <code>unicorn/no-abusive-eslint-disable</code>)</span>
                    </li>
                    <li>
                        <span className="font-semibold">Do not use <code>alert()</code> in application code.</span>
                        <span className="ml-1 text-red-500 text-sm">(ESLint: <code>no-alert</code>)</span>
                    </li>
                    <li>
                        <span className="font-semibold">Keep return behavior consistent inside functions.</span>
                        <span className="ml-1 text-red-500 text-sm">(ESLint: <code>consistent-return</code>)</span>
                    </li>
                </ul>
                <div className="mb-2">
                    <p className="font-semibold text-xl">❌ Bad</p>
                    <div className="red-block">
                        <SyntaxHighlighter
                        language="javascript"
                        style={vs}
                        customStyle={{
                            background: '#fee2e2',
                            border: 'none',
                            fontSize: 16,
                            margin: 0,
                            padding: 0,
                        }}
                        >{`// Repeated property access
for (const user of users) {
if (user.isActive) {
    console.log(user.name + 
        " is active");
}
}

// Throwing error with no message
throw new Error();

// Unneeded ESLint disable
// eslint-disable-next-line eqeqeq
let y = 1;

// Using alert in production code
if (x > 10) {
alert("Too big!");
}
`}</SyntaxHighlighter>
                    </div>
                    <p className="font-semibold text-xl">✅ Good</p>
                    <div className="green-block font-mono">
                        <SyntaxHighlighter
                        language="javascript"
                        style={vs}
                        customStyle={{
                            background: '#d1fae5',
                            border: 'none',
                            fontSize: 16,
                            margin: 0,
                            padding: 0,
                        }}
                        >{`// Use destructuring for 
// repeated property access
for (const { isActive, name } of users) {
if (isActive) {
    console.log(\`\${name} 
        is active\`);
}
}

// Always provide an error message
throw new Error("Input was empty");

// Only disable ESLint with a clear comment
// eslint-disable-next-line eqeqeq 
// -- Must use loose equality 
// for this legacy API
let y = getLegacyValue();

// Use a non-blocking notification 
// instead of alert in user-facing code
if (x > 10) {
showNotification("Too big!");
}
`}</SyntaxHighlighter>
                    </div>
                </div>
            </section>

            {/* Final Remarks */}
            <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 flex gap-2">
                    <SiEslint/>Linting and Prettier Formatting
                </h2>
                <p className='ml-4'>
                    This style guide references most of the ESLint rules defined for each of your homework projects. Some homeworks may differ in their ESLint configurations and rules that are active. Any notable rules will be highlighted in the homework specifications.
                </p>
                <p className='ml-4'>
                    We <span className="red-bold">highly recommend</span> that you check your code with both ESLint and Prettier before submission. Each homework has configurations provided, and you simply just need to run <span className='inline-code'>npm install</span> at the start of each project to get the ESLint and Prettier dependencies. To run ESLint, run the command <span className='inline-code'>npm run lint</span>, and to run Prettier, run the command <span className='inline-code'>npm run format</span>. These should point out style errors and fix formatting errors, respectively. 
                </p>
            </section>
        </div>
    )
}