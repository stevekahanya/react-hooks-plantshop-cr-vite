import React, { useState } from "react";

function handleSubmit(e) {
    e.preventDefault();

    const newPlantData = {
      name: formData.name,
      image: formData.image,
      price: parseFloat(formData.price), // <--- Ensure this is a number!
    };

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlantData),
    })

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
      name: formData.name,
      image: formData.image,
      price: parseFloat(formData.price), // <--- Use parseFloat or Number() here
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
        onAddPlant(newPlant);
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