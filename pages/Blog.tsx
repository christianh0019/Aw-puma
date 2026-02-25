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
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-4">Our Blog</h1>
                    <p className="text-xl text-brand-gray max-w-2xl mx-auto">
                        Insights, tips, and news from the front lines of home performance and maintenance.
                    </p>
                </div>

                {/* Featured Post */}
                {blogPosts.length > 0 && (
                    <div className="mb-16">
                        <article className="flex flex-col lg:flex-row bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="lg:w-1/2 aspect-video lg:aspect-auto overflow-hidden relative">
                                <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={blogPosts[0].image}
                                    alt={blogPosts[0].title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="bg-brand-orange text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                                        Featured
                                    </span>
                                </div>
                            </div>
                            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-4 text-sm text-brand-gray-light mb-6 font-medium">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar size={16} className="text-brand-orange" />
                                        {blogPosts[0].date}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <User size={16} className="text-brand-orange" />
                                        {blogPosts[0].author}
                                    </div>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6 leading-tight group-hover:text-brand-orange transition-colors">
                                    {blogPosts[0].title}
                                </h2>
                                <p className="text-brand-gray text-lg mb-8 leading-relaxed">
                                    {blogPosts[0].excerpt}
                                </p>
                                <div>
                                    <Link to={`/blog/${blogPosts[0].slug}`} className="inline-block">
                                        <Button variant="primary" className="group/btn">
                                            Read Article
                                            <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    </div>
                )}

                {/* Recent Posts Grid */}
                <h3 className="text-2xl font-serif font-bold text-brand-navy mb-8">Recent Posts</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.slice(1).map((post) => (
                        <article key={post.id} className="flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <div className="absolute inset-0 bg-brand-navy/5 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-brand-gray-light mb-4 font-medium">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar size={14} className="text-brand-orange" />
                                        {post.date}
                                    </div>
                                </div>
                                <h2 className="text-xl font-bold text-brand-navy mb-4 leading-tight group-hover:text-brand-orange transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-brand-gray text-sm line-clamp-3 mb-8 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto">
                                    <Link to={`/blog/${post.slug}`} className="block">
                                        <div className="flex items-center text-brand-navy font-bold text-sm group-hover:text-brand-orange transition-colors">
                                            Read More
                                            <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                                        </div>
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
