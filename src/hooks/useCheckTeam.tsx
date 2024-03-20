import { api } from "@/convex/_generated/api";
import { useTeamStore } from "@/store/teamStore";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const useCheckTeam = () => {
  const router = useRouter();
  const convex = useConvex();
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useKindeBrowserClient();
  const { setTeams } = useTeamStore();

  const checkTeam = useCallback(async () => {
    try {
      if (!user || !user?.email) return;
      const result = await convex.query(api.team.getTeams, {
        email: user.email,
      });
      if (result === null) {
        router.push("/team/create");
      } else {
        setTeams(result);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (user) {
      checkTeam();
    }
  }, [user, checkTeam]);

  return { isLoading } as const;
};

export default useCheckTeam;
