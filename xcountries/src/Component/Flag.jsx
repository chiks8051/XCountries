import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Flag.css";

const Flag = () => {
  const [flags, setFlags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const endpoint = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    const fetchFlags = async () => {
      try {
        const response = await axios.get(endpoint);
        setFlags(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchFlags();
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
        className="search-input"
      />
      {loading && <div>Loading...</div>}
      {!loading && filteredFlags.length === 0 && (
        <div>No results found.</div>
      )}
      <div className="card-container">
        {filteredFlags.map((country) => (
          <div key={country.cca3} className="countryCard">
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              className="flag-img"
            />
            <div className="country-name">{country.name.common}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flag;
