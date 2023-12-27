import { BrowserRouter, Route, Routes } from "react-router-dom";
// import navigate component from react router dom
import { Navigate } from "react-router-dom";


import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import Form from "./components/Form";
import CityList from "./components/CityList";
import { Citiesprovider } from "./contexts/cities";
import CountryList from "./components/CountryList";
import City from "./components/City";


function App() {
  return (
    <Citiesprovider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate to="cities" replace/>}/>
            <Route index element={<CityList />} />
            <Route path="form" element={<Form />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Citiesprovider>
  );
}

export default App;
