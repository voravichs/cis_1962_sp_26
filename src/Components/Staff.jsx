import eunsoo_pic from "../assets/eunsoo_ta_pic.jpeg"
import v_pic from "../assets/v_pic.jpg"
import { MdMail } from "react-icons/md"; 

const Staff = () => {
    return (
        <section id="staff" className="scroll-mt-24 w-full flex-center text-center min-h-[40vh] mx-auto px-2">
            <div className="flex flex-col gap-12 w-full">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    <p>Staff</p>
                </h1>
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="bg-white text-blue-900 rounded-xl shadow-lg w-80 h-[30rem] p-6 flex-center flex-col">
                        <img
                            src={v_pic}
                            alt="Staff photo"
                            className="w-40 h-40 rounded-full mb-4 object-cover border border-indigo-800"
                        />
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
                        <div className="text-sm text-gray-600 mt-1 overflow-y-auto flex-grow"
                            style={{maxHeight: '10rem'}}
                        >
                            Hello! I am an alumni of the MCIT program here at UPenn. I love classic JRPGs, MMORPGs, and simulation games. I also dabble in UI/UX development, game development, and pixel art from time to time. Looking forward to a wonderful semester!
                        </div>
                    </div>
                    <div className="bg-white text-blue-900 rounded-xl shadow-lg w-80 h-[30rem] p-6 flex-center flex-col">
                        <img
                            src={eunsoo_pic}
                            alt="Staff photo"
                            className="w-40 h-40 rounded-full mb-4 object-cover border border-indigo-800"
                        />
                        <div className="text-xl font-bold mb-1">Eunsoo Shin</div>
                        <div className="text-indigo-800 font-medium mb-2">Teaching Assistant</div>
                        <a
                            href="mailto:esinx@seas.upenn.edu"
                            className="inline-flex items-center gap-1 text-indigo-700 underline hover:text-red-700 transition text-sm mb-2 break-all"
                            aria-label="Email Voravich Silapachairueng"
                        >
                            <MdMail className="text-lg" aria-hidden="true" />
                            esinx@seas.upenn.edu
                        </a>
                        <div className="text-sm text-gray-600 mt-1 overflow-y-auto flex-grow"
                            style={{maxHeight: '10rem'}}
                        >
                            Hey! I'm a junior studying NETS and have been in love with JavaScript & TypeScript since I was 11. I love listening to rock music and playing the electric bass in my free time.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Staff;