import { Link } from "react-router-dom"
function Rules() {
  return (
    <>
      
      <div className="bg-stone-900 text-white flex flex-col items-center justify-center text-2xl gap-12 p-8">
        <h1 className="text-5xl"> REGOLE </h1>
        <div className="flex gap-5">
          <strong>1 : </strong>
          <div>Scacchiera: La scacchiera è una griglia 8x8 di caselle, alternando colori bianco e nero.</div>
        </div>
  
         <div className="flex gap -5">
          <strong>2 :</strong>
           <div>
              Pedine: Ogni giocatore inizia con 16 pedine:
      
              1 re
              1 regina
              2 torri
              2 alfieri
              2 cavalli
              8 pedoni
           </div>
         </div>
          <div className="flex gap-5">
            <strong>3: </strong>
            <div>Obiettivo: L/obiettivo del gioco è mettere il re dell/avversario sotto scacco matto, il che significa che il re è minacciato e non può muoversi su una casella sicura.</div>
          </div>
  
         <div className="flex gap-5"> 
          <strong>4: </strong>
           <div>
              Movimenti delle Pedine:
      
              Re: Si muove di una casella in qualsiasi direzione.
              Regina: Si muove in qualsiasi direzione, sia orizzontale che verticale o diagonale.
              Torre: Si muove in orizzontale o verticale, ma non può saltare altre pedine.
              Alfiere: Si muove diagonale, ma non può saltare altre pedine.
              Cavallo: Si muove in un movimento a forma di L, due caselle in una direzione e quindi una casella in una direzione perpendicolare. Può saltare altre pedine.
              Pedone: Si muove in avanti di una casella, ma cattura le pedine avversarie diagonalmente. Alla sua prima mossa, può avanzare di due caselle. Può anche promuovere a qualsiasi altra pedina quando raggiunge l/ultima fila.
            </div>
         </div>
          <div className="flex gap-5">
            <strong>5:</strong>
            <div>
              
              Arrocco: Il re e una delle torri possono fare una mossa speciale chiamata  se non hanno mosse precedenti e non sono sotto scacco. Il re si muove di due caselle verso la torre, e la torre si sposta sulla casella sopra o sotto il re.
    
            </div>
          </div>
        
  
          <div className="flex gap-5">
            <strong>6:</strong>
            <div>
              En passant: Un pedone può catturare un pedone avversario che si è spostato di due caselle dalla sua posizione iniziale. Questa cattura deve essere effettuata immediatamente dopo il movimento del pedone avversario.
              
            </div>
          </div>
  
          <div className="flex gap-5">
            <strong>7:</strong>
            <div>
              Promozione del pedone: Quando un pedone raggiunge l/ultima fila della scacchiera avversaria, può essere promosso a qualsiasi altra pedina (ad eccezione del re) scelta dal giocatore.
    
            </div>
          </div>
  
          <div className="flex gap-5">
            <strong>8:</strong>
            <div>
              Patta: Il gioco può finire in pareggio per diverse ragioni, tra cui stallo (il giocatore ha mosse legali ma non può muovere il re senza metterlo sotto scacco), regola delle tre ripetizioni, o mancanza di materiale sufficiente per ottenere uno scacco matto.
              </div>
          </div>
          <Link to='/' className="text-5xl bg-red-600 rounded-xl p-3">Ritorna Alla Home</Link>
      </div>
    </>
  )
}

export default Rules