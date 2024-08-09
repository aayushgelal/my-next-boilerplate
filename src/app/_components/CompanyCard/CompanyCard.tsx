// components/CompanyCard.js
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const CompanyCard = ({ company }:any) => {
  return (
    <Card className="border rounded-lg shadow-lg p-4 bg-white w-full  max-h-96">
      <CardHeader className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">{company.name}</h2>
          <span className="text-sm text-gray-500">{company.location}</span>
        </div>
        <Image src={company.logo} alt={`${company.name} logo`} width={40} height={40} className="object-contain" />
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">{company.description}</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          View Company
        </button>
      </CardContent>
    </Card>
  );
};

export default CompanyCard;
