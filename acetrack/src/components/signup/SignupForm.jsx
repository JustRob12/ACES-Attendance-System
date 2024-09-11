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
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { AlertCircle, Eye, EyeOff, Loader2 } from "lucide-react";
import acesLogo from "../../assets/aces-logo.png";
import apiClient from "@/api/axios";

const formSchema = z.object({
  firstname: z.string().min(1, {
    message: "First name is required",
  }),
  lastname: z.string().min(1, {
    message: "Last name is required",
  }),
  email: z.string().email().min(1),
  studentId: z
    .string()
    .regex(/^\d{4}-\d{4}$/, {
      message: "Invalid ID number format",
    })
    .max(9),
  year: z.string().min(1, {
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
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      middlename: "",
      email: "",
      studentId: "",
      year: "",
      course: "",
      password: "",
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function onSubmit(formData) {
    try {
      setErrorMessage("");
      setIsFormSubmitting(true);
      console.log(formData);
      const res = await apiClient.post("/register", formData);
      console.log(res);

      form.reset();
      navigate("/login");
    } catch (err) {
      console.error(err);
      setErrorMessage(err.response.data.message);
    } finally {
      setIsFormSubmitting(false);
    }
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
            name="firstname"
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
            name="lastname"
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
          name="middlename"
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
            name="studentId"
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
            name="year"
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
        {errorMessage && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Student is already registered.</AlertTitle>
          </Alert>
        )}
        <div className="pt-2">
          <Button
            type="submit"
            disabled={isFormSubmitting}
            className="w-full transition-all duration-300 bg-[#FCA023] hover:bg-[#F38538] rounded-lg"
          >
            {isFormSubmitting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              ""
            )}
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
