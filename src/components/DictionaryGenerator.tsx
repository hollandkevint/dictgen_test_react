import React, { useState } from 'react';
import { FileSpreadsheet, FileText } from 'lucide-react';

const DictionaryGenerator = () => {
  const [generating, setGenerating] = useState(false);
  const [format, setFormat] = useState('excel');

  const handleGenerate = () => {
    setGenerating(true);
    // Simulate dictionary generation
    setTimeout(() => {
      setGenerating(false);
      alert(`Data dictionary generated in ${format} format!`);
    }, 2000);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Generate Data Dictionary</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Output Format</label>
        <div className="flex space-x-4">
          <button
            className={`flex items-center px-4 py-2 rounded-md ${format === 'excel' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setFormat('excel')}
          >
            <FileSpreadsheet className="w-5 h-5 mr-2" />
            Excel
          </button>
          <button
            className={`flex items-center px-4 py-2 rounded-md ${format === 'pdf' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setFormat('pdf')}
          >
            <FileText className="w-5 h-5 mr-2" />
            PDF
          </button>
        </div>
      </div>
      <button
        onClick={handleGenerate}
        disabled={generating}
        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:bg-gray-400"
      >
        {generating ? 'Generating...' : 'Generate Data Dictionary'}
      </button>
    </div>
  );
};

export default DictionaryGenerator;