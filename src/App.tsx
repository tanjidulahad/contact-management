import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Contact from "./components/Pages/Contact/Contact"
import Map from "./components/Pages/Map/Map"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Contact/>}/>
        <Route path="map" element={<Map/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
