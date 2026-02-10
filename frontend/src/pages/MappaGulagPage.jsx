import { MapPin, Skull, Pickaxe, Wheat, FlaskConical } from "lucide-react";

const gulagLocations = [
  {
    id: "solovki",
    name: "SOLOVKI",
    subtitle: "Il Laboratorio",
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
    region: "Kazakistan (Centro Asia)",
    type: "Agricoltura e ALZHIR",
    icon: Wheat,
    description: "Un campo grande quanto la Francia. Qui venivano spesso deportate intere nazioni (come i Tedeschi del Volga o i Ceceni) e le mogli dei 'Nemici del Popolo', colpevoli solo di essere sposate con l'uomo sbagliato. I bambini venivano strappati alle madri e mandati in orfanotrofi.",
    quote: "ALZHIR: Akmolinskij Lager Zhён Izmennikov Rodiny - Campo delle Mogli dei Traditori della Patria.",
    stats: { years: "1931-1959", prisoners: "~800.000" }
  }
];

const MappaGulagPage = () => {
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

      {/* Location Cards Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6">
          {gulagLocations.map((location) => {
            const Icon = location.icon;
            return (
              <div
                key={location.id}
                className="bg-[#121212] border border-[#333333] hover:border-[#D22B2B] transition-colors"
                data-testid={`card-${location.id}`}
              >
                {/* Card Header */}
                <div className="p-6 border-b border-[#333333]">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-6 h-6 text-[#D22B2B]" />
                    <span className="font-body text-[#D22B2B] text-xs tracking-wider">{location.type}</span>
                  </div>
                  <h2 className="font-heading text-2xl text-[#E5E5E5] mb-1">{location.name}</h2>
                  <p className="font-body text-[#C0A080]">{location.subtitle}</p>
                </div>

                {/* Card Body */}
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
                    <p className="font-body text-[#E5E5E5] leading-relaxed text-sm">
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
                      <p className="font-heading text-xl text-[#D22B2B]">{location.stats.years}</p>
                      <p className="font-body text-[#A0A0A0] text-xs">Periodo di attività</p>
                    </div>
                    <div className="bg-[#0a0a0a] p-4 border border-[#333333] text-center">
                      <p className="font-heading text-xl text-[#D22B2B]">{location.stats.prisoners}</p>
                      <p className="font-body text-[#A0A0A0] text-xs">Prigionieri stimati</p>
                    </div>
                  </div>
                </div>
              </div>
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
    </div>
  );
};

export default MappaGulagPage;
