import React from 'react'
import './Tile.css'

interface Props{
    image: string
    number: number
    
}

function Tile({number,image}: Props) {
    if(number % 2 === 0){
        return  (
       <>
            <div  className=' black-tile'>
               {image && <div style={{backgroundImage: `url(${image})`}} className=' chess-piece hover:cursor-grab active:cursor-grabbing'>
                    
                </div>}
            </div>
       </>
        )
    }else {
        return (
        <>
           <div  className='white-tile'>
               {image && <div  style={{backgroundImage: `url(${image})`}} className='chess-piece hover:cursor-grab active:cursor-grabbing'>
                    
                </div>}
           </div>
        </>
        )
    }

    
    
}

export default Tile