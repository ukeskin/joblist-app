import React from "react";
import "../Style/Jobs.css";

import JobCard from "./JobCard";
function Jobs() {
  return (
    <div className="Jobs">
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </div>
  );
}

export default Jobs;
