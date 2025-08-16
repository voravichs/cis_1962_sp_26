import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    useEffect(() => {
        document.title = '404 | CIS 1962';
    }, []);
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 ah-font">
            <div className="max-w-xl text-center">
                <div className="text-[10rem] font-extrabold text-gray-300 select-none leading-none">
                    404
                </div>
                <h1 className="mt-4 text-3xl font-bold text-gray-800">Page Not Found</h1>
                <p className="mt-2 text-gray-500">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="mt-6 inline-block bg-indigo-800 text-white text-lg px-8 py-3 rounded-md shadow-lg hover:bg-red-700 transition-colors"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
}