import React from 'react';
import Header from '../components/Header';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

/**
 * Blog Page - Página dedicada al centro de consejos y tips
 */
const BlogPage = () => {
  return (
    <main className="min-h-screen bg-black font-poppins">
      <Header />
      <div className="pt-20">
        <Blog />
      </div>
      <Footer />
    </main>
  );
};

export default BlogPage;
