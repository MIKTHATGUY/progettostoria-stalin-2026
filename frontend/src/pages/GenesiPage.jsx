import { ChevronRight, ChevronLeft } from "lucide-react";

const GenesiPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16 px-4" data-testid="genesi-page">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-body text-[#D22B2B] text-sm tracking-[0.3em] mb-4">CAPITOLO I</p>
          <h1 className="font-heading text-4xl sm:text-5xl text-[#E5E5E5] mb-4">LA PRESA DEL POTERE</h1>
          <p className="font-body text-[#A0A0A0]">1922-1929</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Testamento di Lenin */}
          <div className="bg-[#121212] border border-[#333333] p-6">
            <h3 className="font-heading text-[#D22B2B] text-lg mb-3">IL TESTAMENTO DI LENIN (1922)</h3>
            <p className="font-body text-[#E5E5E5] mb-4">
              Lenin avvertì il partito: <em>"Stalin è troppo brutale... propongo di rimuoverlo dalla carica di Segretario Generale."</em>
            </p>
            <p className="font-body text-[#A0A0A0] text-sm">
              Il documento fu nascosto. Zinoviev e Kamenev convinsero il partito a non renderlo pubblico.
            </p>
          </div>

          {/* Strategia */}
          <div className="bg-[#121212] border border-[#333333] p-6">
            <h3 className="font-heading text-[#D22B2B] text-lg mb-3">LA STRATEGIA DELLE ALLEANZE</h3>
            <ul className="font-body text-[#E5E5E5] space-y-2 text-sm">
              <li>• <strong>1925-27:</strong> Si allea con la Destra per eliminare Trotsky, Zinoviev, Kamenev</li>
              <li>• <strong>1928-29:</strong> Attacca la Destra (Bucharin) accusandola di restaurare il capitalismo</li>
              <li>• <strong>1929:</strong> Trotsky esiliato. Stalin padrone assoluto dell'URSS</li>
            </ul>
          </div>

          {/* Socialismo */}
          <div className="bg-[#121212] border border-[#333333] p-6">
            <h3 className="font-heading text-[#D22B2B] text-lg mb-3">SOCIALISMO IN UN SOLO PAESE</h3>
            <p className="font-body text-[#E5E5E5] text-sm">
              Stalin vs Trotsky: l'URSS può costruire il socialismo da sola, senza aspettare la rivoluzione mondiale. 
              Questa tesi giustificò l'industrializzazione forzata.
            </p>
          </div>

          {/* Vittime */}
          <div className="bg-[#0a0a0a] border-2 border-[#D22B2B] p-6">
            <p className="font-heading text-[#A0A0A0] text-xs mb-3">DESTINO DEI RIVALI</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                { name: "Trotsky", fate: "Assassinato 1940" },
                { name: "Zinoviev", fate: "Fucilato 1936" },
                { name: "Kamenev", fate: "Fucilato 1936" },
                { name: "Bucharin", fate: "Fucilato 1938" }
              ].map((p, i) => (
                <div key={i}>
                  <p className="font-heading text-[#E5E5E5]">{p.name}</p>
                  <p className="font-body text-[#D22B2B] text-xs">{p.fate}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-end">
          <a href="/economia" className="font-heading text-sm px-6 py-3 bg-[#D22B2B] text-white hover:bg-[#B22222] flex items-center gap-2">
            CAPITOLO II <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GenesiPage;
