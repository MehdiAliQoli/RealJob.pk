import { useState } from "react";

function Home() {
    const [input, setInput] = useState("");

    function handleChange(event) {
        setInput(event.target.value);
    }

    function search_it() {
        setInput("");
    }

    return (
        <section className="relative overflow-hidden bg-slate-950 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.22),transparent_42%),radial-gradient(circle_at_right,rgba(14,165,233,0.18),transparent_35%)]" />

            <div className="relative mx-auto flex min-h-[calc(100vh-72px)] w-full max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid w-full gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                    <div className="space-y-6">
                        <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm font-medium text-cyan-100 backdrop-blur-md">
                            Find your next role
                        </span>

                        <div className="space-y-4">
                            <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Search smarter and land the right job faster.
                            </h1>
                            <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                                Explore verified jobs, filter by your skills, and start applying from one clean dashboard.
                            </p>
                        </div>

                        <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl sm:p-5">
                            <div className="grid gap-4 md:grid-cols-2">
                                <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
                                    Job title or keyword
                                    <input
                                        type="text"
                                        placeholder="Search Your Job"
                                        value={input}
                                        onChange={handleChange}
                                        className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
                                    />
                                </label>

                                <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
                                    Job type
                                    <select className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30">
                                        <option>Full Time</option>
                                        <option>Part Time</option>
                                        <option>Remote</option>
                                        <option>Internship</option>
                                    </select>
                                </label>
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row">
                                <button
                                    onClick={search_it}
                                    className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                                >
                                    Search Jobs
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setInput("")}
                                    className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                                >
                                    Clear
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 text-sm text-slate-300">
                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Remote</span>
                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Developer</span>
                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Design</span>
                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Marketing</span>
                        </div>

                        <p className="text-sm text-slate-400">
                            Current search: <span className="font-semibold text-cyan-300">{input || "None"}</span>
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 rounded-4xl bg-cyan-400/20 blur-3xl" />
                        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl sm:p-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-300">Trending now</p>
                                    <h2 className="mt-1 text-2xl font-bold text-white">Featured roles</h2>
                                </div>
                                <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-xs font-semibold text-cyan-200">
                                    Live
                                </span>
                            </div>

                            <div className="mt-6 space-y-4">
                                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                                    <p className="text-sm text-slate-400">Senior Frontend Developer</p>
                                    <div className="mt-2 flex items-center justify-between gap-4">
                                        <span className="font-semibold text-white">React, Tailwind, Vite</span>
                                        <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">Remote</span>
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                                    <p className="text-sm text-slate-400">UI/UX Designer</p>
                                    <div className="mt-2 flex items-center justify-between gap-4">
                                        <span className="font-semibold text-white">Figma, Motion, Research</span>
                                        <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-semibold text-cyan-200">Full Time</span>
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                                    <p className="text-sm text-slate-400">Marketing Associate</p>
                                    <div className="mt-2 flex items-center justify-between gap-4">
                                        <span className="font-semibold text-white">Social, SEO, Growth</span>
                                        <span className="rounded-full bg-amber-400/15 px-3 py-1 text-xs font-semibold text-amber-300">Hybrid</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
