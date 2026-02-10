import { ChevronRight, ChevronLeft } from "lucide-react";

const CulturaPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16 px-4" data-testid="cultura-page">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-body text-[#D22B2B] text-sm tracking-[0.3em] mb-4">CAPITOLO IV</p>
          <h1 className="font-heading text-4xl sm:text-5xl text-[#E5E5E5] mb-4">CULTURA E PROPAGANDA</h1>
          <p className="font-body text-[#A0A0A0]">Il controllo delle menti</p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div className="bg-[#121212] border border-[#333333] p-6">
            <h3 className="font-heading text-[#D22B2B] text-lg mb-3">IL CULTO DELLA PERSONALITÀ</h3>
            <p className="font-body text-[#E5E5E5] text-sm mb-3">
              Stalin trasformato in figura semidivina: "Padre dei Popoli", "Sole delle Nazioni".
              Le foto venivano modificate per cancellare i "traditori".
            </p>
            <p className="font-body text-[#A0A0A0] text-xs">
              Il "Corso Breve" (1938): unica versione ammessa della storia sovietica.
            </p>
          </div>

          <div className="bg-[#121212] border border-[#333333] p-6">
            <h3 className="font-heading text-[#D22B2B] text-lg mb-3">IL REALISMO SOCIALISTA</h3>
            <p className="font-body text-[#E5E5E5] text-sm mb-3">
              Unico stile artistico ammesso dal 1934. L'arte doveva celebrare il socialismo.
              Avanguardie bandite. Šostakovič perseguitato per "formalismo".
            </p>
            <p className="font-body text-[#A0A0A0] text-xs italic">
              "L'arte per l'arte è decadenza borghese." - Ždanov
            </p>
          </div>

          <div className="bg-[#121212] border border-[#333333] p-6">
            <h3 className="font-heading text-[#D22B2B] text-lg mb-3">IL CASO LYSENKO</h3>
            <p className="font-body text-[#E5E5E5] text-sm">
              La genetica dichiarata "scienza borghese". Lysenko impose teorie pseudoscientifiche.
              Vavilov, il più grande genetista russo, morì in prigione (1943).
            </p>
          </div>

          <div className="bg-[#0a0a0a] border-2 border-[#D22B2B] p-6">
            <h3 className="font-heading text-[#D22B2B] text-lg mb-3">LA "GRANDE RITIRATA"</h3>
            <p className="font-body text-[#E5E5E5] text-sm">
              Ritorno ai valori conservatori: omosessualità criminalizzata (1933), aborto vietato (1936),
              esaltazione della famiglia tradizionale.
            </p>
          </div>
        </div>

        {/* Slogans */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          {[
            "Grazie Stalin per la nostra infanzia felice!",
            "La vita è diventata più allegra!"
          ].map((s, i) => (
            <div key={i} className="bg-[#121212] border border-[#333333] p-3">
              <p className="font-body text-[#C0A080] text-xs italic text-center">"{s}"</p>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <a href="/terrore" className="font-heading text-sm px-6 py-3 border border-[#333333] text-[#E5E5E5] hover:border-[#D22B2B] flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" /> CAPITOLO III
          </a>
          <a href="/guerra" className="font-heading text-sm px-6 py-3 bg-[#D22B2B] text-white hover:bg-[#B22222] flex items-center gap-2">
            CAPITOLO V <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CulturaPage;
