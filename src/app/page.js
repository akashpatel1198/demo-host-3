"use client"
import { useState } from 'react';
export default function Home() {
  const [selectedDay, setSelectedDay] = useState(null);
  
  const days = [
    { name: 'Monday', message: 'New week, new opportunities! Start fresh.' },
    { name: 'Tuesday', message: 'Keep the momentum going!' },
    { name: 'Wednesday', message: 'Halfway there! You\'re doing great.' },
    { name: 'Thursday', message: 'One more push before the weekend!' },
    { name: 'Friday', message: 'Weekend is almost here! Finish strong.' },
    { name: 'Saturday', message: 'Time to relax and recharge.' },
    { name: 'Sunday', message: 'Rest and prepare for the week ahead.' }
  ];
  
  return (
    <div className="container">
      <h1>Day of the Week App</h1>
      
      <div className="button-container">
        {days.map((day) => (
          <button 
            key={day.name}
            onClick={() => setSelectedDay(day)}
            className={selectedDay?.name === day.name ? 'selected' : ''}
          >
            {day.name}
          </button>
        ))}
      </div>
      
      {selectedDay && (
        <div className="message-box">
          <h2>{selectedDay.name}</h2>
          <p>{selectedDay.message}</p>
        </div>
      )}
      
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
          text-align: center;
        }
        
        h1 {
          color: #333;
          margin-bottom: 30px;
        }
        
        .button-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-bottom: 30px;
        }
        
        button {
          padding: 10px 15px;
          background-color: #f0f0f0;
          border: 1px solid #ddd;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          transition: all 0.3s;
        }
        
        button:hover {
          background-color: #e0e0e0;
        }
        
        button.selected {
          background-color: #4a90e2;
          color: white;
          border: 1px solid #3a80d2;
        }
        
        .message-box {
          background-color: #f9f9f9;
          border: 1px solid #eee;
          border-radius: 8px;
          padding: 20px;
          max-width: 500px;
          margin: 0 auto;
        }
        
        .message-box h2 {
          color: #4a90e2;
          margin-top: 0;
        }
        
        .message-box p {
          font-size: 18px;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}