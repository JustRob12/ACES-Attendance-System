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
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import acesLogo from "../../assets/aces-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import apiClient from "@/api/axios";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Password is requried" }),
});

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(formData) {
    try {
      setErrorMessage("");
      setIsFormSubmitting(true);
      console.log(formData);
      const res = await apiClient.post("/login", formData);
      console.log(res);

      form.reset();
      // navigate("/login");
    } catch (err) {
      console.error(err);
      setErrorMessage(err.response.data.message);
    } finally {
      setIsFormSubmitting(false);
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
            disabled={isFormSubmitting}
            className="w-full transition-all duration-300 bg-[#FCA023] hover:bg-[#F38538] rounded-lg"
          >
            {isFormSubmitting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              ""
            )}
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
