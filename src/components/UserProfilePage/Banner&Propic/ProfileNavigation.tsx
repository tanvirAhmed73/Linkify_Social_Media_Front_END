export default function ProfileNavigation() {
  const navItems = [
    "Posts",
    "About",
    "Friends",
    "Photos",
    "Videos",
    "Check-ins",
    "More",
  ];

  return (
    <div className="border-t border-gray-700 mt-4 pt-1">
      <nav className="flex items-center gap-2">
        {navItems.map((item) => (
          <button
            key={item}
            className="px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
          >
            {item}
          </button>
        ))}
      </nav>
    </div>
  );
}
