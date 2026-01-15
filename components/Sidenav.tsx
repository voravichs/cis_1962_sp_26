export default function SideNav({sections}: { sections: { id: string; label?: string; icon: React.ReactNode }[] }) {
  return (
    <nav className="hidden lg:flex flex-col fixed top-40 left-8 2xl:left-1/6 h-auto gap-2 px-4 py-6 bg-white dark:bg-black border border-white shadow rounded-lg z-10">
      {sections.map(({ id, label, icon }) => (
        <a
          key={id}
          href={`#${id}`}
          className="py-2 px-2 rounded flex items-center font-semibold text-black dark:text-white hover:text-indigo-700 focus:text-indigo-700 hover:bg-indigo-100 focus:bg-indigo-100 transition"
        >
          {icon}
        </a>
      ))}
    </nav>
  );
}