import React from 'react'

const Profile = () => {
  return (
    <div className="container mx-auto my-10 p-8 bg-white shadow-lg rounded-lg">
    <div>
          <h1 className="text-3xl font-bold mb-6">Edit Profile</h1>

          <form>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-800 font-semibold mb-2"
              >
                User Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
  
                className="w-full border px-3 py-2 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-800 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"

                className="w-full border px-3 py-2 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-800 font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border px-3 py-2 rounded-md"
              />
            </div>

            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="bg-primary text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
        </div>
  )
}

export default Profile