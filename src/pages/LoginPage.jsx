import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { loginUser } from "../store/actions/authThunks";
import { toast } from "react-toastify";

export default function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { email: "", password: "", remember: false },
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    // dispatch thunk
    const { email, password, remember } = data;
    const result = await dispatch(loginUser(email, password, remember));

    if (result.ok) {
      const from = (location.state && location.state.from) || "/";
      history.replace(from);
      toast.success("Successfully logged in");
    } else {
      toast.error(result.message || "Login failed");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow">
        <h2 className="mb-4 text-center text-2xl font-semibold text-[#23A6F0]">
          Log in
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email required",
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
              className="w-full rounded border-2 border-blue-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-200"
            />
            {errors.email && (
              <p className="text-sm text-red-600">
                {errors.email.message || "Invalid email"}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password required" })}
              className="w-full rounded border-2 border-blue-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-200"
            />
            {errors.password && (
              <p className="text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>

          <label className="inline-flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              {...register("remember")}
              className="h-4 w-4"
            />
            Remember me
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 flex items-center justify-center rounded bg-[#23A6F0] py-2 text-white disabled:opacity-60"
          >
            {isSubmitting ? (
              <span className="inline-flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                Signing in...
              </span>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
