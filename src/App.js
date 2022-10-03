import CarDetail from "./pages/CarDetail/CarDetail"
import Home from "./pages/Home/Home"
import SearchCar from "./pages/SearchCar/SearchCar"
import { Routes, Route } from "react-router-dom";

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/carimobil" element={<SearchCar/>}/>
      <Route path="/detail/:id" element={<CarDetail/>}/>
      {/*
        <Home/>
        <SearchCar/>
        <CarDetail/>
      */}
    </Routes>
  )
}

export default App;