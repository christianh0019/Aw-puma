import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export const Blog: React.FC = () => {
    return (
        <div className="bg-white pt-24 pb-16">
            <SEO
                title="Home Services Blog | A.W. Puma Home Services"
                description="Expert advice on HVAC, plumbing, energy efficiency, and home maintenance from the pros at A.W. Puma."
                keywords="home services blog, HVAC tips, plumbing advice, Mass Save energy tips, Boston home maintenance"
                canonical="https://awpumahome.com/blog"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-4">The A.W. Puma Blog</h1>
                    <p className="text-xl text-brand-gray max-w-2xl mx-auto">
                        Insights, tips, and news from the front lines of home performance and maintenance.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="flex flex-col bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex items-center gap-4 text-xs text-brand-gray-light mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User size={14} />
                                        {post.author}
                                    </div>
                                </div>
                                <h2 className="text-xl font-bold text-brand-navy mb-4 leading-tight group-hover:text-brand-orange">
                                    {post.title}
                                </h2>
                                <p className="text-brand-gray text-sm line-clamp-2 mb-6">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto">
                                    <Link to={`/blog/${post.slug}`} className="block">
                                        <Button variant="outline-navy" size="sm" className="w-full justify-between group">
                                            Read More
                                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Newsletter Signup */}
                <div className="mt-24 bg-brand-navy rounded-sm p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-serif font-bold mb-4">Subscribe to Our Insights</h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                        Get the latest home maintenance tips and exclusive local rebates delivered to your inbox once a month.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-grow px-4 py-3 rounded-sm text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-orange"
                        />
                        <Button variant="primary">Subscribe</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
