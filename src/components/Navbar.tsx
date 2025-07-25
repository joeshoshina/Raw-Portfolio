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
    <div className="flex flex-row items-center justify-evenly p-5 bg-(--nav-bg-color) border border-solid border-(--nav-border-color)">
      <a className="text-2xl font-bold text-(--logo-color)" href="index.html">
        Joe Hoshina
      </a>
      <nav>
        <a
          href="#projects"
          className="pr-4 text-lg text-(--link-color) hover:text-(--link-hover-color)"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="pl-4 text-lg text-(--link-color) hover:text-(--link-hover-color)"
        >
          Contact
        </a>
      </nav>
      <button
        onClick={toggleTheme}
        className="border-2 border-solid rounded-lg border-(--border-color) text-(--text-color) px-1 py-2"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Navbar;
