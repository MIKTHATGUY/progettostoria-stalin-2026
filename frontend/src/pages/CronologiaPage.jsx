import { useState } from "react";
import { ChevronDown, Skull, Factory, Wheat, Target, AlertTriangle, Crown } from "lucide-react";

const timelineData = [
  {
    year: "1924",
    title: "IL VUOTO DI POTERE",
    event: "Morte di Lenin",
    description: "Vladimir Lenin muore. Stalin, segretario generale, inizia abilmente a isolare i suoi rivali (Trotsky, Zinoviev, Kamenev) presentandosi come l'unico vero erede e interprete del leninismo. Inizia la costruzione del culto della personalità.",
    icon: Crown,
    color: "#C0A080"
  },
  {
    year: "1929",
    title: "LA GRANDE SVOLTA",
    event: "Collettivizzazione Forzata e Piani Quinquennali",
    description: "Stalin dichiara guerra alle campagne. La proprietà privata è abolita. I Kulaki (contadini benestanti) vengono dichiarati nemici di classe e deportati a milioni. L'URSS deve industrializzarsi a qualsiasi costo umano.",
    icon: Factory,
    color: "#A0A0A0"
  },
  {
    year: "1932-1933",
    title: "HOLODOMOR",
    event: "La Carestia in Ucraina",
    description: "Per piegare la resistenza ucraina e finanziare l'industria, lo Stato confisca tutto il grano. I villaggi vengono isolati dall'esercito. Muoiono circa 4-5 milioni di persone mentre l'URSS esporta cereali all'estero.",
    icon: Wheat,
    color: "#D22B2B"
  },
  {
    year: "1934",
    title: "IL PRETESTO",
    event: "Omicidio di Kirov",
    description: "Sergej Kirov, leader popolare di Leningrado, viene assassinato in circostanze misteriose (probabilmente su ordine di Stalin). Questo evento è il pretesto per lanciare le grandi purghe: chiunque può essere accusato di complicità nel complotto.",
    icon: Target,
    color: "#C0A080"
  },
  {
    year: "1937-1938",
    title: "IL GRANDE TERRORE",
    event: "Yezhovshchina - L'apice delle Purghe",
    description: "Il periodo più sanguinoso. Viene emanato l'Ordine 00447. L'NKVD ha 'quote' di arresti e fucilazioni da rispettare per ogni regione. Vengono eliminati i vecchi bolscevichi, i generali dell'Armata Rossa, intellettuali e cittadini comuni. Si stima un totale di 700.000 fucilazioni in due anni.",
    icon: Skull,
    color: "#D22B2B"
  },
  {
    year: "1953",
    title: "LA FINE DI UN'ERA",
    event: "Morte di Stalin",
    description: "Il dittatore muore nella sua dacia, solo, temuto anche dai suoi medici (che aveva fatto arrestare poco prima). Il sistema del Gulag inizia lentamente a essere smantellato. Finisce il terrore di massa, ma le cicatrici rimangono per sempre.",
    icon: AlertTriangle,
    color: "#4CAF50"
  }
];

const TimelineItem = ({ item, index, isExpanded, onToggle }) => {
  const Icon = item.icon;
  const isLeft = index % 2 === 0;

  return (
    <div className={`flex items-start gap-4 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Content */}
      <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
        <div 
          className={`bg-[#121212] border border-[#333333] hover:border-[${item.color}] transition-all duration-300 cursor-pointer`}
          onClick={onToggle}
          data-testid={`timeline-item-${item.year}`}
        >
          <div className="p-6">
            <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
              <span 
                className="font-heading text-3xl font-bold"
                style={{ color: item.color }}
              >
                {item.year}
              </span>
            </div>
            
            <h3 className="font-heading text-xl text-[#E5E5E5] mb-1">
              {item.title}
            </h3>
            <p className="font-body text-[#A0A0A0] text-sm mb-3">
              {item.event}
            </p>
            
            <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="border-t border-[#333333] pt-4 mt-2">
                <p className="font-body text-[#E5E5E5] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
            
            <button className="mt-3 flex items-center gap-2 text-[#A0A0A0] hover:text-[#E5E5E5] transition-colors text-sm font-body">
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
              {isExpanded ? 'Chiudi' : 'Leggi di più'}
            </button>
          </div>
        </div>
      </div>

      {/* Timeline marker */}
      <div className="flex flex-col items-center z-10">
        <div 
          className="w-12 h-12 rounded-full border-4 flex items-center justify-center bg-[#0a0a0a]"
          style={{ borderColor: item.color }}
        >
          <Icon className="w-5 h-5" style={{ color: item.color }} />
        </div>
        {index < timelineData.length - 1 && (
          <div className="w-0.5 h-24 md:h-32 bg-gradient-to-b from-[#333333] to-transparent" />
        )}
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block flex-1" />
    </div>
  );
};

const CronologiaPage = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (year) => {
    setExpandedItems(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16 px-4" data-testid="cronologia-page">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="font-body text-[#D22B2B] text-sm tracking-[0.3em] mb-4">
          SEZIONE V - CRONOLOGIA STORICA
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#E5E5E5] mb-4">
          CRONOLOGIA DI UN INCUBO
        </h1>
        <p className="font-body text-[#A0A0A0] max-w-2xl mx-auto text-lg">
          Dall'Utopia al Totalitarismo Assoluto
        </p>
        <p className="font-body text-[#A0A0A0] max-w-2xl mx-auto mt-4">
          Questa sezione mostra come la situazione sia precipitata anno dopo anno. 
          Non è un elenco noioso, ma una discesa all'inferno.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto relative">
        {/* Central line - visible only on desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D22B2B] via-[#333333] to-transparent transform -translate-x-1/2" />

        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={item.year}
              item={item}
              index={index}
              isExpanded={expandedItems[item.year]}
              onToggle={() => toggleItem(item.year)}
            />
          ))}
        </div>
      </div>

      {/* Statistics Box */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-[#0a0a0a] border-2 border-[#D22B2B] p-8">
          <div className="stamp mb-6 text-sm inline-block">BILANCIO DEL TERRORE</div>
          
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-heading text-4xl text-[#D22B2B] mb-2">~20</p>
              <p className="font-body text-[#A0A0A0] text-sm">Milioni di vittime stimate (1924-1953)</p>
            </div>
            <div>
              <p className="font-heading text-4xl text-[#C0A080] mb-2">18</p>
              <p className="font-body text-[#A0A0A0] text-sm">Milioni di prigionieri passati per i Gulag</p>
            </div>
            <div>
              <p className="font-heading text-4xl text-[#E5E5E5] mb-2">750.000</p>
              <p className="font-body text-[#A0A0A0] text-sm">Fucilazioni durante il Grande Terrore</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="max-w-3xl mx-auto mt-12 text-center">
        <blockquote className="font-body text-[#E5E5E5] text-lg italic leading-relaxed">
          "Una morte è una tragedia, un milione di morti è statistica."
        </blockquote>
        <p className="font-body text-[#A0A0A0] text-sm mt-4">
          — Frase attribuita a Iosif Stalin
        </p>
      </div>
    </div>
  );
};

export default CronologiaPage;
