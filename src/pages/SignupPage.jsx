import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { fetchRoles, signupRequest } from "../services/authService";

// Validations
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
const trPhoneRegex = /^\+90\s?5\d{9}$/; // +90 5XXXXXXXXX
const taxNoRegex = /^T\d{4}V\d{6}$/; // T1234V123456
const trIbanRegex = /^TR\d{24}$/; // TR + 24 digits

export default function SignupPage() {
  const inputClass =
    "w-full rounded-xl border-2 border-blue-500 px-4 py-3 text-base text-slate-900 shadow-sm " +
    "placeholder:text-slate-400 outline-none " +
    "focus:border-blue-600 focus:ring-4 focus:ring-blue-200";

  const history = useHistory();

  const [roles, setRoles] = useState([]);
  const [loadingRoles, setLoadingRoles] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [storeRoleId, setStoreRoleId] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    clearErrors,
    formState: { errors, touchedFields, isSubmitted },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role_id: "",
      store: { name: "", phone: "", tax_no: "", bank_account: "" },
    },
  });

  const roleId = watch("role_id");
  const roleRegister = register("role_id", { required: "Role is required" });
  const isStoreSelected = useMemo(() => {
    if (!storeRoleId) return false;
    return Number(roleId) === Number(storeRoleId);
  }, [roleId, storeRoleId]);

  useEffect(() => {
    let alive = true;
    async function loadRoles() {
      try {
        setLoadingRoles(true);
        const res = await fetchRoles();
        const list = Array.isArray(res.data) ? res.data : res.data?.roles || [];
        if (!alive) return;

        setRoles(list);
        const customerRole = list.find((r) => r.code === "customer");
        const storeRole = list.find((r) => r.code === "store");

        setStoreRoleId(storeRole ? Number(storeRole.id) : null);

        if (customerRole) {
          setValue("role_id", String(customerRole.id), {
            shouldValidate: true,
            shouldDirty: true,
          });
          clearErrors("role_id"); // 👈 kritik
        } else if (list[0]) {
          setValue("role_id", String(list[0].id), {
            shouldValidate: true,
            shouldDirty: true,
          });
        }
      } catch (e) {
        console.error(e);
        setServerError("Roles alınamadı.");
      } finally {
        if (alive) setLoadingRoles(false);
      }
    }

    loadRoles();
    return () => {
      alive = false;
    };
  }, [setValue]);

  function buildPayload(data) {
    const base = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: Number(data.role_id),
    };

    if (isStoreSelected) {
      return {
        ...base,
        store: {
          name: data.store.name,
          phone: data.store.phone,
          tax_no: data.store.tax_no,
          bank_account: data.store.bank_account,
        },
      };
    }

    return base;
  }

  async function onSubmit(data) {
    setServerError("");
    const payload = buildPayload(data);

    // Debug: backend strict fields kontrolü için
    console.log("SIGNUP PAYLOAD:", payload);

    try {
      setSubmitting(true);
      await signupRequest(payload);

      sessionStorage.setItem(
        "flash_warning",
        "You need to click link in email to activate your account!",
      );

      history.goBack();
    } catch (e) {
      console.log("SIGNUP ERROR RAW:", e);
      console.log("STATUS:", e?.response?.status);
      console.log("DATA:", e?.response?.data);

      let msg = "An error occurred";

      const data = e?.response?.data;
      if (typeof data === "string") msg = data;
      else if (data) msg = JSON.stringify(data);

      // Axios network error vs.
      if (!e?.response && e?.message) msg = e.message;

      setServerError(
        e?.response?.status ? `[${e.response.status}] ${msg}` : msg,
      );
    } finally {
      console.log("SIGNUP PAYLOAD:", payload);
      setSubmitting(false);
    }
  }
  function Spinner() {
    return (
      <span className="inline-flex items-center gap-2">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
        <span>Submitting...</span>
      </span>
    );
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="flex w-full max-w-2xl flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-center text-2xl font-bold text-[#23A6F0]">
          Create Account
        </h1>

        {serverError ? (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700">
            {serverError}
          </div>
        ) : null}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <input
              placeholder="Name"
              {...register("name", {
                required: "Name is required",
                minLength: { value: 3, message: "Min 3 characters" },
              })}
              className={inputClass}
            />
            {errors.name ? (
              <p className="text-sm text-red-600">{errors.name.message}</p>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            <input
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: emailRegex, message: "Invalid email" },
              })}
              className={inputClass}
            />
            {errors.email ? (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                validate: (v) =>
                  passwordRegex.test(v) ||
                  "Min 8 chars, upper, lower, number, special",
              })}
              className={inputClass}
            />
            {errors.password ? (
              <p className="text-sm text-red-600">{errors.password.message}</p>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (v) =>
                  v === getValues("password") || "Passwords do not match",
              })}
              className={inputClass}
            />
            {errors.confirmPassword ? (
              <p className="text-sm text-red-600">
                {errors.confirmPassword.message}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            <select
              name={roleRegister.name}
              ref={roleRegister.ref}
              onBlur={roleRegister.onBlur}
              onChange={(e) => {
                roleRegister.onChange(e);

                setValue("role_id", e.target.value, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
              }}
              value={roleId || ""}
              disabled={loadingRoles}
              className={inputClass}
            >
              <option value="" disabled>
                Select Role
              </option>

              {roles.map((r) => (
                <option key={r.id} value={String(r.id)}>
                  {r.name}
                </option>
              ))}
            </select>

            {(touchedFields.role_id || isSubmitted) && errors.role_id ? (
              <p className="text-sm text-red-600">{errors.role_id.message}</p>
            ) : null}
          </div>

          {isStoreSelected ? (
            <div className="flex flex-col gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-4">
              <div className="flex flex-col gap-2">
                <input
                  placeholder="Store Name"
                  {...register("store.name", {
                    required: "Store name is required",
                    minLength: { value: 3, message: "Min 3 characters" },
                  })}
                  className={inputClass}
                />
                {errors.store?.name ? (
                  <p className="text-sm text-red-600">
                    {errors.store.name.message}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col gap-2">
                <input
                  placeholder="Store Phone (+905...)"
                  {...register("store.phone", {
                    required: "Store phone is required",
                    pattern: {
                      value: trPhoneRegex,
                      message: "Invalid Türkiye phone number",
                    },
                  })}
                  className={inputClass}
                />
                {errors.store?.phone ? (
                  <p className="text-sm text-red-600">
                    {errors.store.phone.message}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col gap-2">
                <input
                  placeholder="Tax No (TXXXXVXXXXXX)"
                  {...register("store.tax_no", {
                    required: "Tax no is required",
                    pattern: {
                      value: taxNoRegex,
                      message: "Tax no must match TXXXXVXXXXXX",
                    },
                  })}
                  className={inputClass}
                />
                {errors.store?.tax_no ? (
                  <p className="text-sm text-red-600">
                    {errors.store.tax_no.message}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col gap-2">
                <input
                  placeholder="IBAN (TR...)"
                  {...register("store.bank_account", {
                    required: "IBAN is required",
                    pattern: {
                      value: trIbanRegex,
                      message: "Invalid TR IBAN format",
                    },
                  })}
                  className={inputClass}
                />
                {errors.store?.bank_account ? (
                  <p className="text-sm text-red-600">
                    {errors.store.bank_account.message}
                  </p>
                ) : null}
              </div>
            </div>
          ) : null}

          <button
            type="submit"
            disabled={submitting}
            className={[
              "flex items-center justify-center rounded-xl py-3 text-base font-semibold text-white",
              "bg-[#23A6F0] hover:bg-blue-600",
              "disabled:cursor-not-allowed disabled:opacity-60",
            ].join(" ")}
          >
            {submitting ? <Spinner /> : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
