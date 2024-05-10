import { useState, useEffect } from "react"
import { supabase } from "../config/supabaseClient"

const LocationHistory = () => {

    const [locationHistory, setLocationHistory] = useState([])

    useEffect(() => {
        // Fetch location history data from Supabase when the component mounts
        fetchLocationHistory();
      }, []);

    const fetchLocationHistory = async () => {
        try {
            // Fetch location history data from the 'location-history' table
            let { data, error } = await supabase
            .from('location-history')
            .select('*')

            if (error) throw error

            // Set the fetched location history data in state
            setLocationHistory(data)

        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div className="container mx-auto my-10 p-8 bg-white shadow-lg rounded-lg">
        <div>
            <h1 className="text-3xl font-bold mb-6">Location History</h1>
            <table className="w-full border">
            <thead>
                <tr className="bg-gray-200">
                <th className="border px-4 py-2">Latitude</th>
                <th className="border px-4 py-2">Longitude</th>
                <th className="border px-4 py-2">Date & Time</th>
                </tr>
            </thead>
            <tbody>
                {locationHistory.map((location, index) => (
                <tr key={index}>
                    <td className="border px-4 py-2">{location.lat}</td>
                    <td className="border px-4 py-2">{location.lng}</td>
                    <td className="border px-4 py-2">{location.created_at}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    </div>

  )
}

export default LocationHistory