'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FileText, Code, Zap, Github, Award } from 'lucide-react';
import { Profile } from '@/lib/types/model'; 
import Card from '../ui/CustomCard';
import TechStackSection from '../sections/TechStackSection';
import ProjectItem from '../sections/ProjectItem';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Avatar, AvatarImage } from '../ui/avatar';

interface MainContentColumnProps {
    profile: Profile;
}

const MainContentColumn: React.FC<MainContentColumnProps> = ({ profile }) => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const handleCertClick = (index: number) => {
    setSelectedCert(index);
  };

  const handleDialogClose = () => {
    setSelectedCert(null);
  };

  const selectedCertData = selectedCert !== null ? profile.certifications[selectedCert] : null;

  return (
    <div className="lg:col-span-8 space-y-5">
      
      {/* 1. About Section */}
      <Card title="About" icon={FileText} className="mb-8 hover:shadow-lg hover:shadow-blue-200 transition-shadow duration-200">
        <div className="space-y-4">
          <div className="prose prose-sm max-w-none">
            <p className="text-base leading-relaxed text-gray-900 font-medium">
              {profile.bioFull && profile.bioFull.split('\n').map((paragraph, idx) => (
                <React.Fragment key={idx}>
                  {paragraph.trim() && (
                    <>
                      {paragraph.trim()}
                      {idx < (profile.bioFull?.split('\n').length ?? 0) - 1 && <br className="mb-3" />}
                    </>
                  )}
                </React.Fragment>
              ))}
            </p>
          </div>
          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-start gap-3">
              <div className="w-1 h-12 bg-linear-to-b from-blue-500 to-blue-300 rounded-full mt-1"></div>
              <p className="text-sm text-gray-700 italic font-medium leading-relaxed">
                "Developer who understands the user" - Combining operational expertise with growing development capabilities.
              </p>
            </div>
          </div>
        </div>
      </Card>
      
      {/* 2. Tech Stack Section */}
      <Card 
        title="Tech Stack" 
        icon={Code} 
        className="mb-8 hover:shadow-lg hover:shadow-blue-200 transition-all duration-200"
        buttonText="View All"
        buttonVariant="fancyLink"
        buttonHref="/tech-stack"
      >
        <TechStackSection title="Frontend" technologies={profile.techStack.frontend} />
        <TechStackSection title="Backend" technologies={profile.techStack.backend} />
        <TechStackSection title="DevOps & Cloud" technologies={profile.techStack.devops} />
      </Card>

      

      {/* 4. Recent Projects Section */}
      <Card 
        title="Recent Projects" 
        icon={Github} 
        className="mb-8 hover:shadow-lg hover:shadow-blue-200 transition-shadow duration-200"
        buttonText="View All"
        buttonVariant="fancyLink"
        buttonHref="/projects"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profile.projects.map((item, index) => (
            <ProjectItem key={index} {...item} />
          ))}
        </div>
      </Card>
      
      {/* 5. Recent Certifications Section */}
      <Card 
        title="Recent Certifications" 
        icon={Award}
        buttonText="View All"
        buttonVariant="fancyLink"
        buttonHref="/certificates"
        className="mb-8 hover:shadow-lg hover:shadow-blue-200 transition-shadow duration-200"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {profile.certifications.slice(0, 3).map((cert, index) => (
            <article
              key={index}
              onClick={() => handleCertClick(index)}
              className="p-4 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-lg hover:shadow-blue-200 transition-shadow duration-150 hover:cursor-pointer"
              aria-labelledby={`cert-${index}-title`}
            >
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <h4 id={`cert-${index}-title`} className="text-base font-semibold text-gray-900">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-muted-foreground text-blue-600 mt-1">{cert.organization}</p>
                </div>
                <div className="text-blue-600 text-sm"></div>
              </div>
            </article>
          ))}
        </div>
      </Card>

      {/* Certification Detail Dialog */}
      <Dialog open={selectedCert !== null} onOpenChange={handleDialogClose}>
        <DialogContent className="max-w-md bg-white shadow-lg rounded-lg p-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-950">
              {selectedCertData?.title}
            </DialogTitle>
            <DialogDescription className="text-base text-blue-600 font-semibold">
              {selectedCertData?.organization}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3">
              <div className="text-3xl"></div>
              <p className="text-sm font-semibold text-gray-900">Certification Details</p>
            </div>

            {/* Certificate image */}
            {selectedCertData?.image && (
              <div className="w-full flex justify-center">
                <img
                  src={selectedCertData.image}
                  alt={selectedCertData.title}
                  className="w-full max-w-md h-auto rounded-md shadow-md hover:scale-150 transition-transform duration-200 cursor-pointer hover:shadow-lg hover:shadow-blue-100"
                />
              </div>
            )}

            {/* Key metadata */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-muted-foreground">Organization</p>
                <p className="text-sm font-semibold text-gray-900">{selectedCertData?.organization}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Issued</p>
                <p className="text-sm font-semibold text-gray-900">{selectedCertData?.issued ?? '—'}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Expires</p>
                <p className="text-sm font-semibold text-gray-900">{selectedCertData?.expires ?? '—'}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Credential ID</p>
                <p className="text-sm font-mono text-gray-900">{selectedCertData?.credentialId ?? '—'}</p>
              </div>
            </div>

            {/* Description & external link */}
            <p className="text-base text-gray-700 leading-relaxed font-medium">
              This certification was issued by <strong>{selectedCertData?.organization}</strong>.
            </p>

            {selectedCertData?.url && (
              <div className="pt-2">
                <a
                  href={selectedCertData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 font-semibold underline"
                >
                  View issuer / verification page
                </a>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>


      {/* 3. Beyond Coding Section */}
      <Card title="Beyond Coding" icon={Zap} className="mb-8 hover:shadow-lg hover:shadow-blue-200 transition-shadow duration-200">
        <div className="space-y-4">
          <p className="text-base leading-relaxed text-gray-900 font-medium">{profile.beyondCoding}</p>
          <div className="pt-4 border-t border-gray-200">
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-xs font-semibold text-blue-700">Active in Community & Open Source</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MainContentColumn;



