import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  // 1. Initialize state for the form inputs
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  });

  // 2. Update state as the user types
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // 3. Handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    // The backend expects price to be a number, not a string
    const newPlantData = {
      ...formData,
      price: parseFloat(formData.price),
    };

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlantData),
    })
      .then((r) => r.json())
      .then((newPlant) => {
        // Update the parent's state
        onAddPlant(newPlant);
        // Reset the form fields
        setFormData({ name: "", image: "", price: "" });
      });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          value={formData.name}
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={formData.image}
          onChange={handleChange}
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          value={formData.price}
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;