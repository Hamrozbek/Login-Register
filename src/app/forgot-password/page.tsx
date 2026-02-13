"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const router = useRouter();

    const handleReset = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return toast.error("Please enter your email");
        toast.success(`Password reset link sent to ${email}`);
        setTimeout(() => router.push("/login"), 1500);
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-4">
            <Toaster position="top-right" />
            <div className="max-w-md w-full rounded-3xl backdrop-blur-[0.5px] border border-cyan-400/40 shadow-[0_0_40px_rgba(0,255,255,0.4)] p-10 text-white">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-cyan-400">Forgot Password</h1>
                    <p className="text-gray-300 mt-2">Enter your email to reset password</p>
                </div>
                <form className="flex flex-col gap-6" onSubmit={handleReset}>
                    <input type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="bg-transparent focus:bg-transparent border-b border-cyan-400 py-2 px-4 rounded-full focus:outline-none placeholder-gray-400 sm:text-sm md:text-base"
                    />

                    <button
                        type="submit"
                        className="mt-4 py-3 px-8 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 shadow-[0_0_25px_rgba(0,255,255,0.7)] sm:py-2 sm:px-4">
                        SEND RESET LINK
                    </button>
                </form>
                <p className="text-center text-sm text-gray-300 mt-6">
                    Remembered your password? <Link href="/login" className="text-cyan-400 hover:underline">Login</Link>
                </p>
            </div>
        </section>
    );
}
