import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    bloodGroup: '',
    gender: '',
    weight: '',
    lastDonatedDate: '',
    dob: '',
    age: '',
    city: '',
    smoking: false,
    alcoholic: false,
    pregnant: false,
    breastfeeding: false,
    hivAids: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add logic to handle form submission (e.g., API call)
  };

  return (
    <div className="article">
      <p>Form</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone No.:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone No."
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email@gmail.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="bloodGroup">Blood Group:</label>
        <select
          id="bloodGroup"
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select Blood Group
          </option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>

        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          name="weight"
          placeholder="Weight(kg)"
          min="10"
          value={formData.weight}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastDonatedDate">Last Donated Date:</label>
        <input
          type="date"
          id="lastDonatedDate"
          name="lastDonatedDate"
          value={formData.lastDonatedDate}
          onChange={handleChange}
        />

        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          min="18"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <div className="topping">
          <label>
            <input
              type="checkbox"
              name="smoking"
              checked={formData.smoking}
              onChange={handleChange}
            />{' '}
            Smoking
          </label>
          <label>
            <input
              type="checkbox"
              name="alcoholic"
              checked={formData.alcoholic}
              onChange={handleChange}
            />{' '}
            Alcoholic
          </label>
          <label>
            <input
              type="checkbox"
              name="pregnant"
              checked={formData.pregnant}
              onChange={handleChange}
            />{' '}
            Pregnant
          </label>
          <label>
            <input
              type="checkbox"
              name="breastfeeding"
              checked={formData.breastfeeding}
              onChange={handleChange}
            />{' '}
            Breastfeeding
          </label>
          <label>
            <input
              type="checkbox"
              name="hivAids"
              checked={formData.hivAids}
              onChange={handleChange}
            />{' '}
            HIV/Aids
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;