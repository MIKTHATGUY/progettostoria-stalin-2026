import { useState } from "react";
import { X, MapPin, Skull, Pickaxe, Wheat, FlaskConical } from "lucide-react";

const gulagLocations = [
  {
    id: "solovki",
    name: "SOLOVKI",
    subtitle: "Il Laboratorio",
    position: { top: "25%", left: "35%" },
    region: "Isole nel Mar Bianco (Nord-Ovest)",
    type: "Campo 'Madre'",
    icon: FlaskConical,
    description: "Un antico monastero trasformato nel primo vero campo di concentramento sovietico. Qui, negli anni '20, furono sperimentati i metodi di tortura e sfruttamento che sarebbero stati poi applicati in tutto il paese.",
    quote: "Col pugno di ferro condurremo l'umanità alla felicità.",
    stats: { years: "1923-1939", prisoners: "~50.000" }
  },
  {
    id: "kolyma",
    name: "KOLYMA",
    subtitle: "Il Crematorio Bianco",
    position: { top: "20%", left: "85%" },
    region: "Estremo Oriente Siberiano (Nord-Est)",
    type: "Miniere d'Oro",
    icon: Skull,
    description: "Il luogo più temuto dell'intero sistema. Temperature che scendono a -50°C. I prigionieri lavoravano nelle miniere d'oro all'aperto. La speranza di vita era spesso di pochi mesi. Chi veniva mandato alla Kolyma sapeva che difficilmente sarebbe tornato.",
    quote: "Descritta magistralmente da Varlam Šalamov nei 'Racconti della Kolyma'.",
    stats: { years: "1932-1953", prisoners: "~500.000" }
  },
  {
    id: "vorkuta",
    name: "VORKUTA",
    subtitle: "Il Carbone",
    position: { top: "18%", left: "48%" },
    region: "Circolo Polare Artico (Urali Settentrionali)",
    type: "Miniere di Carbone",
    icon: Pickaxe,
    description: "Una delle più grandi città-lager. Il carbone estratto qui era vitale per l'industria bellica durante la Seconda Guerra Mondiale. Fu teatro di una delle più grandi rivolte di prigionieri nel 1953, soffocata nel sangue.",
    quote: "Il carbone era rosso del sangue dei prigionieri.",
    stats: { years: "1932-1962", prisoners: "~200.000" }
  },
  {
    id: "karlag",
    name: "KARLAG",
    subtitle: "La Steppa",
    position: { top: "55%", left: "55%" },
    region: "Kazakistan (Centro Asia)",
    type: "Agricoltura e ALZHIR",
    icon: Wheat,
    description: "Un campo grande quanto la Francia. Qui venivano spesso deportate intere nazioni (come i Tedeschi del Volga o i Ceceni) e le mogli dei 'Nemici del Popolo', colpevoli solo di essere sposate con l'uomo sbagliato. I bambini venivano strappati alle madri e mandati in orfanotrofi.",
    quote: "ALZHIR: Akmolinskij Lager Zhён Izmennikov Rodiny - Campo delle Mogli dei Traditori della Patria.",
    stats: { years: "1931-1959", prisoners: "~800.000" }
  }
];

