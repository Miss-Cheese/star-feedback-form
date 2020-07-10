import React from 'react';
import './App.css';

export default function Star(props) {

    return(
        <div className="star" onMouseEnter={() => props.starData.setStarHovered(props.starVal)} onMouseLeave={() => props.starData.setStarHovered(props.starData.feedbackValue)} onClick={() => props.starData.setFeedbackValue(props.starVal)}>
          <img src={props.starData.starHovered >= props.starVal ? "star_full.svg" : "star_hollow.svg"} width="48" height="48" alt="star"/>
        </div>
    )
}