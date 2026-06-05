import React, { useEffect, useState } from "react";

// Mock Data matching all required schema fields
const MOCK_JOBS = [
  {
    id: "job-1",
    title: "Senior Full Stack Developer",
    organization: "TechSoft Solutions",
    sector: "Private",
    location: "Islamabad, ICT",
    qualification: "Bachelor's in Computer Science",
    deadline: "2026-07-15",
    posted_date: "2026-06-01",
    publication_date: "2026-06-01",
    newspaper_source: "Dawn News",
    image_url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop",
    positions_available: 3,
    gender: "Both",
    age_limit: "22-35 years",
    apply_method: "Online",
    apply_link: "https://example.com/apply",
    is_active: true
  },
  {
    id: "job-2",
    title: "Assistant Director (Admin)",
    organization: "Federal Board of Revenue (FBR)",
    sector: "Government",
    location: "Lahore, Punjab",
    qualification: "Master's in Public Administration / MBA",
    deadline: "2026-06-30",
    posted_date: "2026-05-28",
    publication_date: "2026-05-28",
    newspaper_source: "Jang",
    image_url: "https://images.unsplash.com/photo-1557683316-973673baf926?w=500&auto=format&fit=crop",
    positions_available: 12,
    gender: "Both",
    age_limit: "21-28 years (+5 years relaxation)",
    apply_method: "By Post",
    apply_link: "https://fpsc.gov.pk",
    is_active: true
  },
  {
    id: "job-3",
    title: "Data Analyst",
    organization: "Habib Bank Limited (HBL)",
    sector: "Semi-Government",
    location: "Karachi, Sindh",
    qualification: "Bachelors in Statistics/Data Science",
    deadline: "2026-07-05",
    posted_date: "2026-06-03",
    publication_date: "2026-06-03",
    newspaper_source: "Express Tribune",
    image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop",
    positions_available: 2,
    gender: "Both",
    age_limit: "24-32 years",
    apply_method: "Online",
    apply_link: "https://hbl.com/careers",
    is_active: true
  }
];

