"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, Phone, Monitor, Wifi, Tv, ExternalLink, ChevronRight, 
  Laptop, Smartphone, HardDrive, Briefcase, Settings, Zap, ShieldCheck, History
} from "lucide-react";

// Componente do Ícone do Instagram
const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" 
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Home() {
  const words = [
    "Assistência Técnica.",
    "Venda de Equipamentos.",
    "Redes e Infraestrutura.",
    "Mídia e Tecnologia."
  ];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 40 : 80;
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setText(currentWord.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words]);

  const anoAtual = new Date().getFullYear();

  const servicos = [
    { icon: <Laptop size={32}/>, title: "Notebooks", desc: "Reparo de telas, teclados, baterias, limpeza e formatação completa." },
    { icon: <Monitor size={32}/>, title: "Computadores", desc: "Manutenção preventiva e corretiva, upgrade de peças e montagem." },
    { icon: <Smartphone size={32}/>, title: "Celulares & Tablets", desc: "Troca de tela, bateria, conectores e manutenção geral." },
    { icon: <HardDrive size={32}/>, title: "Vendas & Upgrade", desc: "Equipamentos, suprimentos, impressoras e upgrade para melhorar sua máquina." },
    { icon: <Briefcase size={32}/>, title: "Atendimento Empresarial", desc: "Suporte personalizado para empresas com contrato de manutenção." },
    { icon: <Settings size={32}/>, title: "Manutenção Geral", desc: "Diagnóstico completo e orçamento sem compromisso." },
    { icon: <Zap size={32}/>, title: "Atendimento Rápido", desc: "Serviços express para urgências do dia a dia." },
    { icon: <ShieldCheck size={32}/>, title: "Garantia", desc: "Todos os serviços com garantia e peças de qualidade." }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      
      {/* HEADER / NAVBAR */}
      <header className="fixed w-full top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <img src="/logo.png" alt="Ponto Com Logo" className="w-[120px] md:w-[140px] object-contain" />
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/pontocommachado/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-pink-500 transition-colors hidden sm:block"
            >
              <InstagramIcon size={24} />
            </a>
            <a 
              href="https://wa.me/553532954882" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 transition-colors px-4 py-2 md:px-6 md:py-2.5 rounded-full font-medium text-xs md:text-sm shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center gap-2"
            >
              <Phone size={16} />
              <span className="hidden sm:inline">Fale Conosco</span>
              <span className="sm:hidden">Contato</span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/p/AF1QipMW_mPtXfoZCwHnsvrPb7U2wiaK67B82EMU_wrL=s1360-w1360-h1020-rw')" }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-neutral-950/95 via-neutral-950/85 to-neutral-950" />
        
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs md:text-sm font-semibold tracking-wider mb-4 md:mb-6">
            TECNOLOGIA E INOVAÇÃO EM MACHADO
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white text-shadow-lg leading-tight">
            Sua parceira ideal para <br className="hidden md:block"/>
            <span className="text-blue-500 min-h-[1.2em] inline-block mt-2 md:mt-0">{text}</span>
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2">
            Nossa loja física tem tudo o que você precisa. Desde peças e manutenção especializada até as tecnologias mais avançadas para o seu negócio não parar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto px-4">
            <a 
              href="https://wa.me/553532954882" 
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-base md:text-lg transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(37,99,235,0.4)]"
            >
              Fazer Orçamento Agora
            </a>
            <a 
              href="https://www.instagram.com/pontocommachado/" 
              target="_blank"
              className="w-full sm:w-auto bg-neutral-800/80 hover:bg-neutral-700 backdrop-blur-md flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-base md:text-lg transition-all border border-neutral-700"
            >
              <InstagramIcon size={20} />
              Nosso Instagram
            </a>
          </div>
        </motion.div>
      </section>

      {/* SOBRE NÓS */}
      <section className="py-16 md:py-24 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-500 mb-6 border border-blue-500/20">
                <History size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                Mais de uma década de <span className="text-blue-500">confiança</span> e <span className="text-blue-500">qualidade</span>
              </h2>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-6">
                A Ponto Com Informática vem construindo uma história de compromisso com seus clientes em Machado e região. Com atendimento especializado, garantia e excelência em cada serviço, a empresa se destaca por oferecer soluções completas em informática.
              </p>
              <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                Nosso foco está sempre na <strong>agilidade, segurança e na melhor experiência</strong> para quem procura suporte de verdade. Seja para sua casa ou para sua empresa, nós entendemos a sua necessidade e entregamos o resultado.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <div className="relative rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-950 aspect-video md:aspect-square lg:aspect-video flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent z-10" />
                <img 
                  src="https://lh3.googleusercontent.com/p/AF1QipMW_mPtXfoZCwHnsvrPb7U2wiaK67B82EMU_wrL=s1360-w1360-h1020-rw" 
                  alt="Fachada da Loja Ponto Com Machado" 
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="bg-neutral-950/80 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-neutral-800">
                    <p className="text-blue-400 font-bold text-lg md:text-xl">Tradição & Inovação</p>
                    <p className="text-neutral-300 text-sm md:text-base mt-1">Evoluindo a cada dia para atender você melhor.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMO PODEMOS AJUDAR? */}
      <section className="py-16 md:py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Como podemos ajudar?</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-base md:text-lg px-4">
              Oferecemos soluções completas para seus dispositivos eletrônicos com a qualidade e agilidade que você merece.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {servicos.map((servico, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-900/40 p-6 md:p-8 rounded-3xl border border-neutral-800 hover:border-blue-500/50 hover:bg-neutral-900 transition-all group relative overflow-hidden flex flex-col items-center sm:items-start text-center sm:text-left"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 w-full flex flex-col items-center sm:items-start">
                  <div className="bg-blue-500/10 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-blue-500 mb-5 md:mb-6 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-lg">
                    {servico.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">{servico.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{servico.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO E FILIAIS */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto">
          
          {/* Unidade 1: Machado (Com Mapa 360) */}
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 order-2 lg:order-1"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Visite nossa Matriz</h2>
                <p className="text-neutral-400 text-base md:text-lg">
                  Nossa loja em Machado possui fácil acesso e um ambiente preparado para resolver qualquer demanda de TI.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-neutral-800 p-3 md:p-4 rounded-full text-blue-500 mt-1 shrink-0"><MapPin size={24} /></div>
                  <div>
                    <h4 className="text-white font-bold text-base md:text-lg">Endereço Principal (Machado)</h4>
                    <p className="text-neutral-400 mt-1 text-sm md:text-base">Rua Coronel José Paulino, 268<br/>Centro, Machado - MG<br/>CEP: 37750-000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-neutral-800 p-3 md:p-4 rounded-full text-blue-500 mt-1 shrink-0"><Phone size={24} /></div>
                  <div>
                    <h4 className="text-white font-bold text-base md:text-lg">Atendimento</h4>
                    <p className="text-neutral-400 mt-1 text-sm md:text-base">Fixo e WhatsApp: (35) 3295-4882</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full h-[350px] md:h-[450px] lg:h-[500px] bg-neutral-950 rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl relative group order-1 lg:order-2"
            >
              {/* O SEU LINK 360 OFICIAL FOI COLOCADO AQUI! */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!4v1778763333922!6m8!1m7!1szAQnp1_vsR7bAQKEli77SA!2m2!1d-21.67607625527547!2d-45.92113205404001!3f310.40808!4f0!5f0.7820865974627469" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 transition-all duration-500 opacity-90 group-hover:opacity-100"
              ></iframe>
              <div className="absolute bottom-4 left-4 right-4 bg-neutral-900/90 backdrop-blur-sm p-3 md:p-4 rounded-xl border border-neutral-800 flex items-center justify-between pointer-events-none hidden sm:flex">
                <span className="text-xs md:text-sm font-medium">Navegue pela nossa fachada em 360º</span>
                <ChevronRight className="text-blue-500 animate-pulse" />
              </div>
            </motion.div>
          </div>

          {/* Unidade 2: Poços de Caldas */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-gradient-to-br from-blue-900/30 via-neutral-900 to-neutral-950 border border-blue-500/30 rounded-[2rem] p-6 md:p-10 lg:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start relative z-10">
              <div className="bg-blue-600/20 p-5 rounded-3xl border border-blue-500/30 text-blue-400 shrink-0">
                <MapPin size={40} />
              </div>
              
              <div className="flex-1 text-center lg:text-left space-y-4">
                <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold rounded-full uppercase tracking-wider mb-2">
                  Expansão
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white">
                  Unidade 2: <span className="text-blue-400">Poços de Caldas</span>
                </h3>
                <p className="text-neutral-300 text-sm md:text-lg leading-relaxed text-justify lg:text-left">
                  Agora, esse compromisso também chega com força total a Poços de Caldas. Nossa segunda unidade foi criada para aproximar ainda mais a marca dos clientes da região, levando o mesmo padrão de atendimento, a mesma dedicação e a mesma busca pela melhor solução para cada necessidade. 
                </p>
                <p className="text-neutral-300 text-sm md:text-lg leading-relaxed text-justify lg:text-left">
                  Na Ponto Com, você encontra uma equipe pronta para atender com atenção, responsabilidade e a confiança de quem entende do assunto.
                </p>
              </div>

              <div className="shrink-0 w-full lg:w-auto flex justify-center lg:justify-end lg:mt-8">
                <a 
                  href="https://pontocompocos.tinformatica.app.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-full text-base font-bold transition-all transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(37,99,235,0.3)] whitespace-nowrap"
                >
                  Visitar Site da Unidade 2 <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-950 text-neutral-300 py-10 md:py-12 px-4 sm:px-6 border-t border-neutral-900 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left flex flex-col items-center md:items-start gap-4">
            <img src="/logo.png" alt="Ponto Com Logo" className="w-[100px] md:w-[120px] object-contain opacity-80" />
            <p className="text-xs md:text-sm text-neutral-500 max-w-xs">Soluções inteligentes em informática para você e sua empresa.</p>
          </div>

          <div className="text-center text-xs md:text-sm space-y-1 text-neutral-400">
            <p>&copy; {anoAtual} Ponto Com Informatica de Machado.</p>
            <p>Todos os direitos reservados.</p>
            <p className="font-mono mt-1 md:mt-2 text-[10px] md:text-xs">CNPJ: 07.282.326/0001-06</p>
          </div>

          <div className="text-center md:text-right flex flex-col items-center md:items-end gap-3 w-full md:w-auto">
            <a 
              href="https://www.instagram.com/pontocommachado/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-pink-500 transition-colors flex items-center justify-center gap-2 text-xs md:text-sm"
            >
              <InstagramIcon size={16} /> Siga no Instagram
            </a>
            <div className="bg-neutral-900 py-2 px-4 md:px-5 rounded-xl border border-neutral-800 shadow-inner mt-2 w-full md:w-auto">
              <p className="text-neutral-500 text-[10px] md:text-xs">
                Site desenvolvido pela{' '}
                <a 
                  href="https://grupozynsa.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 font-bold transition-colors"
                >
                  Grupo Zynsa
                </a>
              </p>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}