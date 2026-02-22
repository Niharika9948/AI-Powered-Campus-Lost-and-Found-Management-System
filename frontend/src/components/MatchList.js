import React from "react";

function MatchList({ matches }) {
  return (
    <div className="card">
      <h2>AI Matches</h2>

      {matches.length === 0 ? (
        <p>No matches yet</p>
      ) : (
        matches.map((item) => (
          <div key={item._id}>
            <b>{item.title}</b> - {item.location}
          </div>
        ))
      )}
    </div>
  );
}

export default MatchList;