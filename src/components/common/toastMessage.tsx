import { cn } from "@/lib/utils";

const ToastMessage = ({
  children,
  className,
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className={cn("text-[0.95rem] font-medium", className)}>{children}</p>
  );
};

export default ToastMessage;
