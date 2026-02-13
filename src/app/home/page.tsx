"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
    const [username, setUsername] = useState("");
    const router = useRouter();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const { username: savedUsername } = JSON.parse(storedUser);
            setUsername(savedUsername);
        }
    }, []);

    const handleLogout = () => {
        // Custom toast confirm in English
        toast(
            t => (
                <div className="flex flex-col gap-2">
                    <p className="text-white">Are you sure you want to logout?</p>
                    <div className="flex justify-center gap-2">
                        <button
                            className="bg-cyan-400 cursor-pointer text-black px-3 py-1 rounded-full"
                            onClick={() => {
                                localStorage.removeItem("rememberedUsername");
                                toast.dismiss(t.id);
                                router.push("/login");
                            }}
                        >
                            Yes
                        </button>
                        <button
                            className="bg-gray-700 cursor-pointer text-white px-3 py-1 rounded-full"
                            onClick={() => toast.dismiss(t.id)}
                        >
                            No
                        </button>
                    </div>
                </div>
            ),
            { duration: Infinity, style: { background: "rgba(0,0,0,0.85)" } }
        );
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
            <Toaster position="top-center" />
            <h1 className="text-3xl font-bold mb-4">Welcome, {username}!</h1>
            <p className="mb-8 text-gray-300">You are now logged in.</p>
            <button
                onClick={handleLogout}
                className="py-2 px-6 cursor-pointer rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 shadow-[0_0_25px_rgba(0,255,255,0.7)]"
            >
                Logout
            </button>
        </section>
    );
}
