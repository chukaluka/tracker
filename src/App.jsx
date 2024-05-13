import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import LocationHistory from "./LocationHistory";
import MapLocation from "./MapLocation";
import { useEffect, useState } from "react";


export default function App() {
  const [token, setToken] =  useState(false)

  if(token){
    sessionStorage.setItem('token',JSON.stringify(token))
  }
  useEffect(() => {
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
  }, [])
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setToken={setToken}/>} />
        <Route path="/registration" element={<Register />} />
        <Route
          element={
            <div className="flex font-mono">
              <Sidebar />
              <Outlet />
            </div>
          }
        >
          <Route path="/profile" element={<Profile />} />
          <Route path="/location-history" element={<LocationHistory />} />
          {token ? <Route path="/map-location" element={<MapLocation token={token} />} /> : ""}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
