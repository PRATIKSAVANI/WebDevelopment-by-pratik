import React from "react";

function Jobs() {
  const jobs = [
    { title: "React Developer", company: "Google" },
    { title: "Backend Developer", company: "Amazon" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Featured Jobs</h2>
      {jobs.map((job, index) => (
        <div key={index} style={styles.card}>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <button>Apply</button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    margin: "10px"
  }
};

export default Jobs;