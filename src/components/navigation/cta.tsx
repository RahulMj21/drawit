import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <LoginLink>
      <Button>Log In</Button>
    </LoginLink>
  );
};

export default CTA;
