import SidebarLeft from "../components/SidebarLeft";
import SidebarRight from "../components/SidebarRight";
import MainWorkspace from "../components/MainWorkspace";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProjects } from "../features/projectsSlice";
import { useSelector } from "react-redux";

export default function ResearchWorkspace() {
  const dispatch = useDispatch();
  const sidebarCollapsed = useSelector((state) => state.ui.sidebarCollapsed);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <div className="flex flex-col md:flex-row h-screen text-primary-text overflow-hidden">
      <div
        className={`transition-all duration-300 ${
          sidebarCollapsed ? "w-16" : "w-64"
        }`}
      >
        <SidebarLeft />
      </div>

      <div className="flex-1 overflow-y-auto">
        <MainWorkspace />
      </div>

      <div className="hidden md:block w-72">
        <SidebarRight />
      </div>
    </div>
  );
}
