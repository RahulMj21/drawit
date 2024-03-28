import TeamDetailsPopover from "@/components/popovers/teamDetailsPopover";
import { ModeToggle } from "@/components/ui/modeToggle";

const Sidebar = () => {
  return (
    <aside className="w-[16rem] h-screen overflow-y-auto px-2 py-4 flex flex-col border-r border-border">
      <div className="flex-1 w-full">
        <TeamDetailsPopover />
      </div>
      <div>
        <ModeToggle />
      </div>
    </aside>
  );
};

export default Sidebar;
