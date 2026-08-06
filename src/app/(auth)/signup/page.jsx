'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleSignUp = async (data) => {
        const { data: res, error } = await authClient.signUp.email({
            name: data.name,
            email: data.email,
            password: data.password,
            image: data.photo,
            callbackUrl: "/"
        });

        if (error) {
            alert(error.message);
        } else if (res) {
            alert("Sign up successful!");
        }
    };

    return (
        <div className="px-4 py-6 md:py-10">
            <div className="bg-white min-h-[80vh] w-full max-w-125 mx-auto rounded-md shadow-md border-2 border-gray-200">
                <h1 className="text-xl md:text-2xl font-bold text-center py-6 md:py-8 border-b-2 border-gray-300">
                    Sign Up Your Account
                </h1>

                <div className="flex flex-col justify-center items-center py-6 md:py-8 px-2">
                    <form onSubmit={handleSubmit(handleSignUp)} className="w-full flex justify-center">
                        <fieldset className="fieldset rounded-box w-full max-w-xs p-4 space-y-1">
                            <legend className="fieldset-legend">Sign Up</legend>

                            <label className="label">Name</label>
                            <input
                                type="text"
                                {...register("name", { required: 'name field is required' })}
                                className="input w-full"
                                placeholder="Name"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

                            <label className="label">Photo URL</label>
                            <input
                                type="text"
                                {...register("photo", { required: 'Photo URL field is required' })}
                                className="input w-full"
                                placeholder="Photo URL"
                            />
                            {errors.photo && <p className="text-red-500 text-sm">{errors.photo.message}</p>}

                            <label className="label">Email</label>
                            <input
                                type="email"
                                {...register("email", { required: 'email field is required' })}
                                className="input w-full"
                                placeholder="Email"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                            <label className="label">Password</label>
                            <input
                                type="password"
                                {...register("password", { required: 'password field must required' })}
                                className="input w-full"
                                placeholder="Password"
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                            <button className="btn bg-blue-900 hover:bg-blue-800 text-white border-none mt-4 w-full">
                                Sign Up
                            </button>
                        </fieldset>
                    </form>
                    <p className="text-center font-semibold text-sm md:text-base px-2">
                        Already have an account?{' '}
                        <Link href="/signin" className="text-blue-900 hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;