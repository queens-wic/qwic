import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-purple-200 via-purple-300 to-purple-400 bg-opacity-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-gray-800 font-HeaderFont font-bold text-lg">
              Connect With Us
            </div>
          </div>
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/queenswic/" aria-label="Instagram" className="font-HeaderFont text-gray-600 hover:text-gray-800">Instagram
            </a>
            <a href="https://www.facebook.com/QueensWIC/" aria-label="Facebook" className="font-HeaderFont text-gray-600 hover:text-gray-800">Facebook
            </a>
            <a href="https://www.tiktok.com/@queenswic" aria-label="TikTok" className="font-HeaderFont text-gray-600 hover:text-gray-800">TikTok
            </a>
            <a href="https://ca.linkedin.com/company/queens-qwic" aria-label="LinkedIn" className="font-HeaderFont text-gray-600 hover:text-gray-800">LinkedIn
            </a>
          </div>
        </div>
        <div className="font-HeaderFont mt-8 text-center text-gray-600">
          © 2024 Queen's Women In Computing
        </div>
      </div>
    </footer>
  );
};

export default Footer;
