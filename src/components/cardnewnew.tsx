import React from 'react';
import { ScrollingEffect, type CardData } from './scrollEffect';
const HorizontalScrollDemo: React.FC = () => {
  // Sample data
  const sampleCards: CardData[] = [
    {
      id: 1,
      title: "Advanced React Patterns",
      description: "Learn about advanced React patterns including compound components, render props, and custom hooks for building scalable applications.",
      category: "Development"
    },
    {
      id: 2,
      title: "UI/UX Design Principles",
      description: "Master the fundamental principles of user interface and user experience design to create intuitive and beautiful applications.",
      category: "Design"
    },
    {
      id: 3,
      title: "TypeScript Best Practices",
      description: "Discover the best practices for using TypeScript in large-scale applications and improve your code quality.",
      category: "Development"
    },
    {
      id: 4,
      title: "Modern CSS Techniques",
      description: "Explore modern CSS features like Grid, Flexbox, and CSS custom properties to create responsive layouts.",
      category: "Frontend"
    },
    {
      id: 5,
      title: "API Design Guidelines",
      description: "Learn how to design RESTful APIs that are scalable, maintainable, and developer-friendly.",
      category: "Backend"
    },
    {
      id: 6,
      title: "Performance Optimization",
      description: "Techniques for optimizing web application performance including code splitting, lazy loading, and caching strategies.",
      category: "Performance"
    },
    {
      id: 7,
      title: "Database Design Patterns",
      description: "Understanding database design patterns and normalization techniques for efficient data storage and retrieval.",
      category: "Database"
    },
    {
      id: 8,
      title: "DevOps Fundamentals",
      description: "Introduction to DevOps practices including CI/CD pipelines, containerization, and infrastructure as code.",
      category: "DevOps"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="col-span-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Courses
            </h1>
            <p className="text-gray-600 text-lg">
              Discover our collection of carefully curated courses designed to help you master modern web development technologies and best practices.
            </p>
          </div>
          
          <div className="col-span-2">
            {/* Scrolling Cards Section */}
            <ScrollingEffect
              cards={sampleCards}
              autoScroll={true}
              scrollSpeed={3000}
              showControls={true}
              gap={6}
            />
          </div>
        </div>

        {/* Alternative Usage Example */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Custom Cards Example</h2>
          <ScrollingEffect autoScroll={false} showControls={true}>
            <div className="flex-shrink-0 w-80 h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Custom Card 1</h3>
              <p>This is a custom card with gradient background.</p>
            </div>
            <div className="flex-shrink-0 w-80 h-48 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Custom Card 2</h3>
              <p>Another custom card with different styling.</p>
            </div>
            <div className="flex-shrink-0 w-80 h-48 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Custom Card 3</h3>
              <p>You can customize these cards however you want.</p>
            </div>
            <div className="flex-shrink-0 w-80 h-48 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Custom Card 4</h3>
              <p>Perfect for showcasing different content types.</p>
            </div>
          </ScrollingEffect>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollDemo;