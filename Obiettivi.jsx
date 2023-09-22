import { Link } from "react-router-dom"
function Obiettivi() {
  return (
    <>
      
      <div className="bg-stone-900 text-white flex flex-col items-center justify-center text-2xl gap-12 p-8">
        <h1 className="text-5xl"> Obiettivi Chess </h1>
        <div className="flex gap-5">
          <strong>1: </strong>
          <div>Conquista del Titolo di Campione: Premia i giocatori che raggiungono un punteggio Elo specifico o raggiungono una posizione di alto livello nel ranking con il titolo di Campione..</div>
        </div>
  
         <div className="flex gap -5">
          <strong>2:</strong>
           <div>
           Master delle Aperture: Gli obiettivi possono includere l'apprendimento e il padronanza di un numero specifico di aperture di scacchi, con ricompense per coloro che raggiungono questo obiettivo.
           </div>
         </div>
          <div className="flex gap-5">
            <strong>3: </strong>
            <div>Vittorie Consecutive: Offri premi ai giocatori che riescono a ottenere una serie di vittorie consecutive senza perdere.</div>
          </div>
  
         <div className="flex gap-5"> 
          <strong>4: </strong>
           <div>
             
      
              Mestre delle Tattiche: Implementa una serie di puzzle tattici che i giocatori devono risolvere. Quando completano un certo numero di puzzle, possono guadagnare il titolo di Mastro delle Tattiche.
            </div>
         </div>
          <div className="flex gap-5">
            <strong>5:</strong>
            <div>
              
            Tormenta il Re Avversario: Premia i giocatori che riescono a mettere sotto scacco il re avversario entro un certo numero di mosse, magari in una partita blitz.
    
            </div>
          </div>
        
  
          <div className="flex gap-5">
            <strong>6:</strong>
            <div>
            Sfida i Maestri: Crea obiettivi che coinvolgono la sfida e la sconfitta di giocatori di alto livello o di maestri degli scacchi. Quando un giocatore riesce a sconfiggerne uno, può guadagnare un titolo speciale.
              
            </div>
          </div>
  
          <div className="flex gap-5">
            <strong>7:</strong>
            <div>
            Scacco Matto Rapido: Premia i giocatori che riescono a ottenere uno scacco matto entro un certo numero di mosse nelle partite rapidi o blitz.
    
            </div>
          </div>
  
          <div className="flex gap-5">
            <strong>8:</strong>
            <div>
            Maestro delle Partite a Tempo: Imposta obiettivi basati sul tempo, come il completamento di un certo numero di partite in un giorno o il raggiungimento di una serie di vittorie in una partita blitz.
              </div>
          </div>
          <div className="flex gap-5">
            <strong>9:</strong>
            <div>
                Promozione del Pedone: Offri una ricompensa speciale per i giocatori che riescono a far avanzare un pedone fino all/ottava fila e a promuoverlo con successo.
                </div>
          </div>
          <div className="flex gap-5">
            <strong>10:</strong>
                <div>
                Partecipazione ai Tornei: Incoraggia i giocatori a partecipare ai tornei online e premia coloro che ottengono buone prestazioni o vincono tornei specifici.
                </div>
          </div>
          <Link to='/' className="text-5xl bg-red-600 rounded-xl p-3">Ritorna Alla Home</Link>
      </div>
    </>
  )
}

export default Obiettivi