import React from "react";
import { useSelector } from "react-redux";
import JobCard from "./JobCard";
import { Grid } from "@mui/material";

const JobList = () => {
  const jobs = useSelector((state) => state.jobs.jobs);

  return (
    <Grid container spacing={8}>
      {jobs.map((job, index) => (
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
