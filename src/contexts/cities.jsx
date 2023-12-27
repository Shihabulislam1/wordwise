import { createContext, useState, useEffect, useContext } from "react";
import propTypes from "prop-types";

const CItiesContext = createContext();

const API_URL = "http://localhost:3001";

function Citiesprovider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${API_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        console.log("error");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  async function getCity(id) {
      try {
        setIsLoading(true);
        const res = await fetch(`${API_URL}/cities/${id}`);
        const data = await res.json();
        setCurrentCity(data);
      } catch {
        console.log("error");
      } finally {
        setIsLoading(false);
      }
    }

  return (
    <CItiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
      }}
    >
      {children}
    </CItiesContext.Provider>
  );
}

function useCitiesContext() {
  const city = useContext(CItiesContext);
  if (!city) {
    throw new Error("useCities must be used within a CitiesProvider");
  }
  return city;
}

export { Citiesprovider, useCitiesContext };

// props validation of children
Citiesprovider.propTypes = {
  children: propTypes.node.isRequired,
};
