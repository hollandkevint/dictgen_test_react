import React, { useState } from 'react';
import { Database, FileSpreadsheet, FileText } from 'lucide-react';
import Header from './components/Header';
import DatabaseConnection from './components/DatabaseConnection';
import DictionaryGenerator from './components/DictionaryGenerator';
import Footer from './components/Footer';

function App() {
  const [connected, setConnected] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">DictGen: Automated Data Dictionary Generator</h1>
        {!connected ? (
          <DatabaseConnection onConnect={() => setConnected(true)} />
        ) : (
          <DictionaryGenerator />
        )}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Database className="w-8 h-8" />}
              title="Multiple Database Support"
              description="Connect to popular cloud data warehouses like Amazon Redshift, Google BigQuery, and Snowflake."
            />
            <FeatureCard
              icon={<FileSpreadsheet className="w-8 h-8" />}
              title="Excel Output"
              description="Generate comprehensive data dictionaries in Excel format for easy editing and sharing."
            />
            <FeatureCard
              icon={<FileText className="w-8 h-8" />}
              title="PDF Export"
              description="Export your data dictionaries as PDF files for professional documentation and presentation."
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-2">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;