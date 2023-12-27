import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const navigate=useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  function handleSearch(e) {
    e.preventDefault();
    setSearchParams({ lat: lat, lng: lng });
  }
  return (
    <div className={styles.mapContainer}
     onClick={()=>navigate('form')}>
      <h1>Map</h1>
      <h3>lat: {lat}</h3>
      <h3 onClick={handleSearch}>lng: {lng}</h3>
    </div>
  );
}

export default Map;
