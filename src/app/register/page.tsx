"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        if (!username || !email || !password) return toast.error("Fill all fields");

        localStorage.setItem("user", JSON.stringify({ username, email, password }));
        toast.success("Registration successful! Please login.");

        setTimeout(() => router.push("/login"), 1000);
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-4">
            <Toaster position="top-right" />
            <div className="w-[380px] rounded-3xl backdrop-blur-[0.5px] border border-cyan-400/40 shadow-[0_0_40px_rgba(0,255,255,0.4)] p-10 text-white">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-cyan-400">REGISTER</h1>
                    <p className="text-gray-300 mt-2">Create Account</p>
                </div>
                <form className="flex flex-col gap-6" onSubmit={handleRegister}>
                    <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}
                        className="bg-transparent focus:bg-transparent border-b border-cyan-400 py-2 px-4 rounded-full focus:outline-none placeholder-gray-400" />
                    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
                        className="bg-transparent focus:bg-transparent border-b border-cyan-400 py-2 px-4 rounded-full focus:outline-none placeholder-gray-400" />
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
                        className="bg-transparent focus:bg-transparent border-b border-cyan-400 py-2 px-4 rounded-full focus:outline-none placeholder-gray-400" />
                    <button type="submit"
                        className="mt-4 py-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 shadow-[0_0_25px_rgba(0,255,255,0.7)]">
                        SIGN UP
                    </button>
                </form>
                <p className="text-center text-sm text-gray-300 mt-6">
                    Already have an account? <Link href="/login" className="text-cyan-400 hover:underline">Login</Link>
                </p>
            </div>
        </section>
    );
}
