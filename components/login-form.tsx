"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Button, Field, Label, Input } from "@headlessui/react";
import { useState } from "react";
import { createClient } from "@/supabase/client";

const formSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(8),
});

export default function LoginForm() {
  const [success, setSuccess] = useState<boolean>(false);
  const supabase = createClient();
  // 1. Define your form.
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // 2. Define a submit handler.
  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async ({
    email,
    password,
  }) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error !== null && data.user === null) setSuccess(false);
      else setSuccess(true);
      reset();
    } catch (error) {
      setError("root", {
        message: String(error),
      });
    }
  };
  return (
    <div className="w-full p-5">
      <h1 className="border-b-2 pb-2 text-xl font-bold">Login Form</h1>
      <br />
      <form
        id="contact-form"
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col items-start justify-center gap-4 text-white"
      >
        <Field className="w-full">
          <Label className="text-lg">Your Email:</Label>
          <Input
            className="w-full rounded-md border p-3 data-[focus]:bg-gray-700 data-[hover]:shadow"
            placeholder="example@gmail.com"
            {...register("email")}
            data-focus
            data-hover
          />
        </Field>
        <span className="text-red-500">
          {errors.email && errors.email.message}
        </span>

        <Field className="w-full">
          <Label className="text-lg">Your password:</Label>
          <Input
            type="password"
            className="w-full rounded-md border p-3 data-[focus]:bg-gray-700 data-[hover]:shadow"
            placeholder="********"
            {...register("password")}
            data-focus
            data-hover
          />
        </Field>
        <span className="text-red-500">
          {errors.password && errors.password.message}
        </span>
        <Button
          disabled={isSubmitting}
          type="submit"
          className="w-full rounded bg-sky-600 px-4 py-2 text-sm text-white data-[active]:bg-sky-700 data-[hover]:bg-sky-500"
        >
          {isSubmitting ? "Loading..." : "Submit"}
        </Button>
        <span className="text-red-500">
          {errors.root && errors.root.message}
        </span>
        <span className="text-green-700">
          {success && "Logged in successfully"}
        </span>
      </form>
    </div>
  );
}
