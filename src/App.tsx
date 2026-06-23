import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, HardHat, ChartBar, FileText, CheckCircle, ChevronRight, ChevronLeft, Phone, Mail, MapPin, AlertTriangle, Clock, Plus, Minus, Settings, Wrench, Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const portfolio = [
    {
      title: "Residência de Alto Padrão",
      desc: "Estruturação otimizada garantindo amplos vãos livres com segurança e economia de material.",
      img: "/projeto-residencial.jpg",
      fallback: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      category: "Residencial"
    },
    {
      title: "Sobrado Moderno",
      desc: "Cálculo preciso para sobrado. Dimensionamento de fundações evitando superdimensionamento.",
      img: "/projeto-sobrado.jpg",
      fallback: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80",
      category: "Residencial"
    },
    {
      title: "Edificação Comercial",
      desc: "Engenharia robusta para suportar cargas comerciais, com detalhamento executivo ágil.",
      img: "/projeto-comercial.png",
      fallback: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      category: "Comercial"
    }
  ];

  const wppLink = "https://wa.me/5521976283130?text=Olá!+Encontrei+o+seu+site+e+gostaria+de+solicitar+um+orçamento.";

  const faqs = [
    {
      q: "Por que investir em um projeto estrutural se o construtor já tem experiência?",
      a: "A experiência prática do construtor é essencial, mas apenas o cálculo estrutural exato garante que a sua obra terá a quantidade correta de aço e concreto. Construir sem projeto geralmente resulta em superdimensionamento ou risco de trincas."
    },
    {
      q: "O projeto estrutural vai encarecer a minha obra?",
      a: "Pelo contrário. O custo de um projeto estrutural representa uma fração mínima do valor da obra e, na grande maioria das vezes, se paga através da economia de materiais e na eliminação de retrabalhos."
    },
    {
      q: "Vocês atendem obras e projetos fora do estado?",
      a: "Sim. Realizamos projetos estruturais para todo o Brasil de forma remota, entregando todo o detalhamento necessário em formato digital. Para vistorias físicas e laudos, avaliamos a viabilidade de deslocamento."
    },
    {
      q: "Meu imóvel apresenta trincas e rachaduras. O que devo fazer?",
      a: "Anomalias estruturais precisam ser avaliadas tecnicamente o quanto antes para não comprometerem a estabilidade. Emitimos laudos periciais para identificar a causa raiz."
    }
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Wendel Engenharia | Especialistas em Estruturas</title>
        <meta name="description" content="Engenharia estrutural de ponta. Maximize seus lucros e garanta a segurança da sua obra." />
      </Helmet>

      <div className="min-h-screen bg-[#0E1E2E] font-sans text-gray-300 selection:bg-brand-primary selection:text-[#0E1E2E] flex flex-col">
        
        {/* TOP BAR */}
        <div className="bg-[#09131D] text-gray-400 py-3 px-6 lg:px-[60px] hidden md:flex justify-between items-center text-[13px] border-b border-white/5">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-primary" /> Atendimento Nacional - BR</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-brand-primary" /> contato@wendelengenharia.com.br</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-brand-primary" /> Seg - Sex: 08:00 - 18:00</span>
          </div>
        </div>

        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-[#0E1E2E] shadow-md border-b-4 border-brand-primary">
          <div className="px-6 lg:px-[60px] py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center transition-opacity hover:opacity-90 py-2">
              <img src="/logo.png" alt="Wendel Engenharia" className="h-11 md:h-14 lg:h-16 w-auto object-contain brightness-0 invert" />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10 lg:gap-12 font-display font-semibold text-[18px] uppercase text-white">
              <a href="#" className="hover:text-brand-primary transition-colors">Início</a>
              <a href="#sobre" className="hover:text-brand-primary transition-colors">Sobre</a>
              <a href="#servicos" className="hover:text-brand-primary transition-colors">Serviços</a>
              <a href="#portfolio" className="hover:text-brand-primary transition-colors">Projetos</a>
              <a href="#contato" className="hover:text-brand-primary transition-colors">Contato</a>
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-6">
              <div className="hidden xl:flex items-center gap-3 border-l-2 border-white/10 pl-6">
                 <div className="bg-brand-primary/10 p-3 rounded-full">
                   <Phone className="w-5 h-5 text-brand-primary" />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[11px] uppercase font-bold text-gray-400">Fale Conosco</span>
                   <span className="font-display font-bold text-white text-xl">(21) 97628-3130</span>
                 </div>
              </div>
              <a href={wppLink} target="_blank" rel="noopener noreferrer" className="hidden lg:flex bg-brand-primary text-[#0E1E2E] px-8 py-4 font-display font-bold uppercase tracking-wider hover:bg-white hover:text-[#0E1E2E] transition-all items-center gap-2">
                Orçamento <ArrowRight className="w-4 h-4" />
              </a>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white p-2">
                {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-[#09131D] text-white border-t border-white/10 overflow-hidden"
              >
                <nav className="flex flex-col p-6 gap-4 font-display text-lg uppercase tracking-wider">
                  <a href="#" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-primary">Início</a>
                  <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-primary">Sobre Nós</a>
                  <a href="#servicos" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-primary">Serviços</a>
                  <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-primary">Projetos</a>
                  <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-primary">Contato</a>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <main className="flex-1">
          {/* HERO SECTION */}
          <section className="relative px-6 lg:px-[60px] py-24 lg:py-[180px] flex flex-col justify-center overflow-hidden bg-[#09131D] isolate">
            <div className="absolute inset-0 z-0">
               <img src="https://images.unsplash.com/photo-1541888086225-ee5e006cb51b?q=80&w=2000&auto=format&fit=crop" alt="Construction Site" className="w-full h-full object-cover mix-blend-overlay opacity-30" />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-brand-primary text-[#0E1E2E] font-display font-bold tracking-widest uppercase mb-6 text-sm">
                <HardHat className="w-4 h-4" /> Engenharia Certificada
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-extrabold text-white uppercase leading-[1.05] tracking-tight mb-6">
                Projetos, Reforços e <span className="text-brand-primary text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-[#bde268]">Soluções Estruturais</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl font-light">
                Projetos estruturais focados em segurança, economia de material e excelência técnica. Evite surpresas e patologias na sua obra.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#servicos" className="bg-brand-primary text-[#0E1E2E] px-10 py-5 font-display font-bold uppercase tracking-widest text-lg hover:bg-white hover:text-[#0E1E2E] transition-all inline-flex items-center justify-center gap-2">
                  Nossos Serviços
                </a>
                <a href={wppLink} target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white text-white px-10 py-5 font-display font-bold uppercase tracking-widest text-lg hover:bg-white hover:text-[#0E1E2E] transition-all inline-flex items-center justify-center gap-2">
                  Fale Conosco
                </a>
              </div>
            </div>
          </section>

          {/* OVERLAPPING FEATURES */}
          <section className="relative z-20 px-6 lg:px-[60px] -mt-12 lg:-mt-20">
             <div className="grid md:grid-cols-3 shadow-2xl">
                {[
                  { icon: <Settings className="w-8 h-8"/>, title: "Otimização Real", desc: "Redução de custos com aço e concreto através do cálculo exato." },
                  { icon: <ShieldCheck className="w-8 h-8"/>, title: "Segurança Absoluta", desc: "Laudos e vistorias que atestam e garantem a integridade do seu imóvel." },
                  { icon: <Wrench className="w-8 h-8"/>, title: "Detalhamento Ágil", desc: "Projetos claros e executáveis que facilitam a vida no canteiro de obras." }
                ].map((feat, i) => (
                  <div key={i} className={`p-10 flex flex-col ${i === 1 ? 'bg-brand-primary text-[#0E1E2E]' : 'bg-[#152c42] text-white border-r border-b border-white/5'}`}>
                    <div className={`mb-6 p-4 inline-block ${i===1 ? 'bg-white/30' : 'bg-[#0E1E2E]/50'} rounded-full`}>
                       {feat.icon}
                    </div>
                    <h3 className="font-display font-bold text-2xl uppercase mb-3">{feat.title}</h3>
                    <p className={i === 1 ? 'text-[#0E1E2E]/80 font-medium' : 'text-gray-400'}>{feat.desc}</p>
                  </div>
                ))}
             </div>
          </section>

          {/* ABOUT SECTION */}
          <section id="sobre" className="py-20 lg:py-32 px-6 lg:px-[60px] bg-[#0E1E2E]">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-primary -z-10"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#09131D] -z-10"></div>
                <img src="/foto-wendel.jpeg" alt="Eng. Wendel" className="w-full h-[600px] object-cover shadow-xl" onError={(e) => { 
                    if (!e.currentTarget.src.includes("unsplash.com")) {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1541888086225-ee5e006cb51b?q=80&w=800&auto=format&fit=crop"; 
                    }
                }}/>
                <div className="absolute bottom-10 -right-10 bg-brand-primary p-8 shadow-2xl hidden md:block">
                   <div className="font-display font-extrabold text-6xl text-[#0E1E2E] leading-none">10+</div>
                   <div className="font-display font-bold uppercase text-[#0E1E2E] text-lg mt-2">Anos de<br/>Experiência</div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-12 h-[2px] bg-brand-primary"></div>
                  <span className="font-display font-bold uppercase tracking-widest text-brand-primary">Sobre Nós</span>
                </div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase text-white mb-6 leading-tight">
                  Trazendo Solidez Industrial Para o Seu Projeto
                </h2>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                  Engenheiro Civil com vasta experiência no campo de obra. Especialista em cálculo e projeto estrutural e pós-graduando em estruturas de concreto armado.
                  Minha missão é trazer a segurança e a eficiência da grande engenharia para o seu empreendimento, traduzindo conhecimento normativo em <strong className="text-white">economia real pra o seu bolso</strong>.
                </p>
                
                <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                  {[
                    "Projetos em Concreto Armado", "Estruturas Metálicas",
                    "Laudos de Vistoria", "Reforço Estrutural",
                    "Redução de Desperdícios", "Atendimento em todo o Brasil"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-medium text-gray-200">
                      <CheckCircle className="w-5 h-5 text-brand-primary shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                  <img src="https://ui-avatars.com/api/?name=Wendel+Engenharia&background=111111&color=9EC050&rounded=true" alt="Signature" className="w-16 h-16 rounded-full" />
                  <div>
                    <h4 className="font-display font-bold text-xl uppercase text-white">Wendel</h4>
                    <span className="text-brand-primary font-bold uppercase tracking-widest text-[11px]">Engenheiro Responsável</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SERVICES SECTION */}
          <section id="servicos" className="py-20 lg:py-32 bg-[#09131D] px-6 lg:px-[60px]">
             <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-[2px] bg-brand-primary"></div>
                  <span className="font-display font-bold uppercase tracking-widest text-brand-primary">Nossos Serviços</span>
                  <div className="w-8 h-[2px] bg-brand-primary"></div>
                </div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase text-white">
                  Soluções de Alta Performance
                </h2>
             </div>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { title: "Projeto Estrutural", desc: "Dimensionamento completo para residências e comércios. Foco em estabilidade e redução de sobra de material.", icon: <HardHat className="w-10 h-10" /> },
                 { title: "Laudos Periciais", desc: "Análise patológica de trincas, fissuras e anomalias na edificação. Emissão de parecer técnico detalhado.", icon: <FileText className="w-10 h-10" /> },
                 { title: "Reforço Estrutural", desc: "Projetos de intervenção para aumento de capacidade de carga ou recuperação de estruturas desgastadas.", icon: <Settings className="w-10 h-10" /> }
               ].map((svc, i) => (
                 <div key={i} className="bg-[#152C42] border border-white/5 p-10 group hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl">
                   <div className="w-20 h-20 bg-[#0E1E2E] flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-[#0E1E2E] transition-colors">
                     {svc.icon}
                   </div>
                   <h3 className="font-display text-2xl font-bold uppercase text-white mb-4">{svc.title}</h3>
                   <p className="text-gray-400 mb-6">{svc.desc}</p>
                   <a href={wppLink} target="_blank" rel="noopener" className="inline-flex items-center gap-2 font-display font-bold uppercase tracking-wider text-sm text-white hover:text-brand-primary transition-colors">
                     Saber Mais <ArrowRight className="w-4 h-4" />
                   </a>
                 </div>
               ))}
             </div>
          </section>

          {/* PORTFOLIO SECTION */}
          <section id="portfolio" className="py-20 lg:py-32 px-6 lg:px-[60px] bg-[#0E1E2E]">
             <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
               <div className="max-w-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-12 h-[2px] bg-brand-primary"></div>
                    <span className="font-display font-bold uppercase tracking-widest text-brand-primary">Nossos Projetos</span>
                  </div>
                  <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase text-white">
                    Obras Planejadas Com Precisão
                  </h2>
               </div>
               <a href={wppLink} target="_blank" rel="noopener noreferrer" className="bg-[#152C42] text-white px-8 py-4 font-display font-bold uppercase tracking-wider hover:bg-brand-primary hover:text-[#0E1E2E] transition-colors">
                 Ver Todos os Projetos
               </a>
             </div>
             
             <div className="grid lg:grid-cols-3 gap-8">
               {portfolio.map((item, i) => (
                 <div key={i} className="group relative overflow-hidden bg-brand-dark">
                    <img 
                      src={item.img} 
                      onError={(e) => { 
                         if (e.currentTarget.src !== item.fallback) {
                           e.currentTarget.src = item.fallback; 
                         }
                      }}
                      alt={item.title}
                      className="w-full h-[400px] object-cover opacity-80 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                       <span className="bg-brand-primary text-brand-dark px-3 py-1 font-bold uppercase tracking-widest text-[11px] self-start mb-3">
                         {item.category}
                       </span>
                       <h3 className="font-display text-2xl font-bold uppercase text-white mb-2">{item.title}</h3>
                       <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                         {item.desc}
                       </p>
                    </div>
                 </div>
               ))}
             </div>
          </section>

          {/* WHY CHOOSE US / FAQ */}
          <section className="py-20 lg:py-32 px-6 lg:px-[60px] bg-[#09131D] text-white isolate relative">
            <div className="absolute inset-0 z-0">
               <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop" alt="Blueprint" className="w-full h-full object-cover opacity-5" />
            </div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-16">
               <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-12 h-[2px] bg-brand-primary"></div>
                    <span className="font-display font-bold uppercase tracking-widest text-brand-primary">FAQ</span>
                  </div>
                  <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase mb-8 leading-tight">
                    Dúvidas Frequentes
                  </h2>
                  <p className="text-gray-400 mb-10 text-lg">
                    Construir não precisa ser uma dor de cabeça. Solucionamos as principais dúvidas para que você inicie sua obra com total confiança.
                  </p>
                  
                  <div className="flex flex-col gap-4">
                    {faqs.map((faq, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10">
                        <button 
                          onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/10 transition-colors focus:outline-none"
                        >
                          <span className="font-display text-lg uppercase font-semibold pr-8">{faq.q}</span>
                          <span className={`shrink-0 p-2 border transition-colors ${openFaq === idx ? 'border-brand-primary text-brand-primary' : 'border-white/20 text-white'}`}>
                            {openFaq === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                          </span>
                        </button>
                        <AnimatePresence>
                          {openFaq === idx && (
                            <motion.div
                              key={`faq-${idx}`}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden bg-brand-primary text-[#0E1E2E]"
                            >
                              <div className="px-6 py-6 font-medium text-[15px] leading-relaxed">
                                {faq.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
               </div>
               
               <div className="bg-brand-primary p-12 text-[#0E1E2E] flex flex-col justify-center shadow-2xl">
                 <h3 className="font-display text-4xl font-extrabold uppercase mb-6">Precisa de um Consultor Imediato?</h3>
                 <p className="text-[#0E1E2E]/80 font-medium mb-10 text-lg">
                   Estamos prontos para analisar sua situação e enviar um orçamento customizado sem compromisso.
                 </p>
                 <div className="flex flex-col gap-6">
                   <div className="flex items-center gap-6 bg-[#0E1E2E] text-white p-6">
                     <Phone className="w-10 h-10 text-brand-primary" />
                     <div>
                       <span className="block text-sm uppercase font-bold text-gray-400 mb-1">Ligue ou Envie Mensagem</span>
                       <span className="font-display font-extrabold text-2xl">(21) 97628-3130</span>
                     </div>
                   </div>
                   <a href={wppLink} target="_blank" rel="noopener noreferrer" className="bg-[#0E1E2E] text-white px-8 py-5 font-display font-bold uppercase tracking-wider hover:bg-white hover:text-[#0E1E2E] transition-all text-center text-lg">
                     Enviar WhatsApp Agora
                   </a>
                 </div>
               </div>
            </div>
          </section>

        </main>

        {/* FOOTER */}
        <footer className="bg-[#09131D] text-gray-400">
            <div className="px-6 lg:px-[60px] py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/5">
              {/* Col 1 */}
              <div>
                <img src="/logo.png" alt="Wendel Engenharia" className="h-11 md:h-14 w-auto object-contain mb-6 brightness-0 invert" />
                <p className="mb-6 leading-relaxed">
                  Engenharia focada na viabilidade estrutural e na segurança do patrimônio, entregando excelência para construções de diversos portes.
                </p>
              </div>
              
              {/* Col 2 */}
              <div>
                 <h4 className="font-display font-bold text-xl uppercase text-white mb-6">Navegação</h4>
                 <ul className="flex flex-col gap-3 font-medium">
                   <li><a href="#" className="hover:text-brand-primary transition-colors">Início</a></li>
                   <li><a href="#sobre" className="hover:text-brand-primary transition-colors">Sobre Nós</a></li>
                   <li><a href="#servicos" className="hover:text-brand-primary transition-colors">Nossos Serviços</a></li>
                   <li><a href="#portfolio" className="hover:text-brand-primary transition-colors">Portfólio de Obras</a></li>
                 </ul>
              </div>

              {/* Col 3 */}
              <div>
                 <h4 className="font-display font-bold text-xl uppercase text-white mb-6">Serviços</h4>
                 <ul className="flex flex-col gap-3 font-medium">
                   <li><a href="#" className="hover:text-brand-primary transition-colors">Projetos Residenciais</a></li>
                   <li><a href="#" className="hover:text-brand-primary transition-colors">Estruturas Comerciais</a></li>
                   <li><a href="#" className="hover:text-brand-primary transition-colors">Laudos Periciais</a></li>
                   <li><a href="#" className="hover:text-brand-primary transition-colors">Reforço de Fundação</a></li>
                 </ul>
              </div>

              {/* Col 4 */}
              <div>
                 <h4 className="font-display font-bold text-xl uppercase text-white mb-6">Contato</h4>
                 <ul className="flex flex-col gap-4">
                   <li className="flex items-start gap-4">
                     <MapPin className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                     <span>Atendimento Remoto e Nacional (Base no Brasil)</span>
                   </li>
                   <li className="flex items-start gap-4">
                     <Mail className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                     <span>contato@wendelengenharia.com.br</span>
                   </li>
                   <li className="flex items-start gap-4">
                     <Phone className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                     <span className="font-display text-white text-lg">(21) 97628-3130</span>
                   </li>
                 </ul>
              </div>
           </div>

           <div className="px-6 lg:px-[60px] py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm bg-[#04080C]">
              <p>&copy; {new Date().getFullYear()} Wendel Engenharia. Todos os direitos reservados.</p>
              <div className="flex gap-4">
                <span className="text-gray-500">CREA: 12345678-9</span>
              </div>
           </div>
        </footer>
      </div>
    </HelmetProvider>
  );
}
