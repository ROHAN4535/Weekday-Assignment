import React, { useState } from "react";
import { Card, CardContent, Typography, Button, Collapse } from "@mui/material";
import { styled } from "@mui/material/styles";

const JobCard = ({ job }) => {
  const [showMore, setShowMore] = useState(false);
  const maxDescriptionLength = 100;
  return (
    <SCard>
      <CardContent>
        <Title variant="h6">{job.jobRole}</Title>
        <Location variant="body2">
          {job.company} {job.location}
        </Location>
        <Typography variant="body2">
          Estimated Salary: ${job.minJdSalary ? job.minJdSalary : "NA"} - $
          {job.maxJdSalary ? job.maxJdSalary : "NA"}✅
        </Typography>
        <Typography>About Company:</Typography>
        <Collapse in={showMore} timeout="auto" unmountOnExit>
          <Typography variant="body2" paragraph>
            {job.jobDetailsFromCompany}
          </Typography>
        </Collapse>
        <Typography variant="body2" paragraph>
          {job.jobDetailsFromCompany.substring(0, maxDescriptionLength)}
          {job.jobDetailsFromCompany.length > maxDescriptionLength && (
            <span
              onClick={() => setShowMore(!showMore)}
              style={{ color: "blue", cursor: "pointer" }}
            >
              {showMore ? " Read Less..." : " Read More..."}
            </span>
          )}
        </Typography>
        <Typography variant="body2" style={{ marginBottom: "7px" }}>
          Experience: {job.minExp ? job.minExp : "NA"} years
        </Typography>
        <AButton variant="contained" color="primary" href={job.jdLink}>
          ⚡Easy Apply
        </AButton>
      </CardContent>
    </SCard>
  );
};

const SCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  position: relative;
  border-radius: 20px;
  padding: 10px 5px;
  background-color: rgb(255, 255, 255);
  max-width: 360px;
  box-shadow: rgb(0, 0, 0, 0.25) 0px 1px 4px 0px;
  margin-right: 20px;
  margin-left: 50px;
  font-weight: 400;
  &:hover {
    transform: scale(1.1);
    background-color: white;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
  }
`;

const Title = styled(Typography)`
  text-transform: capitalize;
`;

const Location = styled(Typography)`
  text-transform: capitalize;
`;

const AButton = styled(Button)`
  width: 100%;
  cursor: pointer;
  border-radius: 0.5rem;
  background-color: rgb(85, 239, 196);
  border-color: rgb(85, 239, 196);
  color: rgb(0, 0, 0);
  font-size: 20px;
  padding: 8px 18px;
`;

export default JobCard;