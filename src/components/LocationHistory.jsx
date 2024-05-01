import React from 'react'

const LocationHistory = () => {
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
                <tr>
                    <td className="border px-4 py-2"></td>
                    <td className="border px-4 py-2"></td>
                    <td className="border px-4 py-2"></td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>

  )
}

export default LocationHistory