import React from 'react';
//import './Result.css';

function RecommendationResult({ data }) {
  return (
    <div className="recommendation-result">
      <h2>Outfit Suggestion:</h2>
      <ul>
        {data.outfit.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationResult;
