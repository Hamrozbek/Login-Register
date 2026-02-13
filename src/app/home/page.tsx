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
        toast(
            t => (
                <div className="flex flex-col gap-3 sm:gap-2">
                    <p className="text-white text-sm sm:text-md">
                        Are you sure you want to logout?
                    </p>
                    <div className="flex justify-center gap-3 sm:gap-2">
                        <button
                            className="bg-cyan-400 cursor-pointer text-black px-4 py-1 md:px-6 md:py-2 rounded-full text-sm sm:text-xs"
                            onClick={() => {
                                localStorage.removeItem("rememberedUsername");
                                toast.dismiss(t.id);
                                router.push("/login");
                            }}
                        >
                            Yes
                        </button>
                        <button
                            className="bg-gray-700 cursor-pointer text-white px-4 py-1 md:px-6 md:py-2  rounded-full text-sm sm:text-xs"
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
        <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 sm:px-2">
            <Toaster position="top-center" />
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-center">
                Welcome, {username}!
            </h1>
            <p className="mb-4 text-gray-300 text-lg md:text-xl text-center sm:text-base">
                You are now logged in.
            </p>
            <button
                onClick={handleLogout}
                className="py-2 px-8 md:py-3 md:px-10 sm:py-2 sm:px-6 cursor-pointer rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 shadow-[0_0_25px_rgba(0,255,255,0.7)] text-md md:text-lg sm:text-base"
            >
                Logout
            </button>
        </section>
    );
}
