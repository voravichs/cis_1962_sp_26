import Image from "next/image";
import eunsoo_pic from "@/assets/eunsoo_ta_pic.jpeg"
import v_pic from "@/assets/v.jpg"
import { MdMail } from "react-icons/md"; 

const Staff = () => {
    return (
        <section 
            id="staff" 
            className="scroll-mt-24 w-full text-center mx-auto"
        >
            <div className="flex flex-col gap-12 max-w-7xl w-full mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    <p>Staff</p>
                </h1>
                <div className="flex flex-wrap justify-center gap-8 ">
                    <div className="bg-white text-blue-900 rounded-xl shadow-lg w-80 flex items-center flex-col">
                        <div className="w-full aspect-square overflow-hidden mb-6 rounded-t-xl">
                            <Image
                                src={v_pic}
                                alt="Picture of Voravich Silapachairueng"
                                width={1216}
                                height={1622}
                                className="inset-0 w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className="text-xl font-bold mb-1">Voravich Silapachairueng</div>
                        <div className="text-indigo-800 font-medium mb-2">Instructor</div>
                        <a
                            href="mailto:voravich@seas.upenn.edu"
                            className="inline-flex items-center gap-1 text-indigo-700 underline hover:text-red-700 transition text-sm mb-2 break-all"
                            aria-label="Email Voravich Silapachairueng"
                        >
                            <MdMail className="text-lg" aria-hidden="true" />
                            voravich@seas.upenn.edu
                        </a>
                        <div>Office Hours: </div>
                        <div>Monday, 5 - 7 PM at Levine 501 (Bump Space)</div>
                        <a className="inline-flex items-center gap-1 text-indigo-700 underline hover:text-red-700 transition mb-2" href="https://upenn.zoom.us/j/8793214523">
                            Zoom
                        </a>
                        <div className="text-sm text-gray-600 mt-1 fw p-6">
                            Hello! I am an alumni of the MCIT program here at UPenn. I love TTRPGs, MMORPGs, and simulation games. I also work with UI/UX development, game development, and pixel art from time to time. Looking forward to a wonderful semester!
                        </div>
                        
                    </div>
                    <div className="bg-white text-blue-900 rounded-xl shadow-lg w-80 flex items-center flex-col">
                        <div className="w-full aspect-square overflow-hidden mb-6 rounded-t-xl">
                            <Image
                                src={eunsoo_pic}
                                alt="Eunsoo Shin"
                                width={2208}
                                height={2944}
                                className="inset-0 w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className="text-xl font-bold mb-1">Eunsoo Shin</div>
                        <div className="text-indigo-800 font-medium mb-2">Co-Instructor</div>
                        <a
                            href="mailto:esinx@seas.upenn.edu"
                            className="inline-flex items-center gap-1 text-indigo-700 underline hover:text-red-700 transition text-sm mb-2 break-all"
                            aria-label="Email Voravich Silapachairueng"
                        >
                            <MdMail className="text-lg" aria-hidden="true" />
                            esinx@seas.upenn.edu
                        </a>
                        <div>Office Hours: </div>
                        <div>Wednesday, 5 - 7 PM at Levine 601 (Bump Space)</div>
                        <div className="text-sm text-gray-600 mt-1 fw p-6">
                            Hey! I'm a junior studying NETS and have been in love with JavaScript & TypeScript since I was 11. I love listening to rock music and playing the electric bass in my free time.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Staff;