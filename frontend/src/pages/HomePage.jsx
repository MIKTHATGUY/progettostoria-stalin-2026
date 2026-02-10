import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle, Lock, Eye } from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();
  const [showWarning, setShowWarning] = useState(true);
  const [typing, setTyping] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTyping(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setEntered(true);
    setTimeout(() => navigate("/pravda"), 800);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1582136610579-2747d46e066c?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%)',
        }}
      />
      
      {/* Content */}
      <div className={`relative z-10 min-h-screen flex flex-col items-center justify-center px-4 transition-all duration-700 ${entered ? 'opacity-0 scale-95' : 'opacity-100'}`}>
        
        {/* Top Secret Stamp */}
        <div className="absolute top-8 right-8 stamp text-lg hidden sm:block" data-testid="top-secret-stamp">
          TOP SECRET
        </div>

        {/* Main Title */}
        <div className="text-center mb-8">
          <p className="font-body text-[#A0A0A0] text-sm tracking-[0.3em] mb-4">
            DOSSIER CLASSIFICATO NKVD
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl font-bold text-[#E5E5E5] tracking-tight mb-4" data-testid="main-title">
            ARCHIVIO 1937
          </h1>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-[#D22B2B] tracking-wider" data-testid="subtitle">
            LA FABBRICA DEL CONSENSO
          </h2>
          <p className="font-body text-[#A0A0A0] mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Viaggio nel cuore oscuro del Totalitarismo Sovietico.
          </p>
        </div>

        {/* Warning Box */}
        {showWarning && (
          <div className="max-w-2xl mx-auto bg-[#121212] border-2 border-[#D22B2B] p-6 sm:p-8 mb-8" data-testid="warning-box">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-[#D22B2B]" />
              <span className="font-heading text-[#D22B2B] text-lg tracking-wider">
                ATTENZIONE: ACCESSO RISERVATO (Livello NKVD)
              </span>
            </div>
            
            <div className={`font-body text-[#E5E5E5] leading-relaxed space-y-4 ${typing ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
              <p>
                Compagno, quello che stai per leggere non esiste sui libri ufficiali. 
                Siamo entrati nel cuore della macchina della propaganda.
              </p>
              <p>
                Qui analizzeremo come <span className="text-[#D22B2B] font-bold">Iosif Stalin</span> ha 
                trasformato una nazione attraverso la paura, la censura e la manipolazione della verità.
              </p>
              <p className="text-[#A0A0A0] text-sm border-l-2 border-[#D22B2B] pl-4 mt-4">
                La consultazione di questo materiale è considerata alto tradimento secondo 
                l'<span className="redacted">art. 58</span> del codice penale sovietico. 
                Prosegui a tuo rischio.
              </p>
            </div>
          </div>
        )}

        {/* Enter Button */}
        <button
          onClick={handleEnter}
          data-testid="enter-archive-btn"
          className="group relative font-heading text-xl tracking-wider px-12 py-4 bg-[#D22B2B] text-white border-2 border-[#D22B2B] hover:bg-transparent hover:text-[#D22B2B] transition-all duration-300 flex items-center gap-3"
        >
          <Lock className="w-5 h-5 group-hover:hidden" />
          <Eye className="w-5 h-5 hidden group-hover:block" />
          APRI IL DOSSIER
        </button>

        {/* Hidden redacted text easter egg */}
        <p className="mt-12 text-sm text-[#A0A0A0]">
          File: <span className="redacted">STALIN-1937-PURGE-DOCS</span>
        </p>

        {/* Footer */}
        <footer className="absolute bottom-8 left-0 right-0 text-center">
          <p className="font-body text-[#A0A0A0] text-xs tracking-wider">
            Progetto di Storia - Classe V - Anno Scolastico 2024/2025
          </p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
