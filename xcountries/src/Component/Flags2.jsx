import React, { useEffect, useState } from "react";
import Card from "./Cardholder";
import axios from "axios";
import "./Flag.css";

const Flag = () => {
  const [flags, setFlags] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const endpoint = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    const fetchFlag = async () => {
      try {
        const response = await axios.get(endpoint);
        setFlags(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchFlag();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };


  let filteredFlags = flags.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flag-container">
      <input
        type="text"
        placeholder="Search countries..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {filteredFlags.length === 0 && (
        <div>No results found.</div>
      )}
      <div className="card-container countryCard">
        {filteredFlags.map((country) => (
          <Card key={country.cca3} country={country} className="countryCard"/>
        ))}
      </div>
    </div>
  );
};

export default Flag;
