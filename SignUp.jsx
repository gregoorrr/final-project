import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from 'axios'

function SignUp() {
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate()
  

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name,email,password})
        .then(res => {
            console.log(res.data)
            console.log(name,email,password)
            navigate(`/home/${name}`)
        })
        .catch((err)=> console.log(err))
    }
  return (
    <div className=" bg-[#7f7e90] text-xl text-gray-200 flex justify-center items-center h-screen">
        <div className="bg-[#4d424d] p-10 shadow-inner border-2 border-transparent">
            <div className="flex flex-col mb-10">
                <h2 className="text-center text-3xl font-bold text-white ">Iscriviti ora</h2>
                <p className="text-center">e inizia a giocare a scacchi!</p>
            </div>
            <form onSubmit={submitHandler} className="flex flex-col gap-10 items-center justify-center mt-3">
                <div className="flex gap-4 items-center justify-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>

                    </div>
                    <input type="text" placeholder='Enter Name' autoComplete='Off' name='email' className='text-black px-3 py-2' onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="flex gap-4 items-center justify-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>

                    </div>
                    <input type="email" placeholder='Enter E-mail' className='text-black px-3 py-2' autoComplete='Off' name='email' onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="flex gap-4 items-center justify-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>

                    </div>
                    <input type="password" placeholder='Enter Password' className='text-black px-3 py-2 hover:border-transparent ' autoComplete='Off' name='email' onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="bg-green-900 px-9 py-3 hover:bg-green-700 text-2xl">Register</button>
                <div className="flex gap-5 items-center justify-center">
                    <p>Already Registered?</p>
                    <Link to='/login' className="bg-green-900 px-9 py-3 hover:bg-green-700  text-lg">
                        Login
                    </Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp
