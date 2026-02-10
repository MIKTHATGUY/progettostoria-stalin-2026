import { ChevronRight, ChevronLeft } from "lucide-react";

const TardoStalinismoPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16 px-4" data-testid="tardostalinismo-page">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-body text-[#D22B2B] text-sm tracking-[0.3em] mb-4">CAPITOLO VI</p>
          <h1 className="font-heading text-4xl sm:text-5xl text-[#E5E5E5] mb-4">LA FINE DI UN'ERA</h1>
          <p className="font-body text-[#A0A0A0]">1945-1953</p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div className="bg-[#121212] border border-[#333333] p-6">
            <h3 className="font-heading text-[#D22B2B] text-lg mb-3">IL DOPOGUERRA</h3>
            <p className="font-body text-[#E5E5E5] text-sm">
              Nessuna liberalizzazione. I reduci che avevano visto l'Occidente erano sospetti.
              Milioni finirono nei Gulag. Intere popolazioni deportate (Ceceni, Tatari di Crimea).
            </p>
          </div>

          <div className="bg-[#121212] border border-[#333333] p-6">
            <h3 className="font-heading text-[#D22B2B] text-lg mb-3">CAMPAGNA CONTRO IL "COSMOPOLITISMO"</h3>
            <p className="font-body text-[#E5E5E5] text-sm">
              Antisemitismo di Stato (1948-53). Gli ebrei accusati di essere "agenti dell'imperialismo".
              Il Comitato Antifascista Ebraico liquidato, i suoi membri fucilati.
            </p>
          </div>

          <div className="bg-[#121212] border border-[#333333] p-6">
            <h3 className="font-heading text-[#D22B2B] text-lg mb-3">IL COMPLOTTO DEI MEDICI (1953)</h3>
            <p className="font-body text-[#E5E5E5] text-sm">
              Ultima paranoia: medici (ebrei) accusati di voler avvelenare la leadership.
              Si preparava una nuova grande purga. La morte di Stalin fermò tutto.
            </p>
          </div>

          <div className="bg-[#0a0a0a] border-2 border-[#D22B2B] p-6">
            <h3 className="font-heading text-[#D22B2B] text-lg mb-3">LA MORTE (5 MARZO 1953)</h3>
            <p className="font-body text-[#E5E5E5] text-sm mb-3">
              Stalin trovato privo di sensi nella sua dacia. Le guardie non osarono entrare per ore.
              Morì dopo 3 giorni di agonia.
            </p>
            <p className="font-body text-[#A0A0A0] text-xs italic">
              "Alla fine aprì gli occhi e fece un gesto con la mano, come se ci maledisse tutti." - Svetlana Stalin
            </p>
          </div>

          <div className="bg-[#121212] border border-[#C0A080] p-6">
            <h3 className="font-heading text-[#C0A080] text-lg mb-3">DOPO STALIN</h3>
            <p className="font-body text-[#E5E5E5] text-sm">
              1956: Chruščёv denuncia i crimini di Stalin al XX Congresso. Milioni liberati dai Gulag.
              Ma il sistema sopravvisse fino al 1991.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <a href="/guerra" className="font-heading text-sm px-6 py-3 border border-[#333333] text-[#E5E5E5] hover:border-[#D22B2B] flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" /> CAPITOLO V
          </a>
          <a href="/conclusione" className="font-heading text-sm px-6 py-3 bg-[#D22B2B] text-white hover:bg-[#B22222] flex items-center gap-2">
            CONCLUSIONE <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TardoStalinismoPage;
