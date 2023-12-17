import React from 'react';
import "./PlanScreen.css";

function PlanScreen() {
  return (
    <div className='planScreen'>
        <div className='premium'>
            <h3>Premium (4K +HDR)</h3> 
            <button>Subscribe</button>
        </div>
        <div className='basic'>
            <h3>Basic (720p)</h3>
            <button>Subscribed</button>
        </div>
        <div className='standard'>
            <h3>Standard (1080p)</h3>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default PlanScreen;
