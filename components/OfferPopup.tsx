import React, { useState, useEffect } from 'react';
import { X, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export const OfferPopup: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if the user has already seen and dismissed the popup this session
        const hasSeenPopup = sessionStorage.getItem('hasSeenOfferPopup');

        if (!hasSeenPopup) {
            // Set a timer to show the popup after 10 seconds
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 10000); // 10 seconds

            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        // Mark as seen so they don't get annoyed if they navigate around
        sessionStorage.setItem('hasSeenOfferPopup', 'true');
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-navy/60 backdrop-blur-sm">
            <div
                className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-10 bg-white/50 hover:bg-white rounded-full p-2 text-gray-500 hover:text-brand-navy transition-colors backdrop-blur-sm shadow-sm"
                    aria-label="Close popup"
                >
                    <X size={20} />
                </button>

                <div className="flex flex-col">
                    {/* Top colored section with Mascot */}
                    <div className="bg-brand-orange px-8 pt-8 pb-4 text-center relative overflow-hidden h-40 flex items-center justify-center">
                        {/* Mascot Image sticking up from bottom of header */}
                        <img
                            src="/images/mascots/mascot-thumbs-up.png"
                            alt="A.W. Puma Mascot"
                            className="absolute bottom-0 h-44 object-contain translate-y-3"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="px-8 pt-6 pb-8 text-center bg-white relative z-10">
                        <div className="inline-flex items-center gap-2 text-brand-orange font-bold uppercase tracking-wider text-sm mb-3">
                            <Tag size={16} /> Exclusive Web Offer
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-brand-navy mb-3">
                            Get 30% Off Any Service
                        </h3>
                        <p className="text-brand-gray mb-6 leading-relaxed">
                            For a limited time, grab 30% off your next repair, maintenance, or installation service when you book today!
                        </p>

                        <Link to="/contact" onClick={handleClose}>
                            <button className="w-full bg-brand-navy hover:bg-[#153760] text-white text-lg font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                Claim My 30% Off Now
                            </button>
                        </Link>

                        <button
                            onClick={handleClose}
                            className="mt-4 text-sm text-gray-400 hover:text-brand-navy transition-colors underline"
                        >
                            No thanks, I don't want savings
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
