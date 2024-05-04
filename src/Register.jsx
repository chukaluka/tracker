import { useState } from "react";
import { Link } from "react-router-dom";
import location from "../images/location.jpg";
import { supabase } from "./config/supabaseClient"


const Register = () => {

  const [formData, setFormData] = useState({
    firstname:'', lastname:'', email:'', password:''
  })

  console.log(formData)

  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    })
  }

    //Auth Signup function
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              first_name: formData.firstname,
              last_name: formData.lastname,
            }
          }
        }
      )
      if (error) throw error
      alert('Check your email for verification link')

    } catch (error) {
      alert(error)
    }
  }

  return (
     /*   Background image and header code */
     <div className="min-h-screen py-40 flex items-center justify-center bg-gradient-to-r from-blue-900">
     <div className="container mx-auto">
       <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-xl overflow-hidden">
       <div className={`sm:w-full lg:w-1/2 flex flex-col items-center justify-center p-12`} style={{ backgroundImage: `url(${location})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: 'xl' }}>
           <div className="bg-black bg-opacity-50 p-10 text-white text-center">
             <h1 className="text-4xl">
               Welcome <br /> to
             </h1>
             <p className="text-3xl whitespace-nowrap max-[425px]:whitespace-normal ">
               Location Tracker App
             </p>
           </div>
         </div>

         {/* registration form code */}
         <div className="w-full lg:w-1/2 py-16 px-12">
           <h2 className="text-4xl mb-4">Register</h2>
           <p className="mb-4 text-sm">
             Create an account. It's free and only take a minute
           </p>
           <form onSubmit={handleSubmit}>
             <div className="grid grid-cols-2 gap-5 text-sm-bold">
               <input
                 type="text"
                 name="firstName"
                 placeholder="Firstname"
                 onChange={handleChange}
                 className="border border-gray-400 p-2 rounded-md"
                 required
               />
               <input
                 type="text"
                 name="lastName"
                 placeholder="Lastname"
                 onChange={handleChange}
                 className="border border-gray-400 p-2 rounded-md"
                 required
               />
             </div>
             <div className="mt-5 text-sm-bold">
               <input
                 type="email"
                 name="email"
                 placeholder="Email Address"
                 onChange={handleChange}
                 className="border border-gray-400 p-2 w-full rounded-md"
                 required
               />
             </div>
             <div className="mt-5 text-sm-bold">
               <input
                 type="password"
                 name="password"
                 placeholder="Password"
                 onChange={handleChange}
                 className="border border-gray-400 p-2 w-full rounded-md"
                 required
               />
             </div>

             <div className="mt-5 text-sm">
               <button
                 type="submit"
                 className="w-full bg-blue-500 py-3 text-center text-white rounded-md hover:bg-blue-700 transition duration-300"
               >
                 Register Now
               </button>
             </div>

             <div className="mt-5 text-center text-sm-bold">
               <span>
                 Already have an account?
                 <Link to="/" className="text-blue-900 font-semibold ml-1 hover:text-blue-700">
                   Login now
                 </Link>
               </span>
             </div>
           </form>
         </div>
       </div>
     </div>
   </div>
  )
}

export default Register