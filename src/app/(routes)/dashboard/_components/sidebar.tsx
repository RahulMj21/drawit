import TeamDetailsPopover from "@/components/popovers/teamDetailsPopover";

const Sidebar = () => {
  return (
    <aside className="bg-gray-200/80 shadow-md w-[16rem] h-screen overflow-y-auto px-2 py-4 flex flex-col">
      <div className="flex-1 w-full">
        <TeamDetailsPopover />
      </div>
      <div>{/* Sidebar Bottom */}</div>
    </aside>
  );
};

export default Sidebar;