function Home() {
  const [input, setInput] = useState("");
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [sortBy, setSortBy] = useState("latest");
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    // API parsing lifecycle hook
    const activeJobs = MOCK_JOBS.filter((job) => job.is_active);
    setJobs(activeJobs);
    setFilteredJobs(activeJobs);
  }, []);

  useEffect(() => {
    let result = [...jobs];

    if (input.trim() !== "") {
      result = result.filter(
        (job) =>
          job.title.toLowerCase().includes(input.toLowerCase()) ||
          job.organization.toLowerCase().includes(input.toLowerCase()) ||
          job.location.toLowerCase().includes(input.toLowerCase())
      );
    }

    if (sortBy === "latest") {
      result.sort((a, b) => new Date(b.posted_date) - new Date(a.posted_date));
    } else if (sortBy === "deadline") {
      result.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    } else if (sortBy === "title") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredJobs(result);
  }, [input, sortBy, jobs]);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSearchClear() {
    setInput("");
  }

  return (
    <div className="min-h-screen bg-slate-50/60 pb-12 text-slate-800">
      {/* Hero Header Section */}
      <section className="bg-white border-b border-slate-200/60 py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Find <span className="text-cyan-600">Real Jobs</span> in Pakistan
          </h1>
          <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500 sm:max-w-xl sm:text-base md:mt-4 md:max-w-2xl md:text-lg">
            Your centralized portal for verified career opportunities spanning Government and Private sectors.
          </p>

          {/* Fully Responsive Fluid Search Bar System */}
          <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-slate-200 bg-white p-2.5 shadow-md shadow-slate-100 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            <div className="relative flex-1">
              <svg
                className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search job keyword, title, or city..."
                value={input}
                onChange={handleChange}
                className="w-full h-12 rounded-xl border-0 pl-11 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-slate-50/50 sm:bg-white"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto border-t border-slate-100 pt-2 sm:border-t-0 sm:pt-0">
              <div className="relative flex-1 sm:flex-initial">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full h-12 appearance-none rounded-xl border border-slate-200 bg-white px-4 pr-10 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="latest">Sort: Latest</option>
                  <option value="deadline">Sort: Deadline</option>
                  <option value="title">Sort: Alphabetical</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {input && (
                <button
                  type="button"
                  onClick={handleSearchClear}
                  className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-500 hover:bg-slate-50 active:bg-slate-100"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Jobs Deck Section */}
      <main className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-500">
            Active Posts ({filteredJobs.length})
          </h2>
        </div>

        {/* Responsive Grid System: Stacks perfectly on tiny viewports */}
        {filteredJobs.length === 0 ? (
          <div className="mt-12 text-center px-4">
            <svg className="mx-auto h-12 w-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-sm font-semibold text-slate-900">No vacancies match your filter</h3>
            <p className="mt-1 text-xs text-slate-500">Refine or clear your keywords to view alternative postings.</p>
          </div>
        ) : (
          <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                onClick={() => setSelectedJob(job)}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all active:scale-[0.99] sm:hover:-translate-y-0.5 sm:hover:border-cyan-300 sm:hover:shadow-md cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-bold tracking-wide uppercase ${
                        job.sector === "Government"
                          ? "bg-amber-50 text-amber-800 border border-amber-200"
                          : job.sector === "Semi-Government"
                          ? "bg-purple-50 text-purple-800 border border-purple-200"
                          : "bg-cyan-50 text-cyan-800 border border-cyan-200"
                      }`}
                    >
                      {job.sector}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400 truncate max-w-[120px]">
                      {job.newspaper_source}
                    </span>
                  </div>

                  <h3 className="mt-3 text-base font-bold text-slate-900 group-hover:text-cyan-700 transition-colors line-clamp-2">
                    {job.title}
                  </h3>
                  <p className="mt-0.5 text-xs font-semibold text-slate-500 truncate">{job.organization}</p>

                  <div className="mt-4 space-y-2 border-t border-slate-100 pt-3 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 flex-shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="truncate">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 flex-shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Deadline: <strong className="text-rose-600 font-bold">{job.deadline}</strong></span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-end text-xs font-bold text-cyan-600 group-hover:text-cyan-700 pt-2 border-t border-slate-50">
                  <span>Details</span>
                  <svg className="ml-0.5 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Adaptive Bottom-Sheet Drawer (Mobile) & Modal Overlay (Desktop) */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/60 backdrop-blur-sm p-0 sm:p-4 transition-opacity">
          <div className="relative w-full max-w-2xl bg-white shadow-2xl rounded-t-2xl sm:rounded-2xl max-h-[92vh] sm:max-h-[85vh] overflow-y-auto flex flex-col">
            
            {/* Stick Close Control Button (Top-Right Panel) */}
            <div className="absolute right-4 top-4 z-10">
              <button
                type="button"
                onClick={() => setSelectedJob(null)}
                className="rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200 active:bg-slate-300 focus:outline-none"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Inside Container */}
            <div className="p-5 sm:p-8 overflow-y-auto">
              <div>
                <span className="inline-flex items-center rounded bg-cyan-50 border border-cyan-200 px-2.5 py-0.5 text-xs font-bold text-cyan-800 uppercase tracking-wide">
                  {selectedJob.sector} Sector
                </span>
                <h2 className="mt-2 text-lg font-black text-slate-900 pr-8 sm:text-2xl">{selectedJob.title}</h2>
                <p className="text-xs sm:text-sm font-bold text-slate-500 mt-0.5">{selectedJob.organization}</p>
              </div>

              {/* Specifications Block - Changes layout based on viewport width */}
              <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400">Position Profile</h4>
                  <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-3 space-y-2 text-xs">
                    <div className="flex justify-between gap-2 py-0.5">
                      <span className="text-slate-500">City / Location:</span>
                      <span className="font-bold text-slate-900 text-right">{selectedJob.location}</span>
                    </div>
                    <div className="flex justify-between gap-2 py-0.5">
                      <span className="text-slate-500">Education Requirement:</span>
                      <span className="font-bold text-slate-900 text-right">{selectedJob.qualification}</span>
                    </div>
                    <div className="flex justify-between gap-2 py-0.5">
                      <span className="text-slate-500">Vacancies Available:</span>
                      <span className="font-bold text-slate-900">{selectedJob.positions_available}</span>
                    </div>
                    <div className="flex justify-between gap-2 py-0.5">
                      <span className="text-slate-500">Gender Limit:</span>
                      <span className="font-bold text-slate-900">{selectedJob.gender}</span>
                    </div>
                    <div className="flex justify-between gap-2 py-0.5">
                      <span className="text-slate-500">Age Range:</span>
                      <span className="font-bold text-slate-900">{selectedJob.age_limit}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400">Tracking & Logistics</h4>
                  <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-3 space-y-2 text-xs">
                    <div className="flex justify-between gap-2 py-0.5">
                      <span className="text-slate-500">Newspaper Source:</span>
                      <span className="font-bold text-slate-900 text-right">{selectedJob.newspaper_source}</span>
                    </div>
                    <div className="flex justify-between gap-2 py-0.5">
                      <span className="text-slate-500">Publication Date:</span>
                      <span className="font-bold text-slate-900">{selectedJob.publication_date}</span>
                    </div>
                    <div className="flex justify-between gap-2 py-0.5">
                      <span className="text-slate-500">System Uploaded:</span>
                      <span className="font-bold text-slate-900">{selectedJob.posted_date}</span>
                    </div>
                    <div className="flex justify-between gap-2 py-0.5">
                      <span className="text-slate-500">Apply Protocol:</span>
                      <span className="font-bold text-cyan-700">{selectedJob.apply_method}</span>
                    </div>
                    <div className="flex justify-between gap-2 py-0.5">
                      <span className="text-slate-500">Closing Date:</span>
                      <span className="font-black text-rose-600">{selectedJob.deadline}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Advertisement Snapshot */}
              {selectedJob.image_url && (
                <div className="mt-5">
                  <h4 className="mb-1.5 text-[11px] font-black uppercase tracking-widest text-slate-400">Official Ad Scan</h4>
                  <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                    <img
                      src={selectedJob.image_url}
                      alt="Job advertisement viewport clipped frame"
                      className="w-full h-auto max-h-60 sm:max-h-72 object-cover object-top"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Modal Responsive Sticky Action Bar */}
            <div className="border-t border-slate-100 bg-slate-50 px-5 py-4 flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-between rounded-b-2xl">
              <span className="text-[10px] font-mono text-slate-400 text-center sm:text-left">System ID: {selectedJob.id}</span>
              <div className="flex flex-col gap-2 w-full sm:flex-row sm:w-auto">
                <button
                  type="button"
                  onClick={() => setSelectedJob(null)}
                  className="w-full sm:w-auto h-11 px-5 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 transition-colors active:bg-slate-50"
                >
                  Dismiss
                </button>
                {selectedJob.apply_link && (
                  <a
                    href={selectedJob.apply_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto h-11 px-5 rounded-xl bg-slate-900 text-xs font-bold text-white transition-all flex items-center justify-center hover:bg-cyan-700 active:scale-[0.98]"
                  >
                    Apply on Official Website
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Home;