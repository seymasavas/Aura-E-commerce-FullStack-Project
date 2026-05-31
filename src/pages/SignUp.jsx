import { useForm } from "react-hook-form";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setValue,
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { confirmPassword, ...submitData } = data;

    if (selectedRoles !== "2") {
      delete submitData.store;
    }

    axiosInstance
      .post("/signup", submitData)
      .then((response) => {
        toast.warn("You need to click link in email to activate your account!");
        navigate("/");
      })
      .catch((error) => console.error("Error during sign up:", error));
  };

  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/roles")
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => console.error("Error fetching roles:", error));
  }, []);

  useEffect(() => {
    if (roles.length > 0) {
      const defaultRole = roles.find(
        (role) => role.code === "customer" || role.id === 3,
      );

      if (defaultRole) {
        setValue("role_id", String(defaultRole.id));
      }
    }
  }, [roles, setValue]);

  const selectedRoles = watch("role_id");
  console.log("Selected role ID:", selectedRoles);

  return (
    <>
      <Header />
      <div className="h-600px flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Register
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              className="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-200"
              placeholder="Name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}

            <input
              type="email"
              className="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-200"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-200"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*.,?]).{8,}$/,
                  message:
                    "Password must include numbers, lower/upper case and special chars",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            <input
              type="password"
              className="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-200"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords didn't match",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
            <label className="text-gray-700 text-sm mb-1">Select a role:</label>
            <select
              className="w-full border text-sm  border-gray-300 rounded p-2 focus:ring focus:ring-blue-200"
              {...register("role_id", { required: "Role is required" })}
            >
              <option value="">Select a role</option>
              {roles.map((role) => (
                <option key={role.id} value={String(role.id)}>
                  {role.name}
                </option>
              ))}
            </select>
            {errors.role_id && (
              <p className="text-red-500 text-sm">{errors.role_id.message}</p>
            )}

            {selectedRoles === "2" && (
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
                <input
                  type="text"
                  placeholder="Mağaza adı"
                  className="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-200 mb-2"
                  {...register("store.name", {
                    required: "Store name is required",
                  })}
                />
                {errors.store?.name && (
                  <p className="text-red-500 text-sm">
                    {errors.store.name.message}
                  </p>
                )}
                <input
                  type="text"
                  placeholder="Mağaza tel"
                  className="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-200 mb-2"
                  {...register("store.phone", {
                    required: "Store phone is required",
                    pattern: {
                      value: /^(\+90|0)?5\d{9}$/,
                      message: " Invalid phone number",
                    },
                  })}
                />
                {errors.store?.phone && (
                  <p className="text-red-500 text-sm">
                    {errors.store.phone.message}
                  </p>
                )}
                <input
                  type="text"
                  placeholder="Vergi numarası"
                  className="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-200 mb-2"
                  {...register("store.tax_no", {
                    required: "Store tax number is required",
                    pattern: {
                      value: /^T\d{4}V\d{6}$/,
                      message: "Invalid tax number",
                    },
                  })}
                />
                {errors.store?.tax_no && (
                  <p className="text-red-500 text-sm">
                    {errors.store.tax_no.message}
                  </p>
                )}
                <input
                  type="text"
                  placeholder="Banka Hesabı"
                  className="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-200 mb-2"
                  {...register("store.bank_account", {
                    required: "Bank Account is required",
                    pattern: {
                      value: /^TR\d{2}[a-zA-Z0-9]{22}$/,
                      message: "Invalid bank account number",
                    },
                  })}
                />
                {errors.store?.bank_account && (
                  <p className="text-red-500 text-sm">
                    {errors.store.bank_account.message}
                  </p>
                )}
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SignUp;
