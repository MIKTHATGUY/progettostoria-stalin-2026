import { ChevronRight, ChevronLeft } from "lucide-react";

const TerrorePage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16 px-4" data-testid="terrore-page">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-body text-[#D22B2B] text-sm tracking-[0.3em] mb-4">CAPITOLO III</p>
          <h1 className="font-heading text-4xl sm:text-5xl text-[#E5E5E5] mb-4">IL GRANDE TERRORE</h1>
          <p className="font-body text-[#A0A0A0]">1934-1938</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { val: "750.000", label: "Fucilati" },
            { val: "1.5M", label: "Nuovi Gulag" },
            { val: "3", label: "Processi pubblici" },
            { val: "90%", label: "Ufficiali eliminati" }
          ].map((s, i) => (
            <div key={i} className="bg-[#121212] border border-[#333333] p-4 text-center">
              <p className="font-heading text-xl text-[#D22B2B]">{s.val}</p>
              <p className="font-body text-[#A0A0A0] text-xs">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div className="bg-[#121212] border border-[#333333] p-6">
            <h3 className="font-heading text-[#D22B2B] text-lg mb-3">L'OMICIDIO KIROV (1934)</h3>
            <p className="font-body text-[#E5E5E5] text-sm">
              Kirov, leader di Leningrado, assassinato (probabilmente su ordine di Stalin). 
              Pretesto per i decreti di emergenza e l'inizio delle purghe.
            </p>
          </div>

          <div className="bg-[#121212] border border-[#333333] p-6">
            <h3 className="font-heading text-[#D22B2B] text-lg mb-3">I PROCESSI DI MOSCA (1936-38)</h3>
            <p className="font-body text-[#E5E5E5] text-sm mb-3">
              Spettacoli pubblici dove ex leader confessavano crimini impossibili sotto tortura.
            </p>
            <ul className="font-body text-[#A0A0A0] text-xs space-y-1">
              <li>• 1936: Zinoviev, Kamenev → Fucilati</li>
              <li>• 1937: Radek, Pjatakov → Fucilati</li>
              <li>• 1938: Bucharin, Rykov → Fucilati</li>
            </ul>
          </div>

          <div className="bg-[#121212] border border-[#333333] p-6">
            <h3 className="font-heading text-[#D22B2B] text-lg mb-3">L'ORDINE 00447</h3>
            <p className="font-body text-[#E5E5E5] text-sm">
              Quote di arresti e fucilazioni per ogni regione. Le "troike" condannavano in pochi minuti.
              La purga dell'Armata Rossa eliminò il 90% degli ufficiali superiori.
            </p>
          </div>

          <div className="bg-[#0a0a0a] border-2 border-[#D22B2B] p-6">
            <h3 className="font-heading text-[#D22B2B] text-lg mb-3">L'ARTICOLO 58</h3>
            <p className="font-body text-[#E5E5E5] text-sm mb-3">
              "Crimini controrivoluzionari" - così vago da includere qualsiasi comportamento.
            </p>
            <p className="font-body text-[#A0A0A0] text-xs italic">
              "Il terrore colpiva alla cieca. Non cercava i colpevoli, ma le quote da riempire." - Solženicyn
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <a href="/economia" className="font-heading text-sm px-6 py-3 border border-[#333333] text-[#E5E5E5] hover:border-[#D22B2B] flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" /> CAPITOLO II
          </a>
          <a href="/cultura" className="font-heading text-sm px-6 py-3 bg-[#D22B2B] text-white hover:bg-[#B22222] flex items-center gap-2">
            CAPITOLO IV <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TerrorePage;
