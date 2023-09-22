import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"


function Login() {
   const [name,setEmail] = useState()
   const [password,setPassword] = useState()
   const navigate = useNavigate()

   const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login', {name,password})
    .then(result => {
        console.log(result)
        console.log(name,password)
        if(result.data === "Success"){
            navigate(`/profile/${name}`)
        }
    })
    .catch(err => console.log(err))
   }

  return (
    <div className=" bg-[#7f7e90] text-xl text-gray-200 flex justify-center items-center h-screen">
        <div className="bg-[#4d424d] p-10 shadow-inner border-2 border-transparent">
            <div className="flex flex-col mb-10">
                <h2 className="text-center text-3xl font-bold text-white ">Accedi ora</h2>
                <p className="text-center">e inizia a giocare a scacchi!</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-10 items-center justify-center mt-3">
                <div className="flex gap-4 items-center justify-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>

                    </div>
                    <input type="name" placeholder='Enter Name' className='text-black px-3 py-2 hover:border-transparent ' autoComplete='Off' name='email' onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="flex gap-4 items-center justify-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>

                    </div>
                    <input type="password" placeholder='Enter Password' className='text-black px-3 py-2 hover:border-transparent ' autoComplete='Off' name='email' onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="bg-green-900 px-9 py-3 hover:bg-green-700 text-2xl">Login</button>
                
                <div className="flex gap-5 items-center justify-center">
                    <p>Need an account?</p>
                    <Link to='/register' className="bg-green-900 px-9 py-3 hover:bg-green-700  text-lg">
                        Sign Up
                    </Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login

