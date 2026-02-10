import { ChevronRight, ChevronLeft } from "lucide-react";

const GuerraPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16 px-4" data-testid="guerra-page">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-body text-[#D22B2B] text-sm tracking-[0.3em] mb-4">CAPITOLO V</p>
          <h1 className="font-heading text-4xl sm:text-5xl text-[#E5E5E5] mb-4">POLITICA ESTERA E GUERRA</h1>
          <p className="font-body text-[#A0A0A0]">1939-1945</p>
        </div>

        {/* Timeline */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-center">
          {[
            { year: "1939", event: "Patto con Hitler" },
            { year: "1940", event: "Katyn" },
            { year: "1941", event: "Barbarossa" },
            { year: "1943", event: "Stalingrado" },
            { year: "1945", event: "Vittoria" }
          ].map((t, i) => (
            <div key={i} className="px-3">
              <p className="font-heading text-[#D22B2B]">{t.year}</p>
              <p className="font-body text-[#A0A0A0] text-xs">{t.event}</p>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div className="bg-[#121212] border border-[#333333] p-6">
            <h3 className="font-heading text-[#D22B2B] text-lg mb-3">IL PATTO MOLOTOV-RIBBENTROP (1939)</h3>
            <p className="font-body text-[#E5E5E5] text-sm mb-3">
              Alleanza shock con Hitler. Protocollo segreto per dividersi l'Europa orientale.
            </p>
            <p className="font-body text-[#A0A0A0] text-xs">
              <strong>Massacro di Katyn (1940):</strong> 22.000 ufficiali polacchi fucilati dall'NKVD.
            </p>
          </div>

          <div className="bg-[#121212] border border-[#333333] p-6">
            <h3 className="font-heading text-[#D22B2B] text-lg mb-3">OPERAZIONE BARBAROSSA (1941)</h3>
            <p className="font-body text-[#E5E5E5] text-sm mb-3">
              22 giugno: 3 milioni di tedeschi invadono l'URSS. Stalin in shock per giorni.
              La purga degli ufficiali aveva lasciato l'esercito senza leadership.
            </p>
            <p className="font-body text-[#A0A0A0] text-xs">
              <strong>Ordine 227:</strong> "Non un passo indietro!" - Chi si ritira viene fucilato.
            </p>
          </div>

          <div className="bg-[#121212] border border-[#333333] p-6">
            <h3 className="font-heading text-[#D22B2B] text-lg mb-3">LA VITTORIA (1945)</h3>
            <p className="font-body text-[#E5E5E5] text-sm">
              Stalingrado (1943): svolta della guerra. Kursk: più grande battaglia di carri della storia.
              Stalin riabilitò la Chiesa e il patriottismo russo per galvanizzare il popolo.
            </p>
          </div>

          <div className="bg-[#0a0a0a] border-2 border-[#D22B2B] p-6">
            <p className="font-heading text-[#A0A0A0] text-xs mb-3">IL PREZZO</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-heading text-2xl text-[#D22B2B]">27M</p>
                <p className="font-body text-[#A0A0A0] text-xs">Morti sovietici</p>
              </div>
              <div>
                <p className="font-heading text-2xl text-[#D22B2B]">1.700</p>
                <p className="font-body text-[#A0A0A0] text-xs">Città distrutte</p>
              </div>
              <div>
                <p className="font-heading text-2xl text-[#D22B2B]">70.000</p>
                <p className="font-body text-[#A0A0A0] text-xs">Villaggi rasi al suolo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <a href="/cultura" className="font-heading text-sm px-6 py-3 border border-[#333333] text-[#E5E5E5] hover:border-[#D22B2B] flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" /> CAPITOLO IV
          </a>
          <a href="/tardostalinismo" className="font-heading text-sm px-6 py-3 bg-[#D22B2B] text-white hover:bg-[#B22222] flex items-center gap-2">
            CAPITOLO VI <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GuerraPage;
