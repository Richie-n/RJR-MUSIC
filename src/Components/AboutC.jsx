import React from 'react';

const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Transparent white background
    borderRadius: '10px', // Rounded corners
    padding: '20px', // Padding around the content
    color: 'white', // White text
};

const headingStyle = {
    color: 'white', 
};

const AboutPage = () => {
    return (
        <div className="about-page" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={cardStyle}>
                <h1 style={headingStyle}>About Us</h1>

                <section className="mission-section">
                    <h2 style={headingStyle}>Our Mission</h2>
                    <p>
                        At RJR MUSIC, we're passionate about connecting people through music. Our mission is to provide a platform where music enthusiasts of all tastes can explore a vast library of songs, artists, and genres. Whether you're into chart-topping hits, underground indie tracks, or timeless classics, we've got something for everyone.
                    </p>
                </section>

                <section className="what-sets-us-apart-section">
                    <h2 style={headingStyle}>What Sets Us Apart</h2>
                    <ul>
                        <li><strong>Curated Playlists:</strong> Discover handpicked playlists curated by music experts and fellow users. From mood-based mixes to genre-specific collections, there's a playlist for every occasion.</li>
                        <li><strong>Personalized Recommendations:</strong> Our advanced recommendation algorithms learn your preferences over time, serving up personalized song suggestions tailored to your taste.</li>
                        <li><strong>High-Quality Audio:</strong> Immerse yourself in crystal-clear sound with our high-quality audio streaming. Hear every note, beat, and lyric as the artist intended.</li>
                        <li><strong>Community Engagement:</strong> Join a vibrant community of music lovers who share your passion. Connect with fellow fans, discuss your favorite tracks, and discover new artists together.</li>
                    </ul>
                </section>

                <section className="our-story-section">
                    <h2 style={headingStyle}>Our Story</h2>
                    <p>
                        RJR MUSIC was born out of a love for music and a desire to make it accessible to everyone, everywhere. Since our inception, we've been committed to providing a seamless, user-friendly experience that puts the music first.
                    </p>
                </section>

                <section className="get-in-touch-section">
                    <h2 style={headingStyle}>Get in Touch</h2>
                    <p>
                        Have a question, feedback, or just want to say hello? We'd love to hear from you! Reach out to us <a href="https://www.instagram.com/itssyourrboyyrick/">here</a> and let us know how we can make your music streaming experience even better.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default AboutPage;
