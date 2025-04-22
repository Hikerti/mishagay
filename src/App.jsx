import './App.css'
import {Route, Routes} from "react-router-dom";
import Login from "../pages/Login.jsx";
import Registration from "../pages/Registration.jsx";
import Layout from "../pages/Layout.jsx";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Route>
        </Routes>
    </>
  )
}

export default App
