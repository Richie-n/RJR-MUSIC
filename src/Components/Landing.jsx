import React from 'react';

export default function Landing() {
  const cardStyle = {
    maxWidth: '500px', // Maximum width of the card
    padding: '30px', // Padding around the content
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Transparent white background
    borderRadius: '10px', // Rounded corners
    textAlign: 'center', // Center align content
    position: 'absolute', // Position the card absolutely
    top: '50%', // Center vertically
    left: '10%', // Position the card to the center-left of the page
    transform: 'translateY(-50%)', // Adjust for vertical centering
  };

  const headingStyle = {
    color: 'white',
    marginBottom: '10px', // Add margin bottom to the heading for spacing
    fontSize: '2rem', // Font size of the heading
    fontWeight: 'bold', // Font weight of the heading
  };

  const paragraphStyle = {
    color: '#F0F0F0', // Gray text color
    fontSize: '1rem', // Font size of the paragraph
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <div style={cardStyle}>
        <h5 style={headingStyle}>Welcome to RJR MUSIC</h5>
        <p style={paragraphStyle}>We The Best Music!</p>
      </div>
    </div>
  );
}
