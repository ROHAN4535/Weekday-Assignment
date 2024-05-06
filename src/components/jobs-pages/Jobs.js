import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {fetchJobs} from "../store/jobsSlice";
import JobFilters from "../jobs-pages/JobFilters";
import { Typography } from "@mui/material";

const Jobs = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(fetchJobs());
    return;
  }, [dispatch]);

  return (
    <div>
      <Typography variant="h4" style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "20px",
          fontWeight: "bold",
          paddingTop: "15px",
        }}
      >
        Candidate Application Platform
      </Typography>
      <JobFilters />
    </div>
  );
};

export default Jobs;