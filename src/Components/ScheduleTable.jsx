import schedule from "../data/schedule"

const columns = [
  { key: "id", label: "Lecture" },
  { key: "date", label: "Date" },
  { key: "topic", label: "Topic" },
  { key: "slides", label: "Slides" },
  { key: "code", label: "Code" },
  { key: "assignmentsAssigned", label: "Released" },
  { key: "assignmentsDue", label: "Due" },
];

const ScheduleTable = () => {
  return (
    <section id="schedule" className="scroll-mt-24 w-full flex-center text-center min-h-[60vh] mb-12 px-4 sm:px-8">
      <div className="max-w-7xl w-full flex flex-col gap-10 sm:gap-16 mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center ">
          <p>Schedule</p>
        </h1>

        {/* DESKTOP Table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="min-w-full bg-white text-indigo-800 rounded shadow overflow-hidden">
            <thead>
              <tr>
                {columns.map(col => (
                  <th key={col.key} className="px-3 py-2 accent-bg-dark text-white text-sm lg:text-base">{col.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedule.map(item => (
                <tr key={item.id} className="even:bg-red-100 odd:bg-red-50 divide-x divide-red-200">
                  <td className="px-3 py-3">{item.id}</td>
                  <td className="px-3 py-3">{item.date}</td>
                  <td className="px-3 py-3">{item.topic}</td>
                  <td className="px-3 py-3">{item.slides}</td>
                  <td className="px-3 py-3">{item.code}</td>
                  <td className="px-3 py-3">{item.assignmentsAssigned}</td>
                  <td className="px-3 py-3">{item.assignmentsDue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MOBILE Cards */}
        <div className="block md:hidden w-full space-y-5">
          {schedule.map((item, idx) => (
            <div
              key={item.id}
              className={`
                flex flex-col relative overflow-hidden shadow border border-red-200 rounded-lg px-4 py-3
                ${idx % 2 === 0 ? "bg-red-50" : "bg-red-100"}
                before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-red-700
              `}
            >
              <div className="absolute left-2 top-0 flex items-center">
                <span className="inline-block ml-[-0.6rem] bg-red-700 text-white text-base font-bold rounded-r-xl px-3 py-1 shadow">
                  Lecture {item.id}
                </span>
              </div>
              <div className="flex flex-col pt-6 gap-[2px]">
                {columns
                  .filter(col => col.key !== 'id')
                  .map(col => (
                    <div key={col.key} className="flex mb-1">
                      <span className="font-semibold text-red-700 w-24 min-w-fit mr-2">{col.label}:</span>
                      <span className="text-indigo-900 break-all">{item[col.key]}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleTable;