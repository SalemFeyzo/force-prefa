"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import validator from "validator";
import emailjs from "@emailjs/browser";
import { Button, Field, Label, Description, Input } from "@headlessui/react";

const formSchema = z.object({
  name: z.string().min(3),
  company: z.string().min(3),
  phoneNumber: z.string().min(10).max(15).refine(validator.isMobilePhone),
  email: z.string().email(),
  message: z.string().min(55),
});

export default function ContactForm() {
  // 1. Define your form.
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { isSubmitting, errors, isSubmitSuccessful, isSubmitted },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      phoneNumber: "",
      email: "",
      message: "",
    },
  });
  // 2. Define a submit handler.
  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (data) => {
    try {
      const { text, status } = await emailjs.sendForm(
        "service_c7v5xpo",
        "template_lin934i",
        "#contact-form",
        {
          publicKey: "yAhvcYE1nouQhq-nV",
          limitRate: { throttle: 3 },
        },
      );
      if (text === "OK" || status === 200) {
        reset();
      }
    } catch (error) {
      setError("root", {
        message: String(error),
      });
    }
  };
  return (
    <div className="w-full p-5">
      <h1 className="border-b-2 pb-2 text-xl font-bold">Contact Form</h1>
      <br />
      <form
        id="contact-form"
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col items-start justify-center gap-4 text-white"
      >
        <Field className="w-full">
          <Label className="text-lg">Name:</Label>
          <Description className="py-2 text-xs text-gray-400">
            Use your real name.
          </Description>
          <Input
            className="w-full rounded-md border p-3 data-[focus]:bg-gray-700 data-[hover]:shadow"
            placeholder="Your Name..."
            {...register("name")}
            data-focus
            data-hover
          />
        </Field>
        <span className="text-red-500">
          {errors.name && errors.name.message}
        </span>
        <Field className="w-full">
          <Label className="text-lg">Company Name:</Label>
          <Description className="py-2 text-xs text-gray-400">
            Use your real Company Name.
          </Description>
          <Input
            className="w-full rounded-md border p-3 data-[focus]:bg-gray-700 data-[hover]:shadow"
            placeholder="Your Company Name"
            {...register("company")}
            data-focus
            data-hover
          />
        </Field>
        <span className="text-red-500">
          {errors.company && errors.company.message}
        </span>
        <Field className="w-full">
          <Label className="text-lg">Your Email:</Label>
          <Description className="py-2 text-xs text-gray-400">
            Use your Email.
          </Description>
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
          <Label className="text-lg">Your Phone Number:</Label>
          <Description className="py-2 text-xs text-gray-400">
            Use your phone number.
          </Description>
          <Input
            className="w-full rounded-md border p-3 data-[focus]:bg-gray-700 data-[hover]:shadow"
            placeholder="00905355556677"
            {...register("phoneNumber")}
            data-focus
            data-hover
          />
        </Field>
        <span className="text-red-500">
          {errors.phoneNumber && errors.phoneNumber.message}
        </span>
        <Field className="w-full">
          <Label className="text-lg">Your message:</Label>
          <Description className="py-2 text-xs text-gray-400">
            Tell us what you want.
          </Description>
          <textarea
            className="h-40 w-full rounded-md border p-3 data-[focus]:bg-gray-700 data-[hover]:shadow"
            placeholder="Your Message..."
            {...register("message")}
            data-focus
            data-hover
          />
        </Field>
        <span className="text-red-500">
          {errors.message && errors.message.message}
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
          {(isSubmitted || isSubmitSuccessful) &&
            "Sent successfully, thank you. "}
        </span>
      </form>
    </div>
  );
}
