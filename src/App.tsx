import { useState, useEffect, useRef } from 'react';
import DocHeader from './components/DocHeader';
import DocSidebar from './components/DocSidebar';
import DocSection from './components/DocSection';
import DocFooter from './components/DocFooter';
import SignatureBlock from './components/SignatureBlock';
import { sections } from './data/sections';

export default function App() {
  const [activeSection, setActiveSection] = useState('executive-summary');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!mainRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = mainRef.current;
      setScrollProgress((scrollTop / (scrollHeight - clientHeight)) * 100);

      // Determine active section
      const sectionEls = document.querySelectorAll('[data-section]');
      let current = 'executive-summary';
      sectionEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150) {
          current = el.getAttribute('data-section') || current;
        }
      });
      setActiveSection(current);
    };

    const el = mainRef.current;
    el?.addEventListener('scroll', handleScroll);
    return () => el?.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(`[data-section="${id}"]`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setSidebarOpen(false);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100 overflow-hidden">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gray-200">
        <div
          className="h-full bg-gradient-to-r from-[#003399] to-[#ffcc00] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Bar */}
      <header className="bg-[#003399] text-white flex items-center justify-between px-4 py-2 z-50 shrink-0 print:hidden">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-lg">🇪🇺</span>
            <div>
              <p className="text-xs font-semibold tracking-wide">EUROPEAN COMMISSION</p>
              <p className="text-[10px] text-blue-200">EuroHPC JU — Technical Justification</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline text-xs bg-white/10 px-3 py-1 rounded-full">
            EUROHPC/2026/OP/0008
          </span>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-[#ffcc00] hover:bg-yellow-400 text-[#003399] font-bold text-xs px-4 py-2 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            <span className="hidden sm:inline">Print / PDF</span>
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <DocSidebar
          sections={sections}
          activeSection={activeSection}
          onNavigate={scrollToSection}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Main Content */}
        <main
          ref={mainRef}
          className="flex-1 overflow-y-auto scroll-smooth"
        >
          <div className="max-w-[210mm] mx-auto bg-white shadow-xl print:shadow-none print:max-w-none">
            {/* Document Header */}
            <DocHeader />

            {/* Title Block */}
            <div className="px-8 sm:px-12 md:px-16 pt-8 pb-6 text-center border-b border-gray-200">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#003399] uppercase tracking-wider leading-tight">
                Justificación Técnica<br />
                Estructura de Consorcio Óptima
              </h1>
              <p className="mt-4 text-sm sm:text-base text-gray-600 italic max-w-2xl mx-auto leading-relaxed">
                FEXT-RESILIENT (FIRECYCLE EXTREM): Integrated Climate-Resilient Forest Landscape Demonstrator for Wildfire, Drought and Cascading-Risk Adaptation
              </p>
              <div className="mt-6 text-xs text-gray-500 border-t border-gray-200 pt-4 max-w-lg mx-auto">
                <p>Versión 1.0 — Documento de Justificación Técnica</p>
                <p className="mt-1">Preparado por: <strong>EU Inc. 001</strong> (PIC 865214975)</p>
                <p>Contacto: Prof. Manuel Gago Fernández — manuel.gago.eduextrem@gmail.com — +34 641 118 025</p>
              </div>
            </div>

            {/* Sections */}
            <div className="px-6 sm:px-10 md:px-14 py-8 space-y-12">
              {sections.map((section) => (
                <DocSection key={section.id} section={section} />
              ))}

              {/* Signature */}
              <SignatureBlock />
            </div>

            {/* Footer */}
            <DocFooter />
          </div>
        </main>
      </div>
    </div>
  );
}
