import { ITeam } from "@/types";
import { create } from "zustand";

type Store = {
  teams: ITeam[];
  activeTeam: string | null;
  setTeams: (teams: ITeam[]) => void;
  setActiveTeam: (teamId: string) => void;
};

export const useTeamStore = create<Store>()((set) => ({
  teams: [],
  activeTeam: null,
  setTeams: (teams) => set((state) => ({ ...state, teams })),
  setActiveTeam: (teamId) => set((state) => ({ ...state, activeTeam: teamId })),
}));
