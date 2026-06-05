import React, { useEffect, useState } from "react";

// Mock Data matching all your required fields for instant preview and testing
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

  // Corrected API Fetch Lifecycle
  useEffect(() => {
    // Replace this mock assignment with your actual API endpoint logic when ready:
    /*
    fetch("/api/jobs")
      .then((res) => res.json())
      .then((data) => {
         // Filter out inactive jobs right away if desired
         const activeJobs = data.filter(job => job.is_active);
         setJobs(activeJobs);
         setFilteredJobs(activeJobs);
      })
      .catch((err) => console.error("Error fetching jobs:", err));
    */
    const activeJobs = MOCK_JOBS.filter((job) => job.is_active);
    setJobs(activeJobs);
    setFilteredJobs(activeJobs);
  }, []);

  // Sync Search and Sort Filters whenever dependencies change
  useEffect(() => {
    let result = [...jobs];

    // Apply Search Input Filter
    if (input.trim() !== "") {
      result = result.filter(
        (job) =>
          job.title.toLowerCase().includes(input.toLowerCase()) ||
          job.organization.toLowerCase().includes(input.toLowerCase()) ||
          job.location.toLowerCase().includes(input.toLowerCase())
      );
    }

    // Apply Sorting Options
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
    <div className="min-h-screen bg-slate-50/50 pb-16 text-slate-800">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200/60 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Find <span className="text-cyan-600">Real Jobs</span> in Pakistan
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-slate-500 sm:text-lg md:mt-5 md:max-w-2xl md:text-xl">
            Discover verified career openings across Government, Private, and Semi-Government sectors.
          </p>

          {/* Search Bar & Filters Wrapper */}
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-slate-200/80 bg-white p-3 shadow-lg shadow-slate-100/70 sm:flex sm:items-center sm:gap-3">
            <div className="relative flex-1">
              <svg
                className="absolute left-4 top-3.5 h-5 w-5 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Job title, keywords, or location..."
                value={input}
                onChange={handleChange}
                className="w-full rounded-xl border-0 py-3 pl-12 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div className="mt-3 flex items-center gap-2 border-t border-slate-100 pt-3 sm:mt-0 sm:border-t-0 sm:pt-0">
              <div className="relative flex-1 sm:flex-initial">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-4 pr-10 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="latest">Sort by: Latest Posted</option>
                  <option value="deadline">Sort by: Deadline</option>
                  <option value="title">Sort by: Alphabetical</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {input && (
                <button
                  onClick={handleSearchClear}
                  className="rounded-xl border border-slate-200 px-3 py-2.5 text-xs font-medium text-slate-500 hover:bg-slate-50"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Jobs Listing Section */}
      <main className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <h2 className="text-lg font-bold text-slate-900">
            Available Opportunities ({filteredJobs.length})
          </h2>
        </div>

        {/* Dynamic Grid Layout */}
        {filteredJobs.length === 0 ? (
          <div className="mt-16 text-center">
            <svg className="mx-auto h-12 w-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-sm font-semibold text-slate-900">No jobs found</h3>
            <p className="mt-1 text-sm text-slate-500">Try adjusting your keywords or filters.</p>
          </div>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                onClick={() => setSelectedJob(job)}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-md hover:shadow-cyan-100/40 cursor-pointer"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        job.sector === "Government"
                          ? "bg-amber-50 text-amber-800 border border-amber-200"
                          : job.sector === "Semi-Government"
                          ? "bg-purple-50 text-purple-800 border border-purple-200"
                          : "bg-cyan-50 text-cyan-800 border border-cyan-200"
                      }`}
                    >
                      {job.sector}
                    </span>
                    <span className="text-xs text-slate-400">Ref: {job.newspaper_source}</span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-slate-900 transition-colors group-hover:text-cyan-700">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-500">{job.organization}</p>

                  <div className="mt-6 space-y-2.5 border-t border-slate-100 pt-4 text-xs font-medium text-slate-600">
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-rose-600 font-semibold">Deadline: {job.deadline}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end text-xs font-bold text-cyan-600 group-hover:text-cyan-700">
                  <span>View Full Details</span>
                  <svg className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Detailed Modal Overlay on Card Click */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="inline-flex items-center rounded-full bg-cyan-50 border border-cyan-200 px-3 py-0.5 text-xs font-semibold text-cyan-800">
                  {selectedJob.sector} Sector
                </span>
                <h2 className="mt-2 text-xl font-extrabold text-slate-900 sm:text-2xl">{selectedJob.title}</h2>
                <p className="text-base font-semibold text-slate-500">{selectedJob.organization}</p>
              </div>
              <button
                onClick={() => setSelectedJob(null)}
                className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body Info Columns */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Job Specifications</h4>
                <div className="divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-slate-50/50 px-4 text-sm">
                  <div className="flex justify-between py-2.5">
                    <span className="text-slate-500">Location:</span>
                    <span className="font-semibold text-slate-900">{selectedJob.location}</span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="text-slate-500">Education:</span>
                    <span className="font-semibold text-slate-900 text-right">{selectedJob.qualification}</span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="text-slate-500">Vacancies:</span>
                    <span className="font-semibold text-slate-900">{selectedJob.positions_available} Position(s)</span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="text-slate-500">Gender Limit:</span>
                    <span className="font-semibold text-slate-900">{selectedJob.gender}</span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="text-slate-500">Age Bracket:</span>
                    <span className="font-semibold text-slate-900">{selectedJob.age_limit}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Media & Verification</h4>
                <div className="divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-slate-50/50 px-4 text-sm">
                  <div className="flex justify-between py-2.5">
                    <span className="text-slate-500">Newspaper Source:</span>
                    <span className="font-semibold text-slate-900">{selectedJob.newspaper_source}</span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="text-slate-500">Publication Date:</span>
                    <span className="font-semibold text-slate-900">{selectedJob.publication_date}</span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="text-slate-500">System Uploaded:</span>
                    <span className="font-semibold text-slate-900">{selectedJob.posted_date}</span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="text-slate-500">Application Method:</span>
                    <span className="font-semibold text-cyan-700">{selectedJob.apply_method}</span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="text-slate-500">Deadline:</span>
                    <span className="font-bold text-rose-600">{selectedJob.deadline}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Advertisement Image Preview (Supabase Storage placeholder implementation) */}
            {selectedJob.image_url && (
              <div className="mt-6">
                <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">Advertisement Clip</h4>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                  <img
                    src={selectedJob.image_url}
                    alt={`${selectedJob.title} Advertisement Graphic`}
                    className="w-full h-48 object-cover object-center transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div>
              </div>
            )}

            {/* Action Footer Button */}
            <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4">
              <span className="text-xs text-slate-400 font-mono">ID: {selectedJob.id}</span>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedJob(null)}
                  className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Close
                </button>
                {selectedJob.apply_link && (
                  <a
                    href={selectedJob.apply_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-cyan-700"
                  >
                    Apply Official Link
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