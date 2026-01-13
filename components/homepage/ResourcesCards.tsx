import resources from "@/data/resources";

const ResourcesCards = () => {
    return (
        <section 
            id="resources" 
            className="scroll-mt-48 w-full flex-center text-center min-h-[40vh] mx-auto px-2"
        >
            <div className="max-w-6xl flex flex-col gap-12 w-full mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                    <p>Resources</p>
                </h1>
                <div className="flex flex-wrap justify-center gap-5 md:gap-8">
                    {resources.map(({ label, href, external }) => (
                        <a
                            key={label}
                            href={href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            className="text-indigo-700 bg-white rounded-xl shadow-lg w-72 p-6 flex items-center justify-center text-center cursor-pointer
                                transition-all duration-150 outline-none
                                focus:ring-2 focus:ring-indigo-400 focus:bg-indigo-600 focus:text-white focus:shadow-xl
                                hover:bg-indigo-600 hover:text-white hover:shadow-xl"
                            tabIndex={0}
                            aria-label={label + (external ? ' (opens in new tab)' : '')}
                        >
                            <div className="text-xl font-bold mb-2 group-hover:underline transition">
                                {label}
                                {external && (
                                <span className="ml-2 text-base text-red-500 align-super" aria-hidden>↗</span>
                                )}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default ResourcesCards;