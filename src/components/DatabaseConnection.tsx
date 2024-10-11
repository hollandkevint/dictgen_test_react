import React, { useState } from 'react';

const DatabaseConnection = ({ onConnect }) => {
  const [databaseType, setDatabaseType] = useState('');
  const [connectionString, setConnectionString] = useState('');

  const handleConnect = (e) => {
    e.preventDefault();
    // Here you would typically handle the actual database connection
    console.log('Connecting to', databaseType, 'with connection string:', connectionString);
    onConnect();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Connect to Your Database</h2>
      <form onSubmit={handleConnect}>
        <div className="mb-4">
          <label htmlFor="databaseType" className="block text-sm font-medium text-gray-700">Database Type</label>
          <select
            id="databaseType"
            value={databaseType}
            onChange={(e) => setDatabaseType(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
          >
            <option value="">Select a database type</option>
            <option value="redshift">Amazon Redshift</option>
            <option value="bigquery">Google BigQuery</option>
            <option value="snowflake">Snowflake</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="connectionString" className="block text-sm font-medium text-gray-700">Connection String</label>
          <input
            type="text"
            id="connectionString"
            value={connectionString}
            onChange={(e) => setConnectionString(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            placeholder="Enter your connection string"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Connect
        </button>
      </form>
    </div>
  );
};

export default DatabaseConnection;