const LocationModal = ({ location, onClose }) => {
  if (!location) return null;
  
  const Icon = location.icon;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-[#121212] border-2 border-[#D22B2B] max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
        data-testid={`modal-${location.id}`}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#333333] sticky top-0 bg-[#121212] flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Icon className="w-6 h-6 text-[#D22B2B]" />
              <span className="font-body text-[#D22B2B] text-xs tracking-wider">{location.type}</span>
            </div>
            <h2 className="font-heading text-3xl text-[#E5E5E5]">{location.name}</h2>
            <p className="font-body text-[#C0A080]">{location.subtitle}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 border border-[#333333] hover:border-[#D22B2B] transition-colors"
            data-testid="close-modal-btn"
          >
            <X className="w-5 h-5 text-[#E5E5E5]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Location */}
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#A0A0A0] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-heading text-[#E5E5E5] text-sm">POSIZIONE</p>
              <p className="font-body text-[#A0A0A0]">{location.region}</p>
            </div>
          </div>

          {/* Description */}
          <div className="border-l-2 border-[#D22B2B] pl-4">
            <p className="font-heading text-[#D22B2B] text-xs tracking-wider mb-2">DOSSIER</p>
            <p className="font-body text-[#E5E5E5] leading-relaxed">
              {location.description}
            </p>
          </div>

          {/* Quote */}
          <div className="bg-[#0a0a0a] p-4 border border-[#333333]">
            <p className="font-body text-[#C0A080] text-sm italic">
              "{location.quote}"
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#0a0a0a] p-4 border border-[#333333] text-center">
              <p className="font-heading text-2xl text-[#D22B2B]">{location.stats.years}</p>
              <p className="font-body text-[#A0A0A0] text-xs">Periodo di attività</p>
            </div>
            <div className="bg-[#0a0a0a] p-4 border border-[#333333] text-center">
              <p className="font-heading text-2xl text-[#D22B2B]">{location.stats.prisoners}</p>
              <p className="font-body text-[#A0A0A0] text-xs">Prigionieri stimati</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MappaGulagPage = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [hoveredLocation, setHoveredLocation] = useState(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16 px-4" data-testid="mappa-gulag-page">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="font-body text-[#D22B2B] text-sm tracking-[0.3em] mb-4">
          SEZIONE VI - GEOGRAFIA DELLA SOPPRESSIONE
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#E5E5E5] mb-4">
          L'ARCIPELAGO GULAG
        </h1>
        <p className="font-body text-[#A0A0A0] max-w-2xl mx-auto">
          Il GULAG (Direzione Principale dei Campi) non era un luogo, ma un sistema 
          economico basato sulla schiavitù. Un vero "stato nello stato".
        </p>
      </div>

      {/* Map Container */}
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-[#121212] border border-[#333333] aspect-[16/9] overflow-hidden">
          {/* USSR Map Background */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'grayscale(100%) contrast(1.2)'
            }}
          />
          
          {/* Map Grid Overlay */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(51, 51, 51, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(51, 51, 51, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />

          {/* URSS Label */}
          <div className="absolute top-4 left-4 font-heading text-[#D22B2B] text-sm tracking-widest">
            У.С.С.Р. / U.R.S.S.
          </div>

          {/* Location Hotspots */}
          {gulagLocations.map((location) => {
            const Icon = location.icon;
            const isHovered = hoveredLocation === location.id;
            
            return (
              <button
                key={location.id}
                onClick={() => setSelectedLocation(location)}
                onMouseEnter={() => setHoveredLocation(location.id)}
                onMouseLeave={() => setHoveredLocation(null)}
                data-testid={`hotspot-${location.id}`}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ top: location.position.top, left: location.position.left }}
              >
                {/* Pulse animation */}
                <span className="absolute inset-0 w-12 h-12 bg-[#D22B2B]/30 rounded-full animate-ping" />
                
                {/* Icon container */}
                <span className={`relative flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                  isHovered 
                    ? 'bg-[#D22B2B] border-[#D22B2B] scale-125' 
                    : 'bg-[#0a0a0a] border-[#D22B2B]'
                }`}>
                  <Icon className={`w-5 h-5 transition-colors ${isHovered ? 'text-white' : 'text-[#D22B2B]'}`} />
                </span>

                {/* Label */}
                <span className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap mt-2 font-heading text-sm transition-all duration-300 ${
                  isHovered ? 'text-[#E5E5E5] opacity-100' : 'text-[#A0A0A0] opacity-80'
                }`}>
                  {location.name}
                </span>
              </button>
            );
          })}

          {/* Legend */}
          <div className="absolute bottom-4 right-4 bg-[#0a0a0a]/90 border border-[#333333] p-4">
            <p className="font-heading text-[#E5E5E5] text-xs tracking-wider mb-3">LEGENDA</p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <FlaskConical className="w-4 h-4 text-[#D22B2B]" />
                <span className="font-body text-[#A0A0A0]">Campo sperimentale</span>
              </div>
              <div className="flex items-center gap-2">
                <Pickaxe className="w-4 h-4 text-[#D22B2B]" />
                <span className="font-body text-[#A0A0A0]">Miniere</span>
              </div>
              <div className="flex items-center gap-2">
                <Wheat className="w-4 h-4 text-[#D22B2B]" />
                <span className="font-body text-[#A0A0A0]">Agricoltura</span>
              </div>
              <div className="flex items-center gap-2">
                <Skull className="w-4 h-4 text-[#D22B2B]" />
                <span className="font-body text-[#A0A0A0]">Alta mortalità</span>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="absolute bottom-4 left-4 font-body text-[#A0A0A0] text-xs">
            Clicca sui punti per visualizzare i dossier
          </div>
        </div>
      </div>

      {/* Location Cards - Mobile alternative */}
      <div className="max-w-4xl mx-auto mt-12 lg:hidden">
        <h3 className="font-heading text-[#E5E5E5] text-xl mb-6 text-center">CAMPI PRINCIPALI</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {gulagLocations.map((location) => {
            const Icon = location.icon;
            return (
              <button
                key={location.id}
                onClick={() => setSelectedLocation(location)}
                className="bg-[#121212] border border-[#333333] hover:border-[#D22B2B] p-4 text-left transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="w-5 h-5 text-[#D22B2B]" />
                  <span className="font-heading text-[#E5E5E5]">{location.name}</span>
                </div>
                <p className="font-body text-[#A0A0A0] text-sm">{location.subtitle}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Stats Summary */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="bg-[#0a0a0a] border-2 border-[#D22B2B] p-8">
          <div className="stamp mb-6 text-sm inline-block">STATISTICHE DEL SISTEMA</div>
          
          <div className="grid sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-heading text-3xl text-[#D22B2B] mb-1">476</p>
              <p className="font-body text-[#A0A0A0] text-xs">Campi principali</p>
            </div>
            <div>
              <p className="font-heading text-3xl text-[#D22B2B] mb-1">18M</p>
              <p className="font-body text-[#A0A0A0] text-xs">Prigionieri totali</p>
            </div>
            <div>
              <p className="font-heading text-3xl text-[#D22B2B] mb-1">1.5M</p>
              <p className="font-body text-[#A0A0A0] text-xs">Morti nei campi</p>
            </div>
            <div>
              <p className="font-heading text-3xl text-[#D22B2B] mb-1">30</p>
              <p className="font-body text-[#A0A0A0] text-xs">Anni di operatività</p>
            </div>
          </div>
        </div>
      </div>

      {/* Solzhenitsyn Quote */}
      <div className="max-w-3xl mx-auto mt-12 text-center">
        <blockquote className="font-body text-[#E5E5E5] text-lg italic leading-relaxed">
          "Il Gulag era un arcipelago, disseminato nel mare della nostra esistenza quotidiana. 
          E noi non lo sapevamo."
        </blockquote>
        <p className="font-body text-[#A0A0A0] text-sm mt-4">
          — Aleksandr Solženicyn, "Arcipelago Gulag"
        </p>
      </div>

      {/* Modal */}
      <LocationModal 
        location={selectedLocation} 
        onClose={() => setSelectedLocation(null)} 
      />
    </div>
  );
};

export default MappaGulagPage;
