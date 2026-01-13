import { SiNextdotjs } from 'react-icons/si';

export default function Footer() {
    return (
        <footer className="w-full py-4 text-gray-500 text-sm flex flex-col items-center gap-1 border-t">
            <div>
                <strong>CIS 1962 Spring 2026</strong>
            </div>
            <div>
                A mini-course part of <span className="font-semibold">Penn Engineering</span>
            </div>
            <div className="flex items-center gap-1">
                Made with <SiNextdotjs className="inline text-lg" aria-label="Next.js" /> Next.js
            </div>
        </footer>
    )

}