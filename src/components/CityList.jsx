import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import Message from "./Message";

function CityList({ cities, isLoading }) {
  
  if (isLoading) {
    return <Spinner />;
  }

  if(!cities.length){
    return <Message message={"Add your first city by clickig a city on the map"}/>
  } 

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      cityName: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      emoji: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      notes: PropTypes.string.isRequired,
      position: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
      }),
      id: PropTypes.number.isRequired,
    })
  ),
  isLoading: PropTypes.bool.isRequired,
};
