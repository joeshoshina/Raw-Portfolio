const Navbar = () => {
  const toggleTheme = () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme");
    if (currentTheme === "dark") {
      html.setAttribute("data-theme", "light");
    } else {
      html.setAttribute("data-theme", "dark");
    }
  };

  return (
    <div className="flex flex-wrap flex-col sm:flex-row items-center justify-evenly p-5 bg-(--nav-bg-color) border border-solid border-(--nav-border-color) top-0 z-50 fixed w-full">
      <a className="text-2xl font-bold text-(--logo-color)" href="index.html">
        Joe Hoshina
      </a>
      <nav>
        <a
          href="#projects"
          className="pr-4 text-md text-(--link-color) hover:text-(--link-hover-color)"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="pl-4 text-md text-(--link-color) hover:text-(--link-hover-color)"
        >
          Contact
        </a>
      </nav>
      <button
        onClick={toggleTheme}
        className="border-1 border-solid text-sm rounded-lg border-(--border-color) text-(--text-color) px-2 py-1"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Navbar;
