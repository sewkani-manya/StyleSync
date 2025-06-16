import React, { useState } from 'react';
//import './Form.css';

function RecommendationForm({ setRecommendation }) {
  const [mood, setMood] = useState('happy');
  const [weather, setWeather] = useState('sunny');
  const [time, setTime] = useState('morning');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://your-backend-url.onrender.com/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mood, weather, time }),
      });

      if (!res.ok) {
        throw new Error(`Server responded with status ${res.status}`);
      }

      const data = await res.json();
      setRecommendation(data.recommendation || 'No recommendation returned.');
    } catch (err) {
      console.error('Failed to fetch recommendation:', err);
      setRecommendation('StyleSync is warming up! Please try again later.');
    }
  };

  return (
    <form className="recommendation-form" onSubmit={handleSubmit}>
      <label>
        Mood:
        <select value={mood} onChange={(e) => setMood(e.target.value)}>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="confident">Confident</option>
        </select>
      </label>
      <label>
        Weather:
        <select value={weather} onChange={(e) => setWeather(e.target.value)}>
          <option value="sunny">Sunny</option>
          <option value="rainy">Rainy</option>
          <option value="cold">Cold</option>
        </select>
      </label>
      <label>
        Time:
        <select value={time} onChange={(e) => setTime(e.target.value)}>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
        </select>
      </label>
      <button type="submit">Get Outfit Suggestion</button>
    </form>
  );
}

export default RecommendationForm;
