export default function SideNav({sections}) {
  return (
    <nav className="hidden lg:flex flex-col fixed top-24 left-8 2xl:left-1/6 h-auto gap-2 px-4 py-6 bg-white shadow rounded-lg z-10">
      {sections.map(({ id, label, icon }) => (
        <a
          key={id}
          href={`#${id}`}
          className="py-2 px-2 rounded hover:bg-indigo-100 flex items-center font-semibold text-indigo-700 transition"
        >
          {icon}
        </a>
      ))}
    </nav>
  );
}