import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-xl font-extrabold tracking-tight text-slate-900 transition-colors hover:text-cyan-700"
        >
          RealJob.pk
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1 text-sm font-medium text-slate-700 sm:gap-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `rounded-full px-3 py-1.5 transition-colors ${isActive ? "bg-cyan-200 text-cyan-950 border border-cyan-500 shadow-md backdrop-blur-sm" : "text-slate-700 hover:bg-white hover:text-slate-900"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/jobs"
                className={({ isActive }) =>
                  `rounded-full px-3 py-1.5 transition-colors ${isActive ? "bg-cyan-200 text-cyan-900 border border-cyan-500 shadow-md backdrop-blur-sm" : "text-slate-700 hover:bg-white hover:text-slate-900"}`
                }
              >
                Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  `rounded-full px-3 py-1.5 transition-colors ${isActive ? "bg-cyan-200 text-cyan-900 border border-cyan-500 shadow-md backdrop-blur-sm" : "text-slate-700 hover:bg-white hover:text-slate-900"}`
                }
              >
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `rounded-full px-3 py-1.5 transition-colors ${isActive ? "bg-cyan-200 text-cyan-900 border border-cyan-500 shadow-md backdrop-blur-sm" : "text-slate-700 hover:bg-white hover:text-slate-900"}`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
        >
          Post a Job
        </button>
      </div>
    </header>
  );
}

export default Header;
