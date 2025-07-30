import resources from "../data/resources";

const ResourcesCards = () => {
    return (
        <section id="resources" className="scroll-mt-24 w-full flex-center text-center min-h-[40vh] mx-auto px-2">
            <div className="flex flex-col gap-12 w-full max-w-6xl mx-auto">
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
                            className="bg-white text-indigo-800 rounded-xl shadow-lg w-72 p-6 flex items-center justify-center text-center cursor-pointer
                                transition-all duration-150 outline-none
                                focus:ring-2 focus:ring-red-400
                                hover:bg-red-50 hover:text-red-700 focus:bg-red-50 focus:text-red-700 hover:shadow-xl focus:shadow-xl"
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