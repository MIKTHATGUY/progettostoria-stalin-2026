import { useState } from "react";
import { Play, Film, AlertCircle } from "lucide-react";

const videoData = [
  {
    id: 1,
    title: "IL CONFORMISMO DELLA PAURA",
    film: "Morto Stalin, se ne fa un altro (The Death of Stalin)",
    year: "2017",
    videoId: "E9eAshaPvYw",
    description: "Osservate la scena: nessuno osa essere il primo a smettere di applaudire. Non è rispetto, è terrore puro.",
    analysis: "Nel totalitarismo, l'entusiasmo non è opzionale, è un obbligo di sopravvivenza. Chi smette per primo diventa visibile, e chi è visibile è un bersaglio. Questo fenomeno era reale: smettere di applaudire per primi poteva significare essere segnati come 'tiepidi' verso il regime.",
    mechanism: "CONFORMISMO DA PAURA"
  },
  {
    id: 2,
    title: "HOLODOMOR: LA CARESTIA POLITICA",
    film: "Mr. Jones (L'ombra di Stalin)",
    year: "2019",
    videoId: "P7tqF7i9t1U",
    description: "Il giornalista Gareth Jones cammina in un villaggio ucraino spettrale e deserto, testimone silenzioso di milioni di morti.",
    analysis: "1932-1933. L'Ucraina, granaio d'Europa, muore di fame. Non per la siccità, ma per una decisione politica. Stalin requisisce tutto il grano per venderlo all'estero e finanziare l'industria pesante. La propaganda nega l'esistenza della carestia mentre milioni di persone muoiono nel silenzio.",
    mechanism: "CARESTIA ARTIFICIALE"
  },
  {
    id: 3,
    title: "LA BANALITÀ DELL'ARRESTO",
    film: "Sole Ingannatore (Burnt by the Sun)",
    year: "1994",
    videoId: "x6t7vT0j4c8",
    description: "L'auto nera arriva in un giorno di sole. L'arresto è calmo, quasi burocratico. La vittima non oppone resistenza.",
    analysis: "Il terrore staliniano non colpisce solo i criminali. Entra nelle case di eroi di guerra, intellettuali e fedeli membri del partito. Arriva in un giorno di sole, con un sorriso burocratico. L'obiettivo non è solo punire, ma creare un'atmosfera di insicurezza totale: nessuno è mai al sicuro.",
    mechanism: "TERRORE QUOTIDIANO"
  }
];

const VideoCard = ({ video, onPlay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-[#121212] border border-[#333333] hover:border-[#D22B2B] transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`video-card-${video.id}`}
    >
      {/* Video Thumbnail / Player */}
      <div className="relative aspect-video bg-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <button 
            onClick={() => onPlay(video)}
            data-testid={`play-btn-${video.id}`}
            className="w-20 h-20 rounded-full bg-[#D22B2B]/90 hover:bg-[#D22B2B] flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <Play className="w-8 h-8 text-white ml-1" />
          </button>
        </div>
        
        {/* Film strip overlay */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/80 to-transparent flex items-center px-3">
          <Film className="w-4 h-4 text-[#A0A0A0] mr-2" />
          <span className="font-body text-[#A0A0A0] text-xs truncate">{video.film}</span>
        </div>

        {/* Mechanism badge */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-[#D22B2B] text-white font-heading text-xs px-3 py-1 tracking-wider">
            {video.mechanism}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-heading text-xl text-[#E5E5E5]">{video.title}</h3>
          <span className="font-body text-[#A0A0A0] text-sm">{video.year}</span>
        </div>
        
        <p className="font-body text-[#A0A0A0] text-sm mb-4 italic">
          "{video.description}"
        </p>

        <div className={`transition-all duration-500 overflow-hidden ${isHovered ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="border-l-2 border-[#D22B2B] pl-4 py-2">
            <p className="font-heading text-[#D22B2B] text-xs tracking-wider mb-2">ANALISI STORICA</p>
            <p className="font-body text-[#E5E5E5] text-sm leading-relaxed">
              {video.analysis}
            </p>
          </div>
        </div>

        <p className="font-body text-[#A0A0A0] text-xs mt-4">
          {isHovered ? '' : 'Passa il mouse per leggere l\'analisi completa'}
        </p>
      </div>
    </div>
  );
};

const VideoModal = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
      data-testid="video-modal"
    >
      <div 
        className="w-full max-w-4xl bg-[#0a0a0a] border border-[#333333]"
        onClick={e => e.stopPropagation()}
      >
        <div className="aspect-video relative scanlines">
          <iframe
            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
            title={video.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="p-6">
          <h3 className="font-heading text-2xl text-[#E5E5E5] mb-2">{video.title}</h3>
          <p className="font-body text-[#A0A0A0] text-sm">{video.film} ({video.year})</p>
          <button 
            onClick={onClose}
            data-testid="close-modal-btn"
            className="mt-4 font-heading text-sm tracking-wider px-6 py-2 border border-[#333333] text-[#E5E5E5] hover:border-[#D22B2B] hover:text-[#D22B2B] transition-colors"
          >
            CHIUDI
          </button>
        </div>
      </div>
    </div>
  );
};

const CinemaPage = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16 px-4" data-testid="cinema-page">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="font-body text-[#D22B2B] text-sm tracking-[0.3em] mb-4">
          SEZIONE III - CINE-ANALISI
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#E5E5E5] mb-4">
          VISIONI DAL TERRORE
        </h1>
        <p className="font-body text-[#A0A0A0] max-w-2xl mx-auto">
          Il cinema come finestra sulla storia. Analizziamo scene chiave da film che hanno 
          catturato l'essenza del totalitarismo stalinista.
        </p>
      </div>

      {/* Warning box */}
      <div className="max-w-4xl mx-auto mb-12 bg-[#121212] border border-[#333333] p-4 flex items-start gap-4">
        <AlertCircle className="w-6 h-6 text-[#D22B2B] flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-heading text-[#E5E5E5] text-sm mb-1">NOTA METODOLOGICA</p>
          <p className="font-body text-[#A0A0A0] text-sm">
            I film analizzati sono opere di finzione basate su eventi storici documentati. 
            Le scene selezionate illustrano meccanismi reali del terrore stalinista.
          </p>
        </div>
      </div>

      {/* Video Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoData.map(video => (
          <VideoCard 
            key={video.id} 
            video={video} 
            onPlay={setActiveVideo}
          />
        ))}
      </div>

      {/* Analysis Summary */}
      <div className="max-w-4xl mx-auto mt-16 bg-[#0a0a0a] border-2 border-[#D22B2B] p-8">
        <div className="stamp mb-6 text-sm">CONCLUSIONE</div>
        <h3 className="font-heading text-2xl text-[#E5E5E5] mb-4">
          I TRE PILASTRI DEL TERRORE
        </h3>
        <div className="grid sm:grid-cols-3 gap-6 font-body text-sm">
          <div>
            <p className="text-[#D22B2B] font-bold mb-2">1. CONFORMISMO</p>
            <p className="text-[#A0A0A0]">
              La paura trasforma i cittadini in complici involontari del sistema.
            </p>
          </div>
          <div>
            <p className="text-[#D22B2B] font-bold mb-2">2. NEGAZIONE</p>
            <p className="text-[#A0A0A0]">
              I crimini più grandi vengono nascosti attraverso il controllo totale dell'informazione.
            </p>
          </div>
          <div>
            <p className="text-[#D22B2B] font-bold mb-2">3. ARBITRARIETÀ</p>
            <p className="text-[#A0A0A0]">
              Nessuno è al sicuro: l'imprevedibilità del terrore paralizza ogni resistenza.
            </p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </div>
  );
};

export default CinemaPage;
