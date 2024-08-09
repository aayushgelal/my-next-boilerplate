"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { useState, useEffect } from "react";
const recentJobs = [
    { title: "Senior .NET Developer", company: "Boost IT", location: "Portugal",tags:"" },
    { title: "Psychiatric Mental Health Nurse Practitioner", company: "LifeStance Health", location: "United States" },
    { title: "Incident Threat SME", company: "Inalab Consulting, Inc.", location: "United States" },
    { title: "Homeowner Experience Revenue Specialist", company: "Vacasa", location: "United States" },
    { title: "Staff Data & Machine Learning Engineer", company: "Celonis", location: "Germany" },
    { title: "Finance Reporting Expert Analyst", company: "Unknown", location: "Unknown" },
  ];
  // data/jobs.js
const jobs = [
  {
    companyName: 'PayPay Securities',
    companyLogo: '/path/to/logo.png', // Update this with the correct path to the logo
    position: 'Backend Engineer',
    tags: ['Apply from Abroad', 'Full Remote', 'Backend']
  },
  {
    companyName: 'TechCorp',
    companyLogo: '/path/to/techcorp-logo.png',
    position: 'Frontend Developer',
    tags: ['Hybrid', 'Full-Time', 'Frontend']
  },
  {
    companyName: 'Innovatech',
    companyLogo: '/path/to/innovatech-logo.png',
    position: 'Data Scientist',
    tags: ['On-Site', 'Part-Time', 'Data']
  },
  {
    companyName: 'NextGen Solutions',
    companyLogo: '/path/to/nextgen-logo.png',
    position: 'DevOps Engineer',
    tags: ['Remote', 'Contract', 'DevOps']
  },
  {
    companyName: 'CyberNetics',
    companyLogo: '/path/to/cybernetics-logo.png',
    position: 'Security Analyst',
    tags: ['Apply from Abroad', 'Full-Time', 'Security']
  },
  // Add more job objects here
];


  export default function ScrollCard(){
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setScrollPosition((prevPosition) => (prevPosition + 1) % (recentJobs.length * 300));
      }, 50);
      return () => clearInterval(interval);
    }, []);
    return <div className="my-20 overflow-hidden">
    <h3 className="text-3xl font-semibold mb-10">Recent Jobs</h3>
    <div 
      className="flex transition-transform duration-500 ease-linear gap-x-8" 
      style={{ transform: `translateX(-${scrollPosition}px)` }}
    >
      {jobs.map((job, index) => (
            <Card className="min-w-96">
            <CardHeader className="mb-0  max-h-fit p-3">
            <Badge  variant={'outline'} className=" max-w-fit text-primary">NEW!</Badge>
            <div className="flex ">              <Image src={job.companyLogo} alt={`${job.companyName} logo`} width= '20' height= '20'  />
            <h3 className="text-gray-500 text-md">{job.companyName}</h3>
            </div>

            </CardHeader>
            <CardContent>
              <h1 className="text-lg">{job.position}</h1>
              <div className="flex justify-around gap-1 mt-4">
                {job.tags.map(tag => (
                  <Badge className="h-4 w-fit " key={tag}>{tag}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
      
       
      ))}
    </div>
  </div>

  

  }