import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";
// import Login from "./Login";
// import Register from "./Register";
// import Sidebar from "./components/Sidebar";
// import Profile from "./components/Profile";
// import LocationHistory from "./components/LocationHistory";
// import MapLocation from "./components/MapLocation";

const Login = lazy(() => import("./Login"))
const Register = lazy(() => import("./Register"))
const Sidebar = lazy(() => import("./components/Sidebar"))
const Profile = lazy(() => import("./components/Profile"))
const LocationHistory = lazy(() => import("./components/LocationHistory"))
const MapLocation = lazy(() => import("./components/MapLocation"))


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
        <Route path="/" element={
        <Suspense fallback={<div>..loading...</div>}>
          <Login setToken={setToken}/>
        </Suspense>} />

        <Route path="/registration" element={
        <Suspense fallback={<div>..loading...</div>}>
          <Register />
        </Suspense>} />

        <Route
          element={
            <div className="flex font-mono">
              <Sidebar />
              <Outlet />
            </div>
          }
        >
          <Route path="/profile" element={
          <Suspense fallback={<div>..loading...</div>}>
            <Profile />
          </Suspense>} />

          <Route path="/location-history" element={
          <Suspense fallback={<div>..loading...</div>}>
            <LocationHistory />
          </Suspense>} />
          
          {token ? <Route path="/map-location" element={
          <Suspense fallback={<div>..loading...</div>}>
            <MapLocation token={token} />
          </Suspense>} /> : ""}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
