import axios from "axios"
import { useState } from "react";
import { useParams,useNavigate } from "react-router";
import { Link } from "react-router-dom";

function UpdatedProfile() {
    const [updatedProfile,setUpdatedProfile] = useState({
        name:'',
        email:'',
        password:''

    })
    const { username} = useParams()
    const navigate = useNavigate()
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProfile((prevProfile) => ({
          ...prevProfile,
          [name]: value
        }));
      };
    
      const handleFormData = async (e) =>{
        e.preventDefault()
        try{
          const responsePost = await axios.patch(`http://localhost:3001/updatedProfile/${username}`, updatedProfile) 
          if( responsePost.status === 200){
            console.log('profilo aggiornato con successo',responsePost.data)
            navigate('/login')
          }else{
            console.log('errore durante l/aggiornamento del profilo')
          }
          
        }catch(error){
          console.error('Errore durante la richiesta post',error)
        }
      }
      console.log(updatedProfile)
    return (
        <div className='w-full   bg-stone-900'>
            <div>
            
              <form onSubmit={handleFormData} className=' p-32 text-2xl text-white gap-10 border border-white flex flex-col'>
                <h1 className='text-4xl text-center'>Profile</h1>
                
                        <div >
                          <div className='flex flex-col gap-10 '>
                          <div className='flex justify-center items-center gap-6'>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                  </svg>
                              <div className='border border-white p-3 w-full'>
                                
                                <input type="text" name='id' value={updatedProfile._id} onChange={handleInputChange} className='text-white bg-stone-900'/>
                              </div>
                           </div>
                           <div className='flex justify-center items-center gap-6'>
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                              <div className='border border-white p-3 w-full'>
                              <input type="text" name='name' value={updatedProfile.name} onChange={handleInputChange} className='text-white bg-stone-900'/>
                              </div>
                           </div>
                           <div className='flex justify-center items-center  gap-6'>
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                              <div className='border border-white p-3 w-full'>
                                
                              <input type="text" name='email' value={updatedProfile.email} onChange={handleInputChange} className='text-white bg-stone-900'/>
                              </div>
                           </div>
                              
                            <div className='flex justify-center items-center gap-6'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                              </svg>
                            
                              <div className='border border-white p-3 w-full'>
                                
                              <input type="text" name='password' value={updatedProfile.password} onChange={handleInputChange} className='text-white bg-stone-900'/>
                              </div>
                           </div>
                           
                          </div>
                        </div>
                        <button type='submit' onClick={handleFormData} className="text-center bg-red-600 rounded-xl p-1 font-bold">Salva</button>
                    
                
                <div className='flex justify-between'>
                  <Link to='/' className='flex justify-center items-center bg-red-600 w-12 rounded-xl p-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                  </Link>
                  <Link to='/register' className='flex justify-center items-center bg-red-600 w-12 rounded-xl p-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                    </svg>
        
                  </Link>
                </div>
              </form>  
              
              
            </div>
        
        </div>
      )
  
}

export default UpdatedProfile