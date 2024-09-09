import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import acesLogo from "../../assets/aces-logo.png";
import { Link } from "react-router-dom";

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

export default function LoginForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(formData) {
    console.log(formData);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 h-full md:h-auto z-50 bg-white p-7 md:rounded-2xl md:border border-slate-200 text-[#202630]"
      >
        <div className="flex items-center gap-2">
          <img src={acesLogo} alt="Aces Logo" className="size-6" />
          <p className="font-semibold text-xl text-[#F38538]">ACES</p>
        </div>

        <div className="py-8">
          <h2 className="text-2xl font-medium">Welcome back 👋</h2>
          <p className="text-sm">Fill in the form below to get started.</p>
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input className="rounded-lg" {...field} />
              </FormControl>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input className="rounded-lg" type="password" {...field} />
              </FormControl>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        <div className="pt-2">
          <Button
            type="submit"
            className="w-full transition-all duration-300 bg-[#FCA023] hover:bg-[#F38538] rounded-lg"
          >
            Log In
          </Button>
        </div>
        <p className="text-sm text-center pt-5">
          Don't have an account?{" "}
          <Link
            to={"/register"}
            className="font-medium text-[#FCA023] hover:text-[#F38538]"
          >
            Register
          </Link>
        </p>
      </form>
    </Form>
  );
}
