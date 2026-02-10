import { useState } from "react";
import { Eye, EyeOff, ChevronLeft, ChevronRight } from "lucide-react";

const propagandaData = [
  {
    id: 1,
    title: "IL MIRACOLO ECONOMICO",
    pravda: {
      title: "RECORD STORICO NEL DONBASS!",
      text: "Grazie alla guida geniale del Compagno Stalin, l'Unione Sovietica ha superato le potenze capitaliste. Le nostre fabbriche lavorano a pieno ritmo, gli operai cantano mentre costruiscono il futuro radioso del socialismo. Non esiste disoccupazione, non esiste fame. Il Piano Quinquennale è stato completato in soli quattro anni!",
      image: "https://images.unsplash.com/photo-1576666735179-f3ad352212c2?w=800&q=80",
      badge: "PRAVDA"
    },
    samizdat: {
      title: "SCHIAVI DELLA MACCHINA",
      text: "Le statistiche sono falsificate per paura delle ritorsioni. Gran parte delle infrastrutture è costruita dagli Zek (prigionieri dei Gulag) in condizioni disumane. I macchinari si rompono per mancanza di pezzi di ricambio e chi non raggiunge le quote impossibili viene arrestato per 'sabotaggio'. Il progresso è cementato con le ossa dei lavoratori.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
      badge: "SAMIZDAT"
    }
  },
  {
    id: 2,
    title: "IL PADRE DEI POPOLI",
    pravda: {
      title: "GRAZIE STALIN PER LA NOSTRA INFANZIA FELICE",
      text: "Stalin ama i bambini più di ogni altra cosa. Egli è il padre premuroso che protegge ogni piccolo cittadino sovietico dai lupi imperialisti. Sotto il suo sguardo benevolo, cresce una generazione forte, sana e devota al Partito.",
      image: "https://images.unsplash.com/photo-1653242803054-49d4df9827c3?w=800&q=80",
      badge: "PRAVDA"
    },
    samizdat: {
      title: "GLI ORFANI DEL REGIME",
      text: "Dietro le foto patinate c'è il terrore. La bambina nella celebre foto, Gelya Markizova, rimase orfana poco dopo lo scatto: suo padre fu fucilato come spia e sua madre morì in deportazione. Migliaia di bambini, figli dei 'Nemici del Popolo', vengono rinchiusi in orfanotrofi statali per essere rieducati e costretti a rinnegare i genitori.",
      image: "https://images.unsplash.com/photo-1549830727-c1c26b45db08?w=800&q=80",
      badge: "SAMIZDAT"
    }
  }
];

