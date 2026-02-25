'use client'
import { use, useEffect, useState } from 'react';

export default function DogCarousel() {
    const [images, setImages] = useState<string[]>([]);
    const [page, setPage] = useState(0);
    const imagesPerPage = 2;
    const totalImages = 6;

    useEffect(() => {
        async function fetchImages() {
            const promises = Array.from({ length: totalImages }, () =>
                fetch('https://dog.ceo/api/breeds/image/random').then(res => res.json())
            );
            const results = await Promise.all(promises);
            setImages(results.map(r => r.message));
        }
        fetchImages();
    }, []);

    const start = page * imagesPerPage;
    const end = start + imagesPerPage;
    const canPrev = page > 0;
    const canNext = end < images.length;

    return (
        <div className="flex flex-col items-center">
            <div className="flex gap-4 mb-4">
                {images.slice(start, end).map((src, idx) => (
                    <img
                        key={src}
                        src={src}
                        alt={`Dog ${start + idx + 1}`}
                        className="w-48 h-48 object-cover rounded-lg border border-gray-300"
                    />
                ))}
            </div>
            <div className="flex gap-2">
                <button
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                    onClick={() => setPage(page - 1)}
                    disabled={!canPrev}
                >
                    Previous
                </button>
                {Array.from({ length: Math.ceil(totalImages / imagesPerPage) }, (_, i) => (
                    <button
                        key={i}
                        className={`px-3 py-1 rounded ${page === i ? 'bg-indigo-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => setPage(i)}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                    onClick={() => setPage(page + 1)}
                    disabled={!canNext}
                >
                    Next
                </button>
            </div>
        </div>
    );
}