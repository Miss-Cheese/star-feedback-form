import React, {useState} from 'react';
import './App.css';
import Star from './Star';

function App() {

  const [starHovered, setStarHovered] = useState(0)
  const [feedbackValue, setFeedbackValue] = useState(0)
  const [userMetName, setUserMetName] = useState("Vanessa")
  

  const starData = {
    starHovered: starHovered,
    setStarHovered: setStarHovered,
    feedbackValue: feedbackValue,
    setFeedbackValue: setFeedbackValue
  }

  return (
    <div className="feedback-section">
      <h3>How relevant was your match with {userMetName}?</h3>
      <p>Your feedback is private and will only be used to improve future matches</p>
      <div className="star-row">
        <Star starVal={1} starData={starData}/>
        <Star starVal={2} starData={starData}/>
        <Star starVal={3} starData={starData}/>
        <Star starVal={4} starData={starData}/>
        <Star starVal={5} starData={starData}/>
      </div>
    </div>
  );
}

export default App;