const FlipCard = ({ data, isFlipped, onFlip }) => {
  return (
    <div 
      className={`flip-card w-full h-[600px] cursor-pointer ${isFlipped ? 'flipped' : ''}`}
      onClick={onFlip}
      data-testid={`flip-card-${data.id}`}
    >
      <div className="flip-card-inner">
        {/* Front - Pravda */}
        <div className="flip-card-front bg-[#121212] border border-[#333333] overflow-hidden">
          <div className="relative h-1/2">
            <img 
              src={data.pravda.image} 
              alt={data.pravda.title}
              className="w-full h-full object-cover filter sepia"
            />
            <div className="absolute top-4 left-4 bg-[#D22B2B] text-white font-heading text-sm px-3 py-1 tracking-wider">
              {data.pravda.badge}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent" />
          </div>
          <div className="p-6 h-1/2 flex flex-col">
            <p className="font-body text-[#A0A0A0] text-xs tracking-wider mb-2">{data.title}</p>
            <h3 className="font-heading text-2xl text-[#E5E5E5] mb-4">{data.pravda.title}</h3>
            <p className="font-body text-[#A0A0A0] text-sm leading-relaxed flex-1 overflow-hidden">
              {data.pravda.text}
            </p>
            <div className="mt-4 flex items-center gap-2 text-[#D22B2B] font-body text-sm">
              <Eye className="w-4 h-4" />
              <span>Clicca per rivelare la verità</span>
            </div>
          </div>
        </div>

        {/* Back - Samizdat */}
        <div className="flip-card-back bg-[#0a0a0a] border-2 border-[#D22B2B] overflow-hidden">
          <div className="relative h-1/2">
            <img 
              src={data.samizdat.image} 
              alt={data.samizdat.title}
              className="w-full h-full object-cover filter grayscale"
            />
            <div className="absolute top-4 left-4 stamp text-xs">
              CENSURATO
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
          </div>
          <div className="p-6 h-1/2 flex flex-col">
            <p className="font-body text-[#D22B2B] text-xs tracking-wider mb-2">{data.title} - LA VERITÀ</p>
            <h3 className="font-heading text-2xl text-[#E5E5E5] mb-4">{data.samizdat.title}</h3>
            <p className="font-body text-[#E5E5E5] text-sm leading-relaxed flex-1 overflow-hidden">
              {data.samizdat.text}
            </p>
            <div className="mt-4 flex items-center gap-2 text-[#A0A0A0] font-body text-sm">
              <EyeOff className="w-4 h-4" />
              <span>Clicca per tornare alla propaganda</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PravdaPage = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const nextCard = () => {
    setCurrentIndex(prev => (prev + 1) % propagandaData.length);
  };

  const prevCard = () => {
    setCurrentIndex(prev => (prev - 1 + propagandaData.length) % propagandaData.length);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16 px-4" data-testid="pravda-page">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="font-body text-[#D22B2B] text-sm tracking-[0.3em] mb-4">
          SEZIONE II - DOCUMENTI COMPARATI
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#E5E5E5] mb-4">
          L'ARTE DELLA MENZOGNA
        </h1>
        <p className="font-body text-[#A0A0A0] max-w-2xl mx-auto">
          Confronta la versione ufficiale della Pravda con i documenti del Samizdat. 
          Clicca sulle carte per rivelare la verità nascosta.
        </p>
      </div>

      {/* Mobile: Single card with navigation */}
      <div className="lg:hidden max-w-md mx-auto">
        <FlipCard 
          data={propagandaData[currentIndex]}
          isFlipped={flippedCards[propagandaData[currentIndex].id]}
          onFlip={() => toggleFlip(propagandaData[currentIndex].id)}
        />
        <div className="flex justify-center items-center gap-8 mt-6">
          <button 
            onClick={prevCard}
            data-testid="prev-card-btn"
            className="p-3 border border-[#333333] hover:border-[#D22B2B] transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-[#E5E5E5]" />
          </button>
          <span className="font-body text-[#A0A0A0]">
            {currentIndex + 1} / {propagandaData.length}
          </span>
          <button 
            onClick={nextCard}
            data-testid="next-card-btn"
            className="p-3 border border-[#333333] hover:border-[#D22B2B] transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-[#E5E5E5]" />
          </button>
        </div>
      </div>

      {/* Desktop: Grid of cards */}
      <div className="hidden lg:grid grid-cols-2 gap-8 max-w-6xl mx-auto">
        {propagandaData.map(data => (
          <FlipCard 
            key={data.id}
            data={data}
            isFlipped={flippedCards[data.id]}
            onFlip={() => toggleFlip(data.id)}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="max-w-4xl mx-auto mt-16 grid sm:grid-cols-2 gap-6">
        <div className="bg-[#121212] border border-[#333333] p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-[#D22B2B] text-white font-heading text-xs px-2 py-1">PRAVDA</div>
            <span className="font-heading text-[#E5E5E5]">Versione Ufficiale</span>
          </div>
          <p className="font-body text-[#A0A0A0] text-sm">
            Il giornale ufficiale del Partito Comunista, strumento principale della propaganda di stato.
          </p>
        </div>
        <div className="bg-[#0a0a0a] border-2 border-[#D22B2B] p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="stamp text-xs" style={{ transform: 'rotate(0deg)', padding: '4px 8px' }}>SAMIZDAT</div>
            <span className="font-heading text-[#E5E5E5]">Realtà Nascosta</span>
          </div>
          <p className="font-body text-[#A0A0A0] text-sm">
            Letteratura clandestina copiata e distribuita segretamente per sfuggire alla censura sovietica.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PravdaPage;
