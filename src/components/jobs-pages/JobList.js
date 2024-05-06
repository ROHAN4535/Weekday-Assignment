import React from "react";
import JobCard from "./JobCard";
import { Grid } from "@mui/material";

const JobList = ({ jobs, filterRole, filterLocation, filterExperience }) => {
  const filterJobs = (job) => {
    return (
      job.jobRole.toLowerCase().includes(filterRole.toLowerCase()) &&
      job.location.toLowerCase().includes(filterLocation.toLowerCase()) &&
      job.minExp?.toString().includes(filterExperience)
    );
  };

  return (
    <Grid container spacing={8}>
      {jobs.filter(filterJobs).map((job, index) => (
        <Grid
          item
          key={`${job.jdUid}-${job.location}-${index}`}
          xs={12}
          sm={6}
          md={4}
        >
          <JobCard job={job} />
        </Grid>
      ))}
    </Grid>
  );
};

export default JobList;
