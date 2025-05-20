import React, { useState } from 'react';
import RecommendationForm from './components/RecommendationForm';
import RecommendationResult from './components/RecommendationResult';
import './App.css';

function App() {
  const [recommendation, setRecommendation] = useState(null);

  return (
    <div className="app">
      <h1>StyleSync – Fashion Recommender</h1>
      <RecommendationForm setRecommendation={setRecommendation} />
      {recommendation && <RecommendationResult data={recommendation} />}
    </div>
  );
}

export default App;