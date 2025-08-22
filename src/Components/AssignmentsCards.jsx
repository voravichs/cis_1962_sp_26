import { useState } from "react";
import { PiHandTap } from "react-icons/pi";
import assignments from "../data/assignments"
import { IoIosCodeDownload } from "react-icons/io";
import { BiSolidDetail } from "react-icons/bi";

const styles = `
.card-flip {
  perspective: 1000px;
}
.card-inner {
  transition: transform 0.6s cubic-bezier(.4,2,.6,1), box-shadow 0.3s;
  transform-style: preserve-3d;
  min-height: 16rem;
  min-width: 0;
}
.card-flip.flipped .card-inner {
  transform: rotateY(180deg);
  box-shadow: 0 8px 32px 0 #9333ea55;
}
.card-front, .card-back {
  backface-visibility: hidden;
}
.card-front {
  border-left: 8px solid #b91c1c; /* Red-700 */
  background: #fff;
}
.card-back {
  border-top: 8px solid #b91c1c; /* Red-700 */
  transform: rotateY(180deg);
}
@media (max-width: 480px) {
  .card-flip {
    width: 92vw !important;
    height: 17rem !important;
  }
  .card-inner {
    min-height: 17rem;
  }
  .card-front, .card-back {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
}
@media (max-width: 640px) {
  .card-flip {
    width: 95vw !important;
    height: 18rem !important;
  }
}
@keyframes tapPulse {
  0%, 100% { transform: scale(.99) translateY(0); opacity: 0.6; }
  60% { transform: scale(1.06) translateY(3px); opacity:0.8;}
}
.hand-tap-animate {
  animation: tapPulse 1.1s infinite;
}
`;

const AssignmentCard = ({ hw, flip, onFlip }) => (
    <div
        className={`card-flip group relative w-80 sm:w-72 md:w-80 h-64 rounded-2xl shadow-xl cursor-pointer transition duration-300 outline-none 
        ${flip ? "flipped" : ""}
        hover:ring-4 ring-red-700 focus:ring-4
        `}
        onClick={onFlip}
        tabIndex={0}
        aria-pressed={flip}
        aria-label={`Assignment ${hw.id}: ${hw.title}. Press to ${flip ? 'show summary' : 'show details'}`}
        role="button"
        onKeyDown={e => (e.key === "Enter" || e.key === " ") && onFlip()}
    >
        <span className="sr-only">{flip ? 'Showing details' : 'Showing summary'}</span>
        <div className="card-inner w-full h-full relative rounded-2xl">
            {/* Front */}
            <div className="card-front absolute w-full h-full rounded-2xl flex flex-col items-start justify-center px-7 py-10 transition-all">
                <div className="text-lg font-extrabold mb-1 text-red-700 tracking-wide uppercase">{hw.id}</div>
                <div className="text-2xl font-bold mb-2 text-slate-900">{hw.title}</div>
                <div className="mb-1 text-slate-700 text-base">
                    <span className="font-semibold text-red-700">Assigned:</span>
                    {" "}{hw.assigned}
                </div>
                <div className="mb-2 text-slate-700 text-base">
                    <span className="font-semibold text-red-700">Due:</span>
                    {" "}{hw.due}
                </div>
                <div className="mt-auto absolute bottom-2 right-4 text-red-400 text-3xl opacity-70 hand-tap-animate">
                    <PiHandTap />
                </div>
            </div>
            {/* Back */}
            <div className="card-back bg-indigo-900 absolute w-full h-full rounded-2xl flex flex-col items-start justify-center px-7 py-10 transition-all">
                {/* <div className="text-lg font-black tracking-wider text-white uppercase mb-1">Details</div> */}
                <div className="text-2xl font-bold mb-2 text-white">{hw.title}</div>
                <a
                    href={hw.detailsUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View full assignment details (opens in new tab)"
                    className="flex items-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-lg font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-red-300 mb-2"
                >
                    <BiSolidDetail className="text-3xl"/>Details
                </a>
                <a
                    href={hw.starter}
                    download
                    aria-label="Download starter files as zip"
                    className="flex items-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-lg font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-red-300"
                >
                    <IoIosCodeDownload className="text-3xl"/> Starter Files
                </a>
                <div className="mt-auto absolute bottom-2 right-4 text-pink-100 text-3xl hand-tap-animate">
                    <PiHandTap />
                </div>
            </div>
        </div>
    </div>
);

const AssignmentsCards = () => {
    const [flipped, setFlipped] = useState(assignments.map(() => false));

    const handleFlip = idx => setFlipped(curr => curr.map((f, i) => (i === idx ? !f : f)));
    return (
        <section id="assignments" className="scroll-mt-24 w-full px-4 flex-center text-center min-h-[40vh] mx-auto">
        <style>{styles}</style>
        <div className="flex flex-col gap-10 w-full max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            <span>Assignments</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {assignments.map((hw, idx) => (
                <AssignmentCard
                key={hw.id}
                hw={hw}
                flip={flipped[idx]}
                onFlip={() => handleFlip(idx)}
                />
            ))}
            </div>
        </div>
        </section>
    );
};

export default AssignmentsCards;