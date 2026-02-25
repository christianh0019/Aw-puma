import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { SEO } from '../components/SEO';
import { blogPosts } from '../data/blogPosts';

export const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="bg-white pt-32 pb-16 min-h-[60vh] flex flex-col items-center justify-center">
                <h1 className="text-3xl font-serif font-bold text-brand-navy mb-4">Post Not Found</h1>
                <Link to="/blog" className="text-brand-orange hover:underline flex items-center gap-2">
                    <ArrowLeft size={16} /> Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white pt-24 pb-16">
            <SEO
                title={`${post.title} | A.W. Puma Blog`}
                description={post.excerpt}
                canonical={`https://awpumahome.com/blog/${post.slug}`}
                image={post.image}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8 pt-8">
                    <Link to="/blog" className="inline-flex items-center text-brand-orange font-bold hover:underline group">
                        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-navy mb-6 leading-tight">
                    {post.title}
                </h1>

                <div className="flex items-center gap-6 text-sm text-brand-gray-light font-medium mb-12 border-b border-gray-100 pb-8">
                    <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-brand-orange" />
                        {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                        <User size={16} className="text-brand-orange" />
                        {post.author}
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="aspect-[21/9] rounded-sm overflow-hidden shadow-lg bg-gray-100">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg prose-slate max-w-none">
                    {post.content}
                </div>
            </div>
        </div>
    );
};
