"use client";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
};

const EarlyAccess = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="absolute bottom-0 translate-y-1/2 early-access-card">
      <div className="flex flex-col items-center justify-center p-6 space-y-4">
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1 className="text-sm font-semibold md:text-lg">
            Get early access today
          </h1>
          <p className="text-center sm:text-sm md:text-base">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <div>
          <form
            className="flex flex-col items-center justify-center space-y-3"
            onSubmit={handleSubmit(onSubmit)}>
            <input
              className="py-3 pl-4 text-left text-black rounded-full md:text-base w-52"
              type="email"
              placeholder="email@example.com"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <span className="text-fylo-light-red">
                This field is required
              </span>
            )}

            <button
              type="submit"
              className="w-52 py-3 text-[0.7rem] font-semibold md:text-base text-white rounded-full bg-gradient-to-r from-fylo-cyan to-fylo-blue focus:outline-none hover:from-fylo-cyan hover:to-fylo-cyan">
              Get Started For Free
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EarlyAccess;
