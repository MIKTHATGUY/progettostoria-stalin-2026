import { ChevronLeft, AlertTriangle } from "lucide-react";

const ConclusionePage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16 px-4" data-testid="conclusione-page">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-body text-[#D22B2B] text-sm tracking-[0.3em] mb-4">CONCLUSIONE</p>
          <h1 className="font-heading text-4xl sm:text-5xl text-[#E5E5E5] mb-4">BILANCIO DELLO STALINISMO</h1>
        </div>

        {/* Stats */}
        <div className="bg-[#0a0a0a] border-2 border-[#D22B2B] p-8 mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-heading text-3xl text-[#D22B2B]">29</p>
              <p className="font-body text-[#A0A0A0] text-xs">Anni al potere</p>
            </div>
            <div>
              <p className="font-heading text-3xl text-[#D22B2B]">~20M</p>
              <p className="font-body text-[#A0A0A0] text-xs">Vittime stimate</p>
            </div>
            <div>
              <p className="font-heading text-3xl text-[#D22B2B]">18M</p>
              <p className="font-body text-[#A0A0A0] text-xs">Passati per i Gulag</p>
            </div>
            <div>
              <p className="font-heading text-3xl text-[#D22B2B]">476</p>
              <p className="font-body text-[#A0A0A0] text-xs">Campi Gulag</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div className="bg-[#121212] border border-[#333333] p-6">
            <h3 className="font-heading text-[#D22B2B] text-lg mb-3">I COSTI UMANI</h3>
            <ul className="font-body text-[#E5E5E5] text-sm space-y-1">
              <li>• Holodomor: 4-7 milioni</li>
              <li>• Grande Terrore: 750.000 fucilati</li>
              <li>• Morti nei Gulag: 1.5-1.8 milioni</li>
              <li>• Deportazioni etniche: centinaia di migliaia</li>
            </ul>
          </div>

          <div className="bg-[#121212] border border-[#333333] p-6">
            <h3 className="font-heading text-[#C0A080] text-lg mb-3">I RISULTATI MATERIALI</h3>
            <p className="font-body text-[#E5E5E5] text-sm mb-3">
              L'URSS divenne la 2ª potenza industriale mondiale. Alfabetizzazione dal 28% al 94%.
              Prima bomba atomica nel 1949.
            </p>
            <p className="font-body text-[#A0A0A0] text-xs italic">
              "Stalin trovò la Russia con l'aratro e la lasciò con la bomba atomica." - Churchill
            </p>
          </div>

          <div className="bg-[#121212] border border-[#333333] p-6">
            <h3 className="font-heading text-[#D22B2B] text-lg mb-3">IL MODELLO TOTALITARIO</h3>
            <p className="font-body text-[#E5E5E5] text-sm">
              Ideologia totale, partito unico, terrore poliziesco, monopolio dei media, 
              economia centralizzata, atomizzazione sociale.
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-8 text-center">
          <AlertTriangle className="w-10 h-10 text-[#D22B2B] mx-auto mb-4" />
          <p className="font-body text-[#E5E5E5] text-lg italic">"Chi non conosce la storia è condannato a ripeterla."</p>
          <p className="font-body text-[#A0A0A0] text-sm mt-2">— George Santayana</p>
        </div>

        {/* Bibliography */}
        <div className="mt-8 bg-[#121212] border border-[#333333] p-6">
          <h4 className="font-heading text-[#E5E5E5] mb-3">FONTI</h4>
          <p className="font-body text-[#A0A0A0] text-xs">
            R. Conquest, "Il Grande Terrore" • A. Solženicyn, "Arcipelago Gulag" • 
            H. Arendt, "Le origini del totalitarismo" • A. Applebaum, "Gulag"
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <a href="/tardostalinismo" className="font-heading text-sm px-6 py-3 border border-[#333333] text-[#E5E5E5] hover:border-[#D22B2B] flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" /> CAPITOLO VI
          </a>
          <a href="/quiz" className="font-heading text-sm px-6 py-3 bg-[#D22B2B] text-white hover:bg-[#B22222]">
            TEST DI SOPRAVVIVENZA
          </a>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="font-body text-[#A0A0A0] text-xs">
            Progetto di Storia - Classe V - Anno Scolastico 2024/2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConclusionePage;
