import React from 'react';
import type { GrammarUnit } from '../types';

interface SidebarProps {
  units: GrammarUnit[];
  activeUnitId: string;
  onSelectUnit: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ units, activeUnitId, onSelectUnit }) => {
  return (
    <aside className="w-full md:w-64 lg:w-72 bg-white md:h-screen p-4 md:p-6 shadow-lg md:sticky md:top-0">
      <h1 className="text-2xl font-bold text-brand-primary mb-6">
        English grammar
      </h1>
      <nav>
        <ul>
          {units.map((unit) => (
            <li key={unit.id} className="mb-2">
              <button
                onClick={() => onSelectUnit(unit.id)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 text-lg ${
                  activeUnitId === unit.id
                    ? 'bg-brand-primary text-white shadow-md'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {unit.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;