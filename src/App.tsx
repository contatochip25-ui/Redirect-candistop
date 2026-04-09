import { ArrowRight, ShieldCheck, Clock } from "lucide-react";

export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#fff5f7] to-white">
      <div className="max-w-xl w-full flex flex-col items-center text-center space-y-8 bg-white p-8 sm:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-pink-50">
        
        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-semibold tracking-wide uppercase">
          <Clock className="w-4 h-4" />
          <span>Último Dia</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          Acabe com o mau cheiro, corrimento e coceiras de <span className="text-pink-600 italic">forma natural</span>
        </h1>

        {/* Subheadline */}
        <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-md">
          Tratamento 100% natural que já ajudou milhares de mulheres — e o melhor: <strong>você só paga depois que receber na sua casa.</strong>
        </p>

        {/* CTA Section */}
        <div className="w-full flex flex-col items-center gap-4 pt-4">
          <a 
            href="https://wa.me/556281434297?text=Olá%2C%20como%20funciona%20a%20promoção?" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-[0_4px_14px_0_rgb(219,39,119,0.39)] hover:shadow-[0_6px_20px_rgba(219,39,119,0.23)] hover:-translate-y-0.5"
          >
            <span>QUERO RECEBER E PAGAR DEPOIS</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          {/* Trust/Scarcity Indicators */}
          <div className="flex flex-col items-center gap-2 text-sm text-gray-500">
            <div className="flex items-center gap-1.5 text-green-600 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Compra 100% Segura</span>
            </div>
            <p>✔️ Estoque limitado para hoje</p>
          </div>
        </div>

      </div>
    </main>
  );
}
