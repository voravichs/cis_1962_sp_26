'use client'
import { useState } from 'react';

export default function ModalDemo() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <button
                className="px-4 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700 transition cursor-pointer"
                onClick={() => setOpen(true)}
            >
                Show Modal Example
            </button>
            {open && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/75 text-white">
                    <div
                        className="absolute inset-0"
                        onClick={() => setOpen(false)}
                    />
                    <div className="flex-center  flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-96 relative">
                        <h3 className="text-xl font-bold mb-2">Modal Example</h3>
                        <p className="mb-4 text-center">This is a simple modal. Click the button below or outside the modal to close.</p>
                        <button
                            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition cursor-pointer"
                            onClick={() => setOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                    
                </div>
            )}
        </div>
    );
}