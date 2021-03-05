import React from "react";
import "../Style/JobCard.css";
function JobCard() {
  return (
    <div className="JobCard">
      <img
        className="JobCard__Logo"
        src="https://github-jobs.s3.amazonaws.com/FWJJXJhT8WBgKvtx9ro7qixq?response-content-disposition=inline%3B%20filename%3D%22frogslayer.png%22%3B%20filename%2A%3DUTF-8%27%27frogslayer.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJENXOYUQN2IQEWRA%2F20210305%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210305T164342Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=223a37b073d3b2e69f1cbcee735c1d8a725507790aaf971f67b1a6dad35e16ed"
      />
      <div className="JobCard__Info">
        <h2 className="JobCard__Title">Summer Intern</h2>
        <div>
          <h3 className="JobCard__Company">Frogs Layer</h3>
          <h4 className="JobCard__Location">London</h4>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
