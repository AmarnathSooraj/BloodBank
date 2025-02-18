import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [gender, setGender] = useState("");

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div className="article">
      <p>Form</p>
      <form action="">
        <input type="text" placeholder="Your Name" />
        <input type="tel" placeholder="Phone No." />
        <input type="email" placeholder="email@gmail.com" />
        <input type="text" placeholder="Blood group" />
        <select value={gender} onChange={handleGenderChange}>
          <option value="" disabled>
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input type="number" placeholder="Weight(kg)" />
        <input type="date" placeholder="Last donated date" />
        <input type="date" placeholder="DOB" />
        <input type="number" placeholder="Age" />
        <input type="text" placeholder="City" />
        <div className="topping">
          <label>
            <input type="checkbox" value="Smoking" /> Smoking
          </label>
          <label>
            <input type="checkbox" value="Alcoholic" /> Alcoholic
          </label>
          <label>
            <input type="checkbox" value="Pregnant" /> Pregnant
          </label>
          <label>
            <input type="checkbox" value="Breastfeeding" /> Breastfeeding
          </label>
          <label>
            <input type="checkbox" value="HIV/Aids" /> HIV/Aids
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
