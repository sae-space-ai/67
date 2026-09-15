import { Section } from '../types';

interface Props {
  sections: Section[];
  activeSection: string;
  onNavigate: (id: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function DocSidebar({ sections, activeSection, onNavigate, isOpen, onClose }: Props) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-72 bg-white border-r border-gray-200
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-y-auto print:hidden
          pt-14 lg:pt-0
        `}
      >
        <div className="p-4">
          <div className="mb-4 pb-3 border-b border-gray-200">
            <h2 className="text-xs font-bold text-[#003399] uppercase tracking-wider">
              Table of Contents
            </h2>
          </div>
          <nav className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onNavigate(section.id)}
                className={`
                  w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all
                  ${activeSection === section.id
                    ? 'bg-[#003399] text-white font-semibold shadow-md'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-[#003399]'
                  }
                `}
              >
                <span className="text-xs opacity-70 mr-2">{section.number}.</span>
                <span className="leading-tight">{section.title}</span>
              </button>
            ))}
          </nav>

          {/* Quick Info */}
          <div className="mt-6 p-3 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-xs font-semibold text-[#003399] mb-1">📋 Document Info</p>
            <p className="text-[11px] text-gray-600 leading-relaxed">
              Version 1.0<br />
              8 Sections<br />
              Prepared: Sep 15, 2026
            </p>
          </div>

          {/* Consortium Quick View */}
          <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-xs font-semibold text-gray-700 mb-2">👥 Consortium</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-[11px] text-gray-600">EU Inc. 001 (Leader)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-[11px] text-gray-600">Prof. M. Gago (Member)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span className="text-[11px] text-gray-600">UEx (Subcontractor)</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
