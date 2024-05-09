import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import useGeolocation from "./useGeolocation";
import { Icon } from "leaflet";
import { TbWorld } from "react-icons/tb";
import { VscSignOut } from "react-icons/vsc";
import { supabase } from "../config/supabaseClient"

const MapLocation = ( {token} ) => {

    let navigate = useNavigate()

    const location = useGeolocation();
    const mapRef = useRef(null); // Define a reference for the MapContainer

    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
        iconSize: [38, 38], //size of the icon
      });

      
  const showMyLocation = async () => {
    if (location.loaded && !location.error) {
      const { lat, lng } = location.coordinates;
      mapRef.current.flyTo([lat, lng], 13, { animate: true });


      try {
       // Insert the location data into the 'location-history' table
        const { data, error } = await supabase
        .from('location-history')
        .insert([{ lat, lng }]);
        
        if (error) throw error
        console.log(lat, lng)
        
      } catch (error) {
        console.error('Error inserting location data:', error.message);
      }
    }}

    //Signout function
    const handleSignout = () => {
      sessionStorage.removeItem('token')
      navigate('/')
    }

  return (
    <div className="container mx-auto my-3 p-1 shadow-lg rounded-lg">
    <div className="flex justify-between">
      <button
        onClick={showMyLocation}
        className="flex shadow-sm shadow-red-700 bg-gradient-to-r text-black hover:from-red-600 hover:to-purple-700 hover:text-white font-bold h-8 rounded-full justify-center items-center transition duration-300 p-5 m-3 ml-12 border-2 border-gray-300"
      >
        Locate Me <TbWorld className="ml-1 mt-[-5px]" />
      </button>
      <button
        onClick={handleSignout}
        className="flex shadow-sm shadow-red-700 items-center justify-center hover:text-white mr-11 font-bold transition duration-300 border-2 border-gray-300 hover:bg-red-600 h-8 rounded-full p-5 m-3"
      >
        <VscSignOut className="mr-1" size={20} />
        Sign Out
      </button>
    </div>
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {location.loaded && !location.error && (
        <Marker
          position={[location.coordinates.lat, location.coordinates.lng]}
          icon={customIcon}
        ></Marker>
      )}
    </MapContainer>
  </div>
  )
}

export default MapLocation

