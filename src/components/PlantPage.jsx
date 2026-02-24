import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data));
  }, []);

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  const displayedPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
  <main>
    <NewPlantForm onAddPlant={handleAddPlant} />
    <Search searchTerm={searchTerm} onSetSearch={setSearchTerm} />
    {/* Ensure you are passing the 'displayedPlants' variable here! */}
    <ul className="cards">
        <PlantList plants={displayedPlants} />
    </ul>
  </main>
  );
}

export default PlantPage;