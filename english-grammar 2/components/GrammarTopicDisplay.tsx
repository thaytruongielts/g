
import React from 'react';
import type { GrammarTopic } from '../types';

interface GrammarTopicDisplayProps {
  topic: GrammarTopic;
  level?: number;
}

const GrammarTopicDisplay: React.FC<GrammarTopicDisplayProps> = ({ topic, level = 0 }) => {
  // Fix: Use React.ElementType to correctly type the dynamic heading tag.
  // This resolves issues with the JSX namespace and allows using a string variable as a JSX element.
  const Heading = `h${Math.min(level + 2, 6)}` as React.ElementType;

  return (
    <div className={`mb-8 ${level > 0 ? 'pl-4 border-l-4 border-slate-200' : ''}`}>
      <Heading className="text-xl md:text-2xl font-bold text-slate-800 mb-3">{topic.title}</Heading>
      
      {topic.description && <p className="text-slate-600 mb-4">{topic.description}</p>}
      
      {topic.structure && (
        <div className="mb-4">
          <h4 className="font-semibold text-brand-primary mb-2">Cấu trúc:</h4>
          {Array.isArray(topic.structure) ? (
            topic.structure.map((s, index) => (
              <pre key={index} className="bg-slate-100 p-3 rounded-lg text-slate-800 font-mono text-sm whitespace-pre-wrap">{s}</pre>
            ))
          ) : (
            <pre className="bg-slate-100 p-3 rounded-lg text-slate-800 font-mono text-sm whitespace-pre-wrap">{topic.structure}</pre>
          )}
        </div>
      )}

      {topic.examples && topic.examples.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold text-brand-primary mb-2">Ví dụ:</h4>
          <ul className="space-y-2">
            {topic.examples.map((example, index) => (
              <li key={index} className="bg-slate-50 p-3 rounded-md border border-slate-200">
                <p className="text-slate-800 font-medium">{example.en}</p>
                <p className="text-slate-500 text-sm italic">{example.vi}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {topic.spellingRules && (
         <div className="mb-4">
            <h4 className="font-semibold text-brand-primary mb-2">Quy tắc chính tả:</h4>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
                {topic.spellingRules.map((rule, index) => (
                    <li key={index}>
                        {rule.rule} <span className="font-mono bg-slate-200 px-1.5 py-0.5 rounded text-sm">{rule.example}</span>
                    </li>
                ))}
            </ul>
        </div>
      )}

      {topic.table && (
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full bg-white border border-slate-300 rounded-lg shadow-sm">
            <thead>
              <tr className="bg-slate-100">
                {topic.table.headers.map((header, index) => (
                  <th key={index} className="px-4 py-2 text-left font-semibold text-slate-700 border-b">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {topic.table.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b border-slate-200 last:border-b-0">
                  <td className="px-4 py-3 font-medium text-slate-800 align-top">{row.header}</td>
                  {row.items.map((item, itemIndex) => (
                    <td key={itemIndex} className="px-4 py-3 text-slate-600 align-top">{item}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      {topic.subTopics && topic.subTopics.length > 0 && (
        <div className="mt-6">
          {topic.subTopics.map((subTopic, index) => (
            <GrammarTopicDisplay key={index} topic={subTopic} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GrammarTopicDisplay;