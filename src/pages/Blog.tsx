
import React, { useState } from 'react';
import { PageTransition, FadeIn } from '@/utils/animations';
import { BlogPost } from '@/types';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2023',
      excerpt: 'Explore the emerging technologies and approaches that are shaping the future of web development.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: 'Alex Johnson',
      date: 'June 15, 2023',
      image: '/placeholder.svg',
      slug: 'future-web-development-trends',
      tags: ['Web Development', 'Technology Trends'],
    },
    {
      id: 2,
      title: 'How AI is Transforming Mobile App Development',
      excerpt: 'Discover how artificial intelligence is revolutionizing the way mobile applications are built and experienced.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: 'Sarah Lee',
      date: 'May 28, 2023',
      image: '/placeholder.svg',
      slug: 'ai-transforming-mobile-app-development',
      tags: ['Mobile Development', 'AI'],
    },
    {
      id: 3,
      title: 'Essential UI/UX Principles for Creating User-Friendly Apps',
      excerpt: 'Learn the key design principles that can help you create more intuitive and engaging user experiences.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: 'Michael Chen',
      date: 'May 12, 2023',
      image: '/placeholder.svg',
      slug: 'ui-ux-principles-user-friendly-apps',
      tags: ['UI/UX Design', 'User Experience'],
    },
    {
      id: 4,
      title: 'The Business Case for Digital Transformation',
      excerpt: 'Why businesses of all sizes need to embrace digital transformation to remain competitive in today's market.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: 'Jessica Taylor',
      date: 'April 30, 2023',
      image: '/placeholder.svg',
      slug: 'business-case-digital-transformation',
      tags: ['Digital Transformation', 'Business Strategy'],
    },
    {
      id: 5,
      title: 'Choosing the Right Tech Stack for Your Project',
      excerpt: 'A guide to selecting the most appropriate technologies for your specific project needs and goals.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: 'Alex Johnson',
      date: 'April 15, 2023',
      image: '/placeholder.svg',
      slug: 'choosing-right-tech-stack',
      tags: ['Technology', 'Development'],
    },
    {
      id: 6,
      title: 'Securing Your Web Applications: Best Practices',
      excerpt: 'Essential security measures and practices to protect your web applications from common vulnerabilities.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: 'Sarah Lee',
      date: 'March 28, 2023',
      image: '/placeholder.svg',
      slug: 'securing-web-applications-best-practices',
      tags: ['Security', 'Web Development'],
    },
  ];

  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-imperial-50">
        <div className="container mx-auto px-6">
          <FadeIn direction="up">
            <span className="inline-block py-1 px-3 bg-imperial-100 text-imperial-800 rounded-full text-sm font-medium mb-4">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Insights & <span className="text-imperial-600">Updates</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl">
              Stay informed about the latest trends, technologies, and best practices in web development, mobile applications, and digital transformation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <FadeIn direction="right">
                <div className="sticky top-24 space-y-8">
                  {/* Search */}
                  <div className="relative">
                    <label htmlFor="blog-search" className="text-sm font-medium text-gray-700 mb-2 block">
                      Search
                    </label>
                    <div className="relative">
                      <input
                        id="blog-search"
                        type="search"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-imperial-500 focus:border-transparent transition duration-200 outline-none"
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    </div>
                  </div>

                  {/* Categories/Tags */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setSelectedTag(null)}
                        className={`px-3 py-1 text-xs rounded-full ${
                          selectedTag === null 
                            ? 'bg-imperial-600 text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        } transition-colors`}
                      >
                        All
                      </button>
                      {allTags.map(tag => (
                        <button
                          key={tag}
                          onClick={() => setSelectedTag(tag)}
                          className={`px-3 py-1 text-xs rounded-full ${
                            selectedTag === tag 
                              ? 'bg-imperial-600 text-white' 
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          } transition-colors`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Recent Posts */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Recent Posts</h3>
                    <div className="space-y-4">
                      {blogPosts.slice(0, 3).map(post => (
                        <Link key={post.id} to={`/blog/${post.slug}`} className="flex items-start gap-3 group">
                          <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0">
                            {/* Placeholder for post thumbnail */}
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-imperial-600 transition-colors line-clamp-2">
                              {post.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <div className="space-y-10">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post, index) => (
                    <FadeIn key={post.id} direction="up" delay={0.1 * (index % 3)}>
                      <article className="border-b border-gray-100 pb-10 last:border-b-0 last:pb-0">
                        <Link to={`/blog/${post.slug}`} className="block group">
                          <div className="mb-4 relative rounded-xl overflow-hidden">
                            <div className="aspect-[16/9] bg-gray-200">
                              {/* Placeholder for post image */}
                              <div className="flex items-center justify-center h-full text-gray-400">
                                Blog Post Image
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <span>{post.date}</span>
                            <span>|</span>
                            <span>By {post.author}</span>
                          </div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-imperial-600 transition-colors">
                            {post.title}
                          </h2>
                          <p className="text-gray-600 mb-4">{post.excerpt}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map(tag => (
                              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <span className="text-imperial-600 font-medium inline-flex items-center group-hover:underline">
                            Read More
                          </span>
                        </Link>
                      </article>
                    </FadeIn>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-600">No matching posts found.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-imperial-50">
        <div className="container mx-auto px-6 text-center">
          <FadeIn direction="up">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Stay updated with our latest insights, trends, and technology updates delivered directly to your inbox.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-imperial-500 focus:border-transparent transition duration-200 outline-none"
                required
              />
              <button
                type="submit"
                className="bg-imperial-600 hover:bg-imperial-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
};

export default Blog;
