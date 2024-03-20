import { api } from "@/convex/_generated/api";
import { useUserStore } from "@/store/userStore";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex, useMutation } from "convex/react";
import { useCallback, useEffect } from "react";

const useCheckUser = () => {
  const convex = useConvex();
  const { user } = useKindeBrowserClient();
  const createUser = useMutation(api.user.createUser);
  const { setUser } = useUserStore();

  const checkUser = useCallback(async () => {
    try {
      if (!user || !user?.email) return;
      const result = await convex.query(api.user.getUser, {
        email: user.email,
      });

      if (result === null) {
        const newUser = await createUser({
          email: user.email,
          name: `${user.given_name} ${user.family_name}`,
          image: user.picture || "",
          activeTeam: null,
        });
        if (newUser) {
          setUser(newUser);
        }
      } else if (!!result) {
        setUser(result);
      }
    } catch (error) {
      console.log(error);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (user) {
      checkUser();
    }
  }, [user, checkUser]);
};

export default useCheckUser;
