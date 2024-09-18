// pages/index.js
import React from 'react';
import CompanyCard from './CompanyCard';
import companies from './companies.js';

const CompanyPage = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Top Companies for Software Developers in Japan</h1>
      <p className="text-lg text-gray-600 mb-12 text-center">An exhaustive list of diverse, modern tech companies in Japan looking for English-speaking software engineers & techies</p>
      <div className="grid grid-cols-3 items-center bg-red-50 self-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {companies.map((company, index) => (
          <CompanyCard key={index} company={company} />
        ))}
      </div>
    </div>
  );
};

export default CompanyPage;
