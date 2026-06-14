import { Zap, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "../components/FormInput";
import { loginSchema } from "../schemas/login.js";

import { loginUser } from "../services/auth.service.js";

export default function Login() {
const navigate = useNavigate();

const {
register,
handleSubmit,
formState: {
errors,
isSubmitting,
},
} = useForm({
resolver: zodResolver(loginSchema),
});

const onSubmit = async (data) => {
try {
await loginUser(data);


  navigate("/dashboard");
} catch (error) {
  console.log(error);

  if (error.response?.status === 404) {
    navigate("/register");
  }
}


};

return ( <div className="h-screen bg-gradient-to-br from-violet-50 via-white to-purple-100 flex items-center justify-center px-4 overflow-hidden">


  <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl" />

  <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-purple-300/20 blur-3xl" />

  <div
    className="
    w-full
    max-w-md
    rounded-3xl
    border
    border-white/50
    bg-white/60
    backdrop-blur-xl
    shadow-2xl
    p-8
    "
  >
    <div className="flex flex-col items-center mb-8">

      <div
        className="
        h-16
        w-16
        rounded-2xl
        bg-gradient-to-r
        from-violet-600
        to-purple-600
        flex
        items-center
        justify-center
        "
      >
        <Zap
          size={30}
          className="text-white"
        />
      </div>

      <h1 className="mt-4 text-4xl font-bold text-slate-800">
        GridEye
      </h1>

      <p className="text-slate-500 mt-2 text-center">
        Smart Electricity Theft Detection System
      </p>

    </div>

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <FormInput
        label="Email"
        type="email"
        placeholder="Enter email"
        icon={Mail}
        register={register}
        name="email"
        error={errors.email}
      />

      <FormInput
        label="Password"
        type="password"
        placeholder="Enter password"
        icon={Lock}
        register={register}
        name="password"
        error={errors.password}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="
        w-full
        rounded-xl
        bg-gradient-to-r
        from-violet-600
        to-purple-600
        py-4
        text-white
        font-semibold
        "
      >
        {isSubmitting
          ? "Logging in..."
          : "Login"}
      </button>

      <p className="text-center text-slate-500">
        Don't have an account?

        <button
          type="button"
          onClick={() =>
            navigate("/register")
          }
          className="
          ml-2
          text-violet-600
          font-semibold
          "
        >
          Register
        </button>
      </p>
    </form>
  </div>
</div>

);
}
