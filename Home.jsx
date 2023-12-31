import { Link, useParams  } from "react-router-dom"
import { useEffect } from "react";
import axios from "axios";
import './Home.css'

function Home() {
    
    const { username } = useParams()

    useEffect(() => {
        const fetchData = async () =>{
        try {
        await axios.get(`http://localhost:3001/home/${username}`);
        
        } catch (error) {
          console.error(error);
        }
        
      }
    
      fetchData()
      }, [username]);



  return (
    <>
        <main className="bg-stone-800 flex flex-col items-between  gap-14 text-white  h-fit p-14">
            <h1 className="text-6xl font-bold text-center">Chess</h1>
           <div className="flex justify-evenly">
                <nav className="flex flex-col gap-10 font-semibold text-2xl w-[150px] justify-center mt-10">
                        <Link to='/obiettivi' className=" bg-stone-700 rounded-md p-4">Obiettivi</Link>
                        <Link to='/rules' className=" bg-stone-700 rounded-md p-4">Regole</Link>
                
                        <div className="flex flex-col gap-6">
                            <Link to='/' className="underline bg-stone-700 rounded-md p-4">Registrati!</Link>
                            <Link to='/login' className="underline bg-green-800 rounded-md p-4">Accedi!</Link>
                            <Link to={`/profile/${username}`} className=" bg-green-800 rounded-md p-4">Profilo</Link>

                        </div>
                        
                    </nav>

                   
                
                <section className="flex justify-center items-center h-[600px] ">
                <div className="bg-[url(https://www.multimediaplayer.it/wp-content/uploads/scacchi-online-chess.jpg.webp)]">
                    
                </div>
                    <div className="flex flex-col gap-12  justify-center items-center bg-[#4d424d] p-10">
                            <h1 className="text-4xl text-left">
                                Trova una partita
                            </h1>
                        
    
                        <Link to={`/game/${username}` }className="bg-green-800 hover:bg-green-600 px-7 py-4 rounded-lg">
                            <p  className="text-left text-2xl">VS Online</p>
                            <p className="text-left text-xl">
                                Gioca vs avversari del tuo livello
                            </p>
                        </Link>
                        <Link to={`/game/${username}` } className="bg-green-800 hover:bg-green-600 px-14 py-4 rounded-lg">
                            <p  className="text-left text-2xl">VS Computer</p>
                            <p className="text-left text-xl">
                                Gioca contro il computer
                            </p>
                        </Link>
                        <Link to={`/game/${username}` } className="bg-green-800 hover:bg-green-600 px-20 py-4 rounded-lg">
                            <p  className="text-left text-2xl">VS Amici</p>
                            <p className="text-left text-xl">
                                Gioca con un amico
                            </p>
                        </Link>
                        <Link to={`/game/${username}` } className="bg-green-800 hover:bg-green-600 px-20 py-4 rounded-lg">
                            <p  className="text-left text-2xl">Tornei</p>
                            <p className="text-left text-xl">
                                Iscriviti ad un torneo
                            </p>
                        </Link>
    
                    </div>
                </section>
           </div>
        </main>
        
    </>
  )
}

export default Home
