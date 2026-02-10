import { ChevronRight, ChevronLeft } from "lucide-react";

const EconomiaPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16 px-4" data-testid="economia-page">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-body text-[#D22B2B] text-sm tracking-[0.3em] mb-4">CAPITOLO II</p>
          <h1 className="font-heading text-4xl sm:text-5xl text-[#E5E5E5] mb-4">ECONOMIA E SOCIETÀ</h1>
          <p className="font-body text-[#A0A0A0]">1928-1939</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { val: "200%", label: "Aumento acciaio" },
            { val: "5-7M", label: "Deportati" },
            { val: "4-7M", label: "Morti Holodomor" },
            { val: "3", label: "Piani Quinquennali" }
          ].map((s, i) => (
            <div key={i} className="bg-[#121212] border border-[#333333] p-4 text-center">
              <p className="font-heading text-2xl text-[#D22B2B]">{s.val}</p>
              <p className="font-body text-[#A0A0A0] text-xs">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div className="bg-[#121212] border border-[#333333] p-6">
            <h3 className="font-heading text-[#D22B2B] text-lg mb-3">I PIANI QUINQUENNALI</h3>
            <p className="font-body text-[#E5E5E5] text-sm mb-3">
              Obiettivo: industrializzare l'URSS in 10 anni. Il Gosplan decideva tutto centralmente.
              Lo <strong>Stacanovismo</strong> spingeva gli operai a ritmi disumani.
            </p>
            <p className="font-body text-[#A0A0A0] text-xs italic">
              "Siamo indietro di 50-100 anni. Dobbiamo coprire questa distanza in 10 anni. O lo facciamo, o ci schiacciano." - Stalin, 1931
            </p>
          </div>

          <div className="bg-[#121212] border border-[#333333] p-6">
            <h3 className="font-heading text-[#D22B2B] text-lg mb-3">LA COLLETTIVIZZAZIONE</h3>
            <p className="font-body text-[#E5E5E5] text-sm mb-3">
              Fine della proprietà privata. I <strong>Kulaki</strong> (contadini "ricchi") deportati a milioni.
              Le terre fuse in Kolchoz e Sovchoz statali.
            </p>
            <ul className="font-body text-[#A0A0A0] text-xs space-y-1">
              <li>• 1ª categoria: Fucilati o Gulag</li>
              <li>• 2ª categoria: Deportati in Siberia</li>
              <li>• 3ª categoria: Espropriati</li>
            </ul>
          </div>

          <div className="bg-[#0a0a0a] border-2 border-[#D22B2B] p-6">
            <h3 className="font-heading text-[#D22B2B] text-lg mb-3">HOLODOMOR (1932-33)</h3>
            <p className="font-body text-[#E5E5E5] text-sm mb-3">
              Carestia artificiale in Ucraina. Lo Stato confiscò tutto il grano per venderlo all'estero.
              <strong> 4-7 milioni di morti</strong> mentre l'URSS esportava cereali.
            </p>
            <p className="font-body text-[#A0A0A0] text-xs">
              La <em>"Legge delle tre spighe"</em>: pena di morte per chi rubava anche poche spighe dai campi.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <a href="/genesi" className="font-heading text-sm px-6 py-3 border border-[#333333] text-[#E5E5E5] hover:border-[#D22B2B] flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" /> CAPITOLO I
          </a>
          <a href="/terrore" className="font-heading text-sm px-6 py-3 bg-[#D22B2B] text-white hover:bg-[#B22222] flex items-center gap-2">
            CAPITOLO III <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EconomiaPage;
