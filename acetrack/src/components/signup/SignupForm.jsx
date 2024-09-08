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
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
});

export default function SignupForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  function onSubmit(formData) {
    console.log(formData);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 z-50 bg-white p-7 rounded-2xl border border-slate-200 text-[#202630]"
      >
        <div className="flex items-center gap-2">
          <img src={acesLogo} alt="Aces Logo" className="size-6" />
          <p className="font-semibold text-xl text-[#F38538]">ACES</p>
        </div>

        <div className="py-8">
          <h2 className="text-2xl font-medium">Welcome to AceTracker</h2>
          <p className="text-sm">Fill in the form below to get started.</p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input className="rounded-lg" {...field} />
                </FormControl>
                <FormMessage className="text-xs font-light" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input className="rounded-lg" {...field} />
                </FormControl>
                <FormMessage className="text-xs font-light" />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="middleName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Middle name</FormLabel>
              <FormControl>
                <Input className="rounded-lg" {...field} />
              </FormControl>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />
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
        <div className="grid grid-cols-2 gap-2">
          <FormField
            control={form.control}
            name="id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ID number</FormLabel>
                <FormControl>
                  <Input className="rounded-lg" {...field} />
                </FormControl>
                <FormMessage className="text-xs font-light" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="yearLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Year level</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select year level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">1st Year</SelectItem>
                    <SelectItem value="2">2nd Year</SelectItem>
                    <SelectItem value="3">3rd Year</SelectItem>
                    <SelectItem value="4">4rd Year</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="text-xs font-light" />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="course"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your course" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="BSIT">
                    Bachelor of Science in Information Technology
                  </SelectItem>
                  <SelectItem value="BSCE">
                    Bachelor of Science in Civil Engineering
                  </SelectItem>
                  <SelectItem value="BITM">
                    Bachelor of Industrial Technology Management
                  </SelectItem>
                </SelectContent>
              </Select>
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
            Register
          </Button>
        </div>
        <p className="text-sm text-center pt-5">
          Already have an account?{" "}
          <Link className="font-medium text-[#FCA023] hover:text-[#F38538]">
            Log In
          </Link>
        </p>
      </form>
    </Form>
  );
}
