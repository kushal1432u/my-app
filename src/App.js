import React, { useState } from 'react';
import './App.scss';
import BpkCalendar from 'bpk-component-calendar';
import { BpkButton } from 'bpk-component-button';

function App() {
 
  const [selectedDate, setSelectedDate] = useState(null);

 
  const onDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="App">
      {/* Header text */}
      <header className="App-header">
        <h1>Flight Schedule</h1>
      </header>

      {/* Calendar Component */}
      <div className="calendar-container">
        <BpkCalendar 
          onDateSelect={onDateSelect}
          selectedDate={selectedDate}
        />
      </div>

      {/* Continue Button */}
      <div className="button-container">
        <BpkButton onClick={() => alert('Continue clicked!')}>Continue</BpkButton>
      </div>
    </div>
  );
}

export default App;
