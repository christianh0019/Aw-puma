import React, { useState } from 'react';
import { MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// Accurate Massachusetts county boundaries extracted from US Census GeoJSON
// Projected to SVG coordinates using Mercator projection with Douglas-Peucker simplification
const counties = [
    {
        id: 'suffolk',
        name: 'Suffolk',
        served: true,
        labelX: 329.3,
        labelY: 97.8,
        path: 'M329.6,107.3 L321.1,109.7 L318.9,113.7 L311.6,106.5 L315.8,100.4 L313.6,97.8 L318.9,94.8 L320.6,97.1 L325.4,96.7 L327,95.4 L325,93.8 L328,93 L331.6,85.5 L336.9,87.3 L339.5,85.7 L335.9,90.4 L340.4,98.6 L333.9,98.2 L334.1,103.4 L329.7,103.6 L329.6,107.3 Z',
    },
    {
        id: 'middlesex',
        name: 'Middlesex',
        served: true,
        labelX: 289.4,
        labelY: 90.5,
        path: 'M263.9,102.9 L259,97.9 L269,82.7 L269.5,72.8 L252.5,74.4 L254.3,63.9 L240.8,59.7 L230.8,61 L225.9,50.9 L299.1,52.8 L303.9,48 L303.7,58.1 L314.8,65.7 L315.5,63.7 L325.5,64.9 L328.3,81.5 L332.3,86.4 L328,93 L325.8,92.4 L325.4,96.7 L320.6,97.1 L318.9,94.8 L314.4,96.5 L315.8,100.4 L311.6,106.5 L302.1,100.7 L294.5,111.1 L293.1,117.2 L276.9,122.9 L262.2,113.9 L263.7,109.6 L272.6,108.6 L275.8,100.4 L263.9,102.9 Z',
    },
    {
        id: 'norfolk',
        name: 'Norfolk',
        served: true,
        labelX: 309.5,
        labelY: 119.8,
        path: 'M274.4,141 L274.1,128.1 L276.9,122.9 L293.1,117.2 L294.5,111.1 L302.1,100.7 L318.9,113.7 L321.1,109.7 L329.6,107.3 L329.7,103.6 L334.1,103.4 L336.1,108.5 L346.1,108 L343.8,122.8 L290.6,145.2 L288.6,145.2 L288.6,140.8 L274.4,141 Z',
    },
    {
        id: 'plymouth',
        name: 'Plymouth',
        served: true,
        labelX: 355,
        labelY: 145,
        path: 'M344.2,170.3 L330.3,167 L334.8,152.4 L328.7,148 L325,130.8 L343.8,122.8 L347.4,105.3 L344.7,103.6 L348.9,103.2 L352.8,108.4 L362.5,110.9 L368.4,116.3 L369.3,121.3 L378.5,132.7 L374.6,142.2 L369.8,143.3 L375.6,148.4 L388.9,152.4 L392.2,161.6 L390.7,167.8 L379.2,174 L380.5,175.8 L378,179.8 L367.9,177.9 L368.7,184.1 L364.4,182.9 L363.1,189.7 L357.3,187.9 L357.7,191.9 L353.7,191.4 L344.2,170.3 Z',
    },
    {
        id: 'essex',
        name: 'Essex',
        served: true,
        labelX: 345,
        labelY: 58,
        path: 'M309.5,46.8 L312.7,47.6 L312.2,40.7 L314.7,38.3 L346.5,28.2 L353.1,31.6 L356.9,30.1 L361.5,53.3 L372.3,58.5 L379.5,53.4 L380.4,57.5 L383.7,57.6 L384.2,60.2 L376.5,67.7 L373.6,66.1 L350.3,72.4 L354.6,79.6 L342.6,83.8 L343.4,87.3 L346.6,88.7 L342.4,89 L341.2,84.1 L336.9,87.3 L328.5,81.8 L325.5,64.9 L315.5,63.7 L314.8,65.7 L303.7,58.1 L303.9,48 L309.5,46.8 Z',
    },
    {
        id: 'worcester',
        name: 'Worcester',
        served: true,
        labelX: 228,
        labelY: 100,
        path: 'M188.1,110.6 L189.1,105.5 L175.6,98.7 L184,76.6 L186.5,60.3 L179.4,49.6 L225.9,50.9 L230.8,61 L240.8,59.7 L254.3,63.9 L252.5,74.4 L269.5,72.8 L269,82.7 L259,97.9 L263.9,102.9 L275.8,100.4 L272.6,108.6 L263.7,109.6 L262.2,113.9 L276.9,122.9 L274.1,128.1 L274.4,141 L238,142.2 L237.8,140.2 L197.3,139.3 L197.3,122.3 L181.7,119.4 L188.1,110.6 Z',
    },
    {
        id: 'bristol',
        name: 'Bristol',
        served: true,
        labelX: 315,
        labelY: 180,
        path: 'M352.4,192.7 L352.5,196.8 L348.3,190.9 L345.2,192.6 L346.7,196.1 L343.2,193.9 L340.9,197.9 L343,202.9 L330.4,208.2 L320.1,208.4 L318.4,187.3 L311.1,185.4 L303.1,175.4 L295,171.7 L293.7,157 L289.1,157 L288.6,145.2 L290.6,145.2 L325,130.8 L328.7,148 L334.8,152.4 L330.3,167 L344.2,170.3 L353.7,191.4 L352.4,192.7 Z',
    },
    // Non-served counties
    {
        id: 'barnstable',
        name: 'Barnstable',
        served: false,
        labelX: 420,
        labelY: 175,
        path: 'M437.9,135.3 L433.2,136.7 L433.2,140.7 L426.3,135.4 L428.5,133 L436.4,133 L448.7,138 L457.5,149.8 L462.4,163.3 L464.5,183.2 L456.2,202.2 L453.8,201.5 L459,189 L454.1,185.8 L432.7,189.3 L423.7,193.9 L421.7,190.6 L413.2,190.6 L409.9,193.7 L402.9,194.4 L397,201.1 L372.1,205.8 L378.2,198.1 L376.8,190.2 L378.6,188.1 L375.7,184.5 L380.1,182.3 L378,179.8 L380.5,175.8 L379.2,174 L390.7,167.8 L398.7,174.2 L420.6,177.7 L424.4,180.4 L429.6,176.6 L448,172.7 L454.8,169.1 L455.8,157.9 L450.3,152.3 L447.6,159.1 L445.6,141.7 L437.9,135.3 Z',
    },
    {
        id: 'dukes',
        name: 'Dukes',
        served: false,
        labelX: 375,
        labelY: 220,
        path: 'M371.7,204.8 L374.7,206.4 L360.1,215.1 L340.7,219.6 L343.4,217 L358.7,213.2 L371.7,204.8 Z M383.6,211.8 L387.6,212.1 L388.8,218 L395.1,223 L401.3,218.4 L401.2,227.8 L369.9,228.6 L361.9,233.9 L354.3,227.9 L362,227.7 L372.6,215.7 L382.7,210.4 L383.6,211.8 Z',
    },
    {
        id: 'nantucket',
        name: 'Nantucket',
        served: false,
        labelX: 443,
        labelY: 230,
        path: 'M444.6,234.3 L452,229 L449.9,222.2 L460.6,236.8 L458.8,240.9 L441.4,241.5 L424.8,235.6 L422.4,232.7 L428,235.3 L444.6,234.3 Z',
    },
    {
        id: 'hampden',
        name: 'Hampden',
        served: false,
        labelX: 136.6,
        labelY: 127,
        path: 'M196.5,122.4 L197.3,139.3 L122.2,138.5 L120.9,142.9 L114.8,143.6 L115.2,138.5 L86.2,138.1 L84,124 L92.4,110.7 L92.6,102.7 L106.5,100.1 L103.2,112.2 L117.6,112.5 L130.5,119.5 L139.5,106.1 L141.8,115.8 L164.8,113.2 L165.8,119.1 L186.9,111.4 L181.7,119.4 L196.5,122.4 Z',
    },
    {
        id: 'hampshire',
        name: 'Hampshire',
        served: false,
        labelX: 152,
        labelY: 100,
        path: 'M187.8,105.1 L188.2,111.2 L165.8,119.1 L164.8,113.2 L141.8,115.8 L139.5,106.1 L130.5,119.5 L117.6,112.5 L103.2,112.2 L106.5,100.1 L92.6,102.7 L95.6,71.1 L107.5,73 L108.2,80.4 L121.2,83.1 L128.4,90.6 L147.8,87.8 L168.3,88.7 L170.5,103.9 L175.6,98.7 L187.8,105.1 Z',
    },
    {
        id: 'franklin',
        name: 'Franklin',
        served: false,
        labelX: 134.6,
        labelY: 68,
        path: 'M107.5,73 L95.6,71.1 L98.7,51.8 L89.9,47.1 L179.4,49.6 L186.5,60.3 L184,76.6 L175.6,98.7 L170.5,103.9 L168.3,88.7 L147.8,87.8 L128.4,90.6 L121.2,83.1 L108.2,80.4 L107.5,73 Z',
    },
    {
        id: 'berkshire',
        name: 'Berkshire',
        served: false,
        labelX: 63,
        labelY: 98,
        path: 'M92.6,102.7 L92.4,110.7 L84,124 L86.2,138.1 L32.5,136.8 L31.1,132.1 L60.6,46.5 L89.9,47.1 L98.7,51.8 L92.6,102.7 Z',
    },
];

export const ServiceAreas: React.FC = () => {
    const [hoveredCounty, setHoveredCounty] = useState<string | null>(null);
    const navigate = useNavigate();
    const servedCounties = counties.filter(c => c.served);
    const hoveredData = counties.find(c => c.id === hoveredCounty);

    return (
        <section id="service-areas" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-sm mb-3 block">
                        Where We Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-5">
                        Serving Massachusetts
                    </h2>
                    <p className="text-brand-gray max-w-2xl mx-auto text-lg leading-relaxed">
                        Our licensed technicians serve homeowners across 7 counties.
                        Hover over the map to explore our coverage area.
                    </p>
                </div>

                {/* Map + Legend Layout */}
                <div className="grid lg:grid-cols-5 gap-10 items-center">

                    {/* Interactive SVG Map */}
                    <div className="lg:col-span-3 relative">
                        <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl p-6 sm:p-10 border border-gray-200 shadow-sm">
                            <svg
                                viewBox="20 20 460 230"
                                className="w-full h-auto"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <linearGradient id="servedFill" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#df6e16" stopOpacity="0.12" />
                                        <stop offset="100%" stopColor="#df6e16" stopOpacity="0.22" />
                                    </linearGradient>
                                    <linearGradient id="servedHoverFill" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#df6e16" stopOpacity="0.6" />
                                        <stop offset="100%" stopColor="#df6e16" stopOpacity="0.8" />
                                    </linearGradient>
                                    <filter id="hoverShadow">
                                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#df6e16" floodOpacity="0.25" />
                                    </filter>
                                    <filter id="mapShadow">
                                        <feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.08" />
                                    </filter>
                                </defs>

                                {/* County paths */}
                                {counties.map((county) => {
                                    const isHovered = hoveredCounty === county.id;
                                    const isServed = county.served;

                                    return (
                                        <path
                                            key={county.id}
                                            d={county.path}
                                            fill={
                                                isServed
                                                    ? isHovered
                                                        ? 'url(#servedHoverFill)'
                                                        : 'url(#servedFill)'
                                                    : isHovered
                                                        ? '#e2e8f0'
                                                        : '#f1f5f9'
                                            }
                                            stroke={isServed ? '#df6e16' : '#cbd5e1'}
                                            strokeWidth={isHovered ? 2 : 1}
                                            strokeLinejoin="round"
                                            className="transition-all duration-200 cursor-pointer"
                                            onMouseEnter={() => setHoveredCounty(county.id)}
                                            onMouseLeave={() => setHoveredCounty(null)}
                                            onClick={() => navigate(isServed ? `/locations/${county.id}` : '/contact')}
                                            filter={isHovered ? 'url(#hoverShadow)' : undefined}
                                        />
                                    );
                                })}

                                {/* County labels */}
                                {counties.map((county) => {
                                    const isHovered = hoveredCounty === county.id;
                                    // Skip tiny counties unless hovered
                                    if ((county.id === 'suffolk' || county.id === 'nantucket' || county.id === 'dukes') && !isHovered) return null;

                                    return (
                                        <text
                                            key={`label-${county.id}`}
                                            x={county.labelX}
                                            y={county.labelY}
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            className="pointer-events-none select-none"
                                            fill={
                                                county.served
                                                    ? isHovered ? '#ffffff' : '#153760'
                                                    : isHovered ? '#475569' : '#94a3b8'
                                            }
                                            fontSize={county.id === 'suffolk' || county.id === 'nantucket' || county.id === 'dukes' ? 7 : 9}
                                            fontWeight={county.served ? '700' : '500'}
                                            fontFamily="system-ui, -apple-system, sans-serif"
                                            letterSpacing="0.3"
                                        >
                                            {county.name}
                                        </text>
                                    );
                                })}
                            </svg>

                            {/* Hover tooltip */}
                            <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-brand-navy text-white px-5 py-3 rounded-xl shadow-xl text-sm font-semibold flex items-center gap-2 whitespace-nowrap transition-all duration-200 ${hoveredData ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                                <MapPin size={14} className="text-brand-orange" />
                                {hoveredData?.name || ''} County
                                {hoveredData?.served ? (
                                    <span className="text-green-400 text-xs font-medium ml-1 flex items-center gap-1">
                                        <CheckCircle2 size={12} /> We Serve Here
                                    </span>
                                ) : (
                                    <span className="text-gray-400 text-xs font-medium ml-1">Coming Soon</span>
                                )}
                            </div>
                        </div>

                        {/* Map legend */}
                        <div className="flex items-center gap-6 mt-4 ml-2 text-xs text-brand-gray">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-3 rounded-sm border border-brand-orange bg-brand-orange/15" />
                                Coverage Area
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-3 rounded-sm border border-gray-300 bg-gray-100" />
                                Expanding Soon
                            </div>
                        </div>
                    </div>

                    {/* County Legend */}
                    <div className="lg:col-span-2">
                        <h3 className="font-serif font-bold text-brand-navy text-xl mb-6">Counties We Serve</h3>
                        <div className="space-y-2.5">
                            {servedCounties.map((county) => (
                                <Link
                                    key={county.id}
                                    to={`/locations/${county.id}`}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer border ${hoveredCounty === county.id
                                        ? 'bg-brand-orange/10 border-brand-orange/30 shadow-sm'
                                        : 'bg-slate-50 border-transparent hover:bg-slate-100'
                                        }`}
                                    onMouseEnter={() => setHoveredCounty(county.id)}
                                    onMouseLeave={() => setHoveredCounty(null)}
                                >
                                    <CheckCircle2
                                        size={18}
                                        className={`flex-shrink-0 transition-colors ${hoveredCounty === county.id ? 'text-brand-orange' : 'text-green-500'
                                            }`}
                                    />
                                    <span className="font-semibold text-brand-navy text-sm">{county.name} County</span>
                                    <ArrowRight size={14} className="ml-auto text-brand-gray opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            ))}
                        </div>

                        <div className="mt-8 p-4 bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-xl border border-gray-200">
                            <p className="text-brand-gray text-sm mb-3">Don't see your area? We may still serve you.</p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center text-brand-orange font-bold text-sm uppercase tracking-wide hover:underline group"
                            >
                                Check Your Coverage <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
