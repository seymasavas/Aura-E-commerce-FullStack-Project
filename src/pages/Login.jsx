import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { useForm } from "react-hook-form";
import { loginUser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    dispatch(loginUser(data));
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <>
      <Header />
      <div className="h-600px flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white p-8 rounded shadow-md ">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>
          <form
            className="gap-4 flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
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
              className="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-200"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
            <button
              disabled={isSubmitting}
              className="w-full mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
          <div className="mt-6 text-center flex items-center justify-center gap-2 font-sans">
            <span className="text-[#737373] font-semibold text-sm">
              Don't have an account?
            </span>
            <Link
              to="/signup"
              className="text-[#23A6F0] font-bold text-sm hover:underline transition-all"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
