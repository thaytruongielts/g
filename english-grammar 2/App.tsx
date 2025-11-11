
import React, { useState, useMemo, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import GrammarTopicDisplay from './components/GrammarTopicDisplay';
import ExerciseDisplay from './components/ExerciseDisplay';
import { grammarData } from './constants/grammarData';

const App: React.FC = () => {
  const [activeUnitId, setActiveUnitId] = useState<string>(grammarData[0].id);
  const mainContentRef = React.useRef<HTMLDivElement>(null);

  const activeUnit = useMemo(() => {
    return grammarData.find(unit => unit.id === activeUnitId) || grammarData[0];
  }, [activeUnitId]);

  useEffect(() => {
    // Scroll to top of main content when unit changes
    if (mainContentRef.current) {
        mainContentRef.current.scrollTop = 0;
    }
  }, [activeUnitId]);


  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50">
      <Sidebar 
        units={grammarData} 
        activeUnitId={activeUnitId} 
        onSelectUnit={setActiveUnitId} 
      />
      <main ref={mainContentRef} className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 overflow-y-auto" style={{maxHeight: '100vh'}}>
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
          {activeUnit.topics.map((topic, index) => (
            <React.Fragment key={index}>
              <GrammarTopicDisplay topic={topic} />
              {index < activeUnit.topics.length - 1 && <hr className="my-8 border-t-2 border-slate-100" />}
            </React.Fragment>
          ))}
        </div>
        
        {activeUnit.exercises && activeUnit.exercises.length > 0 && (
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg mt-8">
                <ExerciseDisplay exercises={activeUnit.exercises} />
            </div>
        )}
      </main>
    </div>
  );
};

export default App;
