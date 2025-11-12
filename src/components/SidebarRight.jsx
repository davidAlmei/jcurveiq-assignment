import { Search, Filter, ExternalLink } from "lucide-react";

export default function SidebarRight() {
  return (
    <div className="flex flex-col h-full bg-background-1 border-l border-border">
      {/* ===== Top Header ===== */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <h2 className="text-sm font-semibold text-primary-text flex items-center gap-1">
          Notebook
          <ExternalLink size={14} className="text-icons cursor-pointer hover:text-accent-400" aria-label="Open Notebook" />
        </h2>
        <button
          className="text-icons hover:text-accent-400 transition"
          aria-label="Expand Notebook"
        >
          ⤢
        </button>
      </div>

      {/* ===== Search + Filter ===== */}
      <div className="flex items-center gap-2 p-3">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-8 py-2 border border-border rounded focus:outline-none focus:ring-1 focus:ring-accent-400 text-secondary-text text-sm"
          />
          <Search
            size={16}
            className="absolute left-2.5 top-2.5 text-icons pointer-events-none"
          />
        </div>
        <button
          className="p-2 rounded bg-accent-25 text-accent-400 hover:bg-accent-100 focus:outline-none focus:ring-2 focus:ring-accent-400"
          aria-label="Filter Notes"
        >
          <Filter size={16} />
        </button>
      </div>

      {/* ===== Notes List ===== */}
      <div className="flex-1 overflow-y-auto px-3 pb-4">
        <div className="border border-border rounded p-3 bg-background-1 shadow-sm hover:shadow transition">
          <h4 className="font-semibold text-primary-text mb-1 text-sm">
            Summary
          </h4>
          <p className="text-helper-text text-xs mb-2">Sept 20, 11:05 PM</p>
          <p className="text-secondary-text text-sm leading-snug">
            The project shows improvement in overall efficiency, with moderate
            declines in certain operational indicators. Key observations include
            stable growth in output, improved conversion cycle, and strong
            productivity metrics.
          </p>
        </div>
      </div>
    </div>
  );
}
