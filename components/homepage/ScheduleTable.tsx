import schedule from "@/data/schedule"
import ScheduleCards from "./ScheduleCards";

export default function ScheduleTable() {
  return (
    <section
      id="schedule"
      className="scroll-mt-48 w-full text-center min-h-[60vh] mb-12 px-0 sm:px-8"
    >
      <div className="max-w-7xl w-full flex flex-col gap-10 sm:gap-16 mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center ">
          <p>Schedule</p>
        </h1>

        {/* Schedule content */}
        <div className="flex flex-col gap-6">
          {schedule.map((item, idx) => (
            <ScheduleCards key={item.id} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};