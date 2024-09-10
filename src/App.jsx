import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
    name: "",
    address: "",
    country: "",
    zipcode: "",
    email: "",
    sex: "",
    language: [],
    about: "",
  });

  const [formErrors, setFormErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const newLanguage = checked
        ? [...formData.language, value]
        : formData.language.filter((lang) => lang !== value);
      setFormData({ ...formData, language: newLanguage });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Validation logic
  const validate = () => {
    const errors = {};
    if (
      !formData.userId ||
      formData.userId.length < 5 ||
      formData.userId.length > 12
    ) {
      errors.userId = "Required and must be of length 5 to 12.";
    }
    if (
      !formData.password ||
      formData.password.length < 7 ||
      formData.password.length > 12
    ) {
      errors.password = "Required and must be of length 7 to 12.";
    }
    if (!formData.name || !/^[A-Za-z]+$/.test(formData.name)) {
      errors.name = "Required and alphabetic only.";
    }
    if (!formData.country) {
      errors.country = "Required. Must select a country.";
    }
    if (!formData.zipcode || isNaN(formData.zipcode)) {
      errors.zipcode = "Required. Must be numeric only.";
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Required. Must be a valid email.";
    }
    if (!formData.sex) {
      errors.sex = "Required.";
    }
    if (formData.language.length === 0) {
      errors.language = "Required.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Create a formatted message with the submitted data
      const message = `
        User ID: ${formData.userId}
        Password: ${formData.password}
        Name: ${formData.name}
        Address: ${formData.address}
        Country: ${formData.country}
        ZIP Code: ${formData.zipcode}
        Email: ${formData.email}
        Sex: ${formData.sex}
        Language: ${formData.language.join(", ")}
        About: ${formData.about}
      `;

      // Show the message in an alert
      alert(`Form submitted successfully! \n\n${message}`);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form-container">
        <h1>Registration Form</h1>

        <div className="form-field">
          <label htmlFor="userId">User ID:</label>
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            required
          />
          <span className="error">{formErrors.userId}</span>
        </div>

        <div className="form-field">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span className="error">{formErrors.password}</span>
        </div>

        <div className="form-field">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <span className="error">{formErrors.name}</span>
        </div>

        <div className="form-field">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label>Country:</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="">(Please select a country)</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Pakistan">Pakistan</option>
            <option value="India">India</option>
          </select>
          <span className="error">{formErrors.country}</span>
        </div>

        <div className="form-field">
          <label>ZIP Code:</label>
          <input
            type="text"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
            required
          />
          <span className="error">{formErrors.zipcode}</span>
        </div>

        <div className="form-field">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <span className="error">{formErrors.email}</span>
        </div>

        <div className="form-field">
          <label>Sex:</label>
          <input
            type="radio"
            name="sex"
            value="Male"
            onChange={handleChange}
          />{" "}
          Male
          <input
            type="radio"
            name="sex"
            value="Female"
            onChange={handleChange}
          />{" "}
          Female
          <span className="error">{formErrors.sex}</span>
        </div>

        <div className="form-field">
          <label>Language:</label>
          <input
            type="checkbox"
            name="language"
            value="English"
            onChange={handleChange}
          />{" "}
          English
          <input
            type="checkbox"
            name="language"
            value="Non-English"
            onChange={handleChange}
          />{" "}
          Non-English
          <span className="error">{formErrors.language}</span>
        </div>

        <div className="form-field">
          <label>About:</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
