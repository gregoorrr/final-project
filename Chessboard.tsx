import Tile from "./Tile";
import { Link } from "react-router-dom";
import  React, { useRef }  from "react";
import {useState } from "react";
import Referee from "../referee/referee";
import { verticalSquares,horizontalSquares,initialBoardState,pieceType,teamType,Piece,Position,gridSize,samePosition } from "../Constants";

function Chessboard() {
    

    const [grabPosition,setGrabPosition] = useState<Position>({x:-1, y: -1})
    const [grabbedPiece,setGrabbedPiece] = useState<HTMLElement | null>(null)
    const [pieces,setPieces] = useState<Piece[]>(initialBoardState)
    const chessBoardRef = useRef<HTMLDivElement>(null)
    const referee = new Referee()


function grabPiece(e : React.MouseEvent<HTMLDivElement,MouseEvent>){
    const chessboard = chessBoardRef.current

    const element = e.target as HTMLElement
    if(element.classList.contains("chess-piece") && chessboard){
        const grabX = Math.floor((e.clientX - chessboard.offsetLeft ) / gridSize)
        const grabY = Math.abs(Math.floor((e.clientY - chessboard.offsetTop - 700) / gridSize))
        setGrabPosition({x:grabX, y:grabY})

        console.log(e);
        const x = e.clientX - gridSize/2
        const y = e.clientY - gridSize/2
        element.style.position = "absolute"
        element.style.left = `${x}px`
        element.style.top = `${y}px`

        setGrabbedPiece(element)
    }

}

function movePiece(e: React.MouseEvent){
    const chessboard = chessBoardRef.current
    if(grabbedPiece && chessboard){       
    const minX = (chessboard.offsetLeft -27)
    const minY = (chessboard.offsetTop - 10)
    const maxX = chessboard.offsetLeft + chessboard.clientWidth -70
    const maxY = chessboard.offsetTop + chessboard.clientHeight - 65
    const x = e.clientX - 50
    const y = e.clientY - 50
    grabbedPiece.style.position = "absolute"
    //grabbedPiece.style.left = `${x}px`
    //grabbedPiece.style.top = `${y}px`
       ;

    if(x < minX){
        grabbedPiece.style.left = `${minX}px`
    }
    else if(x > maxX) {
        grabbedPiece.style.left = `${maxX}px`
    }
    else{
        grabbedPiece.style.left = `${x}px`
    }

    if(y < minY){
        grabbedPiece.style.top = `${minY}px`
    }
    else if(y > maxY) {
        grabbedPiece.style.top = `${maxY}px`
    }
    else{
        grabbedPiece.style.top =   `${y}px`
    }
    }
}

function dropPiece(e: React.MouseEvent) {
    const chessboard = chessBoardRef.current

    if(grabbedPiece && chessboard){
        const x = Math.floor((e.clientX - chessboard.offsetLeft ) / gridSize)
        const y = Math.abs(Math.floor((e.clientY - chessboard.offsetTop - 700) / gridSize))
        
        const currentPiece = pieces.find(p => samePosition(p.position,grabPosition))

        if(currentPiece){
            const validMove = referee.isValidMove(grabPosition,{x,y},currentPiece.type ,currentPiece.team,pieces)
            if(validMove){
            const updatedPieces = pieces.reduce((results,piece) =>{
                if(samePosition(piece.position,grabPosition)){
                    piece.position.x = x
                    piece.position.y = y
                    results.push(piece)
                }else if(!(samePosition(piece.position,{x,y}))){
                    results.push(piece)
                }

                return results
            },[] as Piece[])

            setPieces(updatedPieces)
            
           

        }else{
            grabbedPiece.style.position = 'relative'
            grabbedPiece.style.removeProperty('top')
            grabbedPiece.style.removeProperty('left')
        }
        setGrabbedPiece(null)
            }
        }
    }
       

    let board = []
    for(let j=verticalSquares.length-1; j >= 0; j--){
        for(let i = 0; i < horizontalSquares.length; i++) {
            const piece = pieces.find(p => samePosition(p.position, {x:i, y:j}))
            const number = i + j + 2
            let image = piece ? piece.image : undefined

            board.push(<Tile key={`${j},${i}`} image={image} number={number} />)                                           

        }
    }
  return (
    <>
        <div className='flex justify-center items-center bg-[#202020] h-screen'>
            <div className=' w-[800px] h-[800px] flex flex-wrap'
            onMouseMove={(e) => movePiece(e)}
            onMouseDown={e => grabPiece(e)}
            onMouseUp={(e) => dropPiece(e)}
            ref={chessBoardRef}
            >
            {board} 
            </div>
            <Link to='/' className="text-white text-2xl font-bold ml-20">Esci dalla partita</Link>
        </div>
    
        
    </>
  )
  } 
    

export default Chessboard