import LogoIcon from "@/components/common/icons/logo";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, LogOut, Settings, Users } from "lucide-react";
import Link from "next/link";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import { useTeamStore } from "@/store/teamStore";
import { cn } from "@/lib/utils";

const ACTIONS = [
  { text: "Create New Team", icon: <Users className="h-4 w-4" /> },
  { text: "Settings", icon: <Settings className="h-4 w-4" /> },
  { text: "Log Out", icon: <LogOut className="h-4 w-4" /> },
];

const TeamDetailsPopover = () => {
  const { user } = useKindeBrowserClient();
  const { teams } = useTeamStore();

  return (
    <Popover>
      <PopoverTrigger className="w-full">
        <div className="flex gap-2 items-center px-3 py-2 transition-colors duration-500 rounded-md hover:bg-gray-300">
          <LogoIcon height="20" />
          <p className="flex items-center gap-1 font-bold text-zinc-700">
            <span>{teams[0].name}</span>
            <ChevronDown className="h-4 w-4" />
          </p>
        </div>
      </PopoverTrigger>
      <PopoverContent className="text-sm w-[14.5rem] mx-2 flex flex-col gap-1 break-all p-2">
        <div className="w-full flex flex-col text-left">
          {teams.map(({ _id, name }) => (
            <Link
              key={_id}
              href="#"
              className={cn(
                "p-2 rounded-sm transition-colors text-left hover:bg-gray-100",
                "font-semibold",
              )}
            >
              {name}
            </Link>
          ))}
        </div>

        <Separator />

        <div className="w-full flex flex-col text-left">
          {ACTIONS.map(({ text, icon }) => (
            <button
              key={text}
              className="flex gap-2 items-center p-2 rounded-sm transition-colors text-left hover:bg-gray-100"
            >
              {icon}
              <span>{text}</span>
            </button>
          ))}
        </div>

        <Separator />

        <div className="flex items-center gap-2 py-2">
          <div className="h-9 w-9 relative rounded-full overflow-hidden">
            <Image
              src={(user?.picture as string) || ""}
              alt="User Avatar"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col gap-[2px]">
            <h4 className="text-sm font-semibold text-zinc-700">{`${user?.given_name} ${user?.family_name}`}</h4>
            <p className="text-xs text-gray-500 leading-3">{user?.email}</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default TeamDetailsPopover;
