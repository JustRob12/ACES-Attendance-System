import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
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
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import acesLogo from "../../assets/aces-logo.png";

const formSchema = z.object({
  firstName: z.string().min(1, {
    message: "First name is required",
  }),
  lastName: z.string().min(1, {
    message: "Last name is required",
  }),
  email: z.string().email().min(1),
  idNumber: z
    .string()
    .regex(/^\d{4}-\d{4}$/, {
      message: "Invalid ID number format",
    })
    .max(9),
  yearLevel: z.string().min(1, {
    message: "Year level is required",
  }),
  course: z.string().min(1, {
    message: "Course is required",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
});

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      middleName: "",
      email: "",
      idNumber: "",
      yearLevel: "",
      course: "",
      password: "",
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function onSubmit(formData) {
    console.log(formData);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 h-full md:h-auto z-50 md:bg-white p-7 md:rounded-2xl md:border border-slate-200 text-[#202630]"
      >
        <div className="flex items-center gap-2">
          <img src={acesLogo} alt="Aces Logo" className="size-6" />
          <p className="font-semibold text-xl text-[#f05a25]">ACES</p>
        </div>

        <div className="py-8">
          <h2 className="text-2xl font-medium">Welcome to AceTrack</h2>
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
              <FormLabel>
                Middle name{" "}
                <span className="text-[10px] text-slate-500">(optional)</span>
              </FormLabel>
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
            name="idNumber"
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
                    <SelectItem value="4">4th Year</SelectItem>
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
                  <SelectItem value="BSM">
                    Bachelor of Science in Mathematics
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
                <div className="relative w-full max-w-sm">
                  <Input
                    className="rounded-lg"
                    type={showPassword ? "text" : "password"}
                    {...field}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={togglePasswordVisibility}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff
                        className="h-4 w-4 text-gray-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <Eye
                        className="h-4 w-4 text-gray-500"
                        aria-hidden="true"
                      />
                    )}
                  </Button>
                </div>
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
          <Link
            to={"/login"}
            className="font-medium text-[#FCA023] hover:text-[#F38538]"
          >
            Log In
          </Link>
        </p>
      </form>
    </Form>
  );
}
