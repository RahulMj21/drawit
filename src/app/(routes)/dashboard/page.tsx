"use client";
import LogoutButton from "@/components/navigation/logoutButton";
import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex, useMutation } from "convex/react";
import { useCallback, useEffect } from "react";

const Dashboard = () => {
  const convex = useConvex();
  const { user } = useKindeBrowserClient();
  const createUser = useMutation(api.user.createUser);

  const checkUser = useCallback(async () => {
    try {
      if (!user || !user?.email) return;
      const result = await convex.query(api.user.getUser, {
        email: user.email,
      });
      if (result === null) {
        await createUser({
          email: user.email,
          name: user.given_name || "",
          image: user.picture || "",
        });
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

  return (
    <div className="p-8 flex gap-4">
      <h1>Dashboard Page</h1>
      <LogoutButton />
    </div>
  );
};

export default Dashboard;
