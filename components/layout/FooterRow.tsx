'use client';

import React from 'react';
import { Users, ExternalLink, Link as LinkIcon, Mail, ArrowRight, Phone } from 'lucide-react';
import { Profile } from '@/lib/types/model';
import Card from '../ui/CustomCard';

interface FooterRowProps {
    profile: Profile;
}

const FooterRow: React.FC<FooterRowProps> = ({ profile }) => (
    // Updated to a 2-column grid for md screens and above, using a 2/3 and 1/3 split for a better visual balance.
    <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">

        {/* --- Column 1: References (Takes 2/3 of the space on MD+) --- */}
        <div className="md:col-span-2">
            <Card 
                title="Professional References" 
                icon={ExternalLink} 
                className="mb-0 h-full hover:shadow-lg hover:shadow-blue-200 transition-shadow duration-200"
            >
                <div className="space-y-3">
                    {/* The references list uses a slightly more compact layout */}
                    <div className="grid grid-cols-1 gap-3">
                        {profile.references?.map((ref, i) => (
                            <div key={i} className="flex flex-col sm:flex-row sm:justify-between gap-2 p-3 bg-white border border-gray-100 rounded-md shadow-sm hover:shadow-md transition">
                                <div>
                                    <p className="font-semibold text-gray-900">{ref.name}</p>
                                    <p className="text-sm text-gray-600">{ref.role}{ref.organization ? ` - ${ref.organization}` : ''}</p>
                                </div>
                                <div className="text-sm text-gray-700 flex flex-col items-start sm:items-end">
                                    {ref.phone && <a href={`tel:${ref.phone}`} className="font-medium text-blue-600 hover:underline">{ref.phone}</a>}
                                    {ref.email && <a href={`mailto:${ref.email}`} className="text-xs text-gray-600 hover:underline mt-1">{ref.email}</a>}
                                    {ref.link && <a href={ref.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline mt-1">{ref.link.replace('https://', '')}</a>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
        </div>


        {/* --- Column 2: Consolidated Links (A Member of + Contact) (Takes 1/3 of the space on MD+) --- */}
        <div className="md:col-span-1">
            <Card
                title="Connect & Affiliations"
                icon={LinkIcon} // Using a generic link icon for the combined card
                className="mb-0 h-full hover:shadow-lg hover:shadow-blue-200 transition-shadow duration-200"
            >
                <div className="space-y-6 divide-y divide-gray-100">

                    {/* Section A: A Member of (Affiliations) */}
                    <div>
                        <h3 className="flex items-center text-md font-bold text-gray-800 mb-3">
                            <Users className="w-4 h-4 mr-2 text-blue-600" />
                            Affiliations
                        </h3>
                        <div className="space-y-2">
                            {profile.membership.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-2 rounded-lg border border-gray-100 hover:border-blue-300 hover:bg-blue-50 hover:shadow-sm transition-all duration-200 group text-sm"
                                >
                                    <span className="font-medium text-gray-700 group-hover:text-blue-700">{item.name}</span>
                                    <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Section B: Contact Quick Links */}
                    <div className="pt-6">
                        <h3 className="flex items-center text-md font-bold text-gray-800 mb-3">
                            <Mail className="w-4 h-4 mr-2 text-blue-600" />
                            Get In Touch
                        </h3>
                        <div className="flex flex-col space-y-3">
                            
                            {/* Email Link */}
                            <a
                                href={`mailto:${profile.social.email}`}
                                className="w-full flex items-center justify-start gap-3 px-3 py-2 bg-blue-50 text-blue-700 font-semibold rounded-md shadow-sm border border-blue-200 hover:bg-blue-100 hover:shadow-md transition-all duration-150 group"
                            >
                                <Mail className="w-4 h-4" />
                                <span className="text-xs font-semibold">{profile.social.email}</span>
                            </a>

                            {/* Phone Link */}
                            <a
                                href={`tel:${profile.number}`}
                                className="w-full flex items-center justify-start gap-3 px-3 py-2 bg-gray-50 text-gray-700 font-semibold rounded-md shadow-sm border border-gray-200 hover:bg-gray-100 hover:shadow-md transition-all duration-150 group"
                            >
                                <Phone className="w-4 h-4" />
                                <span className="text-xs font-semibold">{profile.number}</span>
                            </a>
                            
                            {/* CTA Button */}
                            <button className="w-full flex items-center justify-center gap-2 px-3 py-2 mt-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 transition-all duration-150 group">
                                <ArrowRight className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                Send a Message
                            </button>
                        </div>
                    </div>

                </div>
            </Card>
        </div>
    </div>
);

export default FooterRow;