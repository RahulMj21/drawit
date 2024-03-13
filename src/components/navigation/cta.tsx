"use client";

import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const CTA = () => {
  return (
    <div className="sm:flex sm:gap-4">
      <LoginLink className="px-5 py-2.5 text-sm font-medium text-brand">
        Login
      </LoginLink>

      <RegisterLink className="hidden sm:flex bg-brand-light text-primary-foreground hover:bg-brand items-center rounded-md px-4 text-sm py-2">
        Register
      </RegisterLink>
    </div>
  );
};

export default CTA;
