import Logo from "@/components/navigation/logo";

const Sidebar = () => {
  return (
    <aside className="w-[18rem] h-screen overflow-y-auto p-4 flex flex-col">
      <div className="flex-1">
        <Logo />
      </div>
      <div>sidebar bottom</div>
    </aside>
  );
};

export default Sidebar;
