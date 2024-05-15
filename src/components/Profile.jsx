import React, { useState } from 'react'
import { supabase } from "../config/supabaseClient"

const Profile = () => {

  const [formData, setFormData] = useState({
     firstName:'', lastName:'', email:'', password:''
  })

  const handleProfileChange = (event) => {
    setFormData((prevFormData) => {
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    })
  }

  //Update user data
  const handleProfileSubmit = async (e) => {
      e.preventDefault()

      try {
        const { data, error } = await supabase.auth.updateUser({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              first_name: formData.firstName,
              last_name: formData.lastName,
            }
          }
        })
        if (error) throw error
        console.log(data)
        alert('Check your email for confirmation link')

      } catch (error) {
        alert(error)
      }
  }
  

  return (
    <div className="container mx-auto my-10 p-8 bg-white shadow-lg rounded-lg">
    <div>
          <h1 className="text-3xl font-bold mb-6">Edit Profile</h1>

          <form onSubmit={handleProfileSubmit}>
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-gray-800 font-semibold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleProfileChange}
                className="w-full border px-3 py-2 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-gray-800 font-semibold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleProfileChange}
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
                value={formData.email}
                onChange={handleProfileChange}
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
                value={formData.password}
                onChange={handleProfileChange}
                className="w-full border px-3 py-2 rounded-md"
              />
            </div>

            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="bg-primary shadow-sm shadow-green-700 text-black py-2 px-4 rounded-md hover:bg-green-700 transition duration-300 border-2 border-gray-300"
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