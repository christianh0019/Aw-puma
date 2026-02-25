import React from 'react';
import { SEO } from '../components/SEO';
import { Leaf, CalendarCheck, FileText, PiggyBank, ShieldCheck, Heart, AlertCircle, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export const MassSave: React.FC = () => {
    return (
        <div className="bg-white">
            <SEO
                title="Mass Save® Home Energy Assessments | A.W. Puma"
                description="Take advantage of the no-cost Home Energy Assessment offered by the Sponsors of Mass Save®. Improve comfort, reduce energy use, and access rebates."
                keywords="Mass Save, home energy assessment Massachusetts, energy efficiency rebates, A.W. Puma Mass Save contractor"
                canonical="https://awpumahome.com/mass-save"
            />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex flex-col justify-center items-center pt-24 pb-16 bg-brand-navy">
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-navy/90 to-brand-navy/95" />
                <div className="relative z-10 max-w-5xl mx-auto px-4 w-full text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/50 backdrop-blur-md mb-8">
                        <Leaf size={16} className="text-green-400" />
                        <span className="text-sm font-bold text-green-400 uppercase tracking-widest">Participating Contractor</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-white mb-6 leading-tight">
                        <a href="https://www.masssave.com/" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:text-brand-gold transition-colors underline decoration-brand-orange/30 underline-offset-8">
                            Mass Save®
                        </a>
                        <br />Home Energy Assessments
                    </h1>

                    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        At AW Puma Home, we make it simple to take advantage of the no cost Home Energy Assessment offered by the Sponsors of <a href="https://www.masssave.com/" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">Mass Save®</a>. Our team guides you through each step so you can improve comfort, reduce energy use, and access available incentives.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact">
                            <Button size="lg" icon={<CalendarCheck size={18} />}>
                                Schedule Assessment
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* The Process */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">The Process</h2>
                        <p className="text-brand-gray max-w-2xl mx-auto text-lg">
                            We guide you from your initial assessment to final rebate collection.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[28%] left-[15%] right-[15%] h-0.5 bg-gray-200 z-0" />

                        {/* Step 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative z-10 text-center flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                                <CalendarCheck size={32} className="text-brand-orange group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3 uppercase tracking-wide">Schedule</h3>
                            <p className="text-brand-gray text-center">
                                Schedule your no-cost home energy assessment at a time that works for your schedule.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative z-10 text-center flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-brand-navy/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
                                <FileText size={32} className="text-brand-navy group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3 uppercase tracking-wide">Energy Plan</h3>
                            <p className="text-brand-gray text-center">
                                We will send you your customized energy savings plan, and walk you through the whole process.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative z-10 text-center flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                                <PiggyBank size={32} className="text-green-600 group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3 uppercase tracking-wide">Rebates</h3>
                            <p className="text-brand-gray text-center">
                                Access <a href="https://www.masssave.com/" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline font-semibold">Mass Save®</a> incentives and equipment rebates along with our insulation services to improve your home's energy efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">Why Should You Choose Us?</h2>
                            <p className="text-lg text-brand-gray leading-relaxed mb-8">
                                As a Participating Home Performance Contractor in the Mass Save Home Energy Services Program, A.W. Puma Home Services is qualified to provide customers with Home Energy Assessments, insulation, air sealing, duct insulation, duct sealing, and thermostat installation services. Our team ensures professional service and clear communication during every step of the process.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 mt-1">
                                        <Heart size={24} className="text-red-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-brand-navy mb-2">Customer Satisfaction is Our Top Priority</h3>
                                        <p className="text-brand-gray">Since we are a family-owned business, we also treat our customers as family. We make sure that we guide our customers as best as possible and help them set up their homes in a pocket-friendly way.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                                        <ShieldCheck size={24} className="text-blue-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-brand-navy mb-2">No Hidden Charges on any Services</h3>
                                        <p className="text-brand-gray">We adhere to clear, honest, and transparent pricing. It means our customers don't have to pay any hidden fees or additional taxes. This way, the customers know the total cost before we start working, and there are no remaining payments once we have completed our work.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 mt-1">
                                        <Users size={24} className="text-brand-orange" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-brand-navy mb-2">Family-Owned Business</h3>
                                        <p className="text-brand-gray">Being a family-owned business, we cannot emphasize enough how much we value our family values. These values encourage us to provide our customers with the best possible services. Guiding you along the way and ensuring you choose the best services for your house is one of our major concerns.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Compliance & Disclaimers */}
            <section className="py-16 bg-gray-100 border-t border-gray-200 text-sm text-gray-600">
                <div className="max-w-5xl mx-auto px-4 space-y-6 leading-relaxed">
                    <div className="flex items-start gap-3">
                        <AlertCircle size={20} className="text-brand-navy flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="mb-4">
                                By participating, you agree to share your submitted information with the Sponsors of <a href="https://www.masssave.com/" target="_blank" rel="noopener noreferrer" className="text-brand-navy font-semibold hover:underline">Mass Save®</a>, approved Mass Save vendors and contractors,* and your Community First Partner (if applicable). Your information is used solely to support your participation in the Mass Save Program.
                            </p>
                            <p className="mb-4">
                                Your information will not be shared with any other entities, nor will it be used for any purpose outside of providing assistance related to Mass Save services. This includes a strict prohibition on sharing information for marketing or promotional activities.
                            </p>
                            <p className="mb-4">
                                Text messaging opt-in data and consent are not shared with any third parties under any circumstances.
                            </p>
                            <p>
                                As a Participating Home Performance Contractor in the Mass Save Home Energy Services Program, we are eligible to provide customers with Home Energy Assessments, insulation, air sealing, duct insulation, duct sealing and thermostat installation services. While incentives and work quality assurance are provided by the Mass Save Program Sponsors and Lead Vendors, the Home Performance Contractor is responsible for the actual Work and warranties provided through the program. Other services outside of the Mass Save Program may be offered for which contractor selection is solely at the customer's discretion, and the Mass Save Program Sponsors and Lead Vendors will not be financially liable or responsible for services beyond the noted measures. Mass Save is an initiative sponsored by Massachusetts natural gas and electric utilities and energy efficiency service providers. Program eligibility requirements and restrictions apply and offers are subject to change or cancellation. Visit <a href="https://MassSave.com/HEA" target="_blank" rel="noopener noreferrer" className="text-brand-orange font-bold hover:underline">MassSave.com/HEA</a> for full details.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
