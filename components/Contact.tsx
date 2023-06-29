"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { LucideLoader2 } from "lucide-react";
import { BsFillSendFill } from "react-icons/bs";
import { useToast } from "@/components/ui/use-toast";

type ContactProps = {};

const Contact: React.FC<ContactProps> = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { toast } = useToast();

  const sendEmail = async (e: any) => {
    e.preventDefault();
    setIsError(false);
    setIsLoading(true);
    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      if (result.status !== 200) throw new Error("email not sent");

      toast({
        description:'Message sent ✅'
      })
    } catch (error: any) {
      console.error("sendEmail error", error.message);
      setIsError(true);
      toast({
        description:'Some error occured ❌'
      })
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col p-5">
      <h2 className="text-3xl font-bold">Contact me.</h2>
      <h4 className="text-sm mt-1 text-gray-400">
        Get in touch or shoot me an email directly on{" "}
        <span className="font-bold text-gray-300">asatwik218@gmail.com</span>
      </h4>

      <form
        onSubmit={sendEmail}
        ref={formRef}
        className="flex flex-col gap-4 mt-8"
      >
        <div className="flex  md:flex-row flex-col gap-x-8 gap-y-4">
          <Input
            type="text"
            placeholder="Name"
            name="from_name"
            className=""
            required
          />
          <Input
            type="email"
            placeholder="Email"
            name="from_email"
            className=""
            required
          />
        </div>
        <Textarea
          placeholder="Type your message here."
          name="message"
          className="shrink-0 h-32 "
          required
        />
        {isLoading ? (
          <Button
            type="submit"
            value="Send"
            className=" md:w-48 border-sm md:text-md w-40 text-sm"
            disabled
          >
            <LucideLoader2 className="mr-2 md:h-5 md:w-5 w-4 h-4 animate-spin" />
            Sending...
          </Button>
        ) : (
          <Button
            type="submit"
            value="Send"
            className=" md:w-48 border-sm md:text-md w-40 text-sm"
          >
            <BsFillSendFill className="mr-2 md:h-5 md:w-5 h-4 w-4" />
            Send Message
          </Button>
        )}
      </form>
    </div>
  );
};
export default Contact;
