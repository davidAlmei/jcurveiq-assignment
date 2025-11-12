import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/uiSlice";
import { ChevronLeft, ChevronRight, Plus, Search, Archive, User } from "lucide-react";

export default function SidebarLeft() {
  const dispatch = useDispatch();
  const collapsed = useSelector((state) => state.ui.sidebarCollapsed);

  return (
    <div
      className={`flex flex-col h-full p-4 bg-background-1 border-r border-border transition-[width] duration-300 ease-in-out ${
        collapsed ? "w-16 items-center" : "w-64"
      }`}
    >
      {/* Sidebar toggle button */}
      <button
        onClick={() => dispatch(toggleSidebar())}
        className="self-end mb-4 text-icons hover:text-accent-400 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-accent-400 rounded-full"
        aria-label="Toggle sidebar"
      >
        <div
          className={`transition-transform duration-300 ${
            collapsed ? "rotate-180" : "rotate-0"
          }`}
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </div>
      </button>

      {/* Sidebar content (hidden when collapsed) */}
      {!collapsed && (
        <>
          {/* Logo */}
          <div className="mb-6">
            <h1 className="font-bold text-lg tracking-tight">LOGO</h1>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col space-y-3 text-secondary-text">
            <button
              className="flex items-center gap-2 hover:text-accent-400 focus:outline-none focus:ring-1 focus:ring-accent-400 rounded px-1 py-0.5"
              aria-label="Create new project"
            >
              <Plus size={16} /> New Project
            </button>
            <button
              className="flex items-center gap-2 hover:text-accent-400 focus:outline-none focus:ring-1 focus:ring-accent-400 rounded px-1 py-0.5"
              aria-label="Search in project"
            >
              <Search size={16} /> Search In Project
            </button>
            <button
              className="flex items-center gap-2 hover:text-accent-400 focus:outline-none focus:ring-1 focus:ring-accent-400 rounded px-1 py-0.5"
              aria-label="View archived projects"
            >
              <Archive size={16} /> Archived Projects
            </button>
          </nav>

          {/* Projects list */}
          <div className="mt-6">
            <p className="text-helper-text mb-2 text-sm">Your Projects (2)</p>
            <ul className="space-y-1">
              <li className="flex items-center justify-between p-2 rounded hover:bg-background-3 cursor-pointer focus-within:ring-1 focus-within:ring-accent-400">
                <span>Project 1</span>
                <span className="bg-tag1 text-xs px-2 py-0.5 rounded text-background-1">
                  Tag 1
                </span>
              </li>
              <li className="flex items-center justify-between p-2 rounded hover:bg-background-3 cursor-pointer focus-within:ring-1 focus-within:ring-accent-400">
                <span>Project 2</span>
                <span className="bg-tag2 text-xs px-2 py-0.5 rounded text-background-1">
                  Tag 2
                </span>
              </li>
            </ul>
          </div>

          {/* User Profile */}
          <div className="mt-auto text-sm text-helper-text flex items-center gap-2 pt-4 border-t border-border">
            <User size={16} />
            <span>User Profile</span>
          </div>
        </>
      )}
    </div>
  );
}
