import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, HardHat, ChartBar, FileText, CheckCircle, ChevronRight, ChevronLeft, Phone, Mail, MapPin, AlertTriangle, Clock, Plus, Minus, Settings, Wrench, Menu, X, ArrowRight } from 'lucide-react';
import { useState, useRef } from 'react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeGallery, setActiveGallery] = useState<{images: string[], index: number} | null>(null);
  const [allProjectsModalOpen, setAllProjectsModalOpen] = useState(false);
  const [activePolicyModal, setActivePolicyModal] = useState<'privacy' | 'terms' | 'cookies' | null>(null);
  const [activeServiceModal, setActiveServiceModal] = useState<{
    title: string;
    desc: string;
    items: { name: string; summary: string }[];
  } | null>(null);

  const projectsScrollRef = useRef<HTMLDivElement>(null);

  const projectsList = [
    {
      title: "Edificação Comercial",
      desc: "Engenharia robusta para suportar cargas comerciais, com detalhamento executivo ágil.",
      img: "/projeto-comercial.jpg",
      gallery: [
        "/projeto-comercial.jpg",
        "/projeto-comercial_1.jpg",
        "/projeto-comercial_2.jpg",
        "/projeto-comercial_3.jpg",
        "/projeto-comercial_4.jpg",
        "/projeto-comercial_5.jpg",
        "/projeto-comercial_6.jpg",
        "/projeto-comercial_7.jpg",
        "/projeto-comercial-8.jpg",
        "/projeto-comercial-9.jpg",
        "/projeto-comercial-10.jpg",
        "/projeto-comercial-11.jpg",
        "/projeto-comercial-12.jpg"
      ],
      fallback: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      category: "Comercial"
    },
    {
      title: "Sobrado de Alto Padrão 388m²",
      desc: "Projeto estrutural de sobrado contemporâneo com 388m², otimizando balanços e vãos amplos.",
      img: "/projeto-sobrado-388m2.jpg",
      gallery: [
        "/projeto-sobrado-388m2.jpg",
        "/projeto-sobrado-388m2-.jpg",
        "/projeto-sobrado-388m2-3.jpg",
        "/projeto-sobrado-388m2-4.jpg",
        "/projeto-sobrado-388m2-5.jpg",
        "/projeto-sobrado-388m2-6.png"
      ],
      fallback: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      category: "Residencial"
    },
    {
      title: "Prédio Comercial 04 Pavimentos",
      desc: "Cálculo e dimensionamento em concreto armado focado na capacidade de carga e agilidade executiva.",
      img: "/projeto-comercial-predio-04-pavimentos-1.png",
      gallery: [
        "/projeto-comercial-predio-04-pavimentos-1.png",
        "/projeto-comercial-predio-04-pavimentos-2.png",
        "/projeto-comercial-predio-04-pavimentos-3.png",
        "/projeto-comercial-predio-04-pavimentos-4.png",
        "/projeto-comercial-predio-04-pavimentos-5.png"
      ],
      fallback: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      category: "Comercial"
    }
  ];

  const servicesList = [
    {
      title: "Projeto Estrutural",
      desc: "Dimensionamento normativo completo para residências, comércios e edificações de múltiplos pavimentos.",
      icon: <HardHat className="w-10 h-10" />,
      items: [
        { name: "Especialista em concreto armado", summary: "Dimensionamento normativo rigoroso conforme NBR 6118, garantindo máxima solidez e durabilidade." },
        { name: "Projetos Estruturais", summary: "Plantas claras, detalhadas e 100% compatibilizadas para facilitar a leitura e montagem na obra." },
        { name: "Cálculo Estrutural", summary: "Análise avançada de cargas e esforços para eliminar desperdícios de superdimensionamento." },
        { name: "Estruturas Metálicas", summary: "Dimensionamento de perfis e conexões para galpões, mezaninos, coberturas e grandes vãos livres." }
      ]
    },
    {
      title: "Laudos Técnicos Periciais",
      desc: "Diagnóstico especializado e fundamentado para patologias construtivas e vistorias cautelares.",
      icon: <FileText className="w-10 h-10" />,
      items: [
        { name: "Laudos Técnicos Periciais", summary: "Vistoria técnica minuciosa para diagnóstico de patologias (trincas, fissuras, recalques), com emissão de parecer e ART com validade jurídica." }
      ]
    },
    {
      title: "Reforço Estrutural",
      desc: "Soluções de engenharia para reabilitação, ampliações de área ou aumento de capacidade de carga.",
      icon: <Settings className="w-10 h-10" />,
      items: [
        { name: "Projetos de Muros de Contenção e Arrimo", summary: "Estabilização segura de taludes, encostas e desníveis com cálculo geotécnico otimizado contra deslizamentos." },
        { name: "Piscinas (Concreto Armado)", summary: "Projeto estrutural impermeável e de alta resistência para piscinas residenciais ou comerciais de todos os formatos." }
      ]
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Wendel Engenharia",
            "description": "Escritório de Engenharia Civil especializado em Cálculos Estruturais, Projetos de Concreto Armado, Estruturas Metálicas, Reforço Estrutural, Fundações e Laudos Técnicos Periciais.",
            "url": "https://wendelengenharia.com.br",
            "logo": "https://wendelengenharia.com.br/logo.png",
            "image": "https://wendelengenharia.com.br/projeto-comercial.jpg",
            "telephone": "+55-21-97628-3130",
            "email": "wendel.legalizacoes@gmail.com",
            "priceRange": "$$$",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "BR",
              "addressRegion": "RJ"
            },
            "sameAs": [
              "https://api.whatsapp.com/send?phone=5521976283130"
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#0E1E2E] font-sans text-gray-300 selection:bg-brand-primary selection:text-[#0E1E2E] flex flex-col">
        
        {/* TOP BAR */}
        <div className="bg-[#09131D] text-gray-400 py-3 px-6 lg:px-[60px] hidden md:flex justify-between items-center text-[13px] border-b border-white/5">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-primary" /> Atendimento Nacional - BR</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-brand-primary" /> wendel.legalizacoes@gmail.com</span>
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
               {servicesList.map((svc, i) => (
                 <div 
                   key={i} 
                   onClick={() => setActiveServiceModal(svc)}
                   className="bg-[#152C42] border border-white/5 p-10 group hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer hover:border-brand-primary/40 flex flex-col justify-between"
                 >
                   <div>
                     <div className="w-20 h-20 bg-[#0E1E2E] flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-[#0E1E2E] transition-colors">
                       {svc.icon}
                     </div>
                     <h3 className="font-display text-2xl font-bold uppercase text-white mb-4">{svc.title}</h3>
                     <p className="text-gray-400 mb-6 font-light leading-relaxed">{svc.desc}</p>
                   </div>
                   <div className="inline-flex items-center gap-2 font-display font-bold uppercase tracking-wider text-sm text-white group-hover:text-brand-primary pt-4 border-t border-white/5 transition-colors">
                     <span>Ver Resumo Completo</span> <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                   </div>
                 </div>
               ))}
             </div>
          </section>

          {/* PORTFOLIO SECTION */}
          <section id="portfolio" className="py-20 lg:py-32 px-6 lg:px-[60px] bg-[#0E1E2E] overflow-hidden">
             <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
               <div className="max-w-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-12 h-[2px] bg-brand-primary"></div>
                    <span className="font-display font-bold uppercase tracking-widest text-brand-primary">Nossos Projetos</span>
                  </div>
                  <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase text-white">
                    Obras Lado a Lado
                  </h2>
               </div>
               <div className="flex items-center gap-4">
                 <div className="flex gap-2 mr-2">
                   <button 
                     onClick={() => projectsScrollRef.current?.scrollBy({ left: -450, behavior: 'smooth' })}
                     className="w-12 h-12 border border-white/20 bg-[#152C42] text-white hover:bg-brand-primary hover:text-[#0E1E2E] hover:border-brand-primary transition-all flex items-center justify-center cursor-pointer"
                     title="Anterior"
                   >
                     <ChevronLeft className="w-6 h-6" />
                   </button>
                   <button 
                     onClick={() => projectsScrollRef.current?.scrollBy({ left: 450, behavior: 'smooth' })}
                     className="w-12 h-12 border border-white/20 bg-[#152C42] text-white hover:bg-brand-primary hover:text-[#0E1E2E] hover:border-brand-primary transition-all flex items-center justify-center cursor-pointer"
                     title="Próximo"
                   >
                     <ChevronRight className="w-6 h-6" />
                   </button>
                 </div>
                 <button 
                   onClick={() => setAllProjectsModalOpen(true)}
                   className="bg-[#152C42] text-white px-8 py-3.5 font-display font-bold uppercase tracking-wider hover:bg-brand-primary hover:text-[#0E1E2E] transition-colors cursor-pointer text-sm hidden sm:block"
                 >
                   Ver Todos ({projectsList.length})
                 </button>
               </div>
             </div>
             
             <div 
               ref={projectsScrollRef}
               className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-8 pt-2 scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
             >
               {projectsList.map((item, i) => (
                 <div 
                   key={i} 
                   className="group relative overflow-hidden bg-[#09131D] cursor-pointer ring-1 ring-white/10 hover:ring-2 hover:ring-brand-primary transition-all duration-300 min-w-[320px] sm:min-w-[400px] lg:min-w-[460px] snap-start shrink-0 flex flex-col rounded-sm"
                   onClick={() => setActiveGallery({ images: item.gallery, index: 0 })}
                 >
                    <div className="relative h-[380px] overflow-hidden bg-[#09131D]">
                      <img 
                        src={item.img} 
                        onError={(e) => { 
                           if (e.currentTarget.src !== item.fallback) {
                             e.currentTarget.src = item.fallback; 
                           }
                        }}
                        alt={item.title}
                        className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-[#0E1E2E]/90 backdrop-blur px-3.5 py-1.5 font-display font-bold uppercase tracking-wider text-xs text-brand-primary border border-brand-primary/30">
                        {item.category}
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur px-3 py-1 text-xs text-white uppercase font-display tracking-wider border border-white/10">
                        {item.gallery.length} Fotos
                      </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col justify-between border-t border-white/5 bg-[#09131D]">
                       <div>
                         <h3 className="font-display text-2xl font-bold uppercase text-white mb-3 group-hover:text-brand-primary transition-colors">{item.title}</h3>
                         <p className="text-gray-400 text-sm font-light leading-relaxed mb-6 line-clamp-3">
                           {item.desc}
                         </p>
                       </div>
                       <div className="flex items-center gap-2 text-brand-primary text-xs uppercase font-display font-bold tracking-wider pt-4 border-t border-white/5">
                         <span>Abrir Galeria de Fotos</span> <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                       </div>
                    </div>
                 </div>
               ))}
             </div>

             <div className="mt-6 sm:hidden text-center">
               <button 
                 onClick={() => setAllProjectsModalOpen(true)}
                 className="bg-[#152C42] text-white px-8 py-4 font-display font-bold uppercase tracking-wider hover:bg-brand-primary hover:text-[#0E1E2E] transition-colors cursor-pointer text-sm w-full"
               >
                 Ver Todos os Projetos ({projectsList.length})
               </button>
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
                     <span>wendel.legalizacoes@gmail.com</span>
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
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm">
                <button onClick={() => setActivePolicyModal('privacy')} className="text-gray-400 hover:text-brand-primary transition-colors cursor-pointer">Política de Privacidade</button>
                <button onClick={() => setActivePolicyModal('terms')} className="text-gray-400 hover:text-brand-primary transition-colors cursor-pointer">Termos de Uso</button>
                <button onClick={() => setActivePolicyModal('cookies')} className="text-gray-400 hover:text-brand-primary transition-colors cursor-pointer">Política de Cookies</button>
                <span className="text-gray-700 hidden sm:inline">|</span>
                <span className="text-gray-500">CREA: 12345678-9</span>
              </div>
           </div>
        </footer>

        {/* ALL PROJECTS MODAL */}
        <AnimatePresence>
          {allProjectsModalOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 p-4 lg:p-8 backdrop-blur-sm"
              onClick={() => setAllProjectsModalOpen(false)}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-[#0E1E2E] border border-white/10 w-full max-w-6xl max-h-[90vh] flex flex-col shadow-2xl rounded-sm overflow-hidden relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="p-6 lg:px-10 lg:py-8 bg-[#09131D] border-b border-white/10 flex items-center justify-between shrink-0">
                  <div>
                    <span className="text-brand-primary text-xs tracking-[0.2em] uppercase font-bold font-display">Portfólio Completo</span>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold uppercase text-white mt-1 tracking-tight">Todos os Projetos de Engenharia</h3>
                  </div>
                  <button 
                    onClick={() => setAllProjectsModalOpen(false)}
                    className="text-gray-400 hover:text-brand-primary p-2 transition-colors flex items-center gap-2 font-display uppercase font-bold text-sm cursor-pointer"
                  >
                    <span>Fechar</span>
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Modal Grid */}
                <div className="p-6 lg:p-10 overflow-y-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projectsList.map((item, i) => (
                    <div 
                      key={i} 
                      className="group relative overflow-hidden bg-[#09131D] cursor-pointer ring-1 ring-white/10 hover:ring-2 hover:ring-brand-primary transition-all duration-300 flex flex-col rounded-sm"
                      onClick={() => setActiveGallery({ images: item.gallery, index: 0 })}
                    >
                      <div className="relative h-64 overflow-hidden bg-[#09131D]">
                        <img 
                          src={item.img} 
                          onError={(e) => { 
                             if (e.currentTarget.src !== item.fallback) {
                               e.currentTarget.src = item.fallback;
                             }
                          }}
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                        />
                        <div className="absolute top-4 left-4 bg-[#0E1E2E]/90 backdrop-blur px-3 py-1 text-xs uppercase font-display font-semibold tracking-wider text-brand-primary border border-brand-primary/30">
                          {item.category}
                        </div>
                      </div>
                      <div className="p-6 bg-[#09131D] flex-1 flex flex-col justify-between border-t border-white/5">
                        <div>
                          <h4 className="font-display font-bold text-xl uppercase text-white mb-3 group-hover:text-brand-primary transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed font-light">
                            {item.desc}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-brand-primary text-xs uppercase font-display font-bold tracking-wider pt-4 border-t border-white/5">
                          <span>Ver Galeria ({item.gallery.length} fotos)</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SERVICE POPUP MODAL */}
        <AnimatePresence>
          {activeServiceModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[95] flex items-center justify-center bg-black/85 p-4 lg:p-8 backdrop-blur-sm"
              onClick={() => setActiveServiceModal(null)}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-[#0E1E2E] border border-white/15 w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl rounded-sm overflow-hidden relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="p-6 lg:px-10 lg:py-8 bg-[#09131D] border-b border-white/10 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#152C42] flex items-center justify-center text-brand-primary rounded-sm border border-brand-primary/20">
                      {activeServiceModal.icon}
                    </div>
                    <div>
                      <span className="text-brand-primary text-xs tracking-[0.2em] uppercase font-bold font-display">Resumo Técnico</span>
                      <h3 className="font-display text-2xl lg:text-3xl font-bold uppercase text-white mt-1 tracking-tight">{activeServiceModal.title}</h3>
                    </div>
                  </div>
                  <button 
                    onClick={() => setActiveServiceModal(null)}
                    className="text-gray-400 hover:text-brand-primary p-2 transition-colors flex items-center gap-2 font-display uppercase font-bold text-sm cursor-pointer"
                  >
                    <span>Fechar</span>
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 lg:p-10 overflow-y-auto flex flex-col gap-8">
                  <p className="text-gray-300 text-lg font-light leading-relaxed border-l-2 border-brand-primary pl-4 bg-white/5 py-3 pr-4">
                    {activeServiceModal.desc}
                  </p>

                  <div>
                    <h4 className="font-display font-bold uppercase tracking-wider text-sm text-brand-primary mb-6">
                      Especialidades & Detalhamentos desta Categoria:
                    </h4>
                    <div className="grid gap-4">
                      {activeServiceModal.items.map((sub, idx) => (
                        <div key={idx} className="bg-[#152C42]/60 border border-white/5 p-5 rounded-sm hover:border-brand-primary/30 transition-colors">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                            <div>
                              <h5 className="font-display font-bold text-white uppercase text-base mb-1.5">{sub.name}</h5>
                              <p className="text-gray-400 text-sm font-light leading-relaxed">{sub.summary}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-gray-400 text-sm">Gostaria de tirar dúvidas ou calcular seu projeto?</span>
                    <a 
                      href={wppLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-brand-primary text-[#0E1E2E] px-8 py-4 font-display font-bold uppercase tracking-wider hover:bg-white transition-colors text-sm flex items-center justify-center gap-2 w-full sm:w-auto"
                    >
                      Solicitar Orçamento no WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* IMAGE POPUP MODAL */}
        <AnimatePresence>
          {activeGallery && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
              onClick={() => setActiveGallery(null)}
            >
              <div className="absolute top-6 left-6 lg:top-10 lg:left-10 text-white font-display font-bold uppercase tracking-widest text-sm bg-black/60 px-4 py-2 rounded-full border border-white/10 z-[110]">
                Foto {activeGallery.index + 1} de {activeGallery.images.length}
              </div>

              <button 
                onClick={(e) => { e.stopPropagation(); setActiveGallery(null); }}
                className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white hover:text-brand-primary transition-colors flex items-center gap-2 font-display font-bold uppercase tracking-wider text-sm z-[110]"
              >
                <span>Fechar</span>
                <X className="w-8 h-8" />
              </button>

              {activeGallery.images.length > 1 && (
                <>
                  <button 
                    onClick={(e) => { 
                      e.stopPropagation(); 
                      setActiveGallery(prev => prev ? { ...prev, index: prev.index === 0 ? prev.images.length - 1 : prev.index - 1 } : null) 
                    }}
                    className="absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 text-white hover:text-brand-primary z-[110] transition-colors p-2 bg-black/50 rounded-full"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>

                  <button 
                    onClick={(e) => { 
                      e.stopPropagation(); 
                      setActiveGallery(prev => prev ? { ...prev, index: prev.index === prev.images.length - 1 ? 0 : prev.index + 1 } : null) 
                    }}
                    className="absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 text-white hover:text-brand-primary z-[110] transition-colors p-2 bg-black/50 rounded-full"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}

              <AnimatePresence mode="wait">
                <motion.img
                  key={activeGallery.index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  src={activeGallery.images[activeGallery.index]}
                  alt={`Projeto Ampliado ${activeGallery.index + 1}`}
                  className="w-auto max-w-full max-h-[90vh] object-contain shadow-2xl relative z-[105]"
                  onClick={(e) => e.stopPropagation()}
                />
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {/* POLICY MODALS */}
        <AnimatePresence>
          {activePolicyModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 p-4 lg:p-8 backdrop-blur-sm"
              onClick={() => setActivePolicyModal(null)}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-[#0E1E2E] border border-white/15 w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl rounded-sm overflow-hidden relative text-left"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 lg:px-10 lg:py-8 bg-[#09131D] border-b border-white/10 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#152C42] flex items-center justify-center text-brand-primary rounded-sm border border-brand-primary/20">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-xl lg:text-2xl font-bold uppercase text-white tracking-tight">
                      {activePolicyModal === 'privacy' && 'Política de Privacidade'}
                      {activePolicyModal === 'terms' && 'Termos de Uso'}
                      {activePolicyModal === 'cookies' && 'Política de Cookies'}
                    </h3>
                  </div>
                  <button 
                    onClick={() => setActivePolicyModal(null)}
                    className="text-gray-400 hover:text-brand-primary p-2 transition-colors flex items-center gap-2 font-display uppercase font-bold text-sm cursor-pointer"
                  >
                    <span>Fechar</span>
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="p-6 lg:p-10 overflow-y-auto text-gray-300 font-light leading-relaxed space-y-6 text-sm">
                  {activePolicyModal === 'privacy' && (
                    <>
                      <p><strong>1. Coleta de Informações:</strong> A Wendel Engenharia coleta apenas os dados fornecidos voluntariamente pelos usuários através de nossos canais de contato (formulários, WhatsApp ou e-mail), como nome, telefone, e-mail e detalhes técnicos dos projetos solicitados.</p>
                      <p><strong>2. Uso das Informações:</strong> Os dados coletados são utilizados estritamente para a elaboração de propostas comerciais, orçamentos, dimensionamentos estruturais e agendamento de visitas técnicas ou perícias.</p>
                      <p><strong>3. Compartilhamento de Dados:</strong> Em nenhuma hipótese vendemos, alugamos ou compartilhamos dados pessoais com terceiros para fins de marketing. O compartilhamento ocorre apenas quando exigido por órgãos públicos (como CREA ou prefeituras) durante o processo de emissão de ART e legalização, com prévia ciência do cliente.</p>
                      <p><strong>4. Segurança:</strong> Adotamos práticas de segurança da informação alinhadas à LGPD (Lei Geral de Proteção de Dados - Lei nº 13.709/2018) para proteger seus dados contra acessos não autorizados ou vazamentos.</p>
                      <p><strong>5. Contato DPO/Responsável:</strong> Para dúvidas sobre seus dados ou solicitações de exclusão, entre em contato através do e-mail oficial: <em>wendel.legalizacoes@gmail.com</em>.</p>
                    </>
                  )}
                  {activePolicyModal === 'terms' && (
                    <>
                      <p><strong>1. Aceitação dos Termos:</strong> Ao acessar e utilizar o site da Wendel Engenharia, o usuário concorda plenamente com os presentes Termos de Uso e com nossa Política de Privacidade.</p>
                      <p><strong>2. Propriedade Intelectual:</strong> Todos os projetos estruturais, imagens de portfólio, textos normativos, gráficos e logotipos apresentados neste site são protegidos por direitos autorais e leis de propriedade industrial. É estritamente proibida a reprodução ou cópia não autorizada para fins comerciais.</p>
                      <p><strong>3. Caráter Informativo:</strong> As informações contidas nas seções de perguntas frequentes e descrições de serviços possuem caráter informativo e técnico-geral. Cada edificação possui particularidades únicas que exigem cálculo estrutural rigoroso assinado por engenheiro habilitado.</p>
                      <p><strong>4. Validade de Propostas:</strong> Valores preliminares informados por canais rápidos de comunicação estão sujeitos à confirmação após análise detalhada de plantas arquitetônicas, laudos de sondagem do solo e cargas normativas.</p>
                    </>
                  )}
                  {activePolicyModal === 'cookies' && (
                    <>
                      <p><strong>1. O que são Cookies:</strong> Cookies são pequenos arquivos de texto armazenados no navegador do dispositivo do usuário para otimizar o desempenho, memorizar preferências e compreender o tráfego na página.</p>
                      <p><strong>2. Cookies Utilizados:</strong> Utilizamos apenas cookies essenciais de funcionamento técnico da plataforma e cookies analíticos anônimos para mensurar acessos e aprimorar continuamente a navegação.</p>
                      <p><strong>3. Gerenciamento pelo Usuário:</strong> Você pode, a qualquer momento, desativar ou apagar os cookies através das configurações de privacidade e segurança do seu próprio navegador (Google Chrome, Safari, Microsoft Edge, Mozilla Firefox).</p>
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </HelmetProvider>
  );
}
