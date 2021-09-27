import { useForm } from "react-hook-form";

import Title from "../../components/Sidebar/Title";
import Register from "./RegisterBox";
import validateEmail from "../../utils/validateEmail";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (inputs) => {
    console.log(inputs);
  };

  return (
    <div className="flex flex-col gap-3 h-screen justify-center items-center font-poppins">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/3 bg-custom-gray rounded-md py-5"
      >
        <Title />
        <div className="px-10 mt-10 w-full">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <br />
          <input
            type="text"
            {...register("email", {
              required: true,
              validate: (value) => validateEmail(value),
            })}
            name="email"
            id="email"
            className="outline-none bg-custom-gray text-white border-b-2 border-b-white py-2 w-full"
          />
          {errors.email && (
            <span className="text-red-500">Input a valid email address</span>
          )}
        </div>
        <div className="px-10 my-10 w-full">
          <label htmlFor="password" className="text-white">
            Password
          </label>
          <br />
          <input
            type="password"
            {...register("password", { required: true })}
            name="password"
            id="password"
            className="outline-none bg-custom-gray text-white border-b-2 border-b-white py-2 w-full"
          />
          {errors.password && (
            <span className="text-red-500">Password is required</span>
          )}
        </div>
        <div className="px-10 mt-10 mb-5 w-full">
          <input
            type="submit"
            value="Login"
            className="w-full rounded-md py-2 hover:opacity-70 cursor-pointer"
          />
        </div>
      </form>
      <Register />
    </div>
  );
}

export default Login;
