import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSe96q78kS2qGTsrQRX9Yf2I3vYGFlU5fT4SDhVYyPBGfZaziQ/formResponse";
    const formData = new FormData();
    formData.append("entry.1806262846", name);   // Replace with actual entry ID for name
    formData.append("entry.4674183", email);  // Replace with actual entry ID for email

    fetch(googleFormURL, {
      method: "POST",
      mode: "no-cors", // Required for Google Forms
      body: formData,
    })
      .then(() => {
        alert("Form submitted!");
        setName("");
        setEmail("");
      })
      .catch((err) => {
        alert("Error submitting form");
        console.error(err);
      });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Submit Your Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br /><br />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;


// https://docs.google.com/forms/d/e/1FAIpQLSe96q78kS2qGTsrQRX9Yf2I3vYGFlU5fT4SDhVYyPBGfZaziQ/viewform?usp=dialog