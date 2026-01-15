import { RiSlideshow2Fill } from "react-icons/ri";
import { IoIosCodeDownload } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import { FaGithub, FaInfoCircle } from "react-icons/fa";

export default function ScheduleCards({item, idx}: {item: any, idx: number}) {
    return (
        <div className="flex gap-8"> 
            {/* Lecture content */}
            <div
                className={`
                    w-full lg:w-1/2 flex flex-col relative overflow-hidden border-2 border-white dark:border-black rounded-lg px-4 py-3 text-red-700
                    ${idx % 2 === 0 ? "bg-red-50" : "bg-red-100"}
                    before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-2 before:bg-red-700
                `}
            >
            <div className="absolute left-2 top-0 flex items-center">
                <span className="inline-block ml-[-0.6rem] bg-red-700 text-white font-bold rounded-r-xl px-6 py-1 shadow text-xl">
                Lecture {item.id}
                </span>
            </div>
            <div className="font-bold text-xl mt-8">
                {item.topic}
            </div>
            <div className="grid grid-cols-4 gap-2 mt-4">
                <div className="flex flex-col col-span-2 items-center gap-2">
                <MdDateRange className="text-4xl text-red-700" />
                <span className="font-medium">{item.date}</span>
                </div>
                {item.slides && (
                <a
                    href={item.slides}
                    download
                    aria-label="Download slides as pdf"
                    className="flex flex-col items-center gap-2 text-slate-700 hover:text-indigo-700"
                >
                    <RiSlideshow2Fill className="text-4xl" />
                    <span className="font-medium">Slides</span>
                </a>
                )}
                {item.code && (
                <a
                    href={item.code}
                    download
                    aria-label="Download lecture code"
                    className="flex flex-col items-center gap-2 text-slate-700 hover:text-indigo-700"
                >
                    <IoIosCodeDownload className="text-4xl" />
                    <span className="font-medium">Code</span>
                </a>
                )}
            </div>

            {/* HW content MOBILE */}
            {item.due && (
                <div 
                    className="lg:hidden mt-4 bg-indigo-50 text-indigo-700 border border-indigo-700 rounded-lg p-4 text-xl font-bold">{item.due}
                </div>
            )}

            {item.homework && (
                <div className="lg:hidden flex items-center px-8 py-4 gap-8 text-indigo-700 bg-indigo-50 mt-4 rounded-lg border border-indigo-700">
                {item.homework.icon && (
                    <span className="text-5xl mr-2">{item.homework.icon}</span>
                )}
                <div className="w-full">
                    <div className="font-bold text-xl">{item.homework.id} - {item.homework.title}</div>
                    <div className="grid grid-rows-2 grid-cols-2 gap-3 mt-2">
                    <div className="col-span-2 flex items-center justify-center">
                        <span className="font-medium text-lg">Due: {item.homework.due.toLocaleDateString()}</span>
                    </div>
                    {item.homework.detailsUrl && (
                        <a
                            href={item.homework.detailsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-2 text-slate-700 hover:text-red-700"
                        >
                            <FaInfoCircle className="text-4xl" />
                            <span className="font-medium">Instructions</span>
                        </a>
                    )}
                    {item.homework.starter && (
                        <a
                            href={item.homework.starter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-2 text-slate-700 hover:text-red-700"
                        >
                            <FaGithub className="text-4xl" />
                            <span className="font-medium">Github Classroom</span>
                        </a>
                    )}
                    
                    </div>
                </div>
                </div>
            )}
            </div>

            {/* HW content DESKTOP */}
            {item.homework && (
                <div className={`
                    hidden lg:flex w-1/2 flex-col relative overflow-hidden border border-white dark:border-black rounded-lg p-4 text-white bg-indigo-900
                    before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-4 before:bg-slate-800 dark:before:bg-white
                    `}
                >
                    
                    <div className="flex items-center justify-center px-8 gap-8">
                        {item.homework.icon && (
                        <span className="text-5xl mr-2">{item.homework.icon}</span>
                        )}
                        <div className="w-full">
                        <div className="font-bold text-xl">{item.homework.id} - {item.homework.title}</div>
                        <div className="grid grid-cols-3 gap-3 mt-6">
                            <div className="flex flex-col items-center gap-2">
                                <span className="font-medium">Due:</span>
                                <span className="font-bold">{item.homework.due.toLocaleDateString()}</span>
                            </div>
                            {item.homework.detailsUrl && (
                                <a
                                    href={item.homework.detailsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-2 text-white hover:text-indigo-300"
                                >
                                    <FaInfoCircle className="text-4xl" />
                                    <span className="font-medium">Instructions</span>
                                </a>    
                            )}
                            {item.homework.starter && (
                                <a
                                    href={item.homework.starter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-2 text-white hover:text-indigo-300"
                                >
                                    <FaGithub className="text-4xl" />
                                    <span className="font-medium">Github Classroom</span>
                                </a>    
                            )}
                            
                        </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}