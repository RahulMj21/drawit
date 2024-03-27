"use client";

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { ModeToggle } from "@/components/ui/modeToggle";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <div className="sm:flex sm:gap-4">
      <ModeToggle />
      <LoginLink>
        <Button>Log In</Button>
      </LoginLink>
    </div>
  );
};

export default CTA;
