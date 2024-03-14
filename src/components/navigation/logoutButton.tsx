"use client";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

const LogoutButton = () => {
  return (
    <LogoutLink className="flex bg-brand-light text-primary-foreground hover:bg-brand items-center rounded-md px-4 text-sm py-2 w-max">
      Log out
    </LogoutLink>
  );
};

export default LogoutButton;
