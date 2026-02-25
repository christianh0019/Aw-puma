import React, { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    image?: string;
    keywords?: string;
}

/**
 * SEO Component (Standard SOP-05 Fallback)
 * Manages document head metadata via useEffect for environments without react-helmet-async.
 */
export const SEO: React.FC<SEOProps> = ({ title, description, canonical, image, keywords }) => {
    useEffect(() => {
        // 1. Update Title
        document.title = title;

        // 2. Update Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', description);

        // 3. Update Meta Keywords
        if (keywords) {
            let metaKeywords = document.querySelector('meta[name="keywords"]');
            if (!metaKeywords) {
                metaKeywords = document.createElement('meta');
                metaKeywords.setAttribute('name', 'keywords');
                document.head.appendChild(metaKeywords);
            }
            metaKeywords.setAttribute('content', keywords);
        }

        // 4. Update Canonical Link
        if (canonical) {
            let linkCanonical = document.querySelector('link[rel="canonical"]');
            if (!linkCanonical) {
                linkCanonical = document.createElement('link');
                linkCanonical.setAttribute('rel', 'canonical');
                document.head.appendChild(linkCanonical);
            }
            linkCanonical.setAttribute('href', canonical);
        }

        // 5. Update OpenGraph Image
        if (image) {
            let metaOgImage = document.querySelector('meta[property="og:image"]');
            if (!metaOgImage) {
                metaOgImage = document.createElement('meta');
                metaOgImage.setAttribute('property', 'og:image');
                document.head.appendChild(metaOgImage);
            }
            metaOgImage.setAttribute('content', image);
        }

        // Cleanup Logic (Optional: Reset Title if component unmounts)
        return () => {
            // document.title = "A.W. Puma | Premium Home Services";
        };
    }, [title, description, canonical, image, keywords]);

    return null;
};
