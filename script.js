const jobs = [
  {
    company: "TechCorp Industries",
    position: "Entry Level Sales Representative",
    location: "New York, NY",
    type: "Full-time",
    salary: "$45,000/year",
    description: "Assist in client acquisition and sales growth.",
    status: "all"
  },
  {
    company: "Inventium Labs",
    position: "Junior Developer",
    location: "Boston, MA",
    type: "Internship",
    salary: "$20/hour",
    description: "Support development team with coding tasks.",
    status: "all"
  },
  {
    company: "Creative Studios",
    position: "UI/UX Designer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$65,000/year",
    description: "Design beautiful user interfaces for web and mobile.",
    status: "all"
  },
  {
    company: "DataFlow Systems",
    position: "Data Analyst",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$55,000/year",
    description: "Analyze business data and create insights reports.",
    status: "all"
  },
  {
    company: "CloudNet Solutions",
    position: "Cloud Engineer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$70,000/year",
    description: "Build and maintain cloud infrastructure.",
    status: "all"
  },
  {
    company: "Mobile First Apps",
    position: "Mobile Developer",
    location: "Austin, TX",
    type: "Contract",
    salary: "$50/hour",
    description: "Develop iOS and Android applications.",
    status: "all"
  },
  {
    company: "AI Innovations",
    position: "Machine Learning Engineer",
    location: "Mountain View, CA",
    type: "Full-time",
    salary: "$90,000/year",
    description: "Work on cutting-edge machine learning projects.",
    status: "all"
  },
  {
    company: "Digital Marketing Pro",
    position: "Marketing Specialist",
    location: "Los Angeles, CA",
    type: "Full-time",
    salary: "$52,000/year",
    description: "Create and execute digital marketing strategies.",
    status: "all"
  }
];

const jobsContainer = document.getElementById("jobs-container");
const emptyState = document.getElementById("empty-state");
const tabs = document.querySelectorAll(".tab");

function renderJobs(filter) {
  jobsContainer.innerHTML = "";
  const filtered = jobs.filter(job => filter === "all" ? true : job.status === filter);

  if (filtered.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  }
  emptyState.classList.add("hidden");

  filtered.forEach((job, index) => {
    const card = document.createElement("div");
    card.className = "job-card";
    const statusClass = job.status === 'interview' ? 'interview' : (job.status === 'rejected' ? 'rejected' : 'not-applied');
    const statusLabel = job.status === 'interview' ? 'Interview' : (job.status === 'rejected' ? 'Rejected' : 'Not Applied');

    card.innerHTML = `
      <button class="delete-btn" onclick="deleteJob(${index})" aria-label="Delete">🗑️</button>
      <h3>${job.company}</h3>
      <p><strong>Position:</strong> ${job.position}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Type:</strong> ${job.type}</p>
      <p><strong>Salary:</strong> ${job.salary}</p>
      <div class="status-badge ${statusClass}">${statusLabel}</div>
      <p><strong>Description:</strong> ${job.description}</p>
      <div class="action-row">
        <button class="btn-interview" onclick="updateStatus(${index}, 'interview')">Interview</button>
        <button class="btn-rejected" onclick="updateStatus(${index}, 'rejected')">Rejected</button>
      </div>
    `;
    jobsContainer.appendChild(card);
  });
}

function updateStatus(index, status) {
  jobs[index].status = status;
  updateCounts();
  const activeTab = document.querySelector(".tab.active").dataset.tab;
  renderJobs(activeTab);
}

function deleteJob(index) {
  const status = jobs[index].status;
  jobs.splice(index, 1);
  updateCounts();
  const activeTab = document.querySelector(".tab.active").dataset.tab;
  renderJobs(activeTab);
}

function updateCounts() {
  const allCount = jobs.length;
  const interviewCount = jobs.filter(j => j.status === "interview").length;
  const rejectedCount = jobs.filter(j => j.status === "rejected").length;
  const elCountAll = document.getElementById("count-all");
  if (elCountAll) elCountAll.textContent = allCount;
  const elCountInterview = document.getElementById("count-interview");
  if (elCountInterview) elCountInterview.textContent = interviewCount;
  const elCountRejected = document.getElementById("count-rejected");
  if (elCountRejected) elCountRejected.textContent = rejectedCount;
  const elJobsCount = document.getElementById("jobs-count");
  if (elJobsCount) elJobsCount.textContent = `${allCount} Jobs`;

  const elTotalApps = document.getElementById("total-apps");
  if (elTotalApps) elTotalApps.textContent = allCount;
  const elTotalInterviews = document.getElementById("total-interviews");
  if (elTotalInterviews) elTotalInterviews.textContent = interviewCount;
  const elTotalRejections = document.getElementById("total-rejections");
  if (elTotalRejections) elTotalRejections.textContent = rejectedCount;
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelector(".tab.active").classList.remove("active");
    tab.classList.add("active");
    renderJobs(tab.dataset.tab);
  });
});

updateCounts();
renderJobs("all");