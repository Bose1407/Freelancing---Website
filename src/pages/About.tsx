
import React from 'react';
import { PageTransition, FadeIn } from '@/utils/animations';
import { TeamMember } from '@/types';

const About = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      bio: 'With over 15 years of experience in technology and business leadership, Alex founded Imperium with a vision to transform how businesses leverage technology.',
      image: '/placeholder.svg',
    },
    {
      id: 2,
      name: 'Sarah Lee',
      role: 'CTO',
      bio: 'Sarah leads our technical strategy and innovation, bringing her expertise in software architecture and emerging technologies to drive our solutions forward.',
      image: '/placeholder.svg',
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Design Director',
      bio: 'Michael oversees our design practice, ensuring that all our solutions deliver exceptional user experiences that meet both user needs and business goals.',
      image: '/placeholder.svg',
    },
    {
      id: 4,
      name: 'Jessica Taylor',
      role: 'Marketing Director',
      bio: 'Jessica brings her passion for storytelling and deep understanding of digital marketing to help our clients connect with their audiences effectively.',
      image: '/placeholder.svg',
    },
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-imperial-50">
        <div className="container mx-auto px-6">
          <FadeIn direction="up">
            <span className="inline-block py-1 px-3 bg-imperial-100 text-imperial-800 rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pioneering <span className="text-imperial-600">innovation</span> for the digital age
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl">
              Imperium is a technology company dedicated to helping businesses innovate, transform, and succeed in an increasingly digital world. Our team of experts combines technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent z-10"></div>
                <div className="bg-gray-200 w-full h-full">
                  {/* Placeholder for about image */}
                  <div className="flex items-center justify-center h-full text-gray-400">
                    Company History Image
                  </div>
                </div>
              </div>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn direction="left" delay={0.1}>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Story
                </h2>
              </FadeIn>

              <FadeIn direction="left" delay={0.2}>
                <p className="text-gray-600">
                  Founded in 2018, Imperium began with a simple mission: to make powerful technology accessible to businesses of all sizes. Our founder, Alex Johnson, saw that many companies were struggling to navigate the rapidly evolving digital landscape and wanted to create a partner that could guide them through their transformation journey.
                </p>
              </FadeIn>

              <FadeIn direction="left" delay={0.3}>
                <p className="text-gray-600">
                  What started as a small team of passionate technologists has grown into a full-service technology company with expertise across web development, mobile applications, UI/UX design, and digital marketing. Throughout our growth, we've remained committed to our core values of innovation, quality, and client success.
                </p>
              </FadeIn>

              <FadeIn direction="left" delay={0.4}>
                <p className="text-gray-600">
                  Today, we're proud to work with clients ranging from ambitious startups to established enterprises, helping them harness the power of technology to achieve their business goals and create meaningful connections with their customers.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <FadeIn direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-imperial-600">Values</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at Imperium, from how we work with clients to how we develop our solutions.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We constantly explore new technologies and approaches to solve problems in creative and effective ways.',
              },
              {
                title: 'Quality',
                description: 'We're committed to excellence in everything we do, delivering solutions that exceed expectations and stand the test of time.',
              },
              {
                title: 'Collaboration',
                description: 'We believe in working closely with our clients, building partnerships based on trust, transparency, and shared success.',
              },
              {
                title: 'Integrity',
                description: 'We operate with honesty and ethical standards, doing what's right for our clients, our team, and our community.',
              },
              {
                title: 'Continuous Learning',
                description: 'We invest in growing our knowledge and skills, staying at the forefront of technology trends and best practices.',
              },
              {
                title: 'Client Success',
                description: 'We measure our success by the success of our clients, focusing on delivering real business value through our work.',
              },
            ].map((value, index) => (
              <FadeIn key={index} direction="up" delay={0.1 * index}>
                <div className="bg-white p-6 rounded-xl shadow-sm h-full hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-imperial-600">Team</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts brings together a wealth of experience across technology, design, and business.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <FadeIn key={member.id} direction="up" delay={0.1 * index}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="aspect-square bg-gray-200 relative overflow-hidden">
                    {/* Placeholder for team member image */}
                    <div className="flex items-center justify-center h-full text-gray-400">
                      Team Member Photo
                    </div>
                    <div className="absolute inset-0 bg-imperial-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-imperial-600 text-sm mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
