import { useSelector } from "react-redux";
import Loader from "./Loader";
import { Paperclip, Send, ChevronDown } from "lucide-react";

export default function MainWorkspace() {
  const { status, error } = useSelector((state) => state.projects);

  if (status === "loading") return <Loader />;
  if (status === "failed")
    return <p className="text-red-500 text-center mt-10">{error}</p>;

  return (
    <div className="flex flex-col h-full bg-background-2">
      {/* ====== Main content scrollable area ====== */}
      <div className="flex-1 overflow-y-auto p-8">
        {/* Project Header */}
        <div className="mb-6">
          <h1 className="text-xl font-semibold text-primary-text flex items-center gap-2">
            Project 1{" "}
            <span className="bg-tag1 text-xs text-background-1 px-2 py-0.5 rounded">
              Tag 1
            </span>
          </h1>
        </div>

        {/* Question + Summary Section */}
        <h2 className="text-lg font-semibold mb-2">
          Analyze performance and summarize major operational insights based on
          the data.
        </h2>

        <div className="text-sm text-helper-text mb-4 flex items-center justify-between">
          <div>
            Answered with:{" "}
            <select
              className="text-primary-text border border-border rounded px-2 py-0.5 bg-background-1 focus:outline-none focus:ring-1 focus:ring-accent-400"
              aria-label="Model selection"
            >
              <option>GPT-4o (Latest)</option>
              <option>GPT-3.5</option>
            </select>
          </div>
          <p>11:05 PM</p>
        </div>

        <div className="border border-border rounded-lg bg-background-1 p-4 mb-6">
          <h3 className="font-semibold mb-2">Summary</h3>
          <p className="text-secondary-text">
            The project shows improvement in overall efficiency, with moderate
            declines in certain operational indicators. Key observations include
            stable growth in output, improved conversion cycle, and strong
            productivity metrics.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Key Highlights</h3>
          <ul className="list-disc pl-6 space-y-1 text-secondary-text">
            <li>
              Output per employee increased steadily over the past two quarters.
            </li>
            <li>Conversion cycle improved from 25 to 18 days.</li>
            <li>Customer retention rose by 12%.</li>
            <li>Minor delays observed in project delivery timelines.</li>
            <li>
              Efficiency per resource is trending upward year-over-year.
            </li>
          </ul>
        </div>
      </div>

      {/* ====== Bottom input bar ====== */}
      <div className="border-t border-border p-4 bg-background-1">
        <form className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Ask questions..."
            className="flex-1 px-4 py-2 border border-border rounded focus:outline-none focus:ring-1 focus:ring-accent-400 text-secondary-text"
          />

          <button
            type="button"
            className="p-2 rounded bg-accent-25 text-accent-400 hover:bg-accent-100 focus:outline-none focus:ring-2 focus:ring-accent-400"
            aria-label="Attach file"
          >
            <Paperclip size={18} />
          </button>

          <select
            className="border border-border rounded px-2 py-1 text-sm bg-background-1 text-secondary-text focus:ring-1 focus:ring-accent-400"
            aria-label="Model select"
          >
            <option>GPT-4o (Latest)</option>
            <option>GPT-3.5</option>
          </select>

          <button
            type="submit"
            className="p-2 bg-accent-400 text-white rounded hover:bg-accent-100 transition"
            aria-label="Send"
          >
            <Send size={18} />
          </button>
        </form>

        <p className="text-xs text-helper-text text-center mt-2">
          This is not investment advice; please do your own research or consult
          a financial advisor.
        </p>
      </div>
    </div>
  );
}
