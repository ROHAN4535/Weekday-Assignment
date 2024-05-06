import React, { useEffect } from "react";
import JobList from "../jobs-pages/JobList";
import { useDispatch } from "react-redux";
import {fetchJobs} from "../store/jobsSlice";

const Jobs = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);
  return (
    <div>
      <h1>Jobs</h1>
      <JobList />
    </div>
  );
};

export default Jobs;