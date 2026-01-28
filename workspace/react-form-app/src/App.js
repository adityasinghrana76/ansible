import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      setError("❌ Please fill Name, Email, and Phone.");
      return;
    }

    setError("");
    setSubmittedData(formData);

    // Clear form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="container">
      <h1>React Form App 🚀</h1>
      <p className="subtitle">Simple Contact Form Project</p>

      <form className="form-box" onSubmit={handleSubmit}>
        <label>Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <label>Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <label>Phone *</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone"
        />

        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message"
          rows="4"
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="result-box">
          <h2>✅ Submitted Data</h2>
          <p><b>Name:</b> {submittedData.name}</p>
          <p><b>Email:</b> {submittedData.email}</p>
          <p><b>Phone:</b> {submittedData.phone}</p>
          <p><b>Message:</b> {submittedData.message}</p>
        </div>
      )}
    </div>
  );
}

export default App;











 
  
   
    
     
      
       
        






