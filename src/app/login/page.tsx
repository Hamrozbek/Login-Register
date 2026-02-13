"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        const storedUser = localStorage.getItem("user");
        if (!storedUser) return toast.error("No registered user found!");

        const { username: savedUsername, password: savedPassword } = JSON.parse(storedUser);

        if (username === savedUsername && password === savedPassword) {
            toast.success("Login successful!");

            // Remember me ishlash
            if (remember) {
                localStorage.setItem("rememberedUsername", username);
            }

            setTimeout(() => router.push("/home"), 1000);
        } else {
            toast.error("Invalid username or password!");
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-4">
            <Toaster position="top-right" />
            <div className="w-[380px] rounded-3xl backdrop-blur-[0.5px] border border-cyan-400/40 shadow-[0_0_40px_rgba(0,255,255,0.4)] p-10 text-white">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-cyan-400">LOGIN</h1>
                    <p className="text-gray-300 mt-2">Welcome Back</p>
                </div>
                <form className="flex flex-col gap-6" onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        className="bg-transparent focus:bg-transparent border-b border-cyan-400 py-2 px-4 rounded-full focus:outline-none placeholder-gray-400"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="bg-transparent focus:bg-transparent border-b border-cyan-400 py-2 px-4 rounded-full focus:outline-none placeholder-gray-400"
                    />

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="accent-cyan-400"
                                checked={remember}
                                onChange={e => setRemember(e.target.checked)}
                            />
                            <span>Remember me</span>
                        </label>
                        <Link href="/forgot-password" className="text-cyan-400 hover:underline">Forgot password?</Link>
                    </div>

                    <button
                        type="submit"
                        className="mt-4 py-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 shadow-[0_0_25px_rgba(0,255,255,0.7)]"
                    >
                        SIGN IN
                    </button>
                </form>

                <p className="text-center text-sm text-gray-300 mt-6">
                    Don’t have an account? <Link href="/register" className="text-cyan-400 hover:underline">Register</Link>
                </p>
            </div>
        </section>
    );
}
