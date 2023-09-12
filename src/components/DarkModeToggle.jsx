function DarkModeToggle(props) {
  const { currentTheme, setTheme } = props;
  function shineToRight() {
    const shineElement = document.getElementById("shine");
    shineElement.style["left"] = "200%";
  }
  function shineToLeft() {
    const shineElement = document.getElementById("shine");
    shineElement.style["left"] = "-100%";
  }
  return (
    <div className="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100">
      {currentTheme === "dark" ? (
        <button
          className="relative overflow-hidden backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-400 border border-gray-400/50 w-fit rounded-md p-2"
          onClick={() => setTheme("light")}
          onMouseEnter={() => shineToRight()}
          onMouseLeave={() => shineToLeft()}
        >
          <img src="/moon.svg" alt="logo" height="20px" width="20px" className="-hue-rotate-60" />
          <div
            id="shine"
            className="absolute rotate-45 -top-5 -left-full w-1/2 h-[200%] bg-gradient-to-r from-white/0 via-white/40  transition-all duration-500"
          ></div>
        </button>
      ) : (
        <button
          className="relative rounded-md p-2 backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-400 border border-gray-400/50"
          onClick={() => setTheme("dark")}
        >
          <img src="/sun.svg" alt="logo" height="20px" width="20px" className="-hue-rotate-60" />
        </button>
      )}
    </div>
  );
}

export default DarkModeToggle;
