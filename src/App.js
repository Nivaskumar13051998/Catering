import React from "react";
// Importing NavBar component
 // Importing LoginPage component
import "./App.css"; // Main App styling
import NavBar from "./Components/NavBar";
import LoginPage from "./Components/LoginPage";

const App = () => {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <NavBar/>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Sri Sudarsan Catering</h1>
          <p>
            Savoring Moments Together: Crafting exceptional culinary experiences
            for your most memorable events.
          </p>
          <button className="btn-primary">Know More</button>
        </div>

        {/* Quote Form Section */}
        <div className="quote-form">
          <h2>Get Your Quote</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="email" placeholder="Email Address" required />
            <select>
              <option value="">-- Select Your Service --</option>
              <option value="wedding">Brahmin Wedding</option>
              <option value="party">Party & Celebrations</option>
              <option value="corporate">Corporate Events</option>
            </select>
            <textarea placeholder="Message" rows="4"></textarea>
            <input type="date" required />
            <button type="submit" className="btn-submit">
              Submit Now →
            </button>
          </form>
        </div>
      </section>

      {/* Login Page Section */}
      <LoginPage />
    </div>
  );
};

export default App;

