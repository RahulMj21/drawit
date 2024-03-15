"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CreateTeamSchema, TCreateTeamInput } from "@/schemas/createTeamSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import ToastMessage from "@/components/common/toastMessage";

interface CreateTeamFormProps {
  className?: string;
}

const CreateTeamForm = ({ className }: CreateTeamFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TCreateTeamInput>({
    resolver: zodResolver(CreateTeamSchema),
  });

  const { user } = useKindeBrowserClient();
  const createTeam = useMutation(api.team.createTeam);

  const onSubmit: SubmitHandler<TCreateTeamInput> = async (values) => {
    try {
      setIsLoading(true);
      if (!user || !user?.email) return;

      const data = await createTeam({
        name: values.name,
        createdBy: user.email,
      });
      if (!data) return;

      toast.success(<ToastMessage>Team created successfully</ToastMessage>);
      reset();
      router.push("/dashboard");
    } catch (err) {
      toast(<ToastMessage>Oops! Something went wrong</ToastMessage>);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "mt-5 flex flex-col gap-4 w-[25rem] max-w-full mx-auto",
        className,
      )}
    >
      <div className="w-full flex flex-col relative">
        <Input placeholder="Enter Team Name" {...register("name")} />
        <p className="text-left text-xs mt-1 text-red-600 top-full left-0">
          {errors.name?.message}
        </p>
      </div>
      <Button isLoading={isLoading}>Create</Button>
    </form>
  );
};

export default CreateTeamForm;